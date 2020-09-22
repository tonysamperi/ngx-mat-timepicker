import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
//
import {NgxTimepickerComponent} from "./components/ngx-timepicker/ngx-timepicker.component";
import {NgxTimepickerToggleComponent} from "./components/ngx-timepicker-toggle/ngx-timepicker-toggle.component";
import {NgxTimepickerDirective} from "./directives/ngx-timepicker.directive";
import {NgxTimepickerToggleIconDirective} from "./directives/ngx-timepicker-toggle-icon.directive";
import {NgxTimepickerThemeDirective} from "./directives/ngx-timepicker-theme.directive";
import {
    NgxTimepicker24HoursFaceComponent
} from "./components/timepicker-24-hours-face/ngx-timepicker-24-hours-face.component";
import {
    NgxTimepicker12HoursFaceComponent
} from "./components/timepicker-12-hours-face/ngx-timepicker-12-hours-face.component";
import {
    NgxTimepickerMinutesFaceComponent
} from "./components/timepicker-minutes-face/ngx-timepicker-minutes-face.component";
import {NgxTimepickerFaceComponent} from "./components/timepicker-face/ngx-timepicker-face.component";
import {NgxTimepickerDialComponent} from "./components/timepicker-dial/ngx-timepicker-dial.component";
import {
    NgxTimepickerDialControlComponent
} from "./components/timepicker-dial-control/ngx-timepicker-dial-control.component";
import {NgxTimepickerPeriodComponent} from "./components/timepicker-period/ngx-timepicker-period.component";
import {TimeFormatterPipe} from "./pipes/time-formatter.pipe";
import {OverlayDirective} from "./directives/overlay.directive";
import {MinutesFormatterPipe} from "./pipes/minutes-formatter.pipe";
import {NgxTimepickerAutofocusDirective} from "./directives/ngx-timepicker-autofocus.directive";
import {NgxTimepickerFieldComponent} from "./components/ngx-timepicker-field/ngx-timepicker-field.component";
import {
    NgxTimepickerControlComponent
} from "./components/ngx-timepicker-field/ngx-timepicker-control/ngx-timepicker-control.component";
import {TimeLocalizerPipe} from "./pipes/time-localizer.pipe";
import {NGX_TIMEPICKER_LOCALE} from "./tokens/time-locale.token";
import {NgxTimepickerParserPipe} from "./pipes/ngx-timepicker-parser.pipe";
import {ActiveHourPipe} from "./pipes/active-hour.pipe";
import {ActiveMinutePipe} from "./pipes/active-minute.pipe";
import {
    NgxTimepickerContainerComponent
} from "./components/ngx-timepicker-container/ngx-timepicker-container.component";
import {
    NgxTimepickerContentComponent
} from "./components/ngx-timepicker-content/ngx-timepicker-content.component";
import {AppendToInputDirective} from "./directives/append-to-input.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatSelectModule,
        MatToolbarModule
    ],
    exports: [
        NgxTimepickerComponent,
        NgxTimepickerToggleComponent,
        NgxTimepickerFieldComponent,
        NgxTimepickerDirective,
        NgxTimepickerToggleIconDirective
    ],
    declarations: [
        NgxTimepickerComponent,
        NgxTimepicker24HoursFaceComponent,
        NgxTimepicker12HoursFaceComponent,
        NgxTimepickerMinutesFaceComponent,
        NgxTimepickerFaceComponent,
        NgxTimepickerToggleComponent,
        NgxTimepickerDialComponent,
        NgxTimepickerDialControlComponent,
        NgxTimepickerPeriodComponent,
        TimeFormatterPipe,
        NgxTimepickerDirective,
        OverlayDirective,
        NgxTimepickerToggleIconDirective,
        NgxTimepickerAutofocusDirective,
        MinutesFormatterPipe,
        NgxTimepickerThemeDirective,
        NgxTimepickerFieldComponent,
        NgxTimepickerControlComponent,
        TimeLocalizerPipe,
        NgxTimepickerParserPipe,
        ActiveHourPipe,
        ActiveMinutePipe,
        NgxTimepickerContainerComponent,
        NgxTimepickerContentComponent,
        AppendToInputDirective
    ],
    entryComponents: [NgxTimepickerContainerComponent]
})
export class NgxTimepickerModule {

    static setLocale(locale: string): ModuleWithProviders<NgxTimepickerModule> {
        return {
            ngModule: NgxTimepickerModule,
            providers: [
                {provide: NGX_TIMEPICKER_LOCALE, useValue: locale}
            ]
        };
    }
}
