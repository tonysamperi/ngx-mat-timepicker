import { Directive, HostListener, Input } from '@angular/core';
import {NgxTimepickerEventService} from '../services/ngx-timepicker-event.service';

@Directive({
    selector: '[overlay]'
})
export class OverlayDirective {

    @Input('overlay') preventClick: boolean;

    constructor(private eventService: NgxTimepickerEventService) {
    }


    @HostListener('click', ['$event'])
    onClick(e: any) {
        if (!this.preventClick) {
            this.eventService.dispatchEvent(e);
        }
        e.preventDefault();
    }

}
