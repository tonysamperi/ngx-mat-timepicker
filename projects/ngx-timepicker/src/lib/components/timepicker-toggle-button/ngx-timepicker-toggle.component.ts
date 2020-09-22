import {Component, ContentChild, Input} from "@angular/core";
import {NgxTimepickerToggleIconDirective} from "../../directives/ngx-timepicker-toggle-icon.directive";
import {NgxTimepickerComponent} from "../ngx-timepicker/ngx-timepicker.component";

@Component({
    selector: "ngx-timepicker-toggle",
    templateUrl: "ngx-timepicker-toggle.component.html",
    styleUrls: ["ngx-timepicker-toggle.component.scss"]
})

export class NgxTimepickerToggleComponent {

    @Input()
    get disabled(): boolean {
        return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
    }

    set disabled(value: boolean) {
        this._disabled = value;
    }

    @ContentChild(NgxTimepickerToggleIconDirective, {static: true}) customIcon: NgxTimepickerToggleIconDirective;

    @Input("for") timepicker: NgxTimepickerComponent;

    private _disabled: boolean;

    open(event): void {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }
}
