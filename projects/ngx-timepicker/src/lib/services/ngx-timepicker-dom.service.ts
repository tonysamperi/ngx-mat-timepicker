import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Inject,
    Injectable,
    Injector,
    Optional,
    Type
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
//
import {
    NgxTimepickerContainerComponent
} from "../components/ngx-timepicker-container/ngx-timepicker-container.component";
import { NgxTimepickerConfig } from "../models/ngx-timepicker-config.interface";

@Injectable({
    providedIn: "root"
})
export class NgxTimepickerDomService {

    private _componentRef: ComponentRef<NgxTimepickerContainerComponent>;

    constructor(private _cfr: ComponentFactoryResolver,
                private _appRef: ApplicationRef,
                private _injector: Injector,
                @Optional() @Inject(DOCUMENT) private _document: any) {
    }

    appendTimepickerToBody(timepicker: Type<NgxTimepickerContainerComponent>, config: NgxTimepickerConfig): void {
        this._componentRef = this._cfr.resolveComponentFactory(timepicker).create(this._injector);
        Object.keys(config).forEach(key => this._componentRef.instance[key] = config[key]);
        this._appRef.attachView(this._componentRef.hostView);
        const domElement: HTMLElement = (this._componentRef.hostView as EmbeddedViewRef<NgxTimepickerContainerComponent>).rootNodes[0];
        this._document.body.appendChild(domElement);
    }

    destroyTimepicker(): void {
        this._componentRef.destroy();
        this._appRef.detachView(this._componentRef.hostView);
    }
}
