(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lee/Documents/Dev/git-repos/cabal-coffers-calc/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} }
const _c0 = function (a0) { return { "tapped": a0 }; };
function AppComponent_img_54_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_img_54_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const coffer_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); coffer_r4.tapped = !coffer_r4.tapped; return ctx_r5.calculate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coffer_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, coffer_r4.tapped));
} }
function AppComponent_img_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_img_56_Template_img_click_0_listener() { const coffer_r7 = ctx.$implicit; return coffer_r7.tapped = !coffer_r7.tapped; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coffer_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, coffer_r7.tapped));
} }
class AppComponent {
    constructor() {
        this.tapped = false;
        this.state = {
            manaPool: 0,
            totalCoffers: [],
            tappedCoffers: 0,
            totalSwamp: [],
            tappedSwamp: 0,
            untappedSwamp: 0,
            isCoffersSwamp: false
        };
        this.card = {
            tapped: false
        };
    }
    ngOnInit() { }
    counter(i) {
        return new Array(i);
    }
    setCoffers(event) {
        this.state.isCoffersSwamp = event.checked;
    }
    processTappedCoffers(direction) {
        direction === 1 ? this.state.tappedCoffers += 1 : this.state.tappedCoffers -= 1;
    }
    processSwamp(direction) {
        direction === 1 ? this.state.totalSwamp.push(Object.assign({}, this.card)) : this.state.totalSwamp.pop();
    }
    processCoffers(direction) {
        direction === 1 ? this.state.totalCoffers.push(Object.assign({}, this.card)) : this.state.totalCoffers.pop();
    }
    calculate() {
        if (!this.state.totalSwamp) {
            return;
        }
        // const tappedCoffers = this.state.tappedCoffers;
        const tappedCoffers = 1;
        const isCoffersSwamp = this.state.isCoffersSwamp;
        const coffersCost = isCoffersSwamp ? 3 : 2;
        const totalSwamp = isCoffersSwamp ? this.state.totalSwamp.length + this.state.totalCoffers.length : this.state.totalSwamp.length;
        let manaPool = 0;
        for (let i = 0; i < tappedCoffers; i++) {
            manaPool += totalSwamp;
        }
        this.state.isCoffersSwamp = isCoffersSwamp;
        this.state.totalCoffers = this.state.totalCoffers;
        // 3 swamp
        // 2 coffers
        // tap 2 swamp + 1 coffer = +3 in mana pool
        // 1 swamp available
        // 1 swamp + -1 mana in pool + 1 coffer = +3 in mana pool [+2 in current mana pool]
        this.state.tappedSwamp = (tappedCoffers * coffersCost);
        let i = 0;
        for (let swamp of this.state.totalSwamp) {
            if (!swamp.tapped && i < this.state.tappedSwamp) {
                swamp.tapped = true;
                i++;
            }
        }
        // for (let i = 0; i < this.state.tappedSwamp; i++) {
        //   this.state.totalSwamp[i].tapped = true;
        // }
        this.state.untappedSwamp = (totalSwamp - (tappedCoffers * coffersCost));
        this.state.manaPool += manaPool;
    }
    reset() {
        this.state = {
            manaPool: 0,
            totalCoffers: [],
            tappedCoffers: 0,
            totalSwamp: [],
            tappedSwamp: 0,
            untappedSwamp: 0,
            isCoffersSwamp: false
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 57, vars: 9, consts: [[1, "content"], [1, "details"], [1, "header"], ["mat-icon-button", "", "color", "primary", 3, "click"], [1, "options"], [1, "example-margin", 3, "checked", "change"], [1, "manaPool"], ["class", "icon black manaPool", 4, "ngFor", "ngForOf"], [1, "container"], ["src", "/assets/cabal-coffers.jpeg", "alt", "Cabal Coffers", "class", "card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["src", "/assets/swamp.jpeg", "alt", "Cabal Coffers", "class", "card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "icon", "black", "manaPool"], ["src", "/assets/cabal-coffers.jpeg", "alt", "Cabal Coffers", 1, "card", 3, "ngClass", "click"], ["src", "/assets/swamp.jpeg", "alt", "Cabal Coffers", 1, "card", 3, "ngClass", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cabal Coffers Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TODO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1. allow multiple coffers with mana pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2. dont allow untap to calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-slide-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_mat_slide_toggle_change_18_listener($event) { return ctx.setCoffers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Is Coffers Swamp? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Total Coffers :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() { return ctx.processCoffers(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() { return ctx.processCoffers(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Total Swamp :\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_38_listener() { return ctx.processSwamp(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_41_listener() { return ctx.processSwamp(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AppComponent_div_47_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AppComponent_img_54_Template, 1, 3, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AppComponent_img_56_Template, 1, 3, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.state == null ? null : ctx.state.isCoffersSwamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.totalCoffers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.state.totalSwamp.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mana pool: ", ctx.state.manaPool, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counter(ctx.state.manaPool));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("tapped:", ctx.state.tappedSwamp, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Untapped:", ctx.state.untappedSwamp, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.state.totalCoffers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.state.totalSwamp);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".tapped[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  margin: 60px 10px !important;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 50px;\n}\n\n.content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.manaPool[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 30px;\n  margin: 10px;\n  background-color: #d3d3d3;\n  border: none;\n  background-image: url('mtg-color.png');\n  background-repeat: no-repeat;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: #ccc4c0;\n  background-position: -92px -59px;\n  background-size: 165px 105px;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 300px;\n  left: calc(50% - 300px);\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  height: 280px;\n  width: 200px;\n  border-radius: 10px;\n  transition: 0.4s ease-out;\n  position: relative;\n  left: 0px;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -160px;\n}\n\n.container[_ngcontent-%COMP%]   .tapped[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  margin: 60px 10px !important;\n}\n\n.container[_ngcontent-%COMP%]   .tapped[_ngcontent-%COMP%]:not(:first-child) {\n  margin: 60px 10px 60px -160px !important;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUVOOztBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDTjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBRUU7RUFDRSx3Q0FBQTtBQUFKOztBQUVFO0VBQ0UsZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcHBlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgbWFyZ2luOiA2MHB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDUwcHg7XG5cbiAgLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgLm9wdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG59XG5cbi5tYW5hUG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vYXNzZXRzL210Zy1jb2xvci5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzRjMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkycHggLTU5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMTY1cHggMTA1cHg7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMwMHB4KTtcbiAgZGlzcGxheTogZmxleDtcblxuICAuY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDBweDtcbiAgfVxuXG4gIC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDogLTE2MHB4O1xuICB9XG4gIC50YXBwZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBtYXJnaW46IDYwcHggMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC50YXBwZWQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbjogNjBweCAxMHB4IDYwcHggLTE2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNhcmQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map