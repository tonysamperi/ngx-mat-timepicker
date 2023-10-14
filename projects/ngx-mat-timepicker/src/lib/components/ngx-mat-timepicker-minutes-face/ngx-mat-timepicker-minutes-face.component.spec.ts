import {NO_ERRORS_SCHEMA, SimpleChanges} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
//
import {NgxMatTimepickerMinutesFaceComponent} from "./ngx-mat-timepicker-minutes-face.component";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
//
import {DateTime} from "ts-luxon";

describe("NgxMatTimepickerMinutesFaceComponent", () => {
    let fixture: ComponentFixture<NgxMatTimepickerMinutesFaceComponent>;
    let component: NgxMatTimepickerMinutesFaceComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [NgxMatTimepickerMinutesFaceComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxMatTimepickerMinutesFaceComponent);

        component = fixture.componentInstance;
    });

    it("should call disableMinutes once period changed", () => {
        const spy = spyOn(NgxMatTimepickerUtils, "disableMinutes");
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
        const minutes = NgxMatTimepickerUtils.getMinutes();
        component.minTime = time;
        component.maxTime = time;
        component.format = format;
        component.period = period;
        component.minutesList = minutes;
        component.selectedHour = 1;

        component.ngOnChanges(changes);
        expect(spy).toHaveBeenCalledWith(minutes, 1, {min: time, max: time, format, period});
    });

    it("should not call disableMinutes", () => {
        const spy = spyOn(NgxMatTimepickerUtils, "disableMinutes");
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
