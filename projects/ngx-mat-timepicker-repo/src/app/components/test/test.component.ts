import {Component, ViewChild, inject} from "@angular/core";
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CodeViewerComponent} from "../code-viewer/code-viewer.component";
import {MatButtonModule} from "@angular/material/button";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
//
import {
    NgxMatTimepickerComponent,
    NgxMatTimepickerDirective,
    NgxMatTimepickerFieldComponent
} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerDemoComponent} from "../demo/demo.component";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "app-dialog",
    template: `
		<div mat-dialog-title>Dialog Title</div>
		<div mat-dialog-content>
			<mat-form-field class="time-input-width">
				<mat-label>Time</mat-label>
				<input matInput
					   #foo="matInput"
					   name="selected_time_a"
					   [format]="24"
					   [(ngModel)]="date"
					   [ngxMatTimepicker]="pickerA"
					   readonly
				/>
				<mat-icon matSuffix
						  (click)="pickerA.open()">watch_later
				</mat-icon>
			</mat-form-field>
			<p>FIELD FOCUSED: {{ foo.focused }}</p>
			<ngx-mat-timepicker appendToInput="true"
								#pickerA></ngx-mat-timepicker>
		</div>
    `,
    imports: [
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        NgxMatTimepickerComponent,
        NgxMatTimepickerDirective
    ]
})
export class NgxMatTimepickerTestDialogComponent {
    date: string = "2:00";
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "app-test",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"],
    imports: [
    CodeViewerComponent,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    NgxMatTimepickerFieldComponent,
    ReactiveFormsModule
    ]
})
export class NgxMatTimepickerTestComponent extends NgxMatTimepickerDemoComponent {

    formControlItem: FormControl = new FormControl("", [Validators.pattern(/([0-9]|[1-2]\d):[0-5]\d/)]);
    time: string = "00:00";

    private _matDialog = inject(MatDialog);
    @ViewChild("timepicker") private _timepicker: NgxMatTimepickerComponent;

    onClear() {
        this.formControlItem.setValue(null);
    }

    onFieldBlur(): void {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.formControlItem.valid && this.pickerFreeInput.updateTime(this.formControlItem.value);
    }

    openDialog() {
        this._matDialog.open(NgxMatTimepickerTestDialogComponent, {
            width: "300px"
        });
    }

    openFromIcon(timepicker: { open: () => void }) {
        if (!this.formControlItem.disabled) {
            timepicker.open();
        }
    }

}
