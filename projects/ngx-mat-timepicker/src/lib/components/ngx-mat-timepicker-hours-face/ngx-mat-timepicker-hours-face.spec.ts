import {TestBed, waitForAsync} from "@angular/core/testing";
import {Component, Input, ViewChild} from "@angular/core";
import {Subscription} from "rxjs";
import {NgxMatTimepickerHoursFaceDirective} from "./ngx-mat-timepicker-hours-face.directive";

@Component({
    template: `
		<div ngxMatTimepickerHoursFace
			 [format]="format"></div>`,
    standalone: true,
    imports: [NgxMatTimepickerHoursFaceDirective]
})
// tslint:disable-next-line:naming-convention
class TestHostComponent {

    @ViewChild(NgxMatTimepickerHoursFaceDirective) directive: NgxMatTimepickerHoursFaceDirective;
    @Input() format: 12 | 24 = 24;
}


describe("NgxMatTimepickerHoursFace", () => {
    function setup(options: { format: 12 | 24 }) {
        TestBed.configureTestingModule({
            imports: [NgxMatTimepickerHoursFaceDirective,
                TestHostComponent]
        });
        const fixture = TestBed.createComponent(TestHostComponent);
        const component = fixture.componentInstance;
        component.format = options.format;
        fixture.detectChanges();
        const directive = component.directive;

        return {
            directive
        };
    }

    let subscription: Subscription;

    beforeEach(() => {
        subscription = new Subscription();
    });

    afterEach(() => {
        subscription.unsubscribe();
    });

    it("should generate array with 12 items", () => {
        const {directive} = setup({format: 12});

        expect(directive.hoursList.length).toBe(12);
    });

    it("should generate array with 24 items", () => {
        const {directive} = setup({format: 24});

        expect(directive.hoursList.length).toBe(24);
    });

    it("should emit selected hour (12hr format)", waitForAsync(() => {
        const {directive} = setup({format: 12});
        const time = 10;

        subscription.add(directive.hourSelected.subscribe(hour => expect(hour).toBe(time)));
        directive.onTimeSelected(time);
    }));

    it("should emit selected hour (24hr format)", waitForAsync(() => {
        const {directive} = setup({format: 24});
        const time = 15;

        subscription.add(directive.hourSelected.subscribe(hour => expect(hour).toBe(time)));
        directive.onTimeSelected(time);
    }));
});
