import {Injectable, Pipe, PipeTransform, inject} from "@angular/core";
import {DateTime, NumberingSystem} from "ts-luxon";
//
import {NgxMatTimepickerUnits} from "../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerMeasure} from "../models/ngx-mat-timepicker-measures.enum";
import {NgxMatTimepickerLocaleService} from "../services/ngx-mat-timepicker-locale.service";

@Pipe({
    name: "ngxMatTimepickerParser"
})
@Injectable()
export class NgxMatTimepickerParserPipe implements PipeTransform {

    private get _locale(): string {
        return this._timepickerLocaleSrv.locale;
    }

    private readonly _numberingSystem: NumberingSystem;
    private _timepickerLocaleSrv = inject(NgxMatTimepickerLocaleService);


    constructor() {
        this._numberingSystem = DateTime.utc().setLocale(this._locale).resolvedLocaleOptions().numberingSystem as NumberingSystem;
    }

    transform(time: string | number, timeUnit = NgxMatTimepickerUnits.HOUR): string {
        if (time == null || time === "") {
            return "";
        }

        if (!isNaN(+time)) {
            return `${time}`;
        }

        if (timeUnit === NgxMatTimepickerUnits.MINUTE) {
            return this._parseTime(time, "m", NgxMatTimepickerMeasure.minute).toString();
        }

        return this._parseTime(time, "H", NgxMatTimepickerMeasure.hour).toString();
    }

    private _parseTime(time: string | number, format: string, timeMeasure: NgxMatTimepickerMeasure): number {
        const parsedTime = DateTime.fromFormat(String(time), format, {
            locale: this._locale,
            numberingSystem: this._numberingSystem,
            zone: "utc"
        })[timeMeasure];
        if (!isNaN(parsedTime)) {
            return parsedTime;
        }

        throw new Error(`Cannot parse time - ${time}`);
    }

}
