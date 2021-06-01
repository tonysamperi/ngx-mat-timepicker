import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NgxMatTimepickerThemeDirective} from "./ngx-mat-timepicker-theme.directive";
import { NgxMatTimepickerTheme } from "../models/ngx-mat-timepicker-theme.interface";

@Component({
    template: `
        <div [ngxMatTimepickerTheme]="darkTheme"></div>`
})
class TestComponent {
    darkTheme: NgxMatTimepickerTheme = {
        container: {
            bodyBackgroundColor: "#424242",
        },
    };
}

describe("NgxMatTimepickerThemDirective", () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestComponent, NgxMatTimepickerThemeDirective],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(TestComponent);

        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.directive(NgxMatTimepickerThemeDirective));
        fixture.detectChanges();
    });

    it("should set property", () => {
        const backgroundColor = debugElement.nativeElement.style.getPropertyValue("--body-background-color");
        expect(backgroundColor).toBe("#424242");
    });
});
