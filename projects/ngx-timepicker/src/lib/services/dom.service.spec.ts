import { NgxTimepickerDomService } from './ngx-timepicker-dom.service';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxTimepickerConfig } from '../models/ngx-timepicker-config.interface';
import {
    NgxTimepickerContainerComponent
} from '../components/ngx-timepicker-container/ngx-timepicker-container.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NGX_TIMEPICKER_LOCALE } from '../tokens/time-locale.token';

describe('NgxTimepickerDomService', () => {
    let service: NgxTimepickerDomService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule],
            declarations: [NgxTimepickerContainerComponent],
            providers: [
                {provide: NGX_TIMEPICKER_LOCALE, useValue: 'en-US'}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [NgxTimepickerContainerComponent]
            }
        });

        service = TestBed.get(NgxTimepickerDomService);

        TestBed.compileComponents();
    });

    describe('appendTimepickerToBody', () => {

        it('should append provided timepicker to body', () => {
            service.appendTimepickerToBody(NgxTimepickerContainerComponent, {} as NgxTimepickerConfig);
            const expected = document.getElementsByTagName('ngx-timepicker-container')[0];

            expect(document.body.lastChild).toEqual(expected);
        });
    });

});
