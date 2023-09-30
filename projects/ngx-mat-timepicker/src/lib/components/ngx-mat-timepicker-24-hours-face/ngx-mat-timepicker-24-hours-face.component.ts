import {AfterContentInit, ChangeDetectionStrategy, Component} from "@angular/core";
//
import {
    NgxMatTimepickerHoursFaceDirective
} from "../ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.directive";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
import {NgxMatTimepickerFaceComponent} from "../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component";

@Component({
    selector: "ngx-mat-timepicker-24-hours-face",
    templateUrl: "ngx-mat-timepicker-24-hours-face.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgxMatTimepickerFaceComponent]
})
export class NgxMatTimepicker24HoursFaceComponent extends NgxMatTimepickerHoursFaceDirective implements AfterContentInit {

    constructor() {
        super();
        this.format = 24;
    }

    ngAfterContentInit() {
        this.hoursList = NgxMatTimepickerUtils.disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    }
}
