import {Component, ViewChild} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
//
import {NgxMatTimepickerComponent, NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerDemoComponent} from "../demo/demo.component";


@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-test",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"]
})
export class NgxMatTimepickerTestComponent extends NgxMatTimepickerDemoComponent {

    formControlItem: FormControl = new FormControl("", [Validators.pattern(/([0-9]|[1-2]\d):[0-5]\d/)]);

    @ViewChild("timepicker") timepicker: NgxMatTimepickerComponent;

    constructor(localeOverrideSrv: NgxMatTimepickerLocaleService) {
        super(localeOverrideSrv);
    }

    onClear() {
        this.formControlItem.setValue(null);
    }

    onFieldBlur(): void {
        this.formControlItem.valid && this.pickerFreeInput.updateTime(this.formControlItem.value);
    }

    openFromIcon(timepicker: { open: () => void }) {
        if (!this.formControlItem.disabled) {
            timepicker.open();
        }
    }

}
