import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {DateTime} from "ts-luxon";
//
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerFormatType} from "../../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";

@Directive({
    selector: "[ngxMatTimepickerHoursFace]"
})
export class NgxMatTimepickerHoursFaceDirective {

    @Input()
    set format(newValue: NgxMatTimepickerFormatType) {
        this._format = newValue;
        this.hoursList = NgxMatTimepickerUtils.getHours(this._format);
    }

    get format(): NgxMatTimepickerFormatType {
        return this._format;
    }

    @Output() hourChange = new EventEmitter<NgxMatTimepickerClockFace>();
    @Output() hourSelected = new EventEmitter<number>();

    hoursList: NgxMatTimepickerClockFace[] = [];
    @Input() maxTime: DateTime;
    @Input() minTime: DateTime;
    @Input() selectedHour: NgxMatTimepickerClockFace;

    protected _format: NgxMatTimepickerFormatType = 24;

    constructor() {
    }

    onTimeSelected(time: number): void {
        this.hourSelected.next(time);
    }
}
