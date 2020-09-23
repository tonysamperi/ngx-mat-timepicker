import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
//
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerAppComponent} from "./app.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        NgxMatTimepickerAppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgxMatTimepickerModule.setLocale("it-IT"),
        MatToolbarModule,
        MatSelectModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [NgxMatTimepickerAppComponent]
})
export class NgxMatTimepickerAppModule {
}
