import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {ThemePalette} from "@angular/material/core";
//
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerFormatType} from "../../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
//
import {DateTime} from "ts-luxon";

@Directive({
    selector: "[ngxMatTimepickerHoursFace]"
})
export class NgxMatTimepickerHoursFaceDirective {

    @Input()
    set color(newValue: ThemePalette) {
        this._color = newValue;
    }

    get color(): ThemePalette {
        return this._color;
    }

    @Input()
    set format(newValue: NgxMatTimepickerFormatType) {
        this._format = newValue;
        this.hoursList = NgxMatTimepickerUtils.getHours(this._format);
    }

    get format(): NgxMatTimepickerFormatType {
        return this._format;
    }

    @Output() hourChange = new EventEmitter<NgxMatTimepickerClockFace>();
    @Output() hourSelected = new EventEmitter<number>();

    hoursList: NgxMatTimepickerClockFace[] = [];
    @Input() maxTime: DateTime;
    @Input() minTime: DateTime;
    @Input() selectedHour: NgxMatTimepickerClockFace;

    protected _color: ThemePalette = "primary";
    protected _format: NgxMatTimepickerFormatType = 24;

    constructor() {
    }

    onTimeSelected(time: number): void {
        this.hourSelected.next(time);
    }
}
