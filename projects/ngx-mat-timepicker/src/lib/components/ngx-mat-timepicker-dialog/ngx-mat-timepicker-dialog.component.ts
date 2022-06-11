import {Component, Inject, ViewEncapsulation} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
//
import {NgxMatTimepickerBaseDirective} from "../../directives/ngx-mat-timepicker-base.directive";
import {NgxMatTimepickerConfig} from "../../models/ngx-mat-timepicker-config.interface";
import {NgxMatTimepickerLocaleService} from "../../services/ngx-mat-timepicker-locale.service";
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
                timepickerLocaleSrv: NgxMatTimepickerLocaleService) {

        super(timepickerSrv, eventSrv, timepickerLocaleSrv, data);
    }

    close(): void {
        this._dialogRef.close();
    }

}
