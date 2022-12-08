import {Component, OnInit} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerLocaleKey} from "../../shared/ngx-mat-timepicker-locale-key.enum";


@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-test",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"]
})
export class NgxMatTimepickerTestComponent implements OnInit {

    get currentLocale(): string {
        return this._localeOverrideSrv.locale;
    }

    myLocaleKeys: NgxMatTimepickerLocaleKey[];
    myLocales: Record<NgxMatTimepickerLocaleKey, string> = {
        en: "en-GB",
        it: "it-IT",
        es: "es-ES",
        fr: "fr-FR"
    };
    selectedTime: string;
    year: number = new Date().getFullYear();

    private _nextLocale: number = 0;

    constructor(private _localeOverrideSrv: NgxMatTimepickerLocaleService) {
    }

    ngOnInit(): void {
        this.myLocaleKeys = Object.keys(this.myLocales) as NgxMatTimepickerLocaleKey[];
    }

    onTimeSet($event: string): void {
        console.info("TIME UPDATED", $event);
    }

    updateLocale(localeKey?: NgxMatTimepickerLocaleKey): void {
        if (localeKey) {
            this._nextLocale = this.myLocaleKeys.indexOf(localeKey) - 1;
        }
        this._localeOverrideSrv.updateLocale(
            this.myLocales[this.myLocaleKeys[++this._nextLocale]]
        );
        (this._nextLocale >= this.myLocaleKeys.length - 1) && (this._nextLocale = -1);
    }

}
