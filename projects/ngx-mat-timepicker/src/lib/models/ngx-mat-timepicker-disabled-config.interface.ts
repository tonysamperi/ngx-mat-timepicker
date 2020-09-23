import { NgxMatTimepickerPeriods } from "./ngx-mat-timepicker-periods.enum";
//
import { DateTime } from "luxon";

export interface NgxMatTimepickerDisabledConfig {
    format: number;
    max: DateTime;
    min: DateTime;
    period?: NgxMatTimepickerPeriods;
}
