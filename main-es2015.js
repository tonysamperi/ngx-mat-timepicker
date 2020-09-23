(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: NgxMatTimepicker12HoursFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepicker12HoursFaceComponent", function() { return NgxMatTimepicker12HoursFaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var _ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts");

//




class NgxMatTimepicker12HoursFaceComponent extends _ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerHoursFace"] {
    constructor() {
        super(12);
    }
    ngOnChanges(changes) {
        if (changes.period && changes.period.currentValue) {
            this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].disableHours(this.hoursList, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}
NgxMatTimepicker12HoursFaceComponent.ɵfac = function NgxMatTimepicker12HoursFaceComponent_Factory(t) { return new (t || NgxMatTimepicker12HoursFaceComponent)(); };
NgxMatTimepicker12HoursFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepicker12HoursFaceComponent, selectors: [["ngx-mat-timepicker-12-hours-face"]], inputs: { period: "period" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 3, consts: [[3, "color", "selectedTime", "faceTime", "timeChange", "timeSelected"]], template: function NgxMatTimepicker12HoursFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-face", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChange", function NgxMatTimepicker12HoursFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) { return ctx.hourChange.next($event); })("timeSelected", function NgxMatTimepicker12HoursFaceComponent_Template_ngx_mat_timepicker_face_timeSelected_0_listener($event) { return ctx.onTimeSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList);
    } }, directives: [_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerFaceComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepicker12HoursFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-12-hours-face",
                templateUrl: "ngx-mat-timepicker-12-hours-face.component.html",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: NgxMatTimepicker24HoursFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepicker24HoursFaceComponent", function() { return NgxMatTimepicker24HoursFaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var _ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts");

//




class NgxMatTimepicker24HoursFaceComponent extends _ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerHoursFace"] {
    constructor() {
        super(24);
    }
    ngAfterContentInit() {
        this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
        });
    }
}
NgxMatTimepicker24HoursFaceComponent.ɵfac = function NgxMatTimepicker24HoursFaceComponent_Factory(t) { return new (t || NgxMatTimepicker24HoursFaceComponent)(); };
NgxMatTimepicker24HoursFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepicker24HoursFaceComponent, selectors: [["ngx-mat-timepicker-24-hours-face"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 4, consts: [[3, "color", "selectedTime", "faceTime", "format", "timeChange", "timeSelected"]], template: function NgxMatTimepicker24HoursFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-face", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChange", function NgxMatTimepicker24HoursFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) { return ctx.hourChange.next($event); })("timeSelected", function NgxMatTimepicker24HoursFaceComponent_Template_ngx_mat_timepicker_face_timeSelected_0_listener($event) { return ctx.onTimeSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList)("format", ctx.format);
    } }, directives: [_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerFaceComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepicker24HoursFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-24-hours-face",
                templateUrl: "ngx-mat-timepicker-24-hours-face.component.html",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: NgxMatTimepickerContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerContentComponent", function() { return NgxMatTimepickerContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/append-to-input.directive */ "../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts");




function NgxMatTimepickerContentComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NgxMatTimepickerContentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerContentComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxAppendToInput", ctx_r0.inputElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NgxMatTimepickerContentComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NgxMatTimepickerContentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerContentComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NgxMatTimepickerContentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class NgxMatTimepickerContentComponent {
}
NgxMatTimepickerContentComponent.ɵfac = function NgxMatTimepickerContentComponent_Factory(t) { return new (t || NgxMatTimepickerContentComponent)(); };
NgxMatTimepickerContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerContentComponent, selectors: [["ngx-mat-timepicker-content"]], inputs: { appendToInput: "appendToInput", inputElement: "inputElement" }, ngContentSelectors: _c0, decls: 5, vars: 2, consts: [[3, "ngxAppendToInput", 4, "ngIf", "ngIfElse"], ["timepickerModal", ""], ["timepickerOutlet", ""], [3, "ngxAppendToInput"], [4, "ngTemplateOutlet"]], template: function NgxMatTimepickerContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerContentComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerContentComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxMatTimepickerContentComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appendToInput)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_2__["AppendToInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-content",
                templateUrl: "./ngx-mat-timepicker-content.component.html",
            }]
    }], null, { appendToInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NgxMatTimepickerDialControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDialControlComponent", function() { return NgxMatTimepickerDialControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/ngx-mat-timepicker-parser.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/ngx-mat-timepicker-autofocus.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/ngx-mat-timepicker-time-localizer.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");









const _c0 = function (a0) { return { "active": a0 }; };
function NgxMatTimepickerDialControlComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerDialControlComponent_input_0_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.time = $event; })("input", function NgxMatTimepickerDialControlComponent_input_0_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.updateTime(); })("focus", function NgxMatTimepickerDialControlComponent_input_0_Template_input_focus_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.saveTimeAndChangeTimeUnit($event, ctx_r6.timeUnit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.isActive))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, ctx_r0.time, ctx_r0.timeUnit, true))("disabled", ctx_r0.disabled)("ngxMatTimepickerAutofocus", ctx_r0.isActive);
} }
function NgxMatTimepickerDialControlComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onModelChange($event); })("input", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.updateTime(); })("focus", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_focus_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.saveTimeAndChangeTimeUnit($event, ctx_r10.timeUnit); })("keydown", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onKeydown($event); })("keypress", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_keypress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeTimeByKeyboard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ngxMatTimepickerParser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r2.isActive))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 8, ctx_r2.time, ctx_r2.timeUnit), ctx_r2.timeUnit, true))("disabled", ctx_r2.disabled)("ngxMatTimepickerAutofocus", ctx_r2.isActive);
} }
class NgxMatTimepickerDialControlComponent {
    constructor(_timeParserPipe) {
        this._timeParserPipe = _timeParserPipe;
        this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unfocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get _selectedTime() {
        if (!!this.time) {
            return this.timeList.find(t => t.time === +this.time);
        }
    }
    changeTimeByKeyboard(e) {
        const char = String.fromCharCode(e.keyCode);
        if (isTimeDisabledToChange(this.time, char, this.timeList)) {
            e.preventDefault();
        }
    }
    onKeydown(e) {
        if (!_utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].isDigit(e)) {
            e.preventDefault();
        }
        else {
            this._changeTimeByArrow(e.keyCode);
        }
    }
    onModelChange(value) {
        this.time = this._timeParserPipe.transform(value, this.timeUnit);
    }
    saveTimeAndChangeTimeUnit(event, unit) {
        event.preventDefault();
        this.previousTime = this.time;
        this.timeUnitChanged.next(unit);
        this.focused.next();
    }
    updateTime() {
        if (this._selectedTime) {
            this.timeChanged.next(this._selectedTime);
            this.previousTime = this._selectedTime.time;
        }
    }
    _addTime(amount) {
        return `0${+this.time + amount}`.substr(-2);
    }
    _changeTimeByArrow(keyCode) {
        let time;
        // arrow up
        if (keyCode === 38) {
            time = this._addTime(this.minutesGap || 1);
        }
        // arrow down
        else if (keyCode === 40) {
            time = this._addTime(-1 * (this.minutesGap || 1));
        }
        if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
        }
    }
}
NgxMatTimepickerDialControlComponent.ɵfac = function NgxMatTimepickerDialControlComponent_Factory(t) { return new (t || NgxMatTimepickerDialControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"])); };
NgxMatTimepickerDialControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerDialControlComponent, selectors: [["ngx-mat-timepicker-dial-control"]], inputs: { disabled: "disabled", isActive: "isActive", isEditable: "isEditable", minutesGap: "minutesGap", time: "time", timeList: "timeList", timeUnit: "timeUnit" }, outputs: { focused: "focused", timeChanged: "timeChanged", timeUnitChanged: "timeUnitChanged", unfocused: "unfocused" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]])], decls: 3, vars: 2, consts: [["class", "timepicker-dial__control timepicker-dial__item", "readonly", "", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus", 4, "ngIf", "ngIfElse"], ["editableTemplate", ""], ["readonly", "", 1, "timepicker-dial__control", "timepicker-dial__item", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus"], [1, "timepicker-dial__control", "timepicker-dial__item", "timepicker-dial__control_editable", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus", "keydown", "keypress"]], template: function NgxMatTimepickerDialControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerDialControlComponent_input_0_Template, 2, 10, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerDialControlComponent_ng_template_1_Template, 3, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAutofocusDirective"]], pipes: [_pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__["NgxMatTimepickerTimeLocalizerPipe"], _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]], styles: [".timepicker-dial__control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  font-size: 50px;\n  width: 60px;\n  padding: 0;\n  border-radius: 3px;\n  text-align: center;\n  color: inherit;\n}\n.timepicker-dial__control[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.timepicker-dial__control[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWwtY29udHJvbC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsLWNvbnRyb2xcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wvbmd4LW1hdC10aW1lcGlja2VyLWRpYWwtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWwtY29udHJvbC9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbC1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aW1lcGlja2VyLWRpYWxfX2NvbnRyb2wge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBpbmhlcml0OyAvLyBGb3JjZXMgY29sb3IgaW5oZXJpdGFuY2UgYmVjYXVzZSBpbnB1dCBtYXkgaGF2ZSB1c2VyIGFnZW50IHN0eWxlXHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxufVxyXG4iLCIudGltZXBpY2tlci1kaWFsX19jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLnRpbWVwaWNrZXItZGlhbF9fY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udGltZXBpY2tlci1kaWFsX19jb250cm9sOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDialControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-dial-control",
                templateUrl: "ngx-mat-timepicker-dial-control.component.html",
                styleUrls: ["ngx-mat-timepicker-dial-control.component.scss"],
                providers: [_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]]
            }]
    }], function () { return [{ type: _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeUnitChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], unfocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
function isTimeDisabledToChange(currentTime, nextTime, timeList) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
    }
}
function isTimeUnavailable(time, timeList) {
    const selectedTime = timeList.find(value => value.time === +time);
    return !selectedTime || (selectedTime && selectedTime.disabled);
}


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts":
/*!*************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NgxMatTimepickerDialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDialComponent", function() { return NgxMatTimepickerDialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens/ngx-mat-timepicker-time-locale.token */ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "../../node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ngx-mat-timepicker-period/ngx-mat-timepicker-period.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts");




//





function NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-period", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("periodChanged", function NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template_ngx_mat_timepicker_period_periodChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changePeriod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedPeriod", ctx_r0.period)("activeTimeUnit", ctx_r0.activeTimeUnit)("maxTime", ctx_r0.maxTime)("minTime", ctx_r0.minTime)("format", ctx_r0.format)("hours", ctx_r0.hours)("minutes", ctx_r0.minutes)("selectedHour", ctx_r0.hour)("meridiems", ctx_r0.meridiems);
} }
function NgxMatTimepickerDialComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NgxMatTimepickerDialComponent_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " * use arrows (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u21C5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ") to change the time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "timepicker-dial__hint-container--hidden": a0 }; };
function NgxMatTimepickerDialComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerDialComponent_div_8_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerDialComponent_div_8_ng_template_2_Template, 5, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r1.isHintVisible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.editableHintTmpl ? ctx_r1.editableHintTmpl : _r5);
} }
class NgxMatTimepickerDialComponent {
    constructor(_locale) {
        this._locale = _locale;
        this.hourChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.meridiems = luxon__WEBPACK_IMPORTED_MODULE_4__["Info"].meridiems({ locale: this._locale });
        this.minuteChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"];
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._color = "primary";
    }
    set color(newValue) {
        this._color = newValue;
    }
    get color() {
        return this._color;
    }
    changeHour(hour) {
        this.hourChanged.next(hour);
    }
    changeMinute(minute) {
        this.minuteChanged.next(minute);
    }
    changePeriod(period) {
        this.periodChanged.next(period);
    }
    changeTimeUnit(unit) {
        this.timeUnitChanged.next(unit);
    }
    hideHint() {
        this.isHintVisible = false;
    }
    ngOnChanges(changes) {
        const periodChanged = changes.period && changes.period.currentValue;
        if (periodChanged || changes.format && changes.format.currentValue) {
            const hours = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].getHours(this.format);
            this.hours = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].disableHours(hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
        if (periodChanged || changes.hour && changes.hour.currentValue) {
            const minutes = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].getMinutes(this.minutesGap);
            this.minutes = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].disableMinutes(minutes, +this.hour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
    showHint() {
        this.isHintVisible = true;
    }
}
NgxMatTimepickerDialComponent.ɵfac = function NgxMatTimepickerDialComponent_Factory(t) { return new (t || NgxMatTimepickerDialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"])); };
NgxMatTimepickerDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerDialComponent, selectors: [["ngx-mat-timepicker-dial"]], inputs: { activeTimeUnit: "activeTimeUnit", color: "color", editableHintTmpl: "editableHintTmpl", format: "format", hour: "hour", hoursOnly: "hoursOnly", isEditable: "isEditable", maxTime: "maxTime", minTime: "minTime", minute: "minute", minutesGap: "minutesGap", period: "period" }, outputs: { hourChanged: "hourChanged", minuteChanged: "minuteChanged", periodChanged: "periodChanged", timeUnitChanged: "timeUnitChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 14, consts: [[1, "timepicker-dial"], [1, "timepicker-dial__container"], [1, "timepicker-dial__time"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "timeUnitChanged", "timeChanged", "focused", "unfocused"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "minutesGap", "disabled", "timeUnitChanged", "timeChanged", "focused", "unfocused"], ["class", "timepicker-dial__period", 3, "selectedPeriod", "activeTimeUnit", "maxTime", "minTime", "format", "hours", "minutes", "selectedHour", "meridiems", "periodChanged", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "timepicker-dial__period", 3, "selectedPeriod", "activeTimeUnit", "maxTime", "minTime", "format", "hours", "minutes", "selectedHour", "meridiems", "periodChanged"], [3, "ngClass"], [4, "ngTemplateOutlet"], ["editableHintDefault", ""], [1, "timepicker-dial__hint"]], template: function NgxMatTimepickerDialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-mat-timepicker-dial-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeUnitChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeUnitChanged_3_listener($event) { return ctx.changeTimeUnit($event); })("timeChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeChanged_3_listener($event) { return ctx.changeHour($event); })("focused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_focused_3_listener() { return ctx.showHint(); })("unfocused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_unfocused_3_listener() { return ctx.hideHint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-mat-timepicker-dial-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeUnitChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeUnitChanged_6_listener($event) { return ctx.changeTimeUnit($event); })("timeChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeChanged_6_listener($event) { return ctx.changeMinute($event); })("focused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_focused_6_listener() { return ctx.showHint(); })("unfocused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_unfocused_6_listener() { return ctx.hideHint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template, 1, 9, "ngx-mat-timepicker-period", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxMatTimepickerDialComponent_div_8_Template, 4, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeList", ctx.hours)("time", ctx.hour)("timeUnit", ctx.timeUnit.HOUR)("isActive", ctx.activeTimeUnit === ctx.timeUnit.HOUR)("isEditable", ctx.isEditable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeList", ctx.minutes)("time", ctx.minute)("timeUnit", ctx.timeUnit.MINUTE)("isActive", ctx.activeTimeUnit === ctx.timeUnit.MINUTE)("isEditable", ctx.isEditable)("minutesGap", ctx.minutesGap)("disabled", ctx.hoursOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.format !== 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable || ctx.editableHintTmpl);
    } }, directives: [_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerDialControlComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerPeriodComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]], styles: [".timepicker-dial[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.timepicker-dial__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.timepicker-dial__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  line-height: normal;\n  font-size: 50px;\n}\n.timepicker-dial__period[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 10px;\n}\n.timepicker-dial__hint-container--hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.timepicker-dial__hint[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n}\n.timepicker-dial__hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (max-device-width: 1023px) and (orientation: landscape) {\n  .timepicker-dial__container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .timepicker-dial__period[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWwvQzpcXGdpdFxcbmd4LW1hdC10aW1lcGlja2VyL3Byb2plY3RzXFxuZ3gtbWF0LXRpbWVwaWNrZXJcXHNyY1xcbGliXFxjb21wb25lbnRzXFxuZ3gtbWF0LXRpbWVwaWNrZXItZGlhbFxcbmd4LW1hdC10aW1lcGlja2VyLWRpYWwuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1kaWFsL25neC1tYXQtdGltZXBpY2tlci1kaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNEUjtBRElJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ05SO0FEUVE7RUFDSSxlQUFBO0FDTlo7QURZQTtFQUVRO0lBQ0ksc0JBQUE7RUNWVjtFRGFNO0lBQ0ksY0FBQTtFQ1hWO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbC9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGltZXBpY2tlci1kaWFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGltZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcGVyaW9kIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19oaW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgJi0taGlkZGVuIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19oaW50IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogMTAyM3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC50aW1lcGlja2VyLWRpYWwge1xyXG4gICAgICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19wZXJpb2Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnRpbWVwaWNrZXItZGlhbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aW1lcGlja2VyLWRpYWxfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4udGltZXBpY2tlci1kaWFsX190aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDUwcHg7XG59XG4udGltZXBpY2tlci1kaWFsX19wZXJpb2Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udGltZXBpY2tlci1kaWFsX19oaW50LWNvbnRhaW5lci0taGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRpbWVwaWNrZXItZGlhbF9faGludCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnRpbWVwaWNrZXItZGlhbF9faGludCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjNweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC50aW1lcGlja2VyLWRpYWxfX2NvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudGltZXBpY2tlci1kaWFsX19wZXJpb2Qge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-dial",
                templateUrl: "ngx-mat-timepicker-dial.component.html",
                styleUrls: ["ngx-mat-timepicker-dial.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"]]
            }] }]; }, { activeTimeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editableHintTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hourChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hoursOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minuteChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], periodChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timeUnitChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NgxMatTimepickerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDialogComponent", function() { return NgxMatTimepickerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens/ngx-mat-timepicker-time-locale.token */ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ngx-mat-timepicker-adapter */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ngx-mat-timepicker.service */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts");
/* harmony import */ var _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/ngx-mat-timepicker-event.service */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts");
/* harmony import */ var _ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ngx-mat-timepicker-content/ngx-mat-timepicker-content.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts");
/* harmony import */ var _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/ngx-mat-timepicker-theme.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts");
/* harmony import */ var _ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts");
/* harmony import */ var _ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts");





//















function NgxMatTimepickerDialogComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCEL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.color);
} }
function NgxMatTimepickerDialogComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r3.color);
} }
function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-24-hours-face", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hourChange", function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onHourChange($event); })("hourSelected", function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.onHourSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r8.color)("selectedHour", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r8.selectedHour))("minTime", ctx_r8.data.minTime)("maxTime", ctx_r8.data.maxTime)("format", ctx_r8.data.format);
} }
function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-12-hours-face", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hourChange", function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onHourChange($event); })("hourSelected", function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onHourSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r10.color)("selectedHour", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r10.selectedHour))("period", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx_r10.selectedPeriod))("minTime", ctx_r10.data.minTime)("maxTime", ctx_r10.data.maxTime);
} }
function NgxMatTimepickerDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template, 2, 7, "ngx-mat-timepicker-24-hours-face", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template, 3, 9, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.data.format === 24)("ngIfElse", _r9);
} }
function NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-minutes-face", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("minuteChange", function NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template_ngx_mat_timepicker_minutes_face_minuteChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onMinuteChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_2_0 = null;
    const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, ctx_r5.selectedHour)) == null ? null : tmp_2_0.time;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r5.color)("selectedMinute", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx_r5.selectedMinute))("selectedHour", currVal_2)("minTime", ctx_r5.data.minTime)("maxTime", ctx_r5.data.maxTime)("format", ctx_r5.data.format)("period", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx_r5.selectedPeriod))("minutesGap", ctx_r5.data.minutesGap);
} }
function NgxMatTimepickerDialogComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NgxMatTimepickerDialogComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
class NgxMatTimepickerDialogComponent {
    constructor(data, _dialogRef, _timepickerSrv, _eventSrv, _locale) {
        this.data = data;
        this._dialogRef = _dialogRef;
        this._timepickerSrv = _timepickerSrv;
        this._eventSrv = _eventSrv;
        this._locale = _locale;
        this.activeTimeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"].HOUR;
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"];
        this._color = "primary";
        this._subsCtrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.color = data.color;
        this.defaultTime = data.defaultTime;
    }
    set color(newValue) {
        this._color = newValue;
    }
    get color() {
        return this._color;
    }
    get defaultTime() {
        return this._defaultTime;
    }
    set defaultTime(time) {
        this._defaultTime = time;
        this._setDefaultTime(time);
    }
    changePeriod(period) {
        this._timepickerSrv.period = period;
        this._onTimeChange();
    }
    changeTimeUnit(unit) {
        this.activeTimeUnit = unit;
    }
    close() {
        // this.data.timepickerBaseRef.close();
        this._dialogRef.close();
    }
    ngOnDestroy() {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }
    ngOnInit() {
        this._defineTime();
        this.selectedHour = this._timepickerSrv.selectedHour
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.selectedMinute = this._timepickerSrv.selectedMinute
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.selectedPeriod = this._timepickerSrv.selectedPeriod
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])({ bufferSize: 1, refCount: true }));
        this.data.timepickerBaseRef.timeUpdated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._subsCtrl$))
            .subscribe(this._setDefaultTime.bind(this));
    }
    onHourChange(hour) {
        this._timepickerSrv.hour = hour;
        this._onTimeChange();
    }
    onHourSelected(hour) {
        if (!this.data.hoursOnly) {
            this.changeTimeUnit(_models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"].MINUTE);
        }
        this.data.timepickerBaseRef.hourSelected.next(hour);
    }
    onKeydown(e) {
        this._eventSrv.dispatchEvent(e);
        e.stopPropagation();
    }
    onMinuteChange(minute) {
        this._timepickerSrv.minute = minute;
        this._onTimeChange();
    }
    setTime() {
        this.data.timepickerBaseRef.timeSet.next(this._timepickerSrv.getFullTime(this.data.format));
        this.close();
    }
    _defineTime() {
        const minTime = this.data.minTime;
        if (minTime && (!this.data.time && !this.data.defaultTime)) {
            const time = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerAdapter"].fromDateTimeToString(minTime, this.data.format);
            this._setDefaultTime(time);
        }
    }
    _onTimeChange() {
        const time = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerAdapter"].toLocaleTimeString(this._timepickerSrv.getFullTime(this.data.format), {
            locale: this._locale,
            format: this.data.format
        });
        this.data.timepickerBaseRef.timeChanged.emit(time);
    }
    _setDefaultTime(time) {
        this._timepickerSrv.setDefaultTimeIfAvailable(time, this.data.minTime, this.data.maxTime, this.data.format, this.data.minutesGap);
    }
}
NgxMatTimepickerDialogComponent.ɵfac = function NgxMatTimepickerDialogComponent_Factory(t) { return new (t || NgxMatTimepickerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_8__["NgxMatTimepickerEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"])); };
NgxMatTimepickerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerDialogComponent, selectors: [["ngx-mat-timepicker-dialog"]], hostBindings: function NgxMatTimepickerDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgxMatTimepickerDialogComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { color: "color", defaultTime: "defaultTime" }, decls: 21, vars: 28, consts: [["cancelBtnDefault", ""], ["confirmBtnDefault", ""], ["mat-dialog-content", ""], [3, "appendToInput", "inputElement", "ngxMatTimepickerTheme"], [1, "timepicker", 3, "ngClass"], [1, "timepicker-header", 3, "color"], [3, "color", "format", "hour", "minute", "period", "activeTimeUnit", "minTime", "maxTime", "isEditable", "editableHintTmpl", "minutesGap", "hoursOnly", "periodChanged", "timeUnitChanged", "hourChanged", "minuteChanged"], [1, "timepicker__main-content"], [1, "timepicker__body", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange", 4, "ngSwitchCase"], ["mat-dialog-actions", ""], [3, "click"], [4, "ngTemplateOutlet"], ["mat-button", "", 3, "color"], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected", 4, "ngIf", "ngIfElse"], ["ampmHours", ""], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected"], [3, "color", "selectedHour", "period", "minTime", "maxTime", "hourChange", "hourSelected"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange"]], template: function NgxMatTimepickerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerDialogComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerDialogComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-mat-timepicker-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-mat-timepicker-dial", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("periodChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_periodChanged_8_listener($event) { return ctx.changePeriod($event); })("timeUnitChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_timeUnitChanged_8_listener($event) { return ctx.changeTimeUnit($event); })("hourChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_hourChanged_8_listener($event) { return ctx.onHourChange($event); })("minuteChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_minuteChanged_8_listener($event) { return ctx.onMinuteChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgxMatTimepickerDialogComponent_div_14_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template, 4, 14, "ngx-mat-timepicker-minutes-face", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerDialogComponent_Template_div_click_17_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NgxMatTimepickerDialogComponent_ng_container_18_Template, 1, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerDialogComponent_Template_div_click_19_listener() { return ctx.setTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NgxMatTimepickerDialogComponent_ng_container_20_Template, 1, 0, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        var tmp_7_0 = null;
        const currVal_7 = (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 22, ctx.selectedHour)) == null ? null : tmp_7_0.time;
        var tmp_8_0 = null;
        const currVal_8 = (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 24, ctx.selectedMinute)) == null ? null : tmp_8_0.time;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appendToInput", ctx.data.appendToInput)("inputElement", ctx.data.inputElement)("ngxMatTimepickerTheme", ctx.data.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.timepickerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("format", ctx.data.format)("hour", currVal_7)("minute", currVal_8)("period", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 26, ctx.selectedPeriod))("activeTimeUnit", ctx.activeTimeUnit)("minTime", ctx.data.minTime)("maxTime", ctx.data.maxTime)("isEditable", ctx.data.enableKeyboardInput)("editableHintTmpl", ctx.data.editableHintTmpl)("minutesGap", ctx.data.minutesGap)("hoursOnly", ctx.data.hoursOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.activeTimeUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.timeUnit.HOUR);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.timeUnit.MINUTE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.data.cancelBtnTmpl ? ctx.data.cancelBtnTmpl : _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.data.confirmBtnTmpl ? ctx.data.confirmBtnTmpl : _r2);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_9__["NgxMatTimepickerContentComponent"], _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerDialComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepicker24HoursFaceComponent"], _ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepicker12HoursFaceComponent"], _ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepickerMinutesFaceComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["div.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container {\n  padding-top: 0;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container .mat-dialog-content {\n  padding: 0;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container .mat-dialog-content mat-toolbar.timepicker-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container .mat-dialog-content .clock-face {\n  margin: 16px;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container div[mat-dialog-actions] {\n  justify-content: flex-end;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZy9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsb2dcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1kaWFsb2cvbmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FERU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER007RUFDRSxZQUFBO0FDRFI7QURLSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0hOIiwiZmlsZSI6InByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZy9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm5neC1tYXQtdGltZXBpY2tlci1kaWFsb2cge1xyXG4gID4gbWF0LWRpYWxvZy1jb250YWluZXIubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBtYXQtdG9vbGJhci50aW1lcGlja2VyLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvY2stZmFjZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2W21hdC1kaWFsb2ctYWN0aW9uc10ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJkaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5kaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuZGl2Lm5neC1tYXQtdGltZXBpY2tlci1kaWFsb2cgPiBtYXQtZGlhbG9nLWNvbnRhaW5lci5tYXQtZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250ZW50IG1hdC10b29sYmFyLnRpbWVwaWNrZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5kaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRlbnQgLmNsb2NrLWZhY2Uge1xuICBtYXJnaW46IDE2cHg7XG59XG5kaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIGRpdlttYXQtZGlhbG9nLWFjdGlvbnNdIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-dialog",
                styleUrls: ["./ngx-mat-timepicker-dialog.component.scss"],
                templateUrl: "./ngx-mat-timepicker-dialog.component.html",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerService"] }, { type: _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_8__["NgxMatTimepickerEventService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"]]
            }] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown", ["$event"]]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts":
/*!*************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NgxMatTimepickerFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFaceComponent", function() { return NgxMatTimepickerFaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/ngx-mat-timepicker-active-hour.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/ngx-mat-timepicker-time-localizer.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/ngx-mat-timepicker-active-minute.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/ngx-mat-timepicker-minutes-formatter.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts");










const _c0 = ["clockFace"];
const _c1 = ["clockHand"];
const _c2 = function (a0) { return { "transform": a0 }; };
function NgxMatTimepickerFaceComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "activeHour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, time_r8.time, ctx_r1.selectedTime == null ? null : ctx_r1.selectedTime.time, ctx_r1.isClockFaceDisabled) ? ctx_r1.color : undefined)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, "rotateZ(-" + time_r8.angle + "deg)"))("disabled", time_r8.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, time_r8.time, ctx_r1.timeUnit.HOUR), " ");
} }
function NgxMatTimepickerFaceComponent_div_4_div_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngTemplateOutlet", "hourButton; context: {$implicit: time}"]);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NgxMatTimepickerFaceComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_1_1_Template, 1, 0, undefined, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, "rotateZ(" + time_r11.angle + "deg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, time_r11));
} }
function NgxMatTimepickerFaceComponent_div_4_div_3_div_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngTemplateOutlet", "hourButton; context: {$implicit: time}"]);
} }
function NgxMatTimepickerFaceComponent_div_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_3_div_1_1_Template, 1, 0, undefined, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", "calc(50% - " + ctx_r13.innerClockFaceSize + "px)")("height", ctx_r13.innerClockFaceSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, "rotateZ(" + time_r14.angle + "deg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, time_r14));
} }
function NgxMatTimepickerFaceComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_3_div_1_Template, 2, 11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r10.faceTime, 12, 24))("ngForTrackBy", ctx_r10.trackByTime);
} }
function NgxMatTimepickerFaceComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_1_Template, 2, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxMatTimepickerFaceComponent_div_4_div_3_Template, 3, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 3, ctx_r3.faceTime, 0, 12))("ngForTrackBy", ctx_r3.trackByTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.faceTime.length > 12);
} }
function NgxMatTimepickerFaceComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r5.color);
} }
function NgxMatTimepickerFaceComponent_ng_template_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "activeMinute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "timeLocalizer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "minutesFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, "rotateZ(" + time_r17.angle + "deg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", time_r17.time % ctx_r16.minutesGap !== 0)("color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 5, time_r17.time, ctx_r16.selectedTime == null ? null : ctx_r16.selectedTime.time, ctx_r16.minutesGap, ctx_r16.isClockFaceDisabled) ? ctx_r16.color : undefined)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, "rotateZ(-" + time_r17.angle + "deg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 13, time_r17.time, ctx_r16.minutesGap), ctx_r16.timeUnit.MINUTE), " ");
} }
function NgxMatTimepickerFaceComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_ng_template_9_div_1_Template, 6, 20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.faceTime)("ngForTrackBy", ctx_r7.trackByTime);
} }
const _c4 = ["*", "*"];
const _c5 = function (a0) { return { "clock-face__clock-hand_minute": a0 }; };
function roundAngle(angle, step) {
    return Math.round(angle / step) * step;
}
function countAngleByCords(x0, y0, x, y, currentAngle) {
    if (y > y0 && x >= x0) { // II quarter
        return 180 - currentAngle;
    }
    else if (y > y0 && x < x0) { // III quarter
        return 180 + currentAngle;
    }
    else if (y < y0 && x < x0) { // IV quarter
        return 360 - currentAngle;
    }
    else { // I quarter
        return currentAngle;
    }
}
const CLOCK_HAND_STYLES = {
    small: {
        height: "75px",
        top: "calc(50% - 75px)"
    },
    large: {
        height: "103px",
        top: "calc(50% - 103px)"
    }
};
class NgxMatTimepickerFaceComponent {
    constructor() {
        this.color = "primary";
        this.innerClockFaceSize = 85;
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"];
    }
    ngAfterViewInit() {
        this._setClockHandPosition();
        this._addTouchEvents();
    }
    ngOnChanges(changes) {
        const faceTimeChanges = changes.faceTime;
        const selectedTimeChanges = changes.selectedTime;
        if ((faceTimeChanges && faceTimeChanges.currentValue)
            && (selectedTimeChanges && selectedTimeChanges.currentValue)) {
            /* Set time according to passed an input value */
            this.selectedTime = this.faceTime.find(time => time.time === this.selectedTime.time);
        }
        if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this._setClockHandPosition();
        }
        if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(() => this._selectAvailableTime());
        }
    }
    ngOnDestroy() {
        this._removeTouchEvents();
    }
    onMousedown(e) {
        e.preventDefault();
        this._isStarted = true;
    }
    onMouseup(e) {
        e.preventDefault();
        this._isStarted = false;
    }
    selectTime(e) {
        if (!this._isStarted && (e instanceof MouseEvent && e.type !== "click")) {
            return;
        }
        const clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
        /* Get x0 and y0 of the circle */
        const centerX = clockFaceCords.left + clockFaceCords.width / 2;
        const centerY = clockFaceCords.top + clockFaceCords.height / 2;
        /* Counting the arctangent and convert it to from radian to deg */
        const arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        /* Get angle according to quadrant */
        const circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
        /* Check if selected time from the inner clock face (24 hours format only) */
        const isInnerClockChosen = this.format && this._isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
        /* Round angle according to angle step */
        const angleStep = this.unit === _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"].MINUTE ? (6 * (this.minutesGap || 1)) : 30;
        const roundedAngle = roundAngle(circleAngle, angleStep);
        const angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);
        const selectedTime = this.faceTime.find(val => val.angle === angle);
        if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);
            /* To let know whether user ended interaction with clock face */
            if (!this._isStarted) {
                this.timeSelected.next(selectedTime.time);
            }
        }
    }
    trackByTime(_item_, time) {
        return time.time;
    }
    _addTouchEvents() {
        this._touchStartHandler = this.onMousedown.bind(this);
        this._touchEndHandler = this.onMouseup.bind(this);
        this.clockFace.nativeElement.addEventListener("touchstart", this._touchStartHandler);
        this.clockFace.nativeElement.addEventListener("touchend", this._touchEndHandler);
    }
    _decreaseClockHand() {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
    }
    _increaseClockHand() {
        this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
        this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
    }
    _isInnerClockFace(x0, y0, x, y) {
        /* Detect whether time from the inner clock face or not (24 format only) */
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
    }
    _removeTouchEvents() {
        this.clockFace.nativeElement.removeEventListener("touchstart", this._touchStartHandler);
        this.clockFace.nativeElement.removeEventListener("touchend", this._touchEndHandler);
    }
    _selectAvailableTime() {
        const currentTime = this.faceTime.find(time => this.selectedTime.time === time.time);
        this.isClockFaceDisabled = this.faceTime.every(time => time.disabled);
        if ((currentTime && currentTime.disabled) && !this.isClockFaceDisabled) {
            const availableTime = this.faceTime.find(time => !time.disabled);
            this.timeChange.next(availableTime);
        }
    }
    _setClockHandPosition() {
        if (this.format === 24) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
                this._decreaseClockHand();
            }
            else {
                this._increaseClockHand();
            }
        }
        this.clockHand.nativeElement.style.transform = `rotate(${this.selectedTime.angle}deg)`;
    }
}
NgxMatTimepickerFaceComponent.ɵfac = function NgxMatTimepickerFaceComponent_Factory(t) { return new (t || NgxMatTimepickerFaceComponent)(); };
NgxMatTimepickerFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerFaceComponent, selectors: [["ngx-mat-timepicker-face"]], viewQuery: function NgxMatTimepickerFaceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clockFace = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clockHand = _t.first);
    } }, hostBindings: function NgxMatTimepickerFaceComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgxMatTimepickerFaceComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("mouseup", function NgxMatTimepickerFaceComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); })("click", function NgxMatTimepickerFaceComponent_click_HostBindingHandler($event) { return ctx.selectTime($event); })("touchmove", function NgxMatTimepickerFaceComponent_touchmove_HostBindingHandler($event) { return ctx.selectTime($event.changedTouches[0]); })("touchend", function NgxMatTimepickerFaceComponent_touchend_HostBindingHandler($event) { return ctx.selectTime($event.changedTouches[0]); })("mousemove", function NgxMatTimepickerFaceComponent_mousemove_HostBindingHandler($event) { return ctx.selectTime($event); });
    } }, inputs: { color: "color", faceTime: "faceTime", format: "format", minutesGap: "minutesGap", selectedTime: "selectedTime", unit: "unit" }, outputs: { timeChange: "timeChange", timeSelected: "timeSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 11, vars: 9, consts: [["hourButton", ""], [1, "clock-face"], ["clockFace", ""], ["class", "clock-face__container", 4, "ngIf", "ngIfElse"], [1, "clock-face__clock-hand", 3, "color", "ngClass", "hidden"], ["clockHand", ""], ["mat-mini-fab", "", 3, "color", 4, "ngIf"], [1, "clock-face__center", 3, "color"], ["minutesFace", ""], ["mat-mini-fab", "", 1, "mat-elevation-z0", 3, "color", "ngStyle", "disabled"], [1, "clock-face__container"], ["class", "clock-face__number clock-face__number--outer", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "clock-face__inner", 4, "ngIf"], [1, "clock-face__number", "clock-face__number--outer", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "clock-face__inner"], ["class", "clock-face__number clock-face__number--inner", 3, "top", "ngStyle", "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "clock-face__number", "clock-face__number--inner", 3, "ngStyle"], ["mat-mini-fab", "", 3, "color"], [1, "clock-face__clock-hand_minute_dot"], ["mat-mini-fab", "", 1, "mat-elevation-z0", 3, "disableRipple", "color", "ngStyle"]], template: function NgxMatTimepickerFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerFaceComponent_ng_template_0_Template, 4, 13, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxMatTimepickerFaceComponent_div_4_Template, 4, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxMatTimepickerFaceComponent_button_7_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxMatTimepickerFaceComponent_ng_template_9_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit !== ctx.timeUnit.MINUTE)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c5, ctx.unit === ctx.timeUnit.MINUTE))("hidden", ctx.isClockFaceDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit === ctx.timeUnit.MINUTE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], pipes: [_pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerActiveHourPipe"], _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__["NgxMatTimepickerTimeLocalizerPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerActiveMinutePipe"], _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__["NgxMatTimepickerMinutesFormatterPipe"]], styles: [".clock-face[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 290px;\n  border-radius: 50%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: rgba(200, 200, 200, 0.5) !important;\n}\n.clock-face__inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.clock-face[_ngcontent-%COMP%]   [mat-mini-fab][_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.clock-face[_ngcontent-%COMP%]   [mat-mini-fab][_ngcontent-%COMP%]:not(.mat-primary):not(.mat-accent):not(.mat-warn) {\n  background: transparent;\n}\n.clock-face__container[_ngcontent-%COMP%] {\n  margin-left: -2px;\n}\n.clock-face__number[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: 25px 100%;\n  width: 50px;\n  text-align: center;\n  z-index: 2;\n  top: calc(50% - 125px);\n  left: calc(50% - 25px);\n}\n.clock-face__number--outer[_ngcontent-%COMP%] {\n  height: calc(290px / 2 - 20px);\n}\n.clock-face__number--outer[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.clock-face__number--inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.clock-face__clock-hand[_ngcontent-%COMP%] {\n  height: 103px;\n  width: 2px;\n  padding: 0;\n  transform-origin: 1px 100%;\n  position: absolute;\n  top: calc(50% - 103px);\n  z-index: 1;\n}\n.clock-face__center[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  position: absolute;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  margin: -4px;\n}\n.clock-face__clock-hand_minute[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -22px;\n  left: calc(50% - 20px);\n  box-sizing: content-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.clock-face__clock-hand_minute[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   .clock-face__clock-hand_minute_dot[_ngcontent-%COMP%] {\n  display: block;\n  width: 4px;\n  height: 4px;\n  background: #FFF;\n  border-radius: 50%;\n}\n@media (max-device-width: 1023px) and (orientation: landscape) {\n  .clock-face[_ngcontent-%COMP%] {\n    width: 225px;\n    height: 225px;\n    padding: 5px;\n  }\n\n  .clock-face__number--outer[_ngcontent-%COMP%] {\n    height: calc(225px / 2 - 5px);\n  }\n\n  .clock-face__clock-hand_minute[_ngcontent-%COMP%]:before {\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWZhY2UvQzpcXGdpdFxcbmd4LW1hdC10aW1lcGlja2VyL3Byb2plY3RzXFxuZ3gtbWF0LXRpbWVwaWNrZXJcXHNyY1xcbGliXFxjb21wb25lbnRzXFxuZ3gtbWF0LXRpbWVwaWNrZXItZmFjZVxcbmd4LW1hdC10aW1lcGlja2VyLWZhY2UuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1mYWNlL25neC1tYXQtdGltZXBpY2tlci1mYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURHRTtFQUNFLHVCQUFBO0FDREo7QURLQTtFQUNFLGlCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0ZGO0FESUU7RUFDRSw4QkFBQTtBQ0ZKO0FESUk7RUFDRSxlQUFBO0FDRk47QURRSTtFQUNFLGVBQUE7QUNOTjtBRFlBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ1RGO0FEWUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDVEY7QURZQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1RGO0FEV0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVEo7QURhQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDVkY7O0VEYUU7SUFDRSw2QkFBQTtFQ1ZKOztFRGNBO0lBQ0UsTUFBQTtFQ1hGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtbWF0LXRpbWVwaWNrZXItZmFjZS9uZ3gtbWF0LXRpbWVwaWNrZXItZmFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9jay1mYWNlIHtcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KSAhaW1wb3J0YW50O1xyXG5cclxuICAmX19pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBbbWF0LW1pbmktZmFiXSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgW21hdC1taW5pLWZhYl06bm90KC5tYXQtcHJpbWFyeSk6bm90KC5tYXQtYWNjZW50KTpub3QoLm1hdC13YXJuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbi5jbG9jay1mYWNlX19jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG59XHJcblxyXG4uY2xvY2stZmFjZV9fbnVtYmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjVweCAxMDAlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcclxuXHJcbiAgJi0tb3V0ZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDI5MHB4IC8gMiAtIDIwcHgpO1xyXG5cclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgLy9jb2xvcjogJGNsb2NrLWZhY2UtdGltZS1pbmFjdGl2ZS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLWlubmVyIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLy9jb2xvcjogJGNsb2NrLWZhY2UtaW5uZXItdGltZS1pbmFjdGl2ZS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jbG9jay1mYWNlX19jbG9jay1oYW5kIHtcclxuICBoZWlnaHQ6IDEwM3B4O1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHggMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwM3B4KTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2xvY2stZmFjZV9fY2VudGVyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luOiAtNHB4O1xyXG59XHJcblxyXG4uY2xvY2stZmFjZV9fY2xvY2staGFuZF9taW51dGUgPiBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuY2xvY2stZmFjZV9fY2xvY2staGFuZF9taW51dGVfZG90IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogMTAyM3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuY2xvY2stZmFjZSB7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAuY2xvY2stZmFjZV9fbnVtYmVyIHtcclxuICAgICYtLW91dGVyIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDIyNXB4IC8gMiAtIDVweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xvY2stZmFjZV9fY2xvY2staGFuZF9taW51dGU6YmVmb3JlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuIiwiLmNsb2NrLWZhY2Uge1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogMjkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG4uY2xvY2stZmFjZV9faW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jbG9jay1mYWNlIFttYXQtbWluaS1mYWJdIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jbG9jay1mYWNlIFttYXQtbWluaS1mYWJdOm5vdCgubWF0LXByaW1hcnkpOm5vdCgubWF0LWFjY2VudCk6bm90KC5tYXQtd2Fybikge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNsb2NrLWZhY2VfX2NvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuXG4uY2xvY2stZmFjZV9fbnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAyNXB4IDEwMCU7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG59XG4uY2xvY2stZmFjZV9fbnVtYmVyLS1vdXRlciB7XG4gIGhlaWdodDogY2FsYygyOTBweCAvIDIgLSAyMHB4KTtcbn1cbi5jbG9jay1mYWNlX19udW1iZXItLW91dGVyID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jbG9jay1mYWNlX19udW1iZXItLWlubmVyID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsb2NrLWZhY2VfX2Nsb2NrLWhhbmQge1xuICBoZWlnaHQ6IDEwM3B4O1xuICB3aWR0aDogMnB4O1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHggMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTAzcHgpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2xvY2stZmFjZV9fY2VudGVyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC00cHg7XG59XG5cbi5jbG9jay1mYWNlX19jbG9jay1oYW5kX21pbnV0ZSA+IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjJweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNsb2NrLWZhY2VfX2Nsb2NrLWhhbmRfbWludXRlID4gYnV0dG9uIC5jbG9jay1mYWNlX19jbG9jay1oYW5kX21pbnV0ZV9kb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiAxMDIzcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuY2xvY2stZmFjZSB7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmNsb2NrLWZhY2VfX251bWJlci0tb3V0ZXIge1xuICAgIGhlaWdodDogY2FsYygyMjVweCAvIDIgLSA1cHgpO1xuICB9XG5cbiAgLmNsb2NrLWZhY2VfX2Nsb2NrLWhhbmRfbWludXRlOmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICB9XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-face",
                templateUrl: "./ngx-mat-timepicker-face.component.html",
                styleUrls: ["./ngx-mat-timepicker-face.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { clockFace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["clockFace", { static: true }]
        }], clockHand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["clockHand", { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], faceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timeSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mousedown", ["$event"]]
        }], onMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseup", ["$event"]]
        }], selectTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["touchmove", ["$event.changedTouches[0]"]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["touchend", ["$event.changedTouches[0]"]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mousemove", ["$event"]]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: NgxMatTimepickerControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerControlComponent", function() { return NgxMatTimepickerControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/ngx-mat-timepicker-parser.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/ngx-mat-timepicker-time-localizer.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");










const _c0 = function (a0) { return { "active": a0 }; };
function concatTime(currentTime, nextTime) {
    const isNumber = /\d/.test(nextTime);
    if (isNumber) {
        const time = currentTime + nextTime;
        return +time;
    }
}
class NgxMatTimepickerControlComponent {
    constructor(_timeParser) {
        this._timeParser = _timeParser;
        this.id = NgxMatTimepickerControlComponent.nextId++;
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._color = "primary";
        this._floatLabel = "never";
    }
    set color(newValue) {
        this._color = newValue;
    }
    get color() {
        return this._color;
    }
    set floatLabel(newValue) {
        this._floatLabel = newValue;
    }
    get floatLabel() {
        return this._floatLabel;
    }
    changeTime(event) {
        event.stopPropagation();
        const char = String.fromCharCode(event.keyCode);
        const time = concatTime(String(this.time), char);
        this._changeTimeIfValid(time);
    }
    decrease() {
        if (!this.disabled) {
            let previousTime = +this.time - 1;
            if (previousTime < this.min) {
                previousTime = this.max;
            }
            if (this._isSelectedTimeDisabled(previousTime)) {
                previousTime = this._getAvailableTime(previousTime, this._getPrevAvailableTime.bind(this));
            }
            if (previousTime !== this.time) {
                this.timeChanged.emit(previousTime);
            }
        }
    }
    increase() {
        if (!this.disabled) {
            let nextTime = +this.time + 1;
            if (nextTime > this.max) {
                nextTime = this.min;
            }
            if (this._isSelectedTimeDisabled(nextTime)) {
                nextTime = this._getAvailableTime(nextTime, this._getNextAvailableTime.bind(this));
            }
            if (nextTime !== this.time) {
                this.timeChanged.emit(nextTime);
            }
        }
    }
    ngOnChanges(changes) {
        if (changes.timeList && this.time != null) {
            if (this._isSelectedTimeDisabled(this.time)) {
                this._setAvailableTime();
            }
        }
    }
    onBlur() {
        this.isFocused = false;
        if (this._previousTime !== this.time) {
            this._changeTimeIfValid(+this.time);
        }
    }
    onFocus() {
        this.isFocused = true;
        this._previousTime = this.time;
    }
    onKeydown(event) {
        event.stopPropagation();
        if (!_utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].isDigit(event)) {
            event.preventDefault();
        }
        switch (event.key) {
            case "ArrowUp":
                this.increase();
                break;
            case "ArrowDown":
                this.decrease();
                break;
        }
        if (this.preventTyping && event.key !== "Tab") {
            event.preventDefault();
        }
    }
    onModelChange(value) {
        this.time = +this._timeParser.transform(value, this.timeUnit);
    }
    _changeTimeIfValid(value) {
        if (!isNaN(value)) {
            this.time = value;
            if (this.time > this.max) {
                const timeString = String(value);
                this.time = +timeString[timeString.length - 1];
            }
            if (this.time < this.min) {
                this.time = this.min;
            }
            this.timeChanged.emit(this.time);
        }
    }
    _getAvailableTime(currentTime, fn) {
        const currentTimeIndex = this.timeList.findIndex(time => time.time === currentTime);
        const availableTime = fn(currentTimeIndex);
        return availableTime != null ? availableTime : this.time;
    }
    _getNextAvailableTime(index) {
        const timeCollection = this.timeList;
        const maxValue = timeCollection.length;
        for (let i = index + 1; i < maxValue; i++) {
            const time = timeCollection[i];
            if (!time.disabled) {
                return time.time;
            }
        }
    }
    _getPrevAvailableTime(index) {
        for (let i = index; i >= 0; i--) {
            const time = this.timeList[i];
            if (!time.disabled) {
                return time.time;
            }
        }
    }
    _isSelectedTimeDisabled(time) {
        return this.timeList.find((faceTime) => faceTime.time === time).disabled;
    }
    _setAvailableTime() {
        this.time = this.timeList.find(t => !t.disabled).time;
        this.timeChanged.emit(this.time);
    }
}
NgxMatTimepickerControlComponent.nextId = 0;
NgxMatTimepickerControlComponent.ɵfac = function NgxMatTimepickerControlComponent_Factory(t) { return new (t || NgxMatTimepickerControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"])); };
NgxMatTimepickerControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerControlComponent, selectors: [["ngx-mat-timepicker-time-control"]], inputs: { color: "color", disabled: "disabled", floatLabel: "floatLabel", max: "max", min: "min", placeholder: "placeholder", preventTyping: "preventTyping", time: "time", timeList: "timeList", timeUnit: "timeUnit" }, outputs: { timeChanged: "timeChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 17, consts: [[1, "ngx-mat-timepicker-control", 3, "color", "floatLabel", "ngClass"], ["matInput", "", "maxlength", "2", 3, "id", "name", "ngModel", "placeholder", "disabled", "ngModelChange", "keydown", "keypress", "focus", "blur"], ["matSuffix", "", 1, "arrows-wrap"], ["role", "button", 1, "arrow", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"], ["role", "button", 1, "ngx-mat-timepicker-control__arrow", 3, "click"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"]], template: function NgxMatTimepickerControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerControlComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onModelChange($event); })("keydown", function NgxMatTimepickerControlComponent_Template_input_keydown_1_listener($event) { return ctx.onKeydown($event); })("keypress", function NgxMatTimepickerControlComponent_Template_input_keypress_1_listener($event) { return ctx.changeTime($event); })("focus", function NgxMatTimepickerControlComponent_Template_input_focus_1_listener() { return ctx.onFocus(); })("blur", function NgxMatTimepickerControlComponent_Template_input_blur_1_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "timeLocalizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "ngxMatTimepickerParser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerControlComponent_Template_span_click_5_listener() { return ctx.increase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerControlComponent_Template_span_click_9_listener() { return ctx.decrease(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("floatLabel", ctx.floatLabel)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isFocused));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "ngx_mat_timepicker_field_", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "ngx_mat_timepicker_field_", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 12, ctx.time, ctx.timeUnit), ctx.timeUnit, true))("placeholder", ctx.placeholder)("disabled", ctx.disabled);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"]], pipes: [_pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerTimeLocalizerPipe"], _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]], styles: [".ngx-mat-timepicker-control[_ngcontent-%COMP%] {\n  width: 60px;\n  min-width: 60px;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: -12px;\n  display: flex;\n  flex-direction: column;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  opacity: 0.5;\n  height: 15px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkL25neC1tYXQtdGltZXBpY2tlci1jb250cm9sL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkXFxuZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbFxcbmd4LW1hdC10aW1lcGlja2VyLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1maWVsZC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQU47QURFTTtFQUNFLFVBQUE7QUNBUiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1maWVsZC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYXJyb3dzLXdyYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC0xMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgPiAuYXJyb3cge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbCB7XG4gIHdpZHRoOiA2MHB4O1xuICBtaW4td2lkdGg6IDYwcHg7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyLWNvbnRyb2wgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyLWNvbnRyb2wgLmFycm93cy13cmFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbCAuYXJyb3dzLXdyYXAgPiAuYXJyb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyLWNvbnRyb2wgLmFycm93cy13cmFwID4gLmFycm93OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-time-control",
                templateUrl: "./ngx-mat-timepicker-control.component.html",
                styleUrls: ["./ngx-mat-timepicker-control.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]]
            }]
    }], function () { return [{ type: _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], preventTyping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timeList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts":
/*!***************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NgxMatTimepickerFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFieldComponent", function() { return NgxMatTimepickerFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ngx-mat-timepicker.service */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts");
/* harmony import */ var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-periods.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ngx-mat-timepicker-adapter */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
/* harmony import */ var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tokens/ngx-mat-timepicker-time-locale.token */ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ngx-mat-timepicker-control/ngx-mat-timepicker-control.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ngx-mat-timepicker/ngx-mat-timepicker.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts");
/* harmony import */ var _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../directives/ngx-mat-timepicker-toggle-icon.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");


//




















function NgxMatTimepickerFieldComponent_mat_select_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6);
} }
function NgxMatTimepickerFieldComponent_mat_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NgxMatTimepickerFieldComponent_mat_select_8_Template_mat_select_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changePeriod($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFieldComponent_mat_select_8_mat_option_1_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled || ctx_r0.isChangePeriodDisabled)("ngModel", ctx_r0.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.periods);
} }
function NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_ng_container_2_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.toggleIcon || _r3);
} }
function NgxMatTimepickerFieldComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "watch_later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "ngx-mat-timepicker--disabled": a0 }; };
class NgxMatTimepickerFieldComponent {
    constructor(_timepickerService, _locale) {
        this._timepickerService = _timepickerService;
        this._locale = _locale;
        this.maxHour = 12;
        this.minHour = 1;
        this.period = _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM;
        this.periods = [
            _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM,
            _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].PM
        ];
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerUnits"];
        this._color = "primary";
        this._floatLabel = "never";
        this._format = 12;
        this._isFirstTimeChange = true;
        this._subsCtrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._onChange = () => {
        };
    }
    get color() {
        return this._color;
    }
    set color(newValue) {
        this._color = newValue;
    }
    get defaultTime() {
        return this._defaultTime;
    }
    set defaultTime(val) {
        this._defaultTime = val;
        this._isDefaultTime = !!val;
    }
    get floatLabel() {
        return this._floatLabel;
    }
    set floatLabel(newValue) {
        this._floatLabel = newValue;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        this.minHour = this._format === 12 ? 1 : 0;
        this.maxHour = this._format === 12 ? 12 : 23;
        this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getHours(this._format);
        const isDynamicallyChanged = value && (this._previousFormat && this._previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this._updateTime(this.timepickerTime);
        }
        this._previousFormat = this._format;
    }
    get max() {
        return this._max;
    }
    set max(value) {
        if (typeof value === "string") {
            this._max = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].parseTime(value, { locale: this._locale, format: this.format });
            return;
        }
        this._max = value;
    }
    get min() {
        return this._min;
    }
    set min(value) {
        if (typeof value === "string") {
            this._min = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].parseTime(value, { locale: this._locale, format: this.format });
            return;
        }
        this._min = value;
    }
    changeHour(hour) {
        this._timepickerService.hour = this.hoursList.find(h => h.time === hour);
        this._changeTime();
    }
    changeMinute(minute) {
        this._timepickerService.minute = this.minutesList.find(m => m.time === minute);
        this._changeTime();
    }
    changePeriod(event) {
        this._timepickerService.period = event.value;
        this._changeTime();
    }
    ngOnDestroy() {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }
    ngOnInit() {
        this._initTime(this.defaultTime);
        this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getHours(this._format);
        this.minutesList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getMinutes();
        this.isTimeRangeSet = !!(this.min || this.max);
        this.hour$ = this._timepickerService.selectedHour.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((clockTime) => this._selectedHour = clockTime.time), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(this._changeDefaultTimeValue.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.isTimeRangeSet && this._updateAvailableMinutes()));
        this.minute$ = this._timepickerService.selectedMinute.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(this._changeDefaultTimeValue.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this._isFirstTimeChange = false));
        if (this.format === 12) {
            this._timepickerService.selectedPeriod.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((period) => this.period = period), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(period => this.isChangePeriodDisabled = this._isPeriodDisabled(period)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._subsCtrl$)).subscribe(() => this.isTimeRangeSet && this._updateAvailableTime());
        }
    }
    onTimeSet(time) {
        this._updateTime(time);
        this._emitLocalTimeChange(time);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(_fn_) {
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    writeValue(val) {
        if (val) {
            this._initTime(val);
        }
        else {
            this._resetTime();
        }
    }
    _changeDefaultTimeValue(clockFaceTime) {
        if (!this._isDefaultTime && this._isFirstTimeChange) {
            return Object.assign(Object.assign({}, clockFaceTime), { time: null });
        }
        return clockFaceTime;
    }
    _changeTime() {
        const time = this._timepickerService.getFullTime(this.format);
        this.timepickerTime = time;
        this._emitLocalTimeChange(time);
    }
    _emitLocalTimeChange(time) {
        const localTime = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].toLocaleTimeString(time, { format: this.format, locale: this._locale });
        this._onChange(localTime);
        this.timeChanged.emit(localTime);
    }
    _initTime(time) {
        const isDefaultTimeAvailable = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"]
            .isTimeAvailable(time, this.min, this.max, "minutes", null, this.format);
        if (!isDefaultTimeAvailable) {
            if (this.min) {
                this._updateTime(_services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].fromDateTimeToString(this.min, this.format));
                return;
            }
            if (this.max) {
                this._updateTime(_services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].fromDateTimeToString(this.max, this.format));
                return;
            }
        }
        this._updateTime(time);
    }
    _isPeriodDisabled(period) {
        return _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].disableHours(_utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getHours(12), {
            min: this.min,
            max: this.max,
            format: 12,
            period: period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM ? _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].PM : _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM
        }).every(time => time.disabled);
    }
    _resetTime() {
        this._timepickerService.hour = { angle: 0, time: null };
        this._timepickerService.minute = { angle: 0, time: null };
    }
    _updateAvailableHours() {
        this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].disableHours(this.hoursList, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
        });
    }
    _updateAvailableMinutes() {
        this.minutesList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].disableMinutes(this.minutesList, this._selectedHour, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
        });
    }
    _updateAvailableTime() {
        this._updateAvailableHours();
        if (this._selectedHour) {
            this._updateAvailableMinutes();
        }
    }
    _updateTime(time) {
        if (time) {
            const formattedTime = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].formatTime(time, { locale: this._locale, format: this.format });
            this._timepickerService.setDefaultTimeIfAvailable(formattedTime, this.min, this.max, this.format);
            this.timepickerTime = formattedTime;
        }
    }
}
NgxMatTimepickerFieldComponent.ɵfac = function NgxMatTimepickerFieldComponent_Factory(t) { return new (t || NgxMatTimepickerFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_6__["NGX_MAT_TIMEPICKER_LOCALE"])); };
NgxMatTimepickerFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerFieldComponent, selectors: [["ngx-mat-timepicker-field"]], inputs: { color: "color", defaultTime: "defaultTime", floatLabel: "floatLabel", format: "format", max: "max", min: "min", cancelBtnTmpl: "cancelBtnTmpl", clockTheme: "clockTheme", confirmBtnTmpl: "confirmBtnTmpl", controlOnly: "controlOnly", disabled: "disabled", toggleIcon: "toggleIcon" }, outputs: { timeChanged: "timeChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"],
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: NgxMatTimepickerFieldComponent,
                multi: true
            }
        ])], decls: 14, vars: 38, consts: [[1, "ngx-mat-timepicker", 3, "ngClass"], [1, "ngx-mat-timepicker__control--first", 3, "color", "floatLabel", "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], [1, "separator-colon", "ngx-mat-timepicker__control--second"], [1, "ngx-mat-timepicker__control--third", 3, "color", "floatLabel", "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], [1, "period-select", "ngx-mat-timepicker__control--forth", 3, "color"], [3, "disabled", "ngModel", "selectionChange", 4, "ngIf"], ["class", "ngx-mat-timepicker__toggle", 3, "for", "disabled", 4, "ngIf"], [3, "color", "min", "max", "theme", "defaultTime", "format", "cancelBtnTmpl", "confirmBtnTmpl", "timeSet"], ["timepicker", ""], ["defaultIcon", ""], [3, "disabled", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "ngx-mat-timepicker__toggle", 3, "for", "disabled"], ["ngxMatTimepickerToggleIcon", ""], [4, "ngTemplateOutlet"]], template: function NgxMatTimepickerFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-mat-timepicker-time-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChanged", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_time_control_timeChanged_1_listener($event) { return ctx.changeHour($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-mat-timepicker-time-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChanged", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_time_control_timeChanged_5_listener($event) { return ctx.changeMinute($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxMatTimepickerFieldComponent_mat_select_8_Template, 2, 3, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_Template, 3, 3, "ngx-mat-timepicker-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-mat-timepicker", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeSet", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_timeSet_10_listener($event) { return ctx.onTimeSet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgxMatTimepickerFieldComponent_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        var tmp_4_0 = null;
        const currVal_4 = (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 32, ctx.hour$)) == null ? null : tmp_4_0.time;
        var tmp_14_0 = null;
        const currVal_14 = (tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 34, ctx.minute$)) == null ? null : tmp_14_0.time;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("floatLabel", ctx.floatLabel)("placeholder", "HH")("time", currVal_4)("min", ctx.minHour)("max", ctx.maxHour)("timeUnit", ctx.timeUnit.HOUR)("disabled", ctx.disabled)("timeList", ctx.hoursList)("preventTyping", ctx.isTimeRangeSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("floatLabel", ctx.floatLabel)("placeholder", "MM")("time", currVal_14)("min", 0)("max", 59)("timeUnit", ctx.timeUnit.MINUTE)("disabled", ctx.disabled)("timeList", ctx.minutesList)("preventTyping", ctx.isTimeRangeSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.format !== 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.controlOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("min", ctx.min)("max", ctx.max)("theme", ctx.clockTheme)("defaultTime", ctx.timepickerTime)("format", ctx.format)("cancelBtnTmpl", ctx.cancelBtnTmpl)("confirmBtnTmpl", ctx.confirmBtnTmpl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerControlComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepickerToggleComponent"], _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepickerToggleIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".ngx-mat-timepicker {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.ngx-mat-timepicker--disabled {\n  background: rgba(0, 0, 0, 0.07);\n  pointer-events: none;\n}\n.ngx-mat-timepicker .separator-colon {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.ngx-mat-timepicker .period-select {\n  width: 50px;\n  min-width: 50px;\n  margin-left: 8px;\n}\n.ngx-mat-timepicker__control--first {\n  order: 1;\n}\n.ngx-mat-timepicker__control--second {\n  order: 2;\n}\n.ngx-mat-timepicker__control--third {\n  order: 3;\n}\n.ngx-mat-timepicker__control--forth {\n  order: 4;\n}\n.ngx-mat-timepicker__toggle {\n  order: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkXFxuZ3gtbWF0LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1maWVsZC9uZ3gtbWF0LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLCtCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDREo7QURNSTtFQUNFLFFBQUE7QUNKTjtBRE9JO0VBQ0UsUUFBQTtBQ0xOO0FEUUk7RUFDRSxRQUFBO0FDTk47QURTSTtFQUNFLFFBQUE7QUNQTjtBRFdFO0VBQ0UsUUFBQTtBQ1RKIiwiZmlsZSI6InByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkL25neC1tYXQtdGltZXBpY2tlci1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtbWF0LXRpbWVwaWNrZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICYtLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZXBhcmF0b3ItY29sb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBlcmlvZC1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29udHJvbCB7XHJcblxyXG4gICAgJi0tZmlyc3Qge1xyXG4gICAgICBvcmRlcjogMTtcclxuICAgIH1cclxuXHJcbiAgICAmLS1zZWNvbmQge1xyXG4gICAgICBvcmRlcjogMjtcclxuICAgIH1cclxuXHJcbiAgICAmLS10aGlyZCB7XHJcbiAgICAgIG9yZGVyOiAzO1xyXG4gICAgfVxyXG5cclxuICAgICYtLWZvcnRoIHtcclxuICAgICAgb3JkZXI6IDQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190b2dnbGUge1xyXG4gICAgb3JkZXI6IDQ7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIubmd4LW1hdC10aW1lcGlja2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm5neC1tYXQtdGltZXBpY2tlci0tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5uZ3gtbWF0LXRpbWVwaWNrZXIgLnNlcGFyYXRvci1jb2xvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLm5neC1tYXQtdGltZXBpY2tlciAucGVyaW9kLXNlbGVjdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyX19jb250cm9sLS1maXJzdCB7XG4gIG9yZGVyOiAxO1xufVxuLm5neC1tYXQtdGltZXBpY2tlcl9fY29udHJvbC0tc2Vjb25kIHtcbiAgb3JkZXI6IDI7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyX19jb250cm9sLS10aGlyZCB7XG4gIG9yZGVyOiAzO1xufVxuLm5neC1tYXQtdGltZXBpY2tlcl9fY29udHJvbC0tZm9ydGgge1xuICBvcmRlcjogNDtcbn1cbi5uZ3gtbWF0LXRpbWVwaWNrZXJfX3RvZ2dsZSB7XG4gIG9yZGVyOiA0O1xufSJdfQ== */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-field",
                templateUrl: "./ngx-mat-timepicker-field.component.html",
                styleUrls: ["./ngx-mat-timepicker-field.component.scss"],
                providers: [
                    _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"],
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: NgxMatTimepickerFieldComponent,
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_6__["NGX_MAT_TIMEPICKER_LOCALE"]]
            }] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cancelBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clockTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], confirmBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controlOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], toggleIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts":
/*!***************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NgxMatTimepickerHoursFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerHoursFace", function() { return NgxMatTimepickerHoursFace; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");



class NgxMatTimepickerHoursFace {
    constructor(format) {
        this.hourChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoursList = [];
        this._color = "primary";
        this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUtils"].getHours(format);
    }
    set color(newValue) {
        this._color = newValue;
    }
    get color() {
        return this._color;
    }
    onTimeSelected(time) {
        this.hourSelected.next(time);
    }
}
NgxMatTimepickerHoursFace.ɵfac = function NgxMatTimepickerHoursFace_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
NgxMatTimepickerHoursFace.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxMatTimepickerHoursFace, inputs: { color: "color", format: "format", maxTime: "maxTime", minTime: "minTime", selectedHour: "selectedHour" }, outputs: { hourChange: "hourChange", hourSelected: "hourSelected" } });


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NgxMatTimepickerMinutesFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerMinutesFaceComponent", function() { return NgxMatTimepickerMinutesFaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var _ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts");





class NgxMatTimepickerMinutesFaceComponent {
    constructor() {
        this.minuteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.minutesList = [];
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"];
        this._color = "primary";
    }
    set color(newValue) {
        this._color = newValue;
    }
    get color() {
        return this._color;
    }
    ngOnChanges(changes) {
        if (changes.period && changes.period.currentValue) {
            const minutes = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].getMinutes(this.minutesGap);
            this.minutesList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].disableMinutes(minutes, this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: this.period
            });
        }
    }
}
NgxMatTimepickerMinutesFaceComponent.ɵfac = function NgxMatTimepickerMinutesFaceComponent_Factory(t) { return new (t || NgxMatTimepickerMinutesFaceComponent)(); };
NgxMatTimepickerMinutesFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerMinutesFaceComponent, selectors: [["ngx-mat-timepicker-minutes-face"]], inputs: { color: "color", format: "format", maxTime: "maxTime", minTime: "minTime", minutesGap: "minutesGap", period: "period", selectedHour: "selectedHour", selectedMinute: "selectedMinute" }, outputs: { minuteChange: "minuteChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 5, consts: [[3, "color", "faceTime", "selectedTime", "minutesGap", "unit", "timeChange"]], template: function NgxMatTimepickerMinutesFaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-face", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChange", function NgxMatTimepickerMinutesFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) { return ctx.minuteChange.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("faceTime", ctx.minutesList)("selectedTime", ctx.selectedMinute)("minutesGap", ctx.minutesGap)("unit", ctx.timeUnit.MINUTE);
    } }, directives: [_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerFaceComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerMinutesFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-minutes-face",
                templateUrl: "./ngx-mat-timepicker-minutes-face.component.html"
            }]
    }], function () { return []; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minuteChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedMinute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NgxMatTimepickerPeriodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerPeriodComponent", function() { return NgxMatTimepickerPeriodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-periods.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ngx-mat-timepicker.utils */ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


//





function NgxMatTimepickerPeriodComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@scaleInOut.done", function NgxMatTimepickerPeriodComponent_div_5_Template_div_animation_scaleInOut_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.animationDone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Current time would be invalid in this period.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleInOut", undefined);
} }
const _c0 = function (a0) { return { "active": a0 }; };
class NgxMatTimepickerPeriodComponent {
    constructor() {
        this.timePeriod = _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"];
        this.isPeriodAvailable = true;
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    changePeriod(period) {
        this.isPeriodAvailable = this._isSwitchPeriodAvailable(period);
        if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
        }
    }
    animationDone() {
        this.isPeriodAvailable = true;
    }
    _isSwitchPeriodAvailable(period) {
        const time = this._getDisabledTimeByPeriod(period);
        return !time.every(t => t.disabled);
    }
    _getDisabledTimeByPeriod(period) {
        switch (this.activeTimeUnit) {
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"].HOUR:
                return _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerUtils"].disableHours(this.hours, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"].MINUTE:
                return _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerUtils"].disableMinutes(this.minutes, +this.selectedHour, {
                    min: this.minTime,
                    max: this.maxTime,
                    format: this.format,
                    period
                });
            default:
                throw new Error('no such NgxMatTimepickerUnits');
        }
    }
}
NgxMatTimepickerPeriodComponent.ɵfac = function NgxMatTimepickerPeriodComponent_Factory(t) { return new (t || NgxMatTimepickerPeriodComponent)(); };
NgxMatTimepickerPeriodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerPeriodComponent, selectors: [["ngx-mat-timepicker-period"]], inputs: { selectedPeriod: "selectedPeriod", format: "format", activeTimeUnit: "activeTimeUnit", hours: "hours", minutes: "minutes", minTime: "minTime", maxTime: "maxTime", selectedHour: "selectedHour", meridiems: "meridiems" }, outputs: { periodChanged: "periodChanged" }, decls: 6, vars: 9, consts: [[1, "timepicker-period"], ["type", "button", 1, "timepicker-dial__item", "timepicker-period__btn", 3, "ngClass", "click"], ["class", "timepicker-period__warning", 4, "ngIf"], [1, "timepicker-period__warning"]], template: function NgxMatTimepickerPeriodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerPeriodComponent_Template_button_click_1_listener() { return ctx.changePeriod(ctx.timePeriod.AM); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerPeriodComponent_Template_button_click_3_listener() { return ctx.changePeriod(ctx.timePeriod.PM); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxMatTimepickerPeriodComponent_div_5_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.selectedPeriod === ctx.timePeriod.AM));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meridiems[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.selectedPeriod === ctx.timePeriod.PM));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meridiems[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPeriodAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".timepicker-period[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.timepicker-period__btn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  padding: 1px 3px;\n  border: 0;\n  background-color: transparent;\n  font-size: 18px;\n  font-weight: 500;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n  border-radius: 3px;\n  transition: background-color 0.5s;\n  color: inherit;\n}\n.timepicker-period__btn.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.timepicker-period__btn[_ngcontent-%COMP%]:focus {\n  background-color: rgba(0, 0, 0, 0.07);\n}\n.timepicker-period__warning[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.55);\n  position: absolute;\n  width: 200px;\n  left: -20px;\n  top: 40px;\n}\n.timepicker-period__warning[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLXBlcmlvZC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci1wZXJpb2RcXG5neC1tYXQtdGltZXBpY2tlci1wZXJpb2QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1wZXJpb2Qvbmd4LW1hdC10aW1lcGlja2VyLXBlcmlvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLFVBQUE7QUNBTjtBREdJO0VBQ0UscUNBQUE7QUNETjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNISjtBREtJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNITiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1wZXJpb2Qvbmd4LW1hdC10aW1lcGlja2VyLXBlcmlvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGltZXBpY2tlci1wZXJpb2Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX2J0biB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwYWRkaW5nOiAxcHggM3B4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7IC8vIGZvcmNlIGNvbG9yIGluaGVyaXRhbmNlIHRvIGJ5cGFzcyB1c2VyIGFnZW50IHN0eWxlXHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fd2FybmluZyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU1KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi50aW1lcGlja2VyLXBlcmlvZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1lcGlja2VyLXBlcmlvZF9fYnRuIHtcbiAgb3BhY2l0eTogMC41O1xuICBwYWRkaW5nOiAxcHggM3B4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4udGltZXBpY2tlci1wZXJpb2RfX2J0bi5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuLnRpbWVwaWNrZXItcGVyaW9kX19idG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xufVxuLnRpbWVwaWNrZXItcGVyaW9kX193YXJuaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICB0b3A6IDQwcHg7XG59XG4udGltZXBpY2tlci1wZXJpb2RfX3dhcm5pbmcgPiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["sequence"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                    ])
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerPeriodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-mat-timepicker-period',
                templateUrl: 'ngx-mat-timepicker-period.component.html',
                styleUrls: ['ngx-mat-timepicker-period.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["sequence"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                            ])
                        ])
                    ])
                ]
            }]
    }], null, { selectedPeriod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeTimeUnit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], meridiems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], periodChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NgxMatTimepickerToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleComponent", function() { return NgxMatTimepickerToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/ngx-mat-timepicker-toggle-icon.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NgxMatTimepickerToggleComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", "ngxMatTimepickerToggleIcon", ""]]];
