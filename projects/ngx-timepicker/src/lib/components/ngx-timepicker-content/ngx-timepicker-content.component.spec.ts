import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimepickerContentComponent } from './ngx-timepicker-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NgxTimepickerContentComponent', () => {
    let component: NgxTimepickerContentComponent;
    let fixture: ComponentFixture<NgxTimepickerContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxTimepickerContentComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxTimepickerContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
