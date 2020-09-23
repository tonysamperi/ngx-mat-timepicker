import {Component, Input} from "@angular/core";

@Component({
    selector: "ngx-mat-timepicker-content",
    templateUrl: "./ngx-mat-timepicker-content.component.html",
})
export class NgxMatTimepickerContentComponent {

    @Input() appendToInput: boolean;
    @Input() inputElement: any;

}
