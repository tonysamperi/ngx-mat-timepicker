import {Pipe, PipeTransform} from "@angular/core";
import {NgxMatTimepickerUtils} from "../utils/ngx-mat-timepicker.utils";

@Pipe({
    name: "activeMinute",
    standalone: true
})
export class NgxMatTimepickerActiveMinutePipe implements PipeTransform {

    transform(minute: number, currentMinute: number, gap: number | void, isClockFaceDisabled: boolean): boolean {
        if (minute == null || isClockFaceDisabled) {
            return false;
        }

        return ((currentMinute === minute) && (minute % (gap || NgxMatTimepickerUtils.DEFAULT_MINUTES_GAP) === 0));
    }

}
