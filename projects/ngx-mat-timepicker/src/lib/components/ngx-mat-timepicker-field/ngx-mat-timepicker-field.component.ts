import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewEncapsulation
} from "@angular/core";
import {NgClass, NgIf, NgFor, NgTemplateOutlet} from "@angular/common";
import {ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule} from "@angular/forms";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";
import {ThemePalette, MatOptionModule} from "@angular/material/core";
import {FloatLabelType, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
//
import {NgxMatTimepickerLocaleService} from "../../services/ngx-mat-timepicker-locale.service";
import {NgxMatTimepickerFormatType} from "../../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerService} from "../../services/ngx-mat-timepicker.service";
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerAdapter} from "../../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
import {NgxMatTimepickerComponent} from "../ngx-mat-timepicker/ngx-mat-timepicker.component";
import {NgxMatTimepickerToggleIconDirective} from "../../directives/ngx-mat-timepicker-toggle-icon.directive";
import {NgxMatTimepickerToggleComponent} from "../ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component";
import {NgxMatTimepickerControlComponent} from "../ngx-mat-timepicker-control/ngx-mat-timepicker-control.component";
//
import {DateTime} from "ts-luxon";
import {BehaviorSubject, Subject} from "rxjs";
import {distinctUntilChanged, map, takeUntil, tap} from "rxjs/operators";

@Component({
    selector: "ngx-mat-timepicker-field",
    templateUrl: "./ngx-mat-timepicker-field.component.html",
    styleUrls: ["./ngx-mat-timepicker-field.component.scss"],
    providers: [
        NgxMatTimepickerService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NgxMatTimepickerFieldComponent,
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        NgClass,
        NgxMatTimepickerControlComponent,
        NgIf,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        NgFor,
        MatOptionModule,
        NgxMatTimepickerToggleComponent,
        NgxMatTimepickerToggleIconDirective,
        NgTemplateOutlet,
        NgxMatTimepickerComponent,
        MatIconModule
    ]
})
export class NgxMatTimepickerFieldComponent implements OnInit, OnDestroy, ControlValueAccessor {

    get color(): ThemePalette {
        return this._color;
    }

    @Input()
    set color(newValue: ThemePalette) {
        this._color = newValue;
    }

    get defaultTime(): string {
        return this._defaultTime;
    }

    @Input()
    set defaultTime(val: string) {
        this._defaultTime = val;
        this._isDefaultTime = !!val;
    }

    get floatLabel(): FloatLabelType {
        return this._floatLabel;
    }

    @Input()
    set floatLabel(newValue: FloatLabelType) {
        this._floatLabel = newValue;
    }

    get format(): NgxMatTimepickerFormatType {
        return this._format;
    }

    @Input()
    set format(value: NgxMatTimepickerFormatType) {
        if (NgxMatTimepickerAdapter.isTwentyFour(value)) {
            this._format = 24;
            this.minHour = 0;
            this.maxHour = 23;
        }
        else {
            this._format = 12;
            this.minHour = 1;
            this.maxHour = 12;
        }
        this.hoursList = NgxMatTimepickerUtils.getHours(this._format);
        const isDynamicallyChanged = value && (this._previousFormat && this._previousFormat !== this._format);

        if (isDynamicallyChanged) {
            this._updateTime(this.timepickerTime);
        }
        this._previousFormat = this._format;
    }

    get max(): DateTime {
        return this._max;
    }

    @Input()
    set max(value: string | DateTime) {
        if (typeof value === "string") {
            this._max = NgxMatTimepickerAdapter.parseTime(value, {locale: this._locale, format: this.format});

            return;
        }
        this._max = value;
    }

    get min(): DateTime {
        return this._min;
    }

    @Input()
    set min(value: string | DateTime) {
        if (typeof value === "string") {
            this._min = NgxMatTimepickerAdapter.parseTime(value, {locale: this._locale, format: this.format});

            return;
        }
        this._min = value;
    }

    private get _locale(): string {
        return this._timepickerLocaleSrv.locale;
    }

    @Input() cancelBtnTmpl: TemplateRef<Node>;

    @Input() confirmBtnTmpl: TemplateRef<Node>;

    @Input() controlOnly: boolean;

    @Input() disabled: boolean;

    hour$: BehaviorSubject<NgxMatTimepickerClockFace> = new BehaviorSubject<NgxMatTimepickerClockFace>(void 0);

    hoursList: NgxMatTimepickerClockFace[];
    isChangePeriodDisabled: boolean;
    isTimeRangeSet: boolean;
    maxHour = 12;
    minHour = 1;
    minute$: BehaviorSubject<NgxMatTimepickerClockFace> = new BehaviorSubject<NgxMatTimepickerClockFace>(void 0);
    minutesList: NgxMatTimepickerClockFace[];
    period: NgxMatTimepickerPeriods = NgxMatTimepickerPeriods.AM;
    periods: NgxMatTimepickerPeriods[] = [
        NgxMatTimepickerPeriods.AM,
        NgxMatTimepickerPeriods.PM
    ];

    @Output() timeChanged = new EventEmitter<string>();
    timepickerTime: string;

    timeUnit = NgxMatTimepickerUnits;
    @Input() toggleIcon: TemplateRef<HTMLObjectElement>;

