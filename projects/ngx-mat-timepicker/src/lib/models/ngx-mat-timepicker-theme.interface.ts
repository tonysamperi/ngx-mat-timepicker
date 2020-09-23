import {NgxMatTimepickerDialTheme} from "./ngx-mat-timepicker-dial-theme.interface";
import {NgxMaxTimepickerFaceTheme} from "./ngx-mat-timepicker-face-theme.interface";
import {NgxMatTimepickerContainerTheme} from "./ngx-mat-container-theme.interface";

export interface NgxMatTimepickerTheme {
    clockFace?: NgxMaxTimepickerFaceTheme;
    container?: NgxMatTimepickerContainerTheme;
    dial?: NgxMatTimepickerDialTheme;
}
