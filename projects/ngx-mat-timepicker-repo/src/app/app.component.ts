import {Component} from "@angular/core";
//
import {NGX_MAT_TIMEPICKER_ENVIRONMENT} from "../environments/environment";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class NgxMatTimepickerAppComponent {

    isDemo: boolean = NGX_MAT_TIMEPICKER_ENVIRONMENT.isDemo;

}
