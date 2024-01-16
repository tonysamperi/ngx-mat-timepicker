import {Pipe, PipeTransform} from "@angular/core";
import {NgxMatTimepickerUtils} from "../utils/ngx-mat-timepicker.utils";

@Pipe({
    name: "minutesFormatter",
    standalone: true
})
export class NgxMatTimepickerMinutesFormatterPipe implements PipeTransform {

    transform(minute: number, gap = NgxMatTimepickerUtils.DEFAULT_MINUTES_GAP): number | string {
        if (!minute) {
            return minute;
        }

        return minute % gap === 0 ? minute : "";
    }

}
