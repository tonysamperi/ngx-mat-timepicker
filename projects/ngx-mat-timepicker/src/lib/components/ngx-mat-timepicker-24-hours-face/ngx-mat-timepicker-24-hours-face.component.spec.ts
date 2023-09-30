import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
//
import {NgxMatTimepicker24HoursFaceComponent} from "./ngx-mat-timepicker-24-hours-face.component";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
//
import {DateTime} from "ts-luxon";

describe("NgxMatTimepicker24HoursFaceComponent", () => {
    let fixture: ComponentFixture<NgxMatTimepicker24HoursFaceComponent>;
    let component: NgxMatTimepicker24HoursFaceComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            imports: [NgxMatTimepicker24HoursFaceComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).createComponent(NgxMatTimepicker24HoursFaceComponent);

        component = fixture.componentInstance;
    });

    it("should call disableHours", () => {
        const spy = spyOn(NgxMatTimepickerUtils, "disableHours");
        const time = DateTime.fromJSDate(new Date());
        const format = 24;
        const hours = NgxMatTimepickerUtils.getHours(format);

        component.minTime = time;
        component.maxTime = time;
        component.format = format;
        component.hoursList = hours;

        component.ngAfterContentInit();
        expect(spy).toHaveBeenCalledWith(hours, {min: time, max: time, format});
    });
});
