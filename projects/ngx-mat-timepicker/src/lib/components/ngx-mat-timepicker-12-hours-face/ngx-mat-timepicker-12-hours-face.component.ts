import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from "@angular/core";
//
import {NgxMatTimepickerHoursFace} from "../ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";

@Component({
    selector: "ngx-mat-timepicker-12-hours-face",
    templateUrl: "ngx-mat-timepicker-12-hours-face.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgxMatTimepicker12HoursFaceComponent extends NgxMatTimepickerHoursFace implements OnChanges {

    @Input() period: NgxMatTimepickerPeriods;

    constructor() {
        super(12);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.period && changes.period.currentValue) {
            this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}
