import {EventEmitter, Input, Output} from "@angular/core";
import {ThemePalette} from "@angular/material/core";
//
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
//
import {DateTime} from "luxon";


export class NgxMatTimepickerHoursFace {

    @Input()
    set color(newValue: ThemePalette) {
        this._color = newValue;
    }

    get color(): ThemePalette {
        return this._color;
    }

    @Input() format: number;
    @Output() hourChange = new EventEmitter<NgxMatTimepickerClockFace>();
    @Output() hourSelected = new EventEmitter<number>();

    hoursList: NgxMatTimepickerClockFace[] = [];
    @Input() maxTime: DateTime;
    @Input() minTime: DateTime;
    @Input() selectedHour: NgxMatTimepickerClockFace;

    protected _color: ThemePalette = "primary";

    protected constructor(format: number) {
        this.hoursList = NgxMatTimepickerUtils.getHours(format);
    }

    onTimeSelected(time: number): void {
        this.hourSelected.next(time);
    }
}
