import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxTimepickerPeriods } from '../../models/ngx-timepicker-periods.enum';
import { NgxTimepickerUnits } from '../../models/ngx-timepicker-units.enum';
import { NgxTimepickerClockFace } from '../../models/ngx-timepicker-clock-face.interface';
import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { DateTime } from 'luxon';
import { NgxTimepickerUtils } from '../../utils/ngx-timepicker.utils';

@Component({
    selector: 'ngx-timepicker-period',
    templateUrl: 'ngx-timepicker-period.component.html',
    styleUrls: ['ngx-timepicker-period.component.scss'],
    animations: [
        trigger('scaleInOut', [
            transition(':enter', [
                style({transform: 'scale(0)'}),
                animate('.2s', style({transform: 'scale(1)'})),
                sequence([
                    animate('3s', style({opacity: 1})),
                    animate('.3s', style({opacity: 0}))
                ])
            ])
        ])
    ]
})
export class NgxTimepickerPeriodComponent {

    timePeriod = NgxTimepickerPeriods;
    isPeriodAvailable = true;

    @Input() selectedPeriod: NgxTimepickerPeriods;
    @Input() format: number;
    @Input() activeTimeUnit: NgxTimepickerUnits;
    @Input() hours: NgxTimepickerClockFace[];
    @Input() minutes: NgxTimepickerClockFace[];
    @Input() minTime: DateTime;
    @Input() maxTime: DateTime;
    @Input() selectedHour: number | string;
    @Input() meridiems: string[];

    @Output() periodChanged = new EventEmitter<NgxTimepickerPeriods>();

    changePeriod(period: NgxTimepickerPeriods): void {
        this.isPeriodAvailable = this.isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    }

    animationDone(): void {
        this.isPeriodAvailable = true;
    }

    private isSwitchPeriodAvailable(period: NgxTimepickerPeriods): boolean {
        const time = this.getDisabledTimeByPeriod(period);
        return !time.every(t => t.disabled);
    }

    private getDisabledTimeByPeriod(period: NgxTimepickerPeriods): NgxTimepickerClockFace[] {
        switch (this.activeTimeUnit) {
            case NgxTimepickerUnits.HOUR:
                return NgxTimepickerUtils.disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            case NgxTimepickerUnits.MINUTE:
                return NgxTimepickerUtils.disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            default:
                throw new Error('no such NgxTimepickerUnits');
        }
    }
}
