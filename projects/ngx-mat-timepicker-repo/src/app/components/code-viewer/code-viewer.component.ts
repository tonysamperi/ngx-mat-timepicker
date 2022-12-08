import {Component, OnInit, ViewEncapsulation} from "@angular/core";
//
import * as Prism from "prismjs";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "code-viewer",
    templateUrl: "./code-viewer.component.html",
    styleUrls: ["./code-viewer.component.scss"],
    encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line:naming-convention
export class CodeViewerComponent implements OnInit {

    showCode: boolean = !1;

    constructor() {
    }

    ngOnInit(): void {
        const $code = document.querySelector(`code`);
        if (!$code) {
            return;
        }
        Prism.highlightElement($code);
    }

}
