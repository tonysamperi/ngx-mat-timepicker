import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxTimepicker12HoursFaceComponent } from './ngx-timepicker-12-hours-face.component';
import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { NgxTimepickerPeriods } from '../../models/ngx-timepicker-periods.enum';
import { DateTime } from 'luxon';
import { NgxTimepickerUtils } from '../../utils/ngx-timepicker.utils';

describe('NgxTimepicker12HoursFaceComponent', () => {
    let fixture: ComponentFixture<NgxTimepicker12HoursFaceComponent>;
    let component: NgxTimepicker12HoursFaceComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [NgxTimepicker12HoursFaceComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxTimepicker12HoursFaceComponent);

        component = fixture.componentInstance;
    });

    it('should call disabledHours once period changed', () => {
        const spy = spyOn(NgxTimepickerUtils, 'disableHours');
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
        const hours = NgxTimepickerUtils.getHours(format);
        component.minTime = time;
        component.maxTime = time;
        component.format = format;
        component.period = period;
        component.hoursList = hours;

        component.ngOnChanges(changes);
        expect(spy).toHaveBeenCalledWith(hours, {min: time, max: time, format, period});
    });

    it('should not call disabledHours', () => {
        const spy = spyOn(NgxTimepickerUtils, 'disableHours');
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
