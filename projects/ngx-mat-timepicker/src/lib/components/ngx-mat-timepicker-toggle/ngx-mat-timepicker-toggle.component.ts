import {Component, ContentChild, Input} from "@angular/core";
import {NgxMatTimepickerToggleIconDirective} from "../../directives/ngx-mat-timepicker-toggle-icon.directive";
import {NgxMatTimepickerComponent} from "../ngx-mat-timepicker/ngx-mat-timepicker.component";

@Component({
    selector: "ngx-mat-timepicker-toggle",
    templateUrl: "ngx-mat-timepicker-toggle.component.html",
    styleUrls: ["ngx-mat-timepicker-toggle.component.scss"]
})

export class NgxMatTimepickerToggleComponent {

    @Input()
    get disabled(): boolean {
        return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
    }

    set disabled(value: boolean) {
        this._disabled = value;
    }

    @ContentChild(NgxMatTimepickerToggleIconDirective, {static: true}) customIcon: NgxMatTimepickerToggleIconDirective;

    // tslint:disable-next-line:no-input-rename
    @Input("for") timepicker: NgxMatTimepickerComponent;

    private _disabled: boolean;

    open(event): void {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }
}
