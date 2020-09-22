import { Pipe, PipeTransform } from '@angular/core';
import { NgxTimepickerUnits } from '../models/ngx-timepicker-units.enum';
import { DateTime } from 'luxon';

@Pipe({
    name: 'timeFormatter'
})
export class TimeFormatterPipe implements PipeTransform {

    transform(time: number | string, timeUnit: NgxTimepickerUnits): any {
        if (time == null || time === '') {
            return time;
        }
        switch (timeUnit) {
            case NgxTimepickerUnits.HOUR:
                return DateTime.fromObject({hour: +time}).toFormat('HH');
            case NgxTimepickerUnits.MINUTE:
                return DateTime.fromObject({minute: +time}).toFormat('mm');
            default:
                throw new Error('no such time unit');
        }
    }

}