const _c1 = ["[ngxMatTimepickerToggleIcon]"];
class NgxMatTimepickerToggleComponent {
    get disabled() {
        return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    open(event) {
        if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }
}
NgxMatTimepickerToggleComponent.ɵfac = function NgxMatTimepickerToggleComponent_Factory(t) { return new (t || NgxMatTimepickerToggleComponent)(); };
NgxMatTimepickerToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerToggleComponent, selectors: [["ngx-mat-timepicker-toggle"]], contentQueries: function NgxMatTimepickerToggleComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerToggleIconDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customIcon = _t.first);
    } }, inputs: { disabled: "disabled", timepicker: ["for", "timepicker"] }, ngContentSelectors: _c1, decls: 3, vars: 2, consts: [["color", "", "mat-mini-fab", "", "type", "button", 1, "ngx-mat-timepicker-toggle", "mat-elevation-z0", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24px", "height", "24px"], ["d", "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"]], template: function NgxMatTimepickerToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerToggleComponent_Template_button_click_0_listener($event) { return ctx.open($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerToggleComponent__svg_svg_1_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customIcon);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["button.ngx-mat-timepicker-toggle[_ngcontent-%COMP%] {\n  background-color: transparent;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLXRvZ2dsZS9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci10b2dnbGVcXG5neC1tYXQtdGltZXBpY2tlci10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci10b2dnbGUvbmd4LW1hdC10aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLXRvZ2dsZS9uZ3gtbWF0LXRpbWVwaWNrZXItdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLm5neC1tYXQtdGltZXBpY2tlci10b2dnbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIiwiYnV0dG9uLm5neC1tYXQtdGltZXBpY2tlci10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker-toggle",
                templateUrl: "ngx-mat-timepicker-toggle.component.html",
                styleUrls: ["ngx-mat-timepicker-toggle.component.scss"]
            }]
    }], null, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerToggleIconDirective"], { static: true }]
        }], timepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["for"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts":
/*!***************************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NgxMatTimepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerComponent", function() { return NgxMatTimepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ngx-mat-timepicker-event.service */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts");






class NgxMatTimepickerComponent {
    constructor(_dialog, _eventService) {
        this._dialog = _dialog;
        this._eventService = _eventService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoursOnly = false;
        this.isEsc = true;
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeSet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // used in the dialog, check if a better approach can be used
        this._color = "primary";
    }
    set color(newValue) {
        this._color = newValue;
    }
    get color() {
        return this._color;
    }
    get disabled() {
        return this._timepickerInput && this._timepickerInput.disabled;
    }
    get format() {
        return this._timepickerInput ? this._timepickerInput.format : this._format;
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
    }
    get inputElement() {
        return this._timepickerInput && this._timepickerInput.element;
    }
    get maxTime() {
        return this._timepickerInput ? this._timepickerInput.max : this.max;
    }
    get minTime() {
        return this._timepickerInput ? this._timepickerInput.min : this.min;
    }
    get minutesGap() {
        return this._minutesGap;
    }
    set minutesGap(gap) {
        if (gap == null) {
            return;
        }
        gap = Math.floor(gap);
        this._minutesGap = gap <= 59 ? gap : 1;
    }
    get time() {
        return this._timepickerInput && this._timepickerInput.value;
    }
    set ngxMatTimepickerTheme(newValue) {
        this._ngxMatTimepickerTheme = newValue;
    }
    open() {
        this._dialog.open(_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerDialogComponent"], {
            panelClass: "ngx-mat-timepicker-dialog",
            data: {
                timepickerBaseRef: this,
                time: this.time,
                defaultTime: this.defaultTime,
                maxTime: this.maxTime,
                minTime: this.minTime,
                format: this.format,
                minutesGap: this.minutesGap,
                disableAnimation: this.disableAnimation,
                cancelBtnTmpl: this.cancelBtnTmpl,
                confirmBtnTmpl: this.confirmBtnTmpl,
                editableHintTmpl: this.editableHintTmpl,
                disabled: this.disabled,
                enableKeyboardInput: this.enableKeyboardInput,
                preventOverlayClick: this.preventOverlayClick,
                appendToInput: this.appendToInput,
                hoursOnly: this.hoursOnly,
                theme: this.theme || this._ngxMatTimepickerTheme,
                timepickerClass: this.timepickerClass,
                inputElement: this.inputElement,
                color: this.color
            }
        })
            .afterClosed()
            .subscribe(() => {
            this.closed.emit();
        });
        this.opened.emit();
    }
    /***
     * Register an input with this timepicker.
     * input - The timepicker input to register with this timepicker
     */
    registerInput(input) {
        if (this._timepickerInput) {
            throw Error("A Timepicker can only be associated with a single input.");
        }
        this._timepickerInput = input;
    }
    updateTime(time) {
        this.timeUpdated.next(time);
    }
}
NgxMatTimepickerComponent.ɵfac = function NgxMatTimepickerComponent_Factory(t) { return new (t || NgxMatTimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerEventService"])); };
NgxMatTimepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerComponent, selectors: [["ngx-mat-timepicker"]], inputs: { color: "color", format: "format", minutesGap: "minutesGap", appendToInput: "appendToInput", cancelBtnTmpl: "cancelBtnTmpl", confirmBtnTmpl: "confirmBtnTmpl", defaultTime: "defaultTime", disableAnimation: "disableAnimation", editableHintTmpl: "editableHintTmpl", enableKeyboardInput: "enableKeyboardInput", hoursOnly: "hoursOnly", isEsc: "isEsc", max: "max", min: "min", preventOverlayClick: "preventOverlayClick", theme: "theme", timepickerClass: "timepickerClass" }, outputs: { closed: "closed", hourSelected: "hourSelected", opened: "opened", timeChanged: "timeChanged", timeSet: "timeSet" }, decls: 0, vars: 0, template: function NgxMatTimepickerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-mat-timepicker",
                template: "",
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerEventService"] }]; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minutesGap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendToInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cancelBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], confirmBtnTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editableHintTmpl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enableKeyboardInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hourSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hoursOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], preventOverlayClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], timepickerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timeSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts":
/*!*****************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: AppendToInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppendToInputDirective", function() { return AppendToInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppendToInputDirective {
    constructor(elementRef, renderer) {
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
    }
    get inputCords() {
        return this.inputElement.getBoundingClientRect();
    }
    get direction() {
        const height = this.element.offsetHeight;
        const { bottom, top } = this._inputCords;
        const isElementFit = (window && window.innerHeight) - bottom < height;
        const isTop = isElementFit && top > height;
        const isCenter = isElementFit && top < height;
        if (isTop) {
            return 'top';
        }
        else if (isCenter) {
            return 'center';
        }
        return 'bottom';
    }
    ngAfterViewInit() {
        this._inputCords = this.inputCords;
        this._direction = this.direction;
        this.append();
    }
    changePosition() {
        const { bottom, top } = this.inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('top', `${y}px`);
    }
    append() {
        const { left, bottom, top } = this._inputCords;
        const y = this.defineElementYByDirection(top, bottom);
        this.setStyle('position', 'fixed');
        this.setStyle('left', `${left}px`);
        this.setStyle('top', `${y}px`);
    }
    setStyle(style, value) {
        this.renderer.setStyle(this.element, style, value);
    }
    defineElementYByDirection(inputTop, inputBottom) {
        if (this._direction === 'top') {
            return inputTop - this.element.offsetHeight;
        }
        else if (this._direction === 'center') {
            return inputTop - (this.element.offsetHeight / 2);
        }
        return inputBottom;
    }
}
AppendToInputDirective.ɵfac = function AppendToInputDirective_Factory(t) { return new (t || AppendToInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppendToInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppendToInputDirective, selectors: [["", "ngxAppendToInput", ""]], hostBindings: function AppendToInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppendToInputDirective_scroll_HostBindingHandler() { return ctx.changePosition(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { inputElement: ["ngxAppendToInput", "inputElement"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppendToInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngxAppendToInput]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngxAppendToInput']
        }], changePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts":
/*!******************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: NgxMatTimepickerAutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAutofocusDirective", function() { return NgxMatTimepickerAutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class NgxMatTimepickerAutofocusDirective {
    constructor(_element, document) {
        this._element = _element;
        this.document = document;
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
NgxMatTimepickerAutofocusDirective.ɵfac = function NgxMatTimepickerAutofocusDirective_Factory(t) { return new (t || NgxMatTimepickerAutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8)); };
NgxMatTimepickerAutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxMatTimepickerAutofocusDirective, selectors: [["", "ngxMatTimepickerAutofocus", ""]], inputs: { isFocusActive: ["ngxMatTimepickerAutofocus", "isFocusActive"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerAutofocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[ngxMatTimepickerAutofocus]"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { isFocusActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["ngxMatTimepickerAutofocus"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts":
/*!**************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: NgxMatTimepickerThemeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerThemeDirective", function() { return NgxMatTimepickerThemeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NgxMatTimepickerThemeDirective {
    constructor(elementRef) {
        this._element = elementRef.nativeElement;
    }
    ngAfterViewInit() {
        if (this.theme) {
            this.setTheme(this.theme);
        }
    }
    setTheme(theme) {
        for (const val in theme) {
            if (theme.hasOwnProperty(val)) {
                if (typeof theme[val] === "string") {
                    for (const prop in theme) {
                        if (theme.hasOwnProperty(prop)) {
                            this._element.style.setProperty(`--${camelCaseToDash(prop)}`, theme[prop]);
                        }
                    }
                    return;
                }
                this.setTheme(theme[val]);
            }
        }
    }
}
NgxMatTimepickerThemeDirective.ɵfac = function NgxMatTimepickerThemeDirective_Factory(t) { return new (t || NgxMatTimepickerThemeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgxMatTimepickerThemeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxMatTimepickerThemeDirective, selectors: [["", "ngxMatTimepickerTheme", ""]], inputs: { theme: ["ngxMatTimepickerTheme", "theme"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerThemeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: "[ngxMatTimepickerTheme]" }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["ngxMatTimepickerTheme"]
        }] }); })();
function camelCaseToDash(myStr) {
    return myStr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts":
/*!********************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts ***!
  \********************************************************************************************/
/*! exports provided: NgxMatTimepickerToggleIconDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleIconDirective", function() { return NgxMatTimepickerToggleIconDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/* To override a default toggle icon */
class NgxMatTimepickerToggleIconDirective {
}
NgxMatTimepickerToggleIconDirective.ɵfac = function NgxMatTimepickerToggleIconDirective_Factory(t) { return new (t || NgxMatTimepickerToggleIconDirective)(); };
NgxMatTimepickerToggleIconDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxMatTimepickerToggleIconDirective, selectors: [["", "ngxMatTimepickerToggleIcon", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerToggleIconDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: "[ngxMatTimepickerToggleIcon]" }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts":
/*!********************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts ***!
  \********************************************************************************/
/*! exports provided: NgxMatTimepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDirective", function() { return NgxMatTimepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ngx-mat-timepicker-adapter */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
/* harmony import */ var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tokens/ngx-mat-timepicker-time-locale.token */ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







class NgxMatTimepickerDirective {
    constructor(_elementRef, _locale) {
        this._elementRef = _elementRef;
        this._locale = _locale;
        this._format = 12;
        this._subsCtrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._value = "";
        this.onTouched = () => {
        };
        this._onChange = () => {
        };
    }
    get element() {
        return this._elementRef && this._elementRef.nativeElement;
    }
    get format() {
        return this._format;
    }
    set format(value) {
        this._format = value === 24 ? 24 : 12;
        const isDynamicallyChanged = value && (this._previousFormat && this._previousFormat !== this._format);
        if (isDynamicallyChanged) {
            this.value = this._value;
            this._timepicker.updateTime(this._value);
        }
        this._previousFormat = this._format;
    }
    get max() {
        return this._max;
    }
    set max(value) {
        if (typeof value === "string") {
            this._max = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].parseTime(value, { locale: this._locale, format: this.format });
            return;
        }
        this._max = value;
    }
    get min() {
        return this._min;
    }
    set min(value) {
        if (typeof value === "string") {
            this._min = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].parseTime(value, { locale: this._locale, format: this.format });
            return;
        }
        this._min = value;
    }
    set timepicker(picker) {
        this._registerTimepicker(picker);
    }
    get value() {
        if (!this._value) {
            return "";
        }
        return _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].toLocaleTimeString(this._value, { format: this.format, locale: this._locale });
    }
    set value(value) {
        if (!value) {
            this._value = "";
            this._updateInputValue();
            return;
        }
        const time = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].formatTime(value, { locale: this._locale, format: this.format });
        const isAvailable = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].isTimeAvailable(time, this._min, this._max, "minutes", this._timepicker.minutesGap, this._format);
        if (isAvailable) {
            this._value = time;
            this._updateInputValue();
            return;
        }
        console.warn("Selected time doesn't match min or max value");
    }
    set _defaultTime(time) {
        this._timepicker.defaultTime = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].formatTime(time, {
            locale: this._locale,
            format: this.format
        });
    }
    ngOnChanges(changes) {
        if (changes.value && changes.value.currentValue) {
            this._defaultTime = changes.value.currentValue;
        }
    }
    ngOnDestroy() {
        this._subsCtrl$.next();
        this._subsCtrl$.complete();
    }
    onClick(event) {
        if (!this.disableClick) {
            this._timepicker.open();
            event.stopPropagation();
        }
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateValue(value) {
        this.value = value;
        this._onChange(value);
    }
    writeValue(value) {
        this.value = value;
        if (value) {
            this._defaultTime = value;
        }
    }
    _registerTimepicker(picker) {
        if (picker) {
            this._timepicker = picker;
            this._timepicker.registerInput(this);
            this._timepicker.timeSet
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._subsCtrl$))
                .subscribe((time) => {
                this.value = time;
                this._onChange(this.value);
                this.onTouched();
                this._defaultTime = this._value;
            });
        }
        else {
            throw new Error("NgxMatTimepickerComponent is not defined." +
                " Please make sure you passed the timepicker to ngxMatTimepicker directive");
        }
    }
    _updateInputValue() {
        this._elementRef.nativeElement.value = this.value;
    }
}
NgxMatTimepickerDirective.ɵfac = function NgxMatTimepickerDirective_Factory(t) { return new (t || NgxMatTimepickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_3__["NGX_MAT_TIMEPICKER_LOCALE"])); };
NgxMatTimepickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgxMatTimepickerDirective, selectors: [["", "ngxMatTimepicker", ""]], hostVars: 1, hostBindings: function NgxMatTimepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgxMatTimepickerDirective_blur_HostBindingHandler() { return ctx.onTouched(); })("click", function NgxMatTimepickerDirective_click_HostBindingHandler($event) { return ctx.onClick($event); })("change", function NgxMatTimepickerDirective_change_HostBindingHandler() { return ctx.updateValue(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
    } }, inputs: { format: "format", max: "max", min: "min", timepicker: ["ngxMatTimepicker", "timepicker"], value: "value", disableClick: "disableClick", disabled: "disabled" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: NgxMatTimepickerDirective,
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[ngxMatTimepicker]",
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: NgxMatTimepickerDirective,
                        multi: true
                    }
                ],
                // tslint:disable-next-line:no-host-metadata-property
                host: {
                    "[disabled]": "disabled",
                    // "(change)": "updateValue($event.target.value)",
                    "(blur)": "onTouched()",
                },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_3__["NGX_MAT_TIMEPICKER_LOCALE"]]
            }] }]; }, { format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], timepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["ngxMatTimepicker"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
        }], updateValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["change"]
        }] }); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts":
/*!******************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts ***!
  \******************************************************************************/
/*! exports provided: NgxMatTimepickerFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFormat", function() { return NgxMatTimepickerFormat; });
var NgxMatTimepickerFormat;
(function (NgxMatTimepickerFormat) {
    NgxMatTimepickerFormat["TWELVE"] = "hh:mm a";
    NgxMatTimepickerFormat["TWELVE_SHORT"] = "h:m a";
    NgxMatTimepickerFormat["TWENTY_FOUR"] = "HH:mm";
    NgxMatTimepickerFormat["TWENTY_FOUR_SHORT"] = "H:m";
})(NgxMatTimepickerFormat || (NgxMatTimepickerFormat = {}));


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts":
/*!********************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts ***!
  \********************************************************************************/
/*! exports provided: NgxMatTimepickerMeasure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerMeasure", function() { return NgxMatTimepickerMeasure; });
var NgxMatTimepickerMeasure;
(function (NgxMatTimepickerMeasure) {
    NgxMatTimepickerMeasure["hour"] = "hour";
    NgxMatTimepickerMeasure["minute"] = "minute";
})(NgxMatTimepickerMeasure || (NgxMatTimepickerMeasure = {}));


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts":
/*!*******************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts ***!
  \*******************************************************************************/
/*! exports provided: NgxMatTimepickerPeriods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerPeriods", function() { return NgxMatTimepickerPeriods; });
var NgxMatTimepickerPeriods;
(function (NgxMatTimepickerPeriods) {
    NgxMatTimepickerPeriods["AM"] = "AM";
    NgxMatTimepickerPeriods["PM"] = "PM";
})(NgxMatTimepickerPeriods || (NgxMatTimepickerPeriods = {}));


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts":
/*!*****************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts ***!
  \*****************************************************************************/
/*! exports provided: NgxMatTimepickerUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerUnits", function() { return NgxMatTimepickerUnits; });
var NgxMatTimepickerUnits;
(function (NgxMatTimepickerUnits) {
    NgxMatTimepickerUnits[NgxMatTimepickerUnits["HOUR"] = 0] = "HOUR";
    NgxMatTimepickerUnits[NgxMatTimepickerUnits["MINUTE"] = 1] = "MINUTE";
})(NgxMatTimepickerUnits || (NgxMatTimepickerUnits = {}));


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts":
/*!******************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts ***!
  \******************************************************************/
/*! exports provided: NgxMatTimepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerModule", function() { return NgxMatTimepickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ngx-mat-timepicker/ngx-mat-timepicker.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts");
/* harmony import */ var _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/ngx-mat-timepicker.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts");
/* harmony import */ var _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/ngx-mat-timepicker-toggle-icon.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
/* harmony import */ var _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/ngx-mat-timepicker-theme.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts");
/* harmony import */ var _components_ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/ngx-mat-timepicker-time-formatter.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-formatter.pipe.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/ngx-mat-timepicker-minutes-formatter.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts");
/* harmony import */ var _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/ngx-mat-timepicker-autofocus.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts");
/* harmony import */ var _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_field_ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/ngx-mat-timepicker-time-localizer.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");
/* harmony import */ var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tokens/ngx-mat-timepicker-time-locale.token */ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/ngx-mat-timepicker-parser.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/ngx-mat-timepicker-active-hour.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts");
/* harmony import */ var _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/ngx-mat-timepicker-active-minute.pipe */ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts");
/* harmony import */ var _components_ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts");
/* harmony import */ var _components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts");
/* harmony import */ var _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/append-to-input.directive */ "../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



// MATERIAL






// MAT-TIMEPICKER



























