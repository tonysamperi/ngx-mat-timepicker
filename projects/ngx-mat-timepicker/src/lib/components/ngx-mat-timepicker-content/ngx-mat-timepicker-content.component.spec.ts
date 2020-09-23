import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTimepickerContentComponent } from './ngx-mat-timepicker-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NgxMatTimepickerContentComponent', () => {
    let component: NgxMatTimepickerContentComponent;
    let fixture: ComponentFixture<NgxMatTimepickerContentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxMatTimepickerContentComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxMatTimepickerContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
