import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxTimepickerMinutesFaceComponent } from './ngx-timepicker-minutes-face.component';
import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { NgxTimepickerUtils } from '../../utils/ngx-timepicker.utils';
import { NgxTimepickerPeriods } from '../../models/ngx-timepicker-periods.enum';
import { DateTime } from 'luxon';

describe('NgxTimepickerMinutesFaceComponent', () => {
    let fixture: ComponentFixture<NgxTimepickerMinutesFaceComponent>;
    let component: NgxTimepickerMinutesFaceComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [NgxTimepickerMinutesFaceComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxTimepickerMinutesFaceComponent);

        component = fixture.componentInstance;
    });

    it('should call disableMinutes once period changed', () => {
        const spy = spyOn(NgxTimepickerUtils, 'disableMinutes');
        const changes: SimpleChanges = {
            period: {
                currentValue: NgxTimepickerPeriods.PM,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };
        const time = DateTime.fromJSDate(new Date());
        const format = 12;
        const period = NgxTimepickerPeriods.PM;
        const minutes = NgxTimepickerUtils.getMinutes();
        component.minTime = time;
        component.maxTime = time;
        component.format = format;
        component.period = period;
        component.minutesList = minutes;
        component.selectedHour = 1;

        component.ngOnChanges(changes);
        expect(spy).toHaveBeenCalledWith(minutes, 1, {min: time, max: time, format, period});
    });

    it('should not call disableMinutes', () => {
        const spy = spyOn(NgxTimepickerUtils, 'disableMinutes');
        const changes: SimpleChanges = {
            minTime: {
                currentValue: null,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };

        component.ngOnChanges(changes);
        expect(spy).toHaveBeenCalledTimes(0);
    });
});
