import {Inject, Pipe, PipeTransform} from "@angular/core";
//
import {NGX_MAT_TIMEPICKER_LOCALE} from "../tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerUnits} from "../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerMeasure} from "../models/ngx-mat-timepicker-measures.enum";
//
import {DateTime} from "luxon";

@Pipe({
    name: "timeLocalizer"
})
export class NgxMatTimepickerTimeLocalizerPipe implements PipeTransform {

    constructor(@Inject(NGX_MAT_TIMEPICKER_LOCALE) private _locale: string) {
    }

    transform(time: number | string, timeUnit: NgxMatTimepickerUnits, isKeyboardEnabled = false): string {
        if (time == null || time === "") {
            return "";
        }

        switch (timeUnit) {
            case NgxMatTimepickerUnits.HOUR: {
                const format = (time === 0 || isKeyboardEnabled) ? "HH" : "H";

                return this._formatTime(NgxMatTimepickerMeasure.hour, time, format);
            }
            case NgxMatTimepickerUnits.MINUTE:
                return this._formatTime(NgxMatTimepickerMeasure.minute, time, "mm");
            default:
                throw new Error(`There is no Time Unit with type ${timeUnit}`);
        }
    }

    private _formatTime(timeMeasure: NgxMatTimepickerMeasure, time: string | number, format: string): string {
        try {
            return DateTime.fromObject({[timeMeasure]: +time}).setLocale(this._locale).toFormat(format);
        } catch {
            throw new Error(`Cannot format provided time - ${time} to locale - ${this._locale}`);
        }
    }
}
