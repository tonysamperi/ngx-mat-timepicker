import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {vi} from "vitest";
//
import {NgxMatTimepickerAutofocusDirective} from "./ngx-mat-timepicker-autofocus.directive";

const fakeAsync = (callback: () => void): (() => void) => callback;
const tick = (): void => {
    vi.runAllTimers();
};

@Component({
    template: `
        <button id="button">Push me</button>
        <input [ngxMatTimepickerAutofocus]="true">`,
    imports: [NgxMatTimepickerAutofocusDirective]
})
class TestComponent {
}

describe("AutofocusDirective", () => {
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;
    let directive: NgxMatTimepickerAutofocusDirective;

    beforeEach(() => {
        (document.activeElement as HTMLElement)?.blur();
        vi.useFakeTimers();
        fixture = TestBed.configureTestingModule({
            imports: [TestComponent, NgxMatTimepickerAutofocusDirective],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(TestComponent);
        debugElement = fixture.debugElement.query(By.directive(NgxMatTimepickerAutofocusDirective));
        directive = debugElement.injector.get(NgxMatTimepickerAutofocusDirective);
        fixture.detectChanges();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("should focus element on which directive is applied", fakeAsync(() => {
        expect(document.activeElement).toEqual(document.body);
        directive.ngOnChanges();
        tick();
        expect(document.activeElement).toEqual(debugElement.nativeElement);
    }));

    it("should not focus element on which directive is applied", fakeAsync(() => {
        tick();
        directive.isFocusActive = false;
        fixture.nativeElement.querySelector("button").focus();
        expect(document.activeElement).toEqual(fixture.nativeElement.querySelector("button"));
        directive.ngOnChanges();
        tick();
        expect(document.activeElement).toEqual(fixture.nativeElement.querySelector("button"));
    }));
});
