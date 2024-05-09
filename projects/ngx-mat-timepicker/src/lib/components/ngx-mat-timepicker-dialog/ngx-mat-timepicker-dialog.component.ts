import {Component, EventEmitter, Inject, Input, Output, ViewEncapsulation} from "@angular/core";
import {NgClass, NgSwitch, NgSwitchCase, NgIf, NgTemplateOutlet, AsyncPipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
//
import {NgxMatTimepickerBaseDirective} from "../../directives/ngx-mat-timepicker-base.directive";
import {NgxMatTimepickerConfig} from "../../models/ngx-mat-timepicker-config.interface";
import {NgxMatTimepickerLocaleService} from "../../services/ngx-mat-timepicker-locale.service";
import {NgxMatTimepickerService} from "../../services/ngx-mat-timepicker.service";
import {NgxMatTimepickerEventService} from "../../services/ngx-mat-timepicker-event.service";
import {
    NgxMatTimepickerMinutesFaceComponent
} from "../ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component";
import {
    NgxMatTimepicker12HoursFaceComponent
} from "../ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component";
import {
    NgxMatTimepicker24HoursFaceComponent
} from "../ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component";
import {NgxMatTimepickerDialComponent} from "../ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component";
import {NgxMatTimepickerContentComponent} from "../ngx-mat-timepicker-content/ngx-mat-timepicker-content.component";
import { TTimepickerMode } from "../../models/timepicker-mode.enum";

@Component({
    selector: "ngx-mat-timepicker-dialog",
    styleUrls: ["./ngx-mat-timepicker-dialog.component.scss"],
    templateUrl: "./ngx-mat-timepicker-dialog.component.html",
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        AsyncPipe,
        // Common
        NgClass,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        NgTemplateOutlet,
        // Material
        MatButtonModule,
        MatDialogModule,
        MatToolbarModule,
        // NgxMatTimepicker
        NgxMatTimepickerContentComponent,
        NgxMatTimepickerDialComponent,
        NgxMatTimepicker24HoursFaceComponent,
        NgxMatTimepicker12HoursFaceComponent,
        NgxMatTimepickerMinutesFaceComponent
    ]
})
export class NgxMatTimepickerDialogComponent extends NgxMatTimepickerBaseDirective {
    pickerMode: TTimepickerMode = 'clockface';

    constructor(@Inject(MAT_DIALOG_DATA) public override data: NgxMatTimepickerConfig,
                protected _dialogRef: MatDialogRef<NgxMatTimepickerDialogComponent>,
                timepickerSrv: NgxMatTimepickerService,
                eventSrv: NgxMatTimepickerEventService,
                timepickerLocaleSrv: NgxMatTimepickerLocaleService) {

        super(timepickerSrv, eventSrv, timepickerLocaleSrv, data);
        // Load picker mode preference
         try {
            const preference = sessionStorage.getItem('timepicker-mode');
            if (preference === 'keyboard' || preference === 'clockface') {
                this.pickerMode = preference;
            }
        } catch (e) {
            console.error(e);
        }
    }

    override close(): void {
        this._dialogRef.close();
    }

    toggleMode() {
        if (this.pickerMode === 'clockface') {
            this.pickerMode = 'keyboard';
            // Focus hours
            window.setTimeout(() => {
                const inputToFocus: HTMLInputElement = document.querySelector('ngx-mat-timepicker-dial-control input');
                if (inputToFocus) {
                    inputToFocus.focus();
                }
            }, 0);
        } else {
            this.pickerMode = 'clockface';
        }
        // Save the preference
        try {
            sessionStorage.setItem('timepicker-mode', this.pickerMode);
        } catch (e) {
            console.error(e);
        }
    }
}
