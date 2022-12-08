import {Component} from "@angular/core";
//
import {NGX_MAT_TIMEPICKER_ENVIRONMENT} from "../environments/environment";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class NgxMatTimepickerAppComponent {

    isDemo: boolean = NGX_MAT_TIMEPICKER_ENVIRONMENT.isDemo;

}
