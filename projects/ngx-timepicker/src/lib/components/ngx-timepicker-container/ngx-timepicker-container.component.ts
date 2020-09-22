import {Component, HostListener, Inject, Input, OnDestroy, OnInit, TemplateRef} from "@angular/core";
import {animate, AnimationEvent, style, transition, trigger} from "@angular/animations";
import {ThemePalette} from "@angular/material/core";
//
import {NgxTimepickerClockFace} from "../../models/ngx-timepicker-clock-face.interface";
import {NgxTimepickerPeriods} from "../../models/ngx-timepicker-periods.enum";
import {NgxTimepickerUnits} from "../../models/ngx-timepicker-units.enum";
import {NgxTimepickerService} from "../../services/ngx-timepicker.service";
import {NgxTimepickerAdapter} from "../../services/ngx-timepicker-adapter";
import {NgxTimepickerRef} from "../../models/timepicker-ref.interface";
import {NgxTimepickerConfig} from "../../models/ngx-timepicker-config.interface";
import {NgxTimepickerEventService} from "../../services/ngx-timepicker-event.service";
import {NgxTimepickerTheme} from "../../models/ngx-timepicker-theme.interface";
import {NGX_TIMEPICKER_LOCALE} from "../../tokens/time-locale.token";
//
import {DateTime} from "luxon";
import {Observable, Subject} from "rxjs";
import {shareReplay, takeUntil} from "rxjs/operators";

export enum NgxTimepickerAnimationState {
    ENTER = "enter",
    LEAVE = "leave"
}

@Component({
    selector: "ngx-timepicker-container",
    templateUrl: "./ngx-timepicker-container.component.html",
    styleUrls: ["./ngx-timepicker-container.component.scss"],
    animations: [
        trigger("timepicker", [
            transition(`* => ${NgxTimepickerAnimationState.ENTER}`, [
                style({transform: "translateY(-30%)"}),
                animate("0.2s ease-out", style({transform: "translateY(0)"}))
            ]),
            transition(`${NgxTimepickerAnimationState.ENTER} => ${NgxTimepickerAnimationState.LEAVE}`, [
                style({transform: "translateY(0)", opacity: 1}),
                animate("0.2s ease-out", style({transform: "translateY(-30%)", opacity: 0}))
            ])
        ])
    ],
    providers: [NgxTimepickerService]
})
export class NgxTimepickerContainerComponent implements OnInit, OnDestroy, NgxTimepickerConfig {

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

    activeTimeUnit = NgxTimepickerUnits.HOUR;

    animationState: NgxTimepickerAnimationState;
    appendToInput: boolean;
    cancelBtnTmpl: TemplateRef<Node>;
    confirmBtnTmpl: TemplateRef<Node>;
    disableAnimation: boolean;
    disabled: boolean;
    editableHintTmpl: TemplateRef<Node>;
    enableKeyboardInput: boolean;
    format: number;
    hoursOnly: boolean;
    inputElement: any;
    maxTime: DateTime;
    minTime: DateTime;
    minutesGap: number;
    preventOverlayClick: boolean;
    selectedHour: Observable<NgxTimepickerClockFace>;
    selectedMinute: Observable<NgxTimepickerClockFace>;
    selectedPeriod: Observable<NgxTimepickerPeriods>;
    theme: NgxTimepickerTheme;
    time: string;
    timepickerBaseRef: NgxTimepickerRef;
    timepickerClass: string;
    timeUnit = NgxTimepickerUnits;

    private _color: ThemePalette = "primary";
    private _defaultTime: string;
    private _subsCtrl$ = new Subject();

    constructor(private _timepickerSrv: NgxTimepickerService,
                private _eventSrv: NgxTimepickerEventService,
                @Inject(NGX_TIMEPICKER_LOCALE) private _locale: string) {
    }

    animationDone(event: AnimationEvent): void {
        if (event.phaseName === "done" && event.toState === NgxTimepickerAnimationState.LEAVE) {
            this.timepickerBaseRef.close();
        }
    }

    changePeriod(period: NgxTimepickerPeriods): void {
        this._timepickerSrv.period = period;
        this._onTimeChange();
    }

    changeTimeUnit(unit: NgxTimepickerUnits): void {
        this.activeTimeUnit = unit;
    }

    close(): void {
        if (this.disableAnimation) {
            this.timepickerBaseRef.close();

            return;
        }

        this.animationState = NgxTimepickerAnimationState.LEAVE;
    }

    ngOnDestroy(): void {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }

    ngOnInit(): void {

        this.animationState = !this.disableAnimation && NgxTimepickerAnimationState.ENTER;

        this._defineTime();

        this.selectedHour = this._timepickerSrv.selectedHour
            .pipe(shareReplay({bufferSize: 1, refCount: true}));

        this.selectedMinute = this._timepickerSrv.selectedMinute
            .pipe(shareReplay({bufferSize: 1, refCount: true}));

        this.selectedPeriod = this._timepickerSrv.selectedPeriod
            .pipe(shareReplay({bufferSize: 1, refCount: true}));

        this.timepickerBaseRef.timeUpdated.pipe(takeUntil(this._subsCtrl$))
            .subscribe(this._setDefaultTime.bind(this));
    }

    onHourChange(hour: NgxTimepickerClockFace): void {
        this._timepickerSrv.hour = hour;
        this._onTimeChange();
    }

    onHourSelected(hour: number): void {
        if (!this.hoursOnly) {
            this.changeTimeUnit(NgxTimepickerUnits.MINUTE);
        }
        this.timepickerBaseRef.hourSelected.next(hour);
    }

    @HostListener("keydown", ["$event"])
    onKeydown(e: any): void {
        this._eventSrv.dispatchEvent(e);
        e.stopPropagation();
    }

    onMinuteChange(minute: NgxTimepickerClockFace): void {
        this._timepickerSrv.minute = minute;
        this._onTimeChange();
    }

    setTime(): void {
        this.timepickerBaseRef.timeSet.next(this._timepickerSrv.getFullTime(this.format));
        this.close();
    }

    private _defineTime(): void {
        const minTime = this.minTime;

        if (minTime && (!this.time && !this.defaultTime)) {
            const time = NgxTimepickerAdapter.fromDateTimeToString(minTime, this.format);

            this._setDefaultTime(time);
        }
    }

    private _onTimeChange(): void {
        const time = NgxTimepickerAdapter.toLocaleTimeString(this._timepickerSrv.getFullTime(this.format), {
            locale: this._locale,
            format: this.format
        });

        this.timepickerBaseRef.timeChanged.emit(time);
    }

    private _setDefaultTime(time: string): void {
        this._timepickerSrv.setDefaultTimeIfAvailable(
            time, this.minTime, this.maxTime, this.format, this.minutesGap);
    }

}
