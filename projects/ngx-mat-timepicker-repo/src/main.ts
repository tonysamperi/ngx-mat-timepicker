import {provideZoneChangeDetection} from "@angular/core";
import {bootstrapApplication} from "@angular/platform-browser";
//
import {ngxMatTimepickerAppConfig} from "./app/app.config";
import {NgxMatTimepickerAppComponent} from "./app/app.component";

bootstrapApplication(NgxMatTimepickerAppComponent, {
    providers: [
        provideZoneChangeDetection(),
        ...ngxMatTimepickerAppConfig.providers
    ]
}).catch(err => console.error(err));
