import {Component, EventEmitter, Input, Output, ElementRef} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {NgIf, NgClass} from "@angular/common";
//
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerParserPipe} from "../../pipes/ngx-mat-timepicker-parser.pipe";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
import {NgxMatTimepickerTimeLocalizerPipe} from "../../pipes/ngx-mat-timepicker-time-localizer.pipe";
import {NgxMatTimepickerAutofocusDirective} from "../../directives/ngx-mat-timepicker-autofocus.directive";

@Component({
    selector: "ngx-mat-timepicker-dial-control",
    templateUrl: "ngx-mat-timepicker-dial-control.component.html",
    styleUrls: ["ngx-mat-timepicker-dial-control.component.scss"],
    providers: [NgxMatTimepickerParserPipe],
    standalone: true,
    imports: [
        NgIf,
        FormsModule,
        NgClass,
        NgxMatTimepickerAutofocusDirective,
        NgxMatTimepickerParserPipe,
        NgxMatTimepickerTimeLocalizerPipe
    ]
})
export class NgxMatTimepickerDialControlComponent {

    private get _selectedTime(): NgxMatTimepickerClockFace | undefined {
        if (!!this.time) {
            return this.timeList.find(t => t.time === +this.time);
        }

        return undefined;
    }

    @Input() disabled: boolean;

    @Output() focused = new EventEmitter<void>();

    @Input() isActive: boolean;

    @Input() isEditable: boolean;

    @Input() minutesGap: number;

    previousTime: number | string;

    @Input() time: string;

    @Output() timeChanged = new EventEmitter<NgxMatTimepickerClockFace>();

    @Input() timeList: NgxMatTimepickerClockFace[];

    @Input() timeUnit: NgxMatTimepickerUnits;

    @Output() timeUnitChanged = new EventEmitter<NgxMatTimepickerUnits>();

    @Output() unfocused = new EventEmitter<void>();

    NgxMatTimepickerUnits = NgxMatTimepickerUnits;

    constructor(private _elRef: ElementRef, private _timeParserPipe: NgxMatTimepickerParserPipe) {
    }

    changeTimeByKeyboard(e: any): void {
        const char = String.fromCharCode(e.keyCode);

        if (isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
    }

    onKeydown(e: any): void {
        if (!NgxMatTimepickerUtils.isDigit(e)) {
            e.preventDefault();
        }
        else {
            this._changeTimeByArrow(e.keyCode);
        }
    }

    onModelChange(value: string): void {
        this.time = this._timeParserPipe.transform(value, this.timeUnit);
    }

    saveTimeAndChangeTimeUnit(event: FocusEvent, unit: NgxMatTimepickerUnits): void {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    }

    updateTime(): void {
        if (this._selectedTime) {
            this.timeChanged.next(this._selectedTime);
            this.previousTime = this._selectedTime.time;
        }
    }

    private _addTime(amount: number): string {
        return `0${+this.time + amount}`.substr(-2);
    }

    private _changeTimeByArrow(keyCode: number): void {
        let time: string;

        // arrow up
        if (keyCode === 38) {
            time = this._addTime(this.minutesGap || 1);
        }
        // arrow down
        else if (keyCode === 40) {
            time = this._addTime(-1 * (this.minutesGap || 1));
        }

        if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
        }
    }

}

function isTimeDisabledToChange(currentTime: string, nextTime: string, timeList: NgxMatTimepickerClockFace[]): boolean | undefined {
    const isNumber = /\d/.test(nextTime);

    if (isNumber) {
        const time = currentTime + nextTime;

        return isTimeUnavailable(time, timeList);
    }

    return undefined;
}

function isTimeUnavailable(time: string, timeList: NgxMatTimepickerClockFace[]): boolean {
    const selectedTime = timeList.find(value => value.time === +time);

    return !selectedTime || (selectedTime && selectedTime.disabled);
}
