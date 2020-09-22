import {NgxTimepickerFormat} from "../models/ngx-timepicker-format.enum";
import {NgxTimepickerPeriods} from "../models/ngx-timepicker-periods.enum";
import {isBetween, isSameOrAfter, isSameOrBefore} from "../utils/timepicker.utils";
import {TimeOptions} from "../models/time-options.interface";
//
import {DateTime, LocaleOptions, NumberingSystem} from "luxon";

// @dynamic
export class NgxTimepickerAdapter {

    static DEFAULT_FORMAT = 12;
    static DEFAULT_LOCALE = "en-US";
    static DEFAULT_NUMBERING_SYSTEM: NumberingSystem = "latn";

    /***
     *  Format hour according to time format (12 or 24)
     */
    static formatHour(currentHour: number, format: number, period: NgxTimepickerPeriods): number {
        if (format === 24) {
            return currentHour;
        }
        const hour = period === NgxTimepickerPeriods.AM ? currentHour : currentHour + 12;

        if (period === NgxTimepickerPeriods.AM && hour === 12) {
            return 0;
        }
        else if (period === NgxTimepickerPeriods.PM && hour === 24) {
            return 12;
        }

        return hour;
    }

    static formatTime(time: string, opts: TimeOptions): string {
        if (!time) {
            return "Invalid Time";
        }
        const {format} = opts;
        const parsedTime = NgxTimepickerAdapter.parseTime(time, opts).setLocale(NgxTimepickerAdapter.DEFAULT_LOCALE);

        if (format !== 24) {
            return parsedTime.toLocaleString({
                ...DateTime.TIME_SIMPLE,
                hour12: format !== 24,
                numberingSystem: NgxTimepickerAdapter.DEFAULT_NUMBERING_SYSTEM
            }).replace(/\u200E/g, "");
        }

        return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
        }).replace(/\u200E/g, "");
    }

    static fromDateTimeToString(time: DateTime, format: number): string {
        const timeFormat = format === 24 ? NgxTimepickerFormat.TWENTY_FOUR : NgxTimepickerFormat.TWELVE;

        return time.reconfigure({
            numberingSystem: NgxTimepickerAdapter.DEFAULT_NUMBERING_SYSTEM,
            locale: NgxTimepickerAdapter.DEFAULT_LOCALE
        }).toFormat(timeFormat);
    }

    static isTimeAvailable(
        time: string,
        min?: DateTime,
        max?: DateTime,
        granularity?: "hours" | "minutes",
        minutesGap?: number | null,
        format?: number
    ): boolean {
        if (!time) {
            return;
        }

        const convertedTime = this.parseTime(time, {format});
        const minutes = convertedTime.minute;

        if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
            throw new Error(`Your minutes - ${minutes} doesn\'t match your minutesGap - ${minutesGap}`);
        }
        const isAfter = (min && !max)
            && isSameOrAfter(convertedTime, min, granularity);
        const isBefore = (max && !min)
            && isSameOrBefore(convertedTime, max, granularity);
        const between = (min && max)
            && isBetween(convertedTime, min, max, granularity);
        const isAvailable = !min && !max;

        return isAfter || isBefore || between || isAvailable;
    }

    static parseTime(time: string, opts: TimeOptions): DateTime {
        const {numberingSystem, locale} = NgxTimepickerAdapter._getLocaleOptionsByTime(time, opts);
        const isPeriodExist = time.split(" ").length === 2;
        const timeMask = isPeriodExist ? NgxTimepickerFormat.TWELVE_SHORT : NgxTimepickerFormat.TWENTY_FOUR_SHORT;

        return DateTime.fromFormat(time, timeMask, {numberingSystem, locale});
    }

    static toLocaleTimeString(time: string, opts: TimeOptions = {}): string {
        const {format = NgxTimepickerAdapter.DEFAULT_FORMAT, locale = NgxTimepickerAdapter.DEFAULT_LOCALE} = opts;
        const hourCycle = format === 24 ? "h23" : "h12";
        const timeFormat = {...DateTime.TIME_SIMPLE, hourCycle};
        const timeMask = (format === 24) ? NgxTimepickerFormat.TWENTY_FOUR_SHORT : NgxTimepickerFormat.TWELVE_SHORT;

        return DateTime.fromFormat(time, timeMask).setLocale(locale).toLocaleString(timeFormat);
    }

    private static _getLocaleOptionsByTime(time: string, opts: TimeOptions): LocaleOptions {
        const {numberingSystem, locale} = DateTime.local().setLocale(opts.locale).resolvedLocaleOpts();
        const localeConfig: LocaleOptions = {
            numberingSystem: numberingSystem as NumberingSystem,
            locale
        };
        const defaultConfig: LocaleOptions = {
            numberingSystem: NgxTimepickerAdapter.DEFAULT_NUMBERING_SYSTEM,
            locale: NgxTimepickerAdapter.DEFAULT_LOCALE
        };

        return isNaN(parseInt(time, 10)) ? localeConfig : defaultConfig;
    }
}
