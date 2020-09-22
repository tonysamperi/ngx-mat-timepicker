import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxTimepickerToggleComponent} from './ngx-timepicker-toggle.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxTimepickerComponent} from '../ngx-timepicker/ngx-timepicker.component';

describe('NgxTimepickerToggleComponent', () => {
    let fixture: ComponentFixture<NgxTimepickerToggleComponent>;
    let component: NgxTimepickerToggleComponent;
    const timepicker = {disabled: true, open: () => null} as NgxTimepickerComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [NgxTimepickerToggleComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxTimepickerToggleComponent);

        component = fixture.componentInstance;
    });

    it('should set disabled state from timepicker if it did not set for toggle', () => {
        component.timepicker = timepicker;
        expect(component.disabled).toBeTruthy();
    });

    it('should set disabled state', () => {
        component.disabled = true;
        expect(component.disabled).toBeTruthy();
    });

    it('should override timepicker\'s disabled state', () => {
        component.timepicker = timepicker;
        component.disabled = false;
        expect(component.disabled).toBeFalsy();
    });

    it('should call open method for timepicker', () => {
        const spy = spyOn(timepicker, 'open');
        component.timepicker = timepicker;
        component.open({stopPropagation: () => null});

        expect(spy).toHaveBeenCalled();
    });

    it('should not call open method for timepicker if no timepicker provided', () => {
        const spy = spyOn(timepicker, 'open');
        component.open({stopPropagation: () => null});

        expect(spy).toHaveBeenCalledTimes(0);
    });
});
