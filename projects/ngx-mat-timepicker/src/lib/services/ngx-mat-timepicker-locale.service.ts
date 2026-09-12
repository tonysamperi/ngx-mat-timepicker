import {inject, Service} from "@angular/core";
//
import {NGX_MAT_TIMEPICKER_LOCALE} from "../tokens/ngx-mat-timepicker-time-locale.token";

@Service()
export class NgxMatTimepickerLocaleService {

    get locale(): string {
        return this._locale;
    }

    protected _locale = inject(NGX_MAT_TIMEPICKER_LOCALE);

    constructor() {
    }

    updateLocale(newValue: string): void {
        this._locale = newValue;
    }
}
