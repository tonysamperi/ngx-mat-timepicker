import {Inject, Injectable, Pipe, PipeTransform} from "@angular/core";
//
import {NGX_MAT_TIMEPICKER_LOCALE} from "../tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerUnits} from "../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerMeasure} from "../models/ngx-mat-timepicker-measures.enum";
//
import {DateTime, NumberingSystem} from "luxon";

@Pipe({
    name: "ngxMatTimepickerParser"
})
@Injectable()
export class NgxMatTimepickerParserPipe implements PipeTransform {

    private readonly _numberingSystem: NumberingSystem;

    constructor(@Inject(NGX_MAT_TIMEPICKER_LOCALE) private _locale: string) {
        this._numberingSystem = DateTime.local().setLocale(this._locale).resolvedLocaleOpts().numberingSystem as NumberingSystem;
    }

    transform(time: string | number, timeUnit = NgxMatTimepickerUnits.HOUR): string {
        if (time == null || time === "") {
            return "";
        }

        if (!isNaN(+time)) {
            return `${time}`;
        }

        if (timeUnit === NgxMatTimepickerUnits.MINUTE) {
            return this._parseTime(time, "mm", NgxMatTimepickerMeasure.minute).toString();
        }

        return this._parseTime(time, "HH", NgxMatTimepickerMeasure.hour).toString();
    }

    private _parseTime(time: string | number, format: string, timeMeasure: NgxMatTimepickerMeasure): number {
        const parsedTime = DateTime.fromFormat(String(time), format, {numberingSystem: this._numberingSystem})[timeMeasure];
        if (!isNaN(parsedTime)) {
            return parsedTime;
        }

        throw new Error(`Cannot parse time - ${time}`);
    }

}
