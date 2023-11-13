import { Component, Input } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "ngx-mat-timepicker-content",
  templateUrl: "./ngx-mat-timepicker-content.component.html",
  standalone: true,
  imports: [NgTemplateOutlet],
})
export class NgxMatTimepickerContentComponent {
  @Input() appendToInput: boolean;
  @Input() inputElement: any;
}
