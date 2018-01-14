webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__command_center_command_center_component__ = __webpack_require__("../../../../../src/app/command-center/command-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_api_map_api_component__ = __webpack_require__("../../../../../src/app/map-api/map-api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_gmaps_service__ = __webpack_require__("../../../../../src/app/services/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_map_new_map_component__ = __webpack_require__("../../../../../src/app/new-map/new-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_tofixed_pipe__ = __webpack_require__("../../../../../src/app/pipes/tofixed.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Conps








// Modules



var appRoutes = [
    {
        path: 'crisis-center',
        component: __WEBPACK_IMPORTED_MODULE_7__command_center_command_center_component__["a" /* CommandCenterComponent */],
        data: { formData: 'data' }
    },
    {
        path: 'welcome',
        component: __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'map-api',
        component: __WEBPACK_IMPORTED_MODULE_9__map_api_map_api_component__["a" /* MapApiComponent */]
    },
    {
        path: 'new-map',
        component: __WEBPACK_IMPORTED_MODULE_11__new_map_new_map_component__["a" /* NewMapComponent */]
    },
    { path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__command_center_command_center_component__["a" /* CommandCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_9__map_api_map_api_component__["a" /* MapApiComponent */],
            __WEBPACK_IMPORTED_MODULE_11__new_map_new_map_component__["a" /* NewMapComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_tofixed_pipe__["a" /* TofixedPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["InputSwitchModule"],
            __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_gmaps_service__["a" /* GmapsService */], __WEBPACK_IMPORTED_MODULE_12__services_api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/command-center/command-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bar {\n    padding: 16px;\n    background: transparent;\n    position: absolute;\n    width: 100%;\n    z-index: 100000;\n}\n.search-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.form-controls, .dropdown { \n    margin-right: 26px; \n}\n\n.card {\n    border: 2px solid #EEEEEE;\n    padding: 20px;\n}\n.card-title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.loanInfo {\n}\n\n.table thead th {\n    border-bottom: 2px solid blue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/command-center/command-center.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-map-api></app-map-api> -->\n\n<div class=\"container pt-5\">\n  <h5>Dashboard</h5>\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <p>Merchant Measurement</p>\n          <div>\n            <button (click)=\"toggleBar('yoy')\">Year</button>\n            <button (click)=\"toggleBar('mom')\">Month</button>\n          </div>\n        </div>\n        <p-chart *ngIf=\"finished\" type=\"horizontalBar\" [options]=\"options\" [data]=\"data\" [width]=\"100\" [height]=\"50\"></p-chart>\n      </div>\n      <div class=\"card mt-4\">\n        <div class=\"card-title\">\n          <p>Competition</p>\n        </div>\n        <div class=\"card-title\">\n          <div>\n            <h1>38</h1>\n            <p>Total Competitors</p>\n          </div>\n          <div>\n            <h1>4.5</h1>\n            <p>Avg. Competitor Rating</p>\n          </div>\n        </div>\n        <p>TOP 3 COMPETITORS</p>\n        <div>\n            <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">NAME</th>\n                    <th scope=\"col\">RATING</th>\n                    <th scope=\"col\">PRICE POINT</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>China Star</td>\n                    <td>2.5</td>\n                    <td>$$$</td>\n                  </tr>\n                  <tr>\n                    <td>Thai Kitchen</td>\n                    <td>2.5</td>\n                    <td>$$</td>\n                  </tr>\n                  <tr>\n                    <td>Ru Sans Sushi</td>\n                    <td>2.5</td>\n                    <td>$$$$</td>\n                  </tr>\n                </tbody>\n              </table>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <p>Loan Calculator</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"loanForm col-md-6\">\n            <form [formGroup]=\"loanForm\" novalidate (ngSubmit)=\"onSubmitLoan(loanForm.controls)\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" formControlName=\"balance\" placeholder=\"Balance\">\n                <input class=\"form-control mt-2\" type=\"number\" formControlName=\"loanAmount\" placeholder=\"Loan Amount\">\n                <input class=\"form-control mt-2\" type=\"text\" formControlName=\"term\" placeholder=\"Term\">\n                <input class=\"form-control mt-2\" type=\"text\" formControlName=\"zipcode\" placeholder=\"Zip Code\">\n                <button class=\"btn btn-green mt-2\" type=\"submit\" [routerLink]=\"['/crisis-center']\">SUBMIT</button>\n              </div>\n            </form>\n          </div>\n          <div class=\"loanInfo col-md-6\">\n            <h1>5.1%</h1>\n            <p>Interest Rate</p>\n            <a>Apply</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"card mt-4\">\n        <div class=\"card-title\">\n          <p>Walkability</p>\n        </div>\n        <h1>{{walk.datasets[0].data[0]}}%</h1>\n        <p>{{walkGrade}}</p>\n        <p-chart *ngIf=\"finishedWalk\" type=\"doughnut\" [data]=\"walk\"></p-chart>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/command-center/command-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommandCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gmaps_service__ = __webpack_require__("../../../../../src/app/services/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommandCenterComponent = (function () {
    function CommandCenterComponent(route, fb, api, gapi) {
        this.route = route;
        this.fb = fb;
        this.api = api;
        this.gapi = gapi;
        this.data = {
            labels: [
                'Sales Volume Growth YoY',
                'Sales Transaction Count Growth YoY',
                'Spend Outside Geography',
                'Average Transaction Frequencey'
            ],
            datasets: [
                {
                    label: '',
                    data: [],
                    fill: true,
                    backgroundColor: '#ffffff',
                }
            ],
        };
        this.allMMData = {};
        this.isYoy = true;
        this.isMom = false;
        this.finished = false;
        this.finishedWalk = false;
        this.options = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                display: false
            }
        };
        this.walk = {
            labels: ['Walkability'],
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        "#70D56F"
                    ],
                    hoverBackgroundColor: [
                        "#70D56F"
                    ]
                }
            ]
        };
        this.searchForm = this.fb.group({
            business: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            zip: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            radius: ['']
        });
        this.loanForm = this.fb.group({
            balance: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            loanAmount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            term: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    }
    CommandCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Merchant Measurement Bar Graph
        this.api.getMeasurement('30044').subscribe(function (result) {
            _this.allMMData = result;
            _this.setBatGraph();
        });
        // Walkability Pie
        this.api.getWalkability(33.749249, -84.387314).subscribe(function (data) {
            var rate = data.score;
            _this.walk.datasets[0].data.push(rate);
            var total = 100 - rate;
            _this.walk.datasets[0].data.push(total);
            _this.finishedWalk = true;
            if (rate <= 25) {
                _this.walkGrade = 'Bad :(';
            }
            else if (rate >= 25 && rate <= 50) {
                _this.walkGrade = 'Poor';
            }
            else if (rate >= 51 && rate <= 75) {
                _this.walkGrade = 'Good';
            }
            else if (rate >= 75) {
                _this.walkGrade = 'Great!';
            }
        });
    };
    CommandCenterComponent.prototype.setBatGraph = function () {
        var _this = this;
        if (this.isYoy) {
            __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.forEach(this.allMMData, function (value, label) {
                var yoy = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'YoY');
                var other = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'y');
                if (yoy || other) {
                    _this.data.datasets[0].data.push(value);
                }
                _this.finished = true;
            });
        }
        else if (this.isMom) {
            __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.forEach(this.allMMData, function (value, label) {
                var yoy = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'MoM');
                var other = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'y');
                if (yoy || other) {
                    _this.data.datasets[0].data.push(value);
                }
                _this.finished = true;
            });
        }
    };
    CommandCenterComponent.prototype.toggleBar = function (type) {
        if (type === 'yoy') {
            this.isYoy = true;
            this.isMom = false;
            this.setBatGraph();
        }
        else {
            this.isYoy = false;
            this.isMom = true;
            this.setBatGraph();
        }
    };
    CommandCenterComponent.prototype.onSubmitLoan = function (controls) {
        this.api.getDepositRates(controls.balance, controls.loanAmount, controls.term, controls.zipcode).subscribe(function (rate) {
            console.log(rate);
        });
    };
    return CommandCenterComponent;
}());
CommandCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-command-center',
        template: __webpack_require__("../../../../../src/app/command-center/command-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/command-center/command-center.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_gmaps_service__["a" /* GmapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_gmaps_service__["a" /* GmapsService */]) === "function" && _d || Object])
], CommandCenterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=command-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n    background-color: #111741;\n    /* background-image:linear-gradient(#2B2E47, #0E0E24); */\n    background-image: radial-gradient(at top, #192261, #0b102c);\n    min-height: 100vh;\n}\n\n.bg {\n    background-color: transparent;\n    background-image: linear-gradient(0deg,\n            transparent 24%,\n            rgba(0, 0, 0, .15) 25%,\n            rgba(0, 0, 0, .15) 26%,\n            transparent 27%,\n            transparent 74%,\n            rgba(0, 0, 0, .15) 75%,\n            rgba(0, 0, 0, .15) 76%,\n            transparent 77%,\n            transparent),\n        linear-gradient(90deg,\n            transparent 24%,\n            rgba(0, 0, 0, .15) 25%,\n            rgba(0, 0, 0, .15) 26%,\n            transparent 27%,\n            transparent 74%,\n            rgba(0, 0, 0, .15) 75%,\n            rgba(0, 0, 0, .15) 76%,\n            transparent 77%,\n            transparent);\n    height:100%;\n    background-size:50px 50px;\n    min-height: 100vh;\n    box-sizing: border-box;\n\n    /* background: url('../../assets/landing.png') no-repeat top center; */\n    /* position: fixed;\n    width: 100%;\n    height: 100%;\n    top:0;\n    left:0;\n    background-size: cover; */\n}\n\n.container-landing {\n    padding-top: 5%;\n    background: url(" + __webpack_require__("../../../../../src/assets/landing-map2.svg") + ") no-repeat center center;\n    /* background-size: cover; */\n    /* min-height: 100vh; */\n}\n\n.white {\n    color: #DFDFDF;\n}\n\n.container-landing h1 {\n    font-weight: 700;\n}\n\n.btn-top {\n    max-width: 500px;\n    position: relative;\n    margin: 5% auto;\n}\n.search-group {\n    margin: 0 auto;\n}\n.form-control {\n    margin: 5px\n}\n\n/* .container-landing .btn {\n    text-transform: uppercase;\n    padding: 1em 3em;\n    font-weight: 700;\n    color: #143D6E;\n} */\n\n.btn-gold {\n    background-color: #FBD110;\n    color: #192161;\n}\n\n.bottom-content {\n    color: #DFDFDF;\n    /* margin: 125px 0 0; */\n    margin: auto;\n    width: 80%;\n    text-align: center;\n    fill: white;\n}\n\n.bottom-content img {\n    margin: 0 auto;\n}\n\n.bottom-content .not-middle-col {\n    padding-top: 2em;\n}\n\n.title-text {\nfont-size: 24px;\npadding-bottom: 10px;\ncolor:white;\n\n}\n\n.slogan {\n  font-size: 24px;\n\n  color:white;\n  margin-top: 25px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"bg\">\n    <div class=\"container-landing\">\n      <div class=\"text-center\">\n        <div class=\"logo\">\n          <img src=\"../../assets/ScoutLogo.svg\">\n        </div>\n        <div class=\"slogan\">Have a small business? Find your next location with Scout!</div>\n        <div class=\"btn-top\">\n          <div class=\"form-inline search-group\" novalidate>\n            <div class=\"input-group mb-2 mb-sm-0\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"business\" placeholder=\"Business Type\">\n            </div>\n            <div class=\"input-group mb-2 mb-sm-0\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"zip\" placeholder=\"Zip Code\">\n            </div>\n            <button class=\"btn btn-gold my-2 my-sm-0\" type=\"submit\" [routerLink]=\"['/map-api']\" [queryParams]=\"{zip: zip, business: business}\">Search</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"bottom-content row\">\n        <div class=\"col-4\" style=\"padding-top:80px\">\n          <img src=\"../assets/pie.svg\" style=\"padding-bottom:20px\" width=\"40px\">\n          <div class=\"title-text\">Compare Your Business</div>\n          <p>Enter your desired business location to compare similar businesses' performance in the area.</p>\n        </div>\n        <div class=\"col-4\">\n          <img src=\"../assets/person.svg\" style=\"padding-bottom:20px\" height=\"70px\">\n          <div class=\"title-text\">See Potential Competitors</div>\n          <p>Concerned about competition? Use our competitor tool find a great location with low competition.</p>\n        </div>\n        <div class=\"col-4\" style=\"padding-top:80px\">\n          <img src=\"../assets/startup.png\" style=\"padding-bottom:20px\" width=\"40px\">\n          <div class=\"title-text\">Start Your Business</div>\n          <p>Found your location? Get interest rates on personal loans from US Bank.</p>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-api/map-api.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-wrap\" [class.dash-active]=\"showDash\">\n  <nav class=\"navbar navbar-dark map-nav\">\n    <a class=\"navbar-brand\" href=\"/\">\n      <!-- <img src=\"/assets/map.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      <span class=\"brand-text\">Scout V1</span> -->\n      <img src=\"/assets/ScoutLogo.svg\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    </a>\n    <form class=\"form-inline\" [formGroup]=\"searchForm\" novalidate (ngSubmit)=\"submitSearch()\">\n      <div class=\"input-group mb-2 mb-sm-0\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"business\" placeholder=\"Business Type\">\n      </div>\n      <div class=\"input-group mb-2 mb-sm-0\">\n        <input type=\"text\" class=\"form-control\" formControlName=\"zip\" placeholder=\"Zip Code\">\n      </div>\n      <button class=\"btn btn-gold my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </nav>\n  <div #map id=\"googleMap\"></div>\n  <div class=\"dash-panel\">\n    <div class=\"map-metrics\">\n      <div class=\"dash-tab\" (click)=\"toggleDash()\">\n        <span class=\"top\">\n          <i class=\"fa fa-angle-up\" aria-hidden=\"true\" *ngIf=\"!showDash\"></i>\n          <i class=\"fa fa-angle-down\" aria-hidden=\"true\" *ngIf=\"showDash\"></i>\n        </span>\n        <span class=\"bottom\" *ngIf=\"!showDash\">View More</span>\n        <span class=\"bottom\" *ngIf=\"showDash\">View Less</span>\n      </div>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            <div class=\"map-output-tile\">\n              <h3>Transactions Growth</h3>\n              <!-- <div class=\"amount-output\" *ngIf=\"visaData\">\n                <span *ngIf=\"!transYoY\" [class.postive]=\"visaData.salesTranCntGrowthMoM > 0\">{{visaData.salesTranCntGrowthMoM | tofixed}}</span>\n                <span *ngIf=\"transYoY\" [class.postive]=\"visaData.salesTranCntGrowthYoY > 0\">{{visaData.salesTranCntGrowthYoY | tofixed}}</span>%\n              </div> -->\n              <div class=\"amount-output\">\n                <span *ngIf=\"!transYoY\">31</span>\n                <span *ngIf=\"transYoY\">52</span>%\n              </div>\n              <div class=\"btn-group toggle-inputs\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn\" [class.active]=\"transYoY\" (click)=\"toggleTrans(true)\">Over Year</button>\n                <button type=\"button\" class=\"btn\" [class.active]=\"!transYoY\" (click)=\"toggleTrans(false)\">Over Month</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <div class=\"map-output-tile\">\n              <h3>Volume Growth</h3>\n              <!-- <div class=\"amount-output\" *ngIf=\"visaData\">\n                <span *ngIf=\"!salesYoY\" [class.postive]=\"visaData.salesVolumeGrowthMoM > 0\">{{visaData.salesVolumeGrowthMoM | tofixed}}</span>\n                <span *ngIf=\"salesYoY\" [class.postive]=\"visaData.salesVolumeGrowthYoY > 0\">{{visaData.salesVolumeGrowthYoY | tofixed}}</span>%\n              </div> -->\n              <div class=\"amount-output\">\n                <span *ngIf=\"!salesYoY\">43</span>\n                <span *ngIf=\"salesYoY\">12</span>%\n              </div>\n              <div class=\"btn-group toggle-inputs\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn\" [class.active]=\"salesYoY\" (click)=\"toggleSales(true)\">Over Year</button>\n                <button type=\"button\" class=\"btn\" [class.active]=\"!salesYoY\" (click)=\"toggleSales(false)\">Over Month</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <div class=\"map-output-tile\">\n              <h3>Out Of Town Sales</h3>\n              <!-- <p-chart *ngIf=\"chartData\" type=\"pie\" [data]=\"chartData\" [options]=\"chartOptions\"></p-chart> -->\n              <p-chart type=\"pie\" [data]=\"chartData\" [options]=\"chartOptions\"></p-chart>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <div class=\"map-output-tile\">\n              <h3>Est Competitor Count</h3>\n              <div class=\"amount-output\">\n                {{test.total}}\n                <span *ngIf=\"test.total === 40\">+</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm\">\n            <div class=\"map-output-tile\">\n              <h3>Avg Competition Rating</h3>\n              <div class=\"amount-output\">\n                {{ test.averageRating }}\n                <span class=\"fa fa-star main-star\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n        <div class=\"dash-content\">\n            <div class=\"container pt-5\">\n                <h5>Dashboard</h5>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-title\">\n                                <div class=\"logotitle\">\n                                    <span class=\"logo-title\">\n                                        <img src=\"../../assets/visa-logo.png\" height=\"10\" width=\"40\">\n                                    </span>\n                                    <p>Merchant Measurement</p>\n                                </div>\n                                <div class=\"btn-group toggledashbtn\" role=\"group\" aria-label=\"Basic example\">\n                                    <button type=\"button\" class=\"btn\" [class.active]=\"toggleBarY\" (click)=\"toggleBar(true)\">Year</button>\n                                    <button type=\"button\" class=\"btn\" [class.active]=\"!toggleBarY\" (click)=\"toggleBar(false)\">Month</button>\n                                </div>\n                            </div>\n                            <!-- <p-chart *ngIf=\"finished && toggleBarY\" type=\"horizontalBar\" [options]=\"options\" [data]=\"yData\" [width]=\"100\" [height]=\"50\"></p-chart> -->\n                            <p-chart *ngIf=\"toggleBarY\" type=\"horizontalBar\" [options]=\"options\" [data]=\"yData\" [width]=\"100\" [height]=\"50\"></p-chart>\n                            <!-- <p-chart *ngIf=\"finished && !toggleBarY\" type=\"horizontalBar\" [options]=\"options\" [data]=\"mData\" [width]=\"100\" [height]=\"50\"></p-chart> -->\n                            <p-chart *ngIf=\"!toggleBarY\" type=\"horizontalBar\" [options]=\"options\" [data]=\"mData\" [width]=\"100\" [height]=\"50\"></p-chart>\n                        </div>\n                        <div *ngIf=\"test\" class=\"card mt-4\">\n                                <div class=\"card-title\">\n                                  <div style=\"display: flex;\">\n                                    <span class=\"logo-title\">\n                                      <img src=\"../../assets/trophy.svg\" height=\"20\" width=\"40\">\n                                    </span>\n                                    <p>Competition</p>\n                                  </div>\n                                </div>\n                                <div class=\"card-title\">\n                                  <div>\n                                    <h1>{{test.total}}</h1>\n                                    <p>Total Competitors</p>\n                                  </div>\n                                  <div>\n                                    <h1>{{test.averageRating}}\n                                      <span class=\"fa fa-star\"></span>\n                                    </h1>\n                                    <p>Avg. Competitor Rating</p>\n                                  </div>\n                                </div>\n                                <p>TOP 4 COMPETITORS</p>\n                                <div>\n                                  <table class=\"table compete-table\">\n                                    <thead>\n                                      <tr>\n                                        <th scope=\"col\">NAME</th>\n                                        <th scope=\"col\">RATING</th>\n                                        <th scope=\"col\">PRICE POINT</th>\n                                      </tr>\n                                    </thead>\n                                    <tbody *ngFor=\"let joint of test.places\">\n                                      <tr>\n                                        <td>{{joint.name}}</td>\n                                        <td>{{joint.rating}}\n                                          <span class=\"fa fa-star table-rate\"></span>\n                                        </td>\n                                        <td>{{joint.price_level != null ? \"$\".repeat(joint.price_level) : \"\"}}</td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                </div>\n                              </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n\n                        <div class=\"card loan-card\">\n                            <div class=\"card-title\">\n                                <div class=\"logotitle\">\n                                    <span class=\"logo-title\">\n                                        <img src=\"../../assets/usbank-logo.png\" height=\"10\" width=\"40\">\n                                    </span>\n                                    <p>US Bank Loan Calculator</p>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"loanForm col-md-12\" *ngIf=\"!currentRate\">\n                                    <form [formGroup]=\"loanForm\" novalidate (ngSubmit)=\"onSubmitLoan()\">\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control mt-2\" type=\"number\" formControlName=\"loanAmount\" placeholder=\"Loan Amount\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <input class=\"form-control mt-2\" type=\"text\" formControlName=\"term\" placeholder=\"Term\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <button class=\"btn btn-gold\" type=\"submit\" [disabled]=\"!loanForm.valid\">Get Estimate</button>\n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"loanInfo col-md-12\" *ngIf=\"currentRate\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <th scope=\"row\">Rate</th>\n                                                <!-- <td></td> -->\n                                                <td>{{currentRate.interestRate}}%</td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">Term</th>\n                                                <td>{{currentRate.term}}</td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">Account Balance Tiers</th>\n                                                <td>{{currentRate.accountBalanceTiers}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                    <button type=\"button\" class=\"btn btn-blue\" (click)=\"resetLoanEst()\">Edit</button>\n                                    <a href=\"https://www.usbank.com/small-business/credit-financing/business-loans.html\" class=\"btn btn-link float-right\">Apply on usbank.com</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card mt-4 walk-card \">\n                            <div class=\"card-title\">\n                                <div class=\"logotitle\">\n                                    <span class=\"logo-title\">\n                                        <img src=\"../../assets/wow.svg\" height=\"20\" width=\"40\">\n                                    </span>\n                                    <p>Walkability</p>\n                                </div>\n                            </div>\n                            <p-chart type=\"doughnut\" [data]=\"walk\" [options]=\"walkOptions\"></p-chart>\n                            <div class=\"walk-out\">\n                                <h1>{{walk.datasets[0].data[0]}}%</h1>\n                            </div>\n                            <br>\n                            <br>\n                            <div class=\"letter\">B</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map-api/map-api.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-nav {\n  background: #192161;\n  font-family: 'Raleway', sans-serif;\n  border-bottom: 3px solid #FBD110; }\n\n.brand-text {\n  font-weight: bold;\n  padding-left: 10px; }\n\n.btn-gold {\n  background-color: #FBD110;\n  color: #192161; }\n\n.btn-blue {\n  background-color: #192161;\n  color: #FFF; }\n\n.input-group {\n  margin-right: 10px; }\n\n#googleMap {\n  width: 100vw;\n  height: calc(100vh - 270px);\n  position: relative;\n  z-index: 1; }\n\n.map-metrics {\n  padding-top: 25px;\n  position: relative;\n  z-index: 2;\n  border-top: 4px solid #FBD110; }\n\n.dash-tab {\n  width: 100px;\n  text-align: center;\n  position: absolute;\n  margin: 0 auto;\n  display: inline-block;\n  background: #FBD110;\n  color: #192161;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  top: -35px;\n  padding: 0px 20px;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n  cursor: pointer; }\n  .dash-tab .top {\n    text-align: center;\n    line-height: 0rem;\n    display: block;\n    margin-bottom: -8px; }\n  .dash-tab .bottom {\n    font-size: 0.7rem;\n    font-weight: 700; }\n\n.amount-output {\n  text-align: center;\n  font-size: 50px;\n  font-weight: 700; }\n\n.main-star {\n  color: #FBD110;\n  font-size: 30px;\n  line-height: 50px;\n  position: relative;\n  top: -10px; }\n\n.fa-star {\n  color: #FBD110; }\n\n.toggle-inputs {\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.map-output-tile h3 {\n  font-size: 1rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center; }\n\n.dash-wrap {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.dash-panel {\n  min-height: 100vh;\n  position: absolute;\n  top: calc(100vh - 211px);\n  left: 0;\n  right: 0;\n  background: #FFF;\n  z-index: 100;\n  transition: all .4s ease-in; }\n\n.dash-wrap.dash-active {\n  position: relative; }\n  .dash-wrap.dash-active .dash-panel {\n    top: 0; }\n  .dash-wrap.dash-active .map-metrics {\n    padding-top: 40px; }\n  .dash-wrap.dash-active .dash-tab {\n    top: 0;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px; }\n\n.loanInfo h5 {\n  font-size: .8rem;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.bar {\n  padding: 16px;\n  background: transparent;\n  position: absolute;\n  width: 100%;\n  z-index: 100000; }\n\n.search-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.form-controls, .dropdown {\n  margin-right: 26px; }\n\n.card {\n  border: 2px solid #EEEEEE;\n  padding: 20px; }\n\n.card-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.loan-card {\n  height: 343px; }\n\n.table thead th {\n  border-bottom: 2px solid #192161; }\n\n.logotitle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.logo-title {\n  padding-right: 10px; }\n\n.table-rating {\n  font-size: 20px;\n  line-height: 0;\n  position: relative;\n  top: 1px;\n  left: 2px; }\n\n.walk-card {\n  height: 493px; }\n\n.walk-out {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -30%);\n          transform: translate(-50%, -30%);\n  text-align: center; }\n  .walk-out p {\n    font-size: .7rem; }\n\nh3 {\n  text-align: center; }\n\n.letter {\n  font-size: 60px;\n  text-align: center; }\n\n.compete-table {\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-api/map-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gmaps_service__ = __webpack_require__("../../../../../src/app/services/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapApiComponent = (function () {
    function MapApiComponent(changeRef, mapApi, route, apiService, fb, router) {
        var _this = this;
        this.changeRef = changeRef;
        this.mapApi = mapApi;
        this.route = route;
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.visaData = null;
        this.salesYoY = true;
        this.transYoY = true;
        this.showDash = false;
        this.toggleBarY = true;
        this.chartData = {
            labels: ['Out', 'In'],
            datasets: [
                {
                    data: [72, 28],
                    backgroundColor: [
                        '#FBD110',
                        '#192161'
                    ],
                }
            ]
        };
        this.chartOptions = {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10
                }
            }
        };
        this.currentRate = null;
        this.test = 'test';
        this.allMMData = {};
        this.isYoy = true;
        this.isMom = true;
        this.finished = false;
        this.finishedWalk = false;
        // yData = {
        //   labels: [
        //     'Sales Volume Growth YoY',
        //     'Sales Transaction Count Growth YoY',
        //     'Spend Outside Geography',
        //     'Average Transaction Frequencey'
        //   ],
        //   datasets: [
        //     {
        //       label: '',
        //       data: [],
        //       backgroundColor: '#192161',
        //       borderColor: '#1E88E5',
        //     }
        //   ]
        // };
        this.yData = {
            labels: [
                'Sales Volume Growth YoY',
                'Sales Transaction Count Growth YoY',
                'Spend Outside Geography',
                'Average Transaction Frequencey'
            ],
            datasets: [
                {
                    label: '',
                    backgroundColor: '#192161',
                    borderColor: '#1E88E5',
                    data: [22, 33, 19, 50]
                },
            ]
        };
        this.mData = {
            labels: [
                'Sales Volume Growth MoM',
                'Sales Transaction Count Growth MoM',
                'Spend Outside Geography',
                'Average Transaction Frequencey'
            ],
            datasets: [
                {
                    label: '',
                    backgroundColor: '#192161',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81]
                }
            ]
        };
        // mData = {
        // labels: [
        //   'Sales Volume Growth YoY',
        //   'Sales Transaction Count Growth YoY',
        //   'Spend Outside Geography',
        //   'Average Transaction Frequencey'
        // ],
        //   datasets: [
        //     {
        //       label: '',
        //       data: [],
        //       backgroundColor: '#192161',
        //       borderColor: '#1E88E5'
        //     }
        //   ]
        // };
        this.options = {
            title: {
                display: false,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                display: false
            }
        };
        this.walk = {
            labels: [],
            datasets: [
                {
                    data: [88],
                    backgroundColor: [
                        '#192161',
                        '#CCC'
                    ]
                }
            ]
        };
        this.comData = false;
        this.walkOptions = {
            tooltips: {
                enabled: false
            }
        };
        this.toggleBar = function (value) {
            _this.toggleBarY = value;
            if (_this.toggleBarY) {
                _this.isYoy = true;
                _this.isMom = false;
                _this.setBatGraph();
            }
            else {
                _this.isYoy = false;
                _this.isMom = true;
                _this.setBatGraph();
            }
        };
        this.resetLoanEst = function () {
            _this.loanForm.reset();
            _this.currentRate = null;
        };
        this.submitSearch = function () {
            if (_this.searchForm.valid) {
                _this.getData(_this.searchForm.value.zip, _this.searchForm.value.business);
            }
        };
        this.getData = function (zip, term) {
            _this.mapApi.loadZipcodeGeometry(zip).subscribe(function (zipGeometry) {
                _this.map.setCenter(zipGeometry.location);
                _this.map.fitBounds(zipGeometry.bounds);
                _this.mapApi.loadPlaces(term).subscribe(function (places) {
                    _this.getPlaceData();
                    _this.setMarkers(places);
                    _this.heatMap(places);
                });
            });
        };
        this.setMarkers = function (results) {
            results.forEach(function (place) {
                var marker = new google.maps.Marker({
                    map: _this.map,
                    position: place.geometry.location,
                    title: place.name,
                    icon: {
                        url: '/assets/pin.svg',
                        anchor: new google.maps.Point(15, 15)
                    }
                });
                var infowindow = new google.maps.InfoWindow({
                    content: "<div id=\"content\">\n          <div id=\"siteNotice\"></div>\n          <h1 id=\"firstHeading\" class=\"popupHeading\">" + place.name + "</h1>\n          <div id=\"bodyContent\">\n            " + (place.rating != null ? "Rating: " + place.rating + "/5<br>" : "") + "\n            " + (place.price_level != null ? "$".repeat(place.price_level) : "") + "\n          </div>\n        </div>"
                });
                marker.addListener('click', function () {
                    if (_this.openInfoWindow)
                        _this.openInfoWindow.close();
                    _this.openInfoWindow = infowindow;
                    infowindow.open(_this.map, marker);
                });
            });
        };
        this.heatMap = function (data) {
            if (_this.heatmap)
                _this.heatmap.setMap(null);
            _this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: data.map(function (d) { return d.geometry.location; }),
                opacity: 0.5,
                radius: 0.02,
                dissipating: false,
                map: _this.map
            });
            var gradient = [
                "rgba(102, 255, 0, 0)",
                "rgba(102, 255, 0, 1)",
                "rgba(147, 255, 0, 1)",
                "rgba(193, 255, 0, 1)",
                "rgba(238, 255, 0, 1)",
                "rgba(244, 227, 0, 1)",
                "rgba(249, 198, 0, 1)",
                "#FFC200",
                "#FF7100"
            ];
            _this.heatmap.set('gradient', _this.heatmap.get('gradient') ? null : gradient);
        };
        this.toggleHeat = function () {
            _this.heatmap.setMap(_this.heatmap.getMap() ? null : _this.map);
        };
        this.getVisaData = function (zip) {
            _this.apiService.getMeasurement(zip).subscribe(function (response) {
                _this.visaData = response;
                // this.prepPieChart(this.visaData.spendOutsideGeography);
                console.log(response);
            });
        };
        this.toggleSales = function (value) {
            _this.salesYoY = value;
        };
        this.toggleTrans = function (value) {
            _this.transYoY = value;
        };
        this.getPlaceData = function () {
            _this.test = _this.mapApi.getTopPlaces(4);
            _this.changeRef.detectChanges();
        };
        // prepPieChart = (outpercent: number) => {
        //   const inpercent = 100 - outpercent;
        //   this.chartData = {
        //     labels: ['Out', 'In'],
        //     datasets: [
        //       {
        //         data: [outpercent, inpercent],
        //         backgroundColor: [
        //           '#192161',
        //           '#65cf64'
        //         ]
        //       }]
        //   };
        // prepPieChart = (outpercent: number) => {
        //   const inpercent = 100 - outpercent;
        //   this.chartData = {
        //     labels: ['A','B','C'],
        //         datasets: [
        //             {
        //                 data: [300, 50, 100],
        //                 backgroundColor: [
        //                     "#FF6384",
        //                     "#36A2EB",
        //                     "#FFCE56"
        //                 ],
        //                 hoverBackgroundColor: [
        //                     "#FF6384",
        //                     "#36A2EB",
        //                     "#FFCE56"
        //                 ]
        //             }]
        //         };
        //   }
        //     {
        //       labels: ['Out', 'In'],
        //       datasets: [
        //         {
        //           data: [20, 40],
        //           backgroundColor: [
        //             '#192161',
        //             '#65cf64'
        //           ]
        //         }]
        //     };
        //
        //
        //   this.chartOptions = {
        //     legend: {
        //       position: 'bottom',
        //       labels: {
        //         boxWidth: 10
        //       }
        //     }
        //   };
        // }
        this.toggleDash = function () {
            _this.showDash = !_this.showDash;
        };
        this.searchForm = this.fb.group({
            business: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            zip: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            radius: ['']
        });
        this.loanForm = this.fb.group({
            loanAmount: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            term: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data.zip && data.business) {
                console.log("if");
                _this.zip = data.zip;
                _this.getData(data.zip, data.business);
                _this.getVisaData(data.zip);
                _this.searchForm.patchValue(data);
            }
            else {
                console.log("else");
                _this.getData('30307', 'Sushi');
                _this.getVisaData('30307');
                // this.searchForm.patchValue(data);
                // if (data.zip && data.business) {
                //   this.getData(data.zip, data.business);
                //   this.getVisaData(data.zip);
                //   this.searchForm.patchValue(data);
                // }
                // else {
                //  this.router.navigate(['/']);
                // }
            }
        });
    }
    MapApiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('googleMap'), {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scaleControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
                // {
                //   featureType: 'poi.business',
                //   stylers: [{ visibility: 'off' }]
                // },
                // {
                //   featureType: 'transit',
                //   elementType: 'labels.icon',
                //   stylers: [{ visibility: 'off' }]
                // },
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                {
                    featureType: 'administrative.locality',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'geometry',
                    stylers: [{ color: '#263c3f' }]
                },
                {
                    featureType: 'poi.park',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#6b9a76' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        });
        this.mapApi.setMap(this.map);
        // Merchant Measurement Bar Graph
        this.apiService.getMeasurement('30044').subscribe(function (result) {
            _this.allMMData = result;
            _this.setBatGraph();
        });
        // Walkability Pie
        this.apiService.getWalkability(33.749249, -84.387314).subscribe(function (data) {
            var rate = data.score;
            _this.walk.datasets[0].data.push(rate);
            var total = 100 - rate;
            _this.walk.datasets[0].data.push(total);
            _this.finishedWalk = true;
            if (rate <= 25) {
                _this.walkGrade = 'Bad :(';
            }
            else if (rate >= 25 && rate <= 50) {
                _this.walkGrade = 'Poor';
            }
            else if (rate >= 51 && rate <= 75) {
                _this.walkGrade = 'Good';
            }
            else if (rate >= 75) {
                _this.walkGrade = 'Great!';
            }
        });
    };
    MapApiComponent.prototype.setBatGraph = function () {
        var _this = this;
        if (this.isYoy) {
            __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.forEach(this.allMMData, function (value, label) {
                var yoy = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'YoY');
                var other = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'y');
                if (yoy || other) {
                    _this.yData.datasets[0].data.push(value);
                }
                _this.finished = true;
            });
        }
        else if (this.isMom) {
            __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.forEach(this.allMMData, function (value, label) {
                var yoy = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'MoM');
                var other = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.endsWith(label, 'y');
                if (yoy || other) {
                    _this.mData.datasets[0].data.push(value);
                }
                _this.finished = true;
            });
        }
        this.changeRef.detectChanges();
    };
    MapApiComponent.prototype.onSubmitLoan = function () {
        var _this = this;
        this.apiService.getDepositRates(10000, this.loanForm.value.loanAmount, this.loanForm.value.term, this.zip).subscribe(function (rate) {
            _this.currentRate = rate;
            console.log(_this.currentRate);
        });
    };
    MapApiComponent.prototype.toggleBarYoY = function (value) {
        this.isYoy = value;
    };
    MapApiComponent.prototype.toggleBarMoM = function (value) {
        this.isMom = value;
    };
    return MapApiComponent;
}());
MapApiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-api',
        template: __webpack_require__("../../../../../src/app/map-api/map-api.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-api/map-api.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_gmaps_service__["a" /* GmapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_gmaps_service__["a" /* GmapsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _f || Object])
], MapApiComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=map-api.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-map/new-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-nav {\n    background: #192161;\n    font-family: 'Raleway', sans-serif;\n    border-bottom: 3px solid #FBD110;\n}\n\n.brand-text {\n    font-weight: bold;\n    padding-left:10px;\n}\n\n.input-group {\n    margin-right: 10px;\n}\n\n#googleMap {\n    width:100vw;\n    height: calc(100vh - 300px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-map/new-map.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark map-nav\">\n  <a class=\"navbar-brand\" href=\"/\">\n    <img src=\"/assets/map.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    <span class=\"brand-text\">Scout V1</span>\n  </a>\n  <form class=\"form-inline\" [formGroup]=\"searchForm\" novalidate (ngSubmit)=\"submitSearch()\">\n    <div class=\"input-group mb-2 mb-sm-0\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"business\" placeholder=\"Business Type\">\n    </div>\n    <div class=\"input-group mb-2 mb-sm-0\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"zip\" placeholder=\"Zip Code\">\n    </div>\n    <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Search</button>\n  </form>\n</nav>\n<div #map id=\"googleMap\"></div>\n<div class=\"map-metrics\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <div class=\"map-ouput\">\n          <h3>Sales Growth</h3>\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"salesYoY\" (click)=\"toggleSales(true)\">Over Year</button>\n            <button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"!salesYoY\" (click)=\"toggleSales(false)\">Over Month</button>\n          </div>\n          <div class=\"amount-output\">\n              <span *ngIf=\"!salesYoY\">{{visaData.salesVolumeGrowthMoM}}</span>\n              <span *ngIf=\"salesYoY\">{{visaData.salesVolumeGrowthYoY}}</span>%\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm\">\n          <div class=\"map-ouput\">\n              <h3>Sales Transactions Growth</h3>\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                  <button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"transYoY\" (click)=\"toggleTrans(true)\">Over Year</button>\n                  <button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"!transYoY\" (click)=\"toggleTrans(false)\">Over Month</button>\n              </div>\n              <div class=\"amount-output\">\n                  <span *ngIf=\"!transYoY\">{{visaData.salesTranCntGrowthMoM}}</span>\n                  <span *ngIf=\"transYoY\">{{visaData.salesTranCntGrowthYoY}}</span>%\n              </div>\n            </div>\n      </div>\n      <div class=\"col-sm\">\n        One of three columns\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-map/new-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gmaps_service__ = __webpack_require__("../../../../../src/app/services/gmaps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewMapComponent = (function () {
    function NewMapComponent(mapApi, apiService, route, fb) {
        var _this = this;
        this.mapApi = mapApi;
        this.apiService = apiService;
        this.route = route;
        this.fb = fb;
        this.visaData = null;
        this.salesYoY = true;
        this.transYoY = true;
        this.getData = function () {
            var service = new google.maps.places.PlacesService(_this.map);
            // this.mapApi.getZipInfo('30307').subscribe(
            //   (response) => {
            //     this.map.setCenter(response.geometry.location);
            //     this.map.fitBounds(response.geometry.bounds);
            //     service.nearbySearch({
            //       location: response.geometry.location,
            //       radius: 2500,
            //       keyword: 'Chinese',
            //       type: ['establishment']
            //     }, (data) => {
            //       this.setMarkers(data);
            //       this.heatMap(data);
            //     });
            //   });
        };
        this.setupLayers = function () {
            _this.map = new google.maps.Map(document.getElementById('googleMap'), {
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            _this.heatmap = new google.maps.visualization.HeatmapLayer({
                opacity: 0.2,
                radius: 1,
                dissipating: true,
                map: null
            });
        };
        this.setMarkers = function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.createMarkers(results[i]);
            }
        };
        this.createMarkers = function (place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: _this.map,
                position: place.geometry.location
            });
        };
        this.heatMap = function (data) {
            var heatmapData = [];
            for (var i = 0; i < data.length; i++) {
                heatmapData.push(data[i].geometry.location);
            }
            _this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
                opacity: 0.2,
                radius: 1,
                dissipating: false,
                map: _this.map
            });
        };
        this.getVisaData = function () {
            _this.apiService.getMeasurement('30307').subscribe(function (response) {
                _this.visaData = response;
            });
        };
        this.toggleSales = function (value) {
            _this.salesYoY = !_this.salesYoY;
        };
        this.toggleTrans = function (value) {
            _this.transYoY = !_this.transYoY;
        };
        this.searchForm = this.fb.group({
            business: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            zip: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            radius: ['']
        });
    }
    NewMapComponent.prototype.ngOnInit = function () {
        this.map = new google.maps.Map(document.getElementById('googleMap'), { mapTypeId: google.maps.MapTypeId.ROADMAP });
        this.getData();
        this.getVisaData();
    };
    return NewMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], NewMapComponent.prototype, "mapel", void 0);
NewMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-api',
        template: __webpack_require__("../../../../../src/app/new-map/new-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-map/new-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_gmaps_service__["a" /* GmapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gmaps_service__["a" /* GmapsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _e || Object])
], NewMapComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=new-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/tofixed.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TofixedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TofixedPipe = (function () {
    function TofixedPipe() {
    }
    TofixedPipe.prototype.transform = function (value, args) {
        return this.roundTo(value, 2);
    };
    TofixedPipe.prototype.roundTo = function (n, digits) {
        var negative = false;
        if (digits === undefined) {
            digits = 0;
        }
        if (n < 0) {
            negative = true;
            n = n * -1;
        }
        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        n = (Math.round(n) / multiplicator).toFixed(2);
        if (negative) {
            n = (n * -1).toFixed(2);
        }
        return n;
    };
    return TofixedPipe;
}());
TofixedPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'tofixed'
    })
], TofixedPipe);

//# sourceMappingURL=tofixed.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getMeasurement = function (zipCode) {
        return this.http.get("/api/visa/merchant-measurement?zip=" + zipCode);
    };
    // getMeasurement(zipCode: string) {
    // 	return {
    // 		salesVolumeGrowthMoM: +(Math.random() * 100 - 50).toFixed(4),
    // 		salesTranCntGrowthMoM: +(Math.random() * 100 - 50).toFixed(4),
    // 		salesVolumeGrowthYoY: +(Math.random() * 100 - 50).toFixed(4),
    // 		salesTranCntGrowthYoY: +(Math.random() * 100 - 50).toFixed(4),
    // 		spendOutsideGeography: +(Math.random() * 30).toFixed(2),
    // 		avgTransactionFrequencey: +(Math.random() * 10).toFixed(2)
    // 	}
    //
    // }
    ApiService.prototype.getWalkability = function (lat, lon) {
        return this.http.get("/api/walkscore?lat=" + lat + "&long=" + lon);
    };
    ApiService.prototype.getDepositRates = function (balance, loanAmount, term, zipcode) {
        return this.http.get("/api/usbank/deposit-rates?balance=" + balance + "&loanAmount=" + loanAmount + "&term=" + term + "&zipcode=" + zipcode);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/gmaps.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GmapsService = (function () {
    function GmapsService(http) {
        var _this = this;
        this.http = http;
        this.apikey = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].gapikey;
        this.addKey = function (query) {
            return "https://maps.googleapis.com/maps/api" + query + "&key=" + _this.apikey;
        };
        this.setMap = function (map) {
            _this.map = map;
            _this.service = new google.maps.places.PlacesService(_this.map);
        };
        this.loadZipcodeGeometry = function (zip) {
            var geocoder = new google.maps.Geocoder();
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
                geocoder.geocode({ address: zip }, function (geocoderResult, status) {
                    _this.zipcodeGeometry = geocoderResult[0].geometry;
                    _this.zipcodeName = geocoderResult[0].formatted_address;
                    observer.next(_this.zipcodeGeometry);
                });
            });
        };
        this.loadPlaces = function (searchTerm) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
                if (_this.zipcodeGeometry == null)
                    throw new Error("zipcodeGeometry is null. call loadZipcodeGeometry");
                if (_this.map == null)
                    throw new Error("map is null. call setMap");
                _this.placesInfo = [];
                console.log("searchTerm", searchTerm);
                _this.service.nearbySearch({
                    location: _this.zipcodeGeometry.location,
                    radius: 2500,
                    keyword: searchTerm,
                    type: ['restaurant']
                }, function (results, status, pagination) {
                    _this.placesInfo = _this.placesInfo.concat(results);
                    if (pagination.hasNextPage && _this.placesInfo.length < 40) {
                        console.log("new page", _this.placesInfo);
                        pagination.nextPage();
                    }
                    else {
                        console.log("done", _this.placesInfo);
                        observer.next(_this.placesInfo);
                    }
                });
            });
        };
    }
    GmapsService.prototype.getTopPlaces = function (num) {
        if (num === void 0) { num = 3; }
        if (this.placesInfo == null)
            throw new Error("placesInfo is null. call loadPlaces");
        var avg = this.placesInfo.reduce(function (total, place) { return place.rating != null ? total + place.rating : total; }, 0) / this.placesInfo.length;
        return {
            total: this.placesInfo.length,
            places: this.placesInfo.slice(0, num),
            averageRating: this.roundTo(avg, 2)
        };
    };
    GmapsService.prototype.roundTo = function (n, digits) {
        var negative = false;
        if (digits === undefined) {
            digits = 0;
        }
        if (n < 0) {
            negative = true;
            n = n * -1;
        }
        var multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        n = (Math.round(n) / multiplicator).toFixed(2);
        if (negative) {
            n = (n * -1).toFixed(2);
        }
        return n;
    };
    return GmapsService;
}());
GmapsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], GmapsService);

var _a;
//# sourceMappingURL=gmaps.service.js.map

/***/ }),

/***/ "../../../../../src/assets/landing-map2.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "landing-map2.34a3449430bde3195c78.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    gapikey: 'AIzaSyDitlcYllb5lz5IHStWxVYjI0yQLQnrRYg'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map