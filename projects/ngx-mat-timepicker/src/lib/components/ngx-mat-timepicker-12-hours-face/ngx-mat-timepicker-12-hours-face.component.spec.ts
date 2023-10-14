import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA, SimpleChanges} from "@angular/core";
//
import {NgxMatTimepicker12HoursFaceComponent} from "./ngx-mat-timepicker-12-hours-face.component";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
//
import {DateTime} from "ts-luxon";

describe("NgxMatTimepicker12HoursFaceComponent", () => {
    let fixture: ComponentFixture<NgxMatTimepicker12HoursFaceComponent>;
    let component: NgxMatTimepicker12HoursFaceComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [NgxMatTimepicker12HoursFaceComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxMatTimepicker12HoursFaceComponent);

        component = fixture.componentInstance;
    });

    it("should call disabledHours once period changed", () => {
        const spy = spyOn(NgxMatTimepickerUtils, "disableHours");
        const changes: SimpleChanges = {
            period: {
                currentValue: NgxMatTimepickerPeriods.PM,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };
        const time = DateTime.fromJSDate(new Date());
        const format = 12;
        const period = NgxMatTimepickerPeriods.PM;
        const hours = NgxMatTimepickerUtils.getHours(format);
        component.minTime = time;
        component.maxTime = time;
        component.format = format;
        component.period = period;
        component.hoursList = hours;

        component.ngOnChanges(changes);
        expect(spy).toHaveBeenCalledWith(hours, {min: time, max: time, format, period});
    });

    it("should not call disabledHours", () => {
        const spy = spyOn(NgxMatTimepickerUtils, "disableHours");
        const changes: SimpleChanges = {
            minTime: {
                currentValue: null,
                previousValue: undefined,
                firstChange: true,
                isFirstChange: () => null
            }
        };

        component.ngOnChanges(changes);
        expect(spy).toHaveBeenCalledTimes(0);
    });
});
