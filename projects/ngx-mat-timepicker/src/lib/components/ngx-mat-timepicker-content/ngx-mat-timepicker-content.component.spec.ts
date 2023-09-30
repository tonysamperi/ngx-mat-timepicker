import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
//
import {NgxMatTimepickerContentComponent} from "./ngx-mat-timepicker-content.component";

describe("NgxMatTimepickerContentComponent", () => {
    let component: NgxMatTimepickerContentComponent;
    let fixture: ComponentFixture<NgxMatTimepickerContentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NgxMatTimepickerContentComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxMatTimepickerContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
