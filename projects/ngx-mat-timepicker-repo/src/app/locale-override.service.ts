import {Injectable} from "@angular/core";
//
import {NgxMatTimepickerLocaleService} from "ngx-mat-timepicker";

@Injectable()
export class NgxMatTimepickerLocaleOverrideService extends NgxMatTimepickerLocaleService {

    constructor() {
        super("en-GB");
    }

}
