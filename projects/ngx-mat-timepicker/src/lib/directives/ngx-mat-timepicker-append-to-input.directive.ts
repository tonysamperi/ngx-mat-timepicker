import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

type NgxMatTimepickerDirection = "top" | "center" | "bottom";

@Directive({
    selector: "[ngxMatTimepickerAppendToInput]"
})
export class NgxMatTimepickerAppendToInputDirective implements AfterViewInit {

    @Input() ngxMatTimepickerAppendToInput: any;

    private _direction: NgxMatTimepickerDirection;
    private readonly _element: HTMLElement;
    private _inputCords: ClientRect;

    constructor(elementRef: ElementRef<HTMLElement>,
                private _renderer: Renderer2) {
        this._element = elementRef.nativeElement;
    }

    @HostListener("window:scroll", ["$event"])
    changePosition(_event_: Event): void {
        const {bottom, top} = this._inputCords;
        const y = this._defineElementYByDirection(top, bottom);
        this._setStyle("top", `${y}px`);
    }

    ngAfterViewInit(): void {
        this._inputCords = this._getInputCords();
        this._direction = this._getDirection();

        this._append();
    }

    private _append(): void {
        const {left, bottom, top} = this._inputCords;
        const y = this._defineElementYByDirection(top, bottom);

        this._setStyle("position", "fixed");
        this._setStyle("left", `${left}px`);
        this._setStyle("top", `${y}px`);
    }

    private _defineElementYByDirection(inputTop: number, inputBottom: number): number {
        if (this._direction === "top") {
            return inputTop - this._element.offsetHeight;
        }
        else if (this._direction === "center") {
            return inputTop - (this._element.offsetHeight / 2);
        }

        return inputBottom;
    }

    private _getDirection(): NgxMatTimepickerDirection {
        const height = this._element.offsetHeight;
        const {bottom, top} = this._inputCords;
        const isElementFit = (window && window.innerHeight) - bottom < height;
        const isTop = isElementFit && top > height;
        const isCenter = isElementFit && top < height;

        return isTop ? "top" : isCenter ? "center" : "bottom";
    }


    private _getInputCords(): ClientRect {
        return this.ngxMatTimepickerAppendToInput.getBoundingClientRect();
    }

    private _setStyle(style: string, value: string): void {
        this._renderer.setStyle(this._element, style, value);
    }
}
