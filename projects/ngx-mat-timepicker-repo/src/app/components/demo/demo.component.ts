import {Component, OnInit, ViewChild} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
//
import {CodeViewerComponent} from "../code-viewer/code-viewer.component";
import {
    NgxMatTimepickerComponent,
    NgxMatTimepickerLocaleService,
    NgxMatTimepickerToggleComponent,
    NgxMatTimepickerFieldComponent,
    NgxMatTimepickerDirective
} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerLocaleKey} from "../../shared/ngx-mat-timepicker-locale-key.enum";
//
import {catchError, map, of, switchMap, timer} from "rxjs";
import {ajax, AjaxResponse} from "rxjs/ajax";
import {DateTime} from "ts-luxon";
// eslint-disable-next-line @typescript-eslint/naming-convention
import TypeWriter from "typewriter-effect/dist/core.js";
import pkg from "../../../../../../package.json";

interface NgxMatTimepickerTheme {
    description: string;
    value: string;
}

const pkgName = "ngx-mat-timepicker";

@Component({
    selector: "app-demo",
    templateUrl: "demo.component.html",
    styleUrls: ["demo.component.scss"],
    standalone: true,
    imports: [MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        NgFor,
        NgIf,
        FormsModule,
        CodeViewerComponent,
        MatFormFieldModule,
        MatInputModule,
        NgxMatTimepickerDirective,
        NgxMatTimepickerComponent,
        NgxMatTimepickerFieldComponent,
        MatDatepickerModule,
        NgxMatTimepickerToggleComponent
    ]
})
export class NgxMatTimepickerDemoComponent implements OnInit {

    get buildRef(): string {
        return `${pkg.version}-build-${pkg.build}`;
    }

    get currentLocale(): NgxMatTimepickerLocaleKey {
        return this._localeOverrideSrv.locale as NgxMatTimepickerLocaleKey;
    }

    get currentLocaleKey(): string {
        return this.myLocalesReversed[this.currentLocale];
    }

    githubLink: string = `https://github.com/tonysamperi/${pkgName}`;
    latestVersion: string = "";
    maxTime: DateTime = DateTime.local().startOf("day").set({
        hour: 16,
        minute: 0
    });
    messages: { opts?: { delay?: number; loop?: boolean; }; text: string; }[] = [];
    minTime: DateTime = this.maxTime.set({hour: 14});
    myLocaleKeys: NgxMatTimepickerLocaleKey[];
    myLocales: Record<keyof typeof NgxMatTimepickerLocaleKey, string> = {
        en: "en-GB",
        it: "it-IT",
        es: "es-ES",
        fr: "fr-FR"
    };
    myLocalesReversed: Record<string, NgxMatTimepickerLocaleKey> = Object.fromEntries(Object.entries(this.myLocales).map(a => a.reverse()));
    npmLink: string = `https://www.npmjs.com/package/${pkgName}`;
    @ViewChild("pickerH") pickerFreeInput: NgxMatTimepickerComponent;
    selectedTheme: NgxMatTimepickerTheme;
    selectedTimes: Record<"A"| "B" | "C" | "D" | "E" | "F" | "G" | "H", string> = {
        A: void 0,
        B: void 0,
        C: void 0,
        D: void 0,
        E: void 0,
        F: void 0,
        G: void 0,
        H: void 0
    };
    showInput: boolean = !0;
    themes: NgxMatTimepickerTheme[] = [
        {value: "", description: "Light"},
        {value: "dark-theme", description: "Dark"}
    ];
    timeRegex: RegExp = /([0-9]|1\d):[0-5]\d (AM|PM)/;
    year: number = new Date().getFullYear();

    private _nextLocale: number = 0;

    constructor(private _localeOverrideSrv: NgxMatTimepickerLocaleService) {
    }

    debug(): void {
        console.info("focused input!");
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

        this._getMessages("[mtp-messages]");
    }

    onTimeSet($event: string): void {
        console.info("TIME UPDATED", $event);
    }

    selectedTimeFreeInputChanged($event: string): void {
        console.info("TIME CHANGED");
        this.pickerFreeInput.updateTime($event);
    }

    updateLocale(localeKey?: NgxMatTimepickerLocaleKey): void {
        if (localeKey) {
            this._nextLocale = this.myLocaleKeys.indexOf(localeKey) - 1;
        }
        this._localeOverrideSrv.updateLocale(
            this.myLocales[this.myLocaleKeys[++this._nextLocale]]
        );
        if(this._nextLocale >= this.myLocaleKeys.length - 1) {
            (this._nextLocale = -1);
        }
    }

    updateTheme(theme: NgxMatTimepickerTheme): void {
        this.selectedTheme = theme;
        document.body.classList.toggle("dark-theme", !!theme.value);
    }

    updateTime($event: string, targetProp: string): void {
        console.info("TIME SET", $event);
        (this as any)[targetProp] = $event;
    }

    //

    private _getMessages(wrapperSelector: string): void {
        if (!document.querySelector(wrapperSelector)) {
            console.warn(`No results for selector ${wrapperSelector}, skipping messages!`);

            return;
        }
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
                    this.messages.forEach(({text, opts = {}}, i: number) => {
                        const tw = new TypeWriter(`${wrapperSelector} li:nth-child(${i + 1})`, {
                            strings: opts.loop ? [text] : void 0,
                            autoStart: !!opts.loop,
                            loop: !!opts.loop,
                            delay: opts.delay || "natural"
                        });
                        if (!opts.loop) {
                            tw.typeString(text).stop().start();
                        }
                    });
                }
            });
    }

}
