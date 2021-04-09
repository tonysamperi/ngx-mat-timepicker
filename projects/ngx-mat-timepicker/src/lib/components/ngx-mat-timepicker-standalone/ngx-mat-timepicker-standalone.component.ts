import {Component, Inject, ViewEncapsulation} from "@angular/core";
//
import {NgxMatTimepickerService} from "../../services/ngx-mat-timepicker.service";
import {NgxMatTimepickerEventService} from "../../services/ngx-mat-timepicker-event.service";
import {NgxMatTimepickerConfig} from "../../models/ngx-mat-timepicker-config.interface";
import {NgxMatTimepickerBaseDirective} from "../../directives/ngx-mat-timepicker-base.directive";
import {NGX_MAT_TIMEPICKER_LOCALE} from "../../tokens/ngx-mat-timepicker-time-locale.token";
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

    constructor(@Inject(NGX_MAT_TIMEPICKER_CONFIG) public data: NgxMatTimepickerConfig,
                timepickerSrv: NgxMatTimepickerService,
                eventSrv: NgxMatTimepickerEventService,
                @Inject(NGX_MAT_TIMEPICKER_LOCALE) locale: string) {

        super(timepickerSrv, eventSrv, locale, data);
    }

    close(): void {
        this.data.timepickerBaseRef.close();
    }
}
