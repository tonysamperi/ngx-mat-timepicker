import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from "@angular/core";
//
import {NgxTimepickerHoursFace} from "../timepicker-hours-face/ngx-timepicker-hours-face";
import {NgxTimepickerPeriods} from "../../models/ngx-timepicker-periods.enum";
import {NgxTimepickerUtils} from "../../utils/ngx-timepicker.utils";

@Component({
    selector: "ngx-timepicker-12-hours-face",
    templateUrl: "ngx-timepicker-12-hours-face.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgxTimepicker12HoursFaceComponent extends NgxTimepickerHoursFace implements OnChanges {

    @Input() period: NgxTimepickerPeriods;

    constructor() {
        super(12);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.period && changes.period.currentValue) {
            this.hoursList = NgxTimepickerUtils.disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}
