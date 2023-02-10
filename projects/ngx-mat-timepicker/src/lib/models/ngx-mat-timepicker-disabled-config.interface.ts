import {NgxMatTimepickerFormatType} from "./ngx-mat-timepicker-format.type";
import { NgxMatTimepickerPeriods } from "./ngx-mat-timepicker-periods.enum";
//
import { DateTime } from "ts-luxon";

export interface NgxMatTimepickerDisabledConfig {
    format: NgxMatTimepickerFormatType;
    max: DateTime;
    min: DateTime;
    period?: NgxMatTimepickerPeriods;
}
