import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from "@angular/core/testing";
import {MatSelectChange} from "@angular/material/select";
//
import {NgxMatTimepickerFieldComponent} from "./ngx-mat-timepicker-field.component";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NGX_MAT_TIMEPICKER_LOCALE} from "../../tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerAdapter} from "../../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
//
import {DateTime} from "ts-luxon";

describe("NgxMatTimepickerFieldComponent", () => {
    let component: NgxMatTimepickerFieldComponent;
    let fixture: ComponentFixture<NgxMatTimepickerFieldComponent>;
    let timer: string;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgxMatTimepickerFieldComponent],
            providers: [
                {provide: NGX_MAT_TIMEPICKER_LOCALE, useValue: "en-US"}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxMatTimepickerFieldComponent);
        component = fixture.componentInstance;

        component.registerOnChange((time: string) => {
            timer = time;
        });
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    describe("ngOnInit", () => {

        it("should update time if defaultTime is provided", () => {
            component.timepickerTime = "";
            component.defaultTime = "11:12 am";
            component.format = 12;

            component.ngOnInit();
            expect(component.timepickerTime.toLowerCase()).toBe("11:12 am");
        });

        it("should set default time as min value when provided defaultTime is not valid", () => {
            const expectedTime = "11:11 am";
            component.timepickerTime = "";
            component.format = 12;
            component.min = DateTime.fromObject({hour: 11, minute: 11});

            component.ngOnInit();
            expect(component.timepickerTime.toLowerCase()).toBe(expectedTime);

            component.defaultTime = "10:00 am";
            component.ngOnInit();
            expect(component.timepickerTime.toLowerCase()).toBe(expectedTime);
        });

        it("should set default time as max value when provided defaultTime is not valid and min is not provided", () => {
            const expectedTime = "9:11 am";
            component.timepickerTime = "";
            component.format = 12;
            component.max = DateTime.fromObject({hour: 9, minute: 11});

            component.ngOnInit();
            expect(component.timepickerTime.toLowerCase()).toBe(expectedTime);

            component.defaultTime = "10:00 am";
            component.ngOnInit();
            expect(component.timepickerTime.toLowerCase()).toBe(expectedTime);
        });

        it("should set isChangePeriodDisabled to true", fakeAsync(() => {
            component.format = 12;
            component.isChangePeriodDisabled = false;
            component.defaultTime = "09:00 am";
            component.max = DateTime.fromObject({hour: 9, minute: 11});

            component.ngOnInit();
            tick();
            expect(component.isChangePeriodDisabled).toBeTruthy();
        }));

        it("should not change period when format is 24", fakeAsync(() => {
            component.format = 24;
            component.period = undefined;

            component.ngOnInit();
            tick();

            expect(component.period).toBeUndefined();
        }));

        it("should call NgxMatTimepickerUtils.disableMinutes when hour changes and min/max are set", fakeAsync(() => {
            const spy = spyOn(NgxMatTimepickerUtils, "disableMinutes");
            const minutes = [{time: 1, angle: 0}];
            const format = 12;
            const min = DateTime.fromObject({hour: 11, minute: 12});
            const max = DateTime.fromObject({hour: 11, minute: 12});
            const hour = 2;
            const period = NgxMatTimepickerPeriods.AM;
            component.format = format;
            component.min = min;
            component.max = max;
            component.minutesList = minutes;
            component.period = period;
            component.isTimeRangeSet = true;
            component.changeHour(hour);

            tick();
            expect(spy).toHaveBeenCalledWith(minutes, hour, {min, max, format, period});

            component.isTimeRangeSet = false;
            component.changeHour(3);
            tick();

            expect(spy).toHaveBeenCalledTimes(1);
        }));

        it("should not call NgxMatTimepickerUtils.disableMinutes when selectedHour is undefined", fakeAsync(() => {
            const spy = spyOn(NgxMatTimepickerUtils, "disableMinutes");
            const minutes = [{time: 1, angle: 0}];
            const format = 12;
            const min = DateTime.fromObject({hour: 11, minute: 12});
            const max = DateTime.fromObject({hour: 11, minute: 12});
            const hour = 3;
            const period = NgxMatTimepickerPeriods.AM;
            component.format = format;
            component.min = min;
            component.max = max;
            component.minutesList = minutes;
            component.isTimeRangeSet = true;
            component.changePeriod({value: period} as MatSelectChange);

            tick();
            expect(spy).toHaveBeenCalledTimes(0);

            component.changeHour(hour);
            tick();

            expect(spy).toHaveBeenCalledWith(minutes, hour, {min, max, format, period});
        }));
    });


    describe("Format", () => {

        it("should set 24-hours format", () => {
            component.format = 24;
            expect(component.format).toBe(24);
        });

        it("should set 12-hours format", () => {
            // @ts-expect-error
            component.format = 14;
            expect(component.format).toBe(12);
        });

        it("should update defaultTime when change format dynamically", () => {
            const spy = spyOn(NgxMatTimepickerAdapter, "formatTime");
            component.timepickerTime = "23:00";
            component.format = 24;

            expect(spy).toHaveBeenCalledTimes(0);

            component.format = 12;
            expect(spy).toHaveBeenCalledWith("23:00", {locale: NgxMatTimepickerAdapter.defaultLocale, format: 12});
        });
    });

    it("should change minHour and maxHour when setting format", () => {
        expect(component.minHour).toBe(1);
        expect(component.maxHour).toBe(12);

        component.format = 24;
        expect(component.minHour).toBe(0);
        expect(component.maxHour).toBe(23);
    });

    describe("writeValue", () => {

        it("should update time when writeValue called ", fakeAsync(() => {
            const time = "10:13 pm";
            component.writeValue(time);

            expect(component.timepickerTime.toLowerCase()).toBe(time);

            tick();

            component.hour$.subscribe(hour => expect(hour.time).toBe(10));
            component.minute$.subscribe(minute => expect(minute.time).toBe(13));
            expect(component.period).toBe(NgxMatTimepickerPeriods.PM);
        }));

        it("should set hour and minute value to null", fakeAsync(() => {
            component.writeValue(null);

            expect(component.timepickerTime).toBeUndefined();

            tick();

            component.hour$.subscribe(hour => expect(hour.time).toBeNull());
            component.minute$.subscribe(minute => expect(minute.time).toBeNull());
        }));
    });

    it("should change disabled prop", () => {
        expect(component.disabled).toBeFalsy();

        component.setDisabledState(true);

        expect(component.disabled).toBeTruthy();
    });

    it("should change hour and emit timeChanged event", fakeAsync(() => {
        const hour: NgxMatTimepickerClockFace = {
            time: 1,
            angle: 30
        };
        const expected = "1:00 AM";
        component.timeChanged.subscribe(time => expect(time).toBe(expected));
        component.changeHour(1);

        tick();
        component.hour$.subscribe(selectedHour => expect(selectedHour.time).toBe(hour.time));
        expect(timer).toBe(expected);
    }));

    it("should change minute and emit timeChanged event", fakeAsync(() => {
        const minute: NgxMatTimepickerClockFace = {
            time: 15,
            angle: 90
        };
        const expected = "12:15 AM";
        component.timeChanged.subscribe(time => expect(time).toBe(expected));
        component.changeMinute(15);

        tick();
        component.minute$.subscribe(selectedMinute => expect(selectedMinute.time).toBe(minute.time));
        expect(timer).toBe(expected);
    }));

    it("should change period end emit timeChanged event", fakeAsync(() => {
        const expected = "12:00 PM";
        component.timeChanged.subscribe(time => expect(time).toBe(expected));
        component.changePeriod({value: NgxMatTimepickerPeriods.PM} as MatSelectChange);

        tick();
        expect(component.period).toEqual(NgxMatTimepickerPeriods.PM);
        expect(timer).toBe(expected);
    }));

    it("should call touch method", () => {
        component.registerOnTouched(() => {
            console.log();
        });
    });

    it("should update time and emit timeChanged event when timeSet called", waitForAsync(() => {
        let time: string | null = null;
        const timeMock = "2:5 am";
        const expectedTime = "2:05 am";
        const onChange = (val: string) => time = val;
        component.timeChanged.subscribe(changedTime => expect(changedTime.toLowerCase()).toBe(expectedTime));
        component.registerOnChange(onChange);

        component.onTimeSet(timeMock);

        expect(component.timepickerTime.toLowerCase()).toBe(expectedTime);
        expect(time.toLowerCase()).toBe(expectedTime);
        component.hour$.subscribe(hour => expect(hour.time).toBe(2));
        component.minute$.subscribe(minute => expect(minute.time).toBe(5));
    }));

    describe("Time range", () => {

        beforeEach(() => {
            component.format = 12;
        });

        describe("min", () => {

            it("should convert time from string to DateTime", () => {
                component.min = "11:20 am";
                const min: DateTime = component.min as unknown as DateTime;
                expect(min.hour).toBe(11);
                expect(min.minute).toBe(20);
            });

            it("should return time in DateTime format", () => {
                component.min = DateTime.fromObject({hour: 11, minute: 20});
                expect(component.min instanceof DateTime).toBeTruthy();
            });
        });

        describe("max", () => {

            it("should convert time from string to DateTime", () => {
                component.max = "11:20 am";
                const max: DateTime = component.max as unknown as DateTime;
                expect(max.hour).toBe(11);
                expect(max.minute).toBe(20);
            });

            it("should return time in DateTime format", () => {
                component.max = DateTime.fromObject({hour: 11, minute: 20});
                expect(component.max instanceof DateTime).toBeTruthy();
            });
        });
    });
});
