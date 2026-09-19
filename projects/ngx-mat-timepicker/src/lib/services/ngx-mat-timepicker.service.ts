import {Service} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {DateTime} from "ts-luxon";
//
import {NgxMatTimepickerClockFace} from "../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerFormatType} from "../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerPeriods} from "../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerAdapter} from "./ngx-mat-timepicker-adapter";

const defaultHour: NgxMatTimepickerClockFace = {
    time: 12,
    angle: 360
};
const defaultMinute: NgxMatTimepickerClockFace = {
    time: 0,
    angle: 360
};

@Service()
export class NgxMatTimepickerService {

    set hour(hour: NgxMatTimepickerClockFace) {
        this._hour$.next(hour);
    }

    set minute(minute: NgxMatTimepickerClockFace) {
        this._minute$.next(minute);
    }

    set period(period: NgxMatTimepickerPeriods) {
        const isPeriodValid = (period === NgxMatTimepickerPeriods.AM) || (period === NgxMatTimepickerPeriods.PM);

        if (isPeriodValid) {
            this._period$.next(period);
        }
    }

    get selectedHour(): Observable<NgxMatTimepickerClockFace> {
        return this._hour$.asObservable();
    }

    get selectedMinute(): Observable<NgxMatTimepickerClockFace> {
        return this._minute$.asObservable();
    }

    get selectedPeriod(): Observable<NgxMatTimepickerPeriods> {
        return this._period$.asObservable();
    }

    private _hour$ = new BehaviorSubject<NgxMatTimepickerClockFace>(defaultHour);
    private _minute$ = new BehaviorSubject<NgxMatTimepickerClockFace>(defaultMinute);
    private _period$ = new BehaviorSubject<NgxMatTimepickerPeriods>(NgxMatTimepickerPeriods.AM);

    getFullTime(format: number): string {
        const selectedHour = this._hour$.getValue().time;
        const selectedMinute = this._minute$.getValue().time;
        const hour = selectedHour != null ? selectedHour : defaultHour.time;
        const minute = selectedMinute != null ? selectedMinute : defaultMinute.time;
        const period = format === 12 ? this._period$.getValue() : "";
        const time = `${hour}:${minute} ${period}`.trim();

        return NgxMatTimepickerAdapter.formatTime(time, {format});
    }


    setDefaultTimeIfAvailable(time: string, min: DateTime, max: DateTime, format: number, minutesGap?: number) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        time || this._resetTime();
        /* Workaround to double error message*/
        try {
            if (NgxMatTimepickerAdapter.isTimeAvailable(time, min, max, "minutes", minutesGap)) {
                this._setDefaultTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    setInitialTime(time: string, min: DateTime, max: DateTime, format: NgxMatTimepickerFormatType, minutesGap?: number): void {
        if (time) {
            try {
                if (NgxMatTimepickerAdapter.isTimeAvailable(time, min, max, "minutes", minutesGap, format)) {
                    this._setDefaultTime(time, format);

                    return;
                }
            }
            catch (e) {
                console.error(e);
            }
        }

        const fallbackTime = min
            ? NgxMatTimepickerAdapter.fromDateTimeToString(min, format)
            : max
                ? NgxMatTimepickerAdapter.fromDateTimeToString(max, format)
                : void 0;

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        fallbackTime ? this._setDefaultTime(fallbackTime, format) : this._resetTime();
    }

    private _resetTime(): void {
        this.hour = {...defaultHour};
        this.minute = {...defaultMinute};
        this.period = NgxMatTimepickerPeriods.AM;
    }

    private _setDefaultTime(time: string, format: number) {
        const defaultDto = NgxMatTimepickerAdapter.parseTime(time, {format});

        if (defaultDto.isValid) {
            const period = time.substring(time.length - 2).toUpperCase();
            const hour = defaultDto.hour;

            this.hour = {...defaultHour, time: formatHourByPeriod(hour, period as NgxMatTimepickerPeriods)};
            this.minute = {...defaultMinute, time: defaultDto.minute};
            this.period = period as NgxMatTimepickerPeriods;

        }
        else {
            this._resetTime();
        }
    }
}

/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour: number, period: NgxMatTimepickerPeriods): number {
    switch (period) {
        case NgxMatTimepickerPeriods.AM:
            return hour === 0 ? 12 : hour;
        case NgxMatTimepickerPeriods.PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}
