import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from "@angular/core";
//
import {
    NgxMatTimepickerHoursFaceDirective
} from "../ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.directive";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
import {NgxMatTimepickerFaceComponent} from "../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component";

@Component({
    selector: "ngx-mat-timepicker-12-hours-face",
    templateUrl: "ngx-mat-timepicker-12-hours-face.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgxMatTimepickerFaceComponent]
})
export class NgxMatTimepicker12HoursFaceComponent extends NgxMatTimepickerHoursFaceDirective implements OnChanges {

    @Input() period: NgxMatTimepickerPeriods;

    constructor() {
        super();
        this.format = 12;
    }

    ngOnChanges(changes: SimpleChanges) {
        // tslint:disable-next-line:no-string-literal
        if (changes["period"] && changes["period"].currentValue) {
            this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}
