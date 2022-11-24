import {Component, Inject, ViewEncapsulation} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "../../services/ngx-mat-timepicker-locale.service";
import {NgxMatTimepickerService} from "../../services/ngx-mat-timepicker.service";
import {NgxMatTimepickerEventService} from "../../services/ngx-mat-timepicker-event.service";
import {NgxMatTimepickerConfig} from "../../models/ngx-mat-timepicker-config.interface";
import {NgxMatTimepickerBaseDirective} from "../../directives/ngx-mat-timepicker-base.directive";
import {NGX_MAT_TIMEPICKER_CONFIG} from "../../tokens/ngx-mat-timepicker-config.token";

@Component({
    selector: "ngx-mat-timepicker-standalone",
    templateUrl: "ngx-mat-timepicker-standalone.component.html",
    styleUrls: ["ngx-mat-timepicker-standalone.component.scss"],
    // tslint:disable-next-line:no-host-metadata-property
    host: {
      "[class.mat-app-background]": "true"
    },
    encapsulation: ViewEncapsulation.None
})
export class NgxMatTimepickerStandaloneComponent extends NgxMatTimepickerBaseDirective {

    constructor(@Inject(NGX_MAT_TIMEPICKER_CONFIG) public override data: NgxMatTimepickerConfig,
                timepickerSrv: NgxMatTimepickerService,
                eventSrv: NgxMatTimepickerEventService,
                timepickerLocaleSrv: NgxMatTimepickerLocaleService) {

        super(timepickerSrv, eventSrv, timepickerLocaleSrv, data);
    }

    override close(): void {
        this.data.timepickerBaseRef.close();
    }
}
