import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
//
import {NgxTimepickerModule} from "ngx-timepicker";
//
import {NgxTimepickerAppComponent} from "./app.component";

@NgModule({
    declarations: [
        NgxTimepickerAppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgxTimepickerModule.setLocale("it-IT")
    ],
    providers: [],
    bootstrap: [NgxTimepickerAppComponent]
})
export class NgxTimepickerAppModule {
}
