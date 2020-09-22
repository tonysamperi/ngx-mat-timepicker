import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {NgxTimepickerThemeDirective} from "./ngx-timepicker-theme.directive";
import { NgxTimepickerTheme } from "../models/ngx-timepicker-theme.interface";

@Component({
    template: `
        <div [ngxtimepickerTheme]="darkTheme"></div>`
})
class TestComponent {
    darkTheme: NgxTimepickerTheme = {
        container: {
            bodyBackgroundColor: "#424242",
        },
    };
}

describe("NgxTimepickerThemDirective", () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestComponent, NgxTimepickerThemeDirective],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(TestComponent);

        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.directive(NgxTimepickerThemeDirective));
        fixture.detectChanges();
    });

    it("should set property", () => {
        const backgroundColor = debugElement.nativeElement.style.getPropertyValue("--body-background-color");
        expect(backgroundColor).toBe("#424242");
    });
});
