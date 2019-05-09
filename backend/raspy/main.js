(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bracket_detail_bracket_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bracket-detail/bracket-detail.component */ "./src/app/bracket-detail/bracket-detail.component.ts");
/* harmony import */ var _bracket_bracket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bracket/bracket.component */ "./src/app/bracket/bracket.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");








var routes = [
    { path: 'brackets', component: _bracket_bracket_component__WEBPACK_IMPORTED_MODULE_4__["BracketComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]] },
    { path: 'brackets/:id', component: _bracket_detail_bracket_detail_component__WEBPACK_IMPORTED_MODULE_3__["BracketDetailComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '', redirectTo: '/brackets', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Raspy';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bracket_bracket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bracket/bracket.component */ "./src/app/bracket/bracket.component.ts");
/* harmony import */ var _bracket_detail_bracket_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bracket-detail/bracket-detail.component */ "./src/app/bracket-detail/bracket-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _bracket_bracket_component__WEBPACK_IMPORTED_MODULE_7__["BracketComponent"],
                _bracket_detail_bracket_detail_component__WEBPACK_IMPORTED_MODULE_8__["BracketDetailComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.canActivate = function () {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = JSON.parse(localStorage.getItem('token'));
        var currDate = new Date().getTime();
        return (token.valid && (currDate < token.expires));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bracket-detail/bracket-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/bracket-detail/bracket-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"raspy-nav\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"raspy-brand-sm\"></div><div class=\"raspy-nav-title\">Raspy</div>\n            <button class=\"menu-button\" (click)=\"openMenu()\"></button>\n        </div>\n    </div>\n</nav>\n<div *ngIf=\"bracket\" class=\"brackets\">\n  <div class=\"sidebar\" [ngClass]=\"{opened: menuOpened}\">\n        <div class=\"raspy-brand-lg\"></div>\n        <h1 class=\"raspy-brand\">RASPY</h1>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\"><h2>Bracket: {{bracket.detail.name}}</h2></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\"><h4>Created: {{bracket.detail.created_date | date}}</h4></div>\n            </div>\n            <br>\n            <div class=\"row\">\n                <div class=\"col\"><h3>Connected Users:</h3></div>\n            </div>\n            <br>\n            <div class=\"user-list\">\n                <div *ngFor=\"let u of userList\" class=\"connected-user\">{{u}}</div>\n            </div>\n        </div>\n  </div>\n  <div class=\"brackets-main\">\n    <div class=\"brackets-content\">\n        <ul class=\"message-list\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n            <li *ngFor=\"let m of messages\">\n                <span class=\"timestamp\">{{m.timestamp | date:'medium'}} </span>\n                <br>\n                <span class=\"user\"\n                    *ngIf=\"m.username\">{{m.username}}: </span>\n                <span class=\"server-message\"\n                    *ngIf=\"m.type==='serverMessage'\">Server: </span>\n                <span class=\"content\">{{m.content}}</span>\n            </li>\n        </ul>\n    </div>\n    <div class=\"message-box-footer\">\n        <div class=\"message-box\">\n            <form #f=\"ngForm\" (ngSubmit)=\"onSendMessage(f)\" novalidate>\n                <input ngModel\n                name=\"message\"\n                class=\"input-box\"\n                (keyup)=\"onMessageKeyUp($event)\"\n                (keydown)=\"onMessageKeyDown($event)\"\n                placeholder=\"Enter a message\"/>\n            </form>\n        </div>\n        <div class=\"updates-terminal\">\n            <div class=\"updates-terminal-message\" [innerHTML]=\"typingMessage\"></div>\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bracket-detail/bracket-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/bracket-detail/bracket-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.brackets {\n  height: inherit;\n  width: 100%;\n  display: table; }\n.brackets-main {\n  height: inherit;\n  display: table;\n  width: 100%; }\n.brackets-content {\n  display: table-cell; }\n.bracket-name {\n  padding: 10px; }\n.sidebar {\n  position: fixed;\n  overflow-x: hidden;\n  width: 0;\n  display: table-cell;\n  vertical-align: top;\n  height: 100%;\n  background: #0c0c0e;\n  color: #fff;\n  transition: .5s ease;\n  z-index: 1; }\n@media screen and (min-width: 768px) {\n    .sidebar {\n      width: 200px;\n      position: initial; } }\n.sidebar.opened {\n  width: 100%;\n  transition: .5s ease; }\n.raspy-brand-lg {\n  margin-top: 20px; }\n.message-box-footer {\n  display: table-row;\n  border-collapse: collapse;\n  height: 1px;\n  background: #74525f;\n  color: #fff; }\n.input-box {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  color: #fff; }\n.message-box,\n.updates-terminal-message {\n  padding-left: 20px; }\n.message-box:before {\n  content: \">\";\n  display: block;\n  position: absolute;\n  margin-top: 8px;\n  margin-left: -5px; }\n.updates-terminal:before {\n  content: \"//\";\n  display: block;\n  position: absolute; }\n.updates-terminal {\n  color: orange;\n  background-color: #000;\n  min-height: 43px;\n  padding: 10px; }\n.message-list {\n  font-size: 16px;\n  height: calc(100vh - 133px);\n  overflow-y: scroll;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none; }\n@media screen and (min-width: 768px) {\n    .message-list {\n      height: calc(100vh - 81px); } }\n.message-list::-webkit-scrollbar {\n  width: 0 !important; }\n.message-list li {\n  background-color: #26222c;\n  color: #AAA;\n  font-family: 'Ubuntu Mono', monospace;\n  margin: 10px;\n  padding: 10px;\n  border: 1px solid #555;\n  border-radius: 4px; }\n.timestamp {\n  color: aqua; }\n.user {\n  color: greenyellow; }\n.user-list {\n  max-height: 300px;\n  overflow-y: scroll;\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none; }\n.user-list::-webkit-scrollbar {\n  width: 0 !important; }\n.connected-user {\n  background-color: #3c3746;\n  color: #fff;\n  margin-bottom: 5px;\n  padding: 5px;\n  border: 1px solid #555;\n  border-radius: 4px; }\n.connected-user:before {\n  content: \"• \";\n  color: greenyellow; }\n@media screen and (min-width: 768px) {\n  .raspy-nav {\n    display: none; } }\n.menu-button {\n  float: right;\n  background-color: transparent;\n  border: none;\n  background-image: url('menu-btn.png');\n  background-size: cover;\n  width: 32px;\n  height: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhY2tldC1kZXRhaWwvYnJhY2tldC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYXNoZXJsbG95ZC9EZXNrdG9wL3Jhc3B5L2Zyb250ZW5kL3NyYy9hcHAvYnJhY2tldC1kZXRhaWwvYnJhY2tldC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjLEVBQUE7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVcsRUFBQTtBQUdmO0VBQ0ksbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7QUFFVjtJQVpKO01BYVEsWUFBWTtNQUNaLGlCQUFpQixFQUFBLEVBRXhCO0FBRUQ7RUFDSSxXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7QUFHeEI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7QUFHZjtFQUNJLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVyxFQUFBO0FBR2Y7O0VBRUksa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0FBR2pCO0VBQ0ksZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLHdCQUF3QixFQUFBO0FBRXhCO0lBVko7TUFXUSwwQkFBMEIsRUFBQSxFQUVqQztBQUVEO0VBQW1DLG1CQUFvQixFQUFBO0FBRXZEO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsd0JBQXdCLEVBQUE7QUFHNUI7RUFBZ0MsbUJBQW9CLEVBQUE7QUFFcEQ7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksYUFBUztFQUNULGtCQUFrQixFQUFBO0FBSWxCO0VBREo7SUFFUSxhQUFhLEVBQUEsRUFFcEI7QUFFRDtFQUNJLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHFDQUFxRDtFQUNyRCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JyYWNrZXQtZGV0YWlsL2JyYWNrZXQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJyYWNrZXRzIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7IH1cblxuLmJyYWNrZXRzLW1haW4ge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uYnJhY2tldHMtY29udGVudCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7IH1cblxuLmJyYWNrZXQtbmFtZSB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzBjMGMwZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICB6LWluZGV4OiAxOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNpZGViYXIge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgcG9zaXRpb246IGluaXRpYWw7IH0gfVxuXG4uc2lkZWJhci5vcGVuZWQge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7IH1cblxuLnJhc3B5LWJyYW5kLWxnIHtcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxuXG4ubWVzc2FnZS1ib3gtZm9vdGVyIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogIzc0NTI1ZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmlucHV0LWJveCB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjsgfVxuXG4ubWVzc2FnZS1ib3gsXG4udXBkYXRlcy10ZXJtaW5hbC1tZXNzYWdlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9XG5cbi5tZXNzYWdlLWJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIj5cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogLTVweDsgfVxuXG4udXBkYXRlcy10ZXJtaW5hbDpiZWZvcmUge1xuICBjb250ZW50OiBcIi8vXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cblxuLnVwZGF0ZXMtdGVybWluYWwge1xuICBjb2xvcjogb3JhbmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBtaW4taGVpZ2h0OiA0M3B4O1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5tZXNzYWdlLWxpc3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEzM3B4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLm1lc3NhZ2UtbGlzdCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MXB4KTsgfSB9XG5cbi5tZXNzYWdlLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAgIWltcG9ydGFudDsgfVxuXG4ubWVzc2FnZS1saXN0IGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjIyYztcbiAgY29sb3I6ICNBQUE7XG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbi50aW1lc3RhbXAge1xuICBjb2xvcjogYXF1YTsgfVxuXG4udXNlciB7XG4gIGNvbG9yOiBncmVlbnllbGxvdzsgfVxuXG4udXNlci1saXN0IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IH1cblxuLnVzZXItbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMCAhaW1wb3J0YW50OyB9XG5cbi5jb25uZWN0ZWQtdXNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzM3NDY7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG5cbi5jb25uZWN0ZWQtdXNlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAoiBcIjtcbiAgY29sb3I6IGdyZWVueWVsbG93OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5yYXNweS1uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG4ubWVudS1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pY29ucy9tZW51LWJ0bi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7IH1cbiIsIi5icmFja2V0cyB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uYnJhY2tldHMtbWFpbiB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYnJhY2tldHMtY29udGVudCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmJyYWNrZXQtbmFtZSB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgd2lkdGg6IDA7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMGMwYzBlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICB9XG59XG5cbi5zaWRlYmFyLm9wZW5lZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG59XG5cbi5yYXNweS1icmFuZC1sZyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1lc3NhZ2UtYm94LWZvb3RlciB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogIzc0NTI1ZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmlucHV0LWJveCB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLm1lc3NhZ2UtYm94LFxuLnVwZGF0ZXMtdGVybWluYWwtbWVzc2FnZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ubWVzc2FnZS1ib3g6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIj5cIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4udXBkYXRlcy10ZXJtaW5hbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLy9cIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi51cGRhdGVzLXRlcm1pbmFsIHtcbiAgICBjb2xvcjogb3JhbmdlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgbWluLWhlaWdodDogNDNweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1saXN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTMzcHgpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MXB4KTtcbiAgICB9XG59XG5cbi5tZXNzYWdlLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDAgIWltcG9ydGFudCB9XG5cbi5tZXNzYWdlLWxpc3QgbGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjIyMmM7XG4gICAgY29sb3I6ICNBQUE7XG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRpbWVzdGFtcCB7XG4gICAgY29sb3I6IGFxdWE7XG59XG5cbi51c2VyIHtcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbi51c2VyLWxpc3Qge1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xufVxuXG4udXNlci1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiAwICFpbXBvcnRhbnQgfVxuXG4uY29ubmVjdGVkLXVzZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzM3NDY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNvbm5lY3RlZC11c2VyOmJlZm9yZSB7XG4gICAgY29udGVudDogXCLigKIgXCI7XG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4ucmFzcHktbmF2IHtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pY29ucy9tZW51LWJ0bi5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/bracket-detail/bracket-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/bracket-detail/bracket-detail.component.ts ***!
  \************************************************************/
/*! exports provided: BracketDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketDetailComponent", function() { return BracketDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");





var BracketDetailComponent = /** @class */ (function () {
    function BracketDetailComponent(rest, route, socket) {
        this.rest = rest;
        this.route = route;
        this.socket = socket;
        this.messages = [];
        this.userList = [];
        this.typeDelay = 1000;
    }
    BracketDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getBracket(this.route.snapshot.params['id']).subscribe(function (bracket) {
            _this.bracket = bracket;
            _this.messages = bracket.messages;
        });
        this.userId = JSON.parse(localStorage.getItem("token")).user_id;
        this.userList = [];
        this.socket.onUserConnection().subscribe(function (connectionStatus) {
            var connectionString = " connected.";
            if (!connectionStatus.connected) {
                connectionString = " disconnected.";
            }
            _this.userList = Object.values(connectionStatus.userList);
            _this.messages.push({
                type: "serverMessage",
                username: "",
                timestamp: Date.now(),
                content: connectionStatus.user + connectionString,
                bracket_id: -1
            });
        });
        this.socket.onNewMessage().subscribe(function (message) {
            _this.messages.push(message);
        });
        this.socket.onUserTyping().subscribe(function (userTypingList) {
            _this.typingMessage = "";
            if (userTypingList.length == 1) {
                _this.typingMessage = userTypingList[0] + " is typing";
            }
            else if (userTypingList.length > 1) {
                _this.typingMessage = userTypingList.join(', ').replace(/,(?!.*,)/gmi, ' and') + " are typing";
            }
        });
    };
    BracketDetailComponent.prototype.onUserTyping = function (userId, isTyping) {
        var userTypingData = {
            user_id: userId,
            isTyping: isTyping
        };
        this.socket.userTyping(userTypingData);
    };
    BracketDetailComponent.prototype.onMessageKeyUp = function (event) {
        var _this = this;
        if (event.keyCode != 13) { // Enter
            clearTimeout(this.typingTimeout);
            this.typingTimeout = setTimeout(function (_) {
                _this.onUserTyping(_this.userId, false);
            }, this.typeDelay);
        }
        else {
            clearTimeout(this.typingTimeout);
            this.onUserTyping(this.userId, false);
        }
    };
    BracketDetailComponent.prototype.onMessageKeyDown = function (event) {
        if (event.keyCode != 13) { // Enter
            clearTimeout(this.typingTimeout);
            this.onUserTyping(this.userId, true);
        }
    };
    BracketDetailComponent.prototype.onSendMessage = function (f) {
        if (f.value.message) {
            if (f.value.message.replace(/^\s+|\s+$/g, '')) {
                var messageData = {
                    user_id: this.userId,
                    bracket_id: this.bracket.detail.id,
                    timestamp: Date.now(),
                    content: f.value.message
                };
                f.resetForm();
                this.socket.sendMessage(messageData);
                this.onUserTyping(this.userId, false);
            }
        }
    };
    BracketDetailComponent.prototype.openMenu = function () {
        if (!this.menuOpened) {
            this.menuOpened = true;
        }
        else {
            this.menuOpened = false;
        }
    };
    BracketDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bracket-detail',
            template: __webpack_require__(/*! ./bracket-detail.component.html */ "./src/app/bracket-detail/bracket-detail.component.html"),
            styles: [__webpack_require__(/*! ./bracket-detail.component.scss */ "./src/app/bracket-detail/bracket-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], BracketDetailComponent);
    return BracketDetailComponent;
}());



/***/ }),

/***/ "./src/app/bracket/bracket.component.html":
/*!************************************************!*\
  !*** ./src/app/bracket/bracket.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"raspy-nav\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"raspy-brand-sm\"></div><div class=\"raspy-nav-title\">Raspy</div>\n        </div>\n    </div>\n</nav>\n<div class=\"brackets-list\">\n    <div class=\"container\">\n        <h1>Brackets</h1>\n\n        <ul class=\"brackets-links\">\n            <li *ngFor=\"let b of brackets\" class=\"bracket-group\">\n                <a routerLink=\"/brackets/{{b.id}}\">\n                    <div class=\"row table-row align-mid\">\n                        <div class=\"col fifth\"><h2>{{b.name}}</h2></div>\n                        <div class=\"col four-fifths\">\n                            <div class=\"created-date\">| Created: {{b.created_date | date}}</div>\n                        </div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/bracket/bracket.component.scss":
/*!************************************************!*\
  !*** ./src/app/bracket/bracket.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brackets-list {\n  color: #fff; }\n  .brackets-list h1 {\n    margin-top: 40px;\n    color: greenyellow; }\n  .brackets-list .brackets-links {\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n  .brackets-list .bracket-group {\n    background-color: #26222c;\n    color: #AAA;\n    margin: 10px 0;\n    border: 1px solid #555;\n    border-radius: 4px; }\n  .brackets-list .bracket-group a {\n    display: block;\n    padding: 10px; }\n  .brackets-list .bracket-group a .created-date {\n      color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc2hlcmxsb3lkL0Rlc2t0b3AvcmFzcHkvZnJvbnRlbmQvc3JjL2FwcC9icmFja2V0L2JyYWNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7RUFEZjtJQUlRLGdCQUFnQjtJQUNoQixrQkFBa0IsRUFBQTtFQUwxQjtJQVNRLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUyxFQUFBO0VBWGpCO0lBZVEseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFBO0VBbkIxQjtJQXVCUSxjQUFjO0lBQ2QsYUFBYSxFQUFBO0VBeEJyQjtNQTJCWSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9icmFja2V0L2JyYWNrZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhY2tldHMtbGlzdCB7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIGNvbG9yOiBncmVlbnllbGxvdztcbiAgICB9XG5cbiAgICAuYnJhY2tldHMtbGlua3Mge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmJyYWNrZXQtZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyMjJjO1xuICAgICAgICBjb2xvcjogI0FBQTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuYnJhY2tldC1ncm91cCBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgXG4gICAgICAgIC5jcmVhdGVkLWRhdGUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/bracket/bracket.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bracket/bracket.component.ts ***!
  \**********************************************/
/*! exports provided: BracketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BracketComponent", function() { return BracketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");



var BracketComponent = /** @class */ (function () {
    function BracketComponent(rest) {
        this.rest = rest;
        this.brackets = [];
    }
    BracketComponent.prototype.ngOnInit = function () {
        this.getBrackets();
        // console.log(localStorage.getItem('token'));
    };
    BracketComponent.prototype.getBrackets = function () {
        var _this = this;
        this.brackets = [];
        this.rest.getBrackets().subscribe(function (brackets) {
            _this.brackets = brackets;
        });
    };
    BracketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bracket',
            template: __webpack_require__(/*! ./bracket.component.html */ "./src/app/bracket/bracket.component.html"),
            styles: [__webpack_require__(/*! ./bracket.component.scss */ "./src/app/bracket/bracket.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], BracketComponent);
    return BracketComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: apiLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiLocation", function() { return apiLocation; });

var apiLocation = '';


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-stars\">\n    <div class=\"password-form-container\">\n        <div class=\"password-form\">\n            <div class=\"raspy-brand-lg\"></div>\n            <div class=\"raspy-brand\">Raspy</div>\n            <form #f=\"ngForm\" (ngSubmit)=\"onLogin(f)\" ngNativeValidate>\n                <label>Username</label>\n                <input ngModel\n                    name=\"username\"\n                    class=\"username\"\n                    [required]=true/>\n                <div *ngIf=\"!userExists\" class=\"error-label\">Username does not exist</div>\n                <label>Password</label>\n                <input ngModel\n                    name=\"password\"\n                    class=\"password\"\n                    type=\"password\"\n                    [required]=true/>\n                <div *ngIf=\"!passwordValid\" class=\"error-label\">Password is incorrect</div>\n                <button>Login</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(rest, router) {
        this.rest = rest;
        this.router = router;
        this.userExists = true;
        this.passwordValid = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (f) {
        var _this = this;
        var user_data = {
            username: f.value.username,
            password: f.value.password // we would ideally use https here.
        };
        this.rest.sendUserCredentials(user_data).subscribe(function (user_data) {
            if (user_data.valid) {
                _this.userExists = true;
                _this.passwordValid = true;
                localStorage.setItem('token', JSON.stringify(user_data));
                _this.router.navigate(['/brackets']);
            }
            else if (!user_data.exists) {
                _this.userExists = false;
                _this.passwordValid = true; // used to get rid of label since user doesn't exist anyway
            }
            else if (user_data.exists && !user_data.valid) {
                _this.userExists = true;
                _this.passwordValid = false;
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-stars\">\n    <div class=\"password-form-container\">\n        <div class=\"password-form\">\n            <div class=\"raspy-brand-lg\"></div>\n            <div class=\"raspy-brand\">Raspy</div>\n            <form *ngIf=\"!registered\" #f=\"ngForm\" (ngSubmit)=\"onRegister(f)\" ngNativeValidate>\n                <label>Username</label>\n                <input ngModel\n                    name=\"username\"\n                    class=\"username\"\n                    [required]=true/>\n                <div *ngIf=\"usernameTaken\" class=\"error-label\">Username is taken</div>\n                <label>Password</label>\n                <input ngModel\n                    name=\"password\"\n                    class=\"password\"\n                    type=\"password\"\n                    [required]=true/>\n                <label>Confirm Password</label>\n                <input ngModel\n                    name=\"confirmPassword\"\n                    class=\"confirmPassword\"\n                    type=\"password\"\n                    [required]=true/>\n                <div *ngIf=\"!passwordsMatch\" class=\"error-label\">Passwords do not match</div>\n                <button>Register</button>\n            </form>\n            <div *ngIf=\"registered\" class=\"success-message\">Success! <a routerLink=\"/login\">Click here</a> to login</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(rest, router) {
        this.rest = rest;
        this.router = router;
        this.passwordsMatch = true;
        this.usernameTaken = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function (f) {
        var _this = this;
        if (f.value.password != f.value.confirmPassword) {
            this.passwordsMatch = false;
        }
        else {
            this.passwordsMatch = true;
            var user_data = {
                username: f.value.username,
                password: f.value.password // we would ideally use https here.
            };
            this.rest.registerUser(user_data).subscribe(function (received_user_data) {
                // console.log(user_data);
                if (received_user_data.valid) {
                    _this.registered = true;
                }
                else {
                    _this.usernameTaken = true;
                }
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");






var endpoint = _globals__WEBPACK_IMPORTED_MODULE_5__["apiLocation"] + '/api/';
var httpOpts = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    // get single bracket
    RestService.prototype.getBracket = function (id) {
        return this.http.get(endpoint + 'brackets/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    // get all registered brackets
    RestService.prototype.getBrackets = function () {
        return this.http.get(endpoint + 'brackets').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    RestService.prototype.sendUserCredentials = function (user_data) {
        return this.http.post(endpoint + 'login', user_data, httpOpts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('sendUserCredentials')));
    };
    RestService.prototype.registerUser = function (user_data) {
        return this.http.post(endpoint + 'register', user_data, httpOpts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('registerUser')));
    };
    //..
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");





var SocketService = /** @class */ (function () {
    function SocketService() {
        var user_id = JSON.parse(localStorage.getItem("token")).user_id;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_globals__WEBPACK_IMPORTED_MODULE_4__["apiLocation"], { query: 'user_id=' + user_id });
        this.socket.emit('user connected');
    }
    // Messaging
    SocketService.prototype.sendMessage = function (messageData) {
        this.socket.emit('chat message', messageData);
    };
    SocketService.prototype.onNewMessage = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on('chat message', function (message) {
                observer.next(message);
            });
        });
    };
    // Typing
    SocketService.prototype.userTyping = function (userTypingData) {
        this.socket.emit('user typing', userTypingData);
    };
    SocketService.prototype.onUserTyping = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on('user typing', function (typing) {
                observer.next(typing);
            });
        });
    };
    // Connection
    /*  userConnection(userConnectionData: any) {
        this.socket.emit('user connection', userConnectionData);
      }*/
    SocketService.prototype.onUserConnection = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on('user connection', function (connectionStatus) {
                observer.next(connectionStatus);
            });
        });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asherlloyd/Desktop/raspy/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map