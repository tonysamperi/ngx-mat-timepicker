import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxTimepickerDialComponent } from './ngx-timepicker-dial.component';
import { NO_ERRORS_SCHEMA, SimpleChanges } from '@angular/core';
import { NgxTimepickerPeriods } from '../../models/ngx-timepicker-periods.enum';
import { NgxTimepickerUnits } from '../../models/ngx-timepicker-units.enum';
import { NGX_TIMEPICKER_LOCALE } from '../../tokens/time-locale.token';
import { NgxTimepickerAdapter } from '../../services/ngx-timepicker-adapter';
import { NgxTimepickerUtils } from '../../utils/ngx-timepicker.utils';

describe('NgxTimepickerDialComponent', () => {
    let fixture: ComponentFixture<NgxTimepickerDialComponent>;
    let component: NgxTimepickerDialComponent;
    beforeEach(() => {

        fixture = TestBed.configureTestingModule({
            declarations: [NgxTimepickerDialComponent],
            providers: [
                {provide: NGX_TIMEPICKER_LOCALE, useValue: NgxTimepickerAdapter.DEFAULT_LOCALE}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxTimepickerDialComponent);

        component = fixture.componentInstance;
    });

    it('should call disableHours and disableMinutes on period change', () => {
        const spyOnFunctionHours = spyOn(NgxTimepickerUtils, 'disableHours');
        const spyOnFunctionMinutes = spyOn(NgxTimepickerUtils, 'disableMinutes');
        const changes: SimpleChanges = {
            period: {
                currentValue: NgxTimepickerPeriods.AM,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };

        component.ngOnChanges(changes);
        expect(spyOnFunctionHours).toHaveBeenCalled();
        expect(spyOnFunctionMinutes).toHaveBeenCalled();
    });

    it('should call disableHours on format change', () => {
        const spyOnFunctionHours = spyOn(NgxTimepickerUtils, 'disableHours');
        const changes: SimpleChanges = {
            format: {
                currentValue: 24,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };

        component.ngOnChanges(changes);
        expect(spyOnFunctionHours).toHaveBeenCalled();
    });

    it('should call disableMinutes on hour change', () => {
        const spy = spyOn(NgxTimepickerUtils, 'disableMinutes');
        const changes: SimpleChanges = {
            hour: {
                currentValue: 24,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };

        component.ngOnChanges(changes);
        expect(spy).toHaveBeenCalled();
    });

    it('should not call disableHours and disableMinutes', () => {
        const spyOnFunctionHours = spyOn(NgxTimepickerUtils, 'disableHours');
        const spyOnFunctionMinutes = spyOn(NgxTimepickerUtils, 'disableMinutes');
        const changes: SimpleChanges = {
            minTime: {
                currentValue: null,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };

        component.ngOnChanges(changes);
        expect(spyOnFunctionHours).toHaveBeenCalledTimes(0);
        expect(spyOnFunctionMinutes).toHaveBeenCalledTimes(0);
    });

    it('should emit changed time unit', fakeAsync(() => {
        let timeUnit = null;

        component.timeUnitChanged.subscribe(unit => timeUnit = unit);
        component.changeTimeUnit(NgxTimepickerUnits.MINUTE);

        expect(timeUnit).toBe(NgxTimepickerUnits.MINUTE);
    }));

    it('should emit changed period', fakeAsync(() => {
        let period = NgxTimepickerPeriods.AM;

        component.periodChanged.subscribe(p => period = p);
        component.changePeriod(NgxTimepickerPeriods.PM);

        tick();
        expect(period).toBe(NgxTimepickerPeriods.PM);
    }));

    it('should emit changed hour', fakeAsync(() => {
        let hour = {time: 1, angle: 30};

        component.hourChanged.subscribe(h => hour = h);
        component.changeHour({time: 2, angle: 60});

        tick();
        expect(hour).toEqual({time: 2, angle: 60});
    }));

    it('should emit changed minute', fakeAsync(() => {
        let minute = {time: 10, angle: 30};

        component.minuteChanged.subscribe(m => minute = m);
        component.changeMinute({time: 20, angle: 60});

        tick();
        expect(minute).toEqual({time: 20, angle: 60});
    }));

    it('should set isHintVisible true', () => {
        expect(component.isHintVisible).toBeFalsy();

        component.showHint();

        expect(component.isHintVisible).toBeTruthy();
    });

    it('should set isHintVisible false', () => {
        component.isHintVisible = true;

        component.hideHint();

        expect(component.isHintVisible).toBeFalsy();
    });

});
