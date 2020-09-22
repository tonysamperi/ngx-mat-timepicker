import {
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges
} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
//
import {NgxTimepickerComponent} from "../components/ngx-timepicker/ngx-timepicker.component";
import {NgxTimepickerAdapter} from "../services/ngx-timepicker-adapter";
import {NGX_TIMEPICKER_LOCALE} from "../tokens/time-locale.token";
//
import {DateTime} from "luxon";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Directive({
    selector: "[ngxTimepicker]",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NgxTimepickerDirective,
            multi: true
        }
    ],
    // tslint:disable-next-line:no-host-metadata-property
    host: {
        "[disabled]": "disabled",
        // "(change)": "updateValue($event.target.value)",
        "(blur)": "onTouched()",
    },
})
export class NgxTimepickerDirective implements ControlValueAccessor, OnDestroy, OnChanges {

    get element(): any {
        return this._elementRef && this._elementRef.nativeElement;
    }

    get format(): number {
        return this._format;
    }

    @Input()
    set format(value: number) {
        this._format = value === 24 ? 24 : 12;
        const isDynamicallyChanged = value && (this._previousFormat && this._previousFormat !== this._format);

        if (isDynamicallyChanged) {
            this.value = this._value;
            this._timepicker.updateTime(this._value);
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

    @Input("ngxTimepicker")
    set timepicker(picker: NgxTimepickerComponent) {
        this._registerTimepicker(picker);
    }

    get value(): string {
        if (!this._value) {
            return "";
        }

        return NgxTimepickerAdapter.toLocaleTimeString(this._value, {format: this.format, locale: this._locale});
    }

    @Input()
    set value(value: string) {
        if (!value) {
            this._value = "";
            this._updateInputValue();

            return;
        }
        const time = NgxTimepickerAdapter.formatTime(value, {locale: this._locale, format: this.format});
        const isAvailable = NgxTimepickerAdapter.isTimeAvailable(
            time,
            this._min as DateTime,
            this._max as DateTime,
            "minutes",
            this._timepicker.minutesGap,
            this._format
        );

        if (isAvailable) {
            this._value = time;
            this._updateInputValue();

            return;
        }
        console.warn("Selected time doesn't match min or max value");
    }

    private set _defaultTime(time: string) {
        this._timepicker.defaultTime = NgxTimepickerAdapter.formatTime(time, {
            locale: this._locale,
            format: this.format
        });
    }

    @Input()
    disableClick: boolean;

    @Input()
    disabled: boolean;

    private _format = 12;
    private _max: string | DateTime;
    private _min: string | DateTime;
    private _previousFormat: number;
    private _subsCtrl$: Subject<void> = new Subject<void>();
    private _timepicker: NgxTimepickerComponent;
    private _value: string = "";

    constructor(private _elementRef: ElementRef,
                @Inject(NGX_TIMEPICKER_LOCALE) private _locale: string) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.value && changes.value.currentValue) {
            this._defaultTime = changes.value.currentValue;
        }
    }

    ngOnDestroy() {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }

    @HostListener("click", ["$event"])
    onClick(event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    }

    onTouched = () => {
    }

    registerOnChange(fn: (value: any) => void): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    @HostListener("change")
    updateValue(value: string) {
        this.value = value;
        this._onChange(value);
    }

    writeValue(value: string): void {
        this.value = value;
        if (value) {
            this._defaultTime = value;
        }
    }

    private _onChange: (value: any) => void = () => {
    }

    private _registerTimepicker(picker: NgxTimepickerComponent): void {
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this._timepicker.timeSet
                .pipe(takeUntil(this._subsCtrl$))
                .subscribe((time: string) => {
                    this.value = time;
                    this._onChange(this.value);
                    this.onTouched();
                    this._defaultTime = this._value;
                });
        }
        else {
            throw new Error("NgxTimepickerComponent is not defined." +
                " Please make sure you passed the timepicker to ngxTimepicker directive");
        }
    }

    private _updateInputValue(): void {
        this._elementRef.nativeElement.value = this.value;
    }

}

