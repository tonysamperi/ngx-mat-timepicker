import {Component, Input} from "@angular/core";

@Component({
    selector: "ngx-timepicker-content",
    templateUrl: "./ngx-timepicker-content.component.html",
})
export class NgxTimepickerContentComponent {

    @Input() appendToInput: boolean;
    @Input() inputElement: any;

}
