import {Component, ContentChild, Input, ViewEncapsulation} from "@angular/core";
import { NgIf } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
//
import {NgxMatTimepickerToggleIconDirective} from "../../directives/ngx-mat-timepicker-toggle-icon.directive";
import {NgxMatTimepickerComponent} from "../ngx-mat-timepicker/ngx-mat-timepicker.component";

@Component({
    selector: "ngx-mat-timepicker-toggle",
    templateUrl: "ngx-mat-timepicker-toggle.component.html",
    styleUrls: ["ngx-mat-timepicker-toggle.component.scss"],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, NgIf]
})

export class NgxMatTimepickerToggleComponent {

    @Input()
    get disabled(): boolean {
        return this._disabled === void 0 ? this.timepicker?.disabled : this._disabled;
    }

    set disabled(value: boolean) {
        this._disabled = value;
    }

    @ContentChild(NgxMatTimepickerToggleIconDirective, {static: true}) customIcon: NgxMatTimepickerToggleIconDirective;

    // tslint:disable-next-line:no-input-rename
    @Input("for") timepicker: NgxMatTimepickerComponent;

    private _disabled: boolean;

    open(event: MouseEvent): void {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }
}
