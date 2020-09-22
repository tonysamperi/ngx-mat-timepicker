import { NgxTimepickerPeriods } from "./ngx-timepicker-periods.enum";
//
import { DateTime } from "luxon";

export interface NgxTimepickerDisabledConfig {
    format: number;
    max: DateTime;
    min: DateTime;
    period?: NgxTimepickerPeriods;
}