    private _color: ThemePalette = "primary";
    private _defaultTime: string;
    private _floatLabel: FloatLabelType = "auto";
    private _format: NgxMatTimepickerFormatType = 12;
    private _isDefaultTime: boolean;
    private _isFirstTimeChange: boolean = true;
    private _max: DateTime;
    private _min: DateTime;
    private _previousFormat: number;
    private _selectedHour: number;
    private _subsCtrl$: Subject<void> = new Subject<void>();

    constructor(private _timepickerService: NgxMatTimepickerService,
                private _timepickerLocaleSrv: NgxMatTimepickerLocaleService) {
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
        this._timepickerService.period = event.value as NgxMatTimepickerPeriods;
        this._changeTime();
    }

    ngOnDestroy(): void {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }

    ngOnInit() {
        this._initTime(this.defaultTime);

        this.hoursList = NgxMatTimepickerUtils.getHours(this._format);
        this.minutesList = NgxMatTimepickerUtils.getMinutes();
        this.isTimeRangeSet = !!(this.min || this.max);

        this._timepickerService.selectedHour.pipe(
                tap((clockTime: NgxMatTimepickerClockFace) => this._selectedHour = clockTime?.time),
                map(this._changeDefaultTimeValue.bind(this)),
                tap(() => this.isTimeRangeSet && this._updateAvailableMinutes())
            )
            .subscribe({
                next: (v: NgxMatTimepickerClockFace) => this.hour$.next(v)
            });
        this._timepickerService.selectedMinute.pipe(
                map(this._changeDefaultTimeValue.bind(this)),
                tap(() => this._isFirstTimeChange = false)
            )
            .subscribe({
                next: (v: NgxMatTimepickerClockFace) => this.minute$.next(v)
            });

        // Selected period can only change when format is 12
        if (this.format === 12) {
            this._timepickerService.selectedPeriod.pipe(
                distinctUntilChanged<NgxMatTimepickerPeriods>(),
                tap((period: NgxMatTimepickerPeriods) => this.period = period),
                tap(period => this.isChangePeriodDisabled = this._isPeriodDisabled(period)),
                takeUntil(this._subsCtrl$)
            ).subscribe(() => this.isTimeRangeSet && this._updateAvailableTime());
        }
        else {
            // But we still need to run this once :) see #108
            this.isTimeRangeSet && this._updateAvailableTime();
        }

    }

    onTimeSet(time: string): void {
        this._updateTime(time);
        this._emitLocalTimeChange(time);
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
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

    private _changeDefaultTimeValue(clockFaceTime: NgxMatTimepickerClockFace): NgxMatTimepickerClockFace {
        if (!this._isDefaultTime && this._isFirstTimeChange) {
            return {...clockFaceTime, time: null};
        }

        return clockFaceTime;
    }

    private _changeTime(): void {
        if (!isNaN(this.hour$.getValue()?.time) && !isNaN(this.minute$.getValue()?.time)) {
            const time = this._timepickerService.getFullTime(this.format);
            this.timepickerTime = time;
            this._emitLocalTimeChange(time);
        }
    }

    private _emitLocalTimeChange(time: string): void {
        const localTime = NgxMatTimepickerAdapter.toLocaleTimeString(time, {format: this.format, locale: this._locale});

        this._onChange(localTime);
        this._onTouched(localTime);
        this.timeChanged.emit(localTime);
    }

    private _initTime(time: string): void {
        const isDefaultTimeAvailable = NgxMatTimepickerAdapter
            .isTimeAvailable(time, this.min as DateTime, this.max as DateTime, "minutes", null, this.format);
        if (!isDefaultTimeAvailable) {
            if (this.min) {
                this._updateTime(NgxMatTimepickerAdapter.fromDateTimeToString(this.min as DateTime, this.format));

                return;
            }
            if (this.max) {
                this._updateTime(NgxMatTimepickerAdapter.fromDateTimeToString(this.max as DateTime, this.format));

                return;
            }
        }
        this._updateTime(time);
    }

    private _isPeriodDisabled(period: NgxMatTimepickerPeriods): boolean {
        return NgxMatTimepickerUtils.disableHours(NgxMatTimepickerUtils.getHours(12), {
            min: this.min as DateTime,
            max: this.max as DateTime,
            format: 12,
            period: period === NgxMatTimepickerPeriods.AM ? NgxMatTimepickerPeriods.PM : NgxMatTimepickerPeriods.AM
        }).every(time => time.disabled);
    }

    private _onChange: (value: string) => void = () => {
    };

    private _onTouched: (value: string) => void = () => {
    };

    private _resetTime(): void {
        this._timepickerService.hour = {angle: 0, time: null};
        this._timepickerService.minute = {angle: 0, time: null};
    }

    private _updateAvailableHours(): void {
        this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
            min: this.min as DateTime,
            max: this.max as DateTime,
            format: this.format,
            period: this.period
        });
    }

    private _updateAvailableMinutes(): void {
        this.minutesList = NgxMatTimepickerUtils.disableMinutes(this.minutesList, this._selectedHour, {
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
            const formattedTime = NgxMatTimepickerAdapter.formatTime(time, {locale: this._locale, format: this.format});
            this._timepickerService.setDefaultTimeIfAvailable(formattedTime, this.min as DateTime, this.max as DateTime, this.format);
            this.timepickerTime = formattedTime;
        }
    }

}
