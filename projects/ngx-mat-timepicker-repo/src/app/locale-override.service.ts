import {Service} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";

@Service()
export class NgxMatTimepickerLocaleOverrideService extends NgxMatTimepickerLocaleService {

    constructor() {
        super();
        this._locale = "en-GB";
    }

}
