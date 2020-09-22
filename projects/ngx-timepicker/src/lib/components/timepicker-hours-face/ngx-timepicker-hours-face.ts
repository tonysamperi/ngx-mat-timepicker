import {EventEmitter, Input, Output} from "@angular/core";
import {ThemePalette} from "@angular/material/core";
//
import {NgxTimepickerClockFace} from "../../models/ngx-timepicker-clock-face.interface";
import {NgxTimepickerUtils} from "../../utils/ngx-timepicker.utils";
//
import {DateTime} from "luxon";


export class NgxTimepickerHoursFace {

    @Input()
    set color(newValue: ThemePalette) {
        this._color = newValue;
    }

    get color(): ThemePalette {
        return this._color;
    }

    @Input() format: number;
    @Output() hourChange = new EventEmitter<NgxTimepickerClockFace>();
    @Output() hourSelected = new EventEmitter<number>();

    hoursList: NgxTimepickerClockFace[] = [];
    @Input() maxTime: DateTime;
    @Input() minTime: DateTime;
    @Input() selectedHour: NgxTimepickerClockFace;

    protected _color: ThemePalette = "primary";

    protected constructor(format: number) {
        this.hoursList = NgxTimepickerUtils.getHours(format);
    }

    onTimeSelected(time: number): void {
        console.info("TIME SELECTED", time);
        this.hourSelected.next(time);
    }
}
