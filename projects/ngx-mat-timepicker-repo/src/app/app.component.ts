import {Component, OnInit} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";
//
import TypeWriter from "typewriter-effect/dist/core.js";
import {DateTime} from "ts-luxon";
import {catchError, map, of, switchMap, timer} from "rxjs";
import {ajax, AjaxResponse} from "rxjs/ajax";

interface NgxMatTimepickerTheme {
    description: string;
    value: string;
}

type NgxMatTimepickerLocaleKey = "en" | "it" | "es" | "fr";

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
    maxTime: DateTime = DateTime.local().startOf("day").set({
        hour: 16,
        minute: 0
    });
    messages: string[] = [];
    minTime: DateTime = this.maxTime.set({hour: 14});
    myLocaleKeys: NgxMatTimepickerLocaleKey[];
    myLocales: Record<NgxMatTimepickerLocaleKey, string> = {
        en: "en-GB",
        it: "it-IT",
        es: "es-ES",
        fr: "fr-FR"
    };
    npmLink: string = `https://www.npmjs.com/package/${pkgName}`;
    selectedTheme: NgxMatTimepickerTheme;
    selectedTime: string;
    selectedTimeWithRange: string;
    showInput: boolean = !0;
    themes: NgxMatTimepickerTheme[] = [
        {value: "", description: "Light"},
        {value: "dark-theme", description: "Dark"}
    ];
    year: number = new Date().getFullYear();

    private _nextLocale: number = 0;

    constructor(private _localeOverrideSrv: NgxMatTimepickerLocaleService) {
    }


    isCurrentLocale(localeKey: NgxMatTimepickerLocaleKey): boolean {
        return this.myLocales[localeKey] === this.currentLocale;
    }

    ngOnInit(): void {
        this.myLocaleKeys = Object.keys(this.myLocales) as NgxMatTimepickerLocaleKey[];
        this.selectedTheme = this.themes[0];
        ajax.get(`https://unpkg.com/${pkgName}@latest/package.json`)
            .pipe(map((raw: AjaxResponse<any>) => {
                return raw.response?.version;
            }))
            .subscribe({
                next: (version: string) => {
                    this.latestVersion = version;
                }
            });

        ajax.get(`./assets/messages.json`)
            .pipe(
                switchMap((resp: AjaxResponse<any>) => {
                    this.messages = resp.response.messages;

                    return timer(150);
                }),
                catchError(() => of([]))
            )
            .subscribe({
                next: () => {
                    this.messages.forEach((m: string, i: number) => {
                        new TypeWriter(`[mtp-messages] li:nth-child(${i+1})`, {
                            strings: [m],
                            autoStart: true,
                            loop: true
                        });
                    });
                }
            });
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

    updateTheme(theme: NgxMatTimepickerTheme): void {
        this.selectedTheme = theme;
        document.body.classList.toggle("dark-theme", !!theme.value);
    }

}
