import {
    Directive,
    ElementRef,
    HostListener,
    HostBinding,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    Optional
} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {CdkOverlayOrigin} from "@angular/cdk/overlay";
import {MatFormField} from "@angular/material/form-field";
//
import {NgxMatTimepickerComponent} from "../components/ngx-mat-timepicker/ngx-mat-timepicker.component";
import {NgxMatTimepickerFormatType} from "../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerAdapter} from "../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerLocaleService} from "../services/ngx-mat-timepicker-locale.service";
//
import {Subject, takeUntil} from "rxjs";
import {DateTime} from "ts-luxon";

@Directive({
    selector: "[ngxMatTimepicker]",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NgxMatTimepickerDirective,
            multi: true
        }
    ],
    // tslint:disable-next-line:no-host-metadata-property
    host: {
        "[disabled]": "disabled",
        "(blur)": "onTouched()"
    },
    standalone: true
})
export class NgxMatTimepickerDirective implements ControlValueAccessor, OnDestroy, OnChanges {

    get element(): HTMLElement {
        return this._elementRef && this._elementRef.nativeElement;
    }

    get format(): NgxMatTimepickerFormatType {
        return this._format;
    }

    @Input()
    set format(value: number) {
        this._format = NgxMatTimepickerAdapter.isTwentyFour(+value as NgxMatTimepickerFormatType) ? 24 : 12;
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
            this._max = NgxMatTimepickerAdapter.parseTime(value, {locale: this._locale, format: this.format});

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
            this._min = NgxMatTimepickerAdapter.parseTime(value, {locale: this._locale, format: this.format});

            return;
        }
        this._min = value;
    }

    @Input("ngxMatTimepicker")
    set timepicker(picker: NgxMatTimepickerComponent) {
        this._registerTimepicker(picker);
    }

    get value(): string {
        if (!this._value) {
            return "";
        }

        return NgxMatTimepickerAdapter.toLocaleTimeString(this._value, {format: this.format, locale: this._locale});
    }

    @Input()
    set value(value: string) {
        if (!value) {
            this._value = "";
            this._updateInputValue();

            return;
        }
        const time = NgxMatTimepickerAdapter.formatTime(value, {locale: this._locale, format: this.format});
        const isAvailable = NgxMatTimepickerAdapter.isTimeAvailable(
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
        this._timepicker.defaultTime = NgxMatTimepickerAdapter.formatTime(time, {
            locale: this._locale,
            format: this.format
        });
    }

    private get _locale(): string {
        return this._timepickerLocaleSrv.locale;
    }

    @HostBinding("attr.cdkOverlayOrigin") cdkOverlayOrigin: CdkOverlayOrigin =
        new CdkOverlayOrigin(this._matFormField ? this._matFormField.getConnectedOverlayOrigin() : this._elementRef);
    @Input() disableClick: boolean;
    @Input() disabled: boolean;

    private _format: NgxMatTimepickerFormatType = 12;
    private _max: string | DateTime;
    private _min: string | DateTime;
    private _previousFormat: number;
    private _subsCtrl$: Subject<void> = new Subject<void>();
    private _timepicker: NgxMatTimepickerComponent;
    private _value: string = "";

    constructor(private _elementRef: ElementRef,
                private _timepickerLocaleSrv: NgxMatTimepickerLocaleService,
                @Optional() @Inject(MatFormField) private _matFormField: MatFormField) {
    }

    ngOnChanges(changes: SimpleChanges) {
        // tslint:disable-next-line:no-string-literal
        const vChanges = changes["value"];
        if (vChanges && vChanges.currentValue) {
            this._defaultTime = vChanges.currentValue;
        }
    }

    ngOnDestroy() {
        this._unregisterTimepicker();
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }

    @HostListener("click", ["$event"])
    onClick(event: MouseEvent) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    }

    onTouched = () => {
    };

    registerOnChange(fn: (value: any) => void): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    @HostListener("change", ["$event"])
    updateValue(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
        this._onChange(this.value);
    }

    writeValue(value: string): void {
        this.value = value;
        if (value) {
            this._defaultTime = value;
        }
    }

    private _onChange: (value: any) => void = () => {
    };

    private _registerTimepicker(picker: NgxMatTimepickerComponent): void {
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
            throw new Error("NgxMatTimepickerComponent is not defined." +
                " Please make sure you passed the timepicker to ngxMatTimepicker directive");
        }
    }

    private _unregisterTimepicker(): void {
        if (this._timepicker) {
            this._timepicker.unregisterInput();
        }
    }

    private _updateInputValue(): void {
        this._elementRef.nativeElement.value = this.value;
    }

}

