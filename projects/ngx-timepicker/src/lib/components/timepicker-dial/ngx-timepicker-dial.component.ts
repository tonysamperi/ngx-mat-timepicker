import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    TemplateRef
} from "@angular/core";
//
import { NgxTimepickerPeriods } from "../../models/ngx-timepicker-periods.enum";
import { NgxTimepickerUnits } from "../../models/ngx-timepicker-units.enum";
import { NgxTimepickerClockFace } from "../../models/ngx-timepicker-clock-face.interface";
import { NGX_TIMEPICKER_LOCALE } from "../../tokens/time-locale.token";
import { NgxTimepickerUtils } from "../../utils/ngx-timepicker.utils";
//
import { DateTime, Info } from "luxon";

@Component({
    selector: "ngx-timepicker-dial",
    templateUrl: "ngx-timepicker-dial.component.html",
    styleUrls: ["ngx-timepicker-dial.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTimepickerDialComponent implements OnChanges {
    @Input() activeTimeUnit: NgxTimepickerUnits;

    @Input() editableHintTmpl: TemplateRef<Node>;
    @Input() format: number;
    @Input() hour: number | string;
    @Output() hourChanged = new EventEmitter<NgxTimepickerClockFace>();

    hours: NgxTimepickerClockFace[];
    @Input() hoursOnly: boolean;
    @Input() isEditable: boolean;

    isHintVisible: boolean;
    @Input() maxTime: DateTime;
    meridiems = Info.meridiems({locale: this._locale});
    @Input() minTime: DateTime;
    @Input() minute: number | string;
    @Output() minuteChanged = new EventEmitter<NgxTimepickerClockFace>();
    minutes: NgxTimepickerClockFace[];
    @Input() minutesGap: number;
    @Input() period: NgxTimepickerPeriods;

    @Output() periodChanged = new EventEmitter<NgxTimepickerPeriods>();

    timeUnit = NgxTimepickerUnits;
    @Output() timeUnitChanged = new EventEmitter<NgxTimepickerUnits>();

    constructor(@Inject(NGX_TIMEPICKER_LOCALE) private _locale: string) {
    }

    changeHour(hour: NgxTimepickerClockFace): void {
        this.hourChanged.next(hour);
    }

    changeMinute(minute: NgxTimepickerClockFace): void {
        this.minuteChanged.next(minute);
    }

    changePeriod(period: NgxTimepickerPeriods): void {
        this.periodChanged.next(period);
    }

    changeTimeUnit(unit: NgxTimepickerUnits): void {
        this.timeUnitChanged.next(unit);
    }

    hideHint(): void {
        this.isHintVisible = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        const periodChanged = changes.period && changes.period.currentValue;
        if (periodChanged || changes.format && changes.format.currentValue) {
            const hours = NgxTimepickerUtils.getHours(this.format);

            this.hours = NgxTimepickerUtils.disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (periodChanged || changes.hour && changes.hour.currentValue) {
            const minutes = NgxTimepickerUtils.getMinutes(this.minutesGap);

            this.minutes = NgxTimepickerUtils.disableMinutes(minutes, +this.hour, {
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
