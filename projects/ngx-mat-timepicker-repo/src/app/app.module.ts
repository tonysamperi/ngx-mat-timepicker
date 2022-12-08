import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
// MATERIAL
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import { MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
//
import {NgxMatTimepickerModule, NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";
//
import {NgxMatTimepickerAppComponent} from "./app.component";
import {NgxMatTimepickerTestComponent} from "./components/test/test.component";
import {NgxMatTimepickerDemoComponent} from "./components/demo/demo.component";
import {CodeViewerComponent} from "./components/code-viewer/code-viewer.component";
//
import {NgxMatTimepickerLocaleOverrideService} from "./locale-override.service";

@NgModule({
    declarations: [
        CodeViewerComponent,
        NgxMatTimepickerAppComponent,
        NgxMatTimepickerDemoComponent,
        NgxMatTimepickerTestComponent
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
