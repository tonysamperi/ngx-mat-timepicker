import { TestBed } from '@angular/core/testing';
import { NgxTimepickerClockFace } from '../models/ngx-timepicker-clock-face.interface';
import { NgxTimepickerService } from './ngx-timepicker.service';
import { NgxTimepickerPeriods } from '../models/ngx-timepicker-periods.enum';
import { NgxTimepickerAdapter } from './ngx-timepicker-adapter';
import { DateTime } from 'luxon';

describe('NgxTimepickerService', () => {
    const DEFAULT_HOUR: NgxTimepickerClockFace = {
        time: 12,
        angle: 360
    };
    const DEFAULT_MINUTE: NgxTimepickerClockFace = {
        time: 0,
        angle: 360
    };

    let timepickerService: NgxTimepickerService;
    let selectedHour: NgxTimepickerClockFace;
    let selectedMinute: NgxTimepickerClockFace;
    let selectedPeriod: NgxTimepickerPeriods;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NgxTimepickerService]
        });

        timepickerService = TestBed.get(NgxTimepickerService);
        timepickerService.selectedHour.subscribe(hour => selectedHour = hour);
        timepickerService.selectedMinute.subscribe(minute => selectedMinute = minute);
        timepickerService.selectedPeriod.subscribe(period => selectedPeriod = period);
    });

    it('should set default hour on startup', () => {
        expect(selectedHour).toEqual(DEFAULT_HOUR);
    });

    it('should set default minute on startup', () => {
        expect(selectedMinute).toEqual(DEFAULT_MINUTE);
    });

    it('should set default period on startup', () => {
        expect(selectedPeriod).toEqual(NgxTimepickerPeriods.AM);
    });

    it('should change hour, minute and period', () => {
        const changedHour: NgxTimepickerClockFace = {time: 11, angle: 20};
        const changedMinute: NgxTimepickerClockFace = {time: 40, angle: 50};

        timepickerService.hour = changedHour;
        timepickerService.minute = changedMinute;
        timepickerService.period = NgxTimepickerPeriods.PM;

        expect(selectedHour).toEqual(changedHour);
        expect(selectedMinute).toEqual(changedMinute);
        expect(selectedPeriod).toEqual(NgxTimepickerPeriods.PM);
    });

    it('should return default full time as string (hh:mm a or HH:mm)', () => {
        expect(timepickerService.getFullTime(12)).toBe('12:00 AM');
        expect(timepickerService.getFullTime(24)).toBe('12:00');
    });

    it('should return default full time if time is not valid', () => {
        timepickerService.hour = {angle: 0, time: null};
        timepickerService.minute = {angle: 0, time: null};
        expect(timepickerService.getFullTime(12)).toBe('12:00 AM');
        expect(timepickerService.getFullTime(24)).toBe('12:00');
    });

    it('should change default time', () => {
        let time = '11:15 am';
        timepickerService.setDefaultTimeIfAvailable(time, null, null, 12);

        expect(selectedHour).toEqual({...DEFAULT_HOUR, time: 11});
        expect(selectedMinute).toEqual({...DEFAULT_MINUTE, time: 15});
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);

        time = '11:12 pm';
        timepickerService.setDefaultTimeIfAvailable(time, null, null, 12);
        expect(selectedHour.time).toBe(11);
        expect(selectedMinute.time).toBe(12);
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.PM);

        time = '12:00 pm';
        timepickerService.setDefaultTimeIfAvailable(time, null, null, 12);
        expect(selectedHour.time).toBe(12);
        expect(selectedMinute.time).toBe(0);
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.PM);

        time = '12:00 am';
        timepickerService.setDefaultTimeIfAvailable(time, null, null, 12);
        expect(selectedHour.time).toBe(12);
        expect(selectedMinute.time).toBe(0);
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);

        time = '00:00';
        timepickerService.setDefaultTimeIfAvailable(time, null, null, 24);

        expect(selectedHour).toEqual({...DEFAULT_HOUR, time: 0});
        expect(selectedMinute).toEqual({...DEFAULT_MINUTE, time: 0});
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);

        time = '15:00';
        timepickerService.setDefaultTimeIfAvailable(time, null, null, 24);

        expect(selectedHour).toEqual({...DEFAULT_HOUR, time: 15});
        expect(selectedMinute).toEqual({...DEFAULT_MINUTE, time: 0});
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);
    });

    it('should reset time if default time is invalid', () => {
        timepickerService.setDefaultTimeIfAvailable('10:10 am', null, null, 12);

        expect(selectedHour).toEqual({...DEFAULT_HOUR, time: 10});
        expect(selectedMinute).toEqual({...DEFAULT_MINUTE, time: 10});
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);

        timepickerService.setDefaultTimeIfAvailable('invalid time', null, null, 12);

        expect(selectedHour).toEqual(DEFAULT_HOUR);
        expect(selectedMinute).toEqual(DEFAULT_MINUTE);
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);
    });

    it('should not change time if it is not available', () => {
        const min = DateTime.fromObject({hour: 11});

        timepickerService.setDefaultTimeIfAvailable('10:10 am', null, null, 12);

        expect(selectedHour).toEqual({...DEFAULT_HOUR, time: 10});
        expect(selectedMinute).toEqual({...DEFAULT_MINUTE, time: 10});
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);

        timepickerService.setDefaultTimeIfAvailable('09:15 am', min, null, 12);

        expect(selectedHour).toEqual({...DEFAULT_HOUR, time: 10});
        expect(selectedMinute).toEqual({...DEFAULT_MINUTE, time: 10});
        expect(selectedPeriod).toBe(NgxTimepickerPeriods.AM);
    });

    it('should call console error', () => {
        const minutesGap = 5;
        const locale = 'en-US';
        const min = NgxTimepickerAdapter.parseTime('11:00 pm', {locale});
        const max = NgxTimepickerAdapter.parseTime('11:50 pm', {locale});
        const spy = spyOn(console, 'error');

        timepickerService.setDefaultTimeIfAvailable('11:43 pm', min, max, 12, minutesGap);
        expect(spy).toHaveBeenCalled();
    });
});
