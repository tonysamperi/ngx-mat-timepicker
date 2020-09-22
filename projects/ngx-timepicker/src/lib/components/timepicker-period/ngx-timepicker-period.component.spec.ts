import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxTimepickerPeriodComponent } from './ngx-timepicker-period.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxTimepickerUnits } from '../../models/ngx-timepicker-units.enum';
import { NgxTimepickerPeriods } from '../../models/ngx-timepicker-periods.enum';
import { DateTime } from 'luxon';
import { NgxTimepickerUtils } from '../../utils/ngx-timepicker.utils';

describe('NgxTimepickerPeriodComponent', () => {
    let fixture: ComponentFixture<NgxTimepickerPeriodComponent>;
    let component: NgxTimepickerPeriodComponent;
    const minutes = NgxTimepickerUtils.getMinutes();

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [NgxTimepickerPeriodComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxTimepickerPeriodComponent);

        component = fixture.componentInstance;
    });

    it('should change period for hour unit', () => {
        component.activeTimeUnit = NgxTimepickerUnits.HOUR;
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 15});
        component.hours = NgxTimepickerUtils.getHours(12);
        component.isPeriodAvailable = false;
        component.periodChanged.subscribe(p => component.selectedPeriod = p);
        component.changePeriod(NgxTimepickerPeriods.PM);

        expect(component.isPeriodAvailable).toBeTruthy();
        expect(component.selectedPeriod).toBe(NgxTimepickerPeriods.PM);
    });

    it('should change period for minute unit', () => {
        component.activeTimeUnit = NgxTimepickerUnits.MINUTE;
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 5});
        component.minutes = minutes;
        component.selectedHour = 4;
        component.periodChanged.subscribe(p => component.selectedPeriod = p);
        component.changePeriod(NgxTimepickerPeriods.AM);

        expect(component.selectedPeriod).toBe(NgxTimepickerPeriods.AM);
    });

    it('should not change period', () => {
        component.activeTimeUnit = NgxTimepickerUnits.MINUTE;
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 5});
        component.minutes = minutes;
        component.selectedHour = 4;
        component.selectedPeriod = NgxTimepickerPeriods.AM;
        component.periodChanged.subscribe(p => component.selectedPeriod = p);
        component.changePeriod(NgxTimepickerPeriods.PM);

        expect(component.selectedPeriod).toBe(NgxTimepickerPeriods.AM);
    });

    it('should throw an error', () => {
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 5});
        component.minutes = minutes;
        component.selectedHour = 4;
        component.selectedPeriod = NgxTimepickerPeriods.AM;
        try {
            component.changePeriod(NgxTimepickerPeriods.PM);
        } catch (e) {
            expect(e.message).toBe('no such NgxTimepickerUnits');
        }

    });

    it('should set isPeriodAvailable to true', () => {
        component.isPeriodAvailable = false;
        expect(component.isPeriodAvailable).toBeFalsy();

        component.animationDone();
        expect(component.isPeriodAvailable).toBeTruthy();
    });
});
