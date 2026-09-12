import {DOCUMENT} from "@angular/common";
import {Directive, ElementRef, Input, OnChanges, OnDestroy, inject} from "@angular/core";

@Directive({
    selector: "[ngxMatTimepickerAutofocus]"
})
export class NgxMatTimepickerAutofocusDirective implements OnChanges, OnDestroy {

    @Input("ngxMatTimepickerAutofocus") isFocusActive: boolean;

    private _activeElement
    private _document = inject(DOCUMENT, {optional: !0});
    private _element = inject(ElementRef);

    constructor() {
        this._activeElement = this._document?.activeElement as HTMLElement;
    }

    ngOnChanges() {
        if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(() => this._element.nativeElement.focus({preventScroll: true}));
        }
    }

    ngOnDestroy() {
        // To avoid ExpressionChangedAfterItHasBeenCheckedError;
        setTimeout(() => this._activeElement.focus({preventScroll: true}));
    }
}
