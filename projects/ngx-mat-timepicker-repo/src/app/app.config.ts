import {ApplicationConfig, importProvidersFrom} from "@angular/core";
import {MatNativeDateModule} from "@angular/material/core";
import {provideAnimations} from "@angular/platform-browser/animations";

export const ngxMatTimepickerAppConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        importProvidersFrom(MatNativeDateModule)
    ]
};
