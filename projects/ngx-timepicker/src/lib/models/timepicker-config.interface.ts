import { TemplateRef } from "@angular/core";
import { DateTime } from "luxon";
import { NgxTimepickerRef } from "./timepicker-ref.interface";
import { NgxTimepickerTheme } from "./ngx-timepicker-theme.interface";

export interface TimepickerConfig {
    appendToInput: boolean;
    cancelBtnTmpl: TemplateRef<Node>;
    confirmBtnTmpl: TemplateRef<Node>;
    defaultTime: string;
    disableAnimation: boolean;
    disabled: boolean;
    editableHintTmpl: TemplateRef<Node>;
    enableKeyboardInput: boolean;
    format: number;
    hoursOnly: boolean;
    inputElement: any;
    maxTime: DateTime;
    minTime: DateTime;
    minutesGap: number;
    preventOverlayClick: boolean;
    theme: NgxTimepickerTheme;
    time: string;
    timepickerBaseRef: NgxTimepickerRef;
    timepickerClass: string;
}
