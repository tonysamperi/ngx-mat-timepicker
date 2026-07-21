import {InjectionToken, Provider} from "@angular/core";
//
import {NgxMatTimepickerConfig} from "../models/ngx-mat-timepicker-config.interface";

export const NGX_MAT_TIMEPICKER_CONFIG = new InjectionToken<NgxMatTimepickerConfig>("NGX_MAT_TIMEPICKER_CONFIG");

export function provideNgxMatTimepickerConfig(config?: NgxMatTimepickerConfig): Provider[] {
    return [
        {provide: NGX_MAT_TIMEPICKER_CONFIG, useValue: config}
    ];
}
