import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { NgxTimepickerComponent } from "./ngx-timepicker.component";
import { NgxTimepickerEventService } from "../../services/ngx-timepicker-event.service";
import { NgxTimepickerDirective } from "../../directives/ngx-timepicker.directive";
import { NO_ERRORS_SCHEMA, Type } from "@angular/core";
import { NgxTimepickerDomService } from "../../services/ngx-timepicker-dom.service";
import { TimepickerConfig } from "../../models/timepicker-config.interface";
import {
    NgxTimepickerContainerComponent
} from "../ngx-timepicker-container/ngx-timepicker-container.component";

// tslint:disable-next-line:naming-convention
class DomServiceStub {
    appendTimepickerToBody(_picker_: Type<NgxTimepickerComponent>): void {
    }

    destroyTimepicker(): void {
    }
}

describe("NgxTimepickerComponent", () => {
    let fixture: ComponentFixture<NgxTimepickerComponent>;
    let component: NgxTimepickerComponent;
    let domService: NgxTimepickerDomService;
    let eventService: NgxTimepickerEventService;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [
                NgxTimepickerComponent,
                NgxTimepickerContainerComponent,
            ],
            providers: [
                NgxTimepickerEventService,
                {provide: NgxTimepickerDomService, useClass: DomServiceStub}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxTimepickerComponent);

        component = fixture.componentInstance;
        domService = TestBed.get(NgxTimepickerDomService);
        eventService = TestBed.get(NgxTimepickerEventService);
    });

    describe("registerInput", () => {

        it("should throw Error if register one more timepicker input", () => {
            const input = {} as NgxTimepickerDirective;

            component.registerInput(input);
            expect(() => component.registerInput(input))
                .toThrowError("A Timepicker can only be associated with a single input.");
        });

        it("should return min time prop of NgxTimepickerDirective", () => {
            const input = {min: null} as NgxTimepickerDirective;

            component.registerInput(input);
            expect(component.minTime).toBeNull();
        });

        it("should return max time prop of NgxTimepickerDirective", () => {
            const input = {max: null} as NgxTimepickerDirective;

            component.registerInput(input);
            expect(component.maxTime).toBeNull();
        });

        it("should return disabled prop of NgxTimepickerDirective", () => {
            const input = {disabled: true} as NgxTimepickerDirective;

            component.registerInput(input);
            expect(component.disabled).toBeTruthy();
        });

        it("should return format prop of NgxTimepickerDirective", () => {
            const input = {format: 24} as NgxTimepickerDirective;

            component.registerInput(input);
            expect(component.format).toBe(24);
        });
    });

    it("should set format", () => {
        component.format = 24;
        expect(component.format).toBe(24);

        component.format = 10;
        expect(component.format).toBe(12);
    });

    describe("open", () => {

        it(`should call appendTimepickerToBody with config and emit event on open call`, async(() => {
            let counter = 0;
            const spy = spyOn(domService, "appendTimepickerToBody");
            const expectedConfig: TimepickerConfig = {
                preventOverlayClick: false,
                enableKeyboardInput: false,
                editableHintTmpl: undefined,
                disabled: false,
                defaultTime: undefined,
                confirmBtnTmpl: undefined,
                cancelBtnTmpl: undefined,
                timepickerBaseRef: component,
                disableAnimation: false,
                format: 24,
                maxTime: undefined,
                minTime: undefined,
                minutesGap: 6,
                time: "11:15 pm",
                appendToInput: false,
                theme: undefined,
                hoursOnly: false,
                timepickerClass: undefined,
                inputElement: undefined
            };
            const directive = {
                disabled: expectedConfig.disabled,
                format: expectedConfig.format,
                min: expectedConfig.minTime,
                max: expectedConfig.maxTime,
                value: expectedConfig.time,
                element: undefined
            };
            component.preventOverlayClick = expectedConfig.preventOverlayClick;
            component.enableKeyboardInput = expectedConfig.enableKeyboardInput;
            component.editableHintTmpl = expectedConfig.editableHintTmpl;
            component.confirmBtnTmpl = expectedConfig.confirmBtnTmpl;
            component.cancelBtnTmpl = expectedConfig.cancelBtnTmpl;
            component.defaultTime = expectedConfig.defaultTime;
            component.disableAnimation = expectedConfig.disableAnimation;
            component.appendToInput = false;
            component.minutesGap = expectedConfig.minutesGap;
            component.registerInput(directive as NgxTimepickerDirective);

            component.opened.subscribe(() => expect(++counter).toBe(1));
            component.open();
            expect(spy).toHaveBeenCalledWith(NgxTimepickerContainerComponent, expectedConfig);
        }));
    });

    describe("close", () => {

        it(`should call destroyTimepicker fn and emit closed event`, () => {
            let counter = 0;
            const spy = spyOn(domService, "destroyTimepicker");

            component.closed.subscribe(() => expect(++counter).toBe(1));
            component.close();

            expect(spy).toHaveBeenCalled();
        });


        it("should call close method if ESC key was pushed", fakeAsync(() => {
            const spy = spyOn(component, "close");
            const event = {
                keyCode: 27,
                stopPropagation: () => null,
                type: "keydown"
            };
            component.open();

            eventService.dispatchEvent(event as KeyboardEvent);

            tick();
            expect(spy).toHaveBeenCalled();
        }));

        it("should not call close method if any key, but ESC was pushed", fakeAsync(() => {
            const spy = spyOn(component, "close");
            const event = {
                keyCode: 28,
                stopPropagation: () => null,
                type: "keydown"
            };

            eventService.dispatchEvent(event as KeyboardEvent);

            tick();
            expect(spy).toHaveBeenCalledTimes(0);
        }));

        it("should not call close method if ESC was pushed and isEsc is 'false' ", fakeAsync(() => {
            const spy = spyOn(component, "close");
            const event = {
                keyCode: 27,
                stopPropagation: () => null,
                type: "keydown"
            };

            component.isEsc = false;
            eventService.dispatchEvent(event as KeyboardEvent);

            tick();
            expect(spy).toHaveBeenCalledTimes(0);
        }));
    });

    describe("minutesGap", () => {

        it("should set minutesGap to 5", () => {
            expect(component.minutesGap).toBeUndefined();
            component.minutesGap = 5;

            expect(component.minutesGap).toBe(5);
        });

        it("should set minutesGap to 1", () => {
            expect(component.minutesGap).toBeUndefined();
            component.minutesGap = 65;

            expect(component.minutesGap).toBe(1);
        });

        it("should convert minutesGap to int", () => {
            component.minutesGap = 6.5;

            expect(component.minutesGap).toBe(6);
        });

        it("should not set minutesGap if null or undefined", () => {
            component.minutesGap = undefined;
            expect(component.minutesGap).toBeUndefined();

            component.minutesGap = null;
            expect(component.minutesGap).toBeUndefined();
        });
    });

    describe("updateTime", () => {

        it("should emit time when method is called", async(() => {
            const expectedTime = "14:20";
            component.timeUpdated.subscribe(time => expect(time).toBe(expectedTime));

            component.updateTime(expectedTime);
        }));
    });

    describe("ngxTimepickerTheme", () => {

        it("should display warning message when setting value", () => {
            const spy = spyOn(console, "warn");

            component.ngxTimepickerTheme = {};
            expect(spy).toHaveBeenCalledWith(`'ngxtimepickerTheme' is deprecated. Use 'theme' instead`);
        });
    });
});
