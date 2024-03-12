import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ThemePalette} from "@angular/material/core";
import {FloatLabelType, MatFormFieldModule} from "@angular/material/form-field";
//
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerParserPipe} from "../../pipes/ngx-mat-timepicker-parser.pipe";
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
import {NgxMatTimepickerTimeLocalizerPipe} from "../../pipes/ngx-mat-timepicker-time-localizer.pipe";

function concatTime(currentTime: string, nextTime: string): number | undefined {
    const isNumber = /\d/.test(nextTime);

    if (isNumber) {
        const time = currentTime + nextTime;

        return +time;
    }

    return undefined;
}

@Component({
    selector: "ngx-mat-timepicker-time-control",
    templateUrl: "./ngx-mat-timepicker-control.component.html",
    styleUrls: ["./ngx-mat-timepicker-control.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [NgxMatTimepickerParserPipe],
    standalone: true,
    imports: [MatFormFieldModule, NgClass, MatInputModule, FormsModule, NgxMatTimepickerParserPipe, NgxMatTimepickerTimeLocalizerPipe]
})

export class NgxMatTimepickerControlComponent implements OnChanges {

    static nextId: number = 0;

    @Input()
    set color(newValue: ThemePalette) {
        this._color = newValue;
    }

    get color(): ThemePalette {
        return this._color;
    }

    @Input() disabled: boolean;

    @Input()
    set floatLabel(newValue: FloatLabelType) {
        this._floatLabel = newValue;
    }

    get floatLabel(): FloatLabelType {
        return this._floatLabel;
    }

    id: number = NgxMatTimepickerControlComponent.nextId++;
    isFocused: boolean;
    @Input() max: number;
    @Input() min: number;
    @Input() placeholder: string;
    @Input() preventTyping: boolean;

    @Input() time: number;

    @Output() timeChanged = new EventEmitter<number>();
    @Input() timeList: NgxMatTimepickerClockFace[];
    @Input() timeUnit: NgxMatTimepickerUnits;

    private _color: ThemePalette = "primary";
    private _floatLabel: FloatLabelType = "auto";
    private _previousTime: number;

    constructor(private _timeParser: NgxMatTimepickerParserPipe) {
    }

    changeTime(event: InputEvent): void {
        event.stopPropagation();
        const char = event.data;
        const time = concatTime(String(this.time), char);

        this._changeTimeIfValid(time);
    }

    decrease(): void {
        if (!this.disabled) {
            let previousTime = +this.time - 1;

            if (previousTime < this.min) {
                previousTime = this.max;
            }

            if (this._isSelectedTimeDisabled(previousTime)) {
                previousTime = this._getAvailableTime(previousTime, this._getPrevAvailableTime.bind(this));
            }

            if (previousTime !== this.time) {
                this.timeChanged.emit(previousTime);
            }
        }
    }

    increase(): void {
        if (!this.disabled) {
            let nextTime = +this.time + 1;

            if (nextTime > this.max) {
                nextTime = this.min;
            }

            if (this._isSelectedTimeDisabled(nextTime)) {
                nextTime = this._getAvailableTime(nextTime, this._getNextAvailableTime.bind(this));
            }

            if (nextTime !== this.time) {
                this.timeChanged.emit(nextTime);
            }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        // tslint:disable-next-line:no-string-literal
        if (changes["timeList"] && this.time != null) {
            if (this._isSelectedTimeDisabled(this.time)) {
                this._setAvailableTime();
            }
        }
    }

    onBlur(): void {
        this.isFocused = false;

        if (this._previousTime !== this.time) {
            this._changeTimeIfValid(+this.time);
        }
    }

    onFocus(): void {
        this.isFocused = true;
        this._previousTime = this.time;
    }

    onKeydown(event: any): void {
        event.stopPropagation();

        if (!NgxMatTimepickerUtils.isDigit(event)) {
            event.preventDefault();
        }

        switch (event.key) {
            case "ArrowUp":
                this.increase();
                break;
            case "ArrowDown":
                this.decrease();
                break;
        }

        if (this.preventTyping && event.key !== "Tab") {
            event.preventDefault();
        }
    }

    onModelChange(value: string): void {
        this.time = +this._timeParser.transform(value, this.timeUnit);
    }

    private _changeTimeIfValid(value: number | undefined): void {
        if (!isNaN(value)) {
            this.time = value;

            if (this.time > this.max) {
                const timeString = String(value);
                this.time = +timeString[timeString.length - 1];
            }

            if (this.time < this.min) {
                this.time = this.min;
            }

            this.timeChanged.emit(this.time);
        }
    }

    private _getAvailableTime(currentTime: number, fn: (index: number) => number | undefined): number | undefined {
        const currentTimeIndex = this.timeList.findIndex(time => time.time === currentTime);
        const availableTime = fn(currentTimeIndex);

        return availableTime != null ? availableTime : this.time;
    }

    private _getNextAvailableTime(index: number): number | undefined {
        const timeCollection = this.timeList;
        const maxValue = timeCollection.length;
        for (let i = index + 1; i < maxValue; i++) {
            const time = timeCollection[i];
            if (!time.disabled) {
                return time.time;
            }
        }

        return undefined;
    }

    private _getPrevAvailableTime(index: number): number | undefined {
        for (let i = index; i >= 0; i--) {
            const time = this.timeList[i];
            if (!time.disabled) {
                return time.time;
            }
        }

        return undefined;
    }

    private _isSelectedTimeDisabled(time: number): boolean {
        return this.timeList.find((faceTime: NgxMatTimepickerClockFace) => faceTime.time === time).disabled;
    }

    private _setAvailableTime(): void {
        this.time = this.timeList.find(t => !t.disabled).time;
        this.timeChanged.emit(this.time);
    }
}

