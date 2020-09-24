function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: NgxMatTimepicker12HoursFaceComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepicker12HoursFaceNgxMatTimepicker12HoursFaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepicker12HoursFaceComponent", function () {
      return NgxMatTimepicker12HoursFaceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var _ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts"); //


    var NgxMatTimepicker12HoursFaceComponent = /*#__PURE__*/function (_ngx_mat_timepicker_h) {
      _inherits(NgxMatTimepicker12HoursFaceComponent, _ngx_mat_timepicker_h);

      var _super = _createSuper(NgxMatTimepicker12HoursFaceComponent);

      function NgxMatTimepicker12HoursFaceComponent() {
        _classCallCheck(this, NgxMatTimepicker12HoursFaceComponent);

        return _super.call(this, 12);
      }

      _createClass(NgxMatTimepicker12HoursFaceComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.period && changes.period.currentValue) {
            this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].disableHours(this.hoursList, {
              min: this.minTime,
              max: this.maxTime,
              format: this.format,
              period: this.period
            });
          }
        }
      }]);

      return NgxMatTimepicker12HoursFaceComponent;
    }(_ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerHoursFace"]);

    NgxMatTimepicker12HoursFaceComponent.ɵfac = function NgxMatTimepicker12HoursFaceComponent_Factory(t) {
      return new (t || NgxMatTimepicker12HoursFaceComponent)();
    };

    NgxMatTimepicker12HoursFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepicker12HoursFaceComponent,
      selectors: [["ngx-mat-timepicker-12-hours-face"]],
      inputs: {
        period: "period"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 3,
      consts: [[3, "color", "selectedTime", "faceTime", "timeChange", "timeSelected"]],
      template: function NgxMatTimepicker12HoursFaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-face", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChange", function NgxMatTimepicker12HoursFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) {
            return ctx.hourChange.next($event);
          })("timeSelected", function NgxMatTimepicker12HoursFaceComponent_Template_ngx_mat_timepicker_face_timeSelected_0_listener($event) {
            return ctx.onTimeSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList);
        }
      },
      directives: [_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerFaceComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepicker12HoursFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-12-hours-face",
          templateUrl: "ngx-mat-timepicker-12-hours-face.component.html",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, {
        period: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: NgxMatTimepicker24HoursFaceComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepicker24HoursFaceNgxMatTimepicker24HoursFaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepicker24HoursFaceComponent", function () {
      return NgxMatTimepicker24HoursFaceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var _ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts"); //


    var NgxMatTimepicker24HoursFaceComponent = /*#__PURE__*/function (_ngx_mat_timepicker_h2) {
      _inherits(NgxMatTimepicker24HoursFaceComponent, _ngx_mat_timepicker_h2);

      var _super2 = _createSuper(NgxMatTimepicker24HoursFaceComponent);

      function NgxMatTimepicker24HoursFaceComponent() {
        _classCallCheck(this, NgxMatTimepicker24HoursFaceComponent);

        return _super2.call(this, 24);
      }

      _createClass(NgxMatTimepicker24HoursFaceComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].disableHours(this.hoursList, {
            min: this.minTime,
            max: this.maxTime,
            format: this.format
          });
        }
      }]);

      return NgxMatTimepicker24HoursFaceComponent;
    }(_ngx_mat_timepicker_hours_face_ngx_mat_timepicker_hours_face__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerHoursFace"]);

    NgxMatTimepicker24HoursFaceComponent.ɵfac = function NgxMatTimepicker24HoursFaceComponent_Factory(t) {
      return new (t || NgxMatTimepicker24HoursFaceComponent)();
    };

    NgxMatTimepicker24HoursFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepicker24HoursFaceComponent,
      selectors: [["ngx-mat-timepicker-24-hours-face"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 4,
      consts: [[3, "color", "selectedTime", "faceTime", "format", "timeChange", "timeSelected"]],
      template: function NgxMatTimepicker24HoursFaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-face", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChange", function NgxMatTimepicker24HoursFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) {
            return ctx.hourChange.next($event);
          })("timeSelected", function NgxMatTimepicker24HoursFaceComponent_Template_ngx_mat_timepicker_face_timeSelected_0_listener($event) {
            return ctx.onTimeSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("selectedTime", ctx.selectedHour)("faceTime", ctx.hoursList)("format", ctx.format);
        }
      },
      directives: [_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerFaceComponent"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepicker24HoursFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-24-hours-face",
          templateUrl: "ngx-mat-timepicker-24-hours-face.component.html",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerContentComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerContentNgxMatTimepickerContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerContentComponent", function () {
      return NgxMatTimepickerContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives/append-to-input.directive */
    "../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts");

    function NgxMatTimepickerContentComponent_div_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NgxMatTimepickerContentComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerContentComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxAppendToInput", ctx_r0.inputElement);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      }
    }

    function NgxMatTimepickerContentComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NgxMatTimepickerContentComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerContentComponent_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
      }
    }

    function NgxMatTimepickerContentComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    }

    var _c0 = ["*"];

    var NgxMatTimepickerContentComponent = function NgxMatTimepickerContentComponent() {
      _classCallCheck(this, NgxMatTimepickerContentComponent);
    };

    NgxMatTimepickerContentComponent.ɵfac = function NgxMatTimepickerContentComponent_Factory(t) {
      return new (t || NgxMatTimepickerContentComponent)();
    };

    NgxMatTimepickerContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerContentComponent,
      selectors: [["ngx-mat-timepicker-content"]],
      inputs: {
        appendToInput: "appendToInput",
        inputElement: "inputElement"
      },
      ngContentSelectors: _c0,
      decls: 5,
      vars: 2,
      consts: [[3, "ngxAppendToInput", 4, "ngIf", "ngIfElse"], ["timepickerModal", ""], ["timepickerOutlet", ""], [3, "ngxAppendToInput"], [4, "ngTemplateOutlet"]],
      template: function NgxMatTimepickerContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerContentComponent_div_0_Template, 2, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerContentComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxMatTimepickerContentComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appendToInput)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_2__["AppendToInputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-content",
          templateUrl: "./ngx-mat-timepicker-content.component.html"
        }]
      }], null, {
        appendToInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerDialControlComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerDialControlNgxMatTimepickerDialControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDialControlComponent", function () {
      return NgxMatTimepickerDialControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../pipes/ngx-mat-timepicker-parser.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/ngx-mat-timepicker-autofocus.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/ngx-mat-timepicker-time-localizer.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function NgxMatTimepickerDialControlComponent_input_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerDialControlComponent_input_0_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.time = $event;
        })("input", function NgxMatTimepickerDialControlComponent_input_0_Template_input_input_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.updateTime();
        })("focus", function NgxMatTimepickerDialControlComponent_input_0_Template_input_focus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.saveTimeAndChangeTimeUnit($event, ctx_r6.timeUnit);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "timeLocalizer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.isActive))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, ctx_r0.time, ctx_r0.timeUnit, true))("disabled", ctx_r0.disabled)("ngxMatTimepickerAutofocus", ctx_r0.isActive);
      }
    }

    function NgxMatTimepickerDialControlComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onModelChange($event);
        })("input", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_input_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updateTime();
        })("focus", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_focus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.saveTimeAndChangeTimeUnit($event, ctx_r10.timeUnit);
        })("keydown", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onKeydown($event);
        })("keypress", function NgxMatTimepickerDialControlComponent_ng_template_1_Template_input_keypress_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.changeTimeByKeyboard($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "timeLocalizer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ngxMatTimepickerParser");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r2.isActive))("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 8, ctx_r2.time, ctx_r2.timeUnit), ctx_r2.timeUnit, true))("disabled", ctx_r2.disabled)("ngxMatTimepickerAutofocus", ctx_r2.isActive);
      }
    }

    function retainSelection() {
      this.selectionStart = this.selectionEnd;
    }

    var NgxMatTimepickerDialControlComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerDialControlComponent(_elRef, _timeParserPipe) {
        _classCallCheck(this, NgxMatTimepickerDialControlComponent);

        this._elRef = _elRef;
        this._timeParserPipe = _timeParserPipe;
        this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unfocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NgxMatTimepickerDialControlComponent, [{
        key: "changeTimeByKeyboard",
        value: function changeTimeByKeyboard(e) {
          var _char = String.fromCharCode(e.keyCode);

          if (isTimeDisabledToChange(this.time, _char, this.timeList)) {
            e.preventDefault();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._elRef.nativeElement.querySelector("input").addEventListener("select", retainSelection, false);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._elRef.nativeElement.querySelector("input").removeEventListener("select", retainSelection);
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(e) {
          if (!_utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].isDigit(e)) {
            e.preventDefault();
          } else {
            this._changeTimeByArrow(e.keyCode);
          }
        }
      }, {
        key: "onModelChange",
        value: function onModelChange(value) {
          this.time = this._timeParserPipe.transform(value, this.timeUnit);
        }
      }, {
        key: "saveTimeAndChangeTimeUnit",
        value: function saveTimeAndChangeTimeUnit(event, unit) {
          event.preventDefault();
          this.previousTime = this.time;
          this.timeUnitChanged.next(unit);
          this.focused.next();
        }
      }, {
        key: "updateTime",
        value: function updateTime() {
          if (this._selectedTime) {
            this.timeChanged.next(this._selectedTime);
            this.previousTime = this._selectedTime.time;
          }
        }
      }, {
        key: "_addTime",
        value: function _addTime(amount) {
          return "0".concat(+this.time + amount).substr(-2);
        }
      }, {
        key: "_changeTimeByArrow",
        value: function _changeTimeByArrow(keyCode) {
          var time; // arrow up

          if (keyCode === 38) {
            time = this._addTime(this.minutesGap || 1);
          } // arrow down
          else if (keyCode === 40) {
              time = this._addTime(-1 * (this.minutesGap || 1));
            }

          if (!isTimeUnavailable(time, this.timeList)) {
            this.time = time;
            this.updateTime();
          }
        }
      }, {
        key: "_selectedTime",
        get: function get() {
          var _this = this;

          if (!!this.time) {
            return this.timeList.find(function (t) {
              return t.time === +_this.time;
            });
          }
        }
      }]);

      return NgxMatTimepickerDialControlComponent;
    }();

    NgxMatTimepickerDialControlComponent.ɵfac = function NgxMatTimepickerDialControlComponent_Factory(t) {
      return new (t || NgxMatTimepickerDialControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]));
    };

    NgxMatTimepickerDialControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerDialControlComponent,
      selectors: [["ngx-mat-timepicker-dial-control"]],
      inputs: {
        disabled: "disabled",
        isActive: "isActive",
        isEditable: "isEditable",
        minutesGap: "minutesGap",
        time: "time",
        timeList: "timeList",
        timeUnit: "timeUnit"
      },
      outputs: {
        focused: "focused",
        timeChanged: "timeChanged",
        timeUnitChanged: "timeUnitChanged",
        unfocused: "unfocused"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]])],
      decls: 3,
      vars: 2,
      consts: [["class", "timepicker-dial__control timepicker-dial__item", "readonly", "", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus", 4, "ngIf", "ngIfElse"], ["editableTemplate", ""], ["readonly", "", 1, "timepicker-dial__control", "timepicker-dial__item", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus"], [1, "timepicker-dial__control", "timepicker-dial__item", "timepicker-dial__control_editable", 3, "ngClass", "ngModel", "disabled", "ngxMatTimepickerAutofocus", "ngModelChange", "input", "focus", "keydown", "keypress"]],
      template: function NgxMatTimepickerDialControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerDialControlComponent_input_0_Template, 2, 10, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerDialControlComponent_ng_template_1_Template, 3, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditable)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAutofocusDirective"]],
      pipes: [_pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__["NgxMatTimepickerTimeLocalizerPipe"], _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]],
      styles: [".timepicker-dial__control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  font-size: 50px;\n  width: 60px;\n  padding: 0;\n  border-radius: 3px;\n  text-align: center;\n  color: inherit;\n}\n.timepicker-dial__control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.timepicker-dial__control[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWwtY29udHJvbC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsLWNvbnRyb2xcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wvbmd4LW1hdC10aW1lcGlja2VyLWRpYWwtY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0FDREoiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbC1jb250cm9sL25neC1tYXQtdGltZXBpY2tlci1kaWFsLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRpbWVwaWNrZXItZGlhbF9fY29udHJvbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGluaGVyaXQ7IC8vIEZvcmNlcyBjb2xvciBpbmhlcml0YW5jZSBiZWNhdXNlIGlucHV0IG1heSBoYXZlIHVzZXIgYWdlbnQgc3R5bGVcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcbiIsIi50aW1lcGlja2VyLWRpYWxfX2NvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDUwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4udGltZXBpY2tlci1kaWFsX19jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnRpbWVwaWNrZXItZGlhbF9fY29udHJvbDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDialControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-dial-control",
          templateUrl: "ngx-mat-timepicker-dial-control.component.html",
          styleUrls: ["ngx-mat-timepicker-dial-control.component.scss"],
          providers: [_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        isActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isEditable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minutesGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        time: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        timeList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeUnit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeUnitChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        unfocused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    function isTimeDisabledToChange(currentTime, nextTime, timeList) {
      var isNumber = /\d/.test(nextTime);

      if (isNumber) {
        var time = currentTime + nextTime;
        return isTimeUnavailable(time, timeList);
      }
    }

    function isTimeUnavailable(time, timeList) {
      var selectedTime = timeList.find(function (value) {
        return value.time === +time;
      });
      return !selectedTime || selectedTime && selectedTime.disabled;
    }
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerDialComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerDialNgxMatTimepickerDialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDialComponent", function () {
      return NgxMatTimepickerDialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../tokens/ngx-mat-timepicker-time-locale.token */
    "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! luxon */
    "../../node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-period/ngx-mat-timepicker-period.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts"); //


    function NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-period", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("periodChanged", function NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template_ngx_mat_timepicker_period_periodChanged_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.changePeriod($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedPeriod", ctx_r0.period)("activeTimeUnit", ctx_r0.activeTimeUnit)("maxTime", ctx_r0.maxTime)("minTime", ctx_r0.minTime)("format", ctx_r0.format)("hours", ctx_r0.hours)("minutes", ctx_r0.minutes)("selectedHour", ctx_r0.hour)("meridiems", ctx_r0.meridiems);
      }
    }

    function NgxMatTimepickerDialComponent_div_8_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NgxMatTimepickerDialComponent_div_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " * use arrows (");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u21C5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ") to change the time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "timepicker-dial__hint-container--hidden": a0
      };
    };

    function NgxMatTimepickerDialComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerDialComponent_div_8_ng_container_1_Template, 1, 0, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerDialComponent_div_8_ng_template_2_Template, 5, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r1.isHintVisible));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.editableHintTmpl ? ctx_r1.editableHintTmpl : _r5);
      }
    }

    var NgxMatTimepickerDialComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerDialComponent(_locale) {
        _classCallCheck(this, NgxMatTimepickerDialComponent);

        this._locale = _locale;
        this.hourChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.meridiems = luxon__WEBPACK_IMPORTED_MODULE_4__["Info"].meridiems({
          locale: this._locale
        });
        this.minuteChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"];
        this.timeUnitChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._color = "primary";
      }

      _createClass(NgxMatTimepickerDialComponent, [{
        key: "changeHour",
        value: function changeHour(hour) {
          this.hourChanged.next(hour);
        }
      }, {
        key: "changeMinute",
        value: function changeMinute(minute) {
          this.minuteChanged.next(minute);
        }
      }, {
        key: "changePeriod",
        value: function changePeriod(period) {
          this.periodChanged.next(period);
        }
      }, {
        key: "changeTimeUnit",
        value: function changeTimeUnit(unit) {
          this.timeUnitChanged.next(unit);
        }
      }, {
        key: "hideHint",
        value: function hideHint() {
          this.isHintVisible = false;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var periodChanged = changes.period && changes.period.currentValue;

          if (periodChanged || changes.format && changes.format.currentValue) {
            var hours = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].getHours(this.format);

            this.hours = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].disableHours(hours, {
              min: this.minTime,
              max: this.maxTime,
              format: this.format,
              period: this.period
            });
          }

          if (periodChanged || changes.hour && changes.hour.currentValue) {
            var minutes = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].getMinutes(this.minutesGap);

            this.minutes = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUtils"].disableMinutes(minutes, +this.hour, {
              min: this.minTime,
              max: this.maxTime,
              format: this.format,
              period: this.period
            });
          }
        }
      }, {
        key: "showHint",
        value: function showHint() {
          this.isHintVisible = true;
        }
      }, {
        key: "color",
        set: function set(newValue) {
          this._color = newValue;
        },
        get: function get() {
          return this._color;
        }
      }]);

      return NgxMatTimepickerDialComponent;
    }();

    NgxMatTimepickerDialComponent.ɵfac = function NgxMatTimepickerDialComponent_Factory(t) {
      return new (t || NgxMatTimepickerDialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"]));
    };

    NgxMatTimepickerDialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerDialComponent,
      selectors: [["ngx-mat-timepicker-dial"]],
      inputs: {
        activeTimeUnit: "activeTimeUnit",
        color: "color",
        editableHintTmpl: "editableHintTmpl",
        format: "format",
        hour: "hour",
        hoursOnly: "hoursOnly",
        isEditable: "isEditable",
        maxTime: "maxTime",
        minTime: "minTime",
        minute: "minute",
        minutesGap: "minutesGap",
        period: "period"
      },
      outputs: {
        hourChanged: "hourChanged",
        minuteChanged: "minuteChanged",
        periodChanged: "periodChanged",
        timeUnitChanged: "timeUnitChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 9,
      vars: 14,
      consts: [[1, "timepicker-dial"], [1, "timepicker-dial__container"], [1, "timepicker-dial__time"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "timeUnitChanged", "timeChanged", "focused", "unfocused"], [3, "timeList", "time", "timeUnit", "isActive", "isEditable", "minutesGap", "disabled", "timeUnitChanged", "timeChanged", "focused", "unfocused"], ["class", "timepicker-dial__period", 3, "selectedPeriod", "activeTimeUnit", "maxTime", "minTime", "format", "hours", "minutes", "selectedHour", "meridiems", "periodChanged", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "timepicker-dial__period", 3, "selectedPeriod", "activeTimeUnit", "maxTime", "minTime", "format", "hours", "minutes", "selectedHour", "meridiems", "periodChanged"], [3, "ngClass"], [4, "ngTemplateOutlet"], ["editableHintDefault", ""], [1, "timepicker-dial__hint"]],
      template: function NgxMatTimepickerDialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-mat-timepicker-dial-control", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeUnitChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeUnitChanged_3_listener($event) {
            return ctx.changeTimeUnit($event);
          })("timeChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeChanged_3_listener($event) {
            return ctx.changeHour($event);
          })("focused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_focused_3_listener() {
            return ctx.showHint();
          })("unfocused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_unfocused_3_listener() {
            return ctx.hideHint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-mat-timepicker-dial-control", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeUnitChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeUnitChanged_6_listener($event) {
            return ctx.changeTimeUnit($event);
          })("timeChanged", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_timeChanged_6_listener($event) {
            return ctx.changeMinute($event);
          })("focused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_focused_6_listener() {
            return ctx.showHint();
          })("unfocused", function NgxMatTimepickerDialComponent_Template_ngx_mat_timepicker_dial_control_unfocused_6_listener() {
            return ctx.hideHint();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxMatTimepickerDialComponent_ngx_mat_timepicker_period_7_Template, 1, 9, "ngx-mat-timepicker-period", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxMatTimepickerDialComponent_div_8_Template, 4, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeList", ctx.hours)("time", ctx.hour)("timeUnit", ctx.timeUnit.HOUR)("isActive", ctx.activeTimeUnit === ctx.timeUnit.HOUR)("isEditable", ctx.isEditable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeList", ctx.minutes)("time", ctx.minute)("timeUnit", ctx.timeUnit.MINUTE)("isActive", ctx.activeTimeUnit === ctx.timeUnit.MINUTE)("isEditable", ctx.isEditable)("minutesGap", ctx.minutesGap)("disabled", ctx.hoursOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.format !== 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditable || ctx.editableHintTmpl);
        }
      },
      directives: [_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerDialControlComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerPeriodComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"]],
      styles: [".timepicker-dial[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.timepicker-dial__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.timepicker-dial__time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  line-height: normal;\n  font-size: 50px;\n}\n.timepicker-dial__period[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 10px;\n}\n.timepicker-dial__hint-container--hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.timepicker-dial__hint[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 10px;\n}\n.timepicker-dial__hint[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media (max-device-width: 1023px) and (orientation: landscape) {\n  .timepicker-dial__container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .timepicker-dial__period[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWwvQzpcXGdpdFxcbmd4LW1hdC10aW1lcGlja2VyL3Byb2plY3RzXFxuZ3gtbWF0LXRpbWVwaWNrZXJcXHNyY1xcbGliXFxjb21wb25lbnRzXFxuZ3gtbWF0LXRpbWVwaWNrZXItZGlhbFxcbmd4LW1hdC10aW1lcGlja2VyLWRpYWwuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1kaWFsL25neC1tYXQtdGltZXBpY2tlci1kaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNEUjtBRElJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRlI7QURNUTtFQUNJLGtCQUFBO0FDSlo7QURRSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQ05SO0FEUVE7RUFDSSxlQUFBO0FDTlo7QURZQTtFQUVRO0lBQ0ksc0JBQUE7RUNWVjtFRGFNO0lBQ0ksY0FBQTtFQ1hWO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbC9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGltZXBpY2tlci1kaWFsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGltZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcGVyaW9kIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19oaW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgJi0taGlkZGVuIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19oaW50IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogMTAyM3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgIC50aW1lcGlja2VyLWRpYWwge1xyXG4gICAgICAgICZfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19wZXJpb2Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLnRpbWVwaWNrZXItZGlhbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aW1lcGlja2VyLWRpYWxfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4udGltZXBpY2tlci1kaWFsX190aW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDUwcHg7XG59XG4udGltZXBpY2tlci1kaWFsX19wZXJpb2Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udGltZXBpY2tlci1kaWFsX19oaW50LWNvbnRhaW5lci0taGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRpbWVwaWNrZXItZGlhbF9faGludCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnRpbWVwaWNrZXItZGlhbF9faGludCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjNweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC50aW1lcGlja2VyLWRpYWxfX2NvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAudGltZXBpY2tlci1kaWFsX19wZXJpb2Qge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-dial",
          templateUrl: "ngx-mat-timepicker-dial.component.html",
          styleUrls: ["ngx-mat-timepicker-dial.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"]]
          }]
        }];
      }, {
        activeTimeUnit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editableHintTmpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        hoursOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isEditable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minuteChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        minutesGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        period: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        periodChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        timeUnitChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerDialogComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerDialogNgxMatTimepickerDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDialogComponent", function () {
      return NgxMatTimepickerDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../tokens/ngx-mat-timepicker-time-locale.token */
    "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/ngx-mat-timepicker-adapter */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/ngx-mat-timepicker.service */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts");
    /* harmony import */


    var _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/ngx-mat-timepicker-event.service */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts");
    /* harmony import */


    var _ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-content/ngx-mat-timepicker-content.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../directives/ngx-mat-timepicker-theme.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts");
    /* harmony import */


    var _ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts");
    /* harmony import */


    var _ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts"); //


    function NgxMatTimepickerDialogComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CANCEL ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.color);
      }
    }

    function NgxMatTimepickerDialogComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r3.color);
      }
    }

    function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-24-hours-face", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hourChange", function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.onHourChange($event);
        })("hourSelected", function NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template_ngx_mat_timepicker_24_hours_face_hourSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.onHourSelected($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r8.color)("selectedHour", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r8.selectedHour))("minTime", ctx_r8.data.minTime)("maxTime", ctx_r8.data.maxTime)("format", ctx_r8.data.format);
      }
    }

    function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-12-hours-face", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hourChange", function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onHourChange($event);
        })("hourSelected", function NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template_ngx_mat_timepicker_12_hours_face_hourSelected_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.onHourSelected($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r10.color)("selectedHour", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, ctx_r10.selectedHour))("period", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx_r10.selectedPeriod))("minTime", ctx_r10.data.minTime)("maxTime", ctx_r10.data.maxTime);
      }
    }

    function NgxMatTimepickerDialogComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerDialogComponent_div_14_ngx_mat_timepicker_24_hours_face_1_Template, 2, 7, "ngx-mat-timepicker-24-hours-face", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerDialogComponent_div_14_ng_template_2_Template, 3, 9, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.data.format === 24)("ngIfElse", _r9);
      }
    }

    function NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-minutes-face", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("minuteChange", function NgxMatTimepickerDialogComponent_ngx_mat_timepicker_minutes_face_15_Template_ngx_mat_timepicker_minutes_face_minuteChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onMinuteChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var tmp_2_0 = null;
        var currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 10, ctx_r5.selectedHour)) == null ? null : tmp_2_0.time;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r5.color)("selectedMinute", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 8, ctx_r5.selectedMinute))("selectedHour", currVal_2)("minTime", ctx_r5.data.minTime)("maxTime", ctx_r5.data.maxTime)("format", ctx_r5.data.format)("period", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, ctx_r5.selectedPeriod))("minutesGap", ctx_r5.data.minutesGap);
      }
    }

    function NgxMatTimepickerDialogComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NgxMatTimepickerDialogComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var NgxMatTimepickerDialogComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerDialogComponent(data, _dialogRef, _timepickerSrv, _eventSrv, _locale) {
        _classCallCheck(this, NgxMatTimepickerDialogComponent);

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

      _createClass(NgxMatTimepickerDialogComponent, [{
        key: "changePeriod",
        value: function changePeriod(period) {
          this._timepickerSrv.period = period;

          this._onTimeChange();
        }
      }, {
        key: "changeTimeUnit",
        value: function changeTimeUnit(unit) {
          this.activeTimeUnit = unit;
        }
      }, {
        key: "close",
        value: function close() {
          // this.data.timepickerBaseRef.close();
          this._dialogRef.close();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subsCtrl$.next();

          this._subsCtrl$.complete();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._defineTime();

          this.selectedHour = this._timepickerSrv.selectedHour.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }));
          this.selectedMinute = this._timepickerSrv.selectedMinute.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }));
          this.selectedPeriod = this._timepickerSrv.selectedPeriod.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }));
          this.data.timepickerBaseRef.timeUpdated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._subsCtrl$)).subscribe(this._setDefaultTime.bind(this));
        }
      }, {
        key: "onHourChange",
        value: function onHourChange(hour) {
          this._timepickerSrv.hour = hour;

          this._onTimeChange();
        }
      }, {
        key: "onHourSelected",
        value: function onHourSelected(hour) {
          if (!this.data.hoursOnly) {
            this.changeTimeUnit(_models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"].MINUTE);
          }

          this.data.timepickerBaseRef.hourSelected.next(hour);
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(e) {
          this._eventSrv.dispatchEvent(e);

          e.stopPropagation();
        }
      }, {
        key: "onMinuteChange",
        value: function onMinuteChange(minute) {
          this._timepickerSrv.minute = minute;

          this._onTimeChange();
        }
      }, {
        key: "setTime",
        value: function setTime() {
          this.data.timepickerBaseRef.timeSet.next(this._timepickerSrv.getFullTime(this.data.format));
          this.close();
        }
      }, {
        key: "_defineTime",
        value: function _defineTime() {
          var minTime = this.data.minTime;

          if (minTime && !this.data.time && !this.data.defaultTime) {
            var time = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerAdapter"].fromDateTimeToString(minTime, this.data.format);

            this._setDefaultTime(time);
          }
        }
      }, {
        key: "_onTimeChange",
        value: function _onTimeChange() {
          var time = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerAdapter"].toLocaleTimeString(this._timepickerSrv.getFullTime(this.data.format), {
            locale: this._locale,
            format: this.data.format
          });

          this.data.timepickerBaseRef.timeChanged.emit(time);
        }
      }, {
        key: "_setDefaultTime",
        value: function _setDefaultTime(time) {
          this._timepickerSrv.setDefaultTimeIfAvailable(time, this.data.minTime, this.data.maxTime, this.data.format, this.data.minutesGap);
        }
      }, {
        key: "color",
        set: function set(newValue) {
          this._color = newValue;
        },
        get: function get() {
          return this._color;
        }
      }, {
        key: "defaultTime",
        get: function get() {
          return this._defaultTime;
        },
        set: function set(time) {
          this._defaultTime = time;

          this._setDefaultTime(time);
        }
      }]);

      return NgxMatTimepickerDialogComponent;
    }();

    NgxMatTimepickerDialogComponent.ɵfac = function NgxMatTimepickerDialogComponent_Factory(t) {
      return new (t || NgxMatTimepickerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_8__["NgxMatTimepickerEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"]));
    };

    NgxMatTimepickerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerDialogComponent,
      selectors: [["ngx-mat-timepicker-dialog"]],
      hostBindings: function NgxMatTimepickerDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgxMatTimepickerDialogComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          });
        }
      },
      inputs: {
        color: "color",
        defaultTime: "defaultTime"
      },
      decls: 21,
      vars: 28,
      consts: [["cancelBtnDefault", ""], ["confirmBtnDefault", ""], ["mat-dialog-content", ""], ["cdkTrapFocus", "", "cdkTrapFocusAutoCapture", "", 3, "appendToInput", "inputElement", "ngxMatTimepickerTheme"], [1, "timepicker", 3, "ngClass"], [1, "timepicker-header", 3, "color"], [3, "color", "format", "hour", "minute", "period", "activeTimeUnit", "minTime", "maxTime", "isEditable", "editableHintTmpl", "minutesGap", "hoursOnly", "periodChanged", "timeUnitChanged", "hourChanged", "minuteChanged"], [1, "timepicker__main-content"], [1, "timepicker__body", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange", 4, "ngSwitchCase"], ["mat-dialog-actions", ""], [3, "click"], [4, "ngTemplateOutlet"], ["mat-button", "", 3, "color"], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected", 4, "ngIf", "ngIfElse"], ["ampmHours", ""], [3, "color", "selectedHour", "minTime", "maxTime", "format", "hourChange", "hourSelected"], [3, "color", "selectedHour", "period", "minTime", "maxTime", "hourChange", "hourSelected"], [3, "color", "selectedMinute", "selectedHour", "minTime", "maxTime", "format", "period", "minutesGap", "minuteChange"]],
      template: function NgxMatTimepickerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxMatTimepickerDialogComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerDialogComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-mat-timepicker-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngx-mat-timepicker-dial", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("periodChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_periodChanged_8_listener($event) {
            return ctx.changePeriod($event);
          })("timeUnitChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_timeUnitChanged_8_listener($event) {
            return ctx.changeTimeUnit($event);
          })("hourChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_hourChanged_8_listener($event) {
            return ctx.onHourChange($event);
          })("minuteChanged", function NgxMatTimepickerDialogComponent_Template_ngx_mat_timepicker_dial_minuteChanged_8_listener($event) {
            return ctx.onMinuteChange($event);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerDialogComponent_Template_div_click_17_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NgxMatTimepickerDialogComponent_ng_container_18_Template, 1, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerDialogComponent_Template_div_click_19_listener() {
            return ctx.setTime();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NgxMatTimepickerDialogComponent_ng_container_20_Template, 1, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var tmp_7_0 = null;
          var currVal_7 = (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 22, ctx.selectedHour)) == null ? null : tmp_7_0.time;
          var tmp_8_0 = null;
          var currVal_8 = (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 24, ctx.selectedMinute)) == null ? null : tmp_8_0.time;

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
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_9__["NgxMatTimepickerContentComponent"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["CdkTrapFocus"], _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerThemeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerDialComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgSwitchCase"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgTemplateOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepicker24HoursFaceComponent"], _ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepicker12HoursFaceComponent"], _ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_18__["NgxMatTimepickerMinutesFaceComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]],
      styles: ["div.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container {\n  padding-top: 0;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container .mat-dialog-content {\n  padding: 0;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container .mat-dialog-content mat-toolbar.timepicker-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container .mat-dialog-content .clock-face {\n  margin: 16px;\n}\ndiv.ngx-mat-timepicker-dialog > mat-dialog-container.mat-dialog-container div[mat-dialog-actions] {\n  justify-content: flex-end;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZy9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsb2dcXG5neC1tYXQtdGltZXBpY2tlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1kaWFsb2cvbmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FERU07RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER007RUFDRSxZQUFBO0FDRFI7QURLSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0hOIiwiZmlsZSI6InByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZy9uZ3gtbWF0LXRpbWVwaWNrZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm5neC1tYXQtdGltZXBpY2tlci1kaWFsb2cge1xyXG4gID4gbWF0LWRpYWxvZy1jb250YWluZXIubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBtYXQtdG9vbGJhci50aW1lcGlja2VyLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvY2stZmFjZSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGl2W21hdC1kaWFsb2ctYWN0aW9uc10ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJkaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5kaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuZGl2Lm5neC1tYXQtdGltZXBpY2tlci1kaWFsb2cgPiBtYXQtZGlhbG9nLWNvbnRhaW5lci5tYXQtZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250ZW50IG1hdC10b29sYmFyLnRpbWVwaWNrZXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5kaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIC5tYXQtZGlhbG9nLWNvbnRlbnQgLmNsb2NrLWZhY2Uge1xuICBtYXJnaW46IDE2cHg7XG59XG5kaXYubmd4LW1hdC10aW1lcGlja2VyLWRpYWxvZyA+IG1hdC1kaWFsb2ctY29udGFpbmVyLm1hdC1kaWFsb2ctY29udGFpbmVyIGRpdlttYXQtZGlhbG9nLWFjdGlvbnNdIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-dialog",
          styleUrls: ["./ngx-mat-timepicker-dialog.component.scss"],
          templateUrl: "./ngx-mat-timepicker-dialog.component.html",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerService"]
        }, {
          type: _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_8__["NgxMatTimepickerEventService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_TIMEPICKER_LOCALE"]]
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["keydown", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerFaceComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerFaceNgxMatTimepickerFaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFaceComponent", function () {
      return NgxMatTimepickerFaceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pipes/ngx-mat-timepicker-active-hour.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/ngx-mat-timepicker-time-localizer.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/ngx-mat-timepicker-active-minute.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/ngx-mat-timepicker-minutes-formatter.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts");

    var _c0 = ["clockFace"];
    var _c1 = ["clockHand"];

    var _c2 = function _c2(a0) {
      return {
        "transform": a0
      };
    };

    function NgxMatTimepickerFaceComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "activeHour");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "timeLocalizer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var time_r8 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 4, time_r8.time, ctx_r1.selectedTime == null ? null : ctx_r1.selectedTime.time, ctx_r1.isClockFaceDisabled) ? ctx_r1.color : undefined)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, "rotateZ(-" + time_r8.angle + "deg)"))("disabled", time_r8.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, time_r8.time, ctx_r1.timeUnit.HOUR), " ");
      }
    }

    function NgxMatTimepickerFaceComponent_div_4_div_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngTemplateOutlet", "hourButton; context: {$implicit: time}"]);
      }
    }

    var _c3 = function _c3(a0) {
      return {
        $implicit: a0
      };
    };

    function NgxMatTimepickerFaceComponent_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_1_1_Template, 1, 0, undefined, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var time_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, "rotateZ(" + time_r11.angle + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, time_r11));
      }
    }

    function NgxMatTimepickerFaceComponent_div_4_div_3_div_1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngTemplateOutlet", "hourButton; context: {$implicit: time}"]);
      }
    }

    function NgxMatTimepickerFaceComponent_div_4_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_3_div_1_1_Template, 1, 0, undefined, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var time_r14 = ctx.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", "calc(50% - " + ctx_r13.innerClockFaceSize + "px)")("height", ctx_r13.innerClockFaceSize, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, "rotateZ(" + time_r14.angle + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, time_r14));
      }
    }

    function NgxMatTimepickerFaceComponent_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_3_div_1_Template, 2, 11, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx_r10.faceTime, 12, 24))("ngForTrackBy", ctx_r10.trackByTime);
      }
    }

    function NgxMatTimepickerFaceComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_div_4_div_1_Template, 2, 7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxMatTimepickerFaceComponent_div_4_div_3_Template, 3, 6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 3, ctx_r3.faceTime, 0, 12))("ngForTrackBy", ctx_r3.trackByTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.faceTime.length > 12);
      }
    }

    function NgxMatTimepickerFaceComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r5.color);
      }
    }

    function NgxMatTimepickerFaceComponent_ng_template_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "activeMinute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "timeLocalizer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "minutesFormatter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var time_r17 = ctx.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, "rotateZ(" + time_r17.angle + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableRipple", time_r17.time % ctx_r16.minutesGap !== 0)("color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 5, time_r17.time, ctx_r16.selectedTime == null ? null : ctx_r16.selectedTime.time, ctx_r16.minutesGap, ctx_r16.isClockFaceDisabled) ? ctx_r16.color : undefined)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, "rotateZ(-" + time_r17.angle + "deg)"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 13, time_r17.time, ctx_r16.minutesGap), ctx_r16.timeUnit.MINUTE), " ");
      }
    }

    function NgxMatTimepickerFaceComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFaceComponent_ng_template_9_div_1_Template, 6, 20, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.faceTime)("ngForTrackBy", ctx_r7.trackByTime);
      }
    }

    var _c4 = ["*", "*"];

    var _c5 = function _c5(a0) {
      return {
        "clock-face__clock-hand_minute": a0
      };
    };

    function roundAngle(angle, step) {
      return Math.round(angle / step) * step;
    }

    function countAngleByCords(x0, y0, x, y, currentAngle) {
      if (y > y0 && x >= x0) {
        // II quarter
        return 180 - currentAngle;
      } else if (y > y0 && x < x0) {
        // III quarter
        return 180 + currentAngle;
      } else if (y < y0 && x < x0) {
        // IV quarter
        return 360 - currentAngle;
      } else {
        // I quarter
        return currentAngle;
      }
    }

    var CLOCK_HAND_STYLES = {
      small: {
        height: "75px",
        top: "calc(50% - 75px)"
      },
      large: {
        height: "103px",
        top: "calc(50% - 103px)"
      }
    };

    var NgxMatTimepickerFaceComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerFaceComponent() {
        _classCallCheck(this, NgxMatTimepickerFaceComponent);

        this.color = "primary";
        this.innerClockFaceSize = 85;
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"];
      }

      _createClass(NgxMatTimepickerFaceComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._setClockHandPosition();

          this._addTouchEvents();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this2 = this;

          var faceTimeChanges = changes.faceTime;
          var selectedTimeChanges = changes.selectedTime;

          if (faceTimeChanges && faceTimeChanges.currentValue && selectedTimeChanges && selectedTimeChanges.currentValue) {
            /* Set time according to passed an input value */
            this.selectedTime = this.faceTime.find(function (time) {
              return time.time === _this2.selectedTime.time;
            });
          }

          if (selectedTimeChanges && selectedTimeChanges.currentValue) {
            this._setClockHandPosition();
          }

          if (faceTimeChanges && faceTimeChanges.currentValue) {
            // To avoid an error ExpressionChangedAfterItHasBeenCheckedError
            setTimeout(function () {
              return _this2._selectAvailableTime();
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._removeTouchEvents();
        }
      }, {
        key: "onMousedown",
        value: function onMousedown(e) {
          e.preventDefault();
          this._isStarted = true;
        }
      }, {
        key: "onMouseup",
        value: function onMouseup(e) {
          e.preventDefault();
          this._isStarted = false;
        }
      }, {
        key: "selectTime",
        value: function selectTime(e) {
          if (!this._isStarted && e instanceof MouseEvent && e.type !== "click") {
            return;
          }

          var clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
          /* Get x0 and y0 of the circle */

          var centerX = clockFaceCords.left + clockFaceCords.width / 2;
          var centerY = clockFaceCords.top + clockFaceCords.height / 2;
          /* Counting the arctangent and convert it to from radian to deg */

          var arctangent = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
          /* Get angle according to quadrant */

          var circleAngle = countAngleByCords(centerX, centerY, e.clientX, e.clientY, arctangent);
          /* Check if selected time from the inner clock face (24 hours format only) */

          var isInnerClockChosen = this.format && this._isInnerClockFace(centerX, centerY, e.clientX, e.clientY);
          /* Round angle according to angle step */


          var angleStep = this.unit === _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"].MINUTE ? 6 * (this.minutesGap || 1) : 30;
          var roundedAngle = roundAngle(circleAngle, angleStep);
          var angle = (roundedAngle || 360) + (isInnerClockChosen ? 360 : 0);
          var selectedTime = this.faceTime.find(function (val) {
            return val.angle === angle;
          });

          if (selectedTime && !selectedTime.disabled) {
            this.timeChange.next(selectedTime);
            /* To let know whether user ended interaction with clock face */

            if (!this._isStarted) {
              this.timeSelected.next(selectedTime.time);
            }
          }
        }
      }, {
        key: "trackByTime",
        value: function trackByTime(_item_, time) {
          return time.time;
        }
      }, {
        key: "_addTouchEvents",
        value: function _addTouchEvents() {
          this._touchStartHandler = this.onMousedown.bind(this);
          this._touchEndHandler = this.onMouseup.bind(this);
          this.clockFace.nativeElement.addEventListener("touchstart", this._touchStartHandler);
          this.clockFace.nativeElement.addEventListener("touchend", this._touchEndHandler);
        }
      }, {
        key: "_decreaseClockHand",
        value: function _decreaseClockHand() {
          this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.small.height;
          this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.small.top;
        }
      }, {
        key: "_increaseClockHand",
        value: function _increaseClockHand() {
          this.clockHand.nativeElement.style.height = CLOCK_HAND_STYLES.large.height;
          this.clockHand.nativeElement.style.top = CLOCK_HAND_STYLES.large.top;
        }
      }, {
        key: "_isInnerClockFace",
        value: function _isInnerClockFace(x0, y0, x, y) {
          /* Detect whether time from the inner clock face or not (24 format only) */
          return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < this.innerClockFaceSize;
        }
      }, {
        key: "_removeTouchEvents",
        value: function _removeTouchEvents() {
          this.clockFace.nativeElement.removeEventListener("touchstart", this._touchStartHandler);
          this.clockFace.nativeElement.removeEventListener("touchend", this._touchEndHandler);
        }
      }, {
        key: "_selectAvailableTime",
        value: function _selectAvailableTime() {
          var _this3 = this;

          var currentTime = this.faceTime.find(function (time) {
            return _this3.selectedTime.time === time.time;
          });
          this.isClockFaceDisabled = this.faceTime.every(function (time) {
            return time.disabled;
          });

          if (currentTime && currentTime.disabled && !this.isClockFaceDisabled) {
            var availableTime = this.faceTime.find(function (time) {
              return !time.disabled;
            });
            this.timeChange.next(availableTime);
          }
        }
      }, {
        key: "_setClockHandPosition",
        value: function _setClockHandPosition() {
          if (this.format === 24) {
            if (this.selectedTime.time > 12 || this.selectedTime.time === 0) {
              this._decreaseClockHand();
            } else {
              this._increaseClockHand();
            }
          }

          this.clockHand.nativeElement.style.transform = "rotate(".concat(this.selectedTime.angle, "deg)");
        }
      }]);

      return NgxMatTimepickerFaceComponent;
    }();

    NgxMatTimepickerFaceComponent.ɵfac = function NgxMatTimepickerFaceComponent_Factory(t) {
      return new (t || NgxMatTimepickerFaceComponent)();
    };

    NgxMatTimepickerFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerFaceComponent,
      selectors: [["ngx-mat-timepicker-face"]],
      viewQuery: function NgxMatTimepickerFaceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clockFace = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clockHand = _t.first);
        }
      },
      hostBindings: function NgxMatTimepickerFaceComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgxMatTimepickerFaceComponent_mousedown_HostBindingHandler($event) {
            return ctx.onMousedown($event);
          })("mouseup", function NgxMatTimepickerFaceComponent_mouseup_HostBindingHandler($event) {
            return ctx.onMouseup($event);
          })("click", function NgxMatTimepickerFaceComponent_click_HostBindingHandler($event) {
            return ctx.selectTime($event);
          })("touchmove", function NgxMatTimepickerFaceComponent_touchmove_HostBindingHandler($event) {
            return ctx.selectTime($event.changedTouches[0]);
          })("touchend", function NgxMatTimepickerFaceComponent_touchend_HostBindingHandler($event) {
            return ctx.selectTime($event.changedTouches[0]);
          })("mousemove", function NgxMatTimepickerFaceComponent_mousemove_HostBindingHandler($event) {
            return ctx.selectTime($event);
          });
        }
      },
      inputs: {
        color: "color",
        faceTime: "faceTime",
        format: "format",
        minutesGap: "minutesGap",
        selectedTime: "selectedTime",
        unit: "unit"
      },
      outputs: {
        timeChange: "timeChange",
        timeSelected: "timeSelected"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 11,
      vars: 9,
      consts: [["hourButton", ""], [1, "clock-face"], ["clockFace", ""], ["class", "clock-face__container", 4, "ngIf", "ngIfElse"], [1, "clock-face__clock-hand", 3, "color", "ngClass", "hidden"], ["clockHand", ""], ["mat-mini-fab", "", 3, "color", 4, "ngIf"], [1, "clock-face__center", 3, "color"], ["minutesFace", ""], ["mat-mini-fab", "", 1, "mat-elevation-z0", 3, "color", "ngStyle", "disabled"], [1, "clock-face__container"], ["class", "clock-face__number clock-face__number--outer", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "clock-face__inner", 4, "ngIf"], [1, "clock-face__number", "clock-face__number--outer", 3, "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "clock-face__inner"], ["class", "clock-face__number clock-face__number--inner", 3, "top", "ngStyle", "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "clock-face__number", "clock-face__number--inner", 3, "ngStyle"], ["mat-mini-fab", "", 3, "color"], [1, "clock-face__clock-hand_minute_dot"], ["mat-mini-fab", "", 1, "mat-elevation-z0", 3, "disableRipple", "color", "ngStyle"]],
      template: function NgxMatTimepickerFaceComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit !== ctx.timeUnit.MINUTE)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c5, ctx.unit === ctx.timeUnit.MINUTE))("hidden", ctx.isClockFaceDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unit === ctx.timeUnit.MINUTE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      pipes: [_pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerActiveHourPipe"], _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_6__["NgxMatTimepickerTimeLocalizerPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerActiveMinutePipe"], _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__["NgxMatTimepickerMinutesFormatterPipe"]],
      styles: [".clock-face[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 290px;\n  border-radius: 50%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: rgba(200, 200, 200, 0.5) !important;\n}\n.clock-face__inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.clock-face[_ngcontent-%COMP%]   [mat-mini-fab][_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.clock-face[_ngcontent-%COMP%]   [mat-mini-fab][_ngcontent-%COMP%]:not(.mat-primary):not(.mat-accent):not(.mat-warn) {\n  background: transparent;\n}\n.clock-face__container[_ngcontent-%COMP%] {\n  margin-left: -2px;\n}\n.clock-face__number[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: 25px 100%;\n  width: 50px;\n  text-align: center;\n  z-index: 2;\n  top: calc(50% - 125px);\n  left: calc(50% - 25px);\n}\n.clock-face__number--outer[_ngcontent-%COMP%] {\n  height: calc(290px / 2 - 20px);\n}\n.clock-face__number--outer[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.clock-face__number--inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.clock-face__clock-hand[_ngcontent-%COMP%] {\n  height: 103px;\n  width: 2px;\n  padding: 0;\n  transform-origin: 1px 100%;\n  position: absolute;\n  top: calc(50% - 103px);\n  z-index: 1;\n}\n.clock-face__center[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  position: absolute;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  margin: -4px;\n}\n.clock-face__clock-hand_minute[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -22px;\n  left: calc(50% - 20px);\n  box-sizing: content-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.clock-face__clock-hand_minute[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   .clock-face__clock-hand_minute_dot[_ngcontent-%COMP%] {\n  display: block;\n  width: 4px;\n  height: 4px;\n  background: #FFF;\n  border-radius: 50%;\n}\n@media (max-device-width: 1023px) and (orientation: landscape) {\n  .clock-face[_ngcontent-%COMP%] {\n    width: 225px;\n    height: 225px;\n    padding: 5px;\n  }\n\n  .clock-face__number--outer[_ngcontent-%COMP%] {\n    height: calc(225px / 2 - 5px);\n  }\n\n  .clock-face__clock-hand_minute[_ngcontent-%COMP%]:before {\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWZhY2UvQzpcXGdpdFxcbmd4LW1hdC10aW1lcGlja2VyL3Byb2plY3RzXFxuZ3gtbWF0LXRpbWVwaWNrZXJcXHNyY1xcbGliXFxjb21wb25lbnRzXFxuZ3gtbWF0LXRpbWVwaWNrZXItZmFjZVxcbmd4LW1hdC10aW1lcGlja2VyLWZhY2UuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1mYWNlL25neC1tYXQtdGltZXBpY2tlci1mYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0FDQUo7QURHRTtFQUNFLHVCQUFBO0FDREo7QURLQTtFQUNFLGlCQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0ZGO0FESUU7RUFDRSw4QkFBQTtBQ0ZKO0FESUk7RUFDRSxlQUFBO0FDRk47QURRSTtFQUNFLGVBQUE7QUNOTjtBRFlBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ1RGO0FEWUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDVEY7QURZQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1RGO0FEV0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVEo7QURhQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDVkY7O0VEYUU7SUFDRSw2QkFBQTtFQ1ZKOztFRGNBO0lBQ0UsTUFBQTtFQ1hGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtbWF0LXRpbWVwaWNrZXItZmFjZS9uZ3gtbWF0LXRpbWVwaWNrZXItZmFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9jay1mYWNlIHtcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KSAhaW1wb3J0YW50O1xyXG5cclxuICAmX19pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBbbWF0LW1pbmktZmFiXSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgW21hdC1taW5pLWZhYl06bm90KC5tYXQtcHJpbWFyeSk6bm90KC5tYXQtYWNjZW50KTpub3QoLm1hdC13YXJuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbi5jbG9jay1mYWNlX19jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG59XHJcblxyXG4uY2xvY2stZmFjZV9fbnVtYmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjVweCAxMDAlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcclxuXHJcbiAgJi0tb3V0ZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDI5MHB4IC8gMiAtIDIwcHgpO1xyXG5cclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgLy9jb2xvcjogJGNsb2NrLWZhY2UtdGltZS1pbmFjdGl2ZS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLWlubmVyIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLy9jb2xvcjogJGNsb2NrLWZhY2UtaW5uZXItdGltZS1pbmFjdGl2ZS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jbG9jay1mYWNlX19jbG9jay1oYW5kIHtcclxuICBoZWlnaHQ6IDEwM3B4O1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHggMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwM3B4KTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2xvY2stZmFjZV9fY2VudGVyIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luOiAtNHB4O1xyXG59XHJcblxyXG4uY2xvY2stZmFjZV9fY2xvY2staGFuZF9taW51dGUgPiBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuY2xvY2stZmFjZV9fY2xvY2staGFuZF9taW51dGVfZG90IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogMTAyM3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAuY2xvY2stZmFjZSB7XHJcbiAgICB3aWR0aDogMjI1cHg7XHJcbiAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAuY2xvY2stZmFjZV9fbnVtYmVyIHtcclxuICAgICYtLW91dGVyIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDIyNXB4IC8gMiAtIDVweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2xvY2stZmFjZV9fY2xvY2staGFuZF9taW51dGU6YmVmb3JlIHtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuIiwiLmNsb2NrLWZhY2Uge1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogMjkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpICFpbXBvcnRhbnQ7XG59XG4uY2xvY2stZmFjZV9faW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jbG9jay1mYWNlIFttYXQtbWluaS1mYWJdIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jbG9jay1mYWNlIFttYXQtbWluaS1mYWJdOm5vdCgubWF0LXByaW1hcnkpOm5vdCgubWF0LWFjY2VudCk6bm90KC5tYXQtd2Fybikge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNsb2NrLWZhY2VfX2NvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuXG4uY2xvY2stZmFjZV9fbnVtYmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAyNXB4IDEwMCU7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG59XG4uY2xvY2stZmFjZV9fbnVtYmVyLS1vdXRlciB7XG4gIGhlaWdodDogY2FsYygyOTBweCAvIDIgLSAyMHB4KTtcbn1cbi5jbG9jay1mYWNlX19udW1iZXItLW91dGVyID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jbG9jay1mYWNlX19udW1iZXItLWlubmVyID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNsb2NrLWZhY2VfX2Nsb2NrLWhhbmQge1xuICBoZWlnaHQ6IDEwM3B4O1xuICB3aWR0aDogMnB4O1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxcHggMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTAzcHgpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2xvY2stZmFjZV9fY2VudGVyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC00cHg7XG59XG5cbi5jbG9jay1mYWNlX19jbG9jay1oYW5kX21pbnV0ZSA+IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjJweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNsb2NrLWZhY2VfX2Nsb2NrLWhhbmRfbWludXRlID4gYnV0dG9uIC5jbG9jay1mYWNlX19jbG9jay1oYW5kX21pbnV0ZV9kb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIChtYXgtZGV2aWNlLXdpZHRoOiAxMDIzcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuY2xvY2stZmFjZSB7XG4gICAgd2lkdGg6IDIyNXB4O1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmNsb2NrLWZhY2VfX251bWJlci0tb3V0ZXIge1xuICAgIGhlaWdodDogY2FsYygyMjVweCAvIDIgLSA1cHgpO1xuICB9XG5cbiAgLmNsb2NrLWZhY2VfX2Nsb2NrLWhhbmRfbWludXRlOmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICB9XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-face",
          templateUrl: "./ngx-mat-timepicker-face.component.html",
          styleUrls: ["./ngx-mat-timepicker-face.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        clockFace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["clockFace", {
            "static": true
          }]
        }],
        clockHand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["clockHand", {
            "static": true,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        faceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minutesGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        timeSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        unit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["mousedown", ["$event"]]
        }],
        onMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["mouseup", ["$event"]]
        }],
        selectTime: [{
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
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerControlComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerFieldNgxMatTimepickerControlNgxMatTimepickerControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerControlComponent", function () {
      return NgxMatTimepickerControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../pipes/ngx-mat-timepicker-parser.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../pipes/ngx-mat-timepicker-time-localizer.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function concatTime(currentTime, nextTime) {
      var isNumber = /\d/.test(nextTime);

      if (isNumber) {
        var time = currentTime + nextTime;
        return +time;
      }
    }

    var NgxMatTimepickerControlComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerControlComponent(_timeParser) {
        _classCallCheck(this, NgxMatTimepickerControlComponent);

        this._timeParser = _timeParser;
        this.id = NgxMatTimepickerControlComponent.nextId++;
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._color = "primary";
        this._floatLabel = "never";
      }

      _createClass(NgxMatTimepickerControlComponent, [{
        key: "changeTime",
        value: function changeTime(event) {
          event.stopPropagation();

          var _char2 = String.fromCharCode(event.keyCode);

          var time = concatTime(String(this.time), _char2);

          this._changeTimeIfValid(time);
        }
      }, {
        key: "decrease",
        value: function decrease() {
          if (!this.disabled) {
            var previousTime = +this.time - 1;

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
      }, {
        key: "increase",
        value: function increase() {
          if (!this.disabled) {
            var nextTime = +this.time + 1;

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
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.timeList && this.time != null) {
            if (this._isSelectedTimeDisabled(this.time)) {
              this._setAvailableTime();
            }
          }
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          this.isFocused = false;

          if (this._previousTime !== this.time) {
            this._changeTimeIfValid(+this.time);
          }
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.isFocused = true;
          this._previousTime = this.time;
        }
      }, {
        key: "onKeydown",
        value: function onKeydown(event) {
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
      }, {
        key: "onModelChange",
        value: function onModelChange(value) {
          this.time = +this._timeParser.transform(value, this.timeUnit);
        }
      }, {
        key: "_changeTimeIfValid",
        value: function _changeTimeIfValid(value) {
          if (!isNaN(value)) {
            this.time = value;

            if (this.time > this.max) {
              var timeString = String(value);
              this.time = +timeString[timeString.length - 1];
            }

            if (this.time < this.min) {
              this.time = this.min;
            }

            this.timeChanged.emit(this.time);
          }
        }
      }, {
        key: "_getAvailableTime",
        value: function _getAvailableTime(currentTime, fn) {
          var currentTimeIndex = this.timeList.findIndex(function (time) {
            return time.time === currentTime;
          });
          var availableTime = fn(currentTimeIndex);
          return availableTime != null ? availableTime : this.time;
        }
      }, {
        key: "_getNextAvailableTime",
        value: function _getNextAvailableTime(index) {
          var timeCollection = this.timeList;
          var maxValue = timeCollection.length;

          for (var i = index + 1; i < maxValue; i++) {
            var time = timeCollection[i];

            if (!time.disabled) {
              return time.time;
            }
          }
        }
      }, {
        key: "_getPrevAvailableTime",
        value: function _getPrevAvailableTime(index) {
          for (var i = index; i >= 0; i--) {
            var time = this.timeList[i];

            if (!time.disabled) {
              return time.time;
            }
          }
        }
      }, {
        key: "_isSelectedTimeDisabled",
        value: function _isSelectedTimeDisabled(time) {
          return this.timeList.find(function (faceTime) {
            return faceTime.time === time;
          }).disabled;
        }
      }, {
        key: "_setAvailableTime",
        value: function _setAvailableTime() {
          this.time = this.timeList.find(function (t) {
            return !t.disabled;
          }).time;
          this.timeChanged.emit(this.time);
        }
      }, {
        key: "color",
        set: function set(newValue) {
          this._color = newValue;
        },
        get: function get() {
          return this._color;
        }
      }, {
        key: "floatLabel",
        set: function set(newValue) {
          this._floatLabel = newValue;
        },
        get: function get() {
          return this._floatLabel;
        }
      }]);

      return NgxMatTimepickerControlComponent;
    }();

    NgxMatTimepickerControlComponent.nextId = 0;

    NgxMatTimepickerControlComponent.ɵfac = function NgxMatTimepickerControlComponent_Factory(t) {
      return new (t || NgxMatTimepickerControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]));
    };

    NgxMatTimepickerControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerControlComponent,
      selectors: [["ngx-mat-timepicker-time-control"]],
      inputs: {
        color: "color",
        disabled: "disabled",
        floatLabel: "floatLabel",
        max: "max",
        min: "min",
        placeholder: "placeholder",
        preventTyping: "preventTyping",
        time: "time",
        timeList: "timeList",
        timeUnit: "timeUnit"
      },
      outputs: {
        timeChanged: "timeChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 17,
      consts: [[1, "ngx-mat-timepicker-control", 3, "color", "floatLabel", "ngClass"], ["matInput", "", "maxlength", "2", 3, "id", "name", "ngModel", "placeholder", "disabled", "ngModelChange", "keydown", "keypress", "focus", "blur"], ["matSuffix", "", 1, "arrows-wrap"], ["role", "button", 1, "arrow", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "18", "viewBox", "0 0 24 24", "width", "18"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"]],
      template: function NgxMatTimepickerControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerControlComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.onModelChange($event);
          })("keydown", function NgxMatTimepickerControlComponent_Template_input_keydown_1_listener($event) {
            return ctx.onKeydown($event);
          })("keypress", function NgxMatTimepickerControlComponent_Template_input_keypress_1_listener($event) {
            return ctx.changeTime($event);
          })("focus", function NgxMatTimepickerControlComponent_Template_input_focus_1_listener() {
            return ctx.onFocus();
          })("blur", function NgxMatTimepickerControlComponent_Template_input_blur_1_listener() {
            return ctx.onBlur();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "timeLocalizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "ngxMatTimepickerParser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerControlComponent_Template_span_click_5_listener() {
            return ctx.increase();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerControlComponent_Template_span_click_9_listener() {
            return ctx.decrease();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("floatLabel", ctx.floatLabel)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isFocused));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "ngx_mat_timepicker_field_", ctx.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "ngx_mat_timepicker_field_", ctx.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 12, ctx.time, ctx.timeUnit), ctx.timeUnit, true))("placeholder", ctx.placeholder)("disabled", ctx.disabled);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"]],
      pipes: [_pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerTimeLocalizerPipe"], _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]],
      styles: [".ngx-mat-timepicker-control[_ngcontent-%COMP%] {\n  width: 60px;\n  min-width: 60px;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: -8px;\n  display: flex;\n  flex-direction: column;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  opacity: 0.5;\n  height: 15px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ngx-mat-timepicker-control[_ngcontent-%COMP%]   .arrows-wrap[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkL25neC1tYXQtdGltZXBpY2tlci1jb250cm9sL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkXFxuZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbFxcbmd4LW1hdC10aW1lcGlja2VyLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1maWVsZC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQU47QURFTTtFQUNFLFVBQUE7QUNBUiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1maWVsZC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC9uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbCB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWluLXdpZHRoOiA2MHB4O1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYXJyb3dzLXdyYXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICA+IC5hcnJvdyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm5neC1tYXQtdGltZXBpY2tlci1jb250cm9sIHtcbiAgd2lkdGg6IDYwcHg7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cbi5uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbCBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uZ3gtbWF0LXRpbWVwaWNrZXItY29udHJvbCAuYXJyb3dzLXdyYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC04cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubmd4LW1hdC10aW1lcGlja2VyLWNvbnRyb2wgLmFycm93cy13cmFwID4gLmFycm93IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjU7XG4gIGhlaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLm5neC1tYXQtdGltZXBpY2tlci1jb250cm9sIC5hcnJvd3Mtd3JhcCA+IC5hcnJvdzpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-time-control",
          templateUrl: "./ngx-mat-timepicker-control.component.html",
          styleUrls: ["./ngx-mat-timepicker-control.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          providers: [_pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]]
        }]
      }], function () {
        return [{
          type: _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerParserPipe"]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        preventTyping: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        time: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        timeList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeUnit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerFieldComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerFieldNgxMatTimepickerFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFieldComponent", function () {
      return NgxMatTimepickerFieldComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/ngx-mat-timepicker.service */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-periods.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/ngx-mat-timepicker-adapter */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
    /* harmony import */


    var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../tokens/ngx-mat-timepicker-time-locale.token */
    "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ngx-mat-timepicker-control/ngx-mat-timepicker-control.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../ngx-mat-timepicker/ngx-mat-timepicker.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts");
    /* harmony import */


    var _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../directives/ngx-mat-timepicker-toggle-icon.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"); //


    function NgxMatTimepickerFieldComponent_mat_select_8_mat_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6);
      }
    }

    function NgxMatTimepickerFieldComponent_mat_select_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NgxMatTimepickerFieldComponent_mat_select_8_Template_mat_select_selectionChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.changePeriod($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerFieldComponent_mat_select_8_mat_option_1_Template, 2, 2, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled || ctx_r0.isChangePeriodDisabled)("ngModel", ctx_r0.period);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.periods);
      }
    }

    function NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-toggle", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_ng_container_2_Template, 1, 0, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2)("disabled", ctx_r1.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.toggleIcon || _r3);
      }
    }

    function NgxMatTimepickerFieldComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "watch_later");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "ngx-mat-timepicker--disabled": a0
      };
    };

    var NgxMatTimepickerFieldComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerFieldComponent(_timepickerService, _locale) {
        _classCallCheck(this, NgxMatTimepickerFieldComponent);

        this._timepickerService = _timepickerService;
        this._locale = _locale;
        this.maxHour = 12;
        this.minHour = 1;
        this.period = _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM;
        this.periods = [_models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM, _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].PM];
        this.timeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerUnits"];
        this._color = "primary";
        this._floatLabel = "never";
        this._format = 12;
        this._isFirstTimeChange = true;
        this._subsCtrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();

        this._onChange = function () {};
      }

      _createClass(NgxMatTimepickerFieldComponent, [{
        key: "changeHour",
        value: function changeHour(hour) {
          this._timepickerService.hour = this.hoursList.find(function (h) {
            return h.time === hour;
          });

          this._changeTime();
        }
      }, {
        key: "changeMinute",
        value: function changeMinute(minute) {
          this._timepickerService.minute = this.minutesList.find(function (m) {
            return m.time === minute;
          });

          this._changeTime();
        }
      }, {
        key: "changePeriod",
        value: function changePeriod(event) {
          this._timepickerService.period = event.value;

          this._changeTime();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subsCtrl$.next();

          this._subsCtrl$.complete();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this._initTime(this.defaultTime);

          this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getHours(this._format);
          this.minutesList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getMinutes();
          this.isTimeRangeSet = !!(this.min || this.max);
          this.hour$ = this._timepickerService.selectedHour.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (clockTime) {
            return _this4._selectedHour = clockTime.time;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(this._changeDefaultTimeValue.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
            return _this4.isTimeRangeSet && _this4._updateAvailableMinutes();
          }));
          this.minute$ = this._timepickerService.selectedMinute.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(this._changeDefaultTimeValue.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
            return _this4._isFirstTimeChange = false;
          }));

          if (this.format === 12) {
            this._timepickerService.selectedPeriod.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (period) {
              return _this4.period = period;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (period) {
              return _this4.isChangePeriodDisabled = _this4._isPeriodDisabled(period);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._subsCtrl$)).subscribe(function () {
              return _this4.isTimeRangeSet && _this4._updateAvailableTime();
            });
          }
        }
      }, {
        key: "onTimeSet",
        value: function onTimeSet(time) {
          this._updateTime(time);

          this._emitLocalTimeChange(time);
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(_fn_) {}
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "writeValue",
        value: function writeValue(val) {
          if (val) {
            this._initTime(val);
          } else {
            this._resetTime();
          }
        }
      }, {
        key: "_changeDefaultTimeValue",
        value: function _changeDefaultTimeValue(clockFaceTime) {
          if (!this._isDefaultTime && this._isFirstTimeChange) {
            return Object.assign(Object.assign({}, clockFaceTime), {
              time: null
            });
          }

          return clockFaceTime;
        }
      }, {
        key: "_changeTime",
        value: function _changeTime() {
          var time = this._timepickerService.getFullTime(this.format);

          this.timepickerTime = time;

          this._emitLocalTimeChange(time);
        }
      }, {
        key: "_emitLocalTimeChange",
        value: function _emitLocalTimeChange(time) {
          var localTime = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].toLocaleTimeString(time, {
            format: this.format,
            locale: this._locale
          });

          this._onChange(localTime);

          this.timeChanged.emit(localTime);
        }
      }, {
        key: "_initTime",
        value: function _initTime(time) {
          var isDefaultTimeAvailable = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].isTimeAvailable(time, this.min, this.max, "minutes", null, this.format);

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
      }, {
        key: "_isPeriodDisabled",
        value: function _isPeriodDisabled(period) {
          return _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].disableHours(_utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getHours(12), {
            min: this.min,
            max: this.max,
            format: 12,
            period: period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM ? _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].PM : _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerPeriods"].AM
          }).every(function (time) {
            return time.disabled;
          });
        }
      }, {
        key: "_resetTime",
        value: function _resetTime() {
          this._timepickerService.hour = {
            angle: 0,
            time: null
          };
          this._timepickerService.minute = {
            angle: 0,
            time: null
          };
        }
      }, {
        key: "_updateAvailableHours",
        value: function _updateAvailableHours() {
          this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].disableHours(this.hoursList, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
          });
        }
      }, {
        key: "_updateAvailableMinutes",
        value: function _updateAvailableMinutes() {
          this.minutesList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].disableMinutes(this.minutesList, this._selectedHour, {
            min: this.min,
            max: this.max,
            format: this.format,
            period: this.period
          });
        }
      }, {
        key: "_updateAvailableTime",
        value: function _updateAvailableTime() {
          this._updateAvailableHours();

          if (this._selectedHour) {
            this._updateAvailableMinutes();
          }
        }
      }, {
        key: "_updateTime",
        value: function _updateTime(time) {
          if (time) {
            var formattedTime = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].formatTime(time, {
              locale: this._locale,
              format: this.format
            });

            this._timepickerService.setDefaultTimeIfAvailable(formattedTime, this.min, this.max, this.format);

            this.timepickerTime = formattedTime;
          }
        }
      }, {
        key: "color",
        get: function get() {
          return this._color;
        },
        set: function set(newValue) {
          this._color = newValue;
        }
      }, {
        key: "defaultTime",
        get: function get() {
          return this._defaultTime;
        },
        set: function set(val) {
          this._defaultTime = val;
          this._isDefaultTime = !!val;
        }
      }, {
        key: "floatLabel",
        get: function get() {
          return this._floatLabel;
        },
        set: function set(newValue) {
          this._floatLabel = newValue;
        }
      }, {
        key: "format",
        get: function get() {
          return this._format;
        },
        set: function set(value) {
          this._format = value === 24 ? 24 : 12;
          this.minHour = this._format === 12 ? 1 : 0;
          this.maxHour = this._format === 12 ? 12 : 23;
          this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_7__["NgxMatTimepickerUtils"].getHours(this._format);
          var isDynamicallyChanged = value && this._previousFormat && this._previousFormat !== this._format;

          if (isDynamicallyChanged) {
            this._updateTime(this.timepickerTime);
          }

          this._previousFormat = this._format;
        }
      }, {
        key: "max",
        get: function get() {
          return this._max;
        },
        set: function set(value) {
          if (typeof value === "string") {
            this._max = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].parseTime(value, {
              locale: this._locale,
              format: this.format
            });
            return;
          }

          this._max = value;
        }
      }, {
        key: "min",
        get: function get() {
          return this._min;
        },
        set: function set(value) {
          if (typeof value === "string") {
            this._min = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_5__["NgxMatTimepickerAdapter"].parseTime(value, {
              locale: this._locale,
              format: this.format
            });
            return;
          }

          this._min = value;
        }
      }]);

      return NgxMatTimepickerFieldComponent;
    }();

    NgxMatTimepickerFieldComponent.ɵfac = function NgxMatTimepickerFieldComponent_Factory(t) {
      return new (t || NgxMatTimepickerFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_6__["NGX_MAT_TIMEPICKER_LOCALE"]));
    };

    NgxMatTimepickerFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerFieldComponent,
      selectors: [["ngx-mat-timepicker-field"]],
      inputs: {
        color: "color",
        defaultTime: "defaultTime",
        floatLabel: "floatLabel",
        format: "format",
        max: "max",
        min: "min",
        cancelBtnTmpl: "cancelBtnTmpl",
        clockTheme: "clockTheme",
        confirmBtnTmpl: "confirmBtnTmpl",
        controlOnly: "controlOnly",
        disabled: "disabled",
        toggleIcon: "toggleIcon"
      },
      outputs: {
        timeChanged: "timeChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"], {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: NgxMatTimepickerFieldComponent,
        multi: true
      }])],
      decls: 14,
      vars: 38,
      consts: [[1, "ngx-mat-timepicker", 3, "ngClass"], [1, "ngx-mat-timepicker__control--first", 3, "color", "floatLabel", "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], [1, "separator-colon", "ngx-mat-timepicker__control--second"], [1, "ngx-mat-timepicker__control--third", 3, "color", "floatLabel", "placeholder", "time", "min", "max", "timeUnit", "disabled", "timeList", "preventTyping", "timeChanged"], [1, "period-select", "ngx-mat-timepicker__control--forth", 3, "color"], [3, "disabled", "ngModel", "selectionChange", 4, "ngIf"], ["class", "ngx-mat-timepicker__toggle", 3, "for", "disabled", 4, "ngIf"], [3, "color", "min", "max", "theme", "defaultTime", "format", "cancelBtnTmpl", "confirmBtnTmpl", "timeSet"], ["timepicker", ""], ["defaultIcon", ""], [3, "disabled", "ngModel", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "ngx-mat-timepicker__toggle", 3, "for", "disabled"], ["ngxMatTimepickerToggleIcon", ""], [4, "ngTemplateOutlet"]],
      template: function NgxMatTimepickerFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-mat-timepicker-time-control", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChanged", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_time_control_timeChanged_1_listener($event) {
            return ctx.changeHour($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-mat-timepicker-time-control", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChanged", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_time_control_timeChanged_5_listener($event) {
            return ctx.changeMinute($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxMatTimepickerFieldComponent_mat_select_8_Template, 2, 3, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxMatTimepickerFieldComponent_ngx_mat_timepicker_toggle_9_Template, 3, 3, "ngx-mat-timepicker-toggle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-mat-timepicker", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeSet", function NgxMatTimepickerFieldComponent_Template_ngx_mat_timepicker_timeSet_10_listener($event) {
            return ctx.onTimeSet($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgxMatTimepickerFieldComponent_ng_template_12_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var tmp_4_0 = null;
          var currVal_4 = (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 32, ctx.hour$)) == null ? null : tmp_4_0.time;
          var tmp_14_0 = null;
          var currVal_14 = (tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 34, ctx.minute$)) == null ? null : tmp_14_0.time;

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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerControlComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepickerToggleComponent"], _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepickerToggleIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: [".ngx-mat-timepicker {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.ngx-mat-timepicker--disabled {\n  background: rgba(0, 0, 0, 0.07);\n  pointer-events: none;\n}\n.ngx-mat-timepicker .separator-colon {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.ngx-mat-timepicker .period-select {\n  width: 60px;\n  min-width: 60px;\n  margin-left: 8px;\n  text-align: center;\n}\n.ngx-mat-timepicker__control--first {\n  order: 1;\n}\n.ngx-mat-timepicker__control--second {\n  order: 2;\n}\n.ngx-mat-timepicker__control--third {\n  order: 3;\n}\n.ngx-mat-timepicker__control--forth {\n  order: 4;\n}\n.ngx-mat-timepicker__toggle {\n  order: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkXFxuZ3gtbWF0LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1maWVsZC9uZ3gtbWF0LXRpbWVwaWNrZXItZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLCtCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRE1JO0VBQ0UsUUFBQTtBQ0pOO0FET0k7RUFDRSxRQUFBO0FDTE47QURRSTtFQUNFLFFBQUE7QUNOTjtBRFNJO0VBQ0UsUUFBQTtBQ1BOO0FEV0U7RUFDRSxRQUFBO0FDVEoiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtbWF0LXRpbWVwaWNrZXItZmllbGQvbmd4LW1hdC10aW1lcGlja2VyLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC1tYXQtdGltZXBpY2tlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJi0tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNlcGFyYXRvci1jb2xvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAucGVyaW9kLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19jb250cm9sIHtcclxuXHJcbiAgICAmLS1maXJzdCB7XHJcbiAgICAgIG9yZGVyOiAxO1xyXG4gICAgfVxyXG5cclxuICAgICYtLXNlY29uZCB7XHJcbiAgICAgIG9yZGVyOiAyO1xyXG4gICAgfVxyXG5cclxuICAgICYtLXRoaXJkIHtcclxuICAgICAgb3JkZXI6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tZm9ydGgge1xyXG4gICAgICBvcmRlcjogNDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RvZ2dsZSB7XHJcbiAgICBvcmRlcjogNDtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5uZ3gtbWF0LXRpbWVwaWNrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyLS1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm5neC1tYXQtdGltZXBpY2tlciAuc2VwYXJhdG9yLWNvbG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyIC5wZXJpb2Qtc2VsZWN0IHtcbiAgd2lkdGg6IDYwcHg7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5neC1tYXQtdGltZXBpY2tlcl9fY29udHJvbC0tZmlyc3Qge1xuICBvcmRlcjogMTtcbn1cbi5uZ3gtbWF0LXRpbWVwaWNrZXJfX2NvbnRyb2wtLXNlY29uZCB7XG4gIG9yZGVyOiAyO1xufVxuLm5neC1tYXQtdGltZXBpY2tlcl9fY29udHJvbC0tdGhpcmQge1xuICBvcmRlcjogMztcbn1cbi5uZ3gtbWF0LXRpbWVwaWNrZXJfX2NvbnRyb2wtLWZvcnRoIHtcbiAgb3JkZXI6IDQ7XG59XG4ubmd4LW1hdC10aW1lcGlja2VyX190b2dnbGUge1xuICBvcmRlcjogNDtcbn0iXX0= */"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-field",
          templateUrl: "./ngx-mat-timepicker-field.component.html",
          styleUrls: ["./ngx-mat-timepicker-field.component.scss"],
          providers: [_services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"], {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: NgxMatTimepickerFieldComponent,
            multi: true
          }],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_ngx_mat_timepicker_service__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_6__["NGX_MAT_TIMEPICKER_LOCALE"]]
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cancelBtnTmpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clockTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        confirmBtnTmpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        controlOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        toggleIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts":
  /*!***************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-hours-face/ngx-mat-timepicker-hours-face.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerHoursFace */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerHoursFaceNgxMatTimepickerHoursFaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerHoursFace", function () {
      return NgxMatTimepickerHoursFace;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");

    var NgxMatTimepickerHoursFace = /*#__PURE__*/function () {
      function NgxMatTimepickerHoursFace(format) {
        _classCallCheck(this, NgxMatTimepickerHoursFace);

        this.hourChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoursList = [];
        this._color = "primary";
        this.hoursList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUtils"].getHours(format);
      }

      _createClass(NgxMatTimepickerHoursFace, [{
        key: "onTimeSelected",
        value: function onTimeSelected(time) {
          this.hourSelected.next(time);
        }
      }, {
        key: "color",
        set: function set(newValue) {
          this._color = newValue;
        },
        get: function get() {
          return this._color;
        }
      }]);

      return NgxMatTimepickerHoursFace;
    }();

    NgxMatTimepickerHoursFace.ɵfac = function NgxMatTimepickerHoursFace_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
    };

    NgxMatTimepickerHoursFace.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxMatTimepickerHoursFace,
      inputs: {
        color: "color",
        format: "format",
        maxTime: "maxTime",
        minTime: "minTime",
        selectedHour: "selectedHour"
      },
      outputs: {
        hourChange: "hourChange",
        hourSelected: "hourSelected"
      }
    });
    /***/
  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerMinutesFaceComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerMinutesFaceNgxMatTimepickerMinutesFaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerMinutesFaceComponent", function () {
      return NgxMatTimepickerMinutesFaceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var _ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts");

    var NgxMatTimepickerMinutesFaceComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerMinutesFaceComponent() {
        _classCallCheck(this, NgxMatTimepickerMinutesFaceComponent);

        this.minuteChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.minutesList = [];
        this.timeUnit = _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"];
        this._color = "primary";
      }

      _createClass(NgxMatTimepickerMinutesFaceComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.period && changes.period.currentValue) {
            var minutes = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].getMinutes(this.minutesGap);

            this.minutesList = _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUtils"].disableMinutes(minutes, this.selectedHour, {
              min: this.minTime,
              max: this.maxTime,
              format: this.format,
              period: this.period
            });
          }
        }
      }, {
        key: "color",
        set: function set(newValue) {
          this._color = newValue;
        },
        get: function get() {
          return this._color;
        }
      }]);

      return NgxMatTimepickerMinutesFaceComponent;
    }();

    NgxMatTimepickerMinutesFaceComponent.ɵfac = function NgxMatTimepickerMinutesFaceComponent_Factory(t) {
      return new (t || NgxMatTimepickerMinutesFaceComponent)();
    };

    NgxMatTimepickerMinutesFaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerMinutesFaceComponent,
      selectors: [["ngx-mat-timepicker-minutes-face"]],
      inputs: {
        color: "color",
        format: "format",
        maxTime: "maxTime",
        minTime: "minTime",
        minutesGap: "minutesGap",
        period: "period",
        selectedHour: "selectedHour",
        selectedMinute: "selectedMinute"
      },
      outputs: {
        minuteChange: "minuteChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 5,
      consts: [[3, "color", "faceTime", "selectedTime", "minutesGap", "unit", "timeChange"]],
      template: function NgxMatTimepickerMinutesFaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-mat-timepicker-face", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeChange", function NgxMatTimepickerMinutesFaceComponent_Template_ngx_mat_timepicker_face_timeChange_0_listener($event) {
            return ctx.minuteChange.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("faceTime", ctx.minutesList)("selectedTime", ctx.selectedMinute)("minutesGap", ctx.minutesGap)("unit", ctx.timeUnit.MINUTE);
        }
      },
      directives: [_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerFaceComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerMinutesFaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-minutes-face",
          templateUrl: "./ngx-mat-timepicker-minutes-face.component.html"
        }]
      }], function () {
        return [];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minuteChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        minutesGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        period: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerPeriodComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerPeriodNgxMatTimepickerPeriodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerPeriodComponent", function () {
      return NgxMatTimepickerPeriodComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-periods.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../utils/ngx-mat-timepicker.utils */
    "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //


    function NgxMatTimepickerPeriodComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@scaleInOut.done", function NgxMatTimepickerPeriodComponent_div_5_Template_div_animation_scaleInOut_done_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.animationDone();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Current time would be invalid in this period.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@scaleInOut", undefined);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    var NgxMatTimepickerPeriodComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerPeriodComponent() {
        _classCallCheck(this, NgxMatTimepickerPeriodComponent);

        this.timePeriod = _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"];
        this.isPeriodAvailable = true;
        this.periodChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(NgxMatTimepickerPeriodComponent, [{
        key: "changePeriod",
        value: function changePeriod(period) {
          this.isPeriodAvailable = this._isSwitchPeriodAvailable(period);

          if (this.isPeriodAvailable) {
            this.periodChanged.next(period);
          }
        }
      }, {
        key: "animationDone",
        value: function animationDone() {
          this.isPeriodAvailable = true;
        }
      }, {
        key: "_isSwitchPeriodAvailable",
        value: function _isSwitchPeriodAvailable(period) {
          var time = this._getDisabledTimeByPeriod(period);

          return !time.every(function (t) {
            return t.disabled;
          });
        }
      }, {
        key: "_getDisabledTimeByPeriod",
        value: function _getDisabledTimeByPeriod(period) {
          switch (this.activeTimeUnit) {
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"].HOUR:
              return _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerUtils"].disableHours(this.hours, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: period
              });

            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerUnits"].MINUTE:
              return _utils_ngx_mat_timepicker_utils__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerUtils"].disableMinutes(this.minutes, +this.selectedHour, {
                min: this.minTime,
                max: this.maxTime,
                format: this.format,
                period: period
              });

            default:
              throw new Error('no such NgxMatTimepickerUnits');
          }
        }
      }]);

      return NgxMatTimepickerPeriodComponent;
    }();

    NgxMatTimepickerPeriodComponent.ɵfac = function NgxMatTimepickerPeriodComponent_Factory(t) {
      return new (t || NgxMatTimepickerPeriodComponent)();
    };

    NgxMatTimepickerPeriodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerPeriodComponent,
      selectors: [["ngx-mat-timepicker-period"]],
      inputs: {
        selectedPeriod: "selectedPeriod",
        format: "format",
        activeTimeUnit: "activeTimeUnit",
        hours: "hours",
        minutes: "minutes",
        minTime: "minTime",
        maxTime: "maxTime",
        selectedHour: "selectedHour",
        meridiems: "meridiems"
      },
      outputs: {
        periodChanged: "periodChanged"
      },
      decls: 6,
      vars: 9,
      consts: [[1, "timepicker-period"], ["type", "button", 1, "timepicker-dial__item", "timepicker-period__btn", 3, "ngClass", "click"], ["class", "timepicker-period__warning", 4, "ngIf"], [1, "timepicker-period__warning"]],
      template: function NgxMatTimepickerPeriodComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerPeriodComponent_Template_button_click_1_listener() {
            return ctx.changePeriod(ctx.timePeriod.AM);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerPeriodComponent_Template_button_click_3_listener() {
            return ctx.changePeriod(ctx.timePeriod.PM);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxMatTimepickerPeriodComponent_div_5_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".timepicker-period[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.timepicker-period__btn[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  padding: 1px 3px;\n  border: 0;\n  background-color: transparent;\n  font-size: 18px;\n  font-weight: 500;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n  border-radius: 3px;\n  transition: background-color 0.5s;\n  color: inherit;\n}\n.timepicker-period__btn.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.timepicker-period__btn[_ngcontent-%COMP%]:focus {\n  background-color: rgba(0, 0, 0, 0.07);\n}\n.timepicker-period__warning[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.55);\n  position: absolute;\n  width: 200px;\n  left: -20px;\n  top: 40px;\n}\n.timepicker-period__warning[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLXBlcmlvZC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci1wZXJpb2RcXG5neC1tYXQtdGltZXBpY2tlci1wZXJpb2QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1wZXJpb2Qvbmd4LW1hdC10aW1lcGlja2VyLXBlcmlvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLFVBQUE7QUNBTjtBREdJO0VBQ0UscUNBQUE7QUNETjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNISjtBREtJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNITiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci1wZXJpb2Qvbmd4LW1hdC10aW1lcGlja2VyLXBlcmlvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGltZXBpY2tlci1wZXJpb2Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX2J0biB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwYWRkaW5nOiAxcHggM3B4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7IC8vIGZvcmNlIGNvbG9yIGluaGVyaXRhbmNlIHRvIGJ5cGFzcyB1c2VyIGFnZW50IHN0eWxlXHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fd2FybmluZyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU1KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG5cclxuICAgICYgPiBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi50aW1lcGlja2VyLXBlcmlvZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1lcGlja2VyLXBlcmlvZF9fYnRuIHtcbiAgb3BhY2l0eTogMC41O1xuICBwYWRkaW5nOiAxcHggM3B4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4udGltZXBpY2tlci1wZXJpb2RfX2J0bi5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuLnRpbWVwaWNrZXItcGVyaW9kX19idG46Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDcpO1xufVxuLnRpbWVwaWNrZXItcGVyaW9kX193YXJuaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICB0b3A6IDQwcHg7XG59XG4udGltZXBpY2tlci1wZXJpb2RfX3dhcm5pbmcgPiBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(0)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["sequence"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        }))])])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerPeriodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-mat-timepicker-period',
          templateUrl: 'ngx-mat-timepicker-period.component.html',
          styleUrls: ['ngx-mat-timepicker-period.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scaleInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(0)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["sequence"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          }))])])])]
        }]
      }], null, {
        selectedPeriod: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeTimeUnit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hours: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minutes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        meridiems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        periodChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: NgxMatTimepickerToggleComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerToggleNgxMatTimepickerToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleComponent", function () {
      return NgxMatTimepickerToggleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../directives/ngx-mat-timepicker-toggle-icon.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NgxMatTimepickerToggleComponent__svg_svg_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = [[["", "ngxMatTimepickerToggleIcon", ""]]];
    var _c1 = ["[ngxMatTimepickerToggleIcon]"];

    var NgxMatTimepickerToggleComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerToggleComponent() {
        _classCallCheck(this, NgxMatTimepickerToggleComponent);
      }

      _createClass(NgxMatTimepickerToggleComponent, [{
        key: "open",
        value: function open(event) {
          if (this.timepicker) {
            this.timepicker.open();
            event.stopPropagation();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled === undefined ? this.timepicker.disabled : this._disabled;
        },
        set: function set(value) {
          this._disabled = value;
        }
      }]);

      return NgxMatTimepickerToggleComponent;
    }();

    NgxMatTimepickerToggleComponent.ɵfac = function NgxMatTimepickerToggleComponent_Factory(t) {
      return new (t || NgxMatTimepickerToggleComponent)();
    };

    NgxMatTimepickerToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerToggleComponent,
      selectors: [["ngx-mat-timepicker-toggle"]],
      contentQueries: function NgxMatTimepickerToggleComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerToggleIconDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customIcon = _t.first);
        }
      },
      inputs: {
        disabled: "disabled",
        timepicker: ["for", "timepicker"]
      },
      ngContentSelectors: _c1,
      decls: 3,
      vars: 2,
      consts: [["color", "", "mat-mini-fab", "", "type", "button", 1, "ngx-mat-timepicker-toggle", "mat-elevation-z0", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24px", "height", "24px"], ["d", "M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003                   6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 6 L 11 12.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13 11.585938 L 13 6 L 11 6 z"]],
      template: function NgxMatTimepickerToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerToggleComponent_Template_button_click_0_listener($event) {
            return ctx.open($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerToggleComponent__svg_svg_1_Template, 2, 0, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customIcon);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["button.ngx-mat-timepicker-toggle[_ngcontent-%COMP%] {\n  background-color: transparent;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLXRvZ2dsZS9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlclxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG5neC1tYXQtdGltZXBpY2tlci10b2dnbGVcXG5neC1tYXQtdGltZXBpY2tlci10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXIvc3JjL2xpYi9jb21wb25lbnRzL25neC1tYXQtdGltZXBpY2tlci10b2dnbGUvbmd4LW1hdC10aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci9zcmMvbGliL2NvbXBvbmVudHMvbmd4LW1hdC10aW1lcGlja2VyLXRvZ2dsZS9uZ3gtbWF0LXRpbWVwaWNrZXItdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLm5neC1tYXQtdGltZXBpY2tlci10b2dnbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuIiwiYnV0dG9uLm5neC1tYXQtdGltZXBpY2tlci10b2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker-toggle",
          templateUrl: "ngx-mat-timepicker-toggle.component.html",
          styleUrls: ["ngx-mat-timepicker-toggle.component.scss"]
        }]
      }], null, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerToggleIconDirective"], {
            "static": true
          }]
        }],
        timepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["for"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts":
  /*!***************************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: NgxMatTimepickerComponent */

  /***/
  function ngxMatTimepickerSrcLibComponentsNgxMatTimepickerNgxMatTimepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerComponent", function () {
      return NgxMatTimepickerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/ngx-mat-timepicker-event.service */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts");

    var NgxMatTimepickerComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerComponent(_dialog, _eventService) {
        _classCallCheck(this, NgxMatTimepickerComponent);

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

      _createClass(NgxMatTimepickerComponent, [{
        key: "open",
        value: function open() {
          var _this5 = this;

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
          }).afterClosed().subscribe(function () {
            _this5.closed.emit();
          });

          this.opened.emit();
        }
        /***
         * Register an input with this timepicker.
         * input - The timepicker input to register with this timepicker
         */

      }, {
        key: "registerInput",
        value: function registerInput(input) {
          if (this._timepickerInput) {
            throw Error("A Timepicker can only be associated with a single input.");
          }

          this._timepickerInput = input;
        }
      }, {
        key: "unregisterInput",
        value: function unregisterInput() {
          this._timepickerInput = void 0;
        }
      }, {
        key: "updateTime",
        value: function updateTime(time) {
          this.timeUpdated.next(time);
        }
      }, {
        key: "color",
        set: function set(newValue) {
          this._color = newValue;
        },
        get: function get() {
          return this._color;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._timepickerInput && this._timepickerInput.disabled;
        }
      }, {
        key: "format",
        get: function get() {
          return this._timepickerInput ? this._timepickerInput.format : this._format;
        },
        set: function set(value) {
          this._format = value === 24 ? 24 : 12;
        }
      }, {
        key: "inputElement",
        get: function get() {
          return this._timepickerInput && this._timepickerInput.element;
        }
      }, {
        key: "maxTime",
        get: function get() {
          return this._timepickerInput ? this._timepickerInput.max : this.max;
        }
      }, {
        key: "minTime",
        get: function get() {
          return this._timepickerInput ? this._timepickerInput.min : this.min;
        }
      }, {
        key: "minutesGap",
        get: function get() {
          return this._minutesGap;
        },
        set: function set(gap) {
          if (gap == null) {
            return;
          }

          gap = Math.floor(gap);
          this._minutesGap = gap <= 59 ? gap : 1;
        }
      }, {
        key: "time",
        get: function get() {
          return this._timepickerInput && this._timepickerInput.value;
        }
      }, {
        key: "ngxMatTimepickerTheme",
        set: function set(newValue) {
          this._ngxMatTimepickerTheme = newValue;
        }
      }]);

      return NgxMatTimepickerComponent;
    }();

    NgxMatTimepickerComponent.ɵfac = function NgxMatTimepickerComponent_Factory(t) {
      return new (t || NgxMatTimepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerEventService"]));
    };

    NgxMatTimepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerComponent,
      selectors: [["ngx-mat-timepicker"]],
      inputs: {
        color: "color",
        format: "format",
        minutesGap: "minutesGap",
        appendToInput: "appendToInput",
        cancelBtnTmpl: "cancelBtnTmpl",
        confirmBtnTmpl: "confirmBtnTmpl",
        defaultTime: "defaultTime",
        disableAnimation: "disableAnimation",
        editableHintTmpl: "editableHintTmpl",
        enableKeyboardInput: "enableKeyboardInput",
        hoursOnly: "hoursOnly",
        isEsc: "isEsc",
        max: "max",
        min: "min",
        preventOverlayClick: "preventOverlayClick",
        theme: "theme",
        timepickerClass: "timepickerClass"
      },
      outputs: {
        closed: "closed",
        hourSelected: "hourSelected",
        opened: "opened",
        timeChanged: "timeChanged",
        timeSet: "timeSet"
      },
      decls: 0,
      vars: 0,
      template: function NgxMatTimepickerComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "ngx-mat-timepicker",
          template: ""
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _services_ngx_mat_timepicker_event_service__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerEventService"]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minutesGap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendToInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cancelBtnTmpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        confirmBtnTmpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        editableHintTmpl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableKeyboardInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        hoursOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isEsc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        preventOverlayClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        timepickerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts":
  /*!*****************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts ***!
    \*****************************************************************************/

  /*! exports provided: AppendToInputDirective */

  /***/
  function ngxMatTimepickerSrcLibDirectivesAppendToInputDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppendToInputDirective", function () {
      return AppendToInputDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppendToInputDirective = /*#__PURE__*/function () {
      function AppendToInputDirective(elementRef, renderer) {
        _classCallCheck(this, AppendToInputDirective);

        this.renderer = renderer;
        this.element = elementRef.nativeElement;
      }

      _createClass(AppendToInputDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._inputCords = this.inputCords;
          this._direction = this.direction;
          this.append();
        }
      }, {
        key: "changePosition",
        value: function changePosition() {
          var _this$inputCords = this.inputCords,
              bottom = _this$inputCords.bottom,
              top = _this$inputCords.top;
          var y = this.defineElementYByDirection(top, bottom);
          this.setStyle('top', "".concat(y, "px"));
        }
      }, {
        key: "append",
        value: function append() {
          var _this$_inputCords = this._inputCords,
              left = _this$_inputCords.left,
              bottom = _this$_inputCords.bottom,
              top = _this$_inputCords.top;
          var y = this.defineElementYByDirection(top, bottom);
          this.setStyle('position', 'fixed');
          this.setStyle('left', "".concat(left, "px"));
          this.setStyle('top', "".concat(y, "px"));
        }
      }, {
        key: "setStyle",
        value: function setStyle(style, value) {
          this.renderer.setStyle(this.element, style, value);
        }
      }, {
        key: "defineElementYByDirection",
        value: function defineElementYByDirection(inputTop, inputBottom) {
          if (this._direction === 'top') {
            return inputTop - this.element.offsetHeight;
          } else if (this._direction === 'center') {
            return inputTop - this.element.offsetHeight / 2;
          }

          return inputBottom;
        }
      }, {
        key: "inputCords",
        get: function get() {
          return this.inputElement.getBoundingClientRect();
        }
      }, {
        key: "direction",
        get: function get() {
          var height = this.element.offsetHeight;
          var _this$_inputCords2 = this._inputCords,
              bottom = _this$_inputCords2.bottom,
              top = _this$_inputCords2.top;
          var isElementFit = (window && window.innerHeight) - bottom < height;
          var isTop = isElementFit && top > height;
          var isCenter = isElementFit && top < height;

          if (isTop) {
            return 'top';
          } else if (isCenter) {
            return 'center';
          }

          return 'bottom';
        }
      }]);

      return AppendToInputDirective;
    }();

    AppendToInputDirective.ɵfac = function AppendToInputDirective_Factory(t) {
      return new (t || AppendToInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    AppendToInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AppendToInputDirective,
      selectors: [["", "ngxAppendToInput", ""]],
      hostBindings: function AppendToInputDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppendToInputDirective_scroll_HostBindingHandler() {
            return ctx.changePosition();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        inputElement: ["ngxAppendToInput", "inputElement"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppendToInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ngxAppendToInput]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngxAppendToInput']
        }],
        changePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts":
  /*!******************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts ***!
    \******************************************************************************************/

  /*! exports provided: NgxMatTimepickerAutofocusDirective */

  /***/
  function ngxMatTimepickerSrcLibDirectivesNgxMatTimepickerAutofocusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAutofocusDirective", function () {
      return NgxMatTimepickerAutofocusDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var NgxMatTimepickerAutofocusDirective = /*#__PURE__*/function () {
      function NgxMatTimepickerAutofocusDirective(_element, document) {
        _classCallCheck(this, NgxMatTimepickerAutofocusDirective);

        this._element = _element;
        this.document = document;
        this._activeElement = this.document.activeElement;
      }

      _createClass(NgxMatTimepickerAutofocusDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this6 = this;

          if (this.isFocusActive) {
            // To avoid ExpressionChangedAfterItHasBeenCheckedError;
            setTimeout(function () {
              return _this6._element.nativeElement.focus({
                preventScroll: true
              });
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this7 = this;

          // To avoid ExpressionChangedAfterItHasBeenCheckedError;
          setTimeout(function () {
            return _this7._activeElement.focus({
              preventScroll: true
            });
          });
        }
      }]);

      return NgxMatTimepickerAutofocusDirective;
    }();

    NgxMatTimepickerAutofocusDirective.ɵfac = function NgxMatTimepickerAutofocusDirective_Factory(t) {
      return new (t || NgxMatTimepickerAutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8));
    };

    NgxMatTimepickerAutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxMatTimepickerAutofocusDirective,
      selectors: [["", "ngxMatTimepickerAutofocus", ""]],
      inputs: {
        isFocusActive: ["ngxMatTimepickerAutofocus", "isFocusActive"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerAutofocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[ngxMatTimepickerAutofocus]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        isFocusActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["ngxMatTimepickerAutofocus"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts":
  /*!**************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts ***!
    \**************************************************************************************/

  /*! exports provided: NgxMatTimepickerThemeDirective */

  /***/
  function ngxMatTimepickerSrcLibDirectivesNgxMatTimepickerThemeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerThemeDirective", function () {
      return NgxMatTimepickerThemeDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgxMatTimepickerThemeDirective = /*#__PURE__*/function () {
      function NgxMatTimepickerThemeDirective(elementRef) {
        _classCallCheck(this, NgxMatTimepickerThemeDirective);

        this._element = elementRef.nativeElement;
      }

      _createClass(NgxMatTimepickerThemeDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.theme) {
            this.setTheme(this.theme);
          }
        }
      }, {
        key: "setTheme",
        value: function setTheme(theme) {
          for (var val in theme) {
            if (theme.hasOwnProperty(val)) {
              if (typeof theme[val] === "string") {
                for (var prop in theme) {
                  if (theme.hasOwnProperty(prop)) {
                    this._element.style.setProperty("--".concat(camelCaseToDash(prop)), theme[prop]);
                  }
                }

                return;
              }

              this.setTheme(theme[val]);
            }
          }
        }
      }]);

      return NgxMatTimepickerThemeDirective;
    }();

    NgxMatTimepickerThemeDirective.ɵfac = function NgxMatTimepickerThemeDirective_Factory(t) {
      return new (t || NgxMatTimepickerThemeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NgxMatTimepickerThemeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxMatTimepickerThemeDirective,
      selectors: [["", "ngxMatTimepickerTheme", ""]],
      inputs: {
        theme: ["ngxMatTimepickerTheme", "theme"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerThemeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[ngxMatTimepickerTheme]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["ngxMatTimepickerTheme"]
        }]
      });
    })();

    function camelCaseToDash(myStr) {
      return myStr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts":
  /*!********************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts ***!
    \********************************************************************************************/

  /*! exports provided: NgxMatTimepickerToggleIconDirective */

  /***/
  function ngxMatTimepickerSrcLibDirectivesNgxMatTimepickerToggleIconDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleIconDirective", function () {
      return NgxMatTimepickerToggleIconDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* To override a default toggle icon */


    var NgxMatTimepickerToggleIconDirective = function NgxMatTimepickerToggleIconDirective() {
      _classCallCheck(this, NgxMatTimepickerToggleIconDirective);
    };

    NgxMatTimepickerToggleIconDirective.ɵfac = function NgxMatTimepickerToggleIconDirective_Factory(t) {
      return new (t || NgxMatTimepickerToggleIconDirective)();
    };

    NgxMatTimepickerToggleIconDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxMatTimepickerToggleIconDirective,
      selectors: [["", "ngxMatTimepickerToggleIcon", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerToggleIconDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[ngxMatTimepickerToggleIcon]"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts":
  /*!********************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts ***!
    \********************************************************************************/

  /*! exports provided: NgxMatTimepickerDirective */

  /***/
  function ngxMatTimepickerSrcLibDirectivesNgxMatTimepickerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDirective", function () {
      return NgxMatTimepickerDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/ngx-mat-timepicker-adapter */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
    /* harmony import */


    var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tokens/ngx-mat-timepicker-time-locale.token */
    "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");

    var NgxMatTimepickerDirective = /*#__PURE__*/function () {
      function NgxMatTimepickerDirective(_elementRef, _locale) {
        _classCallCheck(this, NgxMatTimepickerDirective);

        this._elementRef = _elementRef;
        this._locale = _locale;
        this._format = 12;
        this._subsCtrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._value = "";

        this.onTouched = function () {};

        this._onChange = function () {};
      }

      _createClass(NgxMatTimepickerDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.value && changes.value.currentValue) {
            this._defaultTime = changes.value.currentValue;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._unregisterTimepicker();

          this._subsCtrl$.next();

          this._subsCtrl$.complete();
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.disableClick) {
            this._timepicker.open();

            event.stopPropagation();
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "updateValue",
        value: function updateValue(value) {
          this.value = value;

          this._onChange(value);
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          if (value) {
            this._defaultTime = value;
          }
        }
      }, {
        key: "_registerTimepicker",
        value: function _registerTimepicker(picker) {
          var _this8 = this;

          if (picker) {
            this._timepicker = picker;

            this._timepicker.registerInput(this);

            this._timepicker.timeSet.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._subsCtrl$)).subscribe(function (time) {
              _this8.value = time;

              _this8._onChange(_this8.value);

              _this8.onTouched();

              _this8._defaultTime = _this8._value;
            });
          } else {
            throw new Error("NgxMatTimepickerComponent is not defined." + " Please make sure you passed the timepicker to ngxMatTimepicker directive");
          }
        }
      }, {
        key: "_unregisterTimepicker",
        value: function _unregisterTimepicker() {
          if (this._timepicker) {
            this._timepicker.unregisterInput();
          }
        }
      }, {
        key: "_updateInputValue",
        value: function _updateInputValue() {
          this._elementRef.nativeElement.value = this.value;
        }
      }, {
        key: "element",
        get: function get() {
          return this._elementRef && this._elementRef.nativeElement;
        }
      }, {
        key: "format",
        get: function get() {
          return this._format;
        },
        set: function set(value) {
          this._format = +value === 24 ? 24 : 12;
          var isDynamicallyChanged = value && this._previousFormat && this._previousFormat !== this._format;

          if (isDynamicallyChanged) {
            this.value = this._value;

            this._timepicker.updateTime(this._value);
          }

          this._previousFormat = this._format;
        }
      }, {
        key: "max",
        get: function get() {
          return this._max;
        },
        set: function set(value) {
          if (typeof value === "string") {
            this._max = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].parseTime(value, {
              locale: this._locale,
              format: this.format
            });
            return;
          }

          this._max = value;
        }
      }, {
        key: "min",
        get: function get() {
          return this._min;
        },
        set: function set(value) {
          if (typeof value === "string") {
            this._min = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].parseTime(value, {
              locale: this._locale,
              format: this.format
            });
            return;
          }

          this._min = value;
        }
      }, {
        key: "timepicker",
        set: function set(picker) {
          this._registerTimepicker(picker);
        }
      }, {
        key: "value",
        get: function get() {
          if (!this._value) {
            return "";
          }

          return _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].toLocaleTimeString(this._value, {
            format: this.format,
            locale: this._locale
          });
        },
        set: function set(value) {
          if (!value) {
            this._value = "";

            this._updateInputValue();

            return;
          }

          var time = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].formatTime(value, {
            locale: this._locale,
            format: this.format
          });

          var isAvailable = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].isTimeAvailable(time, this._min, this._max, "minutes", this._timepicker.minutesGap, this._format);

          if (isAvailable) {
            this._value = time;

            this._updateInputValue();

            return;
          }

          console.warn("Selected time doesn't match min or max value");
        }
      }, {
        key: "_defaultTime",
        set: function set(time) {
          this._timepicker.defaultTime = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAdapter"].formatTime(time, {
            locale: this._locale,
            format: this.format
          });
        }
      }]);

      return NgxMatTimepickerDirective;
    }();

    NgxMatTimepickerDirective.ɵfac = function NgxMatTimepickerDirective_Factory(t) {
      return new (t || NgxMatTimepickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_3__["NGX_MAT_TIMEPICKER_LOCALE"]));
    };

    NgxMatTimepickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxMatTimepickerDirective,
      selectors: [["", "ngxMatTimepicker", ""]],
      hostVars: 1,
      hostBindings: function NgxMatTimepickerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgxMatTimepickerDirective_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("click", function NgxMatTimepickerDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("change", function NgxMatTimepickerDirective_change_HostBindingHandler() {
            return ctx.updateValue();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
        }
      },
      inputs: {
        format: "format",
        max: "max",
        min: "min",
        timepicker: ["ngxMatTimepicker", "timepicker"],
        value: "value",
        disableClick: "disableClick",
        disabled: "disabled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: NgxMatTimepickerDirective,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[ngxMatTimepicker]",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: NgxMatTimepickerDirective,
            multi: true
          }],
          // tslint:disable-next-line:no-host-metadata-property
          host: {
            "[disabled]": "disabled",
            // "(change)": "updateValue($event.target.value)",
            "(blur)": "onTouched()"
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_3__["NGX_MAT_TIMEPICKER_LOCALE"]]
          }]
        }];
      }, {
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["ngxMatTimepicker"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["click", ["$event"]]
        }],
        updateValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["change"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts":
  /*!******************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts ***!
    \******************************************************************************/

  /*! exports provided: NgxMatTimepickerFormat */

  /***/
  function ngxMatTimepickerSrcLibModelsNgxMatTimepickerFormatEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFormat", function () {
      return NgxMatTimepickerFormat;
    });

    var NgxMatTimepickerFormat;

    (function (NgxMatTimepickerFormat) {
      NgxMatTimepickerFormat["TWELVE"] = "hh:mm a";
      NgxMatTimepickerFormat["TWELVE_SHORT"] = "h:m a";
      NgxMatTimepickerFormat["TWENTY_FOUR"] = "HH:mm";
      NgxMatTimepickerFormat["TWENTY_FOUR_SHORT"] = "H:m";
    })(NgxMatTimepickerFormat || (NgxMatTimepickerFormat = {}));
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts":
  /*!********************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts ***!
    \********************************************************************************/

  /*! exports provided: NgxMatTimepickerMeasure */

  /***/
  function ngxMatTimepickerSrcLibModelsNgxMatTimepickerMeasuresEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerMeasure", function () {
      return NgxMatTimepickerMeasure;
    });

    var NgxMatTimepickerMeasure;

    (function (NgxMatTimepickerMeasure) {
      NgxMatTimepickerMeasure["hour"] = "hour";
      NgxMatTimepickerMeasure["minute"] = "minute";
    })(NgxMatTimepickerMeasure || (NgxMatTimepickerMeasure = {}));
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts":
  /*!*******************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts ***!
    \*******************************************************************************/

  /*! exports provided: NgxMatTimepickerPeriods */

  /***/
  function ngxMatTimepickerSrcLibModelsNgxMatTimepickerPeriodsEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerPeriods", function () {
      return NgxMatTimepickerPeriods;
    });

    var NgxMatTimepickerPeriods;

    (function (NgxMatTimepickerPeriods) {
      NgxMatTimepickerPeriods["AM"] = "AM";
      NgxMatTimepickerPeriods["PM"] = "PM";
    })(NgxMatTimepickerPeriods || (NgxMatTimepickerPeriods = {}));
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts":
  /*!*****************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts ***!
    \*****************************************************************************/

  /*! exports provided: NgxMatTimepickerUnits */

  /***/
  function ngxMatTimepickerSrcLibModelsNgxMatTimepickerUnitsEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerUnits", function () {
      return NgxMatTimepickerUnits;
    });

    var NgxMatTimepickerUnits;

    (function (NgxMatTimepickerUnits) {
      NgxMatTimepickerUnits[NgxMatTimepickerUnits["HOUR"] = 0] = "HOUR";
      NgxMatTimepickerUnits[NgxMatTimepickerUnits["MINUTE"] = 1] = "MINUTE";
    })(NgxMatTimepickerUnits || (NgxMatTimepickerUnits = {}));
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts":
  /*!******************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts ***!
    \******************************************************************/

  /*! exports provided: NgxMatTimepickerModule */

  /***/
  function ngxMatTimepickerSrcLibNgxMatTimepickerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerModule", function () {
      return NgxMatTimepickerModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker/ngx-mat-timepicker.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts");
    /* harmony import */


    var _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./directives/ngx-mat-timepicker.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts");
    /* harmony import */


    var _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./directives/ngx-mat-timepicker-toggle-icon.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
    /* harmony import */


    var _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives/ngx-mat-timepicker-theme.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-theme.directive.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-24-hours-face/ngx-mat-timepicker-24-hours-face.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-12-hours-face/ngx-mat-timepicker-12-hours-face.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-minutes-face/ngx-mat-timepicker-minutes-face.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-face/ngx-mat-timepicker-face.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial/ngx-mat-timepicker-dial.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dial-control/ngx-mat-timepicker-dial-control.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-period/ngx-mat-timepicker-period.component.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pipes/ngx-mat-timepicker-time-formatter.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-formatter.pipe.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pipes/ngx-mat-timepicker-minutes-formatter.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts");
    /* harmony import */


    var _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./directives/ngx-mat-timepicker-autofocus.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-autofocus.directive.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_field_ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-control/ngx-mat-timepicker-control.component.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pipes/ngx-mat-timepicker-time-localizer.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts");
    /* harmony import */


    var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./tokens/ngx-mat-timepicker-time-locale.token */
    "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pipes/ngx-mat-timepicker-parser.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pipes/ngx-mat-timepicker-active-hour.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts");
    /* harmony import */


    var _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pipes/ngx-mat-timepicker-active-minute.pipe */
    "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-content/ngx-mat-timepicker-content.component.ts");
    /* harmony import */


    var _components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-dialog/ngx-mat-timepicker-dialog.component.ts");
    /* harmony import */


    var _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./directives/append-to-input.directive */
    "../ngx-mat-timepicker/src/lib/directives/append-to-input.directive.ts"); // MATERIAL
    // MAT-TIMEPICKER


    var NgxMatTimepickerModule = /*#__PURE__*/function () {
      function NgxMatTimepickerModule() {
        _classCallCheck(this, NgxMatTimepickerModule);
      }

      _createClass(NgxMatTimepickerModule, null, [{
        key: "setLocale",
        value: function setLocale(locale) {
          return {
            ngModule: NgxMatTimepickerModule,
            providers: [{
              provide: _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_29__["NGX_MAT_TIMEPICKER_LOCALE"],
              useValue: locale
            }]
          };
        }
      }]);

      return NgxMatTimepickerModule;
    }();

    NgxMatTimepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxMatTimepickerModule
    });
    NgxMatTimepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgxMatTimepickerModule_Factory(t) {
        return new (t || NgxMatTimepickerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxMatTimepickerModule, {
        declarations: [_components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_34__["NgxMatTimepickerDialogComponent"], _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_31__["NgxMatTimepickerActiveHourPipe"], _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerActiveMinutePipe"], _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_35__["AppendToInputDirective"], _components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerComponent"], _components_ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepicker24HoursFaceComponent"], _components_ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepicker12HoursFaceComponent"], _components_ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_18__["NgxMatTimepickerMinutesFaceComponent"], _components_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_19__["NgxMatTimepickerFaceComponent"], _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleComponent"], _components_ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_20__["NgxMatTimepickerDialComponent"], _components_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_21__["NgxMatTimepickerDialControlComponent"], _components_ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_22__["NgxMatTimepickerPeriodComponent"], _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerDirective"], _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerToggleIconDirective"], _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_25__["NgxMatTimepickerAutofocusDirective"], _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_24__["NgxMatTimepickerMinutesFormatterPipe"], _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepickerThemeDirective"], _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerFieldComponent"], _components_ngx_mat_timepicker_field_ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_27__["NgxMatTimepickerControlComponent"], _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_30__["NgxMatTimepickerParserPipe"], _components_ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_33__["NgxMatTimepickerContentComponent"], _pipes_ngx_mat_timepicker_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_23__["NgxMatTimepickerTimeFormatterPipe"], _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_28__["NgxMatTimepickerTimeLocalizerPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]],
        exports: [_components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerComponent"], _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleComponent"], _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerFieldComponent"], _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerDirective"], _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerToggleIconDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]],
          exports: [_components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerComponent"], _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleComponent"], _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerFieldComponent"], _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerDirective"], _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerToggleIconDirective"]],
          declarations: [_components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_34__["NgxMatTimepickerDialogComponent"], _pipes_ngx_mat_timepicker_active_hour_pipe__WEBPACK_IMPORTED_MODULE_31__["NgxMatTimepickerActiveHourPipe"], _pipes_ngx_mat_timepicker_active_minute_pipe__WEBPACK_IMPORTED_MODULE_32__["NgxMatTimepickerActiveMinutePipe"], _directives_append_to_input_directive__WEBPACK_IMPORTED_MODULE_35__["AppendToInputDirective"], _components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerComponent"], _components_ngx_mat_timepicker_24_hours_face_ngx_mat_timepicker_24_hours_face_component__WEBPACK_IMPORTED_MODULE_16__["NgxMatTimepicker24HoursFaceComponent"], _components_ngx_mat_timepicker_12_hours_face_ngx_mat_timepicker_12_hours_face_component__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepicker12HoursFaceComponent"], _components_ngx_mat_timepicker_minutes_face_ngx_mat_timepicker_minutes_face_component__WEBPACK_IMPORTED_MODULE_18__["NgxMatTimepickerMinutesFaceComponent"], _components_ngx_mat_timepicker_face_ngx_mat_timepicker_face_component__WEBPACK_IMPORTED_MODULE_19__["NgxMatTimepickerFaceComponent"], _components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerToggleComponent"], _components_ngx_mat_timepicker_dial_ngx_mat_timepicker_dial_component__WEBPACK_IMPORTED_MODULE_20__["NgxMatTimepickerDialComponent"], _components_ngx_mat_timepicker_dial_control_ngx_mat_timepicker_dial_control_component__WEBPACK_IMPORTED_MODULE_21__["NgxMatTimepickerDialControlComponent"], _components_ngx_mat_timepicker_period_ngx_mat_timepicker_period_component__WEBPACK_IMPORTED_MODULE_22__["NgxMatTimepickerPeriodComponent"], _directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_13__["NgxMatTimepickerDirective"], _directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerToggleIconDirective"], _directives_ngx_mat_timepicker_autofocus_directive__WEBPACK_IMPORTED_MODULE_25__["NgxMatTimepickerAutofocusDirective"], _pipes_ngx_mat_timepicker_minutes_formatter_pipe__WEBPACK_IMPORTED_MODULE_24__["NgxMatTimepickerMinutesFormatterPipe"], _directives_ngx_mat_timepicker_theme_directive__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepickerThemeDirective"], _components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_26__["NgxMatTimepickerFieldComponent"], _components_ngx_mat_timepicker_field_ngx_mat_timepicker_control_ngx_mat_timepicker_control_component__WEBPACK_IMPORTED_MODULE_27__["NgxMatTimepickerControlComponent"], _pipes_ngx_mat_timepicker_parser_pipe__WEBPACK_IMPORTED_MODULE_30__["NgxMatTimepickerParserPipe"], _components_ngx_mat_timepicker_content_ngx_mat_timepicker_content_component__WEBPACK_IMPORTED_MODULE_33__["NgxMatTimepickerContentComponent"], _pipes_ngx_mat_timepicker_time_formatter_pipe__WEBPACK_IMPORTED_MODULE_23__["NgxMatTimepickerTimeFormatterPipe"], _pipes_ngx_mat_timepicker_time_localizer_pipe__WEBPACK_IMPORTED_MODULE_28__["NgxMatTimepickerTimeLocalizerPipe"]],
          entryComponents: [_components_ngx_mat_timepicker_dialog_ngx_mat_timepicker_dialog_component__WEBPACK_IMPORTED_MODULE_34__["NgxMatTimepickerDialogComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts":
  /*!**********************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-hour.pipe.ts ***!
    \**********************************************************************************/

  /*! exports provided: NgxMatTimepickerActiveHourPipe */

  /***/
  function ngxMatTimepickerSrcLibPipesNgxMatTimepickerActiveHourPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerActiveHourPipe", function () {
      return NgxMatTimepickerActiveHourPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgxMatTimepickerActiveHourPipe = /*#__PURE__*/function () {
      function NgxMatTimepickerActiveHourPipe() {
        _classCallCheck(this, NgxMatTimepickerActiveHourPipe);
      }

      _createClass(NgxMatTimepickerActiveHourPipe, [{
        key: "transform",
        value: function transform(hour, currentHour, isClockFaceDisabled) {
          if (hour == null || isClockFaceDisabled) {
            return false;
          }

          return hour === currentHour;
        }
      }]);

      return NgxMatTimepickerActiveHourPipe;
    }();

    NgxMatTimepickerActiveHourPipe.ɵfac = function NgxMatTimepickerActiveHourPipe_Factory(t) {
      return new (t || NgxMatTimepickerActiveHourPipe)();
    };

    NgxMatTimepickerActiveHourPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "activeHour",
      type: NgxMatTimepickerActiveHourPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerActiveHourPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'activeHour'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts":
  /*!************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-active-minute.pipe.ts ***!
    \************************************************************************************/

  /*! exports provided: NgxMatTimepickerActiveMinutePipe */

  /***/
  function ngxMatTimepickerSrcLibPipesNgxMatTimepickerActiveMinutePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerActiveMinutePipe", function () {
      return NgxMatTimepickerActiveMinutePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgxMatTimepickerActiveMinutePipe = /*#__PURE__*/function () {
      function NgxMatTimepickerActiveMinutePipe() {
        _classCallCheck(this, NgxMatTimepickerActiveMinutePipe);
      }

      _createClass(NgxMatTimepickerActiveMinutePipe, [{
        key: "transform",
        value: function transform(minute, currentMinute, gap, isClockFaceDisabled) {
          if (minute == null || isClockFaceDisabled) {
            return false;
          }

          var defaultGap = 5;
          return currentMinute === minute && minute % (gap || defaultGap) === 0;
        }
      }]);

      return NgxMatTimepickerActiveMinutePipe;
    }();

    NgxMatTimepickerActiveMinutePipe.ɵfac = function NgxMatTimepickerActiveMinutePipe_Factory(t) {
      return new (t || NgxMatTimepickerActiveMinutePipe)();
    };

    NgxMatTimepickerActiveMinutePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "activeMinute",
      type: NgxMatTimepickerActiveMinutePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerActiveMinutePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'activeMinute'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts":
  /*!****************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-minutes-formatter.pipe.ts ***!
    \****************************************************************************************/

  /*! exports provided: NgxMatTimepickerMinutesFormatterPipe */

  /***/
  function ngxMatTimepickerSrcLibPipesNgxMatTimepickerMinutesFormatterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerMinutesFormatterPipe", function () {
      return NgxMatTimepickerMinutesFormatterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NgxMatTimepickerMinutesFormatterPipe = /*#__PURE__*/function () {
      function NgxMatTimepickerMinutesFormatterPipe() {
        _classCallCheck(this, NgxMatTimepickerMinutesFormatterPipe);
      }

      _createClass(NgxMatTimepickerMinutesFormatterPipe, [{
        key: "transform",
        value: function transform(minute) {
          var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

          if (!minute) {
            return minute;
          }

          return minute % gap === 0 ? minute : '';
        }
      }]);

      return NgxMatTimepickerMinutesFormatterPipe;
    }();

    NgxMatTimepickerMinutesFormatterPipe.ɵfac = function NgxMatTimepickerMinutesFormatterPipe_Factory(t) {
      return new (t || NgxMatTimepickerMinutesFormatterPipe)();
    };

    NgxMatTimepickerMinutesFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "minutesFormatter",
      type: NgxMatTimepickerMinutesFormatterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerMinutesFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'minutesFormatter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts":
  /*!*****************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-parser.pipe.ts ***!
    \*****************************************************************************/

  /*! exports provided: NgxMatTimepickerParserPipe */

  /***/
  function ngxMatTimepickerSrcLibPipesNgxMatTimepickerParserPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerParserPipe", function () {
      return NgxMatTimepickerParserPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tokens/ngx-mat-timepicker-time-locale.token */
    "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-measures.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! luxon */
    "../../node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__); //
    //


    var NgxMatTimepickerParserPipe = /*#__PURE__*/function () {
      function NgxMatTimepickerParserPipe(_locale) {
        _classCallCheck(this, NgxMatTimepickerParserPipe);

        this._locale = _locale;
        this._numberingSystem = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].local().setLocale(this._locale).resolvedLocaleOpts().numberingSystem;
      }

      _createClass(NgxMatTimepickerParserPipe, [{
        key: "transform",
        value: function transform(time) {
          var timeUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].HOUR;

          if (time == null || time === "") {
            return "";
          }

          if (!isNaN(+time)) {
            return "".concat(time);
          }

          if (timeUnit === _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].MINUTE) {
            return this._parseTime(time, "mm", _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].minute).toString();
          }

          return this._parseTime(time, "HH", _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].hour).toString();
        }
      }, {
        key: "_parseTime",
        value: function _parseTime(time, format, timeMeasure) {
          var parsedTime = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromFormat(String(time), format, {
            numberingSystem: this._numberingSystem
          })[timeMeasure];

          if (!isNaN(parsedTime)) {
            return parsedTime;
          }

          throw new Error("Cannot parse time - ".concat(time));
        }
      }]);

      return NgxMatTimepickerParserPipe;
    }();

    NgxMatTimepickerParserPipe.ɵfac = function NgxMatTimepickerParserPipe_Factory(t) {
      return new (t || NgxMatTimepickerParserPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"]));
    };

    NgxMatTimepickerParserPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "ngxMatTimepickerParser",
      type: NgxMatTimepickerParserPipe,
      pure: true
    });
    NgxMatTimepickerParserPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxMatTimepickerParserPipe,
      factory: NgxMatTimepickerParserPipe.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerParserPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "ngxMatTimepickerParser"
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-formatter.pipe.ts":
  /*!*************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-formatter.pipe.ts ***!
    \*************************************************************************************/

  /*! exports provided: NgxMatTimepickerTimeFormatterPipe */

  /***/
  function ngxMatTimepickerSrcLibPipesNgxMatTimepickerTimeFormatterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerTimeFormatterPipe", function () {
      return NgxMatTimepickerTimeFormatterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! luxon */
    "../../node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__); //
    //


    var NgxMatTimepickerTimeFormatterPipe = /*#__PURE__*/function () {
      function NgxMatTimepickerTimeFormatterPipe() {
        _classCallCheck(this, NgxMatTimepickerTimeFormatterPipe);
      }

      _createClass(NgxMatTimepickerTimeFormatterPipe, [{
        key: "transform",
        value: function transform(time, timeUnit) {
          if (time == null || time === '') {
            return time;
          }

          switch (timeUnit) {
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"].HOUR:
              return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({
                hour: +time
              }).toFormat("HH");

            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerUnits"].MINUTE:
              return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({
                minute: +time
              }).toFormat("mm");

            default:
              throw new Error("no such time unit");
          }
        }
      }]);

      return NgxMatTimepickerTimeFormatterPipe;
    }();

    NgxMatTimepickerTimeFormatterPipe.ɵfac = function NgxMatTimepickerTimeFormatterPipe_Factory(t) {
      return new (t || NgxMatTimepickerTimeFormatterPipe)();
    };

    NgxMatTimepickerTimeFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "timeFormatter",
      type: NgxMatTimepickerTimeFormatterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerTimeFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "timeFormatter"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts":
  /*!*************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/pipes/ngx-mat-timepicker-time-localizer.pipe.ts ***!
    \*************************************************************************************/

  /*! exports provided: NgxMatTimepickerTimeLocalizerPipe */

  /***/
  function ngxMatTimepickerSrcLibPipesNgxMatTimepickerTimeLocalizerPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerTimeLocalizerPipe", function () {
      return NgxMatTimepickerTimeLocalizerPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../tokens/ngx-mat-timepicker-time-locale.token */
    "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-units.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-units.enum.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-measures.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-measures.enum.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! luxon */
    "../../node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__); //
    //


    var NgxMatTimepickerTimeLocalizerPipe = /*#__PURE__*/function () {
      function NgxMatTimepickerTimeLocalizerPipe(_locale) {
        _classCallCheck(this, NgxMatTimepickerTimeLocalizerPipe);

        this._locale = _locale;
      }

      _createClass(NgxMatTimepickerTimeLocalizerPipe, [{
        key: "transform",
        value: function transform(time, timeUnit) {
          var isKeyboardEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (time == null || time === "") {
            return "";
          }

          switch (timeUnit) {
            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].HOUR:
              {
                var format = time === 0 || isKeyboardEnabled ? "HH" : "H";
                return this._formatTime(_models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].hour, time, format);
              }

            case _models_ngx_mat_timepicker_units_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerUnits"].MINUTE:
              return this._formatTime(_models_ngx_mat_timepicker_measures_enum__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerMeasure"].minute, time, "mm");

            default:
              throw new Error("There is no Time Unit with type ".concat(timeUnit));
          }
        }
      }, {
        key: "_formatTime",
        value: function _formatTime(timeMeasure, time, format) {
          try {
            return luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromObject(_defineProperty({}, timeMeasure, +time)).setLocale(this._locale).toFormat(format);
          } catch (_a) {
            throw new Error("Cannot format provided time - ".concat(time, " to locale - ").concat(this._locale));
          }
        }
      }]);

      return NgxMatTimepickerTimeLocalizerPipe;
    }();

    NgxMatTimepickerTimeLocalizerPipe.ɵfac = function NgxMatTimepickerTimeLocalizerPipe_Factory(t) {
      return new (t || NgxMatTimepickerTimeLocalizerPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"]));
    };

    NgxMatTimepickerTimeLocalizerPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "timeLocalizer",
      type: NgxMatTimepickerTimeLocalizerPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerTimeLocalizerPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "timeLocalizer"
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_tokens_ngx_mat_timepicker_time_locale_token__WEBPACK_IMPORTED_MODULE_1__["NGX_MAT_TIMEPICKER_LOCALE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts":
  /*!****************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts ***!
    \****************************************************************************/

  /*! exports provided: NgxMatTimepickerAdapter */

  /***/
  function ngxMatTimepickerSrcLibServicesNgxMatTimepickerAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAdapter", function () {
      return NgxMatTimepickerAdapter;
    });
    /* harmony import */


    var _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-format.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-periods.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! luxon */
    "../../node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__); //
    // @dynamic


    var NgxMatTimepickerAdapter = /*#__PURE__*/function () {
      function NgxMatTimepickerAdapter() {
        _classCallCheck(this, NgxMatTimepickerAdapter);
      }

      _createClass(NgxMatTimepickerAdapter, null, [{
        key: "formatHour",

        /***
         *  Format hour according to time format (12 or 24)
         */
        value: function formatHour(currentHour, format, period) {
          if (format === 24) {
            return currentHour;
          }

          var hour = period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerPeriods"].AM ? currentHour : currentHour + 12;

          if (period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerPeriods"].AM && hour === 12) {
            return 0;
          } else if (period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerPeriods"].PM && hour === 24) {
            return 12;
          }

          return hour;
        }
      }, {
        key: "formatTime",
        value: function formatTime(time, opts) {
          if (!time) {
            return "Invalid Time";
          }

          var format = opts.format;
          var parsedTime = NgxMatTimepickerAdapter.parseTime(time, opts).setLocale(NgxMatTimepickerAdapter.defaultLocale);

          if (format !== 24) {
            return parsedTime.toLocaleString(Object.assign(Object.assign({}, luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].TIME_SIMPLE), {
              hour12: format !== 24,
              numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem
            })).replace(/\u200E/g, "");
          }

          return parsedTime.toISOTime({
            includeOffset: false,
            suppressMilliseconds: true,
            suppressSeconds: true
          }).replace(/\u200E/g, "");
        }
      }, {
        key: "fromDateTimeToString",
        value: function fromDateTimeToString(time, format) {
          var timeFormat = format === 24 ? _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWENTY_FOUR : _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWELVE;
          return time.reconfigure({
            numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem,
            locale: NgxMatTimepickerAdapter.defaultLocale
          }).toFormat(timeFormat);
        }
      }, {
        key: "isBetween",
        value: function isBetween(time, before, after) {
          var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "minutes";

          if (unit === "hours") {
            return this.isSameOrBefore(time, after, unit) && this.isSameOrAfter(time, before, unit);
          }

          if (unit === "minutes") {
            return this.isSameOrBefore(time, after) && this.isSameOrAfter(time, before);
          }
        }
      }, {
        key: "isSameOrAfter",
        value: function isSameOrAfter(time, compareWith) {
          var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "minutes";

          if (unit === "hours") {
            return time.hour >= compareWith.hour;
          }

          if (unit === "minutes") {
            return time.hasSame(compareWith, unit) || time.valueOf() > compareWith.valueOf();
          }
        }
      }, {
        key: "isSameOrBefore",
        value: function isSameOrBefore(time, compareWith) {
          var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "minutes";

          if (unit === "hours") {
            return time.hour <= compareWith.hour;
          }

          if (unit === "minutes") {
            return time.hasSame(compareWith, unit) || time.valueOf() <= compareWith.valueOf();
          }
        }
      }, {
        key: "isTimeAvailable",
        value: function isTimeAvailable(time, min, max, granularity, minutesGap, format) {
          if (!time) {
            return;
          }

          var convertedTime = this.parseTime(time, {
            format: format
          });
          var minutes = convertedTime.minute;

          if (minutesGap && minutes === minutes && minutes % minutesGap !== 0) {
            throw new Error("Your minutes - ".concat(minutes, " doesn't match your minutesGap - ").concat(minutesGap));
          }

          var isAfter = min && !max && this.isSameOrAfter(convertedTime, min, granularity);
          var isBefore = max && !min && this.isSameOrBefore(convertedTime, max, granularity);
          var between = min && max && this.isBetween(convertedTime, min, max, granularity);
          var isAvailable = !min && !max;
          return isAfter || isBefore || between || isAvailable;
        }
      }, {
        key: "parseTime",
        value: function parseTime(time, opts) {
          var _NgxMatTimepickerAdap = NgxMatTimepickerAdapter._getLocaleOptionsByTime(time, opts),
              numberingSystem = _NgxMatTimepickerAdap.numberingSystem,
              locale = _NgxMatTimepickerAdap.locale;

          var isPeriodExist = time.split(" ").length === 2;
          var timeMask = isPeriodExist ? _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWELVE_SHORT : _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWENTY_FOUR_SHORT;
          return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromFormat(time, timeMask, {
            numberingSystem: numberingSystem,
            locale: locale
          });
        }
      }, {
        key: "toLocaleTimeString",
        value: function toLocaleTimeString(time) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _opts$format = opts.format,
              format = _opts$format === void 0 ? NgxMatTimepickerAdapter.defaultFormat : _opts$format,
              _opts$locale = opts.locale,
              locale = _opts$locale === void 0 ? NgxMatTimepickerAdapter.defaultLocale : _opts$locale;
          var hourCycle = format === 24 ? "h23" : "h12";
          var timeFormat = Object.assign(Object.assign({}, luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].TIME_SIMPLE), {
            hourCycle: hourCycle
          });
          var timeMask = format === 24 ? _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWENTY_FOUR_SHORT : _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFormat"].TWELVE_SHORT;
          return luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromFormat(time, timeMask).setLocale(locale).toLocaleString(timeFormat);
        }
      }, {
        key: "_getLocaleOptionsByTime",
        value: function _getLocaleOptionsByTime(time, opts) {
          var _luxon__WEBPACK_IMPOR2 = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().setLocale(opts.locale).resolvedLocaleOpts(),
              numberingSystem = _luxon__WEBPACK_IMPOR2.numberingSystem,
              locale = _luxon__WEBPACK_IMPOR2.locale;

          var localeConfig = {
            numberingSystem: numberingSystem,
            locale: locale
          };
          var defaultConfig = {
            numberingSystem: NgxMatTimepickerAdapter.defaultNumberingSistem,
            locale: NgxMatTimepickerAdapter.defaultLocale
          };
          return isNaN(parseInt(time, 10)) ? localeConfig : defaultConfig;
        }
      }]);

      return NgxMatTimepickerAdapter;
    }();

    NgxMatTimepickerAdapter.defaultFormat = 12;
    NgxMatTimepickerAdapter.defaultLocale = "en-US";
    NgxMatTimepickerAdapter.defaultNumberingSistem = "latn";
    /***/
  },

  /***/
  "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts":
  /*!**********************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-event.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: NgxMatTimepickerEventService */

  /***/
  function ngxMatTimepickerSrcLibServicesNgxMatTimepickerEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerEventService", function () {
      return NgxMatTimepickerEventService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js"); //


    var NgxMatTimepickerEventService = /*#__PURE__*/function () {
      function NgxMatTimepickerEventService() {
        _classCallCheck(this, NgxMatTimepickerEventService);

        this._backdropClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._keydownEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(NgxMatTimepickerEventService, [{
        key: "dispatchEvent",
        value: function dispatchEvent(event) {
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
      }, {
        key: "backdropClick",
        get: function get() {
          return this._backdropClick$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }));
        }
      }, {
        key: "keydownEvent",
        get: function get() {
          return this._keydownEvent$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
            bufferSize: 1,
            refCount: true
          }));
        }
      }]);

      return NgxMatTimepickerEventService;
    }();

    NgxMatTimepickerEventService.ɵfac = function NgxMatTimepickerEventService_Factory(t) {
      return new (t || NgxMatTimepickerEventService)();
    };

    NgxMatTimepickerEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxMatTimepickerEventService,
      factory: NgxMatTimepickerEventService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerEventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts":
  /*!****************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker.service.ts ***!
    \****************************************************************************/

  /*! exports provided: NgxMatTimepickerService */

  /***/
  function ngxMatTimepickerSrcLibServicesNgxMatTimepickerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerService", function () {
      return NgxMatTimepickerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-periods.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-periods.enum.ts");
    /* harmony import */


    var _ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ngx-mat-timepicker-adapter */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! luxon */
    "../../node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);

    var DEFAULT_HOUR = {
      time: 12,
      angle: 360
    };
    var DEFAULT_MINUTE = {
      time: 0,
      angle: 360
    };

    var NgxMatTimepickerService = /*#__PURE__*/function () {
      function NgxMatTimepickerService() {
        _classCallCheck(this, NgxMatTimepickerService);

        this._hour$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](DEFAULT_HOUR);
        this._minute$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](DEFAULT_MINUTE);
        this._period$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].AM);
      }

      _createClass(NgxMatTimepickerService, [{
        key: "getFullTime",
        value: function getFullTime(format) {
          var selectedHour = this._hour$.getValue().time;

          var selectedMinute = this._minute$.getValue().time;

          var hour = selectedHour != null ? selectedHour : DEFAULT_HOUR.time;
          var minute = selectedMinute != null ? selectedMinute : DEFAULT_MINUTE.time;
          var period = format === 12 ? this._period$.getValue() : "";
          var time = "".concat(hour, ":").concat(minute, " ").concat(period).trim();
          return _ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerAdapter"].formatTime(time, {
            format: format
          });
        }
      }, {
        key: "setDefaultTimeIfAvailable",
        value: function setDefaultTimeIfAvailable(time, min, max, format, minutesGap) {
          /* Workaround to double error message*/
          try {
            if (_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerAdapter"].isTimeAvailable(time, min, max, "minutes", minutesGap)) {
              this._setDefaultTime(time, format);
            }
          } catch (e) {
            console.error(e);
          }
        }
      }, {
        key: "_resetTime",
        value: function _resetTime() {
          this.hour = Object.assign({}, DEFAULT_HOUR);
          this.minute = Object.assign({}, DEFAULT_MINUTE);
          this.period = _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].AM;
        }
      }, {
        key: "_setDefaultTime",
        value: function _setDefaultTime(time, format) {
          var defaultTime = _ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerAdapter"].parseTime(time, {
            format: format
          }).toJSDate();

          if (luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromJSDate(defaultTime).isValid) {
            var period = time.substr(time.length - 2).toUpperCase();
            var hour = defaultTime.getHours();
            this.hour = Object.assign(Object.assign({}, DEFAULT_HOUR), {
              time: formatHourByPeriod(hour, period)
            });
            this.minute = Object.assign(Object.assign({}, DEFAULT_MINUTE), {
              time: defaultTime.getMinutes()
            });
            this.period = period;
          } else {
            this._resetTime();
          }
        }
      }, {
        key: "hour",
        set: function set(hour) {
          this._hour$.next(hour);
        }
      }, {
        key: "minute",
        set: function set(minute) {
          this._minute$.next(minute);
        }
      }, {
        key: "period",
        set: function set(period) {
          var isPeriodValid = period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].AM || period === _models_ngx_mat_timepicker_periods_enum__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerPeriods"].PM;

          if (isPeriodValid) {
            this._period$.next(period);
          }
        }
      }, {
        key: "selectedHour",
        get: function get() {
          return this._hour$.asObservable();
        }
      }, {
        key: "selectedMinute",
        get: function get() {
          return this._minute$.asObservable();
        }
      }, {
        key: "selectedPeriod",
        get: function get() {
          return this._period$.asObservable();
        }
      }]);

      return NgxMatTimepickerService;
    }();

    NgxMatTimepickerService.ɵfac = function NgxMatTimepickerService_Factory(t) {
      return new (t || NgxMatTimepickerService)();
    };

    NgxMatTimepickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxMatTimepickerService,
      factory: NgxMatTimepickerService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
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
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts":
  /*!************************************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/tokens/ngx-mat-timepicker-time-locale.token.ts ***!
    \************************************************************************************/

  /*! exports provided: NGX_MAT_TIMEPICKER_LOCALE */

  /***/
  function ngxMatTimepickerSrcLibTokensNgxMatTimepickerTimeLocaleTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGX_MAT_TIMEPICKER_LOCALE", function () {
      return NGX_MAT_TIMEPICKER_LOCALE;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/ngx-mat-timepicker-adapter */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts"); //


    var NGX_MAT_TIMEPICKER_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("TimeLocale", {
      providedIn: "root",
      factory: function factory() {
        return _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerAdapter"].defaultLocale;
      }
    });
    /***/
  },

  /***/
  "../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts":
  /*!***********************************************************************!*\
    !*** ../ngx-mat-timepicker/src/lib/utils/ngx-mat-timepicker.utils.ts ***!
    \***********************************************************************/

  /*! exports provided: NgxMatTimepickerUtils */

  /***/
  function ngxMatTimepickerSrcLibUtilsNgxMatTimepickerUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerUtils", function () {
      return NgxMatTimepickerUtils;
    });
    /* harmony import */


    var _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../services/ngx-mat-timepicker-adapter */
    "../ngx-mat-timepicker/src/lib/services/ngx-mat-timepicker-adapter.ts");
    /* harmony import */


    var _models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/ngx-mat-timepicker-format.enum */
    "../ngx-mat-timepicker/src/lib/models/ngx-mat-timepicker-format.enum.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! luxon */
    "../../node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__); //
    // @dynamic


    var NgxMatTimepickerUtils = /*#__PURE__*/function () {
      function NgxMatTimepickerUtils() {
        _classCallCheck(this, NgxMatTimepickerUtils);
      }

      _createClass(NgxMatTimepickerUtils, null, [{
        key: "disableHours",
        value: function disableHours(hours, config) {
          if (config.min || config.max) {
            return hours.map(function (value) {
              var hour = config.format === 24 ? value.time : _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].formatHour(value.time, config.format, config.period);
              var currentTime = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({
                hour: hour
              }).toFormat(_models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerFormat"].TWELVE);
              return Object.assign(Object.assign({}, value), {
                disabled: !_services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].isTimeAvailable(currentTime, config.min, config.max, "hours")
              });
            });
          }

          return hours;
        }
      }, {
        key: "disableMinutes",
        value: function disableMinutes(minutes, selectedHour, config) {
          if (config.min || config.max) {
            var hour = _services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].formatHour(selectedHour, config.format, config.period);

            return minutes.map(function (value) {
              var currentTime = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromObject({
                hour: hour,
                minute: value.time
              }).toFormat(_models_ngx_mat_timepicker_format_enum__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerFormat"].TWELVE);
              return Object.assign(Object.assign({}, value), {
                disabled: !_services_ngx_mat_timepicker_adapter__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerAdapter"].isTimeAvailable(currentTime, config.min, config.max, "minutes")
              });
            });
          }

          return minutes;
        }
      }, {
        key: "getHours",
        value: function getHours(format) {
          return Array(format).fill(1).map(function (v, i) {
            var angleStep = 30;
            var time = v + i;
            var angle = angleStep * time;
            return {
              time: time === 24 ? 0 : time,
              angle: angle
            };
          });
        }
      }, {
        key: "getMinutes",
        value: function getMinutes() {
          var gap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var minutesCount = 60;
          var angleStep = 360 / minutesCount;
          var minutes = [];

          for (var i = 0; i < minutesCount; i++) {
            var angle = angleStep * i;

            if (i % gap === 0) {
              minutes.push({
                time: i,
                angle: angle !== 0 ? angle : 360
              });
            }
          }

          return minutes;
        }
      }, {
        key: "isDigit",
        value: function isDigit(e) {
          // Allow: backspace, delete, tab, escape, enter
          if ([46, 8, 9, 27, 13].some(function (n) {
            return n === e.keyCode;
          }) || // Allow: Ctrl/cmd+A
          e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true) || // Allow: Ctrl/cmd+C
          e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true) || // Allow: Ctrl/cmd+X
          e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true) || // Allow: home, end, left, right, up, down
          e.keyCode >= 35 && e.keyCode <= 40) {
            return true;
          }

          return !((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105));
        }
      }]);

      return NgxMatTimepickerUtils;
    }();
    /***/

  },

  /***/
  "../ngx-mat-timepicker/src/public-api.ts":
  /*!***********************************************!*\
    !*** ../ngx-mat-timepicker/src/public-api.ts ***!
    \***********************************************/

  /*! exports provided: NgxMatTimepickerFieldComponent, NgxMatTimepickerToggleComponent, NgxMatTimepickerDirective, NgxMatTimepickerToggleIconDirective, NgxMatTimepickerModule */

  /***/
  function ngxMatTimepickerSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerFieldComponent", function () {
      return _lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_0__["NgxMatTimepickerFieldComponent"];
    });
    /* harmony import */


    var _lib_components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-toggle/ngx-mat-timepicker-toggle.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleComponent", function () {
      return _lib_components_ngx_mat_timepicker_toggle_ngx_mat_timepicker_toggle_component__WEBPACK_IMPORTED_MODULE_1__["NgxMatTimepickerToggleComponent"];
    });
    /* harmony import */


    var _lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/directives/ngx-mat-timepicker.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerDirective", function () {
      return _lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerDirective"];
    });
    /* harmony import */


    var _lib_directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/directives/ngx-mat-timepicker-toggle-icon.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker-toggle-icon.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerToggleIconDirective", function () {
      return _lib_directives_ngx_mat_timepicker_toggle_icon_directive__WEBPACK_IMPORTED_MODULE_3__["NgxMatTimepickerToggleIconDirective"];
    });
    /* harmony import */


    var _lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/ngx-mat-timepicker.module */
    "../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerModule", function () {
      return _lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_4__["NgxMatTimepickerModule"];
    }); // COMPONENTS
    // DIRECTIVES
    //

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: NgxMatTimepickerAppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAppComponent", function () {
      return NgxMatTimepickerAppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./code-viewer/code-viewer.component */
    "./src/app/code-viewer/code-viewer.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _ngx_mat_timepicker_src_lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive */
    "../ngx-mat-timepicker/src/lib/directives/ngx-mat-timepicker.directive.ts");
    /* harmony import */


    var _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker/ngx-mat-timepicker.component.ts");
    /* harmony import */


    var _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component */
    "../ngx-mat-timepicker/src/lib/components/ngx-mat-timepicker-field/ngx-mat-timepicker-field.component.ts");

    function NgxMatTimepickerAppComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " radio_button_unchecked");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NgxMatTimepickerAppComponent_button_13_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_checked ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NgxMatTimepickerAppComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerAppComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var theme_r8 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.updateTheme(theme_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatTimepickerAppComponent_button_13_mat_icon_1_Template, 2, 0, "mat-icon", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "use", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var theme_r8 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedTheme.value === theme_r8.value)("ngIfElse", _r0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", theme_r8.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", theme_r8.value ? "#444" : "#fff");
      }
    }

    function NgxMatTimepickerAppComponent_mat_form_field_111_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerAppComponent_mat_form_field_111_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selectedTime = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("format", 24)("ngModel", ctx_r6.selectedTime)("ngxMatTimepicker", _r7);
      }
    }

    var NgxMatTimepickerAppComponent = /*#__PURE__*/function () {
      function NgxMatTimepickerAppComponent() {
        _classCallCheck(this, NgxMatTimepickerAppComponent);

        this.githubLink = "https://github.com/tonysamperi/ngx-mat-timepicker";
        this.showInput = !0;
        this.themes = [{
          value: "",
          description: "Light"
        }, {
          value: "dark-theme",
          description: "Dark"
        }];
        this.selectedTheme = this.themes[0];
      }

      _createClass(NgxMatTimepickerAppComponent, [{
        key: "updateTheme",
        value: function updateTheme(theme) {
          this.selectedTheme = theme;
          document.body.classList.toggle("dark-theme", !!theme.value);
        }
      }]);

      return NgxMatTimepickerAppComponent;
    }();

    NgxMatTimepickerAppComponent.ɵfac = function NgxMatTimepickerAppComponent_Factory(t) {
      return new (t || NgxMatTimepickerAppComponent)();
    };

    NgxMatTimepickerAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxMatTimepickerAppComponent,
      selectors: [["app-root"]],
      decls: 124,
      vars: 12,
      consts: [["fakeRadioButton", ""], ["color", "primary", 1, "ngx-mtp-header", "mat-elevation-z6"], ["src", "assets/angular-white-transparent.svg", "alt", "", 1, "ngx-mtp-ng-logo"], [1, "ngx-mtp-header-title"], ["mat-button", "", 3, "matMenuTriggerFor"], ["themeMenu", ""], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "href"], ["src", "assets/github-circle-white-transparent.svg", "alt", "", 1, "ngx-mtp-github-logo"], [1, "ngx-mtp-top"], [1, "mat-h1", "ngx-mtp-main-title"], [1, "ngx-mtp-badges"], ["src", "https://img.shields.io/npm/v/ngx-mat-timepicker.svg?style=flat-square", "alt", ""], ["src", "https://img.shields.io/npm/dm/ngx-mat-timepicker.svg?style=flat-square", "alt", ""], ["src", "https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square", "alt", ""], ["src", "https://travis-ci.com/tonysamperi/ngx-mat-timepicker.svg?branch=master", "alt", ""], ["src", "https://img.shields.io/bundlephobia/min/ngx-mat-timepicker", "alt", ""], [1, "ngx-mtp-padding", "ngx-mtp-d-flex", "ngx-mtp-align-center", "ngx-mtp-justify-center"], ["mat-raised-button", "", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "css-1oabto8"], ["d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"], [1, "ngx-mtp-generic-section"], [1, "mat-h2"], [1, "terminal"], [1, "ngx-mtp-container"], [1, "demo-form"], [1, "mat-color-primary"], [1, "example", "ngx-mtp-d-flex", "ngx-mtp-align-center", "ngx-mtp-flex-column"], ["matInput", "", "name", "selected_time_A", "placeholder", "4:00 PM", "readonly", "", 3, "ngModel", "ngxMatTimepicker", "ngModelChange"], ["pickerA", ""], [1, "language-markup"], [1, "mat-color-accent"], ["matInput", "", "name", "selected_time_B", "format", "24", "placeholder", "16:00", "readonly", "", 3, "ngModel", "ngxMatTimepicker", "ngModelChange"], ["color", "accent"], ["pickerB", ""], [1, "mat-color-warn"], ["color", "warn", 3, "defaultTime"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "ngx-mtp-margin-top", "ngx-mtp-margin-bottom", "ngx-mtp-d-inline-block", 3, "click"], [1, "ngx-mtp-box-bordered"], ["pickerC", ""], ["mat-menu-item", "", 3, "click"], ["color", "accent", 4, "ngIf", "ngIfElse"], [1, "ngx-mtp-theme-example"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "100%", "height", "100%", "viewBox", "0 0 80 80", "fit", "", "preserveAspectRatio", "xMidYMid meet", "focusable", "false"], ["d", "M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z", "id", "a"], ["d", "M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z", "id", "b"], ["d", "M0 0h80v17.24H0V0z", "id", "c"], [0, "xlink", "href", "#a", 1, "docs-theme-icon-background"], [0, "xlink", "href", "#b", "fill", "#ff4081", 1, "docs-theme-icon-button"], [0, "xlink", "href", "#c", "fill", "#3f51b5", 1, "docs-theme-icon-toolbar"], ["matInput", "", "name", "selected_time", "placeholder", "12:00", "readonly", "", 3, "format", "ngModel", "ngxMatTimepicker", "ngModelChange"]],
      template: function NgxMatTimepickerAppComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "an Angular material 9+ extension to add time pickers!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Star on Github ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Install NgxMatTimepicker ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "npm i @popperjs/core");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "npm i ngx-popperjs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Picker with 12h format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " palette (primary)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code-viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerAppComponent_Template_input_ngModelChange_55_listener($event) {
            return ctx.selectedTime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "ngx-mat-timepicker", null, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "pre", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n<mat-form-field>\n    <input matInput\n           name=\"selected_time_A\"\n           [(ngModel)]=\"selectedTime\"\n           [ngxMatTimepicker]=\"pickerA\"\n           placeholder=\"4:00 PM\"\n           readonly />\n</mat-form-field>\n<ngx-mat-timepicker #pickerA></ngx-mat-timepicker>\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Picker with 24h format");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "accent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " palette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code-viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatTimepickerAppComponent_Template_input_ngModelChange_74_listener($event) {
            return ctx.selectedTime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "ngx-mat-timepicker", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "pre", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n<mat-form-field>\n    <input matInput\n           name=\"selected_time_B\"\n           format=\"24\"\n           [(ngModel)]=\"selectedTime\"\n           [ngxMatTimepicker]=\"pickerB\"\n           placeholder=\"16:00\"\n           readonly />\n</mat-form-field>\n<ngx-mat-timepicker color=\"accent\"\n                    #pickerB></ngx-mat-timepicker>\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "ngx-mat-timepicker-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " palette");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code-viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "ngx-mat-timepicker-field", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "pre", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n<ngx-mat-timepicker-field color=\"warn\"\n                          [defaultTime]=\"'11:11 AM'\"></ngx-mat-timepicker-field>\n                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Input with *ngIf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "using ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "*ngIf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " to show/hide only the input, but not the ngx-mat-timepicker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Before v 9.0.3, inputs weren't detached when destroyed, so you needed to destroy the ngx-mat-timepicker as well. Not anymore.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code-viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, NgxMatTimepickerAppComponent_mat_form_field_111_Template, 2, 3, "mat-form-field", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatTimepickerAppComponent_Template_button_click_112_listener() {
            return ctx.showInput = !ctx.showInput;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ngx-mat-timepicker is here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "ngx-mat-timepicker", 33, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.githubLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.githubLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTime)("ngxMatTimepicker", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTime)("ngxMatTimepicker", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultTime", "11:11 AM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.showInput ? "Destroy" : "Restore", " input ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n<mat-form-field *ngIf=\"showInput\">\n    <input matInput\n    name=\"selected_time\"\n    [format]=\"24\"\n    [(ngModel)]=\"selectedTime\"\n    [ngxMatTimepicker]=\"pickerC\"\n    placeholder=\"12:00\"\n    readonly />\n</mat-form-field>\n<button mat-raised-button\n        class=\"ngx-mtp-margin-top ngx-mtp-margin-bottom ngx-mtp-d-inline-block\"\n        (click)=\"showInput = !showInput\"\n        color=\"primary\">\n                        ", ctx.showInput ? "Destroy" : "Restore", " input\n</button>\n<div class=\"ngx-mtp-box-bordered\">\n    <small>ngx-mat-timepicker is here</small>\n    <ngx-mat-timepicker color=\"accent\"\n                        #pickerC></ngx-mat-timepicker>\n</div>\n                    ");
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CodeViewerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ngx_mat_timepicker_src_lib_directives_ngx_mat_timepicker_directive__WEBPACK_IMPORTED_MODULE_10__["NgxMatTimepickerDirective"], _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_ngx_mat_timepicker_component__WEBPACK_IMPORTED_MODULE_11__["NgxMatTimepickerComponent"], _ngx_mat_timepicker_src_lib_components_ngx_mat_timepicker_field_ngx_mat_timepicker_field_component__WEBPACK_IMPORTED_MODULE_12__["NgxMatTimepickerFieldComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.mat-badge-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%] {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%] {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.05em;\n  margin: 0 0 56px;\n}\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%] {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.02em;\n  margin: 0 0 64px;\n}\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%] {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.005em;\n  margin: 0 0 64px;\n}\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 64px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-checkbox[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.mat-chip[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mat-table[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-calendar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-calendar-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n}\n.mat-dialog-title[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.34375em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 150%;\n  line-height: 1.125;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 1.125em;\n  line-height: 1.125;\n}\n.mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-label-wrapper[_ngcontent-%COMP%] {\n  top: -0.84375em;\n  padding-top: 0.84375em;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.34375em;\n}\n.mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.34375em;\n}\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  font-size: 75%;\n  margin-top: 0.6666666667em;\n  top: calc(100% - 1.7916666667em);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.4375em 0;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.3333533333%;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.28125em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0.5416666667em;\n  top: calc(100% - 1.6666666667em);\n}\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28122em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28121em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.2812em) scale(0.75);\n  }\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.25em 0 0.75em 0;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.09375em;\n  margin-top: -0.5em;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1em 0 1em 0;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.84375em;\n  margin-top: -0.25em;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: -0.0625em;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n}\n.mat-radio-button[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select-trigger[_ngcontent-%COMP%] {\n  height: 1.125em;\n}\n.mat-slide-toggle-content[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-step-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-step-sub-label-error[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.mat-step-label-error[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-step-label-selected[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-tab-group[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0;\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.mat-tooltip-handset[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.mat-list-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-simple-snackbar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n.mat-tree[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media screen and (-ms-high-contrast: active) {\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n    opacity: 0.6;\n  }\n}\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n@-webkit-keyframes cdk-text-field-autofill-start {\n  \n}\n@keyframes cdk-text-field-autofill-start {\n  \n}\n@-webkit-keyframes cdk-text-field-autofill-end {\n  \n}\n@keyframes cdk-text-field-autofill-end {\n  \n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-animation: cdk-text-field-autofill-start 0s 1ms;\n          animation: cdk-text-field-autofill-start 0s 1ms;\n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  -webkit-animation: cdk-text-field-autofill-end 0s 1ms;\n          animation: cdk-text-field-autofill-end 0s 1ms;\n}\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n[_nghost-%COMP%] {\n  display: block;\n  padding-top: 56px;\n}\n.ngx-mtp-header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img.ngx-mtp-ng-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 16px;\n  height: 26px;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .ngx-mtp-header-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.ngx-mtp-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .ngx-mtp-github-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 26px;\n  vertical-align: middle;\n}\n.ngx-mtp-top[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 20px;\n  text-align: center;\n  overflow: hidden;\n  padding-top: 60px;\n  padding-bottom: 20px;\n  position: relative;\n}\n.ngx-mtp-top[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  background-image: url(/assets/angular-white-transparent.svg);\n  background-size: contain;\n  bottom: 0;\n  right: 150px;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.2;\n  width: 200px;\n  height: 200px;\n}\n@media (max-width: 991px) {\n  .ngx-mtp-top[_ngcontent-%COMP%]:before {\n    right: calc(50% - 100px);\n    opacity: 0.1;\n  }\n}\n.ngx-mtp-top[_ngcontent-%COMP%]    > h1.ngx-mtp-main-title[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 300;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n.ngx-mtp-top[_ngcontent-%COMP%]   .ngx-mtp-badges[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 8px;\n}\n.ngx-mtp-top[_ngcontent-%COMP%]   .ngx-mtp-badges[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.ngx-mtp-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n  padding: 20px;\n}\n.demo-form[_ngcontent-%COMP%] {\n  padding: 16px;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.demo-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n@media (min-width: 768px) {\n  .demo-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: calc(50% - 16px);\n  }\n}\n@media (max-width: 991px) {\n  .demo-form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: calc(100% - 16px);\n  }\n}\n.demo-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n@media (max-width: 991px) {\n  .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 34px;\n  line-height: 26px;\n  text-indent: 6px;\n  text-align: left;\n  height: 34px;\n}\n.terminal[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n  text-align: left;\n  padding-top: 44px;\n}\n.terminal[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci1yZXBvL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyLXJlcG8vc3JjL2FwcC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvcHJvamVjdHNcXG5neC1tYXQtdGltZXBpY2tlci1yZXBvXFxzcmNcXHNjc3NcXHRoZW1lcy5zY3NzIiwicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyLXJlcG8vc3JjL2FwcC9DOlxcZ2l0XFxuZ3gtbWF0LXRpbWVwaWNrZXIvbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXF90aGVtaW5nLnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXItcmVwby9zcmMvYXBwL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyLXJlcG9cXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXItcmVwby9zcmMvYXBwL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyLXJlcG9cXHNyY1xcc2Nzc1xccmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBQ282Q0Esa0NBQUE7QUF1aURBLDJDQUFBO0FBd0NBLHFCQUFBO0FBbC9CRTtFQUNFLGdCQXJMb0I7RUFzTHBCLGVBdkxrQjtFQXdMbEIsaURBQUE7QUYzL0RKO0FFOC9ERTtFQUVFLGNBQUE7QUY1L0RKO0FFKy9ERTtFQUNFLGVBQUE7QUY1L0RKO0FFaXNERTtFQTlORSx3REFBQTtFQVlGLHNCQUFBO0VBb05FLGdCQUFBO0FGN3JESjtBRWdzREU7RUFuT0Usd0RBQUE7RUFZRixzQkFBQTtFQXlORSxnQkFBQTtBRjVyREo7QUUrckRFO0VBeE9FLHdEQUFBO0VBWUYsc0JBQUE7RUE4TkUsZ0JBQUE7QUYzckRKO0FFOHJERTtFQTdPRSx3REFBQTtFQVlGLHNCQUFBO0VBbU9FLGdCQUFBO0FGMXJESjtBRWdzREU7RUFyUEUscUVBQUE7RUE4UEEsZ0JBQUE7QUZwc0RKO0FFdXNERTtFQWpRRSxxRUFBQTtFQTBRQSxnQkFBQTtBRjNzREo7QUU4c0RFO0VBN1FFLHdEQUFBO0VBWUYsc0JBQUE7QUZ4OENGO0FFNnNERTtFQWpSRSx3REFBQTtFQVlGLHNCQUFBO0FGbjhDRjtBRTJzREk7RUFDRSxnQkFBQTtBRnpzRE47QUU2c0RFO0VBelJFLHdEQUFBO0VBWUYsc0JBQUE7QUYzN0NGO0FFNHNERTtFQTdSRSwwREFBQTtFQVlGLHVCQUFBO0VBbVJFLGdCQUFBO0FGeHNESjtBRTJzREU7RUFsU0Usd0RBQUE7RUFZRix1QkFBQTtFQXdSRSxnQkFBQTtBRnZzREo7QUUwc0RFO0VBdlNFLHdEQUFBO0VBWUYsd0JBQUE7RUE2UkUsZ0JBQUE7QUZ0c0RKO0FFeXNERTtFQTVTRSx3REFBQTtFQVlGLHNCQUFBO0VBa1NFLGdCQUFBO0FGcnNESjtBRW84REU7RUE3aUJFLHdEQUFBO0VBWUYsc0JBQUE7QUY5NUNGO0FFcW1FRTs7RUFHSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRm5tRU47QUUyckVFO0VBQ0UsaURBQUE7QUZ4ckVKO0FFdXRFRTtFQUNFLGlEQUFBO0FGcHRFSjtBRXV0RUU7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUZydEVOO0FFeXRFRTtFQUNFLGVBQUE7QUZ0dEVKO0FFeXRFRTs7RUFFRSxlQUFBO0FGdHRFSjtBRTJ6RUU7RUFDRSxpREFBQTtBRnh6RUo7QUU0ekVFO0VBQ0UsaUJBQUE7QUZ6ekVKO0FFcTVFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRmw1RUo7QUVvNUVJOztFQUVFLGVBekZzQjtBRnp6RTVCO0FFeTdFRTtFQUNFLGlEQUFBO0FGdDdFSjtBRXk3RUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUZ0N0VKO0FFeTdFRTtFQUNFLGVBQUE7QUZ0N0VKO0FFbWtGRTtFQUNFLGlEQUFBO0FGaGtGSjtBRW1rRkU7RUFDRSxlQXJJMEI7QUYzN0U5QjtBRW1rRkU7O0VBR0ksZUFBQTtFQUNBLGdCQUFBO0FGamtGTjtBRXFrRkU7RUFFSSxlQWpKaUM7RUFrSmpDLGdCQUFBO0FGbmtGTjtBRTBsRkU7RUF0eENFLHdEQUFBO0VBWUYsc0JBQUE7QUYzMENGO0FFb3BGRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGbHBGTjtBRXNwRkU7RUE3MUNFLHdEQUFBO0VBWUYsc0JBQUE7QUZoMENGO0FFd2xKRTtFQTd5R0Usa0JBZVU7RUFkVixnQkFlWTtFQWRaLGtCQWVZO0VBZFosaURBZVk7RUFHZCxzQkFBQTtBRnh6Q0Y7QUVvbEpFO0VBQ0UseUJBUHVCO0FGMWtKM0I7QUV1bEpJOztFQUNFLGVBdkIyQjtFQXdCM0Isa0JBdENVO0FGN2lKaEI7QUV1bEpJOztFQUNFLGFBQUE7RUFDQSxZQUFBO0FGcGxKTjtBRXNsSk07O0VBQ0UsZUFBQTtFQUNBLGtCQWhEUTtBRm5pSmhCO0FFd2xKRTtFQUNFLGdCQUFBO0VBRUEsdUNBQUE7QUZ0bEpKO0FFMGxKSTs7RUFyRUYsNkNBQUE7RUFFQSxzQkFBQTtBRmpoSkY7QUU0bEpJO0VBN0VGLDZDQUFBO0VBRUEsc0JBQUE7QUY3Z0pGO0FFK2xKRTtFQUNFLGVBQUE7RUFDQSxzQkFuRWlCO0FGemhKckI7QUUrbEpFO0VBQ0UsY0FBQTtBRjVsSko7QUUrbEpFO0VBR0UsaUJBaEV1QjtBRjloSjNCO0FFaW1KRTtFQUNFLGNBL0VvQjtFQWdGcEIsMEJBekVxQjtFQTZFckIsZ0NBQUE7QUZqbUpKO0FFd3BJSTtFQUNFLHNCQUpxQjtBRmpwSTNCO0FFd3BJSTtFQUNFLG1CQUFBO0FGdHBJTjtBRTBwSU07O0VBekRKLG9GQUFBO0VBSUEsaURBQUE7RUFHQSxzQkFBQTtBRmxtSUY7QUUycElNO0VBaEVKLHNGQUFBO0VBSUEsaURBQUE7RUFHQSxzQkFBQTtBRjdsSUY7QUU4cElNO0VBeEVKLHNGQUFBO0VBSUEsaURBQUE7RUFHQSxzQkFBQTtBRnhsSUY7QUVncUlJO0VBQ0UsY0FBQTtBRjlwSU47QUVpcUlJO0VBR0UsY0F6Q3FCO0FGeG5JM0I7QUVvcUlJO0VBQ0UsMEJBakRtQjtFQXFEbkIsZ0NBQUE7QUZycUlOO0FFMnFJRTtFQUdNOztJQXZGTiw2Q0FBQTtFRmpsSUE7RUUrcUlNO0lBOUZOLDZDQUFBO0VGOWtJQTtFRW9ySU07SUF0R04sNENBQUE7RUYza0lBO0FBQ0Y7QUUrK0hJO0VBQ0UsMEJBQUE7QUY3K0hOO0FFZy9ISTtFQUNFLGNBQUE7RUFDQSxrQkFUMkI7QUZyK0hqQztBRWsvSE07O0VBaENKLDZDQUFBO0VBRUEsc0JBQUE7QUYvOEhGO0FFcy9ITTtFQXpDSiw2Q0FBQTtFQUVBLHNCQUFBO0FGMzhIRjtBRWd4SUk7RUFDRSxvQkFBQTtBRjd3SU47QUVneElJO0VBQ0UsY0FBQTtFQUNBLG1CQVQ4QjtBRnJ3SXBDO0FFa3hJTTs7RUF2Q0osNkNBQUE7RUFFQSxzQkFBQTtBRnh1SUY7QUVzeElNO0VBaERKLDZDQUFBO0VBRUEsc0JBQUE7QUZwdUlGO0FFb2tGRTs7RUFHRSxlQUFBO0FGbGtGSjtBRWtoRkU7O0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FGN2dGSjtBRWdoRkk7O0VBQ0UsZUF3Q3FCO0FGcmpGM0I7QUV1dEZFO0VBQ0UscUJBQUE7QUZwdEZKO0FFKzFGRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGNzFGTjtBRTA0RkU7O0VBR0ksaURBQUE7RUFDQSxlQUFBO0FGeDRGTjtBRWlpR0U7RUFDRSxpREFBQTtBRjloR0o7QUVzbUdFO0VBQ0UsaURBQUE7QUZubUdKO0FFc21HRTtFQUNFLGVBQUE7QUZubUdKO0FFOHZHRTtFQUNFLGlEQUFBO0FGM3ZHSjtBRW82R0U7RUFFSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRmw2R047QUVvL0dFO0VBQ0UsaURBQUE7QUZqL0dKO0FFby9HRTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBRmwvR047QUVzL0dFO0VBQ0UsbUJBQUE7QUZuL0dKO0FFcy9HRTtFQUNFLGVBQUE7QUZuL0dKO0FFcy9HRTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtBRnAvR047QUVtcEhFO0VBQ0UsaURBQUE7QUZocEhKO0FFbXBIRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGanBITjtBRWd0SEU7Ozs7Ozs7RUFob0ZFLHdEQUFBO0VBWUYsc0JBQUE7RUE0bkZFLFNBQUE7QUY1c0hKO0FFc3VIRTtFQUNFLGlEQUFBO0VBQ0EsZUFuQm9CO0VBb0JwQixnQkFuQjJCO0VBb0IzQixtQkFwQjJCO0FGL3NIL0I7QUVzdUhFO0VBQ0UsZUFyQjRCO0VBc0I1QixnQkFwQkE7RUFxQkEsbUJBckJBO0FGOXNISjtBRTJxRkU7RUFDRSxpREFIWTtBRnJxRmhCO0FFMnFGRTtFQUNFLGlEQVBZO0FGanFGaEI7QUU2cUZJO0VBQ0UsZUFBQTtBRjFxRk47QUUyNUVFO0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FGdjVFSjtBRTA1RUk7RUFDRSxlQXlRdUI7QUZqcUY3QjtBRW9xRkk7RUFDRSxlQUFBO0FGbHFGTjtBRTg0RUU7RUFSQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFRRSxjQUFBO0VBQ0Esc0JBQUE7QUYxNEVKO0FFNjRFSTtFQUNFLGVBOFF1QjtBRnpwRjdCO0FFNHBGSTtFQUNFLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGMXBGTjtBRWdxRkk7RUFDRSxlQUFBO0FGN3BGTjtBRTIzRUU7RUFSQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFRRSxjQUFBO0VBQ0Esc0JBQUE7QUZ2M0VKO0FFMDNFSTtFQUNFLGVBNFJ1QjtBRnBwRjdCO0FFdXBGSTtFQUNFLGVBQUE7QUZycEZOO0FFODJFRTtFQVJBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQVFFLGNBQUE7RUFDQSxzQkFBQTtBRjEyRUo7QUU2MkVJO0VBQ0UsZUFpU3VCO0FGNW9GN0I7QUUrb0ZJO0VBQ0UsaURBMUNVO0VBMkNWLGVBQUE7RUFDQSxnQkFBQTtBRjdvRk47QUUyaUNFO0VBRUksaURBQUE7RUFDQSxlQUFBO0FGemlDTjtBRStqQ0U7RUFyRkUsd0RBQUE7RUFZRixzQkFBQTtBRmovQkY7QUU0cUhFO0VBRUksaURBQUE7RUFDQSxlQUFBO0FGMXFITjtBRThxSEU7RUFDRSxjQUFBO0VBRUUsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGNXFITjtBRWcySUU7RUFDRSxpREFBQTtBRjcxSUo7QUVnMklFOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBRjcxSUo7QUUyMUJFO0VBQ0UsZ0JBQUE7RUFJQSxrQkFBQTtBRjMxQko7QUVrMkJJO0VBQ0Usd0JBQUE7QUZoMkJOO0FFbzJCRTtFQUNFLGlCQUFBO0FGajJCSjtBRW8yQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUNBLG1CQUFBO0FGbDJCSjtBRTlZSTtFQW92Q0UsYUFBQTtBRm4yQk47QUU1YUU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUdBLFVBQUE7RUFHQSx3QkFBQTtFQUNBLHFCQUFBO0FGMmFKO0FFempCRTtFQUVFLG9CQUFBO0VBR0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRnlqQko7QUVyakJFO0VBQ0UsZUFBQTtFQUNBLGFBM0I0QjtBRm1sQmhDO0FFdGpCSTtFQUdFLGFBQUE7QUZzakJOO0FFOWlCRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBMUNrQjtBRjJsQnRCO0FFN2lCRTtFQUdFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBcERrQjtFQXdEbEIsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRjJpQko7QUV4aUJFO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsYUFwRTJCO0VBcUUzQixvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMERBQUE7RUFDQSxVQUFBO0FGeWlCSjtBRXZpQkk7RUFDRSxVQUFBO0FGeWlCTjtBRW5pQk07RUFQRjtJQVFJLFlBQUE7RUZzaUJOO0FBQ0Y7QUVsaUJFO0VBQ0UsK0JBckZtQztBRjBuQnZDO0FFN2hCSTtFQUNFLFVBQUE7QUZnaUJOO0FFMWhCRTtFQUNFLGtCQUFBO0VBQ0EsYUExR2tCO0VBK0dsQixhQUFBO0VBSUEsc0JBQUE7RUFHQSxjQUFBO0VBQ0EsZUFBQTtBRm9oQko7QUVoaEJFO0VBQ0UsZUFBQTtFQUtBLFdBQUE7RUFLQSxrQkFBQTtBRjJnQko7QUVsYkU7RUFBMEMsSUFBQTtBRnNiNUM7QUV0YkU7RUFBMEMsSUFBQTtBRnNiNUM7QUVyYkU7RUFBd0MsSUFBQTtBRndiMUM7QUV4YkU7RUFBd0MsSUFBQTtBRndiMUM7QUV0YkU7RUFFRSx1REFBQTtVQUFBLCtDQUFBO0FGdWJKO0FFcGJFO0VBRUUscURBQUE7VUFBQSw2Q0FBQTtBRnNiSjtBRWpiRTtFQUNFLFlBQUE7QUZvYko7QUU5YUU7RUFxQkEseUJBQUE7RUFDQSxrQ0FBQTtFQXBCRSx1QkFBQTtFQUNBLDJCQUFBO0FGa2JKO0FFemFFO0VBU0EseUJBQUE7RUFDQSxrQ0FBQTtFQVJFLG9CQUFBO0FGNmFKO0FHbHJCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBSHFyQkY7QUdsckJBO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBSHFyQkY7QUduckJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FIcXJCSjtBR25yQkk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBSHFyQk47QUdsckJJO0VBQ0UsZUFBQTtBSG9yQk47QUdqckJJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUhtckJOO0FHN3FCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUhnckJGO0FHOXFCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUhnckJKO0FJNXJCSTtFRENGO0lBY0ksd0JBQUE7SUFDQSxZQUFBO0VIaXJCSjtBQUNGO0FHOXFCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUhnckJKO0FHNXFCSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUg4cUJOO0FHNXFCTTtFQUNFLGVBQUE7QUg4cUJSO0FHeHFCQTtFQUdFLGFBQUE7RUFJQSxtQkFBQTtFQUdBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FIMnFCRjtBR3ZxQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBSDBxQkY7QUd4cUJFO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBSDBxQko7QUl2d0JJO0VEdUZGO0lBU0ksdUJBQUE7RUgycUJKO0FBQ0Y7QUlsdkJJO0VENkRGO0lBYUksd0JBQUE7RUg0cUJKO0FBQ0Y7QUd6cUJFO0VBQ0UsZ0JBQUE7QUgycUJKO0FHcnFCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FId3FCRjtBSXJ3Qkk7RURxRko7SUFVSSxXQUFBO0VIMHFCRjtBQUNGO0FHdnFCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBSDBxQkY7QUd2cUJBO0VBQ0Usd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBSDBxQkY7QUd2cUJBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBSDBxQkYiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyLXJlcG8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cbi5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuXG4ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgLm1hdC10eXBvZ3JhcGh5IGgxIHtcbiAgZm9udDogNDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cblxuLm1hdC1oMiwgLm1hdC10aXRsZSwgLm1hdC10eXBvZ3JhcGh5IGgyIHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cblxuLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsIC5tYXQtdHlwb2dyYXBoeSBoMyB7XG4gIGZvbnQ6IDQwMCAxNnB4LzI4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAubWF0LXR5cG9ncmFwaHkgaDQge1xuICBmb250OiA0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4ubWF0LWg1LCAubWF0LXR5cG9ncmFwaHkgaDUge1xuICBmb250OiA0MDAgY2FsYygxNHB4ICogMC44MykvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTJweDtcbn1cblxuLm1hdC1oNiwgLm1hdC10eXBvZ3JhcGh5IGg2IHtcbiAgZm9udDogNDAwIGNhbGMoMTRweCAqIDAuNjcpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgLm1hdC10eXBvZ3JhcGh5IHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cbi5tYXQtYm9keSBwLCAubWF0LWJvZHktMSBwLCAubWF0LXR5cG9ncmFwaHkgcCB7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gIGZvbnQ6IDQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtZGlzcGxheS00LCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTQge1xuICBmb250OiAzMDAgMTEycHgvMTEycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xuICBtYXJnaW46IDAgMCA1NnB4O1xufVxuXG4ubWF0LWRpc3BsYXktMywgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0zIHtcbiAgZm9udDogNDAwIDU2cHgvNTZweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIG1hcmdpbjogMCAwIDY0cHg7XG59XG5cbi5tYXQtZGlzcGxheS0yLCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTIge1xuICBmb250OiA0MDAgNDVweC80OHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XG4gIG1hcmdpbjogMCAwIDY0cHg7XG59XG5cbi5tYXQtZGlzcGxheS0xLCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTEge1xuICBmb250OiA0MDAgMzRweC80MHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCA2NHB4O1xufVxuXG4ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLFxuLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhcmQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZSxcbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWNoZWNrYm94IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5tYXQtY2hpcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbi5tYXQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtY2FsZW5kYXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xufVxuLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLFxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbixcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24ge1xuICBoZWlnaHQ6IDEuMTI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC41ZW0gMDtcbiAgYm9yZGVyLXRvcDogMC44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMzMyU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMC44NDM3NWVtO1xuICBwYWRkaW5nLXRvcDogMC44NDM3NWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMzQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLXRvcDogMC42NjY2NjY2NjY3ZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS43OTE2NjY2NjY3ZW0pO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNDM3NWVtIDA7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDFweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMzMyU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAycHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM1MzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS4yODEyNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDEuMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwLjU0MTY2NjY2NjdlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjY2NjY2NjY2NjdlbSk7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyMmVtKSBzY2FsZSgwLjc1KTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSgwLjc1KTtcbiAgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoMC43NSk7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC4yNWVtIDAgMC43NWVtIDA7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS4wOTM3NWVtO1xuICBtYXJnaW4tdG9wOiAtMC41ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNTkzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMzMyU7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNTkzNzRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMzMyU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMWVtIDAgMWVtIDA7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS44NDM3NWVtO1xuICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4ubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksXG4ubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIG1hcmdpbi10b3A6IC0wLjA2MjVlbTtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1wYWdpbmF0b3IsXG4ubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1zZWxlY3Qge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBoZWlnaHQ6IDEuMTI1ZW07XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1zdGVwLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtdGFiLWdyb3VwIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXRvb2xiYXIsXG4ubWF0LXRvb2xiYXIgaDEsXG4ubWF0LXRvb2xiYXIgaDIsXG4ubWF0LXRvb2xiYXIgaDMsXG4ubWF0LXRvb2xiYXIgaDQsXG4ubWF0LXRvb2xiYXIgaDUsXG4ubWF0LXRvb2xiYXIgaDYge1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDA7XG59XG5cbi5tYXQtdG9vbHRpcCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG4ubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBmb250OiA1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC10cmVlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXRyZWUtbm9kZSxcbi5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1yaXBwbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LXJpcHBsZTpub3QoOmVtcHR5KSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xufVxuXG4uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG59XG5cbi5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHtcbiAgLyohKi9cbn1cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHtcbiAgLyohKi9cbn1cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zO1xufVxuXG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveCB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogNTZweDtcbn1cblxuLm5neC1tdHAtaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5uZ3gtbXRwLWhlYWRlciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmd4LW10cC1oZWFkZXIgPiBkaXYgPiBpbWcubmd4LW10cC1uZy1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGhlaWdodDogMjZweDtcbn1cbi5uZ3gtbXRwLWhlYWRlciA+IGRpdiA+IC5uZ3gtbXRwLWhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5uZ3gtbXRwLWhlYWRlciA+IGRpdiAubmd4LW10cC1naXRodWItbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmd4LW10cC10b3Age1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uZ3gtbXRwLXRvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2FuZ3VsYXItd2hpdGUtdHJhbnNwYXJlbnQuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmd4LW10cC10b3A6YmVmb3JlIHtcbiAgICByaWdodDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG59XG4ubmd4LW10cC10b3AgPiBoMS5uZ3gtbXRwLW1haW4tdGl0bGUge1xuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDE1cHggNXB4O1xufVxuLm5neC1tdHAtdG9wIC5uZ3gtbXRwLWJhZGdlcyA+IGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubmd4LW10cC10b3AgLm5neC1tdHAtYmFkZ2VzID4gaW1nOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5uZ3gtbXRwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGVtby1mb3JtIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmRlbW8tZm9ybSA+ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kZW1vLWZvcm0gPiAqIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxNnB4KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5kZW1vLWZvcm0gPiAqIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gIH1cbn1cbi5kZW1vLWZvcm0gaDIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGVybWluYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYxMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAudGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XG4gIGNvbG9yOiAjYzJjM2M0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdGV4dC1pbmRlbnQ6IDZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4udGVybWluYWwge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLCBtb25vc3BhY2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxcmVtIDFyZW07XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDQ0cHg7XG59XG5cbi50ZXJtaW5hbCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbi8vQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvaW5kaWdvLXBpbmsuY3NzXCI7XHJcbi8vQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC9wcmVidWlsdC10aGVtZXMvZGVlcHB1cnBsZS1hbWJlci5jc3NcIjtcclxuLy9AaW1wb3J0IFwifkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9waW5rLWJsdWVncmV5LmNzc1wiO1xyXG5cclxuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xyXG4vLyBQbHVzIGltcG9ydHMgZm9yIG90aGVyIGNvbXBvbmVudHMgaW4geW91ciBhcHAuXHJcblxyXG4vLyBJbmNsdWRlIHRoZSBjb21tb24gc3R5bGVzIGZvciBBbmd1bGFyIE1hdGVyaWFsLiBXZSBpbmNsdWRlIHRoaXMgaGVyZSBzbyB0aGF0IHlvdSBvbmx5XHJcbi8vIGhhdmUgdG8gbG9hZCBhIHNpbmdsZSBjc3MgZmlsZSBmb3IgQW5ndWxhciBNYXRlcmlhbCBpbiB5b3VyIGFwcC5cclxuLy8gKipCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSEqKlxyXG5AaW5jbHVkZSBtYXQtY29yZSgpO1xyXG5cclxuLy8gRGVmaW5lIHRoZSBkZWZhdWx0IHRoZW1lIChzYW1lIGFzIHRoZSBleGFtcGxlIGFib3ZlKS5cclxuJGNhbmR5LWFwcC1wcmltYXJ5OiBtYXQtcGFsZXR0ZSgkbWF0LWluZGlnbyk7XHJcbiRjYW5keS1hcHAtYWNjZW50OiBtYXQtcGFsZXR0ZSgkbWF0LXBpbmssIEEyMDAsIEExMDAsIEE0MDApO1xyXG4kY2FuZHktYXBwLXdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkLCBBMjAwLCBBMTAwLCBBNDAwKTtcclxuJGNhbmR5LWFwcC10aGVtZTogbWF0LWxpZ2h0LXRoZW1lKCRjYW5keS1hcHAtcHJpbWFyeSwgJGNhbmR5LWFwcC1hY2NlbnQpO1xyXG5cclxuXHJcbi8vIERlZmluZSBhbiBhbHRlcm5hdGUgZGFyayB0aGVtZS5cclxuJGRhcmstcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC1waW5rKTtcclxuJGRhcmstYWNjZW50OiBtYXQtcGFsZXR0ZSgkbWF0LWJsdWUtZ3JleSwgQTIwMCwgQTEwMCwgQTQwMCk7XHJcbiRkYXJrLXdhcm46IG1hdC1wYWxldHRlKCRtYXQtZGVlcC1vcmFuZ2UpO1xyXG4kZGFyay10aGVtZTogbWF0LWRhcmstdGhlbWUoJGRhcmstcHJpbWFyeSwgJGRhcmstYWNjZW50LCAkZGFyay13YXJuKTtcclxuXHJcbi8vIEluY2x1ZGUgdGhlIGFsdGVybmF0aXZlIHRoZW1lIHN0eWxlcyBpbnNpZGUgb2YgYSBibG9jayB3aXRoIGEgQ1NTIGNsYXNzLiBZb3UgY2FuIG1ha2UgdGhpc1xyXG4vLyBDU1MgY2xhc3Mgd2hhdGV2ZXIgeW91IHdhbnQuIEluIHRoaXMgZXhhbXBsZSwgYW55IGNvbXBvbmVudCBpbnNpZGUgb2YgYW4gZWxlbWVudCB3aXRoXHJcbi8vIGAuZGFyay10aGVtZWAgd2lsbCBiZSBhZmZlY3RlZCBieSB0aGlzIGFsdGVybmF0ZSBkYXJrIHRoZW1lIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGhlbWUuIiwiLy8gSW1wb3J0IGFsbCB0aGUgdGhlbWluZyBmdW5jdGlvbmFsaXR5LlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpICFkZWZhdWx0O1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gIEBpZiAoJHNlbGVjdG9yLWNvbnRleHQgPT0gJycpIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skc2VsZWN0b3ItY29udGV4dH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vLy9cbi8vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8vICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gY2RrLWhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlLCAkZW5jYXBzdWxhdGlvbjogJ2FueScpIHtcbiAgQGlmICgkdGFyZ2V0ICE9ICdhY3RpdmUnIGFuZCAkdGFyZ2V0ICE9ICdibGFjay1vbi13aGl0ZScgYW5kICR0YXJnZXQgIT0gJ3doaXRlLW9uLWJsYWNrJykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCB2YWx1ZSBcIiN7JHRhcmdldH1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJhY3RpdmVcIiwgXCJibGFjay1vbi13aGl0ZVwiLCBhbmQgXCJ3aGl0ZS1vbi1ibGFja1wiJztcbiAgfVxuXG4gIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdhbnknKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IGVuY2Fwc3VsYXRpb24gXCIjeyRlbmNhcHN1bGF0aW9ufVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcIm9uXCIsIFwib2ZmXCIsIGFuZCBcImFueVwiJztcbiAgfVxuXG4gIC8vIElmIHRoZSBzZWxlY3RvciBjb250ZXh0IGhhcyBtdWx0aXBsZSBwYXJ0cywgc3VjaCBhcyBgLnNlY3Rpb24sIC5yZWdpb25gLCBqdXN0IGRvaW5nXG4gIC8vIGAuY2RrLWhpZ2gtY29udHJhc3QteHh4ICN7Jn1gIHdpbGwgb25seSBhcHBseSB0aGUgcGFyZW50IHNlbGVjdG9yIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZVxuICAvLyBjb250ZXh0LiBXZSBhZGRyZXNzIHRoaXMgYnkgbmVzdGluZyB0aGUgc2VsZWN0b3IgY29udGV4dCB1bmRlciAuY2RrLWhpZ2gtY29udHJhc3QuXG4gIEBhdC1yb290IHtcbiAgICAkc2VsZWN0b3ItY29udGV4dDogI3smfTtcblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0ge1xuICAgICAgICBAaW5jbHVkZSBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvZmYnKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSA6aG9zdCB7XG4gICAgICAgIEBpbmNsdWRlIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIGNkay10ZXh0LWZpZWxkIHtcbiAgLy8gS2V5ZnJhbWVzIHRoYXQgYXBwbHkgbm8gc3R5bGVzLCBidXQgYWxsb3cgdXMgdG8gbW9uaXRvciB3aGVuIGFuIHRleHQgZmllbGQgYmVjb21lcyBhdXRvZmlsbGVkXG4gIC8vIGJ5IHdhdGNoaW5nIGZvciB0aGUgYW5pbWF0aW9uIGV2ZW50cyB0aGF0IGFyZSBmaXJlZCB3aGVuIHRoZXkgc3RhcnQuIE5vdGU6IHRoZSAvKiEqLyBjb21tZW50IGlzXG4gIC8vIG5lZWRlZCB0byBwcmV2ZW50IExpYlNhc3MgZnJvbSBzdHJpcHBpbmcgdGhlIGtleWZyYW1lcyBvdXQuXG4gIC8vIEJhc2VkIG9uOiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsvKiEqL31cbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgey8qISovfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zO1xuICB9XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgQGluY2x1ZGUgX2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZTtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvLyBTaW1pbGFyIHRvIHRoZSBgY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZ2AgY2xhc3MsIGJ1dCBvbmx5IGFwcGxpZWQgb24gRmlyZWZveC4gV2UgbmVlZFxuICAvLyB0byB1c2UgdGhpcyBjbGFzcywgYmVjYXVzZSBGaXJlZm94IGhhcyBhIGJ1ZyB3aGVyZSBjaGFuZ2luZyB0aGUgYG92ZXJmbG93YCBicmVha3MgdGhlIHVzZXInc1xuICAvLyBhYmlsaXR5IHRvIHVuZG8vcmVkbyB3aGF0IHRoZXkgd2VyZSB0eXBpbmcgKHNlZSAjMTY2MjkpLiBUaGlzIGNsYXNzIGlzIG9ubHkgc2NvcGVkIHRvIEZpcmVmb3gsXG4gIC8vIGJlY2F1c2UgdGhlIG1lYXN1cmVtZW50cyB0aGVyZSBkb24ndCBzZWVtIHRvIGJlIGFmZmVjdGVkIGJ5IHRoZSBgaGVpZ2h0OiAwYCwgd2hlcmVhcyBvbiBvdGhlclxuICAvLyBicm93c2VycyB0aGV5IGFyZSwgZS5nLiBDaHJvbWUgZGV0ZWN0cyBsb25nZXIgdGV4dCBhbmQgSUUgZG9lcyd0IHJlc2l6ZSBiYWNrIHRvIG5vcm1hbC5cbiAgLy8gSWRlbnRpY2FsIGlzc3VlIHJlcG9ydDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDQ4Nzg0XG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveCB7XG4gICAgQGluY2x1ZGUgX2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZTtcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWl4aW4gX2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZSB7XG4gIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5IGZvciBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0XG4gICAgLy8gZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcyxcbiAgICAgICAgICAgICAgIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OlxuICAgICAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgbWF0ZXJpYWwgZGVzaWduIHRyZWF0bWVudHMgdG8gYW55IGVsZW1lbnQuXG4vLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJG1hdC14c21hbGw6ICdtYXgtd2lkdGg6IDU5OXB4JztcbiRtYXQtc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1hc3RlciBsaXN0XG5cbiR6LWluZGV4LWZhYjogMjAgIWRlZmF1bHQ7XG4kei1pbmRleC1kcmF3ZXI6IDEwMCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGNvbnN0YW50c1xuJHBpOiAzLjE0MTU5MjY1O1xuXG4vLyBQYWRkaW5nIGJldHdlZW4gaW5wdXQgdG9nZ2xlcyBhbmQgdGhlaXIgbGFiZWxzXG4kbWF0LXRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiRtYXQtdG9nZ2xlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbi8vIEVhc2luZyBDdXJ2ZXNcbi8vIFRPRE8oamVsYm91cm4pOiBhbGwgb2YgdGhlc2UgbmVlZCB0byBiZSByZXZpc2l0ZWRcblxuLy8gVGhlIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlcyB1c2VkIGJ5IG1hdGVyaWFsIGRlc2lnbi5cbiRtYXQtbGluZWFyLW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMC4xKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LWxpbmVhci1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpICFkZWZhdWx0O1xuXG4kZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0OiBhbGwgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLWR1cmF0aW9uOiAzMDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMikgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbjogYWxsICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uOiA1MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb246ICRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbiAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dDogYWxsICRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtbGluZWFyLWR1cmF0aW9uOiA4MG1zICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXI6IGFsbCAkc3dpZnQtbGluZWFyLWR1cmF0aW9uICRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRfbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuQG1peGluIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB0b29sdGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbik7XG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBibGFjayxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIGJhY2tncm91bmQ6ICMzMDMwMzAsXG4gIGhvdmVyOiAgICAgIHJnYmEod2hpdGUsIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlhbG9nOiAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYSh3aGl0ZSwgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBmb2N1c2VkLWJ1dHRvbjogJGxpZ2h0LWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IGJsYWNrLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogYmxhY2ssXG4gIHRvb2x0aXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDAsICR0ZXh0OiAkZGVmYXVsdCkge1xuICAkcmVzdWx0OiBtYXBfbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcbiAgICB0ZXh0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICR0ZXh0KSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcF9tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJGNvbG9yLW1hcCBUaGUgdGhlbWUgcGFsZXR0ZSAob3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIEBwYXJhbSAkaHVlIFRoZSBodWUgZnJvbSB0aGUgcGFsZXR0ZSB0byB1c2UuIElmIHRoaXMgaXMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGl0IHdpbGxcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXG4vLyBAcGFyYW0gJG9wYWNpdHkgVGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgZm9yIHRoZSBjb2xvci5cbkBmdW5jdGlvbiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWU6IGRlZmF1bHQsICRvcGFjaXR5OiBudWxsKSB7XG4gIC8vIElmIGh1ZUtleSBpcyBhIG51bWJlciBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgdGhlbiBpdCBhY3R1YWxseSBjb250YWlucyBhblxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxuICBAaWYgdHlwZS1vZigkaHVlKSA9PSBudW1iZXIgYW5kICRodWUgPj0gMCBhbmQgJGh1ZSA8PSAxIHtcbiAgICBAcmV0dXJuIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJGh1ZSk7XG4gIH1cblxuICAkY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsICRodWUpO1xuXG4gIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgLy8gSWYgdGhlICRjb2xvciByZXNvbHZlZCB0byBzb21ldGhpbmcgZGlmZmVyZW50IGZyb20gYSBjb2xvciAoZS5nLiBhIENTUyB2YXJpYWJsZSksXG4gICAgLy8gd2UgY2FuJ3QgYXBwbHkgdGhlIG9wYWNpdHkgYW55d2F5IHNvIHdlIHJldHVybiB0aGUgdmFsdWUgYXMgaXMsIG90aGVyd2lzZSBTYXNzIGNhblxuICAgIC8vIHRocm93IGFuIGVycm9yIG9yIG91dHB1dCBzb21ldGhpbmcgaW52YWxpZC5cbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfVxuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsIGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBsaWdodCB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWxpZ2h0LXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiBmYWxzZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGRhcmsgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1kYXJrLXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiB0cnVlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cblxuJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTogMC4xO1xuXG5AbWl4aW4gbWF0LXJpcHBsZSgpIHtcblxuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIFByb21vdGUgY29udGFpbmVycyB0aGF0IGhhdmUgcmlwcGxlcyB0byBhIG5ldyBsYXllci4gV2Ugd2FudCB0byB0YXJnZXQgYDpub3QoOmVtcHR5KWAsXG4gICAgLy8gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGFsbCByaXBwbGUgY29udGFpbmVycyB0byBoYXZlIHRoZWlyIG93biBsYXllciBzaW5jZSB0aGV5J3JlIHVzZWQgaW4gYVxuICAgIC8vIGxvdCBvZiBwbGFjZXMgYW5kIHRoZSBsYXllciBpcyBvbmx5IHJlbGV2YW50IHdoaWxlIGFuaW1hdGluZy4gTm90ZSB0aGF0IGlkZWFsbHkgd2UnZCB1c2VcbiAgICAvLyB0aGUgYGNvbnRhaW5gIHByb3BlcnR5IGhlcmUgKHNlZSAjMTMxNzUpLCBiZWNhdXNlIGA6ZW1wdHlgIGNhbiBiZSBicm9rZW4gYnkgaGF2aW5nIGV4dHJhXG4gICAgLy8gdGV4dCBpbnNpZGUgdGhlIGVsZW1lbnQsIGJ1dCBpdCBpc24ndCB2ZXJ5IHdlbGwgc3VwcG9ydGVkIHlldC5cbiAgICAmOm5vdCg6ZW1wdHkpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIC8vIEd1YXJkIGFnYWluc3QgdW5xdW90aW5nIG5vbi1zdHJpbmcgdmFsdWVzLCBiZWNhdXNlIGl0J3MgZGVwcmVjYXRlZC5cbiAgQHJldHVybiBpZih0eXBlLW9mKCRmb250LWZhbWlseSkgPT0gc3RyaW5nLCB1bnF1b3RlKCRmb250LWZhbWlseSksICRmb250LWZhbWlseSk7XG59XG5cbi8vIE91dHB1dHMgdGhlIHNob3J0aGFuZCBgZm9udGAgQ1NTIHByb3BlcnR5LCBiYXNlZCBvbiBhIHNldCBvZiB0eXBvZ3JhcGh5IHZhbHVlcy4gRmFsbHMgYmFjayB0b1xuLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KSB7XG4gIC8vIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBzZXQgdG8gYGluaGVyaXRgLCB3ZSBjYW4ndCB1c2UgdGhlIHNob3J0aGFuZFxuICAvLyBzbyB3ZSBmYWxsIGJhY2sgdG8gcGFzc2luZyBpbiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLlxuICBAaWYgKCRmb250LXNpemUgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXNpemUgPT0gbnVsbCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gbnVsbCkge1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBzaG9ydGhhbmQgYGZvbnRgLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGFtb3VudCBvZiBieXRlcy4gTm90ZVxuICAgIC8vIHRoYXQgd2UgbmVlZCB0byB1c2UgaW50ZXJwb2xhdGlvbiBmb3IgYGZvbnQtc2l6ZS9saW5lLWhlaWdodGAgaW4gb3JkZXIgdG8gcHJldmVudFxuICAgIC8vIFNhc3MgZnJvbSBkaXZpZGluZyB0aGUgdHdvIHZhbHVlcy5cbiAgICBmb250OiAkZm9udC13ZWlnaHQgI3skZm9udC1zaXplfS8jeyRsaW5lLWhlaWdodH0gJGZvbnQtZmFtaWx5O1xuICB9XG59XG5cbi8vIENvbnZlcnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBpbnRvIENTUyBzdHlsZXMuXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsICRsZXZlbCkge1xuICAkZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbCk7XG5cbiAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSk7XG4gIGxldHRlci1zcGFjaW5nOiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKTtcbn1cblxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1vcHRpb24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxuICAgICY6Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbiBtdWx0aXBsZSBtb2RlIHRoZXJlIGlzIGEgY2hlY2tib3ggdG8gc2hvdyB0aGF0IHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgJi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICYubWF0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0aW9uIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcbiAgJGNvbG9yZWQtYm94LXNlbGVjdG9yOiAnLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc7XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIHRoZSBhY2NlbnQgY29sb3IuIE5vdGUgdGhhdCB0aGUgcHNldWRvIGNoZWNrYm94ZXMgYXJlIG1lYW50IHRvIGluaGVyaXQgdGhlXG4gIC8vIHRoZW1lIGZyb20gdGhlaXIgcGFyZW50LCByYXRoZXIgdGhhbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHRoZW1pbmcsIHdoaWNoIGlzIHdoeSB3ZVxuICAvLyBkb24ndCBhdHRhY2ggdG8gdGhlIGBtYXQtKmAgY2xhc3Nlcy4gQWxzbyBub3RlIHRoYXQgdGhpcyBuZWVkcyB0byBiZSBiZWxvdyBgLm1hdC1wcmltYXJ5YFxuICAvLyBpbiBvcmRlciB0byBhbGxvdyBmb3IgdGhlIGNvbG9yIHRvIGJlIG92ZXJ3cml0dGVuIGlmIHRoZSBjaGVja2JveCBpcyBpbnNpZGUgYSBwYXJlbnQgdGhhdFxuICAvLyBoYXMgYG1hdC1hY2NlbnRgIGFuZCBpcyBwbGFjZWQgaW5zaWRlIGFub3RoZXIgcGFyZW50IHRoYXQgaGFzIGBtYXQtcHJpbWFyeWAuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgJi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFJlcHJlc2VudHMgYSB0eXBvZ3JhcGh5IGxldmVsIGZyb20gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWxldmVsKFxuICAkZm9udC1zaXplLFxuICAkbGluZS1oZWlnaHQ6ICRmb250LXNpemUsXG4gICRmb250LXdlaWdodDogNDAwLFxuICAkZm9udC1mYW1pbHk6IG51bGwsXG4gICRsZXR0ZXItc3BhY2luZzogbm9ybWFsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWVzIGhlcmUgY29tZSBmcm9tXG4vLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW0pLFxuICAkZGlzcGxheS0zOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNTZweCwgNTZweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW0pLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgICAvLyBjYWxjIGlzIHVzZWQgaGVyZSB0byBzdXBwb3J0IGNzcyB2YXJpYWJsZXNcbiAgICAgIGNhbGMoI3ttYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSl9ICogMC44MyksXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7bWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpfSAqIDAuNjcpLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTEsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMSk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxufVxuXG5cblxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9ucyBpbiBhdXRvY29tcGxldGVzIHNob3VsZCBub3QgYmUgZ3JheSwgYnV0IHdlXG4gICAgLy8gb25seSB3YW50IHRvIG92ZXJyaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBvcHRpb25zIGlmXG4gICAgLy8gdGhleSBhcmUgKm5vdCogaW4gaG92ZXIgb3IgZm9jdXMgc3RhdGUuIFRoaXMgY2hhbmdlIGhhcyB0byBiZVxuICAgIC8vIG1hZGUgaGVyZSBiZWNhdXNlIGJhc2Ugb3B0aW9uIHN0eWxlcyBhcmUgc2hhcmVkIGJldHdlZW4gdGhlXG4gICAgLy8gYXV0b2NvbXBsZXRlIGFuZCB0aGUgc2VsZWN0LlxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAgICY6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cbi8vIFRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBzdHlsZXMgZm9yIHRoZSBiYWRnZVxuLy8gcmF0aGVyIHRoYW4ganVzdCB0aGUgY29sb3IvdGhlbWUgYmVjYXVzZSBvZlxuLy8gbm8gc3R5bGUgc2hlZXQgc3VwcG9ydCBmb3IgZGlyZWN0aXZlcy5cblxuXG5cblxuXG4kbWF0LWJhZGdlLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMDtcbiRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJG1hdC1iYWRnZS1zbWFsbC1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSAtIDY7XG4kbWF0LWJhZGdlLWxhcmdlLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplICsgNjtcblxuLy8gTWl4aW4gZm9yIGJ1aWxkaW5nIG9mZnNldCBnaXZlbiBkaWZmZXJlbnQgc2l6ZXNcbkBtaXhpbiBfbWF0LWJhZGdlLXNpemUoJHNpemUpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSkge1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAodHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCB0eXBlLW9mKCRhcHAtYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbWl4KCRhcHAtYmFja2dyb3VuZCwgcmdiYSgkYmFkZ2UtY29sb3IsIDEpLCAoMSAtICRiYWRnZS1vcGFjaXR5KSAqIDEwMCUpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFkZ2UtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LFxuICAubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBUaGUgYWN0aXZlIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGFkZGVkXG4gIC8vIHNvIGl0IGNhbiBhbmltYXRlIHNjYWxlIHRvIGRlZmF1bHRcbiAgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICAgIC8vIFNjYWxlIHRvIGBub25lYCBpbnN0ZWFkIG9mIGAxYCB0byBhdm9pZCBibHVycnkgdGV4dCBpbiBzb21lIGJyb3dzZXJzLlxuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLXNtYWxsLXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWxhcmdlLXNpemUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6ICRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZTtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIC8vIFNldCB0aGUgZm9udCBzaXplIHRvIDc1JSBvZiB0aGUgb3JpZ2luYWwuXG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDAuNzU7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlLiBJZiB0aGUgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmdcbi8vIG9uIGEgQ1NTIHZhcmlhYmxlLCB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWUsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgJGh1ZSwgJG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkd2FybiwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgYSBwcm9wZXJ0eSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICRwcm9wZXJ0eSwgJGh1ZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAmLm1hdC1wcmltYXJ5IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcHJpbWFyeSwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtYWNjZW50IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkYWNjZW50LCAkaHVlKTtcbiAgfVxuICAmLm1hdC13YXJuIHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkd2FybiwgJGh1ZSk7XG4gIH1cblxuICAmLm1hdC1wcmltYXJ5LCAmLm1hdC1hY2NlbnQsICYubWF0LXdhcm4sICZbZGlzYWJsZWRdIHtcbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAkcGFsZXR0ZTogaWYoJHByb3BlcnR5ID09ICdjb2xvcicsICRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCk7XG4gICAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAvLyBCdXR0b25zIHdpdGhvdXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHNob3VsZCBpbmhlcml0IHRoZSBmb250IGNvbG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBidXR0b24gaXMgcmVhZGFibGUgb24gY3VzdG9tIGJhY2tncm91bmQgY29sb3JzLiBJdCdzIHdyb25nIHRvIGFsd2F5cyBhc3N1bWVcbiAgICAvLyB0aGF0IHRob3NlIGJ1dHRvbnMgYXJlIGFsd2F5cyBwbGFjZWQgaW5zaWRlIG9mIGNvbnRhaW5lcnMgd2l0aCB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgLy8gY29sb3Igb2YgdGhlIHRoZW1lIChlLmcuIHRoZW1lZCB0b29sYmFycykuXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdjb2xvcicsIHRleHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKTtcblxuICAgIC8vIFNldHVwIHRoZSByaXBwbGUgY29sb3IgdG8gYmUgYmFzZWQgb24gdGhlIHRleHQgY29sb3IuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSByaXBwbGVzXG4gICAgLy8gYXJlIG1hdGNoaW5nIHdpdGggdGhlIGN1cnJlbnQgdGhlbWUgcGFsZXR0ZSBhbmQgYXJlIGluIGNvbnRyYXN0IHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgLy8gKGUuZyBpbiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICB9XG5cbiAgLy8gTm90ZTogdGhpcyBuZWVkcyBhIGJpdCBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB3ZSdyZSBub3QgZ3VhcmFudGVlZCB0aGUgaW5jbHVzaW9uXG4gIC8vIG9yZGVyIG9mIHRoZSB0aGVtZSBzdHlsZXMgYW5kIHRoZSBidXR0b24gcmVzZXQgbWF5IGVuZCB1cCByZXNldHRpbmcgdGhpcyBhcyB3ZWxsLlxuICAubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgLy8gRGVmYXVsdCBmb250IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gbm90IHVzaW5nIGFueSBjb2xvciBwYWxldHRlLlxuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgcmFpc2VkLWJ1dHRvbik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdjb2xvcicsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2JhY2tncm91bmQtY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24sIC5tYXQtZmxhdC1idXR0b24ge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oOCwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEyLCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLFxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRkaXZpZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbiwgMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIHtcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtYnV0dG9uKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZSk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBOZWVkcyBleHRyYSBzcGVjaWZpY2l0eSB0byBiZSBhYmxlIHRvIG92ZXJyaWRlIHRoZSBlbGV2YXRpb24gc2VsZWN0b3JzLlxuICAgICYubWF0LWNhcmQtZmxhdCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHRpdGxlKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSxcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgJi5tYXQtY2hlY2tib3gtY2hlY2tlZCxcbiAgICAmLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gIC5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldChtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIGJhc2UpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSxcbiAgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZSBlbGVtZW50LlxuLy8gSWYgdGhlIGNvbG9yIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLlxuLy8gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZyBvbiBhIENTUyB2YXJpYWJsZSxcbi8vIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfbWF0LWNoaXBzLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZC1jb2xvcikgIT0gY29sb3IpIHtcbiAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgIEBpbmNsdWRlIF9tYXQtY2hpcHMtcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKCR1bnNlbGVjdGVkLWZvcmVncm91bmQsICR1bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuXG4gICAgJjpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSB7XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDMsICR0aGVtZSk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgICRiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJhY2tncm91bmQsICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdG8gYmFja2dyb3VuZCB0byBhIGNvbG9yIChlLmcuIGl0J3MgYSBDU1MgdmFyaWFibGUpLFxuICAgICAgLy8gZmFsbCBiYWNrIHRvIGZhZGluZyB0aGUgY29udGVudCBvdXQgdmlhIGBvcGFjaXR5YC5cbiAgICAgIG9wYWNpdHk6ICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQoJGNvbG9yLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgLy8gZmFkZSBpdCBvdXQgc28gd2UgZmFsbCBiYWNrIHRvIHJlZHVjaW5nIHRoZSBlbGVtZW50IG9wYWNpdHkuIE5vdGUgdGhhdCB3ZSBkb24ndCB1c2UgdGhlXG4gICAgICAvLyAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQsIGJlY2F1c2UgaGludCB0ZXh0IHVzdWFsbHkgaGFzIHNvbWUgb3BhY2l0eSBhcHBsaWVkXG4gICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSksIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybiksIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpIHsgfVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyBGaWd1cmVzIG91dCB0aGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIGZvciBhIGZvcm0gY29udHJvbC5cbi8vIFVzZWQgcHJpbWFyaWx5IHRvIHByZXZlbnQgdGhlIHZhcmlvdXMgZm9ybSBjb250cm9scyBmcm9tXG4vLyBiZWNvbWluZyBvdXQgb2Ygc3luYyBzaW5jZSB0aGVzZSBjb2xvcnMgYXJlbid0IGluIGEgcGFsZXR0ZS5cbkBmdW5jdGlvbiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cblxuXG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuXG4gICAgQGluY2x1ZGUgaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSxcbiAgLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uIHtcbiAgICAmLCAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2Ryb3AtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAvLyBXZSB1c2UgaW52ZXJ0KCkgaGVyZSB0byBoYXZlIHRoZSBkYXJrZW4gdGhlIGJhY2tncm91bmQgY29sb3IgZXhwZWN0ZWQgdG8gYmUgdXNlZC4gSWYgdGhlXG4gICAgICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAgICAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZlcnQoJGJhY2tkcm9wLWNvbG9yKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0aGUgYmFja2Ryb3AgY29sb3IgdG8gYSBjb2xvciB2YWx1ZSwgZmFsbCBiYWNrIHRvIHVzaW5nXG4gICAgICAvLyBgb3BhY2l0eWAgdG8gbWFrZSBpdCBvcGFxdWUgc2luY2UgaXRzIGVuZCB2YWx1ZSBjb3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tkcm9wLWNvbG9yO1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk6IDAuNztcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHkpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgJG9wYWNpdHk6IDAuMjtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LCAkb3BhY2l0eSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgJG9wYWNpdHk6IDAuMTI7XG4gICAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG9wYWNpdHkpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgICAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFzcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAodHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIHR5cGUtb2YoJHRleHQtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBtaXgoJHRhYmxlLWJhY2tncm91bmQsIHJnYmEoJHRleHQtY29sb3IsIDEpLCAoMSAtICR0ZXh0LW9wYWNpdHkpICogMTAwJSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4gIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAsIC5tYXQtdGFiLW5hdi1iYXIge1xuICAgICR0aGVtZS1jb2xvcnM6IChcbiAgICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgICAgYWNjZW50OiAkYWNjZW50LFxuICAgICAgd2FybjogJHdhcm5cbiAgICApO1xuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgdGFic1xuICAgICAgJi5tYXQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBpbmsgYmFyIHdoZW4gYmFja2dyb3VuZCBjb2xvciBpcyB0aGUgc2FtZVxuICAgICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYi1sYWJlbC1mb2N1cygkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHRvb2x0aXAsIDAuOSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJGRhcmstcHJpbWFyeS10ZXh0LCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQpO1xuICAgIGJhY2tncm91bmQ6IGlmKCRpcy1kYXJrLXRoZW1lLCBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLCAjMzIzMjMyKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgaW5oZXJpdCwgbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IGluaGVyaXQ7XG4gICAgICBzaXplOiBpbmhlcml0O1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMSwgMC4wNCkpO1xuICAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjA1LCAwLjAyKSk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRvcCBvZiB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLXRvcDogMC4yNWVtO1xuICAvLyBUaGUgcGFkZGluZyBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLWJvdHRvbTogMC43NWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG4vLyBTYW1lIGFzIG1peGluIGFib3ZlLCBidXQgb21pdHMgdGhlIHRyYW5zbGF0ZVogZm9yIHByaW50aW5nIHB1cnBvc2VzLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgb3V0bGluZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBzdGFuZGFyZCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7fVxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IGFwcGx5IHRvIGFsbCBhcHBlYXJhbmNlcyBvZiB0aGUgZm9ybS1maWVsZC5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgLy8gTGFiZWwgY29sb3JzLiBSZXF1aXJlZCBpcyB1c2VkIGZvciB0aGUgYCpgIHN0YXIgc2hvd24gaW4gdGhlIGxhYmVsLlxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICR1bmRlcmxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtaGludCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9jdXNlZC1sYWJlbC1jb2xvcjtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogJHJlcXVpcmVkLWxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1iYXNlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAvLyBTdHlsaW5nIGZvciB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGZvcm0gZmllbGQuIE5vdGUgdGhhdCB3aGlsZSB0aGUgc2FtZSBjYW4gYmVcbiAgLy8gYWNoaWV2ZWQgd2l0aCB0aGUgbmctKiBjbGFzc2VzLCB3ZSB1c2UgdGhpcyBhcHByb2FjaCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZVxuICAvLyBsb2dpYyBpcyB1c2VkIHRvIHN0eWxlIHRoZSBlcnJvciBzdGF0ZSBhbmQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZXMuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcblxuICAgICAgJi5tYXQtYWNjZW50LFxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSk7XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZTogMS41O1xuXG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBpbnB1dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLy8gQWxsb3cgaWNvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEFsbG93IGljb24gYnV0dG9ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuICAgICAgd2lkdGg6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIC8vIFRocm93cyBvZmYgdGhlIGJhc2VsaW5lIGlmIHdlIGRvIGl0IGFzIGEgcmVhbCBtYXJnaW4sIHNvIHdlIGRvIGl0IGFzIGEgYm9yZGVyIGluc3RlYWQuXG4gICAgYm9yZGVyLXRvcDogJGluZml4LW1hcmdpbi10b3Agc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLSRpbmZpeC1tYXJnaW4tdG9wO1xuICAgIHBhZGRpbmctdG9wOiAkaW5maXgtbWFyZ2luLXRvcDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNpemU7XG4gICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRyZWUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10cmVlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdHJlZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZXMgYWxsIG9mIHRoZSB0eXBvZ3JhcGhpYyBzdHlsZXMuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCRjb25maWc6IG51bGwpIHtcbiAgQGlmICRjb25maWcgPT0gbnVsbCB7XG4gICAgJGNvbmZpZzogbWF0LXR5cG9ncmFwaHktY29uZmlnKCk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gbWF0LWNvcmUoJHR5cG9ncmFwaHktY29uZmlnOiBudWxsKSB7XG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeS1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay1hMTF5KCk7XG4gIEBpbmNsdWRlIGNkay1vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay10ZXh0LWZpZWxkKCk7XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiBtYXQtY29yZS10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSN7JHpWYWx1ZX0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC8vIE1hcmtlciB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFkZGVkIGEgdGhlbWUgdG8gdGhlaXIgcGFnZS5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQ3JlYXRlIGEgdGhlbWUuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LWNvcmUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKTtcbn1cbiIsIkBpbXBvcnQgXCIuLi9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuQGltcG9ydCBcIi4uL3Njc3MvdGhlbWVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDU2cHg7XHJcbn1cclxuXHJcbi5uZ3gtbXRwLWhlYWRlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgPiBpbWcubmd4LW10cC1uZy1sb2dvIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgIH1cclxuXHJcbiAgICA+IC5uZ3gtbXRwLWhlYWRlci10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAubmd4LW10cC1naXRodWItbG9nbyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi5uZ3gtbXRwLXRvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9hbmd1bGFyLXdoaXRlLXRyYW5zcGFyZW50LnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XHJcbiAgICAgIHJpZ2h0OiBjYWxjKDUwJSAtIDEwMHB4KTtcclxuICAgICAgb3BhY2l0eTogMC4xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgPiBoMS5uZ3gtbXRwLW1haW4tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDVweDtcclxuICB9XHJcblxyXG4gIC5uZ3gtbXRwLWJhZGdlcyB7XHJcbiAgICA+IGltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5neC1tdHAtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uZGVtby1mb3JtIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gID4gKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgQGluY2x1ZGUgcmVzcG9uZC1hYm92ZSh4cykge1xyXG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAxNnB4KTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUZXJtaW5hbFxyXG5cclxuLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbiAgQGluY2x1ZGUgcmVzcG9uZC1iZWxvdyhzbSkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGVybWluYWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcbiAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIHRleHQtaW5kZW50OiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogNDRweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiIsIiRicmVha3BvaW50czogKFxyXG4gICAgICAgIHh4czogMzYwcHgsXHJcbiAgICAgICAgeHM6IDc2OHB4LFxyXG4gICAgICAgIHNtOiA5OTJweCxcclxuICAgICAgICBtZDogMTIwMHB4LFxyXG4gICAgICAgIGxnOiAxOTIwcHhcclxuKTtcclxuXHJcbi8vXHJcbi8vICBSRVNQT05EIEFCT1ZFXHJcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXHJcblxyXG4vLyBlLmcuIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XHJcbkBtaXhpbiByZXNwb25kLWFib3ZlKCRicmVha3BvaW50KSB7XHJcblxyXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxyXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cclxuICB9IEBlbHNlIHtcclxuXHJcbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vICBSRVNQT05EIEJFTE9XXHJcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXHJcblxyXG4vLyBlLmcuIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHt9XHJcbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XHJcblxyXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxyXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cclxuICB9IEBlbHNlIHtcclxuXHJcbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vICBSRVNQT05EIEJFVFdFRU5cclxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcclxuXHJcbi8vIGUuZy4gQGluY2x1ZGUgcmVzcG9uZC1iZXR3ZWVuKHNtLCBtZCkge31cclxuQG1peGluIHJlc3BvbmQtYmV0d2VlbigkbG93ZXIsICR1cHBlcikge1xyXG5cclxuICAvLyBJZiBib3RoIHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMgZXhpc3QgaW4gdGhlIG1hcC5cclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG5cclxuICAgIC8vIEdldCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzLlxyXG4gICAgJGxvd2VyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIG9uZSBvciBib3RoIG9mIHRoZSBicmVha3BvaW50cyBkb24ndCBleGlzdC5cclxuICB9IEBlbHNlIHtcclxuXHJcbiAgICAvLyBJZiBsb3dlciBicmVha3BvaW50IGlzIGludmFsaWQuXHJcbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cclxuICAgICAgQHdhcm4gJ1lvdXIgbG93ZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdXBwZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxyXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXHJcbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatTimepickerAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: NgxMatTimepickerAppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatTimepickerAppModule", function () {
      return NgxMatTimepickerAppModule;
    });
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-mat-timepicker */
    "../ngx-mat-timepicker/src/public-api.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./code-viewer/code-viewer.component */
    "./src/app/code-viewer/code-viewer.component.ts");
    /* harmony import */


    var _ngx_mat_timepicker_src_lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module */
    "../ngx-mat-timepicker/src/lib/ngx-mat-timepicker.module.ts"); // MATERIAL
    //
    //


    var NgxMatTimepickerAppModule = function NgxMatTimepickerAppModule() {
      _classCallCheck(this, NgxMatTimepickerAppModule);
    };

    NgxMatTimepickerAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: NgxMatTimepickerAppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepickerAppComponent"]]
    });
    NgxMatTimepickerAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function NgxMatTimepickerAppModule_Factory(t) {
        return new (t || NgxMatTimepickerAppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], //
      _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], //
      ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"].setLocale("it-IT")]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgxMatTimepickerAppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepickerAppComponent"], _code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_16__["CodeViewerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], //
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _ngx_mat_timepicker_src_lib_ngx_mat_timepicker_module__WEBPACK_IMPORTED_MODULE_17__["NgxMatTimepickerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NgxMatTimepickerAppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepickerAppComponent"], _code_viewer_code_viewer_component__WEBPACK_IMPORTED_MODULE_16__["CodeViewerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], //
          _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], //
          ngx_mat_timepicker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"].setLocale("it-IT")],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["NgxMatTimepickerAppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/code-viewer/code-viewer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/code-viewer/code-viewer.component.ts ***!
    \******************************************************/

  /*! exports provided: CodeViewerComponent */

  /***/
  function srcAppCodeViewerCodeViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeViewerComponent", function () {
      return CodeViewerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! prismjs */
    "../../node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js"); //


    var _c0 = [[["", 8, "example"]], [["pre"]]];
    var _c1 = [".example", "pre"]; // tslint:disable-next-line:naming-convention

    var CodeViewerComponent = /*#__PURE__*/function () {
      function CodeViewerComponent() {
        _classCallCheck(this, CodeViewerComponent);

        this.showCode = !1;
      }

      _createClass(CodeViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var $code = document.querySelector("code");

          if (!$code) {
            return;
          }

          prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightElement"]($code);
        }
      }]);

      return CodeViewerComponent;
    }();

    CodeViewerComponent.ɵfac = function CodeViewerComponent_Factory(t) {
      return new (t || CodeViewerComponent)();
    };

    CodeViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CodeViewerComponent,
      selectors: [["code-viewer"]],
      ngContentSelectors: _c1,
      decls: 12,
      vars: 7,
      consts: [[1, "code-viewer"], [1, "code-viewer-header"], ["mat-icon-button", "", 3, "matTooltip", "title", "click"], [1, "code-viewer-pane"], [1, "code-viewer-example"]],
      template: function CodeViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeViewerComponent_Template_button_click_4_listener() {
            return ctx.showCode = !ctx.showCode;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.showCode ? "Source" : "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "", ctx.showCode ? "Hide" : "Show", " source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", ctx.showCode ? "Hide" : "Show", " source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.showCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.showCode);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: ["code-viewer {\n  display: block;\n  width: 100%;\n  max-height: 300px;\n  overflow: hidden;\n  box-sizing: border-box;\n}\ncode-viewer * {\n  box-sizing: border-box;\n}\ncode-viewer .code-viewer {\n  background-color: #F0F0F0;\n  max-height: 100%;\n  padding: 0 16px 16px;\n}\ncode-viewer .code-viewer .code-viewer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\ncode-viewer .code-viewer .code-viewer-header mat-icon {\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\ncode-viewer .code-viewer .hide {\n  display: none;\n}\ncode-viewer code[class*=language-], code-viewer pre[class*=language-] {\n  font-family: Consolas, Menlo, Monaco, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Courier New, Courier, monospace;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  hyphens: none;\n}\ncode-viewer code[class*=language-]::-moz-selection, code-viewer code[class*=language-] ::-moz-selection, code-viewer pre[class*=language-]::-moz-selection, code-viewer pre[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6;\n}\ncode-viewer code[class*=language-]::selection, code-viewer code[class*=language-] ::selection, code-viewer pre[class*=language-]::selection, code-viewer pre[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6;\n}\ncode-viewer pre[class*=language-] {\n  overflow-y: auto;\n  padding: 0 16px;\n  background: #281e36;\n  color: #ffe69d;\n  font-size: 12px;\n  border-radius: 0;\n  margin: 0;\n  box-sizing: border-box;\n  max-height: 200px;\n  -webkit-scrollbar-color: #4c3967 transparent;\n  -moz-scrollbar-color: #4c3967 transparent;\n  -ms-scrollbar-color: #4c3967 transparent;\n  scrollbar-color: #4c3967 transparent;\n}\ncode-viewer pre[class*=language-]::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n  height: 7px;\n}\ncode-viewer pre[class*=language-]::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: #4c3967;\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\ncode-viewer pre[class*=language-]::-webkit-scrollbar-thumb:hover {\n  background-color: #715598;\n}\ncode-viewer :not(pre) > code[class*=language-] {\n  color: #ff6b81;\n  font-weight: 700;\n  white-space: pre-wrap;\n}\ncode-viewer :not(pre) > code[class*=language-]::-moz-selection, code-viewer :not(pre) > code[class*=language-] ::-moz-selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff;\n}\ncode-viewer :not(pre) > code[class*=language-]::selection, code-viewer :not(pre) > code[class*=language-] ::selection {\n  text-shadow: none;\n  background: #8f51e6;\n  color: #fff;\n}\ncode-viewer .token-line {\n  min-height: 1em;\n}\ncode-viewer .token.cdata, code-viewer .token.comment, code-viewer .token.doctype, code-viewer .token.prolog {\n  color: #95b2db;\n}\ncode-viewer .token.keyword, code-viewer .token.punctuation {\n  color: #4edee5;\n}\ncode-viewer .token.namespace {\n  opacity: 0.7;\n}\ncode-viewer .token.boolean, code-viewer .token.number, code-viewer .token.operator, code-viewer .token.tag {\n  color: #ed655e;\n}\ncode-viewer .token.function, code-viewer .token.property {\n  color: #b886fd;\n}\ncode-viewer .token.atrule-id, code-viewer .token.selector, code-viewer .token.tag-id {\n  color: #f3ebff;\n}\ncode-viewer .token.attr-name, code-viewer code.language-javascript {\n  color: #d6b9fe;\n}\ncode-viewer .language-css .token.string, code-viewer .language-scss .token.string, code-viewer .style .token.string, code-viewer .token.atrule, code-viewer .token.attr-value, code-viewer .token.control, code-viewer .token.directive, code-viewer .token.entity, code-viewer .token.placeholder, code-viewer .token.regex, code-viewer .token.statement, code-viewer .token.string, code-viewer .token.unit, code-viewer .token.url, code-viewer .token.variable, code-viewer code.language-css, code-viewer code.language-scss {\n  color: #ffb6b3;\n}\ncode-viewer .token.dom {\n  color: #a5c8ff;\n}\ncode-viewer .token.deleted {\n  text-decoration: line-through;\n}\ncode-viewer .token.inserted {\n  border-bottom: 1px dotted #f3ebff;\n  text-decoration: none;\n}\ncode-viewer .token.italic {\n  font-style: italic;\n}\ncode-viewer .token.bold, code-viewer .token.important {\n  font-weight: 700;\n}\ncode-viewer .token.important {\n  color: #d6b9fe;\n}\ncode-viewer .token.entity {\n  cursor: help;\n}\ncode-viewer pre > code.highlight {\n  outline: 0.4em solid #aa75f5;\n  outline-offset: 0.4em;\n}\ncode-viewer .line-numbers .line-numbers-rows {\n  border-right-color: #372f42;\n}\ncode-viewer .line-numbers-rows > span:before {\n  color: #372f42;\n}\ncode-viewer .line-highlight {\n  background: rgba(237, 101, 94, 0.2);\n  background: linear-gradient(90deg, rgba(237, 101, 94, 0.2) 70%, rgba(237, 101, 94, 0));\n}\ncode-viewer .gatsby-highlight-code-line {\n  background-color: #1c1425;\n  display: block;\n  margin-right: -1em;\n  margin-left: -1em;\n  padding-right: 1em;\n  padding-left: 0.75em;\n  border-left: 0.25em solid #ff6b81;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci1yZXBvL3NyYy9hcHAvY29kZS12aWV3ZXIvQzpcXGdpdFxcbmd4LW1hdC10aW1lcGlja2VyL3Byb2plY3RzXFxuZ3gtbWF0LXRpbWVwaWNrZXItcmVwb1xcc3JjXFxhcHBcXGNvZGUtdmlld2VyXFxjb2RlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1tYXQtdGltZXBpY2tlci1yZXBvL3NyYy9hcHAvY29kZS12aWV3ZXIvY29kZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtbWF0LXRpbWVwaWNrZXItcmVwby9zcmMvYXBwL2NvZGUtdmlld2VyL0M6XFxnaXRcXG5neC1tYXQtdGltZXBpY2tlci9wcm9qZWN0c1xcbmd4LW1hdC10aW1lcGlja2VyLXJlcG9cXHNyY1xcYXBwXFxjb2RlLXZpZXdlclxcY29kZS1oaWdobGlnaHQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDREY7QURHRTtFQUNFLHNCQUFBO0FDREo7QURLRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0hKO0FES0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0hOO0FES007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNIUjtBRE9JO0VBQ0UsYUFBQTtBQ0xOO0FDNUJFO0VBQ0Usc05BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0FEOEJKO0FDM0JFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBRDZCSjtBQy9CRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUQ2Qko7QUMxQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EseUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0FENEJKO0FDM0JJO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRDZCTjtBQzNCSTtFQUNFLGtCQUFBO0VBQ0EseUJBMUNrQztFQTJDbEMsb0RBQUE7QUQ2Qk47QUM1Qk07RUFDRSx5QkFBQTtBRDhCUjtBQ3pCRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEMkJKO0FDeEJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUQwQko7QUM3QkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBRDBCSjtBQ3ZCRTtFQUNFLGVBQUE7QUR5Qko7QUN0QkU7RUFDRSxjQUFBO0FEd0JKO0FDckJFO0VBQ0UsY0FBQTtBRHVCSjtBQ3BCRTtFQUNFLFlBQUE7QURzQko7QUNuQkU7RUFDRSxjQUFBO0FEcUJKO0FDbEJFO0VBQ0UsY0FBQTtBRG9CSjtBQ2pCRTtFQUNFLGNBQUE7QURtQko7QUNoQkU7RUFDRSxjQUFBO0FEa0JKO0FDZkU7RUFDRSxjQUFBO0FEaUJKO0FDZEU7RUFDRSxjQUFBO0FEZ0JKO0FDYkU7RUFDRSw2QkFBQTtBRGVKO0FDWkU7RUFDRSxpQ0FBQTtFQUNBLHFCQUFBO0FEY0o7QUNYRTtFQUNFLGtCQUFBO0FEYUo7QUNWRTtFQUNFLGdCQUFBO0FEWUo7QUNURTtFQUNFLGNBQUE7QURXSjtBQ1JFO0VBQ0UsWUFBQTtBRFVKO0FDUEU7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0FEU0o7QUNORTtFQUNFLDJCQUFBO0FEUUo7QUNMRTtFQUNFLGNBQUE7QURPSjtBQ0pFO0VBQ0UsbUNBQUE7RUFDQSxzRkFBQTtBRE1KO0FDSEU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvbmd4LW1hdC10aW1lcGlja2VyLXJlcG8vc3JjL2FwcC9jb2RlLXZpZXdlci9jb2RlLXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJjb2RlLWhpZ2hsaWdodFwiO1xyXG5cclxuY29kZS12aWV3ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIG1hdC1jYXJkXHJcbiAgLmNvZGUtdmlld2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XHJcblxyXG4gICAgLmNvZGUtdmlld2VyLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5oaWRlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGNvZGUtaGlnaGxpZ2h0KCk7XHJcbn1cclxuXHJcblxyXG4iLCJjb2RlLXZpZXdlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5jb2RlLXZpZXdlciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmNvZGUtdmlld2VyIC5jb2RlLXZpZXdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xufVxuY29kZS12aWV3ZXIgLmNvZGUtdmlld2VyIC5jb2RlLXZpZXdlci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5jb2RlLXZpZXdlciAuY29kZS12aWV3ZXIgLmNvZGUtdmlld2VyLWhlYWRlciBtYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cbmNvZGUtdmlld2VyIC5jb2RlLXZpZXdlciAuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5jb2RlLXZpZXdlciBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dLCBjb2RlLXZpZXdlciBwcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1lbmxvLCBNb25hY28sIEFuZGFsZSBNb25vIFdULCBBbmRhbGUgTW9ubywgTHVjaWRhIENvbnNvbGUsIEx1Y2lkYSBTYW5zIFR5cGV3cml0ZXIsIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgTGliZXJhdGlvbiBNb25vLCBOaW1idXMgTW9ubyBMLCBDb3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgLW1vei10YWItc2l6ZTogNDtcbiAgLW8tdGFiLXNpemU6IDQ7XG4gIHRhYi1zaXplOiA0O1xuICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XG4gIC1tcy1oeXBoZW5zOiBub25lO1xuICBoeXBoZW5zOiBub25lO1xufVxuY29kZS12aWV3ZXIgY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXTo6c2VsZWN0aW9uLCBjb2RlLXZpZXdlciBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dIDo6c2VsZWN0aW9uLCBjb2RlLXZpZXdlciBwcmVbY2xhc3MqPWxhbmd1YWdlLV06OnNlbGVjdGlvbiwgY29kZS12aWV3ZXIgcHJlW2NsYXNzKj1sYW5ndWFnZS1dIDo6c2VsZWN0aW9uIHtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM4ZjUxZTY7XG59XG5jb2RlLXZpZXdlciBwcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJhY2tncm91bmQ6ICMyODFlMzY7XG4gIGNvbG9yOiAjZmZlNjlkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIC13ZWJraXQtc2Nyb2xsYmFyLWNvbG9yOiAjNGMzOTY3IHRyYW5zcGFyZW50O1xuICAtbW96LXNjcm9sbGJhci1jb2xvcjogIzRjMzk2NyB0cmFuc3BhcmVudDtcbiAgLW1zLXNjcm9sbGJhci1jb2xvcjogIzRjMzk2NyB0cmFuc3BhcmVudDtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjNGMzOTY3IHRyYW5zcGFyZW50O1xufVxuY29kZS12aWV3ZXIgcHJlW2NsYXNzKj1sYW5ndWFnZS1dOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG59XG5jb2RlLXZpZXdlciBwcmVbY2xhc3MqPWxhbmd1YWdlLV06Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGMzOTY3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuY29kZS12aWV3ZXIgcHJlW2NsYXNzKj1sYW5ndWFnZS1dOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTU1OTg7XG59XG5jb2RlLXZpZXdlciA6bm90KHByZSkgPiBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dIHtcbiAgY29sb3I6ICNmZjZiODE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbmNvZGUtdmlld2VyIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPWxhbmd1YWdlLV06OnNlbGVjdGlvbiwgY29kZS12aWV3ZXIgOm5vdChwcmUpID4gY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSA6OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjOGY1MWU2O1xuICBjb2xvcjogI2ZmZjtcbn1cbmNvZGUtdmlld2VyIC50b2tlbi1saW5lIHtcbiAgbWluLWhlaWdodDogMWVtO1xufVxuY29kZS12aWV3ZXIgLnRva2VuLmNkYXRhLCBjb2RlLXZpZXdlciAudG9rZW4uY29tbWVudCwgY29kZS12aWV3ZXIgLnRva2VuLmRvY3R5cGUsIGNvZGUtdmlld2VyIC50b2tlbi5wcm9sb2cge1xuICBjb2xvcjogIzk1YjJkYjtcbn1cbmNvZGUtdmlld2VyIC50b2tlbi5rZXl3b3JkLCBjb2RlLXZpZXdlciAudG9rZW4ucHVuY3R1YXRpb24ge1xuICBjb2xvcjogIzRlZGVlNTtcbn1cbmNvZGUtdmlld2VyIC50b2tlbi5uYW1lc3BhY2Uge1xuICBvcGFjaXR5OiAwLjc7XG59XG5jb2RlLXZpZXdlciAudG9rZW4uYm9vbGVhbiwgY29kZS12aWV3ZXIgLnRva2VuLm51bWJlciwgY29kZS12aWV3ZXIgLnRva2VuLm9wZXJhdG9yLCBjb2RlLXZpZXdlciAudG9rZW4udGFnIHtcbiAgY29sb3I6ICNlZDY1NWU7XG59XG5jb2RlLXZpZXdlciAudG9rZW4uZnVuY3Rpb24sIGNvZGUtdmlld2VyIC50b2tlbi5wcm9wZXJ0eSB7XG4gIGNvbG9yOiAjYjg4NmZkO1xufVxuY29kZS12aWV3ZXIgLnRva2VuLmF0cnVsZS1pZCwgY29kZS12aWV3ZXIgLnRva2VuLnNlbGVjdG9yLCBjb2RlLXZpZXdlciAudG9rZW4udGFnLWlkIHtcbiAgY29sb3I6ICNmM2ViZmY7XG59XG5jb2RlLXZpZXdlciAudG9rZW4uYXR0ci1uYW1lLCBjb2RlLXZpZXdlciBjb2RlLmxhbmd1YWdlLWphdmFzY3JpcHQge1xuICBjb2xvcjogI2Q2YjlmZTtcbn1cbmNvZGUtdmlld2VyIC5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZywgY29kZS12aWV3ZXIgLmxhbmd1YWdlLXNjc3MgLnRva2VuLnN0cmluZywgY29kZS12aWV3ZXIgLnN0eWxlIC50b2tlbi5zdHJpbmcsIGNvZGUtdmlld2VyIC50b2tlbi5hdHJ1bGUsIGNvZGUtdmlld2VyIC50b2tlbi5hdHRyLXZhbHVlLCBjb2RlLXZpZXdlciAudG9rZW4uY29udHJvbCwgY29kZS12aWV3ZXIgLnRva2VuLmRpcmVjdGl2ZSwgY29kZS12aWV3ZXIgLnRva2VuLmVudGl0eSwgY29kZS12aWV3ZXIgLnRva2VuLnBsYWNlaG9sZGVyLCBjb2RlLXZpZXdlciAudG9rZW4ucmVnZXgsIGNvZGUtdmlld2VyIC50b2tlbi5zdGF0ZW1lbnQsIGNvZGUtdmlld2VyIC50b2tlbi5zdHJpbmcsIGNvZGUtdmlld2VyIC50b2tlbi51bml0LCBjb2RlLXZpZXdlciAudG9rZW4udXJsLCBjb2RlLXZpZXdlciAudG9rZW4udmFyaWFibGUsIGNvZGUtdmlld2VyIGNvZGUubGFuZ3VhZ2UtY3NzLCBjb2RlLXZpZXdlciBjb2RlLmxhbmd1YWdlLXNjc3Mge1xuICBjb2xvcjogI2ZmYjZiMztcbn1cbmNvZGUtdmlld2VyIC50b2tlbi5kb20ge1xuICBjb2xvcjogI2E1YzhmZjtcbn1cbmNvZGUtdmlld2VyIC50b2tlbi5kZWxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5jb2RlLXZpZXdlciAudG9rZW4uaW5zZXJ0ZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNmM2ViZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmNvZGUtdmlld2VyIC50b2tlbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5jb2RlLXZpZXdlciAudG9rZW4uYm9sZCwgY29kZS12aWV3ZXIgLnRva2VuLmltcG9ydGFudCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5jb2RlLXZpZXdlciAudG9rZW4uaW1wb3J0YW50IHtcbiAgY29sb3I6ICNkNmI5ZmU7XG59XG5jb2RlLXZpZXdlciAudG9rZW4uZW50aXR5IHtcbiAgY3Vyc29yOiBoZWxwO1xufVxuY29kZS12aWV3ZXIgcHJlID4gY29kZS5oaWdobGlnaHQge1xuICBvdXRsaW5lOiAwLjRlbSBzb2xpZCAjYWE3NWY1O1xuICBvdXRsaW5lLW9mZnNldDogMC40ZW07XG59XG5jb2RlLXZpZXdlciAubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzM3MmY0Mjtcbn1cbmNvZGUtdmlld2VyIC5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcbiAgY29sb3I6ICMzNzJmNDI7XG59XG5jb2RlLXZpZXdlciAubGluZS1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNywgMTAxLCA5NCwgMC4yKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIzNywgMTAxLCA5NCwgMC4yKSA3MCUsIHJnYmEoMjM3LCAxMDEsIDk0LCAwKSk7XG59XG5jb2RlLXZpZXdlciAuZ2F0c2J5LWhpZ2hsaWdodC1jb2RlLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxNDI1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xuICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgYm9yZGVyLWxlZnQ6IDAuMjVlbSBzb2xpZCAjZmY2YjgxO1xufSIsIkBtaXhpbiBjb2RlLWhpZ2hsaWdodCgkc2Nyb2xsYmFyLWNvbG9yOiBsaWdodGVuKCMyODFlMzYsIDE1KSkge1xyXG4gIGNvZGVbY2xhc3MqPWxhbmd1YWdlLV0sIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XHJcbiAgICBmb250LWZhbWlseTogQ29uc29sYXMsIE1lbmxvLCBNb25hY28sIEFuZGFsZSBNb25vIFdULCBBbmRhbGUgTW9ubywgTHVjaWRhIENvbnNvbGUsIEx1Y2lkYSBTYW5zIFR5cGV3cml0ZXIsIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgTGliZXJhdGlvbiBNb25vLCBOaW1idXMgTW9ubyBMLCBDb3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gICAgd29yZC1icmVhazogbm9ybWFsO1xyXG4gICAgLW1vei10YWItc2l6ZTogNDtcclxuICAgIC1vLXRhYi1zaXplOiA0O1xyXG4gICAgdGFiLXNpemU6IDQ7XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XHJcbiAgICAtbXMtaHlwaGVuczogbm9uZTtcclxuICAgIGh5cGhlbnM6IG5vbmVcclxuICB9XHJcblxyXG4gIGNvZGVbY2xhc3MqPWxhbmd1YWdlLV06OnNlbGVjdGlvbiwgY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSA6OnNlbGVjdGlvbiwgcHJlW2NsYXNzKj1sYW5ndWFnZS1dOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9bGFuZ3VhZ2UtXSA6OnNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM4ZjUxZTY7XHJcbiAgfVxyXG5cclxuICBwcmVbY2xhc3MqPWxhbmd1YWdlLV0ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMyODFlMzY7XHJcbiAgICBjb2xvcjogI2ZmZTY5ZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAtd2Via2l0LXNjcm9sbGJhci1jb2xvcjogJHNjcm9sbGJhci1jb2xvciB0cmFuc3BhcmVudDtcclxuICAgIC1tb3otc2Nyb2xsYmFyLWNvbG9yOiAkc2Nyb2xsYmFyLWNvbG9yIHRyYW5zcGFyZW50O1xyXG4gICAgLW1zLXNjcm9sbGJhci1jb2xvcjogJHNjcm9sbGJhci1jb2xvciB0cmFuc3BhcmVudDtcclxuICAgIHNjcm9sbGJhci1jb2xvcjogJHNjcm9sbGJhci1jb2xvciB0cmFuc3BhcmVudDtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICB3aWR0aDogN3B4O1xyXG4gICAgICBoZWlnaHQ6IDdweDtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Nyb2xsYmFyLWNvbG9yO1xyXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzY3JvbGxiYXItY29sb3IsIDE1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOm5vdChwcmUpID4gY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSB7XHJcbiAgICBjb2xvcjogI2ZmNmI4MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcclxuICB9XHJcblxyXG4gIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPWxhbmd1YWdlLV06OnNlbGVjdGlvbiwgOm5vdChwcmUpID4gY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSA6OnNlbGVjdGlvbiB7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM4ZjUxZTY7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG4gIH1cclxuXHJcbiAgLnRva2VuLWxpbmUge1xyXG4gICAgbWluLWhlaWdodDogMWVtXHJcbiAgfVxyXG5cclxuICAudG9rZW4uY2RhdGEsIC50b2tlbi5jb21tZW50LCAudG9rZW4uZG9jdHlwZSwgLnRva2VuLnByb2xvZyB7XHJcbiAgICBjb2xvcjogIzk1YjJkYlxyXG4gIH1cclxuXHJcbiAgLnRva2VuLmtleXdvcmQsIC50b2tlbi5wdW5jdHVhdGlvbiB7XHJcbiAgICBjb2xvcjogIzRlZGVlNVxyXG4gIH1cclxuXHJcbiAgLnRva2VuLm5hbWVzcGFjZSB7XHJcbiAgICBvcGFjaXR5OiAuN1xyXG4gIH1cclxuXHJcbiAgLnRva2VuLmJvb2xlYW4sIC50b2tlbi5udW1iZXIsIC50b2tlbi5vcGVyYXRvciwgLnRva2VuLnRhZyB7XHJcbiAgICBjb2xvcjogI2VkNjU1ZVxyXG4gIH1cclxuXHJcbiAgLnRva2VuLmZ1bmN0aW9uLCAudG9rZW4ucHJvcGVydHkge1xyXG4gICAgY29sb3I6ICNiODg2ZmRcclxuICB9XHJcblxyXG4gIC50b2tlbi5hdHJ1bGUtaWQsIC50b2tlbi5zZWxlY3RvciwgLnRva2VuLnRhZy1pZCB7XHJcbiAgICBjb2xvcjogI2YzZWJmZlxyXG4gIH1cclxuXHJcbiAgLnRva2VuLmF0dHItbmFtZSwgY29kZS5sYW5ndWFnZS1qYXZhc2NyaXB0IHtcclxuICAgIGNvbG9yOiAjZDZiOWZlXHJcbiAgfVxyXG5cclxuICAubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsIC5sYW5ndWFnZS1zY3NzIC50b2tlbi5zdHJpbmcsIC5zdHlsZSAudG9rZW4uc3RyaW5nLCAudG9rZW4uYXRydWxlLCAudG9rZW4uYXR0ci12YWx1ZSwgLnRva2VuLmNvbnRyb2wsIC50b2tlbi5kaXJlY3RpdmUsIC50b2tlbi5lbnRpdHksIC50b2tlbi5wbGFjZWhvbGRlciwgLnRva2VuLnJlZ2V4LCAudG9rZW4uc3RhdGVtZW50LCAudG9rZW4uc3RyaW5nLCAudG9rZW4udW5pdCwgLnRva2VuLnVybCwgLnRva2VuLnZhcmlhYmxlLCBjb2RlLmxhbmd1YWdlLWNzcywgY29kZS5sYW5ndWFnZS1zY3NzIHtcclxuICAgIGNvbG9yOiAjZmZiNmIzXHJcbiAgfVxyXG5cclxuICAudG9rZW4uZG9tIHtcclxuICAgIGNvbG9yOiAjYTVjOGZmXHJcbiAgfVxyXG5cclxuICAudG9rZW4uZGVsZXRlZCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaFxyXG4gIH1cclxuXHJcbiAgLnRva2VuLmluc2VydGVkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2YzZWJmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gIH1cclxuXHJcbiAgLnRva2VuLml0YWxpYyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWNcclxuICB9XHJcblxyXG4gIC50b2tlbi5ib2xkLCAudG9rZW4uaW1wb3J0YW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcclxuICB9XHJcblxyXG4gIC50b2tlbi5pbXBvcnRhbnQge1xyXG4gICAgY29sb3I6ICNkNmI5ZmVcclxuICB9XHJcblxyXG4gIC50b2tlbi5lbnRpdHkge1xyXG4gICAgY3Vyc29yOiBoZWxwXHJcbiAgfVxyXG5cclxuICBwcmUgPiBjb2RlLmhpZ2hsaWdodCB7XHJcbiAgICBvdXRsaW5lOiAuNGVtIHNvbGlkICNhYTc1ZjU7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogLjRlbVxyXG4gIH1cclxuXHJcbiAgLmxpbmUtbnVtYmVycyAubGluZS1udW1iZXJzLXJvd3Mge1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMzcyZjQyXHJcbiAgfVxyXG5cclxuICAubGluZS1udW1iZXJzLXJvd3MgPiBzcGFuOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogIzM3MmY0MlxyXG4gIH1cclxuXHJcbiAgLmxpbmUtaGlnaGxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM3LCAxMDEsIDk0LCAuMik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjM3LCAxMDEsIDk0LCAuMikgNzAlLCByZ2JhKDIzNywgMTAxLCA5NCwgMCkpXHJcbiAgfVxyXG5cclxuICAuZ2F0c2J5LWhpZ2hsaWdodC1jb2RlLWxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMTQyNTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC43NWVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IC4yNWVtIHNvbGlkICNmZjZiODFcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line:component-selector
          selector: "code-viewer",
          templateUrl: "./code-viewer.component.html",
          styleUrls: ["./code-viewer.component.scss"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerAppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\git\ngx-mat-timepicker\projects\ngx-mat-timepicker-repo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map