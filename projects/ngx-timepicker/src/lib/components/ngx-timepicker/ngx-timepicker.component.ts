import {Component, EventEmitter, Input, Output, TemplateRef} from "@angular/core";
import {merge, Subject} from "rxjs";
import {NgxTimepickerEventService} from "../../services/ngx-timepicker-event.service";
import {filter, takeUntil} from "rxjs/operators";
import {NgxTimepickerDirective} from "../../directives/ngx-timepicker.directive";
import {DateTime} from "luxon";
import {NgxTimepickerDomService} from "../../services/ngx-timepicker-dom.service";
import {
    NgxTimepickerContainerComponent
} from "../ngx-timepicker-container/ngx-timepicker-container.component";
import {NgxTimepickerRef} from "../../models/timepicker-ref.interface";
import {NgxTimepickerTheme} from "../../models/ngx-timepicker-theme.interface";

const ESCAPE = 27;

@Component({
    selector: "ngx-timepicker",
    template: "",
})
export class NgxTimepickerComponent implements NgxTimepickerRef {

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

    set ngxTimepickerTheme(newValue: NgxTimepickerTheme) {
        this._ngxTimepickerTheme = newValue;
    }

    @Input() appendToInput: boolean;

    @Input() cancelBtnTmpl: TemplateRef<Node>;
    @Output() closed = new EventEmitter<null>();
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
    @Output() opened = new EventEmitter<null>();
    @Input() preventOverlayClick: boolean;
    @Input() theme: NgxTimepickerTheme;
    @Output() timeChanged = new EventEmitter<string>();
    @Input() timepickerClass: string;

    @Output() timeSet = new EventEmitter<string>();

    timeUpdated = new Subject<string>();
    private _format: number;

    private _minutesGap: number;
    private _ngxTimepickerTheme: NgxTimepickerTheme;
    private _subsCtrl$ = new Subject();
    private _timepickerInput: NgxTimepickerDirective;

    constructor(private _eventService: NgxTimepickerEventService,
                private _domService: NgxTimepickerDomService) {
    }

    close(): void {
        this._domService.destroyTimepicker();
        this.closed.next();
        this._unsubscribeFromEvents();
    }

    open(): void {
        this._domService.appendTimepickerToBody(NgxTimepickerContainerComponent, {
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
            theme: this.theme || this._ngxTimepickerTheme,
            timepickerClass: this.timepickerClass,
            inputElement: this.inputElement
        });
        this.opened.next();
        this._subscribeToEvents();
    }

    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input: NgxTimepickerDirective): void {
        if (this._timepickerInput) {
            throw Error("A Timepicker can only be associated with a single input.");
        }
        this._timepickerInput = input;
    }

    updateTime(time: string): void {
        this.timeUpdated.next(time);
    }

    private _subscribeToEvents(): void {
        merge(this._eventService.backdropClick,
            this._eventService.keydownEvent.pipe(filter(e => e.keyCode === ESCAPE && this.isEsc)))
            .pipe(takeUntil(this._subsCtrl$))
            .subscribe(() => this.close());
    }

    private _unsubscribeFromEvents(): void {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }
}
