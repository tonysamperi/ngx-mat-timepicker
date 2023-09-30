import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
//
import {NgxMatTimepickerAutofocusDirective} from "./ngx-mat-timepicker-autofocus.directive";

@Component({
    template: `
		<button id="button">Push me</button>
		<input [ngxMatTimepickerAutofocus]="true">`,
    standalone: true,
    imports: [NgxMatTimepickerAutofocusDirective]
})
// tslint:disable-next-line:naming-convention
class TestComponent {
}

describe("AutofocusDirective", () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;
    let directive: NgxMatTimepickerAutofocusDirective;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [TestComponent, NgxMatTimepickerAutofocusDirective],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(TestComponent);

        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.directive(NgxMatTimepickerAutofocusDirective));
        directive = debugElement.injector.get(NgxMatTimepickerAutofocusDirective);
        fixture.detectChanges();
    });

    it("should focus element on which directive is applied", fakeAsync(() => {
        expect(document.activeElement).toEqual(document.body);
        directive.ngOnChanges();
        tick();
        expect(document.activeElement).toEqual(debugElement.nativeElement);
    }));

    it("should not focus element on which directive is applied", fakeAsync(() => {
        directive.isFocusActive = false;
        expect(document.activeElement).toEqual(document.body);
        directive.ngOnChanges();
        tick();
        expect(document.activeElement).toEqual(document.body);
    }));
});
