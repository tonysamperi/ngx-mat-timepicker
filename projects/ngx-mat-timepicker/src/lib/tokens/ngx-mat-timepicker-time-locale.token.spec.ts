import {Injector} from "@angular/core";
import {NGX_MAT_TIMEPICKER_LOCALE} from "./ngx-mat-timepicker-time-locale.token";

describe("TimeLocaleToken", () => {

    it("should return provided locale", () => {
        const locale = "en-GB";
        const injector = Injector.create({providers: [{provide: NGX_MAT_TIMEPICKER_LOCALE, useValue: locale}]});
        const actual = injector.get(NGX_MAT_TIMEPICKER_LOCALE);

        expect(actual).toBe(locale);
    });
});
