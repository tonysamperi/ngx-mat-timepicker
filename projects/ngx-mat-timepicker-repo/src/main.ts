import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgxMatTimepickerAppModule } from "./app/app.module";


platformBrowserDynamic()
    .bootstrapModule(NgxMatTimepickerAppModule)
    .catch(err => console.error(err));
