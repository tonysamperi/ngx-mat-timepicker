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
import { TimepickerConfig } from "../models/timepicker-config.interface";

@Injectable({
    providedIn: "root"
})
export class NgxTimepickerDomService {

    private componentRef: ComponentRef<NgxTimepickerContainerComponent>;

    constructor(private _cfr: ComponentFactoryResolver,
                private _appRef: ApplicationRef,
                private _injector: Injector,
                @Optional() @Inject(DOCUMENT) private _document: any) {
    }

    appendTimepickerToBody(timepicker: Type<NgxTimepickerContainerComponent>, config: TimepickerConfig): void {
        this.componentRef = this._cfr.resolveComponentFactory(timepicker).create(this._injector);

        Object.keys(config).forEach(key => this.componentRef.instance[key] = config[key]);

        this._appRef.attachView(this.componentRef.hostView);

        const domElement: HTMLElement = (this.componentRef.hostView as EmbeddedViewRef<NgxTimepickerContainerComponent>)
            .rootNodes[0];

        this._document.body.appendChild(domElement);
    }

    destroyTimepicker(): void {
        this.componentRef.destroy();
        this._appRef.detachView(this.componentRef.hostView);
    }
}
