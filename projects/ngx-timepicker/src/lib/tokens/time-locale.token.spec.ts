import { Injector } from '@angular/core';
import { NGX_TIMEPICKER_LOCALE } from './time-locale.token';

describe('TimeLocaleToken', () => {

    it('should return provided locale', () => {
        const locale = 'en-GB';
        const injector = Injector.create({providers: [{provide: NGX_TIMEPICKER_LOCALE, useValue: locale}]});
        const actual = injector.get(NGX_TIMEPICKER_LOCALE);

        expect(actual).toBe(locale);
    });
});
