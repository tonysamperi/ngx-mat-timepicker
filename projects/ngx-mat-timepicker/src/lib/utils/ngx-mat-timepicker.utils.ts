import {NgxMatTimepickerClockFace} from "../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerAdapter} from "../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerFormat} from "../models/ngx-mat-timepicker-format.enum";
import {NgxMatTimepickerDisabledConfig} from "../models/ngx-mat-timepicker-disabled-config.interface";
//
import {DateTime} from "ts-luxon";

// @dynamic
export class NgxMatTimepickerUtils {

    static get DEFAULT_MINUTES_GAP(): number {
        return 5;
    }

    static disableHours(hours: NgxMatTimepickerClockFace[], config: NgxMatTimepickerDisabledConfig): NgxMatTimepickerClockFace[] {
        if (config.min || config.max) {

            return hours.map(value => {
                const hour = NgxMatTimepickerAdapter.isTwentyFour(config.format)
                    ? value.time
                    : NgxMatTimepickerAdapter.formatHour(value.time, config.format, config.period);
                const currentTime = DateTime.fromObject({hour}).toFormat(NgxMatTimepickerFormat.TWELVE);

                return {
                    ...value,
                    disabled: !NgxMatTimepickerAdapter.isTimeAvailable(currentTime, config.min, config.max, "hours")
                };
            });
        }

        return hours;
    }

    static disableMinutes(minutes: NgxMatTimepickerClockFace[], selectedHour: number, config: NgxMatTimepickerDisabledConfig) {
        if (config.min || config.max) {

            const hour = NgxMatTimepickerAdapter.formatHour(selectedHour, config.format, config.period);
            let currentTime = DateTime.fromObject({
                hour,
                minute: 0
            });

            return minutes.map(value => {
                currentTime = currentTime.set({minute: value.time});

                return {
                    ...value,
                    disabled: !NgxMatTimepickerAdapter.isTimeAvailable(currentTime.toFormat(NgxMatTimepickerFormat.TWELVE), config.min, config.max, "minutes")
                };
            });
        }

        return minutes;
    }

    static getHours(format: number): NgxMatTimepickerClockFace[] {
        return Array(format).fill(1).map((v, i) => {
            const angleStep = 30;
            const time = v + i;
            const angle = angleStep * time;

            return {time: time === 24 ? 0 : time, angle};
        });
    }

    static getMinutes(gap = 1): NgxMatTimepickerClockFace[] {
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

    static isDigit(e: KeyboardEvent) {
        // Allow: backspace, delete, tab, escape, enter
        if ([46, 8, 9, 27, 13].some(n => n === e.keyCode) ||
            // Allow: Ctrl/cmd+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, up, down
            (e.keyCode >= 35 && e.keyCode <= 40)) {

            return true;
        }

        return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
    }


}
