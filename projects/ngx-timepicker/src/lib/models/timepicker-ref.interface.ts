import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

export interface NgxTimepickerRef {
    hourSelected: EventEmitter<number>;
    timeChanged: EventEmitter<string>;
    timeSet: EventEmitter<string>;
    timeUpdated: Observable<string>;

    close(): void;
}
