import {Directive, ElementRef, Inject, Input, OnChanges, OnDestroy, Optional} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Directive({
    selector: "[ngxTimepickerAutofocus]"
})
export class NgxTimepickerAutofocusDirective implements OnChanges, OnDestroy {

    @Input("ngxTimepickerAutofocus") isFocusActive: boolean;

    private _activeElement: HTMLElement;

    constructor(private _element: ElementRef, @Optional() @Inject(DOCUMENT) private document: any) {
        this._activeElement = this.document.activeElement;
    }

    ngOnChanges() {
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(() => this._element.nativeElement.focus({ preventScroll: true }));
        }
    }

    ngOnDestroy() {
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(() => this._activeElement.focus({ preventScroll: true }));
    }
}
