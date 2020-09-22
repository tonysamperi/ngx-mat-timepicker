import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
//
import { NgxTimepickerClockFace } from "../../models/ngx-timepicker-clock-face.interface";
import { NgxTimepickerUnits } from "../../models/ngx-timepicker-units.enum";
import { NgxTimepickerPeriods } from "../../models/ngx-timepicker-periods.enum";
import { NgxTimepickerUtils } from "../../utils/ngx-timepicker.utils";
//
import { DateTime } from "luxon";

@Component({
    selector: "ngx-timepicker-minutes-face",
    templateUrl: "./ngx-timepicker-minutes-face.component.html"
})
export class NgxTimepickerMinutesFaceComponent implements OnChanges {
    @Input() format: number;
    @Input() maxTime: DateTime;
    @Input() minTime: DateTime;

    @Output() minuteChange = new EventEmitter<NgxTimepickerClockFace>();
    @Input() minutesGap: number;

    minutesList: NgxTimepickerClockFace[] = [];
    @Input() period: NgxTimepickerPeriods;
    @Input() selectedHour: number;

    @Input() selectedMinute: NgxTimepickerClockFace;
    timeUnit = NgxTimepickerUnits;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.period && changes.period.currentValue) {
            const minutes = NgxTimepickerUtils.getMinutes(this.minutesGap);
            this.minutesList = NgxTimepickerUtils.disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}

