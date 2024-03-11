import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from "@angular/core";
import {NgStyle, NgFor, NgIf, NgTemplateOutlet, NgClass, SlicePipe} from "@angular/common";
import {ThemePalette} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
//
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerFormatType} from "../../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerAdapter} from "../../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerTimeLocalizerPipe} from "../../pipes/ngx-mat-timepicker-time-localizer.pipe";
import {NgxMatTimepickerMinutesFormatterPipe} from "../../pipes/ngx-mat-timepicker-minutes-formatter.pipe";
import {NgxMatTimepickerActiveMinutePipe} from "../../pipes/ngx-mat-timepicker-active-minute.pipe";
import {NgxMatTimepickerActiveHourPipe} from "../../pipes/ngx-mat-timepicker-active-hour.pipe";

function roundAngle(angle: number, step: number): number {
    return Math.round(angle / step) * step;
}

function countAngleByCords(x0: number, y0: number, x: number, y: number, currentAngle: number): number {
    if (y > y0 && x >= x0) {// II quarter
        return 180 - currentAngle;
    }
    else if (y > y0 && x < x0) {// III quarter
        return 180 + currentAngle;
    }
    else if (y < y0 && x < x0) {// IV quarter
        return 360 - currentAngle;
    }
    else {// I quarter
        return currentAngle;
    }
}

const CLOCK_HAND_STYLES = {
    small: {
        height: "75px",
        top: "calc(50% - 75px)"
    },
    large: {
        height: "103px",
        top: "calc(50% - 103px)"
    }
};

@Component({
    selector: "ngx-mat-timepicker-face",
    templateUrl: "./ngx-mat-timepicker-face.component.html",
    styleUrls: ["./ngx-mat-timepicker-face.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatButtonModule,
        NgStyle,
        NgFor,
        NgIf,
        NgTemplateOutlet,
        MatToolbarModule,
        NgClass,
        SlicePipe,
        NgxMatTimepickerActiveHourPipe,
        NgxMatTimepickerActiveMinutePipe,
        NgxMatTimepickerMinutesFormatterPipe,
        NgxMatTimepickerTimeLocalizerPipe]
})
export class NgxMatTimepickerFaceComponent implements AfterViewInit, OnChanges, OnDestroy {

    @ViewChild("clockFace", {static: true}) clockFace: ElementRef;
    @ViewChild("clockHand", {static: true, read: ElementRef}) clockHand: ElementRef;

    @Input() color: ThemePalette = "primary";
    @Input() dottedMinutesInGap: boolean;
    @Input() faceTime: NgxMatTimepickerClockFace[];
    @Input() format: NgxMatTimepickerFormatType;
    innerClockFaceSize = 85;
    isClockFaceDisabled: boolean;
    @Input() minutesGap: number;
    @Input() selectedTime: NgxMatTimepickerClockFace;
    @Output() timeChange = new EventEmitter<NgxMatTimepickerClockFace>();
    @Output() timeSelected = new EventEmitter<number>();
    timeUnit = NgxMatTimepickerUnits;
    @Input() unit: NgxMatTimepickerUnits;

    private _isStarted: boolean;
    private _touchEndHandler: (e: any) => any;
    private _touchStartHandler: (e: any) => any;

    ngAfterViewInit(): void {
        this._setClockHandPosition();
        this._addTouchEvents();
    }

    ngOnChanges(changes: SimpleChanges): void {
        // tslint:disable-next-line:no-string-literal
        const faceTimeChanges = changes["faceTime"];
        // tslint:disable-next-line:no-string-literal
        const selectedTimeChanges = changes["selectedTime"];

        if ((faceTimeChanges && faceTimeChanges.currentValue)
            && (selectedTimeChanges && selectedTimeChanges.currentValue)) {
            /* Set time according to pass an input value */
            this.selectedTime = this.faceTime.find(time => time.time === this.selectedTime.time);
        }
        if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this._setClockHandPosition();
        }
        if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(() => this._selectAvailableTime());
        }
    }

    ngOnDestroy() {
        this._removeTouchEvents();
    }

    @HostListener("mousedown", ["$event"])
    onMousedown(e: any) {
        e.preventDefault();
        this._isStarted = true;
    }

    @HostListener("mouseup", ["$event"])
    onMouseup(e: any) {
        e.preventDefault();
        this._isStarted = false;
    }

    @HostListener("click", ["$event"])
    @HostListener("touchmove", ["$event.changedTouches[0]"])
    @HostListener("touchend", ["$event.changedTouches[0]"])
    @HostListener("mousemove", ["$event"])
    selectTime(e: any): void {

        if (!this._isStarted && (e instanceof MouseEvent && e.type !== "click")) {
            return;
        }
        const clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();

        /* Get x0 and y0 of the circle */
        const centerX = clockFaceCords.left + clockFaceCords.width / 2;
        const centerY = clockFaceCords.top + clockFaceCords.height / 2;
        /* Counting the arctangent and convert it to from radian to deg */
        const arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        /* Get angle according to quadrant */
        const circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
        /* Check if selected time from the inner clock face (24 hours format only) */
        const isInnerClockChosen = this.format && this._isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
        /* Round angle according to angle step */
        const angleStep = this.unit === NgxMatTimepickerUnits.MINUTE ? (6 * (this.minutesGap || 1)) : 30;
        const roundedAngle = roundAngle(circleAngle, angleStep);
        const angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);

        const selectedTime = this.faceTime.find(val => val.angle === angle);

        if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);

            /* To let know whether user ended interaction with clock face */
            if (!this._isStarted) {
                this.timeSelected.next(selectedTime.time);
            }
        }

    }

    trackByTime(_item_: any, time: NgxMatTimepickerClockFace): string | number {
        return time.time;
    }

    private _addTouchEvents(): void {
        this._touchStartHandler = this.onMousedown.bind(this);
        this._touchEndHandler = this.onMouseup.bind(this);

        this.clockFace.nativeElement.addEventListener("touchstart", this._touchStartHandler);
        this.clockFace.nativeElement.addEventListener("touchend", this._touchEndHandler);
    }

    private _decreaseClockHand(): void {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
    }

    private _increaseClockHand(): void {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
    }

    private _isInnerClockFace(x0: number, y0: number, x: number, y: number): boolean {
        /* Detect whether time from the inner clock face or not (24 format only) */
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
    }

    private _removeTouchEvents(): void {
        this.clockFace.nativeElement.removeEventListener("touchstart", this._touchStartHandler);
        this.clockFace.nativeElement.removeEventListener("touchend", this._touchEndHandler);
    }

    private _selectAvailableTime(): void {
        const currentTime = this.faceTime.find(time => this.selectedTime.time === time.time);
        this.isClockFaceDisabled = this.faceTime.every(time => time.disabled);

        if ((currentTime && currentTime.disabled) && !this.isClockFaceDisabled) {
            const availableTime = this.faceTime.find(time => !time.disabled);

            this.timeChange.next(availableTime);
        }
    }

    private _setClockHandPosition(): void {
        if (NgxMatTimepickerAdapter.isTwentyFour(this.format)) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
                this._decreaseClockHand();
            }
            else {
                this._increaseClockHand();
            }
        }

        if (this.selectedTime) {
            this.clockHand.nativeElement.style.transform = `rotate(${this.selectedTime.angle}deg)`;
        }
    }
}
