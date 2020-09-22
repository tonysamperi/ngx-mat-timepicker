import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxTimepicker24HoursFaceComponent } from './ngx-timepicker-24-hours-face.component';
import { DateTime } from 'luxon';
import { NgxTimepickerUtils } from '../../utils/ngx-timepicker.utils';

describe('NgxTimepicker24HoursFaceComponent', () => {
    let fixture: ComponentFixture<NgxTimepicker24HoursFaceComponent>;
    let component: NgxTimepicker24HoursFaceComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [NgxTimepicker24HoursFaceComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxTimepicker24HoursFaceComponent);

        component = fixture.componentInstance;
    });

    it('should call disableHours', () => {
        const spy = spyOn(NgxTimepickerUtils, 'disableHours');
        const time = DateTime.fromJSDate(new Date());
        const format = 24;
        const hours = NgxTimepickerUtils.getHours(format);

        component.minTime = time;
        component.maxTime = time;
        component.format = format;
        component.hoursList = hours;

        component.ngAfterContentInit();
        expect(spy).toHaveBeenCalledWith(hours, {min: time, max: time, format});
    });
});
