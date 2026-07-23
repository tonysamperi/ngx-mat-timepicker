import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {highlightElement} from "prismjs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "code-viewer",
    templateUrl: "code-viewer.component.html",
    styleUrls: ["code-viewer.component.scss"],
    encapsulation: ViewEncapsulation.None,
    imports: [MatCardModule, MatButtonModule, MatTooltipModule, MatIconModule]
})
export class CodeViewerComponent implements OnInit {

    showCode: boolean = !1;

    ngOnInit(): void {
        const $code = document.querySelector(`code`);
        if (!$code) {
            return;
        }
        highlightElement($code);
    }

}
