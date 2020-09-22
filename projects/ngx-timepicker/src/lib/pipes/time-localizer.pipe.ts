import {Inject, Pipe, PipeTransform} from "@angular/core";
//
import {NGX_TIMEPICKER_LOCALE} from "../tokens/time-locale.token";
import {NgxTimepickerUnits} from "../models/ngx-timepicker-units.enum";
import {NgxTimepickerMeasure} from "../models/ngx-timepicker-measures.enum";
//
import {DateTime} from "luxon";

@Pipe({
    name: "timeLocalizer"
})
export class TimeLocalizerPipe implements PipeTransform {

    constructor(@Inject(NGX_TIMEPICKER_LOCALE) private _locale: string) {
    }

    transform(time: number | string, timeUnit: NgxTimepickerUnits, isKeyboardEnabled = false): string {
        if (time == null || time === "") {
            return "";
        }

        switch (timeUnit) {
            case NgxTimepickerUnits.HOUR: {
                const format = (time === 0 || isKeyboardEnabled) ? "HH" : "H";

                return this._formatTime(NgxTimepickerMeasure.hour, time, format);
            }
            case NgxTimepickerUnits.MINUTE:
                return this._formatTime(NgxTimepickerMeasure.minute, time, "mm");
            default:
                throw new Error(`There is no Time Unit with type ${timeUnit}`);
        }
    }

    private _formatTime(timeMeasure: NgxTimepickerMeasure, time: string | number, format: string): string {
        try {
            return DateTime.fromObject({[timeMeasure]: +time}).setLocale(this._locale).toFormat(format);
        } catch {
            throw new Error(`Cannot format provided time - ${time} to locale - ${this._locale}`);
        }
    }
}
