import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from "@angular/core/testing";
import {ElementRef, NO_ERRORS_SCHEMA, SimpleChanges} from "@angular/core";
//
import {NgxMatTimepickerFaceComponent} from "./ngx-mat-timepicker-face.component";
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerMinutesFormatterPipe} from "../../pipes/ngx-mat-timepicker-minutes-formatter.pipe";
import {NgxMatTimepickerTimeLocalizerPipe} from "../../pipes/ngx-mat-timepicker-time-localizer.pipe";
import {NGX_MAT_TIMEPICKER_LOCALE} from "../../tokens/ngx-mat-timepicker-time-locale.token";
import {NgxMatTimepickerAdapter} from "../../services/ngx-mat-timepicker-adapter";
import {NgxMatTimepickerActiveHourPipe} from "../../pipes/ngx-mat-timepicker-active-hour.pipe";
import {NgxMatTimepickerActiveMinutePipe} from "../../pipes/ngx-mat-timepicker-active-minute.pipe";
//
import {Subscription} from "rxjs";


describe("NgxMatTimepickerFaceComponent", () => {
    let fixture: ComponentFixture<NgxMatTimepickerFaceComponent>;
    let component: NgxMatTimepickerFaceComponent;
    let subscription: Subscription;

    beforeEach(() => {
        subscription = new Subscription();
        fixture = TestBed.configureTestingModule({
            imports: [NgxMatTimepickerFaceComponent,
                NgxMatTimepickerMinutesFormatterPipe,
                NgxMatTimepickerTimeLocalizerPipe,
                NgxMatTimepickerActiveHourPipe,
                NgxMatTimepickerActiveMinutePipe],
            providers: [
                {provide: NGX_MAT_TIMEPICKER_LOCALE, useValue: NgxMatTimepickerAdapter.defaultLocale}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxMatTimepickerFaceComponent);

        component = fixture.componentInstance;
    });

    afterEach(() => {
        subscription.unsubscribe();
    });

    it("trackByTime should return time", () => {
        const time: NgxMatTimepickerClockFace = {time: 10, angle: 360};
        expect(component.trackByTime(1, time)).toBe(10);
    });

    it("should set clock hand position to 30deg", () => {
        component.selectedTime = {time: 1, angle: 30};
        component.format = 12;

        component.ngAfterViewInit();
        expect(getStyle(component.clockHand)("transform")).toBe("rotate(30deg)");
    });

    it("should decrease clock hand with format 24 and time more than 12", () => {
        component.selectedTime = {time: 13, angle: 30};
        component.format = 24;
        component.ngAfterViewInit();

        expect(getStyle(component.clockHand)("height")).toBe("75px");
        expect(getStyle(component.clockHand)("top")).toBe("calc(50% - 75px)");
    });

    it("should decrease clock hand with format 24 and time is '00' ", () => {
        component.selectedTime = {time: 0, angle: 30};
        component.format = 24;
        component.ngAfterViewInit();

        expect(getStyle(component.clockHand)("height")).toBe("75px");
        expect(getStyle(component.clockHand)("top")).toBe("calc(50% - 75px)");
    });

    it("should increase clock hand with format 24 and time less or equal 12", () => {
        component.selectedTime = {time: 12, angle: 30};
        component.format = 24;
        component.ngAfterViewInit();

        expect(getStyle(component.clockHand)("height")).toBe("103px");
        expect(getStyle(component.clockHand)("top")).toBe("calc(50% - 103px)");
    });


    it("should change selectedTime on faceTime and selectedTime changes", () => {
        component.selectedTime = {time: 12, angle: 30};
        component.faceTime = [{time: 11, angle: 30, disabled: false}, {time: 12, angle: 30, disabled: true}];
        const changes: SimpleChanges = {
            faceTime: {
                currentValue: [{time: 11, angle: 20}],
                previousValue: undefined,
                isFirstChange: () => null,
                firstChange: true
            },
            selectedTime: {
                currentValue: {time: 11, angle: 30},
                previousValue: undefined,
                isFirstChange: () => null,
                firstChange: true
            }
        };
        component.ngOnChanges(changes);

        expect(component.selectedTime).toEqual({time: 12, angle: 30, disabled: true});
    });

    it("should set clock hand position on selectedTime changes", () => {
        component.selectedTime = {time: 11, angle: 30};
        const changes: SimpleChanges = {
            selectedTime: {
                currentValue: {time: 11, angle: 30},
                previousValue: undefined,
                isFirstChange: () => null,
                firstChange: true
            }
        };
        component.ngOnChanges(changes);

        expect(getStyle(component.clockHand)("transform")).toBe("rotate(30deg)");
    });

    it("should select available time", fakeAsync(() => {
        component.selectedTime = {time: 11, angle: 30};
        component.faceTime = [{time: 11, angle: 30, disabled: true}, {time: 12, angle: 30, disabled: false}];
        const changes: SimpleChanges = {
            faceTime: {
                currentValue: [],
                previousValue: undefined,
                isFirstChange: () => null,
                firstChange: true
            }
        };
        let updatedTime: NgxMatTimepickerClockFace = {time: 1, angle: 20};
        subscription.add(component.timeChange.subscribe(time => updatedTime = time));
        component.ngOnChanges(changes);
        tick();
        expect(updatedTime).toEqual({time: 12, angle: 30, disabled: false});
    }));

    it("should not emit time if no one is available", fakeAsync(() => {
        component.selectedTime = {time: 11, angle: 30};
        component.faceTime = [{time: 11, angle: 30, disabled: true}, {time: 12, angle: 30, disabled: true}];
        const changes: SimpleChanges = {
            faceTime: {
                currentValue: [],
                previousValue: undefined,
                isFirstChange: () => null,
                firstChange: true
            }
        };
        let updatedTime: NgxMatTimepickerClockFace = {time: 1, angle: 20};
        subscription.add(component.timeChange.subscribe(time => updatedTime = time));
        component.ngOnChanges(changes);
        tick();
        expect(updatedTime).toEqual({time: 1, angle: 20});
    }));

    describe("Select time", () => {
        const mouseClickEvent = new MouseEvent("click");
        const mouseMoveEvent = new MouseEvent("mousemove");
        const hourFaceTime = [
            {time: 1, angle: 30, disabled: false},
            {time: 2, angle: 60, disabled: false},
            {time: 3, angle: 90, disabled: false},
            {time: 4, angle: 120, disabled: false},
            {time: 5, angle: 150, disabled: false},
            {time: 6, angle: 180, disabled: false},
            {time: 7, angle: 210, disabled: false},
            {time: 8, angle: 240, disabled: false},
            {time: 9, angle: 270, disabled: false},
            {time: 10, angle: 300, disabled: false},
            {time: 11, angle: 330, disabled: false},
            {time: 12, angle: 360, disabled: false},
            {time: 13, angle: 390, disabled: false},
            {time: 14, angle: 420, disabled: false},
            {time: 15, angle: 450, disabled: false},
            {time: 16, angle: 480, disabled: false},
            {time: 17, angle: 510, disabled: false},
            {time: 18, angle: 540, disabled: false},
            {time: 19, angle: 570, disabled: false},
            {time: 20, angle: 600, disabled: false},
            {time: 21, angle: 630, disabled: false},
            {time: 22, angle: 660, disabled: false},
            {time: 23, angle: 690, disabled: false},
            {time: 24, angle: 720, disabled: false}
        ];

        const minutesFaceTime = Array(60).fill(0).map((v, i) => {
            const index = (v + i);
            const angle = 360 / 60 * index;

            return {time: index === 0 ? "00" : index, angle: angle !== 0 ? angle : 360};
        });

        beforeEach(() => {
            component.onMousedown(mouseClickEvent);

        });

        afterEach(() => {
            component.onMouseup(mouseClickEvent);
        });

        it("should do nothing onMouseUp", fakeAsync(() => {
            let counter = 0;

            subscription.add(component.timeChange.subscribe(() => counter++));
            component.onMouseup(mouseClickEvent);
            component.selectTime(mouseMoveEvent);
            tick();
            expect(counter).toBe(0);
        }));

        it("should return angle from I quarter", fakeAsync(() => {
            let selectedTime: NgxMatTimepickerClockFace = {time: 1, angle: 5};
            const mouseCords: MouseEventInit = {clientX: 706, clientY: 20};

            component.faceTime = hourFaceTime;
            subscription.add(component.timeChange.subscribe((time) => selectedTime = time));
            component.selectTime(new MouseEvent("mousemove", mouseCords));
            tick();
            expect(selectedTime.angle > 0 && selectedTime.angle <= 90).toBeTruthy();
        }));

        it("should return angle from II quarter", fakeAsync(() => {
            let selectedTime: NgxMatTimepickerClockFace = {time: 1, angle: 5};
            const mouseCords: MouseEventInit = {clientX: 703, clientY: 581};

            component.faceTime = hourFaceTime;
            subscription.add(component.timeChange.subscribe((time) => selectedTime = time));
            component.selectTime(new MouseEvent("mousemove", mouseCords));
            tick();
            expect(selectedTime.angle > 90 && selectedTime.angle <= 180).toBeTruthy();
        }));

        it("should return angle from III quarter", fakeAsync(() => {
            let selectedTime: NgxMatTimepickerClockFace = {time: 1, angle: 5};
            const mouseCords: MouseEventInit = {clientX: 2, clientY: 500};

            component.faceTime = hourFaceTime;
            subscription.add(component.timeChange.subscribe((time) => selectedTime = time));
            component.selectTime(new MouseEvent("mousemove", mouseCords));
            tick();
            expect(selectedTime.angle > 180 && selectedTime.angle <= 270).toBeTruthy();
        }));

        it("should return angle from IV quarter", fakeAsync(() => {
            let selectedTime: NgxMatTimepickerClockFace = {time: 1, angle: 5};
            const mouseCords: MouseEventInit = {clientX: 20, clientY: 20};

            component.faceTime = hourFaceTime;
            subscription.add(component.timeChange.subscribe((time) => selectedTime = time));
            component.selectTime(new MouseEvent("mousemove", mouseCords));
            tick();
            expect(selectedTime.angle > 270 && selectedTime.angle <= 360).toBeTruthy();
        }));

        it("should select hour from inner clock face", fakeAsync(() => {
            let selectedTime: NgxMatTimepickerClockFace = {time: 1, angle: 5};
            const mouseCords: MouseEventInit = {clientX: 150, clientY: 200};

            component.faceTime = hourFaceTime;
            component.format = 24;
            subscription.add(component.timeChange.subscribe((time) => selectedTime = time));

            component.selectTime(new MouseEvent("mousemove", mouseCords));
            tick();

            expect(selectedTime.angle > 360).toBeTruthy();
        }));

        it("should select minute from list", fakeAsync(() => {
            let selectedTime: NgxMatTimepickerClockFace = {time: 1, angle: 5};
            const mouseCords: MouseEventInit = {clientX: 20, clientY: 20};

            component.faceTime = minutesFaceTime;
            component.unit = NgxMatTimepickerUnits.MINUTE;
            subscription.add(component.timeChange.subscribe((time) => selectedTime = time));

            component.selectTime(new MouseEvent("mousemove", mouseCords));
            tick();
            expect(selectedTime.angle).toBeDefined();
        }));

        it("should not emit timeChanged", fakeAsync(() => {
            let selectedTime: NgxMatTimepickerClockFace = {time: 1, angle: 5};
            const mouseCords: MouseEventInit = {clientX: 150, clientY: 200};

            hourFaceTime.forEach(h => h.disabled = true);
            component.faceTime = hourFaceTime;
            subscription.add(component.timeChange.subscribe((time) => selectedTime = time));

            component.selectTime(new MouseEvent("mousemove", mouseCords));
            tick();
            expect(selectedTime).toEqual({time: 1, angle: 5});
        }));

        it("should emit selected time once user stop interaction with clock face", waitForAsync(() => {
            const mouseCords: MouseEventInit = {clientX: 20, clientY: 20};

            component.faceTime = minutesFaceTime;
            component.unit = NgxMatTimepickerUnits.MINUTE;

            subscription.add(component.timeSelected.subscribe((time) => expect(time).toBe(55)));
            component.onMouseup(mouseClickEvent);
            component.selectTime(new MouseEvent("click", mouseCords));
        }));
    });
});

function getStyle(element: ElementRef): (prop: string) => string {
    return (prop: string) => element.nativeElement.style[prop];
}


