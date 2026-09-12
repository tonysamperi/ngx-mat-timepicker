import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {Component, DestroyRef, EventEmitter, HostBinding, Injector, Input, Output, TemplateRef, inject, signal} from "@angular/core";
import {CdkOverlayOrigin, ConnectedPosition, FlexibleConnectedPositionStrategyOrigin, OverlayRef, CdkConnectedOverlay} from "@angular/cdk/overlay";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {DateTime} from "ts-luxon";
import {BehaviorSubject} from "rxjs";
//
import {NgxMatTimepickerConfig} from "../../models/ngx-mat-timepicker-config.interface";
import {NgxMatTimepickerFormatType} from "../../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerAdapter} from "../../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerService} from "../../services/ngx-mat-timepicker.service";
import {NgxMatTimepickerDirective} from "../../directives/ngx-mat-timepicker.directive";
import {NgxMatTimepickerRef} from "../../models/ngx-mat-timepicker-ref.interface";
import {NgxMatTimepickerDialogComponent} from "../ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component";
import {NGX_MAT_TIMEPICKER_CONFIG, provideNgxMatTimepickerConfig} from "../../tokens/ngx-mat-timepicker-config.token";
import {NgxMatTimepickerStandaloneComponent} from "../ngx-mat-timepicker-standalone/ngx-mat-timepicker-standalone.component";

let config: NgxMatTimepickerConfig;

@Component({
    selector: "ngx-mat-timepicker-provider",
    template: `
        <ngx-mat-timepicker-standalone></ngx-mat-timepicker-standalone>`,
    providers: [
        {
            provide: NGX_MAT_TIMEPICKER_CONFIG,
            useFactory() {
                return config;
            }
        }
    ],
    imports: [NgxMatTimepickerStandaloneComponent]
})
export class NgxMatTimepickerProvider {
}

@Component({
    selector: "ngx-mat-timepicker",
    template: `
        <ng-template
                cdkConnectedOverlay
                [cdkConnectedOverlayPositions]="overlayPositions"
                [cdkConnectedOverlayHasBackdrop]="!0"
                [cdkConnectedOverlayPush]="!0"
                [cdkConnectedOverlayViewportMargin]="8"
                cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
                (backdropClick)="close()"
                [cdkConnectedOverlayOrigin]="overlayOrigin"
                [cdkConnectedOverlayOpen]="showPicker()">
            <ngx-mat-timepicker-provider></ngx-mat-timepicker-provider>
        </ng-template>
    `,
    imports: [CdkConnectedOverlay, NgxMatTimepickerProvider]
})
export class NgxMatTimepickerComponent implements NgxMatTimepickerRef {

    static nextId: number = 0;

    @Input()
    set appendToInput(newValue: boolean | string | void) {
        this._appendToInput = coerceBooleanProperty(newValue);
    }

    get disabled(): boolean {
        return this._timepickerInput && this._timepickerInput.disabled;
    }


    @Input()
    set dottedMinutesInGap(newValue: boolean | "") {
        this._dottedMinutesInGap = coerceBooleanProperty(newValue);
    }

    get dottedMinutesInGap(): boolean {
        return this._dottedMinutesInGap;
    }

    @Input()
    set enableKeyboardInput(newValue: boolean | string | void) {
        this._enableKeyboardInput = coerceBooleanProperty(newValue);
    }

    get enableKeyboardInput(): boolean {
        return this._enableKeyboardInput;
    }

    @Input()
    set format(value: NgxMatTimepickerFormatType) {
        this._format = NgxMatTimepickerAdapter.isTwentyFour(value) ? 24 : 12;
    }

    get format(): NgxMatTimepickerFormatType {
        return this._timepickerInput ? this._timepickerInput.format : this._format;
    }

    get inputElement(): HTMLElement {
        return this._timepickerInput && this._timepickerInput.element;
    }

    get maxTime(): DateTime {
        return this._timepickerInput ? (this._timepickerInput.max as DateTime) : this.max;
    }

    get minTime(): DateTime {
        return this._timepickerInput ? (this._timepickerInput.min as DateTime) : this.min;
    }

    @Input()
    set minutesGap(gap: number) {
        if (gap == null) {
            return;
        }
        gap = Math.floor(gap);
        this._minutesGap = gap <= 59 ? gap : 1;
    }

    get minutesGap(): number {
        return this._minutesGap;
    }

