import { AfterContentInit, ChangeDetectionStrategy, Component } from "@angular/core";
//
import { NgxMatTimepickerHoursFaceDirective } from "../../directives/ngx-mat-timepicker-hours-face.directive";
import { NgxMatTimepickerUtils } from "../../utils/ngx-mat-timepicker.utils";

@Component({
    selector: "ngx-mat-timepicker-24-hours-face",
    templateUrl: "ngx-mat-timepicker-24-hours-face.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgxMatTimepicker24HoursFaceComponent extends NgxMatTimepickerHoursFaceDirective implements AfterContentInit {

    constructor() {
        super(24);
    }

    ngAfterContentInit() {
        this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    }
}
