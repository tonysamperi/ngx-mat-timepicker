import {Component} from "@angular/core";
//
import {NGX_MAT_TIMEPICKER_ENVIRONMENT} from "../environments/environment";
import {NgxMatTimepickerDemoComponent} from "./components/demo/demo.component";
import {NgxMatTimepickerTestComponent} from "./components/test/test.component";

@Component({
    selector: "ngx-mat-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    imports: [
        NgxMatTimepickerDemoComponent,
        NgxMatTimepickerTestComponent
    ]
})
export class NgxMatTimepickerAppComponent {

    isDemo: boolean = NGX_MAT_TIMEPICKER_ENVIRONMENT.isDemo;

}
