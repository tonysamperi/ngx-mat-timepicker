import {Component, OnInit, ViewEncapsulation} from "@angular/core";
//
import * as Prism from "prismjs";

@Component({
    selector: "code-viewer",
    templateUrl: "./code-viewer.component.html",
    styleUrls: ["./code-viewer.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class CodeViewerComponent implements OnInit {

    showCode = !1;

    ngOnInit(): void {
        const $code = document.querySelector(`code`);
        if (!$code) {
            return;
        }
        Prism.highlightElement($code);
    }

}
