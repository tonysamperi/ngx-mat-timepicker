import {NgxMatTimepickerFormat} from "../models/ngx-mat-timepicker-format.enum";
import {NgxMatTimepickerPeriods} from "../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerOptions} from "../models/ngx-mat-timepicker-options.interface";
//
import {DateTime, LocaleOptions, NumberingSystem} from "ts-luxon";

// @dynamic
export class NgxMatTimepickerAdapter {

    static defaultFormat = 12;
    static defaultLocale = "en-US";
    static defaultNumberingSistem: NumberingSystem = "latn";

    /***
     *  Format hour according to time format (12 or 24)
     */
    static formatHour(currentHour: number, format: number, period: NgxMatTimepickerPeriods): number {
        if (format === 24) {
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
        const {format} = opts;
        const parsedTime = NgxMatTimepickerAdapter.parseTime(time, opts).setLocale(NgxMatTimepickerAdapter.defaultLocale);

        if (format !== 24) {
            return parsedTime.toLocaleString({
                ...DateTime.TIME_SIMPLE,
                hour12: format !== 24
            }).replace(/\u200E/g, "");
        }

        return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
        }).replace(/\u200E/g, "");
    }

    static fromDateTimeToString(time: DateTime, format: number): string {
        const timeFormat = format === 24 ? NgxMatTimepickerFormat.TWENTY_FOUR : NgxMatTimepickerFormat.TWELVE;

        return time.reconfigure({
            numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem,
            locale: NgxMatTimepickerAdapter.defaultLocale
        }).toFormat(timeFormat);
    }

    static isBetween(time: DateTime, before: DateTime, after: DateTime, unit: "hours" | "minutes" = "minutes"): boolean {
        if (unit === "hours") {
            return this.isSameOrBefore(time, after, unit) && this.isSameOrAfter(time, before, unit);
        }
        if (unit === "minutes") {
            return this.isSameOrBefore(time, after) && this.isSameOrAfter(time, before);
        }
    }

    static isSameOrAfter(time: DateTime, compareWith: DateTime, unit: "hours" | "minutes" = "minutes"): boolean {
        if (unit === "hours") {
            return time.hour >= compareWith.hour;
        }
        if (unit === "minutes") {
            return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
        }
    }

    static isSameOrBefore(time: DateTime, compareWith: DateTime, unit: "hours" | "minutes" = "minutes"): boolean {
        if (unit === "hours") {
            return time.hour <= compareWith.hour;
        }
        if (unit === "minutes") {
            return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
        }
    }

    static isTimeAvailable(time: string,
                           min?: DateTime,
                           max?: DateTime,
                           granularity?: "hours" | "minutes",
                           minutesGap?: number | null,
                           format?: number): boolean {
        if (!time) {
            return;
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

    static parseTime(time: string, opts: NgxMatTimepickerOptions): DateTime {
        const {numberingSystem, locale} = NgxMatTimepickerAdapter._getLocaleOptionsByTime(time, opts);
        const isPeriodExist = time.split(" ").length === 2;
        const timeMask = isPeriodExist ? NgxMatTimepickerFormat.TWELVE_SHORT : NgxMatTimepickerFormat.TWENTY_FOUR_SHORT;

        return DateTime.fromFormat(time, timeMask, {numberingSystem, locale});
    }

    static toLocaleTimeString(time: string, opts: NgxMatTimepickerOptions = {}): string {
        const {format = NgxMatTimepickerAdapter.defaultFormat, locale = NgxMatTimepickerAdapter.defaultLocale} = opts;
        const hourCycle = format === 24 ? "h23" : "h12";
        const timeMask = (format === 24) ? NgxMatTimepickerFormat.TWENTY_FOUR_SHORT : NgxMatTimepickerFormat.TWELVE_SHORT;

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

    private static _getLocaleOptionsByTime(time: string, opts: NgxMatTimepickerOptions): LocaleOptions {
        const {numberingSystem, locale} = DateTime.local().reconfigure({
            locale: opts.locale,
            numberingSystem: opts.numberingSystem,
            outputCalendar: opts.outputCalendar,
            defaultToEN: opts.defaultToEN
        }).resolvedLocaleOptions();
        const localeConfig: LocaleOptions = {
            numberingSystem: numberingSystem as NumberingSystem,
            locale
        };
        const defaultConfig: LocaleOptions = {
            numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem,
            locale: NgxMatTimepickerAdapter.defaultLocale
        };

        return isNaN(parseInt(time, 10)) ? localeConfig : defaultConfig;
    }
}