class NgxMatTimepickerModule {
    static setLocale(locale) {
        return {
            ngModule: NgxMatTimepickerModule,
            providers: [
                { provide: _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_27__["NGX_MAT_TIMEPICKER_LOCALE"], useValue: locale }
            ]
        };
    }
}
NgxMatTimepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxMatTimepickerModule });
NgxMatTimepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxMatTimepickerModule_Factory(t) { return new (t || NgxMatTimepickerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxMatTimepickerModule, { declarations: [_components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerDialogComponent"],
        _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_29__["NgxMatTimepickerActiveHourPipe"],
        _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_30__["NgxMatTimepickerActiveMinutePipe"],
        _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_33__["AppendToInputDirective"],
        _components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_9__["NgxMatTimepickerComponent"],
        _components_ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepicker24HoursFaceComponent"],
        _components_ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepicker12HoursFaceComponent"],
        _components_ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepickerMinutesFaceComponent"],
        _components_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepickerFaceComponent"],
        _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerToggleComponent"],
        _components_ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_18__["NgxMatTimepickerDialComponent"],
        _components_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_19__["NgxMatTimepickerDialControlComponent"],
        _components_ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_20__["NgxMatTimepickerPeriodComponent"],
        _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerDirective"],
        _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleIconDirective"],
        _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_23__["NgxMatTimepickerAutofocusDirective"],
        _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_22__["NgxMatTimepickerMinutesFormatterPipe"],
        _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerThemeDirective"],
        _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_24__["NgxMatTimepickerFieldComponent"],
        _components_ngx_mat_timepicker_field_ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_25__["NgxMatTimepickerControlComponent"],
        _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_28__["NgxMatTimepickerParserPipe"],
        _components_ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_31__["NgxMatTimepickerContentComponent"],
        _pipes_ngx_mat_timepicker_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_21__["NgxMatTimepickerTimeFormatterPipe"],
        _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerTimeLocalizerPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"]], exports: [_components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_9__["NgxMatTimepickerComponent"],
        _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerToggleComponent"],
        _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_24__["NgxMatTimepickerFieldComponent"],
        _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerDirective"],
        _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleIconDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"]
                ],
                exports: [
                    _components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_9__["NgxMatTimepickerComponent"],
                    _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerToggleComponent"],
                    _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_24__["NgxMatTimepickerFieldComponent"],
                    _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerDirective"],
                    _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleIconDirective"],
                ],
                declarations: [
                    _components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerDialogComponent"],
                    _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_29__["NgxMatTimepickerActiveHourPipe"],
                    _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_30__["NgxMatTimepickerActiveMinutePipe"],
                    _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_33__["AppendToInputDirective"],
                    _components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_9__["NgxMatTimepickerComponent"],
                    _components_ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepicker24HoursFaceComponent"],
                    _components_ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepicker12HoursFaceComponent"],
                    _components_ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepickerMinutesFaceComponent"],
                    _components_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepickerFaceComponent"],
                    _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerToggleComponent"],
                    _components_ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_18__["NgxMatTimepickerDialComponent"],
                    _components_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_19__["NgxMatTimepickerDialControlComponent"],
                    _components_ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_20__["NgxMatTimepickerPeriodComponent"],
                    _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerDirective"],
                    _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleIconDirective"],
                    _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_23__["NgxMatTimepickerAutofocusDirective"],
                    _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_22__["NgxMatTimepickerMinutesFormatterPipe"],
                    _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerThemeDirective"],
                    _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_24__["NgxMatTimepickerFieldComponent"],
                    _components_ngx_mat_timepicker_field_ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_25__["NgxMatTimepickerControlComponent"],
                    _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_28__["NgxMatTimepickerParserPipe"],
                    _components_ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_31__["NgxMatTimepickerContentComponent"],
                    _pipes_ngx_mat_timepicker_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_21__["NgxMatTimepickerTimeFormatterPipe"],
                    _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerTimeLocalizerPipe"]
                ],
                entryComponents: [
                    _components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerDialogComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts":
/*!**********************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts ***!
  \**********************************************************************************/
/*! exports provided: NgxMatTimepickerActiveHourPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerActiveHourPipe", function() { return NgxMatTimepickerActiveHourPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NgxMatTimepickerActiveHourPipe {
    transform(hour, currentHour, isClockFaceDisabled) {
        if (hour == null || isClockFaceDisabled) {
            return false;
        }
        return hour === currentHour;
    }
}
NgxMatTimepickerActiveHourPipe.ɵfac = function NgxMatTimepickerActiveHourPipe_Factory(t) { return new (t || NgxMatTimepickerActiveHourPipe)(); };
NgxMatTimepickerActiveHourPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "activeHour", type: NgxMatTimepickerActiveHourPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerActiveHourPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'activeHour'
            }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts":
/*!************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts ***!
  \************************************************************************************/
/*! exports provided: NgxMatTimepickerActiveMinutePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerActiveMinutePipe", function() { return NgxMatTimepickerActiveMinutePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NgxMatTimepickerActiveMinutePipe {
    transform(minute, currentMinute, gap, isClockFaceDisabled) {
        if (minute == null || isClockFaceDisabled) {
            return false;
        }
        const defaultGap = 5;
        return ((currentMinute === minute) && (minute % (gap || defaultGap) === 0));
    }
}
NgxMatTimepickerActiveMinutePipe.ɵfac = function NgxMatTimepickerActiveMinutePipe_Factory(t) { return new (t || NgxMatTimepickerActiveMinutePipe)(); };
NgxMatTimepickerActiveMinutePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "activeMinute", type: NgxMatTimepickerActiveMinutePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerActiveMinutePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'activeMinute'
            }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts":
/*!****************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts ***!
  \****************************************************************************************/
/*! exports provided: NgxMatTimepickerMinutesFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerMinutesFormatterPipe", function() { return NgxMatTimepickerMinutesFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NgxMatTimepickerMinutesFormatterPipe {
    transform(minute, gap = 5) {
        if (!minute) {
            return minute;
        }
        return minute % gap === 0 ? minute : '';
    }
}
NgxMatTimepickerMinutesFormatterPipe.ɵfac = function NgxMatTimepickerMinutesFormatterPipe_Factory(t) { return new (t || NgxMatTimepickerMinutesFormatterPipe)(); };
NgxMatTimepickerMinutesFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "minutesFormatter", type: NgxMatTimepickerMinutesFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerMinutesFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'minutesFormatter'
            }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts":
/*!*****************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts ***!
  \*****************************************************************************/
/*! exports provided: NgxMatTimepickerParserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerParserPipe", function() { return NgxMatTimepickerParserPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/ngx-mat-timepicker-time-locale.token */ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-measures.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "../../node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);

//



//


class NgxMatTimepickerParserPipe {
    constructor(_locale) {
        this._locale = _locale;
        this._numberingSystem = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].local().setLocale(this._locale).resolvedLocaleOpts().numberingSystem;
    }
    transform(time, timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].HOUR) {
        if (time == null || time === "") {
            return "";
        }
        if (!isNaN(+time)) {
            return `${time}`;
        }
        if (timeUnit === _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].MINUTE) {
            return this._parseTime(time, "mm", _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].minute).toString();
        }
        return this._parseTime(time, "HH", _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].hour).toString();
    }
    _parseTime(time, format, timeMeasure) {
        const parsedTime = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromFormat(String(time), format, { numberingSystem: this._numberingSystem })[timeMeasure];
        if (!isNaN(parsedTime)) {
            return parsedTime;
        }
        throw new Error(`Cannot parse time - ${time}`);
    }
}
NgxMatTimepickerParserPipe.ɵfac = function NgxMatTimepickerParserPipe_Factory(t) { return new (t || NgxMatTimepickerParserPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"])); };
NgxMatTimepickerParserPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ngxMatTimepickerParser", type: NgxMatTimepickerParserPipe, pure: true });
NgxMatTimepickerParserPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxMatTimepickerParserPipe, factory: NgxMatTimepickerParserPipe.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerParserPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "ngxMatTimepickerParser"
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-formatter.pipe.ts":
/*!*************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-formatter.pipe.ts ***!
  \*************************************************************************************/
/*! exports provided: NgxMatTimepickerTimeFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerTimeFormatterPipe", function() { return NgxMatTimepickerTimeFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "../../node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);

//

//


class NgxMatTimepickerTimeFormatterPipe {
    transform(time, timeUnit) {
        if (time == null || time === '') {
            return time;
        }
        switch (timeUnit) {
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"].HOUR:
                return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({ hour: +time }).toFormat("HH");
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"].MINUTE:
                return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({ minute: +time }).toFormat("mm");
            default:
                throw new Error("no such time unit");
        }
    }
}
NgxMatTimepickerTimeFormatterPipe.ɵfac = function NgxMatTimepickerTimeFormatterPipe_Factory(t) { return new (t || NgxMatTimepickerTimeFormatterPipe)(); };
NgxMatTimepickerTimeFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeFormatter", type: NgxMatTimepickerTimeFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerTimeFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "timeFormatter"
            }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts":
/*!*************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts ***!
  \*************************************************************************************/
/*! exports provided: NgxMatTimepickerTimeLocalizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerTimeLocalizerPipe", function() { return NgxMatTimepickerTimeLocalizerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/ngx-mat-timepicker-time-locale.token */ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
/* harmony import */ var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-units.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
/* harmony import */ var _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-measures.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "../../node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);

//



//


class NgxMatTimepickerTimeLocalizerPipe {
    constructor(_locale) {
        this._locale = _locale;
    }
    transform(time, timeUnit, isKeyboardEnabled = false) {
        if (time == null || time === "") {
            return "";
        }
        switch (timeUnit) {
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].HOUR: {
                const format = (time === 0 || isKeyboardEnabled) ? "HH" : "H";
                return this._formatTime(_models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].hour, time, format);
            }
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].MINUTE:
                return this._formatTime(_models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].minute, time, "mm");
            default:
                throw new Error(`There is no Time Unit with type ${timeUnit}`);
        }
    }
    _formatTime(timeMeasure, time, format) {
        try {
            return luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromObject({ [timeMeasure]: +time }).setLocale(this._locale).toFormat(format);
        }
        catch (_a) {
            throw new Error(`Cannot format provided time - ${time} to locale - ${this._locale}`);
        }
    }
}
NgxMatTimepickerTimeLocalizerPipe.ɵfac = function NgxMatTimepickerTimeLocalizerPipe_Factory(t) { return new (t || NgxMatTimepickerTimeLocalizerPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"])); };
NgxMatTimepickerTimeLocalizerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "timeLocalizer", type: NgxMatTimepickerTimeLocalizerPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerTimeLocalizerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "timeLocalizer"
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts":
/*!****************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts ***!
  \****************************************************************************/
/*! exports provided: NgxMatTimepickerAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAdapter", function() { return NgxMatTimepickerAdapter; });
/* harmony import */ var _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-format.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts");
/* harmony import */ var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-periods.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "../../node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);


//

// @dynamic
class NgxMatTimepickerAdapter {
    /***
     *  Format hour according to time format (12 or 24)
     */
    static formatHour(currentHour, format, period) {
        if (format === 24) {
            return currentHour;
        }
        const hour = period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerPeriods"].AM ? currentHour : currentHour + 12;
        if (period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerPeriods"].AM && hour === 12) {
            return 0;
        }
        else if (period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerPeriods"].PM && hour === 24) {
            return 12;
        }
        return hour;
    }
    static formatTime(time, opts) {
        if (!time) {
            return "Invalid Time";
        }
        const { format } = opts;
        const parsedTime = NgxMatTimepickerAdapter.parseTime(time, opts).setLocale(NgxMatTimepickerAdapter.defaultLocale);
        if (format !== 24) {
            return parsedTime.toLocaleString(Object.assign(Object.assign({}, luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].TIME_SIMPLE), { hour12: format !== 24, numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem })).replace(/\u200E/g, "");
        }
        return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
        }).replace(/\u200E/g, "");
    }
    static fromDateTimeToString(time, format) {
        const timeFormat = format === 24 ? _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWENTY_FOUR : _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWELVE;
        return time.reconfigure({
            numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem,
            locale: NgxMatTimepickerAdapter.defaultLocale
        }).toFormat(timeFormat);
    }
    static isBetween(time, before, after, unit = "minutes") {
        if (unit === "hours") {
            return this.isSameOrBefore(time, after, unit) && this.isSameOrAfter(time, before, unit);
        }
        if (unit === "minutes") {
            return this.isSameOrBefore(time, after) && this.isSameOrAfter(time, before);
        }
    }
    static isSameOrAfter(time, compareWith, unit = "minutes") {
        if (unit === "hours") {
            return time.hour >= compareWith.hour;
        }
        if (unit === "minutes") {
            return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
        }
    }
    static isSameOrBefore(time, compareWith, unit = "minutes") {
        if (unit === "hours") {
            return time.hour <= compareWith.hour;
        }
        if (unit === "minutes") {
            return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
        }
    }
    static isTimeAvailable(time, min, max, granularity, minutesGap, format) {
        if (!time) {
            return;
        }
        const convertedTime = this.parseTime(time, { format });
        const minutes = convertedTime.minute;
        if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
            throw new Error(`Your minutes - ${minutes} doesn\'t match your minutesGap - ${minutesGap}`);
        }
        const isAfter = (min && !max)
            && this.isSameOrAfter(convertedTime, min, granularity);
        const isBefore = (max && !min)
            && this.isSameOrBefore(convertedTime, max, granularity);
        const between = (min && max)
            && this.isBetween(convertedTime, min, max, granularity);
        const isAvailable = !min && !max;
        return isAfter || isBefore || between || isAvailable;
    }
    static parseTime(time, opts) {
        const { numberingSystem, locale } = NgxMatTimepickerAdapter._getLocaleOptionsByTime(time, opts);
        const isPeriodExist = time.split(" ").length === 2;
        const timeMask = isPeriodExist ? _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWELVE_SHORT : _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWENTY_FOUR_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromFormat(time, timeMask, { numberingSystem, locale });
    }
    static toLocaleTimeString(time, opts = {}) {
        const { format = NgxMatTimepickerAdapter.defaultFormat, locale = NgxMatTimepickerAdapter.defaultLocale } = opts;
        const hourCycle = format === 24 ? "h23" : "h12";
        const timeFormat = Object.assign(Object.assign({}, luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].TIME_SIMPLE), { hourCycle });
        const timeMask = (format === 24) ? _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWENTY_FOUR_SHORT : _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWELVE_SHORT;
        return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromFormat(time, timeMask).setLocale(locale).toLocaleString(timeFormat);
    }
    static _getLocaleOptionsByTime(time, opts) {
        const { numberingSystem, locale } = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().setLocale(opts.locale).resolvedLocaleOpts();
        const localeConfig = {
            numberingSystem: numberingSystem,
            locale
        };
        const defaultConfig = {
            numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem,
            locale: NgxMatTimepickerAdapter.defaultLocale
        };
        return isNaN(parseInt(time, 10)) ? localeConfig : defaultConfig;
    }
}
NgxMatTimepickerAdapter.defaultFormat = 12;
NgxMatTimepickerAdapter.defaultLocale = "en-US";
NgxMatTimepickerAdapter.defaultNumberingSistem = "latn";


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts":
/*!**********************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts ***!
  \**********************************************************************************/
/*! exports provided: NgxMatTimepickerEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerEventService", function() { return NgxMatTimepickerEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

//



class NgxMatTimepickerEventService {
    constructor() {
        this._backdropClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._keydownEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    get backdropClick() {
        return this._backdropClick$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: true }));
    }
    get keydownEvent() {
        return this._keydownEvent$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ bufferSize: 1, refCount: true }));
    }
    dispatchEvent(event) {
        switch (event.type) {
            case "click":
                this._backdropClick$.next(event);
                break;
            case "keydown":
                this._keydownEvent$.next(event);
                break;
            default:
                throw new Error("no such event type");
        }
    }
}
NgxMatTimepickerEventService.ɵfac = function NgxMatTimepickerEventService_Factory(t) { return new (t || NgxMatTimepickerEventService)(); };
NgxMatTimepickerEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxMatTimepickerEventService, factory: NgxMatTimepickerEventService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerEventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts":
/*!****************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts ***!
  \****************************************************************************/
/*! exports provided: NgxMatTimepickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerService", function() { return NgxMatTimepickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-periods.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
/* harmony import */ var _ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-mat-timepicker-adapter */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "../../node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);






const DEFAULT_HOUR = {
    time: 12,
    angle: 360
};
const DEFAULT_MINUTE = {
    time: 0,
    angle: 360
};
class NgxMatTimepickerService {
    constructor() {
        this._hour$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](DEFAULT_HOUR);
        this._minute$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](DEFAULT_MINUTE);
        this._period$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].AM);
    }
    set hour(hour) {
        this._hour$.next(hour);
    }
    set minute(minute) {
        this._minute$.next(minute);
    }
    set period(period) {
        const isPeriodValid = (period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].AM) || (period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].PM);
        if (isPeriodValid) {
            this._period$.next(period);
        }
    }
    get selectedHour() {
        return this._hour$.asObservable();
    }
    get selectedMinute() {
        return this._minute$.asObservable();
    }
    get selectedPeriod() {
        return this._period$.asObservable();
    }
    getFullTime(format) {
        const selectedHour = this._hour$.getValue().time;
        const selectedMinute = this._minute$.getValue().time;
        const hour = selectedHour != null ? selectedHour : DEFAULT_HOUR.time;
        const minute = selectedMinute != null ? selectedMinute : DEFAULT_MINUTE.time;
        const period = format === 12 ? this._period$.getValue() : "";
        const time = `${hour}:${minute} ${period}`.trim();
        return _ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerAdapter"].formatTime(time, { format });
    }
    setDefaultTimeIfAvailable(time, min, max, format, minutesGap) {
        /* Workaround to double error message*/
        try {
            if (_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerAdapter"].isTimeAvailable(time, min, max, "minutes", minutesGap)) {
                this._setDefaultTime(time, format);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    _resetTime() {
        this.hour = Object.assign({}, DEFAULT_HOUR);
        this.minute = Object.assign({}, DEFAULT_MINUTE);
        this.period = _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].AM;
    }
    _setDefaultTime(time, format) {
        const defaultTime = _ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerAdapter"].parseTime(time, { format }).toJSDate();
        if (luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromJSDate(defaultTime).isValid) {
            const period = time.substr(time.length - 2).toUpperCase();
            const hour = defaultTime.getHours();
            this.hour = Object.assign(Object.assign({}, DEFAULT_HOUR), { time: formatHourByPeriod(hour, period) });
            this.minute = Object.assign(Object.assign({}, DEFAULT_MINUTE), { time: defaultTime.getMinutes() });
            this.period = period;
        }
        else {
            this._resetTime();
        }
    }
}
NgxMatTimepickerService.ɵfac = function NgxMatTimepickerService_Factory(t) { return new (t || NgxMatTimepickerService)(); };
NgxMatTimepickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxMatTimepickerService, factory: NgxMatTimepickerService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], null, null); })();
/***
 *  Format hour in 24hours format to meridian (AM or PM) format
 */
function formatHourByPeriod(hour, period) {
    switch (period) {
        case _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].AM:
            return hour === 0 ? 12 : hour;
        case _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].PM:
            return hour === 12 ? 12 : hour - 12;
        default:
            return hour;
    }
}


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts":
/*!************************************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts ***!
  \************************************************************************************/
/*! exports provided: NGX_MAT_TIMEPICKER_LOCALE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGX_MAT_TIMEPICKER_LOCALE", function() { return NGX_MAT_TIMEPICKER_LOCALE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ngx-mat-timepicker-adapter */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");

//

const NGX_MAT_TIMEPICKER_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("TimeLocale", {
    providedIn: "root",
    factory: () => _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerAdapter"].defaultLocale
});


/***/ }),

/***/ "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts":
/*!***********************************************************************!*\
  !*** ../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts ***!
  \***********************************************************************/
/*! exports provided: NgxMatTimepickerUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerUtils", function() { return NgxMatTimepickerUtils; });
/* harmony import */ var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ngx-mat-timepicker-adapter */ "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
/* harmony import */ var _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ngx-mat-timepicker-format.enum */ "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "../../node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);


//

// @dynamic
class NgxMatTimepickerUtils {
    static disableHours(hours, config) {
        if (config.min || config.max) {
            return hours.map(value => {
                const hour = config.format === 24 ? value.time : _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].formatHour(value.time, config.format, config.period);
                const currentTime = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({ hour }).toFormat(_models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerFormat"].TWELVE);
                return Object.assign(Object.assign({}, value), { disabled: !_services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].isTimeAvailable(currentTime, config.min, config.max, "hours") });
            });
        }
        return hours;
    }
    static disableMinutes(minutes, selectedHour, config) {
        if (config.min || config.max) {
            const hour = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].formatHour(selectedHour, config.format, config.period);
            return minutes.map(value => {
                const currentTime = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({
                    hour,
                    minute: value.time
                }).toFormat(_models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerFormat"].TWELVE);
                return Object.assign(Object.assign({}, value), { disabled: !_services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].isTimeAvailable(currentTime, config.min, config.max, "minutes") });
            });
        }
        return minutes;
    }
    static getHours(format) {
        return Array(format).fill(1).map((v, i) => {
            const angleStep = 30;
            const time = v + i;
            const angle = angleStep * time;
            return { time: time === 24 ? 0 : time, angle };
        });
    }
    static getMinutes(gap = 1) {
        const minutesCount = 60;
        const angleStep = 360 / minutesCount;
        const minutes = [];
        for (let i = 0; i < minutesCount; i++) {
            const angle = angleStep * i;
            if (i % gap === 0) {
                minutes.push({ time: i, angle: angle !== 0 ? angle : 360 });
            }
        }
        return minutes;
    }
    static isDigit(e) {
        // Allow: backspace, delete, tab, escape, enter
        if ([46, 8, 9, 27, 13].some(n => n === e.keyCode) ||
            // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, up, down
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            return true;
        }
        return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
    }
}


/***/ }),

/***/ "../ngx-mat-timepicker/src/public-api.ts":
/*!***********************************************!*\
  !*** ../ngx-mat-timepicker/src/public-api.ts ***!
  \***********************************************/
/*! exports provided: NgxMatTimepickerFieldComponent, NgxMatTimepickerToggleComponent, NgxMatTimepickerDirective, NgxMatTimepickerToggleIconDirective, NgxMatTimepickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFieldComponent", function() { return _lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFieldComponent"]; });

/* harmony import */ var _lib_components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleComponent", function() { return _lib_components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerToggleComponent"]; });

/* harmony import */ var _lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/directives/ngx-mat-timepicker.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDirective", function() { return _lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerDirective"]; });

/* harmony import */ var _lib_directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/directives/ngx-mat-timepicker-toggle-icon.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleIconDirective", function() { return _lib_directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerToggleIconDirective"]; });

/* harmony import */ var _lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ngx-mat-timepicker.module */ "../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerModule", function() { return _lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerModule"]; });

// COMPONENTS


// DIRECTIVES


//



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: NgxMatTimepickerAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAppComponent", function() { return NgxMatTimepickerAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _ngx_mat_timepicker_src_lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive */ "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts");
/* harmony import */ var _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts");
/* harmony import */ var _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component */ "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts");













function NgxMatTimepickerAppComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " radio_button_unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxMatTimepickerAppComponent_button_13_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_checked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxMatTimepickerAppComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerAppComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const theme_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.updateTheme(theme_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerAppComponent_button_13_mat_icon_1_Template, 2, 0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "use", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedTheme.value === theme_r6.value)("ngIfElse", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", theme_r6.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", theme_r6.value ? "#444" : "#fff");
} }
class NgxMatTimepickerAppComponent {
    constructor() {
        this.themes = [
            { value: "", description: "Light" },
            { value: "dark-theme", description: "Dark" }
        ];
        this.selectedTheme = this.themes[0];
    }
    updateTheme(theme) {
        this.selectedTheme = theme;
        document.body.classList.toggle("dark-theme", !!theme.value);
    }
}
NgxMatTimepickerAppComponent.ɵfac = function NgxMatTimepickerAppComponent_Factory(t) { return new (t || NgxMatTimepickerAppComponent)(); };
NgxMatTimepickerAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxMatTimepickerAppComponent, selectors: [["app-root"]], decls: 64, vars: 8, consts: [["fakeRadioButton", ""], ["color", "primary", 1, "ngx-mtp-header", "mat-elevation-z6"], ["src", "assets/angular-white-transparent.svg", "alt", "", 1, "ngx-mtp-ng-logo"], [1, "ngx-mtp-header-title"], ["mat-button", "", 3, "matMenuTriggerFor"], ["themeMenu", ""], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", "href", "https://github.com/tonysamperi/ngx-mat-timepicker"], ["src", "assets/github-circle-white-transparent.svg", "alt", "", 1, "ngx-mtp-github-logo"], [1, "ngx-mtp-top"], [1, "mat-h1", "ngx-mtp-main-title"], [1, "ngx-mtp-generic-section"], [1, "mat-h2"], [1, "terminal"], [1, "ngx-mtp-container"], [1, "demo-form"], [1, "mat-color-primary"], ["matInput", "", "name", "selected_time", "placeholder", "e.g. 12:00 PM", "readonly", "", 3, "ngModel", "ngxMatTimepicker", "ngModelChange"], ["pickerA", ""], [1, "mat-color-accent"], ["matInput", "", "name", "selected_time", "placeholder", "12:00", "readonly", "", 3, "format", "ngModel", "ngxMatTimepicker", "ngModelChange"], ["color", "accent"], ["pickerB", ""], [1, "mat-color-warn"], ["color", "warn", 3, "defaultTime"], ["mat-menu-item", "", 3, "click"], ["color", "accent", 4, "ngIf", "ngIfElse"], [1, "ngx-mtp-theme-example"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100%", "height", "100%", "viewBox", "0 0 80 80", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z", "id", "a"], ["d", "M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z", "id", "b"], ["d", "M0 0h80v17.24H0V0z", "id", "c"], [0, "xlink", "href", "#a", 1, "docs-theme-icon-background"], [0, "xlink", "href", "#b", "fill", "#ff4081", 1, "docs-theme-icon-button"], [0, "xlink", "href", "#c", "fill", "#3f51b5", 1, "docs-theme-icon-toolbar"]], template: function NgxMatTimepickerAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerAppComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ngx-mat-timepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgxMatTimepickerAppComponent_button_13_Template, 12, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Angular Material Timepicker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Install NgxMatTimepicker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "npm i @popperjs/core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "npm i ngx-popperjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Picker with 12h format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " palette (primary)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerAppComponent_Template_input_ngModelChange_40_listener($event) { return ctx.selectedTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "ngx-mat-timepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Picker with 24h format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerAppComponent_Template_input_ngModelChange_52_listener($event) { return ctx.selectedTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "ngx-mat-timepicker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "ngx-mat-timepicker-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "ngx-mat-timepicker-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTime)("ngxMatTimepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", 24)("ngModel", ctx.selectedTime)("ngxMatTimepicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultTime", "11:11 AM");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ngx_mat_timepicker_src_lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_9__["NgxMatTimepickerDirective"], _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerComponent"], _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerFieldComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@charset \"UTF-8\";\n\n\n\n\n.mat-badge-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%] {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%] {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.05em;\n  margin: 0 0 56px;\n}\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%] {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.02em;\n  margin: 0 0 64px;\n}\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%] {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.005em;\n  margin: 0 0 64px;\n}\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 64px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-checkbox[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.mat-chip[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mat-table[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-calendar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-calendar-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n}\n.mat-dialog-title[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.34375em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 150%;\n  line-height: 1.125;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 1.125em;\n  line-height: 1.125;\n}\n.mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-label-wrapper[_ngcontent-%COMP%] {\n  top: -0.84375em;\n  padding-top: 0.84375em;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.34375em;\n}\n.mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.34375em;\n}\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  font-size: 75%;\n  margin-top: 0.6666666667em;\n  top: calc(100% - 1.7916666667em);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.4375em 0;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.3333533333%;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.28125em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0.5416666667em;\n  top: calc(100% - 1.6666666667em);\n}\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28122em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28121em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.2812em) scale(0.75);\n  }\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.25em 0 0.75em 0;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.09375em;\n  margin-top: -0.5em;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1em 0 1em 0;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.84375em;\n  margin-top: -0.25em;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: -0.0625em;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n}\n.mat-radio-button[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select-trigger[_ngcontent-%COMP%] {\n  height: 1.125em;\n}\n.mat-slide-toggle-content[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-step-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-step-sub-label-error[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.mat-step-label-error[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-step-label-selected[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-tab-group[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0;\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.mat-tooltip-handset[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.mat-list-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-simple-snackbar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n.mat-tree[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media screen and (-ms-high-contrast: active) {\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n    opacity: 0.6;\n  }\n}\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n@-webkit-keyframes cdk-text-field-autofill-start {\n  \n}\n@keyframes cdk-text-field-autofill-start {\n  \n}\n@-webkit-keyframes cdk-text-field-autofill-end {\n  \n}\n@keyframes cdk-text-field-autofill-end {\n  \n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-animation: cdk-text-field-autofill-start 0s 1ms;\n          animation: cdk-text-field-autofill-start 0s 1ms;\n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  -webkit-animation: cdk-text-field-autofill-end 0s 1ms;\n          animation: cdk-text-field-autofill-end 0s 1ms;\n}\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n[_nghost-%COMP%] {\n  display: block;\n  padding-top: 56px;\n}\n.ngx-mtp-header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img.ngx-mtp-ng-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 16px;\n  height: 26px;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .ngx-mtp-header-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .ngx-mtp-github-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 26px;\n  vertical-align: middle;\n}\n.ngx-mtp-top[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 20px;\n  text-align: center;\n  overflow: hidden;\n  padding-top: 60px;\n}\n.ngx-mtp-top[_ngcontent-%COMP%]    > h1.ngx-mtp-main-title[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n.ngx-mtp-generic-section[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 20px;\n  background-color: #E2E2E2;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.ngx-mtp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n  padding: 20px;\n}\n.demo-form[_ngcontent-%COMP%] {\n  padding: 16px;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.demo-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .demo-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n  }\n}\n@media (max-width: 991px) {\n  .demo-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n  }\n}\n.demo-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n@media (max-width: 991px) {\n  .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 34px;\n  line-height: 26px;\n  text-indent: 6px;\n  text-align: left;\n  height: 34px;\n}\n.terminal[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n  text-align: left;\n  padding-top: 44px;\n}\n.terminal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci1yZXBvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyLXJlcG8vc3JjL2FwcC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlci1yZXBvXFxzcmNcXHNjc3NcXHRoZW1lcy5zY3NzIiwicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyLXJlcG8vc3JjL2FwcC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXF90aGVtaW5nLnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXItcmVwby9zcmMvYXBwL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyLXJlcG9cXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXItcmVwby9zcmMvYXBwL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyLXJlcG9cXHNyY1xcc2Nzc1xccmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBQ282Q0Esa0NBQUE7QUF1aURBLDJDQUFBO0FBd0NBLHFCQUFBO0FBbC9CRTtFQUNFLGdCQXJMb0I7RUFzTHBCLGVBdkxrQjtFQXdMbEIsaURBQUE7QUYzL0RKO0FFOC9ERTtFQUVFLGNBQUE7QUY1L0RKO0FFKy9ERTtFQUNFLGVBQUE7QUY1L0RKO0FFaXNERTtFQTlORSx3REFBQTtFQVlGLHNCQUFBO0VBb05FLGdCQUFBO0FGN3JESjtBRWdzREU7RUFuT0Usd0RBQUE7RUFZRixzQkFBQTtFQXlORSxnQkFBQTtBRjVyREo7QUUrckRFO0VBeE9FLHdEQUFBO0VBWUYsc0JBQUE7RUE4TkUsZ0JBQUE7QUYzckRKO0FFOHJERTtFQTdPRSx3REFBQTtFQVlGLHNCQUFBO0VBbU9FLGdCQUFBO0FGMXJESjtBRWdzREU7RUFyUEUscUVBQUE7RUE4UEEsZ0JBQUE7QUZwc0RKO0FFdXNERTtFQWpRRSxxRUFBQTtFQTBRQSxnQkFBQTtBRjNzREo7QUU4c0RFO0VBN1FFLHdEQUFBO0VBWUYsc0JBQUE7QUZ4OENGO0FFNnNERTtFQWpSRSx3REFBQTtFQVlGLHNCQUFBO0FGbjhDRjtBRTJzREk7RUFDRSxnQkFBQTtBRnpzRE47QUU2c0RFO0VBelJFLHdEQUFBO0VBWUYsc0JBQUE7QUYzN0NGO0FFNHNERTtFQTdSRSwwREFBQTtFQVlGLHVCQUFBO0VBbVJFLGdCQUFBO0FGeHNESjtBRTJzREU7RUFsU0Usd0RBQUE7RUFZRix1QkFBQTtFQXdSRSxnQkFBQTtBRnZzREo7QUUwc0RFO0VBdlNFLHdEQUFBO0VBWUYsd0JBQUE7RUE2UkUsZ0JBQUE7QUZ0c0RKO0FFeXNERTtFQTVTRSx3REFBQTtFQVlGLHNCQUFBO0VBa1NFLGdCQUFBO0FGcnNESjtBRW84REU7RUE3aUJFLHdEQUFBO0VBWUYsc0JBQUE7QUY5NUNGO0FFcW1FRTs7RUFHSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRm5tRU47QUUyckVFO0VBQ0UsaURBQUE7QUZ4ckVKO0FFdXRFRTtFQUNFLGlEQUFBO0FGcHRFSjtBRXV0RUU7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUZydEVOO0FFeXRFRTtFQUNFLGVBQUE7QUZ0dEVKO0FFeXRFRTs7RUFFRSxlQUFBO0FGdHRFSjtBRTJ6RUU7RUFDRSxpREFBQTtBRnh6RUo7QUU0ekVFO0VBQ0UsaUJBQUE7QUZ6ekVKO0FFcTVFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRmw1RUo7QUVvNUVJOztFQUVFLGVBekZzQjtBRnp6RTVCO0FFeTdFRTtFQUNFLGlEQUFBO0FGdDdFSjtBRXk3RUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUZ0N0VKO0FFeTdFRTtFQUNFLGVBQUE7QUZ0N0VKO0FFbWtGRTtFQUNFLGlEQUFBO0FGaGtGSjtBRW1rRkU7RUFDRSxlQXJJMEI7QUYzN0U5QjtBRW1rRkU7O0VBR0ksZUFBQTtFQUNBLGdCQUFBO0FGamtGTjtBRXFrRkU7RUFFSSxlQWpKaUM7RUFrSmpDLGdCQUFBO0FGbmtGTjtBRTBsRkU7RUF0eENFLHdEQUFBO0VBWUYsc0JBQUE7QUYzMENGO0FFb3BGRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGbHBGTjtBRXNwRkU7RUE3MUNFLHdEQUFBO0VBWUYsc0JBQUE7QUZoMENGO0FFd2xKRTtFQTd5R0Usa0JBZVU7RUFkVixnQkFlWTtFQWRaLGtCQWVZO0VBZFosaURBZVk7RUFHZCxzQkFBQTtBRnh6Q0Y7QUVvbEpFO0VBQ0UseUJBUHVCO0FGMWtKM0I7QUV1bEpJOztFQUNFLGVBdkIyQjtFQXdCM0Isa0JBdENVO0FGN2lKaEI7QUV1bEpJOztFQUNFLGFBQUE7RUFDQSxZQUFBO0FGcGxKTjtBRXNsSk07O0VBQ0UsZUFBQTtFQUNBLGtCQWhEUTtBRm5pSmhCO0FFd2xKRTtFQUNFLGdCQUFBO0VBRUEsdUNBQUE7QUZ0bEpKO0FFMGxKSTs7RUFyRUYsNkNBQUE7RUFFQSxzQkFBQTtBRmpoSkY7QUU0bEpJO0VBN0VGLDZDQUFBO0VBRUEsc0JBQUE7QUY3Z0pGO0FFK2xKRTtFQUNFLGVBQUE7RUFDQSxzQkFuRWlCO0FGemhKckI7QUUrbEpFO0VBQ0UsY0FBQTtBRjVsSko7QUUrbEpFO0VBR0UsaUJBaEV1QjtBRjloSjNCO0FFaW1KRTtFQUNFLGNBL0VvQjtFQWdGcEIsMEJBekVxQjtFQTZFckIsZ0NBQUE7QUZqbUpKO0FFd3BJSTtFQUNFLHNCQUpxQjtBRmpwSTNCO0FFd3BJSTtFQUNFLG1CQUFBO0FGdHBJTjtBRTBwSU07O0VBekRKLG9GQUFBO0VBSUEsaURBQUE7RUFHQSxzQkFBQTtBRmxtSUY7QUUycElNO0VBaEVKLHNGQUFBO0VBSUEsaURBQUE7RUFHQSxzQkFBQTtBRjdsSUY7QUU4cElNO0VBeEVKLHNGQUFBO0VBSUEsaURBQUE7RUFHQSxzQkFBQTtBRnhsSUY7QUVncUlJO0VBQ0UsY0FBQTtBRjlwSU47QUVpcUlJO0VBR0UsY0F6Q3FCO0FGeG5JM0I7QUVvcUlJO0VBQ0UsMEJBakRtQjtFQXFEbkIsZ0NBQUE7QUZycUlOO0FFMnFJRTtFQUdNOztJQXZGTiw2Q0FBQTtFRmpsSUE7RUUrcUlNO0lBOUZOLDZDQUFBO0VGOWtJQTtFRW9ySU07SUF0R04sNENBQUE7RUYza0lBO0FBQ0Y7QUUrK0hJO0VBQ0UsMEJBQUE7QUY3K0hOO0FFZy9ISTtFQUNFLGNBQUE7RUFDQSxrQkFUMkI7QUZyK0hqQztBRWsvSE07O0VBaENKLDZDQUFBO0VBRUEsc0JBQUE7QUYvOEhGO0FFcy9ITTtFQXpDSiw2Q0FBQTtFQUVBLHNCQUFBO0FGMzhIRjtBRWd4SUk7RUFDRSxvQkFBQTtBRjd3SU47QUVneElJO0VBQ0UsY0FBQTtFQUNBLG1CQVQ4QjtBRnJ3SXBDO0FFa3hJTTs7RUF2Q0osNkNBQUE7RUFFQSxzQkFBQTtBRnh1SUY7QUVzeElNO0VBaERKLDZDQUFBO0VBRUEsc0JBQUE7QUZwdUlGO0FFb2tGRTs7RUFHRSxlQUFBO0FGbGtGSjtBRWtoRkU7O0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FGN2dGSjtBRWdoRkk7O0VBQ0UsZUF3Q3FCO0FGcmpGM0I7QUV1dEZFO0VBQ0UscUJBQUE7QUZwdEZKO0FFKzFGRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGNzFGTjtBRTA0RkU7O0VBR0ksaURBQUE7RUFDQSxlQUFBO0FGeDRGTjtBRWlpR0U7RUFDRSxpREFBQTtBRjloR0o7QUVzbUdFO0VBQ0UsaURBQUE7QUZubUdKO0FFc21HRTtFQUNFLGVBQUE7QUZubUdKO0FFOHZHRTtFQUNFLGlEQUFBO0FGM3ZHSjtBRW82R0U7RUFFSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRmw2R047QUVvL0dFO0VBQ0UsaURBQUE7QUZqL0dKO0FFby9HRTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBRmwvR047QUVzL0dFO0VBQ0UsbUJBQUE7QUZuL0dKO0FFcy9HRTtFQUNFLGVBQUE7QUZuL0dKO0FFcy9HRTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBRnAvR047QUVtcEhFO0VBQ0UsaURBQUE7QUZocEhKO0FFbXBIRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGanBITjtBRWd0SEU7Ozs7Ozs7RUFob0ZFLHdEQUFBO0VBWUYsc0JBQUE7RUE0bkZFLFNBQUE7QUY1c0hKO0FFc3VIRTtFQUNFLGlEQUFBO0VBQ0EsZUFuQm9CO0VBb0JwQixnQkFuQjJCO0VBb0IzQixtQkFwQjJCO0FGL3NIL0I7QUVzdUhFO0VBQ0UsZUFyQjRCO0VBc0I1QixnQkFwQkE7RUFxQkEsbUJBckJBO0FGOXNISjtBRTJxRkU7RUFDRSxpREFIWTtBRnJxRmhCO0FFMnFGRTtFQUNFLGlEQVBZO0FGanFGaEI7QUU2cUZJO0VBQ0UsZUFBQTtBRjFxRk47QUUyNUVFO0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FGdjVFSjtBRTA1RUk7RUFDRSxlQXlRdUI7QUZqcUY3QjtBRW9xRkk7RUFDRSxlQUFBO0FGbHFGTjtBRTg0RUU7RUFSQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFRRSxjQUFBO0VBQ0Esc0JBQUE7QUYxNEVKO0FFNjRFSTtFQUNFLGVBOFF1QjtBRnpwRjdCO0FFNHBGSTtFQUNFLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGMXBGTjtBRWdxRkk7RUFDRSxlQUFBO0FGN3BGTjtBRTIzRUU7RUFSQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFRRSxjQUFBO0VBQ0Esc0JBQUE7QUZ2M0VKO0FFMDNFSTtFQUNFLGVBNFJ1QjtBRnBwRjdCO0FFdXBGSTtFQUNFLGVBQUE7QUZycEZOO0FFODJFRTtFQVJBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQVFFLGNBQUE7RUFDQSxzQkFBQTtBRjEyRUo7QUU2MkVJO0VBQ0UsZUFpU3VCO0FGNW9GN0I7QUUrb0ZJO0VBQ0UsaURBMUNVO0VBMkNWLGVBQUE7RUFDQSxnQkFBQTtBRjdvRk47QUUyaUNFO0VBRUksaURBQUE7RUFDQSxlQUFBO0FGemlDTjtBRStqQ0U7RUFyRkUsd0RBQUE7RUFZRixzQkFBQTtBRmovQkY7QUU0cUhFO0VBRUksaURBQUE7RUFDQSxlQUFBO0FGMXFITjtBRThxSEU7RUFDRSxjQUFBO0VBRUUsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGNXFITjtBRWcySUU7RUFDRSxpREFBQTtBRjcxSUo7QUVnMklFOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBRjcxSUo7QUUyMUJFO0VBQ0UsZ0JBQUE7RUFJQSxrQkFBQTtBRjMxQko7QUVrMkJJO0VBQ0Usd0JBQUE7QUZoMkJOO0FFbzJCRTtFQUNFLGlCQUFBO0FGajJCSjtBRW8yQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUNBLG1CQUFBO0FGbDJCSjtBRTlZSTtFQW92Q0UsYUFBQTtBRm4yQk47QUU1YUU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUdBLFVBQUE7RUFHQSx3QkFBQTtFQUNBLHFCQUFBO0FGMmFKO0FFempCRTtFQUVFLG9CQUFBO0VBR0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRnlqQko7QUVyakJFO0VBQ0UsZUFBQTtFQUNBLGFBM0I0QjtBRm1sQmhDO0FFdGpCSTtFQUdFLGFBQUE7QUZzakJOO0FFOWlCRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBMUNrQjtBRjJsQnRCO0FFN2lCRTtFQUdFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBcERrQjtFQXdEbEIsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRjJpQko7QUV4aUJFO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsYUFwRTJCO0VBcUUzQixvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMERBQUE7RUFDQSxVQUFBO0FGeWlCSjtBRXZpQkk7RUFDRSxVQUFBO0FGeWlCTjtBRW5pQk07RUFQRjtJQVFJLFlBQUE7RUZzaUJOO0FBQ0Y7QUVsaUJFO0VBQ0UsK0JBckZtQztBRjBuQnZDO0FFN2hCSTtFQUNFLFVBQUE7QUZnaUJOO0FFMWhCRTtFQUNFLGtCQUFBO0VBQ0EsYUExR2tCO0VBK0dsQixhQUFBO0VBSUEsc0JBQUE7RUFHQSxjQUFBO0VBQ0EsZUFBQTtBRm9oQko7QUVoaEJFO0VBQ0UsZUFBQTtFQUtBLFdBQUE7RUFLQSxrQkFBQTtBRjJnQko7QUVsYkU7RUFBMEMsSUFBQTtBRnNiNUM7QUV0YkU7RUFBMEMsSUFBQTtBRnNiNUM7QUVyYkU7RUFBd0MsSUFBQTtBRndiMUM7QUV4YkU7RUFBd0MsSUFBQTtBRndiMUM7QUV0YkU7RUFFRSx1REFBQTtVQUFBLCtDQUFBO0FGdWJKO0FFcGJFO0VBRUUscURBQUE7VUFBQSw2Q0FBQTtBRnNiSjtBRWpiRTtFQUNFLFlBQUE7QUZvYko7QUU5YUU7RUFxQkEseUJBQUE7RUFDQSxrQ0FBQTtFQXBCRSx1QkFBQTtFQUNBLDJCQUFBO0FGa2JKO0FFemFFO0VBU0EseUJBQUE7RUFDQSxrQ0FBQTtFQVJFLG9CQUFBO0FGNmFKO0FHbHJCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBSHFyQkY7QUdsckJBO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FIcXJCRjtBR25yQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUhxckJKO0FHbnJCSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FIcXJCTjtBR2xyQkk7RUFDRSxlQUFBO0FIb3JCTjtBR2pyQkk7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBSG1yQk47QUc3cUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FIZ3JCRjtBRzlxQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FIZ3JCSjtBRzVxQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBSCtxQkY7QUc1cUJBO0VBR0UsYUFBQTtFQUlBLG1CQUFBO0VBR0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUgrcUJGO0FHM3FCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FIOHFCRjtBRzVxQkU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FIOHFCSjtBSXB2Qkk7RURnRUY7SUFTSSx1QkFBQTtFSCtxQko7QUFDRjtBSS90Qkk7RURzQ0Y7SUFhSSx3QkFBQTtFSGdyQko7QUFDRjtBRzdxQkU7RUFDRSxnQkFBQTtBSCtxQko7QUd6cUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUg0cUJGO0FJbHZCSTtFRDhESjtJQVVJLFdBQUE7RUg4cUJGO0FBQ0Y7QUczcUJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUg4cUJGO0FHM3FCQTtFQUNFLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUg4cUJGO0FHM3FCQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUg4cUJGIiwiZmlsZSI6InByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci1yZXBvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsIC5tYXQtdHlwb2dyYXBoeSBoMSB7XG4gIGZvbnQ6IDQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDIsIC5tYXQtdGl0bGUsIC5tYXQtdHlwb2dyYXBoeSBoMiB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAubWF0LXR5cG9ncmFwaHkgaDMge1xuICBmb250OiA0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4ubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgLm1hdC10eXBvZ3JhcGh5IGg0IHtcbiAgZm9udDogNDAwIDE1cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cblxuLm1hdC1oNSwgLm1hdC10eXBvZ3JhcGh5IGg1IHtcbiAgZm9udDogNDAwIGNhbGMoMTRweCAqIDAuODMpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5tYXQtaDYsIC5tYXQtdHlwb2dyYXBoeSBoNiB7XG4gIGZvbnQ6IDQwMCBjYWxjKDE0cHggKiAwLjY3KS8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxMnB4O1xufVxuXG4ubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gIGZvbnQ6IDUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtYm9keSwgLm1hdC1ib2R5LTEsIC5tYXQtdHlwb2dyYXBoeSB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG4ubWF0LWJvZHkgcCwgLm1hdC1ib2R5LTEgcCwgLm1hdC10eXBvZ3JhcGh5IHAge1xuICBtYXJnaW46IDAgMCAxMnB4O1xufVxuXG4ubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICBmb250OiA0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWRpc3BsYXktNCwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00IHtcbiAgZm9udDogMzAwIDExMnB4LzExMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgbWFyZ2luOiAwIDAgNTZweDtcbn1cblxuLm1hdC1kaXNwbGF5LTMsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMyB7XG4gIGZvbnQ6IDQwMCA1NnB4LzU2cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBtYXJnaW46IDAgMCA2NHB4O1xufVxuXG4ubWF0LWRpc3BsYXktMiwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0yIHtcbiAgZm9udDogNDAwIDQ1cHgvNDhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtO1xuICBtYXJnaW46IDAgMCA2NHB4O1xufVxuXG4ubWF0LWRpc3BsYXktMSwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xIHtcbiAgZm9udDogNDAwIDM0cHgvNDBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbn1cblxuLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbi5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUsXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWNoaXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4ubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWNhbGVuZGFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHkge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbi5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLFxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE1MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbn1cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbixcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIGJvcmRlci10b3A6IDAuODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTAuODQzNzVlbTtcbiAgcGFkZGluZy10b3A6IDAuODQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIG1hcmdpbi10b3A6IDAuNjY2NjY2NjY2N2VtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjQzNzVlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNTMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMjgxMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjI1ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMC41NDE2NjY2NjY3ZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSk7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSk7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyZW0pIHNjYWxlKDAuNzUpO1xuICB9XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuNzVlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMDkzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuODQzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZSxcbi5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBtYXJnaW4tdG9wOiAtMC4wNjI1ZW07XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtcGFnaW5hdG9yLFxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc3RlcC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC10b29sYmFyLFxuLm1hdC10b29sYmFyIGgxLFxuLm1hdC10b29sYmFyIGgyLFxuLm1hdC10b29sYmFyIGgzLFxuLm1hdC10b29sYmFyIGg0LFxuLm1hdC10b29sYmFyIGg1LFxuLm1hdC10b29sYmFyIGg2IHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0LXRvb2x0aXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10cmVlLW5vZGUsXG4ubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtcmlwcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1yaXBwbGU6bm90KDplbXB0eSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jZGstb3ZlcmxheS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLCAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDFweDtcbiAgbWluLWhlaWdodDogMXB4O1xufVxuXG4uY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7XG4gIC8qISovXG59XG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7XG4gIC8qISovXG59XG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbn1cblxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDU2cHg7XG59XG5cbi5uZ3gtbXRwLWhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ubmd4LW10cC1oZWFkZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5neC1tdHAtaGVhZGVyID4gZGl2ID4gaW1nLm5neC1tdHAtbmctbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG59XG4ubmd4LW10cC1oZWFkZXIgPiBkaXYgPiAubmd4LW10cC1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubmd4LW10cC1oZWFkZXIgPiBkaXYgLm5neC1tdHAtZ2l0aHViLWxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm5neC1tdHAtdG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG59XG4ubmd4LW10cC10b3AgPiBoMS5uZ3gtbXRwLW1haW4tdGl0bGUge1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDE1cHggNXB4O1xufVxuXG4ubmd4LW10cC1nZW5lcmljLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5neC1tdHAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZW1vLWZvcm0ge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZGVtby1mb3JtID4gKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGVtby1mb3JtID4gKiB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTZweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuZGVtby1mb3JtID4gKiB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICB9XG59XG4uZGVtby1mb3JtIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnRlcm1pbmFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udGVybWluYWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCi4oCi4oCiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHRleHQtaW5kZW50OiA2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnRlcm1pbmFsIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA0NHB4O1xufVxuXG4udGVybWluYWwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59IiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4vL0BpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzc1wiO1xyXG4vL0BpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzXCI7XHJcbi8vQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvcGluay1ibHVlZ3JleS5jc3NcIjtcclxuXHJcbkBpbXBvcnQgJ35AYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nJztcclxuLy8gUGx1cyBpbXBvcnRzIGZvciBvdGhlciBjb21wb25lbnRzIGluIHlvdXIgYXBwLlxyXG5cclxuLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxyXG4vLyBoYXZlIHRvIGxvYWQgYSBzaW5nbGUgY3NzIGZpbGUgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwgaW4geW91ciBhcHAuXHJcbi8vICoqQmUgc3VyZSB0aGF0IHlvdSBvbmx5IGV2ZXIgaW5jbHVkZSB0aGlzIG1peGluIG9uY2UhKipcclxuQGluY2x1ZGUgbWF0LWNvcmUoKTtcclxuXHJcbi8vIERlZmluZSB0aGUgZGVmYXVsdCB0aGVtZSAoc2FtZSBhcyB0aGUgZXhhbXBsZSBhYm92ZSkuXHJcbiRjYW5keS1hcHAtcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC1pbmRpZ28pO1xyXG4kY2FuZHktYXBwLWFjY2VudDogbWF0LXBhbGV0dGUoJG1hdC1waW5rLCBBMjAwLCBBMTAwLCBBNDAwKTtcclxuJGNhbmR5LWFwcC13YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCwgQTIwMCwgQTEwMCwgQTQwMCk7XHJcbiRjYW5keS1hcHAtdGhlbWU6IG1hdC1saWdodC10aGVtZSgkY2FuZHktYXBwLXByaW1hcnksICRjYW5keS1hcHAtYWNjZW50KTtcclxuXHJcblxyXG4vLyBEZWZpbmUgYW4gYWx0ZXJuYXRlIGRhcmsgdGhlbWUuXHJcbiRkYXJrLXByaW1hcnk6IG1hdC1wYWxldHRlKCRtYXQtcGluayk7XHJcbiRkYXJrLWFjY2VudDogbWF0LXBhbGV0dGUoJG1hdC1ibHVlLWdyZXksIEEyMDAsIEExMDAsIEE0MDApO1xyXG4kZGFyay13YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LWRlZXAtb3JhbmdlKTtcclxuJGRhcmstdGhlbWU6IG1hdC1kYXJrLXRoZW1lKCRkYXJrLXByaW1hcnksICRkYXJrLWFjY2VudCwgJGRhcmstd2Fybik7XHJcblxyXG4vLyBJbmNsdWRlIHRoZSBhbHRlcm5hdGl2ZSB0aGVtZSBzdHlsZXMgaW5zaWRlIG9mIGEgYmxvY2sgd2l0aCBhIENTUyBjbGFzcy4gWW91IGNhbiBtYWtlIHRoaXNcclxuLy8gQ1NTIGNsYXNzIHdoYXRldmVyIHlvdSB3YW50LiBJbiB0aGlzIGV4YW1wbGUsIGFueSBjb21wb25lbnQgaW5zaWRlIG9mIGFuIGVsZW1lbnQgd2l0aFxyXG4vLyBgLmRhcmstdGhlbWVgIHdpbGwgYmUgYWZmZWN0ZWQgYnkgdGhpcyBhbHRlcm5hdGUgZGFyayB0aGVtZSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRoZW1lLiIsIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheTogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wOiAxMDAwICFkZWZhdWx0O1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBjZGstb3ZlcmxheSgpIHtcbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICAvLyBEaXNhYmxlIGV2ZW50cyBmcm9tIGJlaW5nIGNhcHR1cmVkIG9uIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIC8vIFRoZSBjb250YWluZXIgc2hvdWxkIGJlIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydC5cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBUaGUgb3ZlcmxheS1jb250YWluZXIgaXMgYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgYWxsIGluZGl2aWR1YWwgb3ZlcmxheXMuXG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIEZvciBjb25uZWN0ZWQtcG9zaXRpb24gb3ZlcmxheXMsIHdlIHNldCBgZGlzcGxheTogZmxleGAgaW5cbiAgICAvLyBvcmRlciB0byBmb3JjZSBgbWF4LXdpZHRoYCBhbmQgYG1heC1oZWlnaHRgIHRvIHRha2UgZWZmZWN0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICAgIC8vIFRPRE8oamVsYm91cm4pOiByZXVzZSBzaWRlbmF2IGZ1bGxzY3JlZW4gbWl4aW4uXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWQgc28gd2UgbmVlZCB0byBmYWxsIGJhY2tcbiAgICAgIC8vIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLiBOb3RlIHRoYXQgd2UgY2FuJ3QgdXNlIHRoZSBgY2RrLWhpZ2gtY29udHJhc3RgXG4gICAgICAvLyBtaXhpbiwgYmVjYXVzZSB3ZSBjYW4ndCBub3JtYWxpemUgdGhlIGltcG9ydCBwYXRoIHRvIHRoZSBfYTExeS5zY3NzIGJvdGggZm9yIHRoZVxuICAgICAgLy8gc291cmNlIGFuZCB3aGVuIHRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZC4gU2VlICMxMDkwOC5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYsICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIE92ZXJsYXkgcGFyZW50IGVsZW1lbnQgdXNlZCB3aXRoIHRoZSBjb25uZWN0ZWQgcG9zaXRpb24gc3RyYXRlZ3kuIFVzZWQgdG8gY29uc3RyYWluIHRoZVxuICAvLyBvdmVybGF5IGVsZW1lbnQncyBzaXplIHRvIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LlxuICAuY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuXG5AbWl4aW4gY2RrLWExMXkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICBAaWYgKCRzZWxlY3Rvci1jb250ZXh0ID09ICcnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGVsc2Uge1xuICAgICN7JHNlbGVjdG9yLWNvbnRleHR9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy8vXG4vLy8gQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vLyAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSwgJGVuY2Fwc3VsYXRpb246ICdhbnknKSB7XG4gIEBpZiAoJHRhcmdldCAhPSAnYWN0aXZlJyBhbmQgJHRhcmdldCAhPSAnYmxhY2stb24td2hpdGUnIGFuZCAkdGFyZ2V0ICE9ICd3aGl0ZS1vbi1ibGFjaycpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgdmFsdWUgXCIjeyR0YXJnZXR9XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwiYWN0aXZlXCIsIFwiYmxhY2stb24td2hpdGVcIiwgYW5kIFwid2hpdGUtb24tYmxhY2tcIic7XG4gIH1cblxuICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdvZmYnIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnYW55Jykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCBlbmNhcHN1bGF0aW9uIFwiI3skZW5jYXBzdWxhdGlvbn1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJvblwiLCBcIm9mZlwiLCBhbmQgXCJhbnlcIic7XG4gIH1cblxuICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGV4dCBoYXMgbXVsdGlwbGUgcGFydHMsIHN1Y2ggYXMgYC5zZWN0aW9uLCAucmVnaW9uYCwganVzdCBkb2luZ1xuICAvLyBgLmNkay1oaWdoLWNvbnRyYXN0LXh4eCAjeyZ9YCB3aWxsIG9ubHkgYXBwbHkgdGhlIHBhcmVudCBzZWxlY3RvciB0byB0aGUgZmlyc3QgcGFydCBvZiB0aGVcbiAgLy8gY29udGV4dC4gV2UgYWRkcmVzcyB0aGlzIGJ5IG5lc3RpbmcgdGhlIHNlbGVjdG9yIGNvbnRleHQgdW5kZXIgLmNkay1oaWdoLWNvbnRyYXN0LlxuICBAYXQtcm9vdCB7XG4gICAgJHNlbGVjdG9yLWNvbnRleHQ6ICN7Jn07XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IHtcbiAgICAgICAgQGluY2x1ZGUgX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIEBpbmNsdWRlIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gU2ltaWxhciB0byB0aGUgYGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmdgIGNsYXNzLCBidXQgb25seSBhcHBsaWVkIG9uIEZpcmVmb3guIFdlIG5lZWRcbiAgLy8gdG8gdXNlIHRoaXMgY2xhc3MsIGJlY2F1c2UgRmlyZWZveCBoYXMgYSBidWcgd2hlcmUgY2hhbmdpbmcgdGhlIGBvdmVyZmxvd2AgYnJlYWtzIHRoZSB1c2VyJ3NcbiAgLy8gYWJpbGl0eSB0byB1bmRvL3JlZG8gd2hhdCB0aGV5IHdlcmUgdHlwaW5nIChzZWUgIzE2NjI5KS4gVGhpcyBjbGFzcyBpcyBvbmx5IHNjb3BlZCB0byBGaXJlZm94LFxuICAvLyBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudHMgdGhlcmUgZG9uJ3Qgc2VlbSB0byBiZSBhZmZlY3RlZCBieSB0aGUgYGhlaWdodDogMGAsIHdoZXJlYXMgb24gb3RoZXJcbiAgLy8gYnJvd3NlcnMgdGhleSBhcmUsIGUuZy4gQ2hyb21lIGRldGVjdHMgbG9uZ2VyIHRleHQgYW5kIElFIGRvZXMndCByZXNpemUgYmFjayB0byBub3JtYWwuXG4gIC8vIElkZW50aWNhbCBpc3N1ZSByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0ODc4NFxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICAgIEBpbmNsdWRlIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1peGluIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2Uge1xuICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSBmb3IgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsIG9yIHRoZSBhbmltYXRpb25zdGFydFxuICAgIC8vIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXMsXG4gICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDpcbiAgICAgICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IG1hdGVyaWFsIGRlc2lnbiB0cmVhdG1lbnRzIHRvIGFueSBlbGVtZW50LlxuLy8gTWVkaWEgcXVlcmllc1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQ2hhbmdlICRtYXQteHNtYWxsIGFuZCAkbWF0LXNtYWxsIHVzYWdlcyB0byByZWx5IG9uIEJyZWFrcG9pbnRPYnNlcnZlcixcbiRtYXQteHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kbWF0LXNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJG1hdC10b2dnbGUtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuLy8gV2lkdGggYW5kIGhlaWdodCBvZiBpbnB1dCB0b2dnbGVzXG4kbWF0LXRvZ2dsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4vLyBFYXNpbmcgQ3VydmVzXG4vLyBUT0RPKGplbGJvdXJuKTogYWxsIG9mIHRoZXNlIG5lZWQgdG8gYmUgcmV2aXNpdGVkXG5cbi8vIFRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXMgdXNlZCBieSBtYXRlcmlhbCBkZXNpZ24uXG4kbWF0LWxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1saW5lYXItaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dDogYWxsICRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1kdXJhdGlvbjogMzAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW46IGFsbCAkc3dpZnQtZWFzZS1pbi1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uOiAkZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb24gIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWxpbmVhci1kdXJhdGlvbjogODBtcyAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyOiBhbGwgJHN3aWZ0LWxpbmVhci1kdXJhdGlvbiAkc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kX21hdC1lbGV2YXRpb24tcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICBAaWYgdHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IHVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC1nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLFxuICAgICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuXG4vLyBDb2xvciBwYWxldHRlcyBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbi8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci9cbi8vXG4vLyBDb250cmFzdCBjb2xvcnMgYXJlIGhhcmQtY29kZWQgYmVjYXVzZSBpdCBpcyB0b28gZGlmZmljdWx0IChwcm9iYWJseSBpbXBvc3NpYmxlKSB0b1xuLy8gY2FsY3VsYXRlIHRoZW0uIFRoZXNlIGNvbnRyYXN0IGNvbG9ycyBhcmUgcHVsbGVkIGZyb20gdGhlIHB1YmxpYyBNYXRlcmlhbCBEZXNpZ24gc3BlYyBzd2F0Y2hlcy5cbi8vIFdoaWxlIHRoZSBjb250cmFzdCBjb2xvcnMgaW4gdGhlIHNwZWMgYXJlIG5vdCBwcmVzY3JpcHRpdmUsIHdlIHVzZSB0aGVtIGZvciBjb252ZW5pZW5jZS5cblxuXG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRkYXJrLXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay04Ny1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGxpZ2h0LXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS04Ny1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTEyLW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTEyLW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stNi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjA2KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS02LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMDYpO1xuXG4kZGFyay1wcmltYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuODcpO1xuJGRhcmstc2Vjb25kYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuNTQpO1xuJGRhcmstZGlzYWJsZWQtdGV4dDogcmdiYShibGFjaywgMC4zOCk7XG4kZGFyay1kaXZpZGVyczogcmdiYShibGFjaywgMC4xMik7XG4kZGFyay1mb2N1c2VkOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRsaWdodC1wcmltYXJ5LXRleHQ6IHdoaXRlO1xuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiByZ2JhKHdoaXRlLCAwLjcpO1xuJGxpZ2h0LWRpc2FibGVkLXRleHQ6IHJnYmEod2hpdGUsIDAuNSk7XG4kbGlnaHQtZGl2aWRlcnM6IHJnYmEod2hpdGUsIDAuMTIpO1xuJGxpZ2h0LWZvY3VzZWQ6IHJnYmEod2hpdGUsIDAuMTIpO1xuXG4kbWF0LXJlZDogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmNDQzMzYsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXBpbms6IChcbiAgNTA6ICNmY2U0ZWMsXG4gIDEwMDogI2Y4YmJkMCxcbiAgMjAwOiAjZjQ4ZmIxLFxuICAzMDA6ICNmMDYyOTIsXG4gIDQwMDogI2VjNDA3YSxcbiAgNTAwOiAjZTkxZTYzLFxuICA2MDA6ICNkODFiNjAsXG4gIDcwMDogI2MyMTg1YixcbiAgODAwOiAjYWQxNDU3LFxuICA5MDA6ICM4ODBlNGYsXG4gIEExMDA6ICNmZjgwYWIsXG4gIEEyMDA6ICNmZjQwODEsXG4gIEE0MDA6ICNmNTAwNTcsXG4gIEE3MDA6ICNjNTExNjIsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1wdXJwbGU6IChcbiAgNTA6ICNmM2U1ZjUsXG4gIDEwMDogI2UxYmVlNyxcbiAgMjAwOiAjY2U5M2Q4LFxuICAzMDA6ICNiYTY4YzgsXG4gIDQwMDogI2FiNDdiYyxcbiAgNTAwOiAjOWMyN2IwLFxuICA2MDA6ICM4ZTI0YWEsXG4gIDcwMDogIzdiMWZhMixcbiAgODAwOiAjNmExYjlhLFxuICA5MDA6ICM0YTE0OGMsXG4gIEExMDA6ICNlYTgwZmMsXG4gIEEyMDA6ICNlMDQwZmIsXG4gIEE0MDA6ICNkNTAwZjksXG4gIEE3MDA6ICNhYTAwZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWRlZXAtcHVycGxlOiAoXG4gIDUwOiAjZWRlN2Y2LFxuICAxMDA6ICNkMWM0ZTksXG4gIDIwMDogI2IzOWRkYixcbiAgMzAwOiAjOTU3NWNkLFxuICA0MDA6ICM3ZTU3YzIsXG4gIDUwMDogIzY3M2FiNyxcbiAgNjAwOiAjNWUzNWIxLFxuICA3MDA6ICM1MTJkYTgsXG4gIDgwMDogIzQ1MjdhMCxcbiAgOTAwOiAjMzExYjkyLFxuICBBMTAwOiAjYjM4OGZmLFxuICBBMjAwOiAjN2M0ZGZmLFxuICBBNDAwOiAjNjUxZmZmLFxuICBBNzAwOiAjNjIwMGVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1pbmRpZ286IChcbiAgNTA6ICNlOGVhZjYsXG4gIDEwMDogI2M1Y2FlOSxcbiAgMjAwOiAjOWZhOGRhLFxuICAzMDA6ICM3OTg2Y2IsXG4gIDQwMDogIzVjNmJjMCxcbiAgNTAwOiAjM2Y1MWI1LFxuICA2MDA6ICMzOTQ5YWIsXG4gIDcwMDogIzMwM2Y5ZixcbiAgODAwOiAjMjgzNTkzLFxuICA5MDA6ICMxYTIzN2UsXG4gIEExMDA6ICM4YzllZmYsXG4gIEEyMDA6ICM1MzZkZmUsXG4gIEE0MDA6ICMzZDVhZmUsXG4gIEE3MDA6ICMzMDRmZmUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJsdWU6IChcbiAgNTA6ICNlM2YyZmQsXG4gIDEwMDogI2JiZGVmYixcbiAgMjAwOiAjOTBjYWY5LFxuICAzMDA6ICM2NGI1ZjYsXG4gIDQwMDogIzQyYTVmNSxcbiAgNTAwOiAjMjE5NmYzLFxuICA2MDA6ICMxZTg4ZTUsXG4gIDcwMDogIzE5NzZkMixcbiAgODAwOiAjMTU2NWMwLFxuICA5MDA6ICMwZDQ3YTEsXG4gIEExMDA6ICM4MmIxZmYsXG4gIEEyMDA6ICM0NDhhZmYsXG4gIEE0MDA6ICMyOTc5ZmYsXG4gIEE3MDA6ICMyOTYyZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ibHVlOiAoXG4gIDUwOiAjZTFmNWZlLFxuICAxMDA6ICNiM2U1ZmMsXG4gIDIwMDogIzgxZDRmYSxcbiAgMzAwOiAjNGZjM2Y3LFxuICA0MDA6ICMyOWI2ZjYsXG4gIDUwMDogIzAzYTlmNCxcbiAgNjAwOiAjMDM5YmU1LFxuICA3MDA6ICMwMjg4ZDEsXG4gIDgwMDogIzAyNzdiZCxcbiAgOTAwOiAjMDE1NzliLFxuICBBMTAwOiAjODBkOGZmLFxuICBBMjAwOiAjNDBjNGZmLFxuICBBNDAwOiAjMDBiMGZmLFxuICBBNzAwOiAjMDA5MWVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWN5YW46IChcbiAgNTA6ICNlMGY3ZmEsXG4gIDEwMDogI2IyZWJmMixcbiAgMjAwOiAjODBkZWVhLFxuICAzMDA6ICM0ZGQwZTEsXG4gIDQwMDogIzI2YzZkYSxcbiAgNTAwOiAjMDBiY2Q0LFxuICA2MDA6ICMwMGFjYzEsXG4gIDcwMDogIzAwOTdhNyxcbiAgODAwOiAjMDA4MzhmLFxuICA5MDA6ICMwMDYwNjQsXG4gIEExMDA6ICM4NGZmZmYsXG4gIEEyMDA6ICMxOGZmZmYsXG4gIEE0MDA6ICMwMGU1ZmYsXG4gIEE3MDA6ICMwMGI4ZDQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC10ZWFsOiAoXG4gIDUwOiAjZTBmMmYxLFxuICAxMDA6ICNiMmRmZGIsXG4gIDIwMDogIzgwY2JjNCxcbiAgMzAwOiAjNGRiNmFjLFxuICA0MDA6ICMyNmE2OWEsXG4gIDUwMDogIzAwOTY4OCxcbiAgNjAwOiAjMDA4OTdiLFxuICA3MDA6ICMwMDc5NmIsXG4gIDgwMDogIzAwNjk1YyxcbiAgOTAwOiAjMDA0ZDQwLFxuICBBMTAwOiAjYTdmZmViLFxuICBBMjAwOiAjNjRmZmRhLFxuICBBNDAwOiAjMWRlOWI2LFxuICBBNzAwOiAjMDBiZmE1LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JlZW46IChcbiAgNTA6ICNlOGY1ZTksXG4gIDEwMDogI2M4ZTZjOSxcbiAgMjAwOiAjYTVkNmE3LFxuICAzMDA6ICM4MWM3ODQsXG4gIDQwMDogIzY2YmI2YSxcbiAgNTAwOiAjNGNhZjUwLFxuICA2MDA6ICM0M2EwNDcsXG4gIDcwMDogIzM4OGUzYyxcbiAgODAwOiAjMmU3ZDMyLFxuICA5MDA6ICMxYjVlMjAsXG4gIEExMDA6ICNiOWY2Y2EsXG4gIEEyMDA6ICM2OWYwYWUsXG4gIEE0MDA6ICMwMGU2NzYsXG4gIEE3MDA6ICMwMGM4NTMsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWdyZWVuOiAoXG4gIDUwOiAjZjFmOGU5LFxuICAxMDA6ICNkY2VkYzgsXG4gIDIwMDogI2M1ZTFhNSxcbiAgMzAwOiAjYWVkNTgxLFxuICA0MDA6ICM5Y2NjNjUsXG4gIDUwMDogIzhiYzM0YSxcbiAgNjAwOiAjN2NiMzQyLFxuICA3MDA6ICM2ODlmMzgsXG4gIDgwMDogIzU1OGIyZixcbiAgOTAwOiAjMzM2OTFlLFxuICBBMTAwOiAjY2NmZjkwLFxuICBBMjAwOiAjYjJmZjU5LFxuICBBNDAwOiAjNzZmZjAzLFxuICBBNzAwOiAjNjRkZDE3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpbWU6IChcbiAgNTA6ICNmOWZiZTcsXG4gIDEwMDogI2YwZjRjMyxcbiAgMjAwOiAjZTZlZTljLFxuICAzMDA6ICNkY2U3NzUsXG4gIDQwMDogI2Q0ZTE1NyxcbiAgNTAwOiAjY2RkYzM5LFxuICA2MDA6ICNjMGNhMzMsXG4gIDcwMDogI2FmYjQyYixcbiAgODAwOiAjOWU5ZDI0LFxuICA5MDA6ICM4Mjc3MTcsXG4gIEExMDA6ICNmNGZmODEsXG4gIEEyMDA6ICNlZWZmNDEsXG4gIEE0MDA6ICNjNmZmMDAsXG4gIEE3MDA6ICNhZWVhMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXllbGxvdzogKFxuICA1MDogI2ZmZmRlNyxcbiAgMTAwOiAjZmZmOWM0LFxuICAyMDA6ICNmZmY1OWQsXG4gIDMwMDogI2ZmZjE3NixcbiAgNDAwOiAjZmZlZTU4LFxuICA1MDA6ICNmZmViM2IsXG4gIDYwMDogI2ZkZDgzNSxcbiAgNzAwOiAjZmJjMDJkLFxuICA4MDA6ICNmOWE4MjUsXG4gIDkwMDogI2Y1N2YxNyxcbiAgQTEwMDogI2ZmZmY4ZCxcbiAgQTIwMDogI2ZmZmYwMCxcbiAgQTQwMDogI2ZmZWEwMCxcbiAgQTcwMDogI2ZmZDYwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1hbWJlcjogKFxuICA1MDogI2ZmZjhlMSxcbiAgMTAwOiAjZmZlY2IzLFxuICAyMDA6ICNmZmUwODIsXG4gIDMwMDogI2ZmZDU0ZixcbiAgNDAwOiAjZmZjYTI4LFxuICA1MDA6ICNmZmMxMDcsXG4gIDYwMDogI2ZmYjMwMCxcbiAgNzAwOiAjZmZhMDAwLFxuICA4MDA6ICNmZjhmMDAsXG4gIDkwMDogI2ZmNmYwMCxcbiAgQTEwMDogI2ZmZTU3ZixcbiAgQTIwMDogI2ZmZDc0MCxcbiAgQTQwMDogI2ZmYzQwMCxcbiAgQTcwMDogI2ZmYWIwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1vcmFuZ2U6IChcbiAgNTA6ICNmZmYzZTAsXG4gIDEwMDogI2ZmZTBiMixcbiAgMjAwOiAjZmZjYzgwLFxuICAzMDA6ICNmZmI3NGQsXG4gIDQwMDogI2ZmYTcyNixcbiAgNTAwOiAjZmY5ODAwLFxuICA2MDA6ICNmYjhjMDAsXG4gIDcwMDogI2Y1N2MwMCxcbiAgODAwOiAjZWY2YzAwLFxuICA5MDA6ICNlNjUxMDAsXG4gIEExMDA6ICNmZmQxODAsXG4gIEEyMDA6ICNmZmFiNDAsXG4gIEE0MDA6ICNmZjkxMDAsXG4gIEE3MDA6ICNmZjZkMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IGJsYWNrLFxuICApXG4pO1xuXG4kbWF0LWRlZXAtb3JhbmdlOiAoXG4gIDUwOiAjZmJlOWU3LFxuICAxMDA6ICNmZmNjYmMsXG4gIDIwMDogI2ZmYWI5MSxcbiAgMzAwOiAjZmY4YTY1LFxuICA0MDA6ICNmZjcwNDMsXG4gIDUwMDogI2ZmNTcyMixcbiAgNjAwOiAjZjQ1MTFlLFxuICA3MDA6ICNlNjRhMTksXG4gIDgwMDogI2Q4NDMxNSxcbiAgOTAwOiAjYmYzNjBjLFxuICBBMTAwOiAjZmY5ZTgwLFxuICBBMjAwOiAjZmY2ZTQwLFxuICBBNDAwOiAjZmYzZDAwLFxuICBBNzAwOiAjZGQyYzAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1icm93bjogKFxuICA1MDogI2VmZWJlOSxcbiAgMTAwOiAjZDdjY2M4LFxuICAyMDA6ICNiY2FhYTQsXG4gIDMwMDogI2ExODg3ZixcbiAgNDAwOiAjOGQ2ZTYzLFxuICA1MDA6ICM3OTU1NDgsXG4gIDYwMDogIzZkNGM0MSxcbiAgNzAwOiAjNWQ0MDM3LFxuICA4MDA6ICM0ZTM0MmUsXG4gIDkwMDogIzNlMjcyMyxcbiAgQTEwMDogI2Q3Y2NjOCxcbiAgQTIwMDogI2JjYWFhNCxcbiAgQTQwMDogIzhkNmU2MyxcbiAgQTcwMDogIzVkNDAzNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmV5OiAoXG4gIDUwOiAjZmFmYWZhLFxuICAxMDA6ICNmNWY1ZjUsXG4gIDIwMDogI2VlZWVlZSxcbiAgMzAwOiAjZTBlMGUwLFxuICA0MDA6ICNiZGJkYmQsXG4gIDUwMDogIzllOWU5ZSxcbiAgNjAwOiAjNzU3NTc1LFxuICA3MDA6ICM2MTYxNjEsXG4gIDgwMDogIzQyNDI0MixcbiAgOTAwOiAjMjEyMTIxLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZWVlZWVlLFxuICBBNDAwOiAjYmRiZGJkLFxuICBBNzAwOiAjNjE2MTYxLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWdyYXk6ICRtYXQtZ3JleTtcblxuJG1hdC1ibHVlLWdyZXk6IChcbiAgNTA6ICNlY2VmZjEsXG4gIDEwMDogI2NmZDhkYyxcbiAgMjAwOiAjYjBiZWM1LFxuICAzMDA6ICM5MGE0YWUsXG4gIDQwMDogIzc4OTA5YyxcbiAgNTAwOiAjNjA3ZDhiLFxuICA2MDA6ICM1NDZlN2EsXG4gIDcwMDogIzQ1NWE2NCxcbiAgODAwOiAjMzc0NzRmLFxuICA5MDA6ICMyNjMyMzgsXG4gIEExMDA6ICNjZmQ4ZGMsXG4gIEEyMDA6ICNiMGJlYzUsXG4gIEE0MDA6ICM3ODkwOWMsXG4gIEE3MDA6ICM0NTVhNjQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtYmx1ZS1ncmF5OiAkbWF0LWJsdWUtZ3JleTtcblxuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDEwMCksXG4gIGJhY2tncm91bmQ6IG1hcF9nZXQoJG1hdC1ncmV5LCA1MCksXG4gIGhvdmVyOiAgICAgIHJnYmEoYmxhY2ssIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICB3aGl0ZSxcbiAgZGlhbG9nOiAgICAgd2hpdGUsXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYShibGFjaywgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IHdoaXRlLFxuICBmb2N1c2VkLWJ1dHRvbjogJGRhcmstZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNDAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdG9vbHRpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuICB0b29sdGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICBibGFjayxcbiAgZGl2aWRlcjogICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYShibGFjaywgMC4yNiksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGRhcmstc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICB0ZXh0OiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1taW46ICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYShibGFjaywgMC4zOCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG5cblxuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwLCAkdGV4dDogJGRlZmF1bHQpIHtcbiAgJHJlc3VsdDogbWFwX21lcmdlKCRiYXNlLXBhbGV0dGUsIChcbiAgICBkZWZhdWx0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlciksXG4gICAgdGV4dDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkdGV4dCksXG5cbiAgICBkZWZhdWx0LWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlcilcbiAgKSk7XG5cbiAgLy8gRm9yIGVhY2ggaHVlIGluIHRoZSBwYWxldHRlLCBhZGQgYSBcIi1jb250cmFzdFwiIGNvbG9yIHRvIHRoZSBtYXAuXG4gIEBlYWNoICRodWUsICRjb2xvciBpbiAkYmFzZS1wYWxldHRlIHtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKFxuICAgICAgJyN7JGh1ZX0tY29udHJhc3QnOiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGh1ZSlcbiAgICApKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuXG4vLyBHZXRzIGEgY29sb3IgZnJvbSBhIHRoZW1lIHBhbGV0dGUgKHRoZSBvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gVGhlIGh1ZSBjYW4gYmUgb25lIG9mIHRoZSBzdGFuZGFyZCB2YWx1ZXMgKDUwMCwgQTQwMCwgZXRjLiksIG9uZSBvZiB0aGUgdGhyZWUgcHJlY29uZmlndXJlZFxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXG4vL1xuLy8gQHBhcmFtICRjb2xvci1tYXAgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcblxuICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgIC8vIElmIHRoZSAkY29sb3IgcmVzb2x2ZWQgdG8gc29tZXRoaW5nIGRpZmZlcmVudCBmcm9tIGEgY29sb3IgKGUuZy4gYSBDU1MgdmFyaWFibGUpLFxuICAgIC8vIHdlIGNhbid0IGFwcGx5IHRoZSBvcGFjaXR5IGFueXdheSBzbyB3ZSByZXR1cm4gdGhlIHZhbHVlIGFzIGlzLCBvdGhlcndpc2UgU2FzcyBjYW5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBvciBvdXRwdXQgc29tZXRoaW5nIGludmFsaWQuXG4gICAgQHJldHVybiAkY29sb3I7XG4gIH1cblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogZmFsc2UsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG5cbiRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk6IDAuMTtcblxuQG1peGluIG1hdC1yaXBwbGUoKSB7XG5cbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvLyBQcm9tb3RlIGNvbnRhaW5lcnMgdGhhdCBoYXZlIHJpcHBsZXMgdG8gYSBuZXcgbGF5ZXIuIFdlIHdhbnQgdG8gdGFyZ2V0IGA6bm90KDplbXB0eSlgLFxuICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhbGwgcmlwcGxlIGNvbnRhaW5lcnMgdG8gaGF2ZSB0aGVpciBvd24gbGF5ZXIgc2luY2UgdGhleSdyZSB1c2VkIGluIGFcbiAgICAvLyBsb3Qgb2YgcGxhY2VzIGFuZCB0aGUgbGF5ZXIgaXMgb25seSByZWxldmFudCB3aGlsZSBhbmltYXRpbmcuIE5vdGUgdGhhdCBpZGVhbGx5IHdlJ2QgdXNlXG4gICAgLy8gdGhlIGBjb250YWluYCBwcm9wZXJ0eSBoZXJlIChzZWUgIzEzMTc1KSwgYmVjYXVzZSBgOmVtcHR5YCBjYW4gYmUgYnJva2VuIGJ5IGhhdmluZyBleHRyYVxuICAgIC8vIHRleHQgaW5zaWRlIHRoZSBlbGVtZW50LCBidXQgaXQgaXNuJ3QgdmVyeSB3ZWxsIHN1cHBvcnRlZCB5ZXQuXG4gICAgJjpub3QoOmVtcHR5KSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbkBtaXhpbiBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwX2dldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvLyBJZiB0aGUgcmlwcGxlIGNvbG9yIGlzIHJlc29sdmVzIHRvIGEgY29sb3IgKnR5cGUqLCB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5LCBvdGhlcndpc2VcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSkgd2UgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb2xvciBhbmQgc2V0dGluZyBhbiBvcGFjaXR5LlxuICAgIEBpZiAodHlwZS1vZigkZm9yZWdyb3VuZC1iYXNlKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtYmFzZTtcbiAgICAgIG9wYWNpdHk6ICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICY6aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSxcbiAgICAmOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gSW4gbXVsdGlwbGUgbW9kZSB0aGVyZSBpcyBhIGNoZWNrYm94IHRvIHNob3cgdGhhdCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICYubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuIEFsc28gbm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYmVsb3cgYC5tYXQtcHJpbWFyeWBcbiAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIHRoZSBjb2xvciB0byBiZSBvdmVyd3JpdHRlbiBpZiB0aGUgY2hlY2tib3ggaXMgaW5zaWRlIGEgcGFyZW50IHRoYXRcbiAgLy8gaGFzIGBtYXQtYWNjZW50YCBhbmQgaXMgcGxhY2VkIGluc2lkZSBhbm90aGVyIHBhcmVudCB0aGF0IGhhcyBgbWF0LXByaW1hcnlgLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICYubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCkge1xuXG4gIEByZXR1cm4gKFxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSxcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LFxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQsXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSxcbiAgICBsZXR0ZXItc3BhY2luZzogJGxldHRlci1zcGFjaW5nXG4gICk7XG59XG5cbi8vIFJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHR5cG9ncmFwaHkgbGV2ZWxzLlxuLy8gRGVmYXVsdHMgY29tZSBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWxcbi8vIE5vdGU6IFRoZSBzcGVjIGRvZXNuJ3QgbWVudGlvbiBsZXR0ZXIgc3BhY2luZy4gVGhlIHZhbHVlcyBoZXJlIGNvbWUgZnJvbVxuLy8gZXllYmFsbGluZyBpdCB1bnRpbCBpdCBsb29rZWQgZXhhY3RseSBsaWtlIHRoZSBzcGVjIGV4YW1wbGVzLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wNWVtKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMmVtKSxcbiAgJGRpc3BsYXktMjogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDQ1cHgsIDQ4cHgsIDQwMCwgJGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbSksXG4gICRkaXNwbGF5LTE6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgzNHB4LCA0MHB4LCA0MDApLFxuICAkaGVhZGxpbmU6ICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjRweCwgMzJweCwgNDAwKSxcbiAgJHRpdGxlOiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDIwcHgsIDMycHgsIDUwMCksXG4gICRzdWJoZWFkaW5nLTI6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNnB4LCAyOHB4LCA0MDApLFxuICAkc3ViaGVhZGluZy0xOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTVweCwgMjRweCwgNDAwKSxcbiAgJGJvZHktMjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDI0cHgsIDUwMCksXG4gICRib2R5LTE6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyMHB4LCA0MDApLFxuICAkY2FwdGlvbjogICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTJweCwgMjBweCwgNDAwKSxcbiAgJGJ1dHRvbjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDE0cHgsIDUwMCksXG4gIC8vIExpbmUtaGVpZ2h0IG11c3QgYmUgdW5pdC1sZXNzIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUuXG4gICRpbnB1dDogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbChpbmhlcml0LCAxLjEyNSwgNDAwKVxuKSB7XG5cbiAgLy8gRGVjbGFyZSBhbiBpbml0aWFsIG1hcCB3aXRoIGFsbCBvZiB0aGUgbGV2ZWxzLlxuICAkY29uZmlnOiAoXG4gICAgZGlzcGxheS00OiAgICAgICRkaXNwbGF5LTQsXG4gICAgZGlzcGxheS0zOiAgICAgICRkaXNwbGF5LTMsXG4gICAgZGlzcGxheS0yOiAgICAgICRkaXNwbGF5LTIsXG4gICAgZGlzcGxheS0xOiAgICAgICRkaXNwbGF5LTEsXG4gICAgaGVhZGxpbmU6ICAgICAgICRoZWFkbGluZSxcbiAgICB0aXRsZTogICAgICAgICAgJHRpdGxlLFxuICAgIHN1YmhlYWRpbmctMjogICAkc3ViaGVhZGluZy0yLFxuICAgIHN1YmhlYWRpbmctMTogICAkc3ViaGVhZGluZy0xLFxuICAgIGJvZHktMjogICAgICAgICAkYm9keS0yLFxuICAgIGJvZHktMTogICAgICAgICAkYm9keS0xLFxuICAgIGNhcHRpb246ICAgICAgICAkY2FwdGlvbixcbiAgICBidXR0b246ICAgICAgICAgJGJ1dHRvbixcbiAgICBpbnB1dDogICAgICAgICAgJGlucHV0LFxuICApO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgbGV2ZWxzIGFuZCBzZXQgdGhlIGBmb250LWZhbWlseWAgb2YgdGhlIG9uZXMgdGhhdCBkb24ndCBoYXZlIG9uZSB0byB0aGUgYmFzZS5cbiAgLy8gTm90ZSB0aGF0IFNhc3MgY2FuJ3QgbW9kaWZ5IG1hcHMgaW4gcGxhY2UsIHdoaWNoIG1lYW5zIHRoYXQgd2UgbmVlZCB0byBtZXJnZSBhbmQgcmUtYXNzaWduLlxuICBAZWFjaCAka2V5LCAkbGV2ZWwgaW4gJGNvbmZpZyB7XG4gICAgQGlmIG1hcC1nZXQoJGxldmVsLCBmb250LWZhbWlseSkgPT0gbnVsbCB7XG4gICAgICAkbmV3LWxldmVsOiBtYXAtbWVyZ2UoJGxldmVsLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xuICAgICAgJGNvbmZpZzogbWFwLW1lcmdlKCRjb25maWcsICgka2V5OiAkbmV3LWxldmVsKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSBiYXNlIGZvbnQgZmFtaWx5IHRvIHRoZSBjb25maWcuXG4gIEByZXR1cm4gbWFwLW1lcmdlKCRjb25maWcsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG59XG5cbi8vIEFkZHMgdGhlIGJhc2UgdHlwb2dyYXBoeSBzdHlsZXMsIGJhc2VkIG9uIGEgY29uZmlnLlxuQG1peGluIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZywgJHNlbGVjdG9yOiAnLm1hdC10eXBvZ3JhcGh5Jykge1xuICAubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAjeyRzZWxlY3Rvcn0gaDEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDIsIC5tYXQtdGl0bGUsICN7JHNlbGVjdG9yfSBoMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsICN7JHNlbGVjdG9yfSBoMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAjeyRzZWxlY3Rvcn0gaDQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAvLyBOb3RlOiB0aGUgc3BlYyBkb2Vzbid0IGhhdmUgYW55dGhpbmcgdGhhdCB3b3VsZCBjb3JyZXNwb25kIHRvIGg1IGFuZCBoNiwgYnV0IHdlIGFkZCB0aGVzZSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuIFRoZSBmb250IHNpemVzIGNvbWUgZnJvbSB0aGUgQ2hyb21lIHVzZXIgYWdlbnQgc3R5bGVzIHdoaWNoIGhhdmUgaDUgYXQgMC44M2VtXG4gIC8vIGFuZCBoNiBhdCAwLjY3ZW0uXG4gIC5tYXQtaDUsICN7JHNlbGVjdG9yfSBoNSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7bWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpfSAqIDAuODMpLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWg2LCAjeyRzZWxlY3Rvcn0gaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjY3KSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgI3skc2VsZWN0b3J9IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICB9XG4gIH1cblxuICAubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBjYXB0aW9uKTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuJG1hdC1iYWRnZS1mb250LXNpemU6IDEycHg7XG4kbWF0LWJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XG4kbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRtYXQtYmFkZ2Utc21hbGwtc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgLSA2O1xuJG1hdC1iYWRnZS1sYXJnZS1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX21hdC1iYWRnZS1zaXplKCRzaXplKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWJvdmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICB0b3A6IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVsb3cge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBib3R0b206IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLW92ZXJsYXAge1xuICAgICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpIHtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKHR5cGUtb2YoJGJhZGdlLWNvbG9yKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCxcbiAgLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAvLyBTZXQgdGhlIGZvbnQgc2l6ZSB0byA3NSUgb2YgdGhlIG9yaWdpbmFsLlxuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAwLjc1O1xuICB9XG5cbiAgLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAyO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG4kX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk6IDAuMTtcblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cblxuICAmW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZS4gSWYgdGhlIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLiBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nXG4vLyBvbiBhIENTUyB2YXJpYWJsZSwgd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCB0ZXh0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUgZWxlbWVudC5cbi8vIElmIHRoZSBjb2xvciB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS5cbi8vIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmcgb24gYSBDU1MgdmFyaWFibGUsXG4vLyB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX21hdC1jaGlwcy1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSwgbWF0LWNvbG9yKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICBAaW5jbHVkZSBfbWF0LWNoaXBzLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkdGhlbWUpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICAkYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRiYWNrZ3JvdW5kLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRvIGJhY2tncm91bmQgdG8gYSBjb2xvciAoZS5nLiBpdCdzIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBmYWRpbmcgdGhlIGNvbnRlbnQgb3V0IHZpYSBgb3BhY2l0eWAuXG4gICAgICBvcGFjaXR5OiAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRjb2xvciwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGNvbG9yIGRpZG4ndCByZXNvbHZlIHRvIGEgY29sb3IgdmFsdWUsIGJ1dCBzb21ldGhpbmcgbGlrZSBhIENTUyB2YXJpYWJsZSwgd2UgY2FuJ3RcbiAgICAgIC8vIGZhZGUgaXQgb3V0IHNvIHdlIGZhbGwgYmFjayB0byByZWR1Y2luZyB0aGUgZWxlbWVudCBvcGFjaXR5LiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZVxuICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgLy8gdG8gaXQgYWxyZWFkeSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pLCB0ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICAmOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIGhvdmVyIG9uIHRvdWNoIGRldmljZXMgc2luY2UgaXQgY2FuIGFwcGVhciBsaWtlIGl0IGlzIHN0dWNrLiBXZSBjYW4ndCB1c2VcbiAgLy8gYEBtZWRpYSAoaG92ZXIpYCBhYm92ZSwgYmVjYXVzZSB0aGUgZGVza3RvcCBzdXBwb3J0IGJyb3dzZXIgc3VwcG9ydCBpc24ndCBncmVhdC5cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBUaGlzIG1peGluIHdpbGwgZW5zdXJlIHRoYXQgbGluZXMgdGhhdCBvdmVyZmxvdyB0aGUgY29udGFpbmVyIHdpbGwgaGlkZSB0aGUgb3ZlcmZsb3cgYW5kXG4vLyB0cnVuY2F0ZSBuZWF0bHkgd2l0aCBhbiBlbGxpcHNpcy5cbkBtaXhpbiBtYXQtdHJ1bmNhdGUtbGluZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8vIE1peGluIHRvIHByb3ZpZGUgYWxsIG1hdC1saW5lIHN0eWxlcywgY2hhbmdpbmcgc2Vjb25kYXJ5IGZvbnQgc2l6ZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSBsaXN0XG4vLyBpcyBpbiBkZW5zZSBtb2RlLlxuQG1peGluIG1hdC1saW5lLWJhc2UoJHNlY29uZGFyeS1mb250LXNpemUpIHtcbiAgLm1hdC1saW5lIHtcbiAgICBAaW5jbHVkZSBtYXQtdHJ1bmNhdGUtbGluZSgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAvLyBhbGwgbGluZXMgYnV0IHRoZSB0b3AgbGluZSBzaG91bGQgaGF2ZSBzbWFsbGVyIHRleHRcbiAgICAmOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNlY29uZGFyeS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gbm9ybWFsaXplcyBkZWZhdWx0IGVsZW1lbnQgc3R5bGVzLCBlLmcuIGZvbnQgd2VpZ2h0IGZvciBoZWFkaW5nIHRleHQuXG5AbWl4aW4gbWF0LW5vcm1hbGl6ZS10ZXh0KCkge1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNlIHN0eWxlcyBmb3IgdGhlIHdyYXBwZXIgYXJvdW5kIG1hdC1saW5lIGVsZW1lbnRzIGluIGEgbGlzdC5cbkBtaXhpbiBtYXQtbGluZS13cmFwcGVyLWJhc2UoKSB7XG4gIEBpbmNsdWRlIG1hdC1ub3JtYWxpemUtdGV4dCgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC8vIE11c3QgcmVtb3ZlIHdyYXBwZXIgd2hlbiBsaW5lcyBhcmUgZW1wdHkgb3IgaXQgdGFrZXMgdXAgaG9yaXpvbnRhbFxuICAvLyBzcGFjZSBhbmQgcHVzaGVzIG90aGVyIGVsZW1lbnRzIHRvIHRoZSByaWdodC5cbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKSB7IH1cblxuQG1peGluIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbiAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtaWNvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbi8vIFJlbmRlcnMgYSBncmFkaWVudCBmb3Igc2hvd2luZyB0aGUgZGFzaGVkIGxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4vLyBVbmxpa2UgdXNpbmcgYSBib3JkZXIsIGEgZ3JhZGllbnQgYWxsb3dzIHVzIHRvIGFkanVzdCB0aGUgc3BhY2luZyBvZiB0aGUgZG90dGVkIGxpbmVcbi8vIHRvIG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbkBtaXhpbiBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICBAcmV0dXJuIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbn1cblxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIHVzZXItc2VsZWN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGN1cnNvci1ncmFiIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuQG1peGluIGN1cnNvci1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZhbHVlKSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5cblxuXG5AbWl4aW4gbWF0LWlucHV0LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAgIEBpbmNsdWRlIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgICB9XG5cbiAgICAvLyBPbiBkYXJrIHRoZW1lcyB3ZSBzZXQgdGhlIG5hdGl2ZSBgc2VsZWN0YCBjb2xvciB0byBzb21lIHNoYWRlIG9mIHdoaXRlLFxuICAgIC8vIGhvd2V2ZXIgdGhlIGNvbG9yIHByb3BhZ2F0ZXMgdG8gYWxsIG9mIHRoZSBgb3B0aW9uYCBlbGVtZW50cywgd2hpY2ggYXJlXG4gICAgLy8gYWx3YXlzIG9uIGEgd2hpdGUgYmFja2dyb3VuZCBpbnNpZGUgdGhlIGRyb3Bkb3duLCBjYXVzaW5nIHRoZW0gdG8gYmxlbmQgaW4uXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3QgY2hhbmdlIGJhY2tncm91bmQgb2YgdGhlIGRyb3Bkb3duLCB3ZSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAgICAvLyByZXNldCB0aGUgY29sb3Igb2YgdGhlIG9wdGlvbnMgdG8gc29tZXRoaW5nIGRhcmsuXG4gICAgQGlmIChtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtJGxpbmUtc3BhY2luZyAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWxpc3QtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWxpc3Qtb3B0aW9uKTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24sXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0sXG4gIC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiB7XG4gICAgJiwgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVuc2UgbGlzdFxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0ge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbWVudS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLCAmOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbiAgLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtOmhvdmVyLFxuICAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciwgLm1hdC1zcGlubmVyIHtcbiAgICBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1yYWRpby1jb2xvcigkcGFsZXR0ZSkge1xuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbiAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbiAgJjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgJi5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICAkb3BhY2l0eTogMC42O1xuICAgICRiYWNrZHJvcC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkLCAkb3BhY2l0eSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrOiBtYXBfZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIENvbG9yIGh1ZXMgYXJlIGJhc2VkIG9uIHRoZSBzcGVjcyB3aGljaCBicmllZmx5IHNob3cgdGhlIGh1ZXMgdGhhdCBhcmUgYXBwbGllZCB0byBhIHN3aXRjaC5cbiAgLy8gVGhlIDIwMTggc3BlY3Mgbm8gbG9uZ2VyIGRlc2NyaWJlIGhvdyBkYXJrIHN3aXRjaGVzIHNob3VsZCBsb29rIGxpa2UuIER1ZSB0byB0aGUgbGFjayBvZlxuICAvLyBpbmZvcm1hdGlvbiBmb3IgZGFyayB0aGVtZWQgc3dpdGNoZXMsIHdlIHBhcnRpYWxseSBrZWVwIHRoZSBvbGQgYmVoYXZpb3IgdGhhdCBpcyBiYXNlZCBvblxuICAvLyB0aGUgcHJldmlvdXMgc3BlY2lmaWNhdGlvbnMuIEZvciB0aGUgY2hlY2tlZCBjb2xvciB3ZSBhbHdheXMgdXNlIHRoZSBgZGVmYXVsdGAgaHVlIGJlY2F1c2VcbiAgLy8gdGhhdCBmb2xsb3dzIE1EQyBhbmQgYWxzbyBtYWtlcyBpdCBlYXNpZXIgZm9yIHBlb3BsZSB0byBjcmVhdGUgYSBjdXN0b20gdGhlbWUgd2l0aG91dCBuZWVkaW5nXG4gIC8vIHRvIHNwZWNpZnkgZWFjaCBodWUgaW5kaXZpZHVhbGx5LlxuICAkdGh1bWItdW5jaGVja2VkLWh1ZTogaWYoJGlzLWRhcmssIDQwMCwgNTApO1xuICAkdGh1bWItY2hlY2tlZC1odWU6IGRlZmF1bHQ7XG5cbiAgJGJhci11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkYWNjZW50LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwcmltYXJ5LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkd2FybiwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpcHBsZS11bmNoZWNrZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5OiAwLjc7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICRvcGFjaXR5OiAwLjI7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdCwgJG9wYWNpdHkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgICRvcGFjaXR5OiAwLjEyO1xuICAgICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsICRvcGFjaXR5KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICAgIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zdGVwLWhlYWRlciB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAkdGFibGUtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICAgICR0ZXh0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgIC8vIEJlY2F1c2UgdGhlIGFycm93IGlzIG1hZGUgdXAgb2YgbXVsdGlwbGUgZWxlbWVudHMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlcixcbiAgICAvLyB3ZSBjYW4ndCB1c2UgdGhlIHNlbWktdHJhc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKHR5cGUtb2YoJHRhYmxlLWJhY2tncm91bmQpID09IGNvbG9yIGFuZCB0eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtaW5rLWJhcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWItbGFiZWwtZm9jdXMoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1jb2xvcigkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG5cblxuJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQ6IDIycHg7XG4kbWF0LXRvb2x0aXAtZm9udC1zaXplOiAxMHB4O1xuJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6ICgkbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1mb250LXNpemUpIC8gMjtcblxuJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB0b29sdGlwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCJAaW1wb3J0IFwiLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcbkBpbXBvcnQgXCIuLi9zY3NzL3RoZW1lc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiA1NnB4O1xyXG59XHJcblxyXG4ubmd4LW10cC1oZWFkZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICA+IGltZy5uZ3gtbXRwLW5nLWxvZ28ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG5cclxuICAgID4gLm5neC1tdHAtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtbXRwLWdpdGh1Yi1sb2dvIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm5neC1tdHAtdG9wIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG5cclxuICA+IGgxLm5neC1tdHAtbWFpbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICBtYXJnaW46IDE1cHggNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5neC1tdHAtZ2VuZXJpYy1zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5neC1tdHAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uZGVtby1mb3JtIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gID4gKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBAaW5jbHVkZSByZXNwb25kLWFib3ZlKHhzKSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE2cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFRlcm1pbmFsXHJcblxyXG4udGVybWluYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcbiAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIHRleHQtaW5kZW50OiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogNDRweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwiJGJyZWFrcG9pbnRzOiAoXHJcbiAgICAgICAgeHhzOiAzNjBweCxcclxuICAgICAgICB4czogNzY4cHgsXHJcbiAgICAgICAgc206IDk5MnB4LFxyXG4gICAgICAgIG1kOiAxMjAwcHgsXHJcbiAgICAgICAgbGc6IDE5MjBweFxyXG4pO1xyXG5cclxuLy9cclxuLy8gIFJFU1BPTkQgQUJPVkVcclxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcclxuXHJcbi8vIGUuZy4gQGluY2x1ZGUgcmVzcG9uZC1hYm92ZShzbSkge31cclxuQG1peGluIHJlc3BvbmQtYWJvdmUoJGJyZWFrcG9pbnQpIHtcclxuXHJcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXHJcbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuXHJcbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtdmFsdWUpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxyXG4gIH0gQGVsc2Uge1xyXG5cclxuICAgIC8vIExvZyBhIHdhcm5pbmcuXHJcbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xyXG4gIH1cclxufVxyXG5cclxuLy9cclxuLy8gIFJFU1BPTkQgQkVMT1dcclxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcclxuXHJcbi8vIGUuZy4gQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge31cclxuQG1peGluIHJlc3BvbmQtYmVsb3coJGJyZWFrcG9pbnQpIHtcclxuXHJcbiAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZXhpc3RzIGluIHRoZSBtYXAuXHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAvLyBHZXQgdGhlIGJyZWFrcG9pbnQgdmFsdWUuXHJcbiAgICAkYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KTtcclxuXHJcbiAgICAvLyBXcml0ZSB0aGUgbWVkaWEgcXVlcnkuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogKCRicmVha3BvaW50LXZhbHVlIC0gMSkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIGJyZWFrcG9pbnQgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwLlxyXG4gIH0gQGVsc2Uge1xyXG5cclxuICAgIC8vIExvZyBhIHdhcm5pbmcuXHJcbiAgICBAd2FybiAnSW52YWxpZCBicmVha3BvaW50OiAjeyRicmVha3BvaW50fS4nO1xyXG4gIH1cclxufVxyXG5cclxuLy9cclxuLy8gIFJFU1BPTkQgQkVUV0VFTlxyXG4vL+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xyXG5cclxuLy8gZS5nLiBAaW5jbHVkZSByZXNwb25kLWJldHdlZW4oc20sIG1kKSB7fVxyXG5AbWl4aW4gcmVzcG9uZC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyKSB7XHJcblxyXG4gIC8vIElmIGJvdGggdGhlIGxvd2VyIGFuZCB1cHBlciBicmVha3BvaW50cyBleGlzdCBpbiB0aGUgbWFwLlxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMuXHJcbiAgICAkbG93ZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XHJcbiAgICAkdXBwZXItYnJlYWtwb2ludDogbWFwLWdldCgkYnJlYWtwb2ludHMsICR1cHBlcik7XHJcblxyXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDogKCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgb25lIG9yIGJvdGggb2YgdGhlIGJyZWFrcG9pbnRzIGRvbid0IGV4aXN0LlxyXG4gIH0gQGVsc2Uge1xyXG5cclxuICAgIC8vIElmIGxvd2VyIGJyZWFrcG9pbnQgaXMgaW52YWxpZC5cclxuICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpID09IGZhbHNlKSB7XHJcblxyXG4gICAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgICBAd2FybiAnWW91ciBsb3dlciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB1cHBlciBicmVha3BvaW50IGlzIGludmFsaWQuXHJcbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cclxuICAgICAgQHdhcm4gJ1lvdXIgdXBwZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skdXBwZXJ9Lic7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: NgxMatTimepickerAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAppModule", function() { return NgxMatTimepickerAppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mat-timepicker */ "../ngx-mat-timepicker/src/public-api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ngx_mat_timepicker_src_lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module */ "../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts");






//

//








class NgxMatTimepickerAppModule {
}
NgxMatTimepickerAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NgxMatTimepickerAppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerAppComponent"]] });
NgxMatTimepickerAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NgxMatTimepickerAppModule_Factory(t) { return new (t || NgxMatTimepickerAppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_6__["NgxMatTimepickerModule"].setLocale("it-IT"),
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgxMatTimepickerAppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerAppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _ngx_mat_timepicker_src_lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NgxMatTimepickerAppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerAppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_6__["NgxMatTimepickerModule"].setLocale("it-IT"),
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerAppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\ngx-mat-timepicker\projects\ngx-mat-timepicker-repo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map