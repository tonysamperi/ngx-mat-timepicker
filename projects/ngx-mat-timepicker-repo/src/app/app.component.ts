import {Component} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";

// tslint:disable-next-line:naming-convention
interface Theme {
    description: string;
    value: string;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class NgxMatTimepickerAppComponent {

    get currentLocale() {
        return this._localeOverrideSrv.locale;
    }

    githubLink: string = "https://github.com/tonysamperi/ngx-mat-timepicker";
    myLocaleKeys: string[];
    myLocales: Record<"en" | "it" | "es" | "fr", string> = {
        en: "en-GB",
        it: "it-IT",
        es: "es-ES",
        fr: "fr-FR"
    };
    selectedTheme: Theme;
    selectedTime: string;
    showInput: boolean = !0;
    themes: Theme[] = [
        {value: "", description: "Light"},
        {value: "dark-theme", description: "Dark"}
    ];
    year: number = new Date().getFullYear();

    private _nextLocale: number = 0;

    constructor(private _localeOverrideSrv: NgxMatTimepickerLocaleService) {
        this.myLocaleKeys = Object.keys(this.myLocales);
        this.selectedTheme = this.themes[0];
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

    updateTheme(theme: Theme): void {
        this.selectedTheme = theme;
        document.body.classList.toggle("dark-theme", !!theme.value);
    }

}
