import {Component} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerDemoComponent} from "../demo/demo.component";


@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-test",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"]
})
export class NgxMatTimepickerTestComponent extends NgxMatTimepickerDemoComponent {

    constructor(localeOverrideSrv: NgxMatTimepickerLocaleService) {
        super(localeOverrideSrv);
    }

}
