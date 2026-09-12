import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    TemplateRef,
    inject
} from "@angular/core";
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {DateTime, Info} from "ts-luxon";
//
import {NgxMatTimepickerFormatType} from "../../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerLocaleService} from "../../services/ngx-mat-timepicker-locale.service";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
import {NgxMatTimepickerPeriodComponent} from "../ngx-mat-timepicker-period/ngx-mat-timepicker-period.component";
import {NgxMatTimepickerDialControlComponent} from "../ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component";

@Component({
    selector: "ngx-mat-timepicker-dial",
    templateUrl: "ngx-mat-timepicker-dial.component.html",
    styleUrls: ["ngx-mat-timepicker-dial.component.scss"],
    imports: [
        NgxMatTimepickerDialControlComponent,
        NgxMatTimepickerPeriodComponent,
        NgClass,
        NgTemplateOutlet
    ]
})
export class NgxMatTimepickerDialComponent implements OnChanges {

    get hourString() {
        return `${this.hour}`;
    }


    get minuteString() {
        return `${this.minute}`;
    }

    private get _locale(): string {
        return this._localeSrv.locale;
    }

    @Input() activeTimeUnit: NgxMatTimepickerUnits;
    @Input() disableAnimation = !1;
    @Input() editableHintTmpl: TemplateRef<Node>;
    @Input() format: NgxMatTimepickerFormatType;
    @Input() hour: number | string;
    @Output() hourChanged = new EventEmitter<NgxMatTimepickerClockFace>();

    hours: NgxMatTimepickerClockFace[];
    @Input() hoursOnly: boolean;
    @Input() isEditable: boolean;

    isHintVisible: boolean;
    @Input() maxTime: DateTime;
    meridiems: string[];
    @Input() minTime: DateTime;
    @Input() minute: number | string;
    @Output() minuteChanged = new EventEmitter<NgxMatTimepickerClockFace>();
    minutes: NgxMatTimepickerClockFace[];
    @Input() minutesGap: number;
    @Input() period: NgxMatTimepickerPeriods;

    @Output() periodChanged = new EventEmitter<NgxMatTimepickerPeriods>();

    timeUnit = NgxMatTimepickerUnits;
    @Output() timeUnitChanged = new EventEmitter<NgxMatTimepickerUnits>();

    private _localeSrv = inject(NgxMatTimepickerLocaleService);

    constructor() {
        this.meridiems = Info.meridiems({locale: this._locale});
    }

    changeHour(hour: NgxMatTimepickerClockFace): void {
        this.hourChanged.next(hour);
    }

    changeMinute(minute: NgxMatTimepickerClockFace): void {
        this.minuteChanged.next(minute);
    }

    changePeriod(period: NgxMatTimepickerPeriods): void {
        this.periodChanged.next(period);
    }

    changeTimeUnit(unit: NgxMatTimepickerUnits): void {
        this.timeUnitChanged.next(unit);
    }

    hideHint(): void {
        this.isHintVisible = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        const periodChanged = changes["period"] && changes["period"].currentValue;
        if (periodChanged || changes["format"] && changes["format"].currentValue) {
            const hours = NgxMatTimepickerUtils.getHours(this.format);

            this.hours = NgxMatTimepickerUtils.disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (periodChanged || changes["hour"] && changes["hour"].currentValue) {
            const minutes = NgxMatTimepickerUtils.getMinutes(this.minutesGap);

            this.minutes = NgxMatTimepickerUtils.disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }

    showHint(): void {
        this.isHintVisible = true;
    }
}
