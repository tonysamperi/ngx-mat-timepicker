import {NgxTimepickerDialTheme} from "./ngx-timepicker-dial-theme.interface";
import {NgxTimepickerFaceTheme} from "./ngx-timepicker-face-theme.interface";
import {NgxTimepickerContainerTheme} from "./ngx-container-theme.interface";

export interface NgxTimepickerTheme {
    clockFace?: NgxTimepickerFaceTheme;
    container?: NgxTimepickerContainerTheme;
    dial?: NgxTimepickerDialTheme;
}
