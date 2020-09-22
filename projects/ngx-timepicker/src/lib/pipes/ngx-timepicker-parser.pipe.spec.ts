import { NgxTimepickerParserPipe } from "./ngx-timepicker-parser.pipe";
import { NgxTimepickerUnits } from "../models/ngx-timepicker-units.enum";
import { DateTime } from "luxon";

describe("NgxTimepickerParserPipe", () => {
    const locale = "ar-AE";
    const pipe = new NgxTimepickerParserPipe(locale);

    it("should create an instance", () => {
        expect(pipe).toBeTruthy();
    });

    it("should not parse time when provided invalid value", () => {
        const expected = "";

        expect(pipe.transform(undefined, NgxTimepickerUnits.HOUR)).toBe(expected);
        expect(pipe.transform(null, NgxTimepickerUnits.HOUR)).toBe(expected);
        expect(pipe.transform("", NgxTimepickerUnits.HOUR)).toBe(expected);
    });

    it("should return unparsed time if number provided", () => {
        const time = 5;

        expect(pipe.transform(time)).toBe(time as any);
    });

    it("should parse arabian hour to latin", () => {
        const unparsedHours = Array(24).fill(0).map((v, i) => v + i);

        unparsedHours.forEach(hour => {
            const unparsedHour = DateTime.fromObject({hour, numberingSystem: "arab"}).toFormat("H");

            expect(pipe.transform(unparsedHour, NgxTimepickerUnits.HOUR)).toBe(hour);
        });
    });

    it("should parse arabian minute to latin", () => {
        const unparsedMinutes = Array(59).fill(0).map((v, i) => v + i);

        unparsedMinutes.forEach(minute => {
            const unparsedMinute = DateTime.fromObject({minute, numberingSystem: "arab"}).toFormat("m");

            expect(pipe.transform(unparsedMinute, NgxTimepickerUnits.MINUTE)).toBe(minute);
        });
    });

    it("should throw an error when cannot parse provided time", () => {
        const time = "s3";

        try {
            pipe.transform(time);
        } catch (e) {
            expect(e instanceof Error).toBeTruthy();
            expect(e.message).toBe(`Cannot parse time - ${time}`);
        }
    });
});
