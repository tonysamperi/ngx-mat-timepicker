import { AfterContentInit, ChangeDetectionStrategy, Component } from "@angular/core";
//
import { NgxTimepickerHoursFace } from "../timepicker-hours-face/ngx-timepicker-hours-face";
import { NgxTimepickerUtils } from "../../utils/ngx-timepicker.utils";

@Component({
    selector: "ngx-timepicker-24-hours-face",
    templateUrl: "ngx-timepicker-24-hours-face.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgxTimepicker24HoursFaceComponent extends NgxTimepickerHoursFace implements AfterContentInit {

    constructor() {
        super(24);
    }

    ngAfterContentInit() {
        this.hoursList = NgxTimepickerUtils.disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    }
}
