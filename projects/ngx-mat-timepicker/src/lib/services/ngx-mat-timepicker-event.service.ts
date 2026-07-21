import {Service} from "@angular/core";
//
import {Observable, Subject} from "rxjs";
import {shareReplay} from "rxjs/operators";

@Service()
export class NgxMatTimepickerEventService {

    get backdropClick(): Observable<MouseEvent> {
        return this._backdropClick$.asObservable().pipe(shareReplay({bufferSize: 1, refCount: true}));
    }

    get keydownEvent(): Observable<KeyboardEvent> {
        return this._keydownEvent$.asObservable().pipe(shareReplay({bufferSize: 1, refCount: true}));
    }

    private _backdropClick$ = new Subject<MouseEvent>();
    private _keydownEvent$ = new Subject<KeyboardEvent>();

    constructor() {
    }

    dispatchEvent(event: KeyboardEvent | MouseEvent): void {
        switch (event.type) {
            case "click":
                this._backdropClick$.next(event as MouseEvent);
                break;
            case "keydown":
                this._keydownEvent$.next(event as KeyboardEvent);
                break;
            default:
                throw new Error("no such event type");
        }
    }

}
