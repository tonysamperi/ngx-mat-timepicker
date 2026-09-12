import {OverlayContainer, OverlayModule} from "@angular/cdk/overlay";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
//
import {NgxMatTimepickerPeriodComponent} from "./ngx-mat-timepicker-period.component";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
//
import {DateTime} from "ts-luxon";

describe("NgxMatTimepickerPeriodComponent", () => {
    let fixture: ComponentFixture<NgxMatTimepickerPeriodComponent>;
    let component: NgxMatTimepickerPeriodComponent;
    const minutes = NgxMatTimepickerUtils.getMinutes();

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [OverlayModule, NgxMatTimepickerPeriodComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxMatTimepickerPeriodComponent);

        component = fixture.componentInstance;
    });

    [!0, !1].forEach(disableAnimation => {
        it(`should show and dismiss the warning without animation providers (disabled: ${disableAnimation})`, () => {
            component.disableAnimation = disableAnimation;
            component.meridiems = ["AM", "PM"];
            component.isPeriodAvailable = !1;
            fixture.detectChanges();

            const container = TestBed.inject(OverlayContainer).getContainerElement();
            const warning = container.querySelector<HTMLElement>(".timepicker-period__warning");
            expect(warning).not.toBeNull();
            expect(warning?.classList.contains("timepicker-period__warning--static")).toBe(disableAnimation);

            warning?.dispatchEvent(new Event("animationend"));
            fixture.detectChanges();

            expect(component.isPeriodAvailable).toBeTruthy();
            expect(container.querySelector(".timepicker-period__warning")).toBeNull();
        });
    });

    it("should change period for hour unit", () => {
        component.activeTimeUnit = NgxMatTimepickerUnits.HOUR;
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 15});
        component.hours = NgxMatTimepickerUtils.getHours(12);
        component.isPeriodAvailable = false;
        component.periodChanged.subscribe(p => component.selectedPeriod = p);
        component.changePeriod(NgxMatTimepickerPeriods.PM);

        expect(component.isPeriodAvailable).toBeTruthy();
        expect(component.selectedPeriod).toBe(NgxMatTimepickerPeriods.PM);
    });

    it("should change period for minute unit", () => {
        component.activeTimeUnit = NgxMatTimepickerUnits.MINUTE;
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 5});
        component.minutes = minutes;
        component.selectedHour = 4;
        component.periodChanged.subscribe(p => component.selectedPeriod = p);
        component.changePeriod(NgxMatTimepickerPeriods.AM);

        expect(component.selectedPeriod).toBe(NgxMatTimepickerPeriods.AM);
    });

    it("should not change period", () => {
        component.activeTimeUnit = NgxMatTimepickerUnits.MINUTE;
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 5});
        component.minutes = minutes;
        component.selectedHour = 4;
        component.selectedPeriod = NgxMatTimepickerPeriods.AM;
        component.periodChanged.subscribe(p => component.selectedPeriod = p);
        component.changePeriod(NgxMatTimepickerPeriods.PM);

        expect(component.selectedPeriod).toBe(NgxMatTimepickerPeriods.AM);
    });

    it("should throw an error", () => {
        component.format = 12;
        component.minTime = DateTime.fromObject({hour: 1});
        component.maxTime = DateTime.fromObject({hour: 5});
        component.minutes = minutes;
        component.selectedHour = 4;
        component.selectedPeriod = NgxMatTimepickerPeriods.AM;
        try {
            component.changePeriod(NgxMatTimepickerPeriods.PM);
        }
        catch (e: any) {
            expect(e.message).toBe("no such NgxMatTimepickerUnits");
        }

    });

    it("should set isPeriodAvailable to true", () => {
        component.isPeriodAvailable = false;
        expect(component.isPeriodAvailable).toBeFalsy();

        component.animationDone();
        expect(component.isPeriodAvailable).toBeTruthy();
    });
});
