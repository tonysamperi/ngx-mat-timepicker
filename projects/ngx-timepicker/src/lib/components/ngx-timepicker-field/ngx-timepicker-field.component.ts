import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewEncapsulation
} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatSelectChange} from "@angular/material/select";
//
import {NgxTimepickerService} from "../../services/ngx-timepicker.service";
import {NgxTimepickerClockFace} from "../../models/ngx-timepicker-clock-face.interface";
import {NgxTimepickerPeriods} from "../../models/ngx-timepicker-periods.enum";
import {NgxTimepickerUnits} from "../../models/ngx-timepicker-units.enum";
import {NgxTimepickerTheme} from "../../models/ngx-timepicker-theme.interface";
import {NgxTimepickerAdapter} from "../../services/ngx-timepicker-adapter";
import {NGX_TIMEPICKER_LOCALE} from "../../tokens/time-locale.token";
import {NgxTimepickerUtils} from "../../utils/ngx-timepicker.utils";
//
import {DateTime} from "luxon";
import {Observable, Subject} from "rxjs";
import {distinctUntilChanged, map, takeUntil, tap} from "rxjs/operators";
import {ThemePalette} from "@angular/material/core";

@Component({
    selector: "ngx-timepicker-field",
    templateUrl: "./ngx-timepicker-field.component.html",
    styleUrls: ["./ngx-timepicker-field.component.scss"],
    providers: [
        NgxTimepickerService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NgxTimepickerFieldComponent,
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class NgxTimepickerFieldComponent implements OnInit, OnDestroy, ControlValueAccessor {

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
    set defaultTime(val: string) {
        this._defaultTime = val;
        this._isDefaultTime = !!val;
    }

    get format(): number {
        return this._format;
    }

    @Input()
    set format(value: number) {
        this._format = value === 24 ? 24 : 12;
        this.minHour = this._format === 12 ? 1 : 0;
        this.maxHour = this._format === 12 ? 12 : 23;
        this.hoursList = NgxTimepickerUtils.getHours(this._format);
        const isDynamicallyChanged = value && (this._previousFormat && this._previousFormat !== this._format);

        if (isDynamicallyChanged) {
            this._updateTime(this.timepickerTime);
        }
        this._previousFormat = this._format;
    }

    get max(): string | DateTime {
        return this._max;
    }

    @Input()
    set max(value: string | DateTime) {
        if (typeof value === "string") {
            this._max = NgxTimepickerAdapter.parseTime(value, {locale: this._locale, format: this.format});

            return;
        }
        this._max = value;
    }

    get min(): string | DateTime {
        return this._min;
    }

    @Input()
    set min(value: string | DateTime) {
        if (typeof value === "string") {
            this._min = NgxTimepickerAdapter.parseTime(value, {locale: this._locale, format: this.format});

            return;
        }
        this._min = value;
    }

    @Input()
    cancelBtnTmpl: TemplateRef<Node>;

    @Input()
    clockTheme: NgxTimepickerTheme;

    @Input()
    confirmBtnTmpl: TemplateRef<Node>;

    @Input()
    controlOnly: boolean;

    @Input() disabled: boolean;
    hour$: Observable<NgxTimepickerClockFace>;

    hoursList: NgxTimepickerClockFace[];
    isChangePeriodDisabled: boolean;
    isTimeRangeSet: boolean;
    maxHour = 12;
    minHour = 1;
    minute$: Observable<NgxTimepickerClockFace>;
    minutesList: NgxTimepickerClockFace[];
    period: NgxTimepickerPeriods = NgxTimepickerPeriods.AM;
    periods: NgxTimepickerPeriods[] = [
        NgxTimepickerPeriods.AM,
        NgxTimepickerPeriods.PM
    ];

    @Output() timeChanged = new EventEmitter<string>();
    timepickerTime: string;

    timeUnit = NgxTimepickerUnits;
    @Input() toggleIcon: TemplateRef<HTMLObjectElement>;

    private _color: ThemePalette = "primary";
    private _defaultTime: string;
    private _format = 12;
    private _isDefaultTime: boolean;
    private _isFirstTimeChange: boolean = true;
    private _max: string | DateTime;
    private _min: string | DateTime;
    private _previousFormat: number;
    private _selectedHour: number;
    private _subsCtrl$ = new Subject();

    constructor(private _timepickerService: NgxTimepickerService,
                @Inject(NGX_TIMEPICKER_LOCALE) private _locale: string) {
    }

    changeHour(hour: number): void {
        this._timepickerService.hour = this.hoursList.find(h => h.time === hour);
        this._changeTime();
    }

    changeMinute(minute: number): void {
        this._timepickerService.minute = this.minutesList.find(m => m.time === minute);
        this._changeTime();
    }

    changePeriod(event: MatSelectChange): void {
        this._timepickerService.period = event.value as NgxTimepickerPeriods;
        this._changeTime();
    }

    ngOnDestroy(): void {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }

    ngOnInit() {
        this._initTime(this.defaultTime);

        this.hoursList = NgxTimepickerUtils.getHours(this._format);
        this.minutesList = NgxTimepickerUtils.getMinutes();
        this.isTimeRangeSet = !!(this.min || this.max);

        this.hour$ = this._timepickerService.selectedHour.pipe(
            tap((clockTime: NgxTimepickerClockFace) => this._selectedHour = clockTime.time),
            map(this._changeDefaultTimeValue.bind(this)),
            tap(() => this.isTimeRangeSet && this._updateAvailableMinutes())
        ) as Observable<NgxTimepickerClockFace>;
        this.minute$ = this._timepickerService.selectedMinute.pipe(
            map(this._changeDefaultTimeValue.bind(this)),
            tap(() => this._isFirstTimeChange = false)
        ) as Observable<NgxTimepickerClockFace>;

        if (this.format === 12) {
            this._timepickerService.selectedPeriod.pipe(
                distinctUntilChanged<NgxTimepickerPeriods>(),
                tap((period: NgxTimepickerPeriods) => this.period = period),
                tap(period => this.isChangePeriodDisabled = this._isPeriodDisabled(period)),
                takeUntil(this._subsCtrl$)
            ).subscribe(() => this.isTimeRangeSet && this._updateAvailableTime());
        }

    }

    onTimeSet(time: string): void {
        this._updateTime(time);
        this._emitLocalTimeChange(time);
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(_fn_: any): void {
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    writeValue(val: string): void {
        if (val) {
            this._initTime(val);
        }
        else {
            this._resetTime();
        }
    }

    private _changeDefaultTimeValue(clockFaceTime: NgxTimepickerClockFace): NgxTimepickerClockFace {
        if (!this._isDefaultTime && this._isFirstTimeChange) {
            return {...clockFaceTime, time: null};
        }

        return clockFaceTime;
    }

    private _changeTime(): void {
        const time = this._timepickerService.getFullTime(this.format);
        this.timepickerTime = time;

        this._emitLocalTimeChange(time);
    }

    private _emitLocalTimeChange(time: string): void {
        const localTime = NgxTimepickerAdapter.toLocaleTimeString(time, {format: this.format, locale: this._locale});

        this._onChange(localTime);
        this.timeChanged.emit(localTime);
    }

    private _initTime(time): void {
        const isDefaultTimeAvailable = NgxTimepickerAdapter
            .isTimeAvailable(time, this.min as DateTime, this.max as DateTime, "minutes", null, this.format);
        if (!isDefaultTimeAvailable) {
            if (this.min) {
                this._updateTime(NgxTimepickerAdapter.fromDateTimeToString(this.min as DateTime, this.format));

                return;
            }
            if (this.max) {
                this._updateTime(NgxTimepickerAdapter.fromDateTimeToString(this.max as DateTime, this.format));

                return;
            }
        }
        this._updateTime(time);
    }

    private _isPeriodDisabled(period): boolean {
        return NgxTimepickerUtils.disableHours(NgxTimepickerUtils.getHours(12), {
            min: this.min as DateTime,
            max: this.max as DateTime,
            format: 12,
            period: period === NgxTimepickerPeriods.AM ? NgxTimepickerPeriods.PM : NgxTimepickerPeriods.AM
        }).every(time => time.disabled);
    }

    private _onChange: (value: string) => void = () => {
    }

    private _resetTime(): void {
        this._timepickerService.hour = {angle: 0, time: null};
        this._timepickerService.minute = {angle: 0, time: null};
    }

    private _updateAvailableHours(): void {
        this.hoursList = NgxTimepickerUtils.disableHours(this.hoursList, {
            min: this.min as DateTime,
            max: this.max as DateTime,
            format: this.format,
            period: this.period
        });
    }

    private _updateAvailableMinutes(): void {
        this.minutesList = NgxTimepickerUtils.disableMinutes(this.minutesList, this._selectedHour, {
            min: this.min as DateTime,
            max: this.max as DateTime,
            format: this.format,
            period: this.period
        });
    }

    private _updateAvailableTime(): void {
        this._updateAvailableHours();
        if (this._selectedHour) {
            this._updateAvailableMinutes();
        }
    }

    private _updateTime(time: string): void {
        if (time) {
            const formattedTime = NgxTimepickerAdapter.formatTime(time, {locale: this._locale, format: this.format});
            this._timepickerService.setDefaultTimeIfAvailable(formattedTime, this.min as DateTime, this.max as DateTime, this.format);
            this.timepickerTime = formattedTime;
        }
    }

}
