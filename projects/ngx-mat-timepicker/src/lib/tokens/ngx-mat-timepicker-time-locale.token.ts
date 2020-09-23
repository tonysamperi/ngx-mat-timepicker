import { InjectionToken } from "@angular/core";
//
import { NgxMatTimepickerAdapter } from "../services/ngx-mat-timepicker-adapter";

export const NGX_MAT_TIMEPICKER_LOCALE = new InjectionToken<string>("TimeLocale", {
    providedIn: "root",
    factory: () => NgxMatTimepickerAdapter.defaultLocale
});
