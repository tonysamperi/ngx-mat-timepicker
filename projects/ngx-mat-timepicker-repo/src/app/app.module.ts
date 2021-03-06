import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
// MATERIAL
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
//
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerAppComponent} from "./app.component";
import {CodeViewerComponent} from "./code-viewer/code-viewer.component";

@NgModule({
    declarations: [
        NgxMatTimepickerAppComponent,
        CodeViewerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        //
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatToolbarModule,
        MatTooltipModule,
        //
        NgxMatTimepickerModule.setLocale("it-IT"),
    ],
    providers: [],
    bootstrap: [NgxMatTimepickerAppComponent]
})
export class NgxMatTimepickerAppModule {
}
