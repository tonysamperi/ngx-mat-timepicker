import {Component} from "@angular/core";

interface Theme {
    description: string;
    value: string
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class NgxMatTimepickerAppComponent {

    githubLink: string = "https://github.com/tonysamperi/ngx-mat-timepicker";
    selectedTheme: Theme;
    selectedTime: string;
    showInput: boolean = !0;
    themes: Theme[] = [
        {value: "", description: "Light"},
        {value: "dark-theme", description: "Dark"}
    ];

    constructor() {
        this.selectedTheme = this.themes[0];
    }

    updateTheme(theme: Theme): void {
        this.selectedTheme = theme;
        document.body.classList.toggle("dark-theme", !!theme.value);
    }

}
