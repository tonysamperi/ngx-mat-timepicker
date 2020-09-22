import { InjectionToken } from "@angular/core";
//
import { NgxTimepickerAdapter } from "../services/ngx-timepicker-adapter";

export const NGX_TIMEPICKER_LOCALE = new InjectionToken<string>("TimeLocale", {
    providedIn: "root",
    factory: () => NgxTimepickerAdapter.DEFAULT_LOCALE
});
