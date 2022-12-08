import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {NgxMatTimepickerAppModule} from "./app/app.module";
import {NGX_MAT_TIMEPICKER_ENVIRONMENT} from "./environments/environment";

if (NGX_MAT_TIMEPICKER_ENVIRONMENT.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(NgxMatTimepickerAppModule)
    .catch(err => console.error(err));
