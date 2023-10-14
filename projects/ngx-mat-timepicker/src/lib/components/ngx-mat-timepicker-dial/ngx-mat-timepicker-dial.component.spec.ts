import {ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA, SimpleChanges} from "@angular/core";
//
import {NgxMatTimepickerDialComponent} from "./ngx-mat-timepicker-dial.component";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NGX_MAT_TIMEPICKER_LOCALE} from "../../tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerAdapter} from "../../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";

describe("NgxMatTimepickerDialComponent", () => {
    let fixture: ComponentFixture<NgxMatTimepickerDialComponent>;
    let component: NgxMatTimepickerDialComponent;
    beforeEach(() => {

        fixture = TestBed.configureTestingModule({
            imports: [NgxMatTimepickerDialComponent],
            providers: [
                {provide: NGX_MAT_TIMEPICKER_LOCALE, useValue: NgxMatTimepickerAdapter.defaultLocale}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxMatTimepickerDialComponent);

        component = fixture.componentInstance;
    });

    it("should call disableHours and disableMinutes on period change", () => {
        const spyOnFunctionHours = spyOn(NgxMatTimepickerUtils, "disableHours");
        const spyOnFunctionMinutes = spyOn(NgxMatTimepickerUtils, "disableMinutes");
        const changes: SimpleChanges = {
            period: {
                currentValue: NgxMatTimepickerPeriods.AM,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };

        component.ngOnChanges(changes);
        expect(spyOnFunctionHours).toHaveBeenCalled();
        expect(spyOnFunctionMinutes).toHaveBeenCalled();
    });

    it("should call disableHours on format change", () => {
        const spyOnFunctionHours = spyOn(NgxMatTimepickerUtils, "disableHours");
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

    it("should call disableMinutes on hour change", () => {
        const spy = spyOn(NgxMatTimepickerUtils, "disableMinutes");
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

    it("should not call disableHours and disableMinutes", () => {
        const spyOnFunctionHours = spyOn(NgxMatTimepickerUtils, "disableHours");
        const spyOnFunctionMinutes = spyOn(NgxMatTimepickerUtils, "disableMinutes");
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

    it("should emit changed time unit", fakeAsync(() => {
        let timeUnit = null;

        component.timeUnitChanged.subscribe(unit => timeUnit = unit);
        component.changeTimeUnit(NgxMatTimepickerUnits.MINUTE);

        expect(timeUnit).toBe(NgxMatTimepickerUnits.MINUTE);
    }));

    it("should emit changed period", fakeAsync(() => {
        let period = NgxMatTimepickerPeriods.AM;

        component.periodChanged.subscribe(p => period = p);
        component.changePeriod(NgxMatTimepickerPeriods.PM);

        tick();
        expect(period).toBe(NgxMatTimepickerPeriods.PM);
    }));

    it("should emit changed hour", fakeAsync(() => {
        let hour = {time: 1, angle: 30};

        component.hourChanged.subscribe(h => hour = h);
        component.changeHour({time: 2, angle: 60});

        tick();
        expect(hour).toEqual({time: 2, angle: 60});
    }));

    it("should emit changed minute", fakeAsync(() => {
        let minute = {time: 10, angle: 30};

        component.minuteChanged.subscribe(m => minute = m);
        component.changeMinute({time: 20, angle: 60});

        tick();
        expect(minute).toEqual({time: 20, angle: 60});
    }));

    it("should set isHintVisible true", () => {
        expect(component.isHintVisible).toBeFalsy();

        component.showHint();

        expect(component.isHintVisible).toBeTruthy();
    });

    it("should set isHintVisible false", () => {
        component.isHintVisible = true;

        component.hideHint();

        expect(component.isHintVisible).toBeFalsy();
    });

});
