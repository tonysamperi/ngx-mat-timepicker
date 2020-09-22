import {Component, EventEmitter, Input, Output} from "@angular/core";
//
import {NgxTimepickerClockFace} from "../../models/ngx-timepicker-clock-face.interface";
import {NgxTimepickerUnits} from "../../models/ngx-timepicker-units.enum";
import {isDigit} from "../../utils/timepicker.utils";
import {NgxTimepickerParserPipe} from "../../pipes/ngx-timepicker-parser.pipe";

@Component({
    selector: "ngx-timepicker-dial-control",
    templateUrl: "ngx-timepicker-dial-control.component.html",
    styleUrls: ["ngx-timepicker-dial-control.component.scss"],
    providers: [NgxTimepickerParserPipe]
})
export class NgxTimepickerDialControlComponent {

    private get _selectedTime(): NgxTimepickerClockFace {
        if (!!this.time) {
            return this.timeList.find(t => t.time === +this.time);
        }
    }

    @Input()
    disabled: boolean;

    @Output()
    focused = new EventEmitter<null>();

    @Input()
    isActive: boolean;

    @Input()
    isEditable: boolean;

    @Input()
    minutesGap: number;

    previousTime: number | string;

    @Input()
    time: string;

    @Output()
    timeChanged = new EventEmitter<NgxTimepickerClockFace>();

    @Input()
    timeList: NgxTimepickerClockFace[];

    @Input()
    timeUnit: NgxTimepickerUnits;

    @Output()
    timeUnitChanged = new EventEmitter<NgxTimepickerUnits>();

    @Output()
    unfocused = new EventEmitter<null>();

    constructor(private _timeParserPipe: NgxTimepickerParserPipe) {
    }

    changeTimeByKeyboard(e: any): void {
        const char = String.fromCharCode(e.keyCode);

        if (isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
    }

    onKeydown(e: any): void {
        if (!isDigit(e)) {
            e.preventDefault();
        }
        else {
            this._changeTimeByArrow(e.keyCode);
        }
    }

    onModelChange(value: string): void {
        this.time = this._timeParserPipe.transform(value, this.timeUnit);
    }

    saveTimeAndChangeTimeUnit(event: FocusEvent, unit: NgxTimepickerUnits): void {
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

function isTimeDisabledToChange(currentTime: string, nextTime: string, timeList: NgxTimepickerClockFace[]): boolean {
    const isNumber = /\d/.test(nextTime);

    if (isNumber) {
        const time = currentTime + nextTime;

        return isTimeUnavailable(time, timeList);
    }
}

function isTimeUnavailable(time: string, timeList: NgxTimepickerClockFace[]): boolean {
    const selectedTime = timeList.find(value => value.time === +time);

    return !selectedTime || (selectedTime && selectedTime.disabled);
}
