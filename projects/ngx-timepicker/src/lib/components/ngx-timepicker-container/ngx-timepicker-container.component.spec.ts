import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { NgxTimepickerAnimationState, NgxTimepickerContainerComponent } from './ngx-timepicker-container.component';
import { Component, EventEmitter, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTimepickerRef } from '../../models/timepicker-ref.interface';
import { of, Subject } from 'rxjs';
import { DateTime } from 'luxon';
import { NgxTimepickerUnits } from '../../models/ngx-timepicker-units.enum';
import { NgxTimepickerPeriods } from '../../models/ngx-timepicker-periods.enum';
import { NgxTimepickerClockFace } from '../../models/ngx-timepicker-clock-face.interface';
import { NgxTimepickerEventService } from '../../services/ngx-timepicker-event.service';
import { NGX_TIMEPICKER_LOCALE } from '../../tokens/time-locale.token';

@Component({
    template: ''
})
class TimepickerBaseRefStub implements NgxTimepickerRef {
    timeUpdated = new Subject<string>().asObservable();

    @Output() hourSelected = new EventEmitter<number>();
    @Output() timeSet = new EventEmitter<string>();
    @Output() timeChanged = new EventEmitter<string>();

    close(): void {
    }
}

describe('NgxTimepickerContainerComponent', () => {
    let component: NgxTimepickerContainerComponent;
    let fixture: ComponentFixture<NgxTimepickerContainerComponent>;
    let timepickerBaseRefStub: NgxTimepickerRef;
    let eventService: NgxTimepickerEventService;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [
                NgxTimepickerContainerComponent,
                TimepickerBaseRefStub
            ],
            providers: [
                {
                    provide: NgxTimepickerEventService, useValue: {
                        dispatchEvent: () => null
                    },
                },
                {provide: NGX_TIMEPICKER_LOCALE, useValue: 'en-US'}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .createComponent(NgxTimepickerContainerComponent);

        component = fixture.componentInstance;
        timepickerBaseRefStub = TestBed.createComponent(TimepickerBaseRefStub).componentInstance;
        component.timepickerBaseRef = timepickerBaseRefStub;
        eventService = TestBed.get(NgxTimepickerEventService);
        fixture.detectChanges();
    });

    it('should create a component', () => {
        expect(component).toBeTruthy();
    });

    describe('changeTimeUnit', () => {
        it('should change time unit from HOUR to MINUTE', () => {
            expect(component.activeTimeUnit).toBe(NgxTimepickerUnits.HOUR);

            component.changeTimeUnit(NgxTimepickerUnits.MINUTE);

            expect(component.activeTimeUnit).toBe(NgxTimepickerUnits.MINUTE);
        });
    });

    describe('setTime', () => {
        it('should emit time on setTime and call close fn', async(() => {
            const spy = spyOn(component, 'close');

            component.timepickerBaseRef.timeSet.subscribe(time => expect(time).toBeDefined());
            component.setTime();
            expect(spy).toHaveBeenCalled();
        }));
    });

    describe('setDefaultTime', () => {

        it('should set default time equal to min time', fakeAsync(() => {
            component.minTime = DateTime.fromObject({hour: 23, minute: 15});
            component.time = undefined;
            component.defaultTime = undefined;

            component.ngOnInit();

            component.selectedHour.subscribe(hour => expect(hour.time).toBe(11));
            component.selectedMinute.subscribe(minute => expect(minute.time).toBe(15));
            component.selectedPeriod.subscribe(period => expect(period).toBe(NgxTimepickerPeriods.PM));

            tick();
        }));

        it('should not set default time equal to minTime if time is provided', fakeAsync(() => {
            component.minTime = DateTime.fromObject({hour: 23, minute: 15});
            component.format = 12;
            component.time = '11:11 am';

            component.ngOnInit();

            component.selectedHour.subscribe(hour => expect(hour.time).not.toBe(11));
            component.selectedMinute.subscribe(minute => !expect(minute.time).not.toBe(15));

            tick();
        }));

        it('should not set default time equal to minTime if defaultTime is provided', fakeAsync(() => {
            component.minTime = DateTime.fromObject({hour: 23, minute: 15});
            component.format = 12;
            component.defaultTime = '11:11 am';

            component.ngOnInit();

            component.selectedHour.subscribe(hour => expect(hour.time).not.toBe(11));
            component.selectedMinute.subscribe(minute => !expect(minute.time).not.toBe(15));

            tick();
        }));

        it('should update hour, minute and period on timeUpdated', fakeAsync(() => {
            const time = '10:12 am';
            component.timepickerBaseRef = {...timepickerBaseRefStub, timeUpdated: of(time)};

            component.ngOnInit();

            component.selectedHour.subscribe(hour => expect(hour.time).toBe(10));
            component.selectedMinute.subscribe(minute => expect(minute.time).toBe(12));
            component.selectedPeriod.subscribe(period => expect(period).toBe(NgxTimepickerPeriods.AM));

            tick();
        }));

        it('should update hour, minute and period on defaultTime input set', fakeAsync(() => {
            component.defaultTime = '01:11 am';

            component.ngOnInit();

            component.selectedHour.subscribe(hour => expect(hour.time).toBe(1));
            component.selectedMinute.subscribe(minute => expect(minute.time).toBe(11));
            component.selectedPeriod.subscribe(period => expect(period).toBe(NgxTimepickerPeriods.AM));

            tick();
        }));
    });

    describe('animationState', () => {

        it('should set animationState to enter', () => {
            component.disableAnimation = false;
            component.ngOnInit();

            expect(component.animationState).toBe('enter' as NgxTimepickerAnimationState );
        });

        it('should set animationState to false', () => {
            component.disableAnimation = true;
            component.ngOnInit();

            expect(component.animationState).toBeFalsy();
        });
    });

    describe('onHourChange', () => {

        it('should change an hour to provided one', fakeAsync(() => {
            const expectedHour: NgxTimepickerClockFace = {time: 10, angle: 130};

            component.onHourChange(expectedHour);
            component.selectedHour.subscribe(hour => expect(hour).toEqual(expectedHour));

            tick();
        }));

        it('should update timeChanged when hour is changed', fakeAsync(() => {
            const expectedHour: NgxTimepickerClockFace = {time: 10, angle: 130};

            component.timepickerBaseRef.timeChanged.subscribe(time => expect(time).toEqual('10:00 AM'));
            component.onHourChange(expectedHour);

            tick();
        }));
    });

    describe('onMinuteChange', () => {

        it('should change an minute to provided one', fakeAsync(() => {
            const expectedMinute: NgxTimepickerClockFace = {time: 10, angle: 130};

            component.onMinuteChange(expectedMinute);
            component.selectedMinute.subscribe(minute => expect(minute).toEqual(expectedMinute));

            tick();
        }));

        it('should update timeChanged when minute is changed', fakeAsync(() => {
            const expectedMinute: NgxTimepickerClockFace = {time: 10, angle: 130};

            component.timepickerBaseRef.timeChanged.subscribe(time => expect(time).toEqual('12:10 PM'));
            component.onMinuteChange(expectedMinute);

            tick();
        }));
    });

    describe('changePeriod', () => {

        it('should change period to provided one', fakeAsync(() => {
            const expectedPeriod = NgxTimepickerPeriods.PM;

            component.changePeriod(expectedPeriod);
            component.selectedPeriod.subscribe(period => expect(period).toBe(expectedPeriod));

            tick();
        }));

    });

    describe('onHourSelected', () => {

        it('should change timeUnit to MINUTE and emit selected hour', async(() => {
            const hour = 10;
            component.hoursOnly = false;

            expect(component.activeTimeUnit).toBe(NgxTimepickerUnits.HOUR);

            component.timepickerBaseRef.hourSelected.subscribe(h => expect(h).toBe(hour));
            component.onHourSelected(hour);

            expect(component.activeTimeUnit).toBe(NgxTimepickerUnits.MINUTE);
        }));

        it('should not change timeUnit and emit selected hour', async(() => {
            const hour = 10;
            component.hoursOnly = true;

            expect(component.activeTimeUnit).toBe(NgxTimepickerUnits.HOUR);

            component.timepickerBaseRef.hourSelected.subscribe(h => expect(h).toBe(hour));
            component.onHourSelected(hour);

            expect(component.activeTimeUnit).toBe(NgxTimepickerUnits.HOUR);
        }));
    });

    describe('close', () => {

        it('should call close method of timepickerBaseRef and not change animation state', () => {
            const spy = spyOn(timepickerBaseRefStub, 'close');
            component.animationState = NgxTimepickerAnimationState.ENTER;
            component.disableAnimation = true;

            component.close();
            expect(spy).toHaveBeenCalled();
            expect(component.animationState).toBe(NgxTimepickerAnimationState.ENTER);
        });

        it(`should not call timepickerBaseRef's close method and change animation state to 'leave' `, () => {
            const spy = spyOn(timepickerBaseRefStub, 'close');
            component.animationState = NgxTimepickerAnimationState.ENTER;
            component.disableAnimation = false;

            component.close();
            expect(spy).toHaveBeenCalledTimes(0);
            expect(component.animationState).toBe('leave');
        });
    });

    describe('animationDone', () => {

        it(`should call timepickerBaseRef's close method if animation toState is 'leave' on animationDone`, () => {
            const event = {
                phaseName: 'done',
                toState: 'leave',
            };
            const spy = spyOn(timepickerBaseRefStub, 'close');

            // @ts-ignore
            component.animationDone(event as AnimationEvent);
            expect(spy).toHaveBeenCalled();
        });

        it(`should not call timepickerBaseRef's close method if animation toState is not 'leave' on animationDone`, () => {
            const event = {
                phaseName: 'done',
                toState: 'enter',
            };
            const spy = spyOn(timepickerBaseRefStub, 'close');

            // @ts-ignore
            component.animationDone(event as AnimationEvent);
            expect(spy).toHaveBeenCalledTimes(0);
        });
    });

    describe('onKeydown', () => {

        it('should call dispatchEvent method on keydown', () => {
            const event = {
                keyCode: 27,
                stopPropagation: () => null,
                type: 'keydown'
            };
            const spy = spyOn(eventService, 'dispatchEvent');
            component.onKeydown(event as KeyboardEvent);

            expect(spy).toHaveBeenCalledWith(event);
        });
    });
});
