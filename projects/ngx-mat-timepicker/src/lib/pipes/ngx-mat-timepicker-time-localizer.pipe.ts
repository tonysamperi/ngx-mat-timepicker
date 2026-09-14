import {Pipe, PipeTransform, inject} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "../services/ngx-mat-timepicker-locale.service";
import {NgxMatTimepickerUnits} from "../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerMeasure} from "../models/ngx-mat-timepicker-measures.enum";
//
import {DateTime} from "ts-luxon";

@Pipe({
    name: "timeLocalizer"
})
export class NgxMatTimepickerTimeLocalizerPipe implements PipeTransform {

    private get _locale(): string {
        return this._timepickerLocaleSrv.locale;
    }

    private _timepickerLocaleSrv = inject(NgxMatTimepickerLocaleService);

    transform(time: number | string, timeUnit: NgxMatTimepickerUnits, isKeyboardEnabled = false, isHole = !1): string {
        if (time == null || time === "") {
            return "";
        }

        if (isHole) {
            const format = (time === 0 || isKeyboardEnabled || timeUnit === NgxMatTimepickerUnits.MINUTE) ? "HH" : "H";

            return this._formatHoleTime(time, format.length);
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
        }
        catch {
            throw new Error(`Cannot format provided time - ${time} to locale - ${this._locale}`);
        }
    }

    private _formatHoleTime(time: string | number, minimumIntegerDigits: number): string {
        return new Intl.NumberFormat(this._locale, {
            minimumIntegerDigits,
            useGrouping: !1
        }).format(+time);
    }
}
