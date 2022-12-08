import {Inject, Injectable} from "@angular/core";
//
import {NGX_MAT_TIMEPICKER_LOCALE} from "../tokens/ngx-mat-timepicker-time-locale.token";

@Injectable({
    providedIn: "root"
})
export class NgxMatTimepickerLocaleService {

    get locale(): string {
        return this._locale;
    }

    protected _initialLocale: string;
    protected _locale;

    constructor(@Inject(NGX_MAT_TIMEPICKER_LOCALE) initialLocale: string) {
        this._locale = initialLocale;
    }

    updateLocale(newValue: string): void {
        this._locale = newValue || this._initialLocale;
    }
}
