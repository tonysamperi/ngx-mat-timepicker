import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {Component, ViewChild} from "@angular/core";
import {NgxMatTimepickerHoursFaceDirective} from "./ngx-mat-timepicker-hours-face.directive";

@Component({
    template: `<div ngxMatTimepickerHoursFace [format]="12">`
})
class Test12HoursComponent {
    @ViewChild(NgxMatTimepickerHoursFaceDirective)
    directive: NgxMatTimepickerHoursFaceDirective;
}

@Component({
    template: `<div ngxMatTimepickerHoursFace [format]="24">`
})
class Test24HoursComponent {
    @ViewChild(NgxMatTimepickerHoursFaceDirective)
    directive: NgxMatTimepickerHoursFaceDirective;
}

describe("NgxMatTimepickerHoursFace", () => {
    let fixture: ComponentFixture<Test12HoursComponent>;
    let component12: Test12HoursComponent;
    let component24: Test24HoursComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [NgxMatTimepickerHoursFaceDirective, Test12HoursComponent, Test24HoursComponent],
        }).createComponent(Test12HoursComponent);

        component12 = fixture.componentInstance;
        component24 = TestBed.createComponent(Test24HoursComponent).componentInstance;
    });

    it("should generate array with 12 items", () => {
        expect(component12.directive.hoursList.length).toBe(12);
    });

    it("should generate array with 24 items", () => {
        expect(component24.directive.hoursList.length).toBe(24);
    });

    it("should emit selected hour (12hr format)", waitForAsync(() => {
        const time = 10;

        component12.directive.hourSelected.subscribe(hour => expect(hour).toBe(time));
        component12.directive.onTimeSelected(time);
    }));

    it("should emit selected hour (24hr format)", waitForAsync(() => {
        const time = 15;

        component24.directive.hourSelected.subscribe(hour => expect(hour).toBe(time));
        component24.directive.onTimeSelected(time);
    }));
});