    get overlayOrigin(): CdkOverlayOrigin | FlexibleConnectedPositionStrategyOrigin {
        return this._timepickerInput ? this._timepickerInput.cdkOverlayOrigin : void 0;
    }

    get time(): string {
        return this._timepickerInput && this._timepickerInput.value;
    }

    @Input() cancelBtnTmpl: TemplateRef<Node>;
    @Output() closed = new EventEmitter<void>();
    @Input() confirmBtnTmpl: TemplateRef<Node>;
    @Input() defaultTime: string;
    @Input() disableAnimation: boolean;
    @Input() editableHintTmpl: TemplateRef<Node>;
    @Output() hourSelected = new EventEmitter<number>();
    @Input() hoursOnly = false;
    @HostBinding("id") id: string = `ngx_mat_timepicker_${++NgxMatTimepickerComponent.nextId}`;
    @Input() isEsc = !0;
    @Input() max: DateTime;
    @Input() min: DateTime;
    @Output() opened = new EventEmitter<void>();
    overlayPositions: ConnectedPosition[] = [
        {
            originX: "center",
            originY: "bottom",
            overlayX: "center",
            overlayY: "top",
            offsetY: 0
        },
        {
            originX: "center",
            originY: "top",
            overlayX: "center",
            overlayY: "bottom",
            offsetY: 0
        }
    ];
    @Input() preventOverlayClick: boolean;
    showPicker = signal<boolean>(!1);
    @Output() timeChanged = new EventEmitter<string>();
    @Output() timeSet = new EventEmitter<string>();
    timeUpdated = new BehaviorSubject<string>(void 0); // used in the dialog, check if a better approach can be used
    @Input() timepickerClass: string;

    private _appendToInput: boolean = !1;
    private _destroyRef = inject(DestroyRef);
    private _dialog: MatDialog = inject(MatDialog);
    private _dialogRef: MatDialogRef<NgxMatTimepickerDialogComponent, void>;
    private _dottedMinutesInGap: boolean = !1;
    private _enableKeyboardInput: boolean = !1;
    private _format: NgxMatTimepickerFormatType = 12;
    private _injector = inject(Injector);
    private _minutesGap: number;
    private _overlayRef: OverlayRef;
    private _timepickerState = new NgxMatTimepickerService();
    private _timepickerInput: NgxMatTimepickerDirective;

    constructor() {
    }

    close(): void {
        if (this._appendToInput) {
            this._overlayRef?.dispose();
        }
        else {
            this._dialogRef?.close();
        }
        this.inputElement.focus(); // Fix ExpressionHasChangedAfterCheck error on overlay destroy
        this.showPicker.set(!1);
        this.closed.emit();
    }

    open(): void {
        // Set data to be injected
        config = {
            timepickerBaseRef: this,
            time: this.time,
            defaultTime: this.defaultTime,
            dottedMinutesInGap: this._dottedMinutesInGap,
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
            appendToInput: this._appendToInput,
            hoursOnly: this.hoursOnly,
            timepickerClass: this.timepickerClass,
            inputElement: this.inputElement,
            timepickerState: this._timepickerState
        };
        if (this._appendToInput) {
            this.showPicker.set(!0);
        }
        else {
            const dialogInjector = Injector.create({
                parent: this._injector,
                providers: provideNgxMatTimepickerConfig(config)
            });
            this._dialogRef = this._dialog.open(NgxMatTimepickerDialogComponent, {
                ...this.disableAnimation && {enterAnimationDuration: 0, exitAnimationDuration: 0},
                panelClass: "ngx-mat-timepicker-dialog",
                injector: dialogInjector,
                data: {
                    ...config
                }
            });
            // ✅ FIXED: Using takeUntilDestroyed to prevent memory leaks
            this._dialogRef
                .afterClosed()
                .pipe(takeUntilDestroyed(this._destroyRef))
                .subscribe(() => {
                    this.closed.emit();
                });
        }
        this.opened.emit();
    }

    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input: NgxMatTimepickerDirective): void {
        if (this._timepickerInput) {
            console.warn("Input for this timepicker was already set", input.element);
            throw Error("A Timepicker can only be associated with a single input.");
        }
        this._timepickerInput = input;
    }

    unregisterInput(): void {
        this._timepickerInput = void 0;
    }

    updateTime(time: string): void {
        this.timeUpdated.next(time);
    }
}
