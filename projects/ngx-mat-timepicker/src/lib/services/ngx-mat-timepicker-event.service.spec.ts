import {NgxMatTimepickerEventService} from "./ngx-mat-timepicker-event.service";
import {TestBed} from "@angular/core/testing";

describe("NgxMatTimepickerService", () => {
    let eventService: NgxMatTimepickerEventService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NgxMatTimepickerEventService]
        });
        eventService = TestBed.inject(NgxMatTimepickerEventService);
    });


    it("should dispatch click event", () => {
        eventService.backdropClick.subscribe(event => expect(event.type).toBe("click"));
        eventService.dispatchEvent({type: "click"} as MouseEvent);
    });

    it("should dispatch keydown event", () => {
        eventService.keydownEvent.subscribe(event => expect(event.type).toBe("keydown"));
        eventService.dispatchEvent({type: "keydown"} as KeyboardEvent);
    });

    it("should throw error if wrong event type", () => {
        expect(() => eventService.dispatchEvent({type: "mouseout"} as MouseEvent)).toThrowError("no such event type");
    });
});
