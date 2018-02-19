webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <ph-header></ph-header>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         \n  <!-- <ph-home></ph-home> -->\n  <!-- <flash-messages></flash-messages> -->\n  <router-outlet></router-outlet>\n  <ph-footer></ph-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_abouts_abouts_component__ = __webpack_require__("../../../../../src/app/components/abouts/abouts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_support_support_component__ = __webpack_require__("../../../../../src/app/components/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_cashin_cashin_component__ = __webpack_require__("../../../../../src/app/components/cashin/cashin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_buyload_buyload_component__ = __webpack_require__("../../../../../src/app/components/buyload/buyload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_paybills_paybills_component__ = __webpack_require__("../../../../../src/app/components/paybills/paybills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_17__components_abouts_abouts_component__["a" /* AboutsComponent */] },
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_18__components_support_support_component__["a" /* SupportComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'cashin', component: __WEBPACK_IMPORTED_MODULE_19__components_cashin_cashin_component__["a" /* CashinComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'buyload', component: __WEBPACK_IMPORTED_MODULE_20__components_buyload_buyload_component__["a" /* BuyloadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'paybills', component: __WEBPACK_IMPORTED_MODULE_21__components_paybills_paybills_component__["a" /* PaybillsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'myaccounts', component: __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__guard_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_abouts_abouts_component__["a" /* AboutsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_support_support_component__["a" /* SupportComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_cashin_cashin_component__["a" /* CashinComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_buyload_buyload_component__["a" /* BuyloadComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_paybills_paybills_component__["a" /* PaybillsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__guard_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/abouts/abouts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  abouts works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/abouts/abouts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/abouts/abouts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutsComponent = /** @class */ (function () {
    function AboutsComponent() {
    }
    AboutsComponent.prototype.ngOnInit = function () {
    };
    AboutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-abouts',
            template: __webpack_require__("../../../../../src/app/components/abouts/abouts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/abouts/abouts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutsComponent);
    return AboutsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/buyload/buyload.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  buyload works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/buyload/buyload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/buyload/buyload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuyloadComponent = /** @class */ (function () {
    function BuyloadComponent() {
    }
    BuyloadComponent.prototype.ngOnInit = function () {
    };
    BuyloadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-buyload',
            template: __webpack_require__("../../../../../src/app/components/buyload/buyload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/buyload/buyload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyloadComponent);
    return BuyloadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cashin/cashin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cashin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/cashin/cashin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cashin/cashin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CashinComponent = /** @class */ (function () {
    function CashinComponent() {
    }
    CashinComponent.prototype.ngOnInit = function () {
    };
    CashinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-cashin',
            template: __webpack_require__("../../../../../src/app/components/cashin/cashin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cashin/cashin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CashinComponent);
    return CashinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.fullname.first}} {{user.fullname.last}}</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n      <li class=\"list-group-item\">Account Balance: {{user.balance}}</li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService._get('/api/users/profile').subscribe(function (data) {
            _this.user = data.user;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3 col-lg-3 col-md-3\">\r\n      <span><h4><i>Pay</i>.PH</h4> &copy; copyright 2017</span>\r\n      <p>Financial Services for All<br/>Manage Payments in One Place</p>\r\n    </div>\r\n    <div class=\"col-3 col-lg-3 col-md-3\">\r\n      <h5>Company</h5>\r\n      <ul class=\"menu vertical\">\r\n        <li><a href=\"#\">About Us</a></li>\r\n        <li><a href=\"#\">Contact Us</a></li>\r\n        <li><a href=\"#\">Privacy Policy</a></li>\r\n        <li><a href=\"#\">Site Map</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-3 col-lg-3 col-md-3\">\r\n      <h5>Support</h5>\r\n      <ul class=\"menu vertical\">\r\n        <li><a href=\"#\">Knowledgebase</a></li>\r\n        <li><a href=\"#\">Support Forum</a></li>\r\n        <li><a href=\"#\">Documentation</a></li>\r\n        <li><a href=\"#\">Ticket System</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-3 col-lg-3 col-md-3\">\r\n      <img src=\"../../../assets/img/truste-seal.png\">\r\n    </div>\r\n  </div>\r\n</div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  padding: 40px 20px;\n  background: #000000;\n  color: #ffffff; }\n  footer .menu {\n    list-style: none;\n    color: #ffffff;\n    padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"top-nav hidden-sm-down\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n      <ul class=\"top-list\">\r\n        <li><i class=\"fa fa-map-marker\"></i> SBFZ, Olongapo, Philippines</li>\r\n        <li><i class=\"fa fa-phone\"></i> (+63) 915 280 8814</li>\r\n        <li><i class=\"fa fa-envelope-o\"></i> <a href=\"\">rejdabu@gmail.com</a></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-lg-6 col-md-6 col-xs-12\">\r\n      <ul class=\"top-list-right\">\r\n        <li *ngIf=\"!_authService.loggedIn()\"><a [routerLink]=\"['/login']\">Client Login</a></li>\r\n        <li *ngIf=\"_authService.loggedIn()\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li> -->\r\n        <!-- <li><a [routerLink]=\"['/profile']\">Profile</a></li> -->\r\n        <!-- <li><a [routerLink]=\"['/aboutus']\">About Us</a></li>\r\n        <li><a [routerLink]=\"['/support']\">Support</a></li>\r\n        <li *ngIf=\"_authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-toggleable-md navbar-inverse\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\"><h3><span><i>Pay</i></span><span>PH</span></h3></a>\r\n</nav> -->\r\n\r\n<!--=== Header v1 ===-->\r\n<header>\r\n  <!-- Topbar -->\r\n  <div class=\"topbar\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"list-inline top-v1-contacts\">\r\n            <li>\r\n              <i class=\"fa fa-envelope\"></i> Email: <a href=\"mailto:rejdabu@gamil.com\">rejdabu@gmail.com</a>\r\n            </li>\r\n            <li>\r\n              <i class=\"fa fa-phone\"></i> Mobile: (+63) 915 280 8814\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n          <ul class=\"list-inline top-v1-data\">\r\n            <li><a [routerLink]=\"['/']\"><i class=\"fa fa-home\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a href=\"#\"><i class=\"fa fa-cog\"></i></a></li>\r\n            <li *ngIf=\"_authService.loggedIn()\"><a [routerLink]=\"['/myaccounts']\">My Account</a></li>\r\n            <li *ngIf=\"_authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n            <li *ngIf=\"!_authService.loggedIn()\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Topbar -->\r\n  \r\n  <!-- Navbar -->\r\n  <nav class=\"navbar navbar-inverse navbar-expand-md sticky-top nb-default\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggler nb-toggle navbar-toggler-right\" data-toggle=\"collapse\" data-target=\"#navbar-target\">\r\n          <!-- <span class=\"sr-only\">Toggle navigation</span> -->\r\n          <span class=\"navbar-toggler-icon\"><i class=\"fa fa-bars\"></i></span>\r\n        </button>\r\n        <a class=\"navbar-brand\">\r\n          <img id=\"logo-header\" src=\"../../../assets/img/logo1-default.png\" alt=\"Logo\">\r\n        </a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-target\">\r\n        <ul class=\"navbar-nav\">\r\n          <li *ngIf=\"!_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/']\" class=\"nav-link\">Home</a></li>\r\n          <li *ngIf=\"!_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/aboutus']\" class=\"nav-link\">About Us</a></li>\r\n          <li *ngIf=\"!_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/support']\" class=\"nav-link\">Support</a></li>\r\n          <li *ngIf=\"!_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/']\" class=\"nav-link\">Promos</a></li>\r\n          <li *ngIf=\"_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/dashboard']\" class=\"nav-link\">Dashboard</a></li>\r\n          <li *ngIf=\"_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/cashin']\" class=\"nav-link\">Cash In</a></li>\r\n          <li *ngIf=\"_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/buyload']\" class=\"nav-link\">Buy Load</a></li>\r\n          <li *ngIf=\"_authService.loggedIn()\" class=\"nav-item\"><a [routerLink]=\"['/paybills']\" class=\"nav-link\">Pay Bills</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>  \r\n  <!-- End Navbar -->\r\n</header>\r\n<!--=== End Header v1 ===-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  z-index: 99;\n  position: relative; }\n  header .topbar {\n    background: #fdfdfd;\n    border-top: solid 1px #f0f0f0;\n    border-bottom: solid 1px #f0f0f0; }\n  header .topbar ul {\n      margin: 0; }\n  header .topbar .top-v1-contacts li {\n      color: #666;\n      padding: 5px 0;\n      font-size: 12px;\n      margin-right: 15px;\n      display: inline-block; }\n  header .topbar .top-v1-contacts i {\n      color: #999;\n      font-size: 13px;\n      margin-right: 3px; }\n  header .topbar .top-v1-data {\n      text-align: right; }\n  header .topbar .top-v1-data li {\n        padding: 5px 11px;\n        margin-left: -4px;\n        display: inline-block;\n        border-right: solid 1px #eee; }\n  header .topbar .top-v1-data li a {\n          font-size: 12px; }\n  header .topbar .top-v1-data li a:hover {\n          text-decoration: none; }\n  header .topbar .top-v1-data li i {\n          color: #777;\n          font-size: 13px; }\n  header .topbar .top-v1-data li a:hover i {\n          color: #72c02c; }\n  header .topbar .top-v1-data li:first-child {\n        margin-left: 0;\n        border-left: solid 1px #eee; }\n  header .navbar {\n    margin: 0; }\n  header .navbar .navbar-header {\n      margin: 10px 0; }\n  header .navbar .navbar-brand {\n      z-index: 1;\n      position: relative; }\n  header .nb-default {\n    border: none;\n    background: none; }\n  header .nb-default .navbar-collapse {\n      position: relative; }\n  header .nb-default .nb-toggle {\n      border-color: #5fb611;\n      background: #72c02c;\n      padding: 0px; }\n  header .nb-default .nb-toggle .fa {\n        color: #fff;\n        font-size: 19px;\n        padding-top: 5px; }\n  header .nb-default .nb-toggle:hover,\n    header .nb-default .nb-toggle:focus {\n      background: #72c02c; }\n  header .nb-default .nb-toggle:hover {\n      background: #5fb611 !important; }\n  header .nb-default .navbar-nav {\n      position: relative; }\n  header .nb-default .navbar-nav li > a {\n        color: #687074;\n        font-size: 15px;\n        font-weight: 400;\n        text-transform: uppercase; }\n  header .nb-default .navbar-nav li:hover > a {\n        color: #72c02c; }\n  /*Responsive Topbar v1*/\n  @media (max-width: 991px) {\n  header .topbar ul {\n    text-align: center !important; }\n  header .topbar .top-v1-contacts {\n    margin: 10px 0; }\n  header .topbar .top-v1-data li {\n    top: 1px;\n    padding: 6px 16px;\n    margin-left: -5px;\n    position: relative;\n    border: solid 1px #eee; }\n  header {\n    border-bottom: solid 1px #eee;\n    /*Responsive code for max-width: 991px*/\n    /*Design for max-width: 991px*/ }\n    header .navbar-brand {\n      margin-top: -10px; }\n    header .navbar-header {\n      float: none; }\n    header .nb-toggle {\n      float: right;\n      right: 0; }\n    header .navbar-collapse {\n      padding-left: 0 !important;\n      padding-right: 0 !important; }\n    header .navbar-nav {\n      margin: 0 0 5px;\n      float: none !important; }\n      header .navbar-nav li {\n        float: none; }\n        header .navbar-nav li a {\n          font-size: 14px;\n          padding: 9px 10px;\n          border-bottom: solid 1px #eee; }\n        header .navbar-nav li a:hover {\n          color: #72c02c; }\n        header .navbar-nav li a:focus {\n          background: none; }\n      header .navbar-nav .active > a, header .navbar-nav .active > a:hover, header .navbar-nav .active > a:focus {\n        background: #72c02c;\n        color: #fff !important; } }\n  @media (min-width: 992px) {\n  header .navbar-collapse {\n    padding: 20px 0 0; }\n  header .navbar-brand {\n    margin-top: -4px; }\n  header .navbar {\n    min-height: 40px !important;\n    border-bottom: solid 1px #eee; }\n  header .container > .navbar-header, header .container > .navbar-collapse {\n    margin-bottom: -10px; }\n  header .navbar-header {\n    width: 60% !important; }\n  header .nb-default .navbar-nav {\n    top: 2px;\n    position: relative;\n    float: right;\n    margin-top: -6px; }\n    header .nb-default .navbar-nav li {\n      margin-left: 1px;\n      text-align: center; }\n      header .nb-default .navbar-nav li a {\n        bottom: -2px;\n        position: relative;\n        padding: 15px 30px 17px 20px; }\n      header .nb-default .navbar-nav li a, header .nb-default .navbar-nav li a:hover, header .nb-default .navbar-nav li a:focus {\n        background: none; }\n    header .nb-default .navbar-nav .active > a, header .nb-default .navbar-nav li > a:hover, header .nb-default .navbar-nav li > a:focus {\n      color: #72c02c;\n      bottom: -2px;\n      position: relative; }\n    header .nb-default .navbar-nav li:hover > a {\n      color: #72c02c; } }\n  @media (max-width: 768px) {\n  header .navbar-brand {\n    padding-left: 0; }\n  header .nb-default .nb-toggle {\n    margin-right: 0;\n    float: right; }\n  .navbar-header {\n    float: none;\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(window.innerWidth);
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        this._authService.logout();
        this._router.navigate(['/']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"showcase\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 col-lg-offset-1 col-md-offset-1\">\r\n        <div class=\"tagging\">\r\n          <h1>Financial Services for Every Juan!</h1>\r\n          <h2>Manage Payments in One Place</h2>\r\n          <div class=\"button\" *ngIf=\"!_authService.loggedIn()\">\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-animated\">GET STARTED</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 hidden-md-down\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-11\">\r\n            <div class=\"showcase-box\">\r\n              <h1>It's convenient</h1>\r\n              <h3>Buy Load, Pay Bills, and Send or Receive money from anyone</h3>\r\n              <hr>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <p>Skip the lines! Take extra time with your morning coffee. \r\n                    We'll do the rest for you.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"showcase-box-bottom\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                  <div class=\"pricing\">\r\n                    <span>FREE</span>\r\n                    <span class=\"reg\">REGISTRATION</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                  <!--<h5 class=\"start-link\"><a href=\"\"><i class=\"fa fa-arrow-circle-right\"></i>Get Started Now!</a></h5>-->\r\n                  <p>Extra Income</p>\r\n                  <ul>\r\n                    <li>Get 4% back for every load purchase</li>\r\n                    <li>Earn 5 Php and UP on top of every bill transaction.</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"packages\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-12\">\r\n        <h3 class=\"text-center\">Manage Payments in One Place</h3>\r\n        <p class=\"text-center\">Maaaring tumanggap ng bayad sa kuryente, tubig, e-load, government bills, at marami pang iba mula sa iyong mga kapitbahay.</p>\r\n      \r\n        <div class=\"card-deck\">\r\n          <div class=\"card p-box-1 text-center\">\r\n            <div class=\"card-block\">\r\n              <h3 class=\"card-title\">Load? Buy</h3>\r\n              <p class=\"card-text\">Earn 4% back every time you load up</p>\r\n              <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\r\n\r\n              <ul class=\"features\">\r\n                <li>Smart and TNT</li>\r\n                <li>Globe and TM</li>\r\n                <li>Sun Cellular</li>\r\n              </ul>\r\n              <a href=\"\" class=\"btn btn-primary btn-block\">Read More...</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card p-box-2 text-center\">\r\n            <div class=\"card-block\">\r\n              <h3 class=\"card-title\">Bills? Paid</h3>\r\n              <p class=\"card-text\">Pay bills to 70+ providers, all in one place</p>\r\n              <i class=\"fa fa-rub\" aria-hidden=\"true\"></i>\r\n\r\n              <ul class=\"features\">\r\n                <li>Meralco</li>\r\n                <li>Maynilad</li>\r\n                <li>CignalTV</li>\r\n              </ul>\r\n              <a href=\"\" class=\"btn btn-success btn-block\">Read More...</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card p-box-3 text-center\">\r\n            <div class=\"card-block\">\r\n              <h4 class=\"card-title\">Remittance? Send</h4>\r\n              <p class=\"card-text\">How should we send the money?</p>\r\n              <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\r\n\r\n              <ul class=\"features\">\r\n                <li>Cebuana Lhuiller</li>\r\n                <li>Security Bank</li>\r\n                <li>GCash</li>\r\n              </ul>\r\n              <a href=\"\" class=\"btn btn-warning btn-block\">Read More...</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section-a\">\r\n  <h2>Featured Payment Options</h2>\r\n  <div class=\"col-12 text-center logogroup\">\r\n    <img src=\"../../../assets/img/mle-pay-logo.png\" height=\"36\" alt=\"MLE Pay\">\r\n    <img src=\"../../../assets/img/7-eleven-logo.png\" height=\"48\" alt=\"7-Eleven\">\r\n    <img src=\"../../../assets/img/cebuana-logo.png\" height=\"48\" alt=\"Cebuana Lhuillier\">\r\n    <img src=\"../../../assets/img/ecpay-logo.png\" height=\"36\" alt=\"ECPay\">\r\n  </div>\r\n</section>\r\n\r\n<section class=\"section-c\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3 col-md-3\">\r\n      <i class=\"fa fa-shield\" aria-hidden=\"true\"></i>\r\n      <h4>Secure</h4>\r\n    </div>\r\n    <div class=\"col-3 col-md-3\">\r\n      <i class=\"fa fa-flash\" aria-hidden=\"true\"></i>\r\n      <h4>Fast</h4>\r\n    </div>\r\n    <div class=\"col-3 col-md-3\">\r\n      <i class=\"fa fa-gears\" aria-hidden=\"true\"></i>\r\n      <h4>Stable</h4>\r\n    </div>\r\n    <div class=\"col-3 col-md-3\">\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <h4>Reliable</h4>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".showcase {\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.jpg")) + ") no-repeat -30px 0px;\n  min-height: 480px;\n  color: #ffffff; }\n  .showcase .showcase-box {\n    padding: 20px 30px;\n    margin-top: 50px;\n    background: #494B9C;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px; }\n  .showcase .showcase-box h3 {\n      font-size: 16px; }\n  .showcase .showcase-box hr {\n      border-bottom: 3px #ccc solid; }\n  .showcase .showcase-box row:first-child p {\n      padding-bottom: 4px;\n      font-size: 14px; }\n  .showcase .showcase-box-bottom {\n    padding: 20px 30px;\n    background: #9bc33f;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px; }\n  .showcase .showcase-box-bottom .pricing {\n      padding: 15px 5px;\n      font-size: 20px;\n      width: 100%;\n      height: 100%;\n      background: #494B9C;\n      text-align: center;\n      border-radius: 10px;\n      color: #9bc33f;\n      border: 2px red solid; }\n  .showcase .showcase-box-bottom .pricing span:first-child {\n        font-size: 27px;\n        font-weight: bold; }\n  .showcase .showcase-box-bottom .pricing span.reg {\n        font-weight: bold; }\n  .showcase .showcase-box-bottom p {\n      margin-left: -10px;\n      color: #494B9C;\n      margin-bottom: 3px;\n      font-weight: bold;\n      border-bottom: 2px #ccc dotted; }\n  .showcase .showcase-box-bottom ul {\n      padding-left: 5px; }\n  .showcase .showcase-box-bottom ul li {\n        font-size: 14px; }\n  .showcase .tagging {\n    padding: 20px 30px;\n    margin-top: 100px; }\n  .showcase .tagging h2 {\n      text-transform: initial;\n      font-weight: 300;\n      margin-bottom: 35px;\n      font-size: 25px; }\n  .showcase .tagging .button {\n      margin-right: 25px;\n      margin-bottom: 50px; }\n  .showcase .tagging .button .btn-animated {\n        font-size: 12px;\n        font-weight: 700;\n        padding: 17px 47px;\n        width: 325px;\n        background-color: transparent;\n        text-transform: uppercase;\n        border-color: #fff;\n        border-width: 3px;\n        border-style: solid;\n        color: #fff;\n        -webkit-transition: all .3s ease-in-out;\n        transition: all .3s ease-in-out;\n        overflow: hidden;\n        webkit-box-shadow: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        outline: 0;\n        letter-spacing: 2px; }\n  .packages {\n  padding: 50px 0; }\n  .packages p {\n    padding: 0;\n    margin: 0;\n    width: 50%;\n    margin: auto; }\n  .packages .card-deck {\n    margin-top: 50px; }\n  .packages .card-deck .card {\n      background: #f4f4f4;\n      text-align: center;\n      padding: 20px;\n      border-radius: 15px; }\n  .packages .card-deck .card p {\n        width: 100%;\n        margin-bottom: 25px; }\n  .packages .card-deck .card .fa {\n        font-size: 80px; }\n  .packages .card-deck .card .features {\n        margin: 30px 0 40px 0;\n        padding: 0; }\n  .packages .card-deck .card .features li {\n          list-style: none;\n          padding: 10px 0 10px 0;\n          border-bottom: 1px #ccc solid; }\n  .packages .card-deck .p-box-1 .fa {\n      color: #494B9C; }\n  .packages .card-deck .p-box-2 .fa {\n      color: #9bc33f; }\n  .packages .card-deck .p-box-3 .fa {\n      color: #f0ad4e; }\n  /* Section A */\n  .section-a {\n  padding: 30px 0;\n  background: #f4f4f4;\n  text-align: center; }\n  .section-a .logogroup img {\n    margin: 10px 20px; }\n  /* Section B */\n  .section-b {\n  background: #3d3f40;\n  color: #ffffff;\n  padding: 50px 0;\n  text-align: center; }\n  /* Section c */\n  .section-c {\n  background: #494B9C;\n  color: #ffffff;\n  padding: 50px 0;\n  text-align: center; }\n  .section-c .fa {\n    font-size: 90px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_authService) {
        this._authService = _authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"form-signin\">\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\n  <flash-messages></flash-messages>\n  <div class=\"form-group\">\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" id=\"username\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n  </div>\n    <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n    </label>\n  </div>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form> -->\n\n<!-- Login -->\n<section class=\"container\">\n  <div class=\"row justify-content-between\">\n    <div class=\"col-md-6 col-lg-5 order-lg-2 g-mb-80\">\n      <div class=\"g-brd-around g-brd-gray-light-v3 g-bg-white rounded g-px-30 g-py-50 mb-4\">\n        <header class=\"text-center mb-4\">\n          <h1 class=\"h4 g-color-black g-font-weight-400\">Login to Your Account</h1>\n        </header>\n        <flash-messages></flash-messages>\n        <!-- Form -->\n        <form (submit)=\"onLoginSubmit()\">\n          <div class=\"mb-3\">\n            <div class=\"input-group g-rounded-left-3\">\n              <div class=\"input-group-prepend\"> \n                <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n              </div>\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" id=\"username\" placeholder=\"Email Adress\">\n            </div>\n          </div>\n\n          <div class=\"mb-2\">\n            <div class=\"input-group g-rounded-left-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"fa fa-key\"></i>\n                </span>\n              </div>\n              <input class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\">\n            </div>\n          </div>\n\n          <div class=\"row justify-content-between mb-3\">\n            <div class=\"col align-self-center text-right\">\n              <a class=\"g-font-size-13\" href=\"#\">Forgot password?</a>\n            </div>\n          </div>\n\n          <div class=\"mb-4\">\n            <button class=\"btn btn-block u-btn-primary text-uppercase\" type=\"submit\">Login</button>\n          </div>\n\n          <div class=\"d-flex justify-content-center text-center\">\n            <div class=\"d-inline-block align-self-center\"></div>\n            <span class=\"align-self-center g-color-gray-dark-v5 mx-4 mb-4\">---- OR ----</span>\n            <div class=\"d-inline-block align-self-center\"></div>\n          </div>\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-6\">\n              <button class=\"btn btn-block u-btn-facebook text-uppercase mr-2\" type=\"button\">\n                <i class=\"mr-1 fa fa-facebook\"></i>\n                Facebook\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button class=\"btn btn-block u-btn-twitter g-font-size-12 text-uppercase g-py-12 g-px-25 ml-2\" type=\"button\">\n                <i class=\"mr-1 fa fa-twitter\"></i>\n                Twitter\n              </button>\n            </div>\n          </div>\n        </form>\n        <!-- End Form -->\n      </div>\n\n      <div class=\"text-center\">\n        <p class=\"g-color-gray-dark-v5 mb-0\">Don't have an account?\n          <a class=\"g-font-weight-600\" [routerLink]='[\"/register\"]'>signup</a></p>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 order-lg-1 g-mb-80\">\n      <div class=\"mb-5\">\n        <h2 class=\"h1 g-font-weight-400 mb-3\">Welcome to Unipay</h2>\n        <p class=\"g-color-gray-dark-v4\">The time has come to bring those ideas and plans to life. This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-9\">\n          <!-- Icon Blocks -->\n          <div class=\"media mb-5\">\n            <div class=\"d-flex mr-3\">\n              <span class=\"align-self-center u-icon-v1 u-icon-size--lg g-color-primary\">\n                <i class=\"icon-finance-168 u-line-icon-pro\"></i>\n              </span>\n            </div>\n            <div class=\"media-body align-self-center\">\n              <h3 class=\"h5 g-font-weight-400\">Reliable contracts</h3>\n              <p class=\"g-color-gray-dark-v5 mb-0\">Reliable contracts, multifanctionality &amp; best usage of Unify template</p>\n            </div>\n          </div>\n          <!-- End Icon Blocks -->\n\n          <!-- Icon Blocks -->\n          <div class=\"media mb-5\">\n            <div class=\"d-flex mr-3\">\n              <span class=\"align-self-center u-icon-v1 u-icon-size--lg g-color-primary\">\n                <i class=\"icon-finance-193 u-line-icon-pro\"></i>\n              </span>\n            </div>\n            <div class=\"media-body align-self-center\">\n              <h3 class=\"h5 g-font-weight-400\">Security</h3>\n              <p class=\"g-color-gray-dark-v5 mb-0\">Secure &amp; integrated options to create individual &amp; business websites</p>\n            </div>\n          </div>\n          <!-- End Icon Blocks -->\n\n          <!-- Icon Blocks -->\n          <div class=\"media\">\n            <div class=\"d-flex mr-3\">\n              <span class=\"align-self-center u-icon-v1 u-icon-size--lg g-color-primary\">\n                <i class=\"icon-finance-122 u-line-icon-pro\"></i>\n              </span>\n            </div>\n            <div class=\"media-body align-self-center\">\n              <h3 class=\"h5 g-font-weight-400\">Maintain</h3>\n              <p class=\"g-color-gray-dark-v5 mb-0\">We get it, you're busy and it's important that someone keeps up with marketing</p>\n            </div>\n          </div>\n          <!-- End Icon Blocks -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End Login -->\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  padding: 3.14286rem 1.14286rem !important;\n  background-color: #fff !important; }\n  section .g-brd-around {\n    border: solid 1px transparent !important; }\n  section .g-brd-gray-light-v3 {\n    border-color: #ddd !important; }\n  section .g-mb-80 {\n    margin-bottom: 1.71429rem !important; }\n  section .g-px-30 {\n    padding-left: 2.14286rem !important;\n    padding-right: 2.14286rem !important; }\n  section .g-py-50 {\n    padding-top: 3.57143rem !important;\n    padding-bottom: 3.57143rem !important; }\n  section header h1 {\n    font-weight: 400 !important; }\n  section form {\n    padding-top: 1.07143rem !important;\n    padding-bottom: 1.07143rem !important;\n    /* Button Facebook */\n    /* Button Twitter */ }\n  section form .g-rounded-left-3 {\n      border-top-left-radius: 3px !important;\n      border-bottom-left-radius: 3px !important; }\n  section form .g-rounded-left-3 span {\n        width: 45px !important;\n        background-color: #fff;\n        border-color: #ddd !important;\n        color: #999 !important; }\n  section form .g-rounded-left-3 span i {\n          margin: 0 auto; }\n  section form .g-rounded-left-3 input {\n        color: #000 !important;\n        background-color: #fff;\n        border-color: #ddd !important;\n        border-top-left-radius: 0 !important;\n        border-bottom-left-radius: 0 !important;\n        border-top-right-radius: 5px !important;\n        border-bottom-right-radius: 5px !important;\n        padding: 0.77143rem !important; }\n  section form .g-rounded-left-3 .g-font-size-13 {\n        font-size: 0.92857rem !important; }\n  section form .g-rounded-left-3 .g-color-gray-dark-v5 {\n        color: #999 !important; }\n  section form .d-inline-block {\n      width: 50px !important;\n      height: 100%;\n      background-color: #bbb !important; }\n  section form .u-btn-primary {\n      color: #fff !important;\n      background-color: #3bb18f !important;\n      font-size: 0.85714rem !important;\n      padding-top: 0.85714rem !important;\n      padding-bottom: 0.85714rem !important;\n      padding-left: 1.78571rem !important;\n      padding-right: 1.78571rem !important; }\n  section form .u-btn-primary:hover, section form .u-btn-primary.active {\n      border-color: #58c7a7;\n      background-color: #58c7a7; }\n  section form .u-btn-facebook {\n      color: #fff;\n      background-color: #3b5998; }\n  section form .u-btn-facebook:hover, section form .u-btn-facebook.active {\n      border-color: #4c70ba;\n      background-color: #4c70ba; }\n  section form .u-btn-facebook:hover, section form .u-btn-facebook:focus, section form .u-btn-facebook.active {\n      color: #fff; }\n  section form .u-btn-facebook.g-btn-hover-reset:hover, section form .u-btn-facebook.g-btn-hover-reset.active {\n      background-color: #3b5998;\n      border-color: #3b5998; }\n  section form .u-btn-twitter {\n      color: #fff;\n      background-color: #00acee; }\n  section form .u-btn-twitter:hover, section form .u-btn-twitter.active {\n      border-color: #22c2ff;\n      background-color: #22c2ff; }\n  section form .u-btn-twitter:hover, section form .u-btn-twitter:focus, section form .u-btn-twitter.active {\n      color: #fff; }\n  section form .u-btn-twitter.g-btn-hover-reset:hover, section form .u-btn-twitter.g-btn-hover-reset.active {\n      background-color: #00acee;\n      border-color: #00acee; }\n  section form .g-color-gray-dark-v5 {\n      color: #999 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, _flashMsg, _router) {
        this._authService = _authService;
        this._flashMsg = _flashMsg;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.username,
            password: this.password
        };
        if (this.username == undefined || this.password == undefined) {
            this._flashMsg.show("Please fill in all fields!", { cssClass: 'alert-danger' });
            return false;
        }
        this._authService.authenticate(user).subscribe(function (data) {
            if (data.success) {
                _this._authService.storeUserData(data.token, data.user);
                _this._router.navigate(["/dashboard"]);
                _this._flashMsg.show('You\'ve successfully login!', { cssClass: 'alert-danger' });
            }
            else {
                _this._flashMsg.show(data.message, { cssClass: 'alert-danger' });
                _this._router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/paybills/paybills.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  paybills works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/paybills/paybills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/paybills/paybills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaybillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaybillsComponent = /** @class */ (function () {
    function PaybillsComponent() {
    }
    PaybillsComponent.prototype.ngOnInit = function () {
    };
    PaybillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-paybills',
            template: __webpack_require__("../../../../../src/app/components/paybills/paybills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/paybills/paybills.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaybillsComponent);
    return PaybillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register col-6 offset-3\">\n<h2 class=\"page-header\">Register</h2>\n<flash-messages></flash-messages>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"col-12\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"form-group\">\n          <label>Firstname</label>\n          <input type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"form-group\">\n          <label>Lastname</label>\n          <input type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <div class=\"form-group\">\n          <label>Username</label>\n          <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-8\">\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"form-group\">\n          <label>Confirm Password</label>\n          <input type=\"password\" [(ngModel)]=\"confirmpwd\" name=\"confirmpwd\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register {\n  padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_validateService, _flashMsg, _authService, _router) {
        this._validateService = _validateService;
        this._flashMsg = _flashMsg;
        this._authService = _authService;
        this._router = _router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            confirmpwd: this.confirmpwd
        };
        if (!this._validateService.validateRegister(user)) {
            // console.log("Please fill in all fields");
            this._flashMsg.show("Please fill in all fields", { cssClass: 'alert-danger' });
            return false;
        }
        if (!this._validateService.validateEmail(user.email)) {
            this._flashMsg.show("Please use a valid email!", { cssClass: 'alert-danger' });
            return false;
        }
        if (!this._validateService.confirmPassword(user)) {
            this._flashMsg.show("Password not match!", { cssClass: 'alert-danger' });
            return false;
        }
        // console.log(this._validateService.validateRegister(user));
        this._authService.registerUser(user).subscribe(function (data) {
            // console.log(data);
            if (data.success) {
                _this._flashMsg.show("You\'ve successfully created an account!", { cssClass: 'alert-success' });
                _this._router.navigate(["/login"]);
            }
            else {
                _this._flashMsg.show(data.message, { cssClass: "alert-danger" });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/support/support.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  support works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/support/support.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ph-support',
            template: __webpack_require__("../../../../../src/app/components/support/support.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/support/support.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        this.url_register = '/api/users/register';
        this.url_login = '/api/users/authenticate';
        this.url_profile = '/api/users/profile';
        // this.api_endpoints = 'http://localhost:3001';
        this.api_endpoints = '';
    }
    AuthService.prototype._post = function (url, data) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authToken);
        return this._http.post(this.api_endpoints + url, data, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype._get = function (url) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.authToken);
        return this._http.get(this.api_endpoints + url, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var url = this.api_endpoints + this.url_register;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticate = function (user) {
        var url = this.api_endpoints + this.url_login;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstname == undefined ||
            user.lastname == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ;
    ValidateService.prototype.validateEmail = function (email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(email);
    };
    ValidateService.prototype.confirmPassword = function (user) {
        if (user.password !== user.confirmpwd) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/assets/img/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.254240719d6fb903fa53.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map