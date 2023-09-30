import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
//
import {NgxMatTimepickerToggleComponent} from "./ngx-mat-timepicker-toggle.component";
import {NgxMatTimepickerComponent} from "../ngx-mat-timepicker/ngx-mat-timepicker.component";

describe("NgxMatTimepickerToggleComponent", () => {
    let fixture: ComponentFixture<NgxMatTimepickerToggleComponent>;
    let component: NgxMatTimepickerToggleComponent;
    const timepicker = {disabled: true, open: () => null} as NgxMatTimepickerComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [NgxMatTimepickerToggleComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxMatTimepickerToggleComponent);

        component = fixture.componentInstance;
    });

    it("should set disabled state from timepicker if it did not set for toggle", () => {
        component.timepicker = timepicker;
        expect(component.disabled).toBeTruthy();
    });

    it("should set disabled state", () => {
        component.disabled = true;
        expect(component.disabled).toBeTruthy();
    });

    it("should override timepicker's disabled state", () => {
        component.timepicker = timepicker;
        component.disabled = false;
        expect(component.disabled).toBeFalsy();
    });

    it("should call open method for timepicker", () => {
        const spy = spyOn(timepicker, "open");
        component.timepicker = timepicker;
        component.open({stopPropagation: () => null} as MouseEvent);

        expect(spy).toHaveBeenCalled();
    });

    it("should not call open method for timepicker if no timepicker provided", () => {
        const spy = spyOn(timepicker, "open");
        component.open({stopPropagation: () => null} as MouseEvent);

        expect(spy).toHaveBeenCalledTimes(0);
    });
});
