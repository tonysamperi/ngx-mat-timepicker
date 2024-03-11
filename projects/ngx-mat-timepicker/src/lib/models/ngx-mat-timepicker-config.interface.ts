import {TemplateRef} from "@angular/core";
import {ThemePalette} from "@angular/material/core";
//
import {NgxMatTimepickerFormatType} from "./ngx-mat-timepicker-format.type";
import {NgxMatTimepickerRef} from "./ngx-mat-timepicker-ref.interface";
//
import {DateTime} from "ts-luxon";

export interface NgxMatTimepickerConfig {
    appendToInput: boolean;
    cancelBtnTmpl: TemplateRef<Node>;
    color: ThemePalette;
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
    timepickerClass: string;
}
