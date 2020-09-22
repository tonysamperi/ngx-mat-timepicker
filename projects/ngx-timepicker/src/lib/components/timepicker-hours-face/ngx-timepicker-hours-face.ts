import { EventEmitter, Input, Output } from "@angular/core";
//
import { NgxTimepickerClockFace } from "../../models/ngx-timepicker-clock-face.interface";
import { NgxTimepickerUtils } from "../../utils/ngx-timepicker.utils";
//
import { DateTime } from "luxon";


export class NgxTimepickerHoursFace {
    @Input() format: number;

    @Output() hourChange = new EventEmitter<NgxTimepickerClockFace>();
    @Output() hourSelected = new EventEmitter<number>();

    hoursList: NgxTimepickerClockFace[] = [];
    @Input() maxTime: DateTime;
    @Input() minTime: DateTime;

    @Input() selectedHour: NgxTimepickerClockFace;

    protected constructor(format: number) {
        this.hoursList = NgxTimepickerUtils.getHours(format);
    }

    onTimeSelected(time: number): void {
        console.info("TIME SELECTED", time);
        this.hourSelected.next(time);
    }
}
