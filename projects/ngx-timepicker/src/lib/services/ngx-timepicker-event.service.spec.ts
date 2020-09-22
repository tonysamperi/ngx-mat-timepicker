import {NgxTimepickerEventService} from './ngx-timepicker-event.service';
import {TestBed} from '@angular/core/testing';

describe('NgxTimepickerService', () => {
    let eventService: NgxTimepickerEventService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NgxTimepickerEventService]
        });
        eventService = TestBed.get(NgxTimepickerEventService);
    });


    it('should dispatch click event', () => {
        eventService.backdropClick.subscribe(event => expect(event.type).toBe('click'));
        eventService.dispatchEvent(<MouseEvent>{type: 'click'});
    });

    it('should dispatch keydown event', () => {
        eventService.keydownEvent.subscribe(event => expect(event.type).toBe('keydown'));
        eventService.dispatchEvent(<KeyboardEvent>{type: 'keydown'});
    });

    it('should throw error if wrong event type', () => {
        expect(() => eventService.dispatchEvent(<MouseEvent>{type: 'mouseout'})).toThrowError('no such event type');
    });
});
