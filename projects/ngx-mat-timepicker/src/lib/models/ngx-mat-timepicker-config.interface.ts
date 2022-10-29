import {TemplateRef} from "@angular/core";
import {ThemePalette} from "@angular/material/core";
//
import {NgxMatTimepickerRef} from "./ngx-mat-timepicker-ref.interface";
import {NgxMatTimepickerTheme} from "./ngx-mat-timepicker-theme.interface";
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
    editableHintTmpl: TemplateRef<Node>;
    enableKeyboardInput: boolean;
    format: 12 | 24;
    hoursOnly: boolean;
    inputElement: any;
    maxTime: DateTime;
    minTime: DateTime;
    minutesGap: number;
    preventOverlayClick: boolean;
    theme: NgxMatTimepickerTheme;
    time: string;
    timepickerBaseRef: NgxMatTimepickerRef;
    timepickerClass: string;
}
