import {EventEmitter} from "@angular/core";
import {TestBed} from "@angular/core/testing";
//
import {NgxMatTimepickerBaseDirective} from "./ngx-mat-timepicker-base.directive";
import {NGX_MAT_TIMEPICKER_CONFIG} from "../tokens/ngx-mat-timepicker-config.token";

describe("NgxMatTimepickerBaseDirective", () => {
    it("preserves the time if the input becomes disabled while the picker is open", () => {
        const timeSet = new EventEmitter<string>();
        const values: string[] = [];
        timeSet.subscribe(time => values.push(time));
        const picker = {disabled: !1, timeSet, close: (): void => {}};
        TestBed.configureTestingModule({
            providers: [{
                provide: NGX_MAT_TIMEPICKER_CONFIG,
                useValue: {
                    disabled: !1,
                    format: 12,
                    timepickerBaseRef: picker,
                    timepickerState: {getFullTime: () => "3:00 PM"}
                }
            }]
        });
        const directive = TestBed.runInInjectionContext(() => new NgxMatTimepickerBaseDirective());

        picker.disabled = !0;
        directive.setTime();
        expect(values).toEqual([]);

        picker.disabled = !1;
        directive.setTime();
        expect(values).toEqual(["3:00 PM"]);
    });
});
