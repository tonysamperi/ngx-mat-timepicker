import {Inject, Injectable, Pipe, PipeTransform} from "@angular/core";
//
import {NGX_TIMEPICKER_LOCALE} from "../tokens/time-locale.token";
import {NgxTimepickerUnits} from "../models/ngx-timepicker-units.enum";
import {NgxTimepickerMeasure} from "../models/ngx-timepicker-measures.enum";
//
import {DateTime, NumberingSystem} from "luxon";

@Pipe({
    name: "timeParser"
})
@Injectable()
export class NgxTimepickerParserPipe implements PipeTransform {

    private readonly _numberingSystem: NumberingSystem;

    constructor(@Inject(NGX_TIMEPICKER_LOCALE) private _locale: string) {
        this._numberingSystem = DateTime.local().setLocale(this._locale).resolvedLocaleOpts().numberingSystem as NumberingSystem;
    }

    transform(time: string | number, timeUnit = NgxTimepickerUnits.HOUR): string {
        if (time == null || time === "") {
            return "";
        }

        if (!isNaN(+time)) {
            return `${time}`;
        }

        if (timeUnit === NgxTimepickerUnits.MINUTE) {
            return this._parseTime(time, "mm", NgxTimepickerMeasure.minute).toString();
        }

        return this._parseTime(time, "HH", NgxTimepickerMeasure.hour).toString();
    }

    private _parseTime(time: string | number, format: string, timeMeasure: NgxTimepickerMeasure): number {
        const parsedTime = DateTime.fromFormat(String(time), format, {numberingSystem: this._numberingSystem})[timeMeasure];
        if (!isNaN(parsedTime)) {
            return parsedTime;
        }

        throw new Error(`Cannot parse time - ${time}`);
    }

}
