import {Component, OnInit} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";
import {map} from "rxjs/operators";
//
import {ajax, AjaxResponse} from "rxjs/ajax";

// tslint:disable-next-line:naming-convention
interface Theme {
    description: string;
    value: string;
}

const pkgName = "ngx-mat-timepicker";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class NgxMatTimepickerAppComponent implements OnInit {

    get currentLocale() {
        return this._localeOverrideSrv.locale;
    }

    githubLink: string = `https://github.com/tonysamperi/${pkgName}`;
    latestVersion: string = "";
    myLocaleKeys: string[];
    myLocales: Record<"en" | "it" | "es" | "fr", string> = {
        en: "en-GB",
        it: "it-IT",
        es: "es-ES",
        fr: "fr-FR"
    };
    npmLink: string = `https://www.npmjs.com/package/${pkgName}`;
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
    }

    ngOnInit(): void {
        this.myLocaleKeys = Object.keys(this.myLocales);
        this.selectedTheme = this.themes[0];
        ajax.get(`https://unpkg.com/${pkgName}@latest/package.json`)
            .pipe(map((raw: AjaxResponse) => {
                return raw.response?.version;
            }))
            .subscribe((version: string) => {
                this.latestVersion = version;
            });
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
