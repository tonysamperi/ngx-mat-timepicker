import {TestBed} from "@angular/core/testing";
import {DateTime} from "ts-luxon";
//
import {NgxMatTimepickerTimeLocalizerPipe} from "./ngx-mat-timepicker-time-localizer.pipe";
import {NgxMatTimepickerUnits} from "../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerLocaleService} from "../services/ngx-mat-timepicker-locale.service";
import {NGX_MAT_TIMEPICKER_LOCALE} from "../tokens/ngx-mat-timepicker-time-locale.token";

describe("NgxMatTimepickerTimeLocalizerPipe", () => {
    const defaultLocale = "en-US";
    let pipe: NgxMatTimepickerTimeLocalizerPipe;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NgxMatTimepickerLocaleService,
                NgxMatTimepickerTimeLocalizerPipe,
                {provide: NGX_MAT_TIMEPICKER_LOCALE, useValue: defaultLocale}
            ]
        });
        pipe = TestBed.inject(NgxMatTimepickerTimeLocalizerPipe);
    });

    it("should create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    it("should not localize time when provided invalid value", () => {
        const expected = "";

        expect(pipe.transform(undefined, NgxMatTimepickerUnits.HOUR)).toBe(expected);
        expect(pipe.transform(null, NgxMatTimepickerUnits.HOUR)).toBe(expected);
        expect(pipe.transform("", NgxMatTimepickerUnits.HOUR)).toBe(expected);
    });

    it("should return hour in numeric format", () => {
        const hours = Array(23).fill(1).map((v, i) => v + i);

        hours.forEach(hour => {
            const expected = DateTime.fromObject({hour: hour}).setLocale(defaultLocale).toFormat("H");
            expect(pipe.transform(hour, NgxMatTimepickerUnits.HOUR)).toBe(expected);
        });
    });

    it("should return hour in 2-digit format when 0 is provided", () => {
        const hour = 0;
        const expected = DateTime.fromObject({hour: hour}).setLocale(defaultLocale).toFormat("HH");

        expect(pipe.transform(hour, NgxMatTimepickerUnits.HOUR)).toBe(expected);
    });

    it("should return hour in 2-digit format when isKeyboardEnabled is true", () => {
        const hour = 1;
        const expected = DateTime.fromObject({hour: hour}).setLocale(defaultLocale).toFormat("HH");

        expect(pipe.transform(hour, NgxMatTimepickerUnits.HOUR, true)).toBe(expected);
    });

    it("should return minute in 2-digit format", () => {
        const minutes = Array(59).fill(0).map((v, i) => v + i);

        minutes.forEach(minute => {
            const expected = DateTime.fromObject({minute: minute}).setLocale(defaultLocale).toFormat("mm");
            expect(pipe.transform(String(minute).padStart(2, "0"), NgxMatTimepickerUnits.MINUTE)).toBe(expected);
        });
    });

    it("should throw an error when unexpected NgxMatTimepickerUnits is provided", () => {
        expect(() => pipe.transform(1, undefined)).toThrowError("There is no Time Unit with type undefined");
    });

    it("should throw an error when cannot format provided time", () => {
        const time = "s3";

        expect(() => pipe.transform(time, NgxMatTimepickerUnits.HOUR))
            .toThrowError(`Cannot format provided time - ${time} to locale - ${defaultLocale}`);
    });
});
