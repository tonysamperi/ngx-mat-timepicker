import {Component, HostListener, Inject, Input, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ThemePalette} from "@angular/material/core";
//
import {NgxMatTimepickerConfig} from "../../models/ngx-mat-timepicker-config.interface";
import {NGX_MAT_TIMEPICKER_LOCALE} from "../../tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerService} from "../../services/ngx-mat-timepicker.service";
import {NgxMatTimepickerEventService} from "../../services/ngx-mat-timepicker-event.service";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerAdapter} from "../../services/ngx-mat-timepicker-adapter";
//
import {Observable, Subject} from "rxjs";
import {shareReplay, takeUntil} from "rxjs/operators";

@Component({
    selector: "ngx-mat-timepicker-dialog",
    styleUrls: ["./ngx-mat-timepicker-dialog.component.scss"],
    templateUrl: "./ngx-mat-timepicker-dialog.component.html",
    encapsulation: ViewEncapsulation.None
})
export class NgxMatTimepickerDialogComponent implements OnInit, OnDestroy {

    @Input()
    set color(newValue: ThemePalette) {
        this._color = newValue;
    }

    get color(): ThemePalette {
        return this._color;
    }

    get defaultTime(): string {
        return this._defaultTime;
    }

    @Input()
    set defaultTime(time: string) {
        this._defaultTime = time;
        this._setDefaultTime(time);
    }

    activeTimeUnit: NgxMatTimepickerUnits = NgxMatTimepickerUnits.HOUR;
    selectedHour: Observable<NgxMatTimepickerClockFace>;
    selectedMinute: Observable<NgxMatTimepickerClockFace>;
    selectedPeriod: Observable<NgxMatTimepickerPeriods>;
    timeUnit: typeof NgxMatTimepickerUnits = NgxMatTimepickerUnits;

    private _color: ThemePalette = "primary";
    private _defaultTime: string;
    private _subsCtrl$ = new Subject();

    constructor(@Inject(MAT_DIALOG_DATA) public data: NgxMatTimepickerConfig,
                protected _dialogRef: MatDialogRef<NgxMatTimepickerDialogComponent>,
                private _timepickerSrv: NgxMatTimepickerService,
                private _eventSrv: NgxMatTimepickerEventService,
                @Inject(NGX_MAT_TIMEPICKER_LOCALE) private _locale: string) {

        this.color = data.color;
        this.defaultTime = data.defaultTime;
    }

    changePeriod(period: NgxMatTimepickerPeriods): void {
        this._timepickerSrv.period = period;
        this._onTimeChange();
    }

    changeTimeUnit(unit: NgxMatTimepickerUnits): void {
        this.activeTimeUnit = unit;
    }

    close(): void {
        // this.data.timepickerBaseRef.close();
        this._dialogRef.close();
    }

    ngOnDestroy(): void {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }

    ngOnInit(): void {
        this._defineTime();
        this.selectedHour = this._timepickerSrv.selectedHour
        .pipe(shareReplay({bufferSize: 1, refCount: true}));
        this.selectedMinute = this._timepickerSrv.selectedMinute
        .pipe(shareReplay({bufferSize: 1, refCount: true}));
        this.selectedPeriod = this._timepickerSrv.selectedPeriod
        .pipe(shareReplay({bufferSize: 1, refCount: true}));
        this.data.timepickerBaseRef.timeUpdated.pipe(takeUntil(this._subsCtrl$))
        .subscribe(this._setDefaultTime.bind(this));
    }

    onHourChange(hour: NgxMatTimepickerClockFace): void {
        this._timepickerSrv.hour = hour;
        this._onTimeChange();
    }

    onHourSelected(hour: number): void {
        if (!this.data.hoursOnly) {
            this.changeTimeUnit(NgxMatTimepickerUnits.MINUTE);
        }
        this.data.timepickerBaseRef.hourSelected.next(hour);
    }

    @HostListener("keydown", ["$event"])
    onKeydown(e: any): void {
        this._eventSrv.dispatchEvent(e);
        e.stopPropagation();
    }

    onMinuteChange(minute: NgxMatTimepickerClockFace): void {
        this._timepickerSrv.minute = minute;
        this._onTimeChange();
    }

    setTime(): void {
        this.data.timepickerBaseRef.timeSet.next(this._timepickerSrv.getFullTime(this.data.format));
        this.close();
    }

    private _defineTime(): void {
        const minTime = this.data.minTime;

        if (minTime && (!this.data.time && !this.data.defaultTime)) {
            const time = NgxMatTimepickerAdapter.fromDateTimeToString(minTime, this.data.format);

            this._setDefaultTime(time);
        }
    }

    private _onTimeChange(): void {
        const time = NgxMatTimepickerAdapter.toLocaleTimeString(this._timepickerSrv.getFullTime(this.data.format), {
            locale: this._locale,
            format: this.data.format
        });

        this.data.timepickerBaseRef.timeChanged.emit(time);
    }

    private _setDefaultTime(time: string): void {
        this._timepickerSrv.setDefaultTimeIfAvailable(
            time, this.data.minTime, this.data.maxTime, this.data.format, this.data.minutesGap);
    }

}
