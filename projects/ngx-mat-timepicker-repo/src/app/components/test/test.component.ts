import {Component, OnInit} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";


@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-test",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"]
})
export class NgxMatTimepickerTestComponent implements OnInit {

    get currentLocale() {
        return this._localeOverrideSrv.locale;
    }

    myLocaleKeys: string[];
    myLocales: Record<"en" | "it" | "es" | "fr", string> = {
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
        this.myLocaleKeys = Object.keys(this.myLocales);
    }

    onTimeSet($event: string): void {
        console.info("TIME UPDATED", $event);
    }

    updateLocale(localeKey?: string): void {
        if (localeKey) {
            this._nextLocale = this.myLocaleKeys.indexOf(localeKey) - 1;
        }
        this._localeOverrideSrv.updateLocale(
            this.myLocales[this.myLocaleKeys[++this._nextLocale]]
        );
        (this._nextLocale >= this.myLocaleKeys.length - 1) && (this._nextLocale = -1);
    }

}
