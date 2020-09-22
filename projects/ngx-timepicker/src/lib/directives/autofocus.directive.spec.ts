import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NgxTimepickerAutofocusDirective } from './ngx-timepicker-autofocus.directive';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <button id="button">Push me</button>
        <input [ngxTimepickerAutofocus]="true">`
})
class TestComponent {
}

describe('AutofocusDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let debugElement: DebugElement;
    let directive: NgxTimepickerAutofocusDirective;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [TestComponent, NgxTimepickerAutofocusDirective],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(TestComponent);

        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.directive(NgxTimepickerAutofocusDirective));
        directive = debugElement.injector.get(NgxTimepickerAutofocusDirective);
        fixture.detectChanges();
    });

    it('should focus element on which directive is applied', fakeAsync(() => {
        expect(document.activeElement).toEqual(document.body);
        directive.ngOnChanges();
        tick();
        expect(document.activeElement).toEqual(debugElement.nativeElement);
    }));

    it('should not focus element on which directive is applied', fakeAsync(() => {
        directive.isFocusActive = false;
        expect(document.activeElement).toEqual(document.body);
        directive.ngOnChanges();
        tick();
        expect(document.activeElement).toEqual(document.body);
    }));
});
