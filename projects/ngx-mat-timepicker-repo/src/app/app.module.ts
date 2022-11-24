import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
// MATERIAL
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {DateAdapter, MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatLegacyTooltipModule as MatTooltipModule} from "@angular/material/legacy-tooltip";
//
import {NgxMatTimepickerModule, NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerAppComponent} from "./app.component";
import {CodeViewerComponent} from "./code-viewer/code-viewer.component";
import {NgxMatTimepickerLocaleOverrideService} from "./locale-override.service";

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
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatNativeDateModule,
        MatSelectModule,
        MatToolbarModule,
        MatTooltipModule,
        //
        NgxMatTimepickerModule
    ],
    providers: [
        // {provide: NgxMatTimepickerLocaleService, useClass: NgxMatTimepickerLocaleOverrideService}
    ],
    bootstrap: [NgxMatTimepickerAppComponent]
})
export class NgxMatTimepickerAppModule {
}
