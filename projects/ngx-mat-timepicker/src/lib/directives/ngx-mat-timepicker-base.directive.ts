import {Directive, HostListener, inject, Input, OnDestroy, OnInit} from "@angular/core";
import {Observable, Subject, shareReplay, takeUntil} from "rxjs";
//
import {NgxMatTimepickerUnits} from "../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerClockFace} from "../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerPeriods} from "../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerConfig} from "../models/ngx-mat-timepicker-config.interface";
import {NgxMatTimepickerEventService} from "../services/ngx-mat-timepicker-event.service";
import {NgxMatTimepickerLocaleService} from "../services/ngx-mat-timepicker-locale.service";
import {NgxMatTimepickerAdapter} from "../services/ngx-mat-timepicker-adapter";
import {NGX_MAT_TIMEPICKER_CONFIG} from "../tokens/ngx-mat-timepicker-config.token";

@Directive({
    selector: "[ngxMatTimepickerBase]"
})
export class NgxMatTimepickerBaseDirective implements OnInit, OnDestroy {


    @Input()
    set defaultTime(time: string) {
        this._defaultTime = time;
        this._setDefaultTime(time);
    }

    get defaultTime(): string {
        return this._defaultTime;
    }

    private get _locale(): string {
        return this._timepickerLocaleSrv.locale;
    }

    activeTimeUnit: NgxMatTimepickerUnits = NgxMatTimepickerUnits.HOUR;
    data: NgxMatTimepickerConfig = inject(NGX_MAT_TIMEPICKER_CONFIG);
    selectedHour: Observable<NgxMatTimepickerClockFace>;
    selectedMinute: Observable<NgxMatTimepickerClockFace>;
    selectedPeriod: Observable<NgxMatTimepickerPeriods>;
    timeUnit: typeof NgxMatTimepickerUnits = NgxMatTimepickerUnits;

    protected _defaultTime: string = this.data.defaultTime;
    protected _eventSrv: NgxMatTimepickerEventService = inject(NgxMatTimepickerEventService);
    protected _subsCtrl$: Subject<void> = new Subject<void>();
    protected _timepickerLocaleSrv: NgxMatTimepickerLocaleService = inject(NgxMatTimepickerLocaleService);
    protected _timepickerSrv = this.data.timepickerState;

    constructor() {
    }

    changePeriod(period: NgxMatTimepickerPeriods): void {
        this._timepickerSrv.period = period;
        this._onTimeChange();
    }

    changeTimeUnit(unit: NgxMatTimepickerUnits): void {
        this.activeTimeUnit = unit;
    }

    close(): void {
        this.data.timepickerBaseRef.close();
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
            .subscribe({
                next: (v: string) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    v && this._setDefaultTime(v);
                }
            });
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
        this.data.timepickerBaseRef.timeSet.emit(this._timepickerSrv.getFullTime(this.data.format));
        this.close();
    }

    protected _defineTime(): void {
        this._timepickerSrv.setInitialTime(
            this.data.time || this.data.defaultTime,
            this.data.minTime,
            this.data.maxTime,
            this.data.format,
            this.data.minutesGap
        );
    }

    protected _onTimeChange(): void {
        const time = NgxMatTimepickerAdapter.toLocaleTimeString(this._timepickerSrv.getFullTime(this.data.format), {
            locale: this._locale,
            format: this.data.format
        });

        this.data.timepickerBaseRef.timeChanged.emit(time);
    }

    protected _setDefaultTime(time: string): void {
        this._timepickerSrv.setDefaultTimeIfAvailable(
            time, this.data.minTime, this.data.maxTime, this.data.format, this.data.minutesGap);
    }
}
