import {NgxTimepickerClockFace} from "../models/ngx-timepicker-clock-face.interface";
import {NgxTimepickerAdapter} from "../services/ngx-timepicker-adapter";
import {NgxTimepickerFormat} from "../models/ngx-timepicker-format.enum";
import {NgxTimepickerDisabledConfig} from "../models/ngx-timepicker-disabled-config.interface";
//
import {DateTime} from "luxon";

// @dynamic
export class NgxTimepickerUtils {

    static disableHours(hours: NgxTimepickerClockFace[], config: NgxTimepickerDisabledConfig): NgxTimepickerClockFace[] {
        if (config.min || config.max) {

            return hours.map(value => {
                const hour = config.format === 24 ? value.time : NgxTimepickerAdapter.formatHour(value.time, config.format, config.period);
                const currentTime = DateTime.fromObject({hour}).toFormat(NgxTimepickerFormat.TWELVE);

                return {
                    ...value,
                    disabled: !NgxTimepickerAdapter.isTimeAvailable(currentTime, config.min, config.max, "hours")
                };
            });
        }

        return hours;
    }

    static disableMinutes(minutes: NgxTimepickerClockFace[], selectedHour: number, config: NgxTimepickerDisabledConfig) {
        if (config.min || config.max) {

            const hour = NgxTimepickerAdapter.formatHour(selectedHour, config.format, config.period);

            return minutes.map(value => {
                const currentTime = DateTime.fromObject({hour, minute: value.time}).toFormat(NgxTimepickerFormat.TWELVE);

                return {
                    ...value,
                    disabled: !NgxTimepickerAdapter.isTimeAvailable(currentTime, config.min, config.max, "minutes")
                };
            });
        }

        return minutes;
    }

    static getHours(format: number): NgxTimepickerClockFace[] {
        return Array(format).fill(1).map((v, i) => {
            const angleStep = 30;
            const time = v + i;
            const angle = angleStep * time;

            return {time: time === 24 ? 0 : time, angle};
        });
    }

    static getMinutes(gap = 1): NgxTimepickerClockFace[] {
        const minutesCount = 60;
        const angleStep = 360 / minutesCount;
        const minutes = [];

        for (let i = 0; i < minutesCount; i++) {
            const angle = angleStep * i;
            if (i % gap === 0) {
                minutes.push({time: i, angle: angle !== 0 ? angle : 360});
            }
        }

        return minutes;
    }

}
