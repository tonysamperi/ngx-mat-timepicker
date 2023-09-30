import {Component, EventEmitter, Input, Output} from "@angular/core";
import {animate, sequence, style, transition, trigger} from "@angular/animations";
import { NgClass, NgIf } from "@angular/common";
import { FlexibleConnectedPositionStrategy, Overlay, ScrollStrategy, CdkOverlayOrigin, CdkConnectedOverlay } from "@angular/cdk/overlay";
//
import {NgxMatTimepickerFormatType} from "../../models/ngx-mat-timepicker-format.type";
import {NgxMatTimepickerPeriods} from "../../models/ngx-mat-timepicker-periods.enum";
import {NgxMatTimepickerUnits} from "../../models/ngx-mat-timepicker-units.enum";
import {NgxMatTimepickerClockFace} from "../../models/ngx-mat-timepicker-clock-face.interface";
import {NgxMatTimepickerUtils} from "../../utils/ngx-mat-timepicker.utils";
//
import {DateTime} from "ts-luxon";

@Component({
    selector: "ngx-mat-timepicker-period",
    templateUrl: "ngx-mat-timepicker-period.component.html",
    styleUrls: ["ngx-mat-timepicker-period.component.scss"],
    animations: [
        trigger("scaleInOut", [
            transition(":enter", [
                style({ transform: "scale(0)" }),
                animate(".2s", style({ transform: "scale(1)" })),
                sequence([
                    animate("3s", style({ opacity: 1 })),
                    animate(".3s", style({ opacity: 0 }))
                ])
            ])
        ])
    ],
    standalone: true,
    imports: [CdkOverlayOrigin, NgClass, CdkConnectedOverlay, NgIf]
})
export class NgxMatTimepickerPeriodComponent {

    @Input() activeTimeUnit: NgxMatTimepickerUnits;
    @Input() format: NgxMatTimepickerFormatType;
    @Input() hours: NgxMatTimepickerClockFace[];
    isPeriodAvailable = true;
    @Input() maxTime: DateTime;
    @Input() meridiems: string[];
    @Input() minTime: DateTime;
    @Input() minutes: NgxMatTimepickerClockFace[];
    overlayPositionStrategy: FlexibleConnectedPositionStrategy;
    overlayScrollStrategy: ScrollStrategy = this._overlay.scrollStrategies.reposition();
    @Output() periodChanged = new EventEmitter<NgxMatTimepickerPeriods>();
    @Input() selectedHour: number | string;
    @Input() selectedPeriod: NgxMatTimepickerPeriods;
    timePeriod = NgxMatTimepickerPeriods;

    constructor(protected _overlay: Overlay) {
    }

    animationDone(): void {
        this.isPeriodAvailable = true;
    }

    changePeriod(period: NgxMatTimepickerPeriods): void {
        this.isPeriodAvailable = this._isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    }

    private _getDisabledTimeByPeriod(period: NgxMatTimepickerPeriods): NgxMatTimepickerClockFace[] {
        switch (this.activeTimeUnit) {
            case NgxMatTimepickerUnits.HOUR:
                return NgxMatTimepickerUtils.disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            case NgxMatTimepickerUnits.MINUTE:
                return NgxMatTimepickerUtils.disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            default:
                throw new Error("no such NgxMatTimepickerUnits");
        }
    }

    private _isSwitchPeriodAvailable(period: NgxMatTimepickerPeriods): boolean {
        const time = this._getDisabledTimeByPeriod(period);

        return !time.every(t => t.disabled);
    }
}
