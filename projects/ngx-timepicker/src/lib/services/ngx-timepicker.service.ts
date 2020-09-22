import { Injectable } from "@angular/core";
import { NgxTimepickerClockFace } from "../models/ngx-timepicker-clock-face.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { NgxTimepickerPeriods } from "../models/ngx-timepicker-periods.enum";
import { NgxTimepickerAdapter } from "./ngx-timepicker-adapter";
import { DateTime } from "luxon";

const DEFAULT_HOUR: NgxTimepickerClockFace = {
    time: 12,
    angle: 360
};
const DEFAULT_MINUTE: NgxTimepickerClockFace = {
    time: 0,
    angle: 360
};

@Injectable({
    providedIn: "root"
})
export class NgxTimepickerService {


    set hour(hour: NgxTimepickerClockFace) {
        this._hour$.next(hour);
    }

    set minute(minute: NgxTimepickerClockFace) {
        this._minute$.next(minute);
    }

    set period(period: NgxTimepickerPeriods) {
        const isPeriodValid = (period === NgxTimepickerPeriods.AM) || (period === NgxTimepickerPeriods.PM);

        if (isPeriodValid) {
            this._period$.next(period);
        }
    }

    get selectedHour(): Observable<NgxTimepickerClockFace> {
        return this._hour$.asObservable();
    }

    get selectedMinute(): Observable<NgxTimepickerClockFace> {
        return this._minute$.asObservable();
    }

    get selectedPeriod(): Observable<NgxTimepickerPeriods> {
        return this._period$.asObservable();
    }

    private _hour$ = new BehaviorSubject<NgxTimepickerClockFace>(DEFAULT_HOUR);
    private _minute$ = new BehaviorSubject<NgxTimepickerClockFace>(DEFAULT_MINUTE);
    private _period$ = new BehaviorSubject<NgxTimepickerPeriods>(NgxTimepickerPeriods.AM);

    getFullTime(format: number): string {
        const selectedHour = this._hour$.getValue().time;
        const selectedMinute = this._minute$.getValue().time;
        const hour = selectedHour != null ? selectedHour : DEFAULT_HOUR.time;
        const minute = selectedMinute != null ? selectedMinute : DEFAULT_MINUTE.time;
        const period = format === 12 ? this._period$.getValue() : "";
        const time = `${hour}:${minute} ${period}`.trim();

        return NgxTimepickerAdapter.formatTime(time, {format});
    }


    setDefaultTimeIfAvailable(time: string, min: DateTime, max: DateTime, format: number, minutesGap?: number) {
        /* Workaround to double error message*/
        try {
            if (NgxTimepickerAdapter.isTimeAvailable(time, min, max, "minutes", minutesGap)) {
                this._setDefaultTime(time, format);
            }
        } catch (e) {
            console.error(e);
        }
    }

    private _resetTime(): void {
        this.hour = {...DEFAULT_HOUR};
        this.minute = {...DEFAULT_MINUTE};
        this.period = NgxTimepickerPeriods.AM;
    }

    private _setDefaultTime(time: string, format: number) {
        const defaultTime = NgxTimepickerAdapter.parseTime(time, {format}).toJSDate();

        if (DateTime.fromJSDate(defaultTime).isValid) {
            const period = time.substr(time.length - 2).toUpperCase();
            const hour = defaultTime.getHours();

            this.hour = {...DEFAULT_HOUR, time: formatHourByPeriod(hour, period as NgxTimepickerPeriods)};
            this.minute = {...DEFAULT_MINUTE, time: defaultTime.getMinutes()};
            this.period = period as NgxTimepickerPeriods;

        } else {
            this._resetTime();
        }
    }
}

/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour: number, period: NgxTimepickerPeriods): number {
    switch (period) {
        case NgxTimepickerPeriods.AM:
            return hour === 0 ? 12 : hour;
        case NgxTimepickerPeriods.PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}
