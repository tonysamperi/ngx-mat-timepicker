import {Component, EventEmitter, Input, Output, TemplateRef} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ThemePalette} from "@angular/material/core";
//
import {NgxMatTimepickerEventService} from "../../services/ngx-mat-timepicker-event.service";
import {NgxMatTimepickerDirective} from "../../directives/ngx-mat-timepicker.directive";
import {NgxMatTimepickerRef} from "../../models/ngx-mat-timepicker-ref.interface";
import {NgxMatTimepickerTheme} from "../../models/ngx-mat-timepicker-theme.interface";
//
import {DateTime} from "luxon";
import {merge, Subject} from "rxjs";
import {filter, takeUntil} from "rxjs/operators";
import {NgxMatTimepickerDialogComponent} from "../ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component";

@Component({
    selector: "ngx-mat-timepicker",
    template: "",
})
export class NgxMatTimepickerComponent implements NgxMatTimepickerRef {

    @Input()
    set color(newValue: ThemePalette) {
        this._color = newValue;
    }

    get color(): ThemePalette {
        return this._color;
    }

    get disabled(): boolean {
        return this._timepickerInput && this._timepickerInput.disabled;
    }

    get format(): number {
        return this._timepickerInput ? this._timepickerInput.format : this._format;
    }

    @Input()
    set format(value: number) {
        this._format = value === 24 ? 24 : 12;
    }

    get inputElement(): any {
        return this._timepickerInput && this._timepickerInput.element;
    }

    get maxTime(): DateTime {
        return this._timepickerInput ? (this._timepickerInput.max as DateTime) : this.max;
    }

    get minTime(): DateTime {
        return this._timepickerInput ? (this._timepickerInput.min as DateTime) : this.min;
    }

    get minutesGap(): number {
        return this._minutesGap;
    }

    @Input()
    set minutesGap(gap: number) {
        if (gap == null) {
            return;
        }
        gap = Math.floor(gap);
        this._minutesGap = gap <= 59 ? gap : 1;
    }

    get time(): string {
        return this._timepickerInput && this._timepickerInput.value;
    }

    set ngxMatTimepickerTheme(newValue: NgxMatTimepickerTheme) {
        this._ngxMatTimepickerTheme = newValue;
    }

    @Input() appendToInput: boolean;
    @Input() cancelBtnTmpl: TemplateRef<Node>;
    @Output() closed = new EventEmitter<void>();
    @Input() confirmBtnTmpl: TemplateRef<Node>;
    @Input() defaultTime: string;
    @Input() disableAnimation: boolean;
    @Input() editableHintTmpl: TemplateRef<Node>;
    @Input() enableKeyboardInput: boolean;
    @Output() hourSelected = new EventEmitter<number>();
    @Input() hoursOnly = false;
    @Input() isEsc = true;
    @Input() max: DateTime;
    @Input() min: DateTime;
    @Output() opened = new EventEmitter<void>();
    @Input() preventOverlayClick: boolean;
    @Input() theme: NgxMatTimepickerTheme;
    @Output() timeChanged = new EventEmitter<string>();
    @Input() timepickerClass: string;
    @Output() timeSet = new EventEmitter<string>();
    timeUpdated = new Subject<string>(); // used in the dialog, check if a better approach can be used

    private _color: ThemePalette = "primary";
    private _format: number;
    private _minutesGap: number;
    private _ngxMatTimepickerTheme: NgxMatTimepickerTheme;
    private _timepickerInput: NgxMatTimepickerDirective;

    constructor(private _dialog: MatDialog,
                private _eventService: NgxMatTimepickerEventService) {
    }

    open(): void {
        this._dialog.open(NgxMatTimepickerDialogComponent, {
            panelClass: "ngx-mat-timepicker-dialog",
            data: {
                timepickerBaseRef: this,
                time: this.time,
                defaultTime: this.defaultTime,
                maxTime: this.maxTime,
                minTime: this.minTime,
                format: this.format,
                minutesGap: this.minutesGap,
                disableAnimation: this.disableAnimation,
                cancelBtnTmpl: this.cancelBtnTmpl,
                confirmBtnTmpl: this.confirmBtnTmpl,
                editableHintTmpl: this.editableHintTmpl,
                disabled: this.disabled,
                enableKeyboardInput: this.enableKeyboardInput,
                preventOverlayClick: this.preventOverlayClick,
                appendToInput: this.appendToInput,
                hoursOnly: this.hoursOnly,
                theme: this.theme || this._ngxMatTimepickerTheme,
                timepickerClass: this.timepickerClass,
                inputElement: this.inputElement,
                color: this.color
            }
        })
        .afterClosed()
        .subscribe(() => {
            this.closed.emit();
        });
        this.opened.emit();
    }

    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input: NgxMatTimepickerDirective): void {
        if (this._timepickerInput) {
            throw Error("A Timepicker can only be associated with a single input.");
        }
        this._timepickerInput = input;
    }

    updateTime(time: string): void {
        this.timeUpdated.next(time);
    }
}
