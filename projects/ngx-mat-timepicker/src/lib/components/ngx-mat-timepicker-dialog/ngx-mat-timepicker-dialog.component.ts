import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
//
import {NgxMatTimepickerBaseDirective} from "../../directives/ngx-mat-timepicker-base.directive";
import {NgxMatTimepickerConfig} from "../../models/ngx-mat-timepicker-config.interface";
import {NGX_MAT_TIMEPICKER_LOCALE} from "../../tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerService} from "../../services/ngx-mat-timepicker.service";
import {NgxMatTimepickerEventService} from "../../services/ngx-mat-timepicker-event.service";

//

@Component({
    selector: "ngx-mat-timepicker-dialog",
    styleUrls: ["./ngx-mat-timepicker-dialog.component.scss"],
    templateUrl: "./ngx-mat-timepicker-dialog.component.html",
    encapsulation: ViewEncapsulation.None
})
export class NgxMatTimepickerDialogComponent extends NgxMatTimepickerBaseDirective {

    constructor(@Inject(MAT_DIALOG_DATA) public data: NgxMatTimepickerConfig,
                protected _dialogRef: MatDialogRef<NgxMatTimepickerDialogComponent>,
                timepickerSrv: NgxMatTimepickerService,
                eventSrv: NgxMatTimepickerEventService,
                @Inject(NGX_MAT_TIMEPICKER_LOCALE) locale: string) {

        super(timepickerSrv, eventSrv, locale, data);
    }

    close(): void {
        this._dialogRef.close();
    }

}
