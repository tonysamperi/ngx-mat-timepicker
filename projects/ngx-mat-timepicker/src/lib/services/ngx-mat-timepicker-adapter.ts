import {NgxMatTimepickerFormat} from "../models/ngx-mat-timepicker-format.enum";
import {NgxMatTimepickerFormatType} from "../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerPeriods} from "../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerOptions} from "../models/ngx-mat-timepicker-options.interface";
//
import {DateTime, LocaleOptions, NumberingSystem} from "ts-luxon";

// @dynamic
export class NgxMatTimepickerAdapter {

    static defaultFormat: NgxMatTimepickerFormatType = 12;
    static defaultLocale: string = "en-US";
    static defaultNumberingSystem: NumberingSystem = "latn";

    /***
     *  Format hour according to time format (12 or 24)
     */
    static formatHour(currentHour: number, format: NgxMatTimepickerFormatType, period: NgxMatTimepickerPeriods): number {
        if (this.isTwentyFour(format)) {
            return currentHour;
        }
        const hour = period === NgxMatTimepickerPeriods.AM ? currentHour : currentHour + 12;

        if (period === NgxMatTimepickerPeriods.AM && hour === 12) {
            return 0;
        }
        else if (period === NgxMatTimepickerPeriods.PM && hour === 24) {
            return 12;
        }

        return hour;
    }

    static formatTime(time: string, opts: NgxMatTimepickerOptions): string {
        if (!time) {
            return "Invalid Time";
        }
        const parsedTime = this.parseTime(time, opts).setLocale(this.defaultLocale);
        if (!parsedTime.isValid) {
            return "Invalid time";
        }
        const isTwelve = !this.isTwentyFour(opts.format as NgxMatTimepickerFormatType);
        if (isTwelve) {
            return parsedTime.toLocaleString({
                ...DateTime.TIME_SIMPLE,
                hour12: isTwelve
            }).replace(/\u200E/g, "");
        }

        return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
        }).replace(/\u200E/g, "");
    }

    static fromDateTimeToString(time: DateTime, format: NgxMatTimepickerFormatType): string {

        return time.reconfigure({
            numberingSystem: this.defaultNumberingSystem,
            locale: this.defaultLocale
        }).toFormat(this.isTwentyFour(format) ? NgxMatTimepickerFormat.TWENTY_FOUR : NgxMatTimepickerFormat.TWELVE);
    }

    static isBetween(time: DateTime, before: DateTime, after: DateTime, unit: "hours" | "minutes" = "minutes"): boolean {
        const innerUnit = unit === "hours" ? unit : void 0;

        return this.isSameOrBefore(time, after, innerUnit) && this.isSameOrAfter(time, before, innerUnit);
    }

    static isSameOrAfter(time: DateTime, compareWith: DateTime, unit: "hours" | "minutes" = "minutes"): boolean {
        if (unit === "hours") {
            return time.hour >= compareWith.hour;
        }

        return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
    }

    static isSameOrBefore(time: DateTime, compareWith: DateTime, unit: "hours" | "minutes" = "minutes"): boolean {
        if (unit === "hours") {
            return time.hour <= compareWith.hour;
        }

        return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
    }

    static isTimeAvailable(time: string,
                           min?: DateTime,
                           max?: DateTime,
                           granularity?: "hours" | "minutes",
                           minutesGap?: number | null,
                           format?: number): boolean {
        if (!time) {
            return void 0;
        }

        const convertedTime = this.parseTime(time, {format});
        const minutes = convertedTime.minute;

        if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
            throw new Error(`Your minutes - ${minutes} doesn\'t match your minutesGap - ${minutesGap}`);
        }
        const isAfter = (min && !max)
            && this.isSameOrAfter(convertedTime, min, granularity);
        const isBefore = (max && !min)
            && this.isSameOrBefore(convertedTime, max, granularity);
        const between = (min && max)
            && this.isBetween(convertedTime, min, max, granularity);
        const isAvailable = !min && !max;

        return isAfter || isBefore || between || isAvailable;
    }

    static isTwentyFour(format: NgxMatTimepickerFormatType): boolean {
        return format === 24;
    }

    static parseTime(time: string, opts: NgxMatTimepickerOptions): DateTime {
        const localeOpts = this._getLocaleOptionsByTime(time, opts);
        let timeMask = NgxMatTimepickerFormat.TWENTY_FOUR_SHORT;
        // If there's a space, means we have the meridiem. Way faster than splitting text
        // if (~time.indexOf(" ")) {
        // 09/02/2023 it seems that sometimes the space from the formatter is a nnbsp (Chromium >= 110)
        // which causes the indexOf(" ") to fail: charCode 32, while nbsp is 8239
        if (time.match(/\s/g)) {
            /*
             * We translate the meridiem in simple AM or PM letters (instead of A.M.)
             * because even if we set the locale with NgxMatTimepickerModule.setLocale
             * the default (en-US) will always be used here
             */
            time = time.replace(/\.\s*/g, "");
            timeMask = NgxMatTimepickerFormat.TWELVE_SHORT;
        }

        return DateTime.fromFormat(time.replace(/\s+/g, " "), timeMask, {
            numberingSystem: localeOpts.numberingSystem,
            locale: localeOpts.locale
        });
    }

    static toLocaleTimeString(time: string, opts: NgxMatTimepickerOptions = {}): string {
        const {format = this.defaultFormat, locale = this.defaultLocale} = opts;
        let hourCycle: "h12" | "h23" = "h12";
        let timeMask = NgxMatTimepickerFormat.TWELVE_SHORT;
        if (this.isTwentyFour(format as NgxMatTimepickerFormatType)) {
            hourCycle = "h23";
            timeMask = NgxMatTimepickerFormat.TWENTY_FOUR_SHORT;
        }

        return DateTime.fromFormat(time, timeMask).reconfigure({
            locale,
            numberingSystem: opts.numberingSystem,
            defaultToEN: opts.defaultToEN,
            outputCalendar: opts.outputCalendar
        }).toLocaleString({
            ...DateTime.TIME_SIMPLE,
            hourCycle
        });
    }

    /**
     *
     * @param time
     * @param opts
     * @private
     */
    private static _getLocaleOptionsByTime(time: string, opts: NgxMatTimepickerOptions): LocaleOptions {
        const {numberingSystem, locale} = DateTime.now().reconfigure({
            locale: opts.locale,
            numberingSystem: opts.numberingSystem,
            outputCalendar: opts.outputCalendar,
            defaultToEN: opts.defaultToEN
        }).resolvedLocaleOptions();

        return isNaN(parseInt(time, 10)) ? {
            numberingSystem: numberingSystem as NumberingSystem,
            locale
        } : {
            numberingSystem: this.defaultNumberingSystem,
            locale: this.defaultLocale
        };
    }
}
