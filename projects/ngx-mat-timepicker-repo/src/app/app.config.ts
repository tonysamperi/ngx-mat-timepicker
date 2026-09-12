import {ApplicationConfig, importProvidersFrom} from "@angular/core";
import {MatNativeDateModule} from "@angular/material/core";

export const ngxMatTimepickerAppConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(MatNativeDateModule)
    ]
};
