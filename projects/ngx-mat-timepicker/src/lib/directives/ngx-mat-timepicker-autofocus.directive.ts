import {Directive, ElementRef, Inject, Input, OnChanges, OnDestroy, Optional} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Directive({
    selector: "[ngxMatTimepickerAutofocus]",
    standalone: true
})
export class NgxMatTimepickerAutofocusDirective implements OnChanges, OnDestroy {

    @Input("ngxMatTimepickerAutofocus") isFocusActive: boolean;

    private _activeElement: HTMLElement;

    constructor(private _element: ElementRef, @Optional() @Inject(DOCUMENT) private _document: any) {
        this._activeElement = this._document.activeElement;
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
