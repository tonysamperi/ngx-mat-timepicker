import {TemplateRef} from "@angular/core";
import {DateTime} from "ts-luxon";
//
import {NgxMatTimepickerFormatType} from "./ngx-mat-timepicker-format.type";
import {NgxMatTimepickerRef} from "./ngx-mat-timepicker-ref.interface";
import {NgxMatTimepickerService} from "../services/ngx-mat-timepicker.service";

export interface NgxMatTimepickerConfig {
    appendToInput: boolean;
    cancelBtnTmpl: TemplateRef<Node>;
    confirmBtnTmpl: TemplateRef<Node>;
    defaultTime: string;
    disableAnimation: boolean;
    disabled: boolean;
    dottedMinutesInGap: boolean;
    editableHintTmpl: TemplateRef<Node>;
    enableKeyboardInput: boolean;
    format: NgxMatTimepickerFormatType;
    hoursOnly: boolean;
    inputElement: any;
    maxTime: DateTime;
    minTime: DateTime;
    minutesGap: number;
    preventOverlayClick: boolean;
    time: string;
    timepickerBaseRef: NgxMatTimepickerRef;
    timepickerState: NgxMatTimepickerService;
    timepickerClass: string;
}
