(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_faq_product_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-faq/product-faq.component */ "./src/app/product-faq/product-faq.component.ts");
/* harmony import */ var _bread_bread_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bread/bread.component */ "./src/app/bread/bread.component.ts");
/* harmony import */ var _bread_inner_bread_inner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bread-inner/bread-inner.component */ "./src/app/bread-inner/bread-inner.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_inner_news_inner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news-inner/news-inner.component */ "./src/app/news-inner/news-inner.component.ts");
/* harmony import */ var _wellness_article_wellness_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wellness-article/wellness-article.component */ "./src/app/wellness-article/wellness-article.component.ts");
/* harmony import */ var _wellness_calendar_wellness_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wellness-calendar/wellness-calendar.component */ "./src/app/wellness-calendar/wellness-calendar.component.ts");
/* harmony import */ var _wellness_event_wellness_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wellness-event/wellness-event.component */ "./src/app/wellness-event/wellness-event.component.ts");
/* harmony import */ var _wellness_team_wellness_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wellness-team/wellness-team.component */ "./src/app/wellness-team/wellness-team.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _plant_plant_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plant/plant.component */ "./src/app/plant/plant.component.ts");



















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] },
    { path: 'product-faq', component: _product_faq_product_faq_component__WEBPACK_IMPORTED_MODULE_4__["ProductFaqComponent"] },
    { path: 'bread', component: _bread_bread_component__WEBPACK_IMPORTED_MODULE_5__["BreadComponent"] },
    { path: 'bread-inner', component: _bread_inner_bread_inner_component__WEBPACK_IMPORTED_MODULE_6__["BreadInnerComponent"] },
    { path: 'story', component: _story_story_component__WEBPACK_IMPORTED_MODULE_7__["StoryComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"] },
    { path: 'news-inner', component: _news_inner_news_inner_component__WEBPACK_IMPORTED_MODULE_9__["NewsInnerComponent"] },
    { path: 'wellness-article', component: _wellness_article_wellness_article_component__WEBPACK_IMPORTED_MODULE_10__["WellnessArticleComponent"] },
    { path: 'wellness-calendar', component: _wellness_calendar_wellness_calendar_component__WEBPACK_IMPORTED_MODULE_11__["WellnessCalendarComponent"] },
    { path: 'wellness-event', component: _wellness_event_wellness_event_component__WEBPACK_IMPORTED_MODULE_12__["WellnessEventComponent"] },
    { path: 'wellness-team', component: _wellness_team_wellness_team_component__WEBPACK_IMPORTED_MODULE_13__["WellnessTeamComponent"] },
    { path: 'careers', component: _careers_careers_component__WEBPACK_IMPORTED_MODULE_14__["CareersComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"] },
    { path: 'plant', component: _plant_plant_component__WEBPACK_IMPORTED_MODULE_16__["PlantComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'portfolio-gardenia-angular';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_faq_product_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-faq/product-faq.component */ "./src/app/product-faq/product-faq.component.ts");
/* harmony import */ var _bread_bread_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bread/bread.component */ "./src/app/bread/bread.component.ts");
/* harmony import */ var _bread_inner_bread_inner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bread-inner/bread-inner.component */ "./src/app/bread-inner/bread-inner.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_inner_news_inner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news-inner/news-inner.component */ "./src/app/news-inner/news-inner.component.ts");
/* harmony import */ var _wellness_article_wellness_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wellness-article/wellness-article.component */ "./src/app/wellness-article/wellness-article.component.ts");
/* harmony import */ var _wellness_calendar_wellness_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wellness-calendar/wellness-calendar.component */ "./src/app/wellness-calendar/wellness-calendar.component.ts");
/* harmony import */ var _wellness_event_wellness_event_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./wellness-event/wellness-event.component */ "./src/app/wellness-event/wellness-event.component.ts");
/* harmony import */ var _wellness_team_wellness_team_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wellness-team/wellness-team.component */ "./src/app/wellness-team/wellness-team.component.ts");
/* harmony import */ var _careers_careers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./careers/careers.component */ "./src/app/careers/careers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _plant_plant_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./plant/plant.component */ "./src/app/plant/plant.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


























class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
        _product_faq_product_faq_component__WEBPACK_IMPORTED_MODULE_9__["ProductFaqComponent"],
        _bread_bread_component__WEBPACK_IMPORTED_MODULE_10__["BreadComponent"],
        _bread_inner_bread_inner_component__WEBPACK_IMPORTED_MODULE_11__["BreadInnerComponent"],
        _story_story_component__WEBPACK_IMPORTED_MODULE_12__["StoryComponent"],
        _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"],
        _news_inner_news_inner_component__WEBPACK_IMPORTED_MODULE_14__["NewsInnerComponent"],
        _wellness_article_wellness_article_component__WEBPACK_IMPORTED_MODULE_15__["WellnessArticleComponent"],
        _wellness_calendar_wellness_calendar_component__WEBPACK_IMPORTED_MODULE_16__["WellnessCalendarComponent"],
        _wellness_event_wellness_event_component__WEBPACK_IMPORTED_MODULE_17__["WellnessEventComponent"],
        _wellness_team_wellness_team_component__WEBPACK_IMPORTED_MODULE_18__["WellnessTeamComponent"],
        _careers_careers_component__WEBPACK_IMPORTED_MODULE_19__["CareersComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
        _plant_plant_component__WEBPACK_IMPORTED_MODULE_21__["PlantComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"],
                    _product_faq_product_faq_component__WEBPACK_IMPORTED_MODULE_9__["ProductFaqComponent"],
                    _bread_bread_component__WEBPACK_IMPORTED_MODULE_10__["BreadComponent"],
                    _bread_inner_bread_inner_component__WEBPACK_IMPORTED_MODULE_11__["BreadInnerComponent"],
                    _story_story_component__WEBPACK_IMPORTED_MODULE_12__["StoryComponent"],
                    _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"],
                    _news_inner_news_inner_component__WEBPACK_IMPORTED_MODULE_14__["NewsInnerComponent"],
                    _wellness_article_wellness_article_component__WEBPACK_IMPORTED_MODULE_15__["WellnessArticleComponent"],
                    _wellness_calendar_wellness_calendar_component__WEBPACK_IMPORTED_MODULE_16__["WellnessCalendarComponent"],
                    _wellness_event_wellness_event_component__WEBPACK_IMPORTED_MODULE_17__["WellnessEventComponent"],
                    _wellness_team_wellness_team_component__WEBPACK_IMPORTED_MODULE_18__["WellnessTeamComponent"],
                    _careers_careers_component__WEBPACK_IMPORTED_MODULE_19__["CareersComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                    _plant_plant_component__WEBPACK_IMPORTED_MODULE_21__["PlantComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production })
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bread-inner/bread-inner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bread-inner/bread-inner.component.ts ***!
  \******************************************************/
/*! exports provided: BreadInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadInnerComponent", function() { return BreadInnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class BreadInnerComponent {
    constructor() { }
    ngOnInit() {
        // tab nav slider
        // products-tab
        $('.products-page').find('.tab').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.tab-cont').find('.btn-tab-left'),
            nextArrow: $('.tab-cont').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 6
                    }
                }
            ]
        });
        // bread-tab
        $('.bread-page').find('.tab').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.tab-cont').find('.btn-tab-left'),
            nextArrow: $('.tab-cont').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
    }
}
BreadInnerComponent.??fac = function BreadInnerComponent_Factory(t) { return new (t || BreadInnerComponent)(); };
BreadInnerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BreadInnerComponent, selectors: [["app-bread-inner"]], decls: 86, vars: 0, consts: [[1, "mainwrap", "bread-inner-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "recipe-guide"], [1, "recipe-details"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-inner-img-1.jpg", "alt", ""], [1, "recipe-desc"], [1, "recipe-name"], [1, "btn-wrap"], [1, "share-wrap"], ["href", "javascript:void(0)", 1, "fb-share"], ["href", "javascript:void(0)", 1, "twitter-share"], ["href", "javascript:void(0)", 1, "btn-print"], [1, "recipe-need"], [1, "ingredients"], [1, "procedure"], ["routerLink", "/bread", 1, "btn-previous"], [1, "share-cont"], [1, "social-share"]], template: function BreadInnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Create Delicious");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Bread Treats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Gardenia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Share this recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "6 spces Gardenia Classic White Bread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "2 spces Ham");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "2 thinly spced Luncheon Meat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "3 pcs Eggs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "1/3 cup Milk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "1/8 teaspoon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Salt, Butter, Mustard & Mayonnaise (if desired)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Step 1: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " For each sandwich, use 3 slices of Gardenia Classic White Bread. Butter one side of bread first then cover with a slice of ham and a slice chicken. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Step 2: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Butter both sides of the second slice of bread and spread with a little mustard or other dressing, if desired. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Step 3: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Place on top of chicken or ham slice and top with 2 thin slices of cheese. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Step 4: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Butter third slice for top; press sandwich lightly and trim crusts. Cut into halves diagonally and secure with toothpicks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Step 5: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Beat eggs with milk and salt. Dip sandwich halves into the egg mixture and fry on a hot skillet or griddle in butter or margarine. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Step 6: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " Brown on all sides, adding more butter when necessary. Remove toothpick before serving. Cut into triangles, to serve 4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Share this recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BreadInnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bread-inner',
                templateUrl: './bread-inner.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/bread/bread.component.ts":
/*!******************************************!*\
  !*** ./src/app/bread/bread.component.ts ***!
  \******************************************/
/*! exports provided: BreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadComponent", function() { return BreadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class BreadComponent {
    constructor() { }
    ngOnInit() {
        // bread treats masonry
        function masonry_load() {
            var $grid = $('.bread-treats').masonry({
                itemSelector: '.recipe-wrap',
                columnWidth: '.recipe-wrap',
                gutter: 10
            });
            var $grid = $('.bread-treats').imagesLoaded(function () {
                // init Masonry after all images have loaded
                $grid.masonry({
                    itemSelector: '.recipe-wrap',
                    columnWidth: '.recipe-wrap',
                    gutter: 10
                });
            });
        }
        enquire.register("screen and (min-width: 700px)", {
            setup: function () {
                // Load in content via AJAX (just the once)
            },
            match: function () {
                masonry_load();
            },
            unmatch: function () {
                $('.bread-treats').masonry('destroy');
            }
        });
        // tab nav slider
        // products-tab
        $('.products-page').find('.tab').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.tab-cont').find('.btn-tab-left'),
            nextArrow: $('.tab-cont').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 6
                    }
                }
            ]
        });
        // bread-tab
        $('.bread-page').find('.tab').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.tab-cont').find('.btn-tab-left'),
            nextArrow: $('.tab-cont').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
    }
}
BreadComponent.??fac = function BreadComponent_Factory(t) { return new (t || BreadComponent)(); };
BreadComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BreadComponent, selectors: [["app-bread"]], decls: 153, vars: 0, consts: [[1, "mainwrap", "bread-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "tab-cont"], [1, "btn-tab-left-wrap"], ["href", "javascript:void(0)", 1, "btn-tab-left"], [1, "btn-tab-right-wrap"], ["href", "javascript:void(0)", 1, "btn-tab-right"], [1, "tab"], [1, "tab-wrap", "active"], [1, "cat-wrap"], ["href", "javascript:void(0)", 1, "cat"], [1, "tab-wrap"], [1, "bread-search"], [1, "search-label"], [1, "search-bg"], ["action", ""], ["type", "text", "placeholder", "CLICK HERE TO SEARCH"], [1, "bread-search-btn"], [1, "bread-treats"], [1, "recipe-wrap"], ["routerLink", "/bread-inner", 1, "recipe"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/recipe-img-1.jpg", "alt", ""], [1, "details"], [1, "title"], [1, "author"], [1, "recipe-share"], [1, "share-label"], [1, "share-info"], [1, "red"]], template: function BreadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Create Delicious");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Bread Treats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Appetizers & Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Dessert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Looking for a recipe?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nam, magni voluptas tenetur odio laborum? Architecto cupiditate quae sequi in nulla optio eligendi laudantium, saepe eveniet molestiae harum dolorem tempora. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore maiores ut saepe eligendi rerum incidunt eum qui consectetur nesciunt natus adipisci esse ullam odit, voluptates quae cumque, voluptas nulla repudiandae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Gardenia Monte Cristo Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas animi soluta ut porro repellendus nihil pariatur beatae et suscipit modi itaque deserunt adipisci obcaecati, illo nesciunt necessitatibus natus fugit nam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Chef Jeremy Favia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Share Your Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " Have a delicious recipe using Gardenia? Share them with us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " We'll publish your recipe right here and give you credit for your tasty bread treat! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, " Email your recipe to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "recipes@gardenia.com.ph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " *Recipes will be published after testing and approval by the Gardenia nutritionists ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BreadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bread',
                templateUrl: './bread.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/careers/careers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/careers/careers.component.ts ***!
  \**********************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CareersComponent {
    constructor() { }
    ngOnInit() {
    }
}
CareersComponent.??fac = function CareersComponent_Factory(t) { return new (t || CareersComponent)(); };
CareersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CareersComponent, selectors: [["app-careers"]], decls: 95, vars: 0, consts: [[1, "mainwrap", "careers-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "careers-cont"], [1, "careers"], [1, "career-img"], [1, "img-large"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/careers-img-1.jpg", "alt", ""], [1, "img-small-wrap"], [1, "img-small"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/careers-img-2.jpg", "alt", ""], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/careers-img-3.jpg", "alt", ""], [1, "apply-wrap"], [1, "apply"], ["href", "javascript:void(0)"]], template: function CareersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Work with Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Together");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Gardenia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Apply Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "And Change the Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Job Title 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Job Title 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Job Title 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Job Title 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Job Title 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Job Title 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Job Title 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Job Title 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Job Title 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Job Title 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Job Title 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Job Title 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Job Title 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Job Title 14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Job Title 15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Job Title 16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Job Title 17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Job Title 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Job Title 19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Job Title 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CareersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-careers',
                templateUrl: './careers.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 316, vars: 0, consts: [[1, "mainwrap", "contact-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "contact-wrap"], [1, "map"], ["id", "loc1", "src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.372681772647!2d121.07794051483651!3d14.289765890001027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d82090ad7809%3A0x30fa696ef00a4a56!2sGardenia%2C+Star+Ave%2C+Bi%C3%B1an%2C+Laguna!5e0!3m2!1sen!2sph!4v1482227329187", "height", "450", "frameborder", "0", "allowfullscreen", "", 1, "mapImg", "active", 2, "border", "0"], ["id", "loc2", "src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.381210375849!2d123.91093391479735!3d10.39126669258359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a269f854abf3%3A0x5d037092f23665a1!2sGardenia+St%2C+Cebu+City%2C+Cebu!5e0!3m2!1sen!2sph!4v1482227551926", "height", "450", "frameborder", "0", "allowfullscreen", "", 1, "mapImg", 2, "border", "0"], [1, "details"], [1, "info-wrap"], [1, "office"], ["data-loc", "loc1", "href", "javascript:void(0)", 1, "location", "loc-1", "active"], ["data-loc", "loc2", "href", "javascript:void(0)", 1, "location", "loc-2"], [1, "callus"], [1, "call", "cont-1", "phone-contact"], [1, "call", "cont-2", "mobile-contact"], [1, "call", "cont-2", "fax-contact"], [1, "loc-img"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/loc-img-1.jpg", "alt", ""], [1, "cont-cat"], [1, "sched-label"], [1, "confirm"], [1, "bold"], [1, "drop-cat"], [1, "drop-label"], [1, "select-wrap"], ["selected", "selected", "disabled", "disabled", "value", ""], ["value", "form-1"], ["value", "form-2"], ["value", "form-3"], ["value", "form-4"], [1, "form", "form-1"], ["action", ""], [1, "form-part", "part-1"], [1, "file-wrap"], [1, "input-label"], [1, "attach-file"], ["type", "file", 1, "attachment"], [1, "attach-button"], [1, "attach-name"], [1, "input-wrap", "dateonly"], [1, "date-cont"], ["type", "text", "placeholder", "eg. 11/28/2016", "data-field", "date", "readonly", ""], [1, "input-wrap", "timeonly"], [1, "time-cont"], [1, "time-wrap", "start"], ["type", "text", "placeholder", "eg. 07:00 AM", "data-field", "time", "readonly", ""], [1, "time-wrap", "end"], ["type", "text", "placeholder", "eg. 09:00 PM", "data-field", "time", "readonly", ""], [1, "textarea-wrap"], ["placeholder", "Tell us about your event or why you want us to sponsor?"], [1, "form-part", "part-2"], [1, "drop-wrap"], ["selected", "selected", "value", ""], ["value", ""], [1, "input-wrap"], ["type", "text", "placeholder", "Your Last Name"], ["type", "text", "placeholder", "Your First Name"], ["type", "email", "placeholder", "What's your email?"], ["type", "tel", "placeholder", "+63-XXXXXXXXXX"], [1, "note"], [1, "note-title"], [1, "btn-main"], [1, "form", "form-2"], [1, "group-wrap"], ["type", "text"], [1, "number-wrap", "last"], ["type", "number"], ["placeholder", "Tell us about the details of your inquiry?"], [1, "form", "form-3"], ["placeholder", "Tell us about your inquiry?"], [1, "form", "form-4"], ["placeholder", "Tell us about your proposal?"], ["type", "text", "placeholder", "Your company"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "How to Find Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "iframe", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Our Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Gardenia Centre, Star Avenue, Laguna International Industrial Park (LIIP),Mamplasan, Binan, Laguna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " (Cebu Plant) Gardenia Lapu-Lapu Centre, M.L. Quezon National Highway, Lapu-Lapu City, Cebu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Call Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Trunkline:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " (02) 889-8889 to 90 | (02) 845-0971 to 72 (02) 832-3100 to 01 | (049) 539-1136 to 40 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Mobile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " +639209114606 (Smart) | +639178942341 (Globe) +639228761618 (Sun) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Fax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " (632) 809-6728 / (049) 539-1148 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Contact Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Please choose a category and fill up the following fields below and click on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "CONFIRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " button at the bottom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Please complete all fields.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Choose A Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Choose here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Event Sponsorship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Product Concerns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Sales Inquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Product / Service Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Event Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Upload your letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "No File Chosen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Date of the event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Time of the event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Event Brief");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "textarea", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Ms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Telephone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, " Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Products Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Type of Bread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Best Before Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Color of G-Lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Batch No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Date of Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Details of your Inquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](172, "textarea", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Ms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](187, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](191, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Telephone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Inquiry on assetsributorship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Location of Store / Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](211, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Name of Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](215, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Date of Establishment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](220, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Concern on Salesmen / Delivery / Stocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Store Name / Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](227, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Name of Salesman / Truck No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "General Inquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](235, "textarea", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "Ms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](250, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](254, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](258, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "Telephone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](262, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Product / Service Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](272, "Proposal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](274, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "No File Chosen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "Proposal Brief");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](282, "textarea", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "Ms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "Family Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](297, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](301, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](303, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](304, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](305, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](307, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](308, "Telephone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](309, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](312, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](313, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 77, vars: 0, consts: [[1, "upper-footer"], [1, "sitemap"], [1, "sitemap-title"], ["href", "javascript:void(0)"], [1, "contact"], [1, "contact-title"], [1, "navigation"], [1, "phone"], [1, "mail"], [1, "about"], [1, "about-title"], [1, "footer-logo"], [1, "logo-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/footer-gardenia.png", "alt", ""], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/footer-haccp.png", "alt", ""], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/footer-iso.png", "alt", ""], [1, "lower-footer"], [1, "copyright"], [1, "jingle"], ["id", "jingle-audio"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/audio/gardenia.mp3", "type", "audio/mp3"], ["href", "javascript:void(0)", 1, "jingle-icon"], [1, "social"], ["href", "", 1, "facebook"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/facebook.svg", "alt", ""], ["href", "", 1, "twitter"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/twitter.svg", "alt", ""], ["href", "", 1, "instagram"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/instagram.svg", "alt", ""], ["target", "_blank", "href", "https://www.youtube.com/user/gardeniaph", 1, "youtube"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/youtube.svg", "alt", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Sitemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Bread Treats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Gardenia Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Newsroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Wellness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Plant Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Contact Gardenia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " (Laguna Plant) Gardenia cebtre, Star Avenue, Laguna International Industrial Park (LIIP), Mamplasan, Binan, Laguna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " (Cebu Plant) Gardenia Lapu-Lapu Centre, M.L. Quezon Naional Highway, Lapu-Lapu City, Cebu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " (02) 889-8889 to 90 / (02) 845-0971 (02) 832-3100 to 01 / (049) 539-1136 to 40 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "customerservice@gardenia.com.ph");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "About Garena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " We are the leading and fastest growing bread in the Philippines. We take pride in our world-class standards as part of our commitment to provide excellence in delivering quality breads that will satisfy every Filipino household. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "\u00A9 Copyright Gardenia. All right reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "audio", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "source", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Turn Music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            $(".category").on('mouseover', function () {
                $('.clone-here').empty();
                $(this).find('.cat-content').clone().appendTo(".clone-here");
            });
            $(document).find('.clone-here').on('mouseover', 'a', function () {
                var match = this.rel;
                $(this).closest('.cat-links').siblings('.img-wrap').find('img').removeClass('active');
                $(this).closest('.cat-links').siblings('.img-wrap').find('.img-' + match).addClass('active');
            });
            var html5_player = document.getElementById('jingle-audio');
            function html5_player_init() {
                html5_player.controls = false;
            }
            html5_player_init();
            $('.jingle-icon').click(function () {
                if ($('.jingle-icon').hasClass('active')) {
                    $('.jingle-icon').removeClass('active');
                    html5_player.pause();
                }
                else {
                    $('.jingle-icon').addClass('active');
                    html5_player.play();
                }
            });
        });
        // mobile nav js
        $('.menu-icon').click(function () {
            $('header').find('> ul').animate({
                'height': 'toggle'
            }, 300);
        });
        enquire.register("screen and (min-width: 1000px)", {
            setup: function () {
                // Load in content via AJAX (just the once)
            },
            match: function () {
                $('header').find('ul').css({ 'display': '' });
            },
            unmatch: function () {
            }
        });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 232, vars: 0, consts: [[1, "mobile-menu"], ["routerLink", "/", 1, "mobile-logo"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/logo.png", "alt", ""], ["href", "javascript:void(0)", 1, "menu-icon"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/menu-icon.svg", "alt", ""], [1, "jingle"], ["id", "jingle-audio"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/audio/gardenia.mp3", "type", "audio/mp3"], ["href", "javascript:void(0)", 1, "jingle-icon"], ["routerLink", "/product", 1, "products-icon"], [1, "drop"], [1, "wrap"], [1, "category"], ["routerLink", "/product", 1, "cat-type"], [1, "cat-content"], [1, "cat-links"], ["rel", "1", "routerLink", "/product"], ["rel", "2", "routerLink", "/product"], ["rel", "3", "routerLink", "/product"], ["rel", "4", "routerLink", "/product"], ["rel", "5", "routerLink", "/product"], ["rel", "6", "routerLink", "/product"], ["rel", "7", "routerLink", "/product"], ["rel", "8", "routerLink", "/product"], ["rel", "9", "routerLink", "/product"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/whitebread.jpg", 1, "active", "img-1"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wheatbread.jpg", 1, "img-2"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/blackforest.jpg", 1, "img-3"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/pandesal.jpg", 1, "img-4"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/creamrollsmuffins.jpg", 1, "img-5"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/butteredtoast.jpg", 1, "img-6"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/neubake.jpg", 1, "img-7"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/butteredtoast.jpg", 1, "img-8"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/neubake.jpg", 1, "img-9"], ["routerLink", "/product-faq", 1, "cat-type"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/whitebread.jpg", 1, "active"], [1, "clone-here"], ["routerLink", "/bread", 1, "bread-treats-icon"], ["routerLink", "/bread", 1, "cat-type"], ["rel", "1", "routerLink", "/bread"], ["rel", "2", "routerLink", "/bread"], ["rel", "3", "routerLink", "/bread"], ["rel", "4", "routerLink", "/bread"], ["rel", "5", "routerLink", "/bread"], ["rel", "6", "routerLink", "/bread"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-hover-1.jpg", 1, "img-1", "active"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-hover-1.jpg", 1, "img-2"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-hover-1.jpg", 1, "img-3"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-hover-1.jpg", 1, "img-4"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-hover-1.jpg", 1, "img-5"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-hover-1.jpg", 1, "img-6"], ["routerLink", "/story", 1, "story-icon"], ["routerLink", "/story", 1, "cat-type"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/story-hover-1.jpg", 1, "active"], ["routerLink", "/news", 1, "news-icon"], ["routerLink", "/news", 1, "cat-type"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/news-hover-1.jpg", 1, "active"], [1, "logo"], ["routerLink", "/"], [1, "logo-wrap"], ["href", "javascript:void(0)", 1, "wellness-icon"], ["routerLink", "/wellness-team", 1, "cat-type"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-hover-1.jpg", 1, "active"], ["routerLink", "/wellness-article", 1, "cat-type"], ["routerLink", "/wellness-gallery", 1, "cat-type"], ["routerLink", "/wellness-event", 1, "cat-type"], ["routerLink", "/careers", 1, "careers-icon"], ["routerLink", "/contact", 1, "contactus-icon"], [1, "plant-list"], ["routerLink", "/plant", 1, "plant-icon"], [1, "search"], ["href", "javascript:void(0)"], [1, "search-form"], ["action", ""], [1, "input-wrap"], ["type", "text", "placeholder", "Type a keyword here..."], [1, "dropdown-wrap"], ["value", ""], [1, "btn-search"], ["href", "javascript:void(0)", 1, "btn-search-close"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "audio", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "source", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "White Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Health Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Flavored Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Pandesal & Buns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Toasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "NeuBake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "NeuBake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "NeuBake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Product FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Bread Treats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Product/Variant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "White Bread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Wheat Bread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Flavored Bread");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "NeuBake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Meal Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Appetizers & Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Breakfast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Lunch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Dessert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Sweet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Savory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "Gardenia Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Milestones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Newsroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Product Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "CSR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](156, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Event Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Press Release");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](173, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "Wellness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Wellness Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](184, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Wellness Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Wellness Program Galleries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Wellness Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](202, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](203, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "li", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Plant Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "li", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "___");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "form", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](220, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
        // index slider
        $('.index-slick').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });
        // bread slider
        $('.bread-slick').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            centerMode: true,
            infinite: true,
            prevArrow: $('.bread-slider').find('.bread-back-btn'),
            nextArrow: $('.bread-slider').find('.bread-next-btn'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
        // article slider
        $('.article-slick').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.article-slider').find('.btn-tab-left'),
            nextArrow: $('.article-slider').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 186, vars: 0, consts: [[1, "mainwrap", "index-page"], [1, "index-slick"], [1, "slider-wrap"], ["href", "javascript:void(0)", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/index-slider-1.jpg')"], [1, "caption"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/index-slider-1.jpg", "alt", ""], ["href", "javascript:void(0)", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/index-slider-2.jpg')"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/index-slider-2.jpg", "alt", ""], [1, "bread-slider"], [1, "bread-slider-wrap"], ["href", "javascript:void(0)", 1, "bread-back-btn"], ["href", "javascript:void(0)", 1, "bread-next-btn"], [1, "bread-slick"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-slider-1.png", "alt", ""], [1, "label"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-slider-2.png", "alt", ""], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/bread-slider-3.png", "alt", ""], ["href", "javascript:void(0)", 1, "btn-main"], [1, "video", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/video-bg-1.jpg')"], [1, "info"], [1, "video-cont"], [1, "video-wrap"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/TdE55ZnxsS0?showinfo=0", "frameborder", "0", "allowfullscreen", ""], [1, "tvc"], [1, "tvc-video"], [1, "recipe-banner"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/recipe-banner.jpg", "alt", ""], ["title", "View Recipes", "href", "/recipes"], [1, "article-slider"], [1, "article-slider-wrap"], ["href", "javascript:void(0)", 1, "btn-tab-left"], ["href", "javascript:void(0)", 1, "btn-tab-right"], [1, "article-slick"], ["href", "google.com", 1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/article-slider-1.jpg", "alt", ""], [1, "title-wrap"], [1, "article-title"], [1, "hover"], [1, "hover-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/article-slider-2.jpg", "alt", ""], [1, "contact"], [1, "form"], ["action", ""], [1, "input-wrap"], ["type", "text", "placeholder", "What's your name?"], ["type", "email", "placeholder", "What's your email?"], [1, "textarea-wrap"], ["cols", "30", "rows", "10", "placeholder", "Send us a comment here..."], [1, "btn-main"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Experience Delicious!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Your satisfaction comes first, that\u2019s why we give you our very best from the finest ingredients to the highest manufacturing standards every step of the way to make Gardenia Breads a truly delicious experience that goes beyond good taste. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Experience Delicious!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Your satisfaction comes first, that\u2019s why we give you our very best from the finest ingredients to the highest manufacturing standards every step of the way to make Gardenia Breads a truly delicious experience that goes beyond good taste. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Delicious in Many Ways.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Fun Bun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Black Forest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Fun Bun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Black Forest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "View more products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Witness Gardenia's awesome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "way of making ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "World-class breads...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Smell the freshly baked goodness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Hear the sounds of baking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Taste the deliciously soft breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Feel special with our bread treats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Book a Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "iframe", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "iframe", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Gardenia's latest hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Now showing!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " Gardenia... a delight to the senses of everyone - young and old. Watch these reels to see how and why it is enjoyed by Filipinos all over. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Our Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Create Delicious");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " A good bread treat starts with a good bread. Whip up exciting bread treats for the family. All you need is a dash of creativity, a sprinkle of love, and an easy-to-follow recipe from Gardenia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "View Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "What\u2019s New at Gardenia?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Article Header Header 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " Know The Story ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Article Header 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Know The Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Article Header 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Know The Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Article Header 04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Know The Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Talk to Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "We'd love to hear from you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " Share your thoughts and comments with us. Your satisfaction is our top priority. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "form", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](175, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](183, "textarea", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/news-inner/news-inner.component.ts":
/*!****************************************************!*\
  !*** ./src/app/news-inner/news-inner.component.ts ***!
  \****************************************************/
/*! exports provided: NewsInnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsInnerComponent", function() { return NewsInnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewsInnerComponent {
    constructor() { }
    ngOnInit() {
        // article slider
        $('.article-slick').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.article-slider').find('.btn-tab-left'),
            nextArrow: $('.article-slider').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }
}
NewsInnerComponent.??fac = function NewsInnerComponent_Factory(t) { return new (t || NewsInnerComponent)(); };
NewsInnerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewsInnerComponent, selectors: [["app-news-inner"]], decls: 96, vars: 0, consts: [[1, "mainwrap", "news-inner-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/news-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/news-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "news"], [1, "news-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/news-img-1.jpg", "alt", ""], [1, "share-wrap"], [1, "share-label"], [1, "icon-wrap"], ["href", "javascript:void(0)", 1, "fb-icon"], ["href", "javascript:void(0)", 1, "twitter-icon"], ["href", "javascript:void(0)", 1, "google-icon"], ["href", "javascript:void(0)", 1, "blogger-icon"], ["href", "javascript:void(0)", 1, "tumblr-icon"], [1, "pagination"], ["href", "javascript:void(0)", 1, "btn-main", "btn-back", "disable-back"], ["href", "javascript:void(0)", 1, "btn-main", "btn-next"], [1, "page-label"], [1, "article-slider"], [1, "article-slider-wrap"], ["href", "javascript:void(0)", 1, "btn-tab-left"], ["href", "javascript:void(0)", 1, "btn-tab-right"], [1, "article-slick"], [1, "slider-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/article-slider-1.jpg", "alt", ""], [1, "title-wrap"], [1, "article-title"], [1, "hover"], [1, "hover-wrap"], ["href", "javascript:void(0)", 1, "btn-main"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/article-slider-2.jpg", "alt", ""]], template: function NewsInnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Stay up to date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Products Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Gardenia Gives You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "More Choices for Healthy-Licious Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Wanna be fit and healthy all year round without going for the bland and tasteless? There\u2019s a secret to make your diet delicious and healthy, at the same time. Look no further as your favourite Gardenia bread has a lot more to offer especially on its health bread line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Remember there is Gardenia High Fiber Wheat Raisin Loaf that is deliciously packed with flavorful plump and juicy California raisins that contain antioxidants that help protect your body against diseases. One slice of the wheat raisin load a day supplies us with 29% of our daily dietary fiber needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Share This Article On :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "pages 1 of 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "What\u2019s New at Gardenia?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Article Header 01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Know The Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Article Header 02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Know The Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Article Header 03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Know The Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Article Header 04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, " Ad per adipisci mnesarchum, in eius simul minimum nec. Quis liber altera vel ad, sed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Know The Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewsInnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-inner',
                templateUrl: './news-inner.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsComponent.??fac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 56, vars: 0, consts: [[1, "mainwrap", "news-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/news-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/news-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "news"], [1, "news-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/news-img-1.jpg", "alt", ""], ["href", "javascript:void(0)", 1, "btn-main"], [1, "pagination"], ["href", "javascript:void(0)", 1, "btn-main", "btn-back", "disable-back"], ["href", "javascript:void(0)", 1, "btn-main", "btn-next"], [1, "page-label"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Stay up to date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Gardenia Gives You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "More Choices for Healthy-Licious Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Wanna be fit and healthy all year round without going for the bland and tasteless? There\u2019s a secret to make your diet delicious and healthy, at the same time. Look no further as your favourite Gardenia bread has a lot more to offer especially on its health bread line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Remember there is Gardenia High Fiber Wheat Raisin Loaf that is deliciously packed with flavorful plump and juicy California raisins that contain antioxidants that help protect your body against diseases. One slice of the wheat raisin load a day supplies us with 29% of our daily dietary fiber needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Read Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Gardenia Gives You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "More Choices for Healthy-Licious Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Wanna be fit and healthy all year round without going for the bland and tasteless? There\u2019s a secret to make your diet delicious and healthy, at the same time. Look no further as your favourite Gardenia bread has a lot more to offer especially on its health bread line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Remember there is Gardenia High Fiber Wheat Raisin Loaf that is deliciously packed with flavorful plump and juicy California raisins that contain antioxidants that help protect your body against diseases. One slice of the wheat raisin load a day supplies us with 29% of our daily dietary fiber needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Read Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Gardenia Gives You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "More Choices for Healthy-Licious Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Wanna be fit and healthy all year round without going for the bland and tasteless? There\u2019s a secret to make your diet delicious and healthy, at the same time. Look no further as your favourite Gardenia bread has a lot more to offer especially on its health bread line. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Remember there is Gardenia High Fiber Wheat Raisin Loaf that is deliciously packed with flavorful plump and juicy California raisins that contain antioxidants that help protect your body against diseases. One slice of the wheat raisin load a day supplies us with 29% of our daily dietary fiber needs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Read Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "pages 1 of 30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/plant/plant.component.ts":
/*!******************************************!*\
  !*** ./src/app/plant/plant.component.ts ***!
  \******************************************/
/*! exports provided: PlantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantComponent", function() { return PlantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlantComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlantComponent.??fac = function PlantComponent_Factory(t) { return new (t || PlantComponent)(); };
PlantComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PlantComponent, selectors: [["app-plant"]], decls: 147, vars: 0, consts: [[1, "mainwrap", "plant-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/plant-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/plant-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "video", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/video-bg-1.jpg')"], [1, "info"], ["href", "javascript:void(0)", "id", "tour-btn", 1, "btn-main"], [1, "video-cont"], [1, "video-wrap"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/TdE55ZnxsS0?showinfo=0", "frameborder", "0", "allowfullscreen", ""], [1, "guide"], [1, "red"], [1, "guide-note"], [1, "guide-note-left"], [1, "guide-note-right"], [1, "form"], ["action", ""], [1, "booking"], [1, "input-label"], [1, "radio-wrap"], ["type", "radio", "name", "booking", "value", "direct", "checked", "", 1, "radio"], [1, "radio-label"], ["type", "radio", "name", "booking", "value", "agency", 1, "radio"], ["type", "text", "placeholder", "Tour Agency Name", 1, "booking-agency", "active"], [1, "row", "first"], [1, "input-wrap"], [1, "drop-wrap"], ["value", ""], ["type", "text", "placeholder", "What is the name of your group?"], ["type", "text", "placeholder", "Write the name of the contact person here"], [1, "row", "second"], ["type", "text"], ["type", "number"], [1, "datetime"], [1, "input-wrap", "dateonly"], [1, "date-cont"], ["type", "text", "placeholder", "eg. 11/28/2016", "data-field", "date", "readonly", ""], [1, "input-wrap", "timeonly"], [1, "time-cont"], [1, "time-wrap", "start"], ["type", "text", "placeholder", "eg. 07:00 AM", "data-field", "time", "readonly", ""], [1, "time-wrap", "end"], ["type", "text", "placeholder", "eg. 09:00 PM", "data-field", "time", "readonly", ""], [1, "row", "third"], [1, "number-wrap"], ["type", "tel", "placeholder", "+63-XXXXXXXXXX"], ["type", "email", "placeholder", "What's your email?"], [1, "row", "four"], ["href", "javascript:void(0)", 1, "download"], [1, "btn-main"]], template: function PlantComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Plant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Plant Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Witness Gardenia's awesome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "way of making ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "World-class breads...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Smell the freshly baked goodness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Hear the sounds of baking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Taste the deliciously soft breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Feel special with our bread treats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Book a Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "iframe", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Guidelines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "For the tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Observing all the guidelines set by Gardenia will help facilitate one\u2019s guided experiential tour, including but not limited to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Complying with PEZA traffic rules and parking restrictions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Wearing the proper attire prescribed by GARDENIA: Sleeveless and open shoes are not allowed inside the factory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Disallowing students, parents, guardians and teachers to disembark the bus / vehicle when there is no instruction from theplant tour crew. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Prohibiting smoking inside the plant; there are designated smoking areas outside GARDENIA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Plant tour crew to determine accommodation for unscheduled and / or behind schedule plant tours. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Prohibiting spitting, loitering, urinating on the walkway, street, sidewalk, and inside and outside GARDENIA plant. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " Following the tour route prescribed by GARDENIA without deviation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Turning-off cellphones inside the factory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Wearing the hairnet supplied by GARDENIA when necessary.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Prohibiting taking of photos / videos inside the plant.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " The Gardenia Plant Tour is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "FREE of charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "! Tour hours are from 7am to 4pm (Mondays through Fridays and Sundays) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Ever wonder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " How we make our bread yummy, soft, nutritious, and smell so good? We\u2019re more than happy to share this with YOU! Fill out the form below and we will contact you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Booking Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Direct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Tour Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Choose A Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Individual Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Name of the group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Name of the Contact Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Grade Or Year Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "No. Of Pax/Total Head Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Date & Time of Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Fax Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Additional Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, " Click here to download the form. Print. Fill out. Fax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PlantComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plant',
                templateUrl: './plant.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/product-faq/product-faq.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-faq/product-faq.component.ts ***!
  \******************************************************/
/*! exports provided: ProductFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFaqComponent", function() { return ProductFaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductFaqComponent {
    constructor() { }
    ngOnInit() {
        // faqs js
        $('.faqs-wrap').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
            else {
                $(this).addClass('active');
            }
        });
    }
}
ProductFaqComponent.??fac = function ProductFaqComponent_Factory(t) { return new (t || ProductFaqComponent)(); };
ProductFaqComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductFaqComponent, selectors: [["app-product-faq"]], decls: 87, vars: 0, consts: [[1, "mainwrap", "products-faqs-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "faqs"], ["href", "javascript:void(0)", 1, "faqs-wrap"], [1, "question"], [1, "answer"]], template: function ProductFaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Need help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "FAQS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Frequently Ask Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "About Our Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Do cras dapibus. Vivamus elementum semper nisi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Do cras dapibus. Vivamus elementum semper nisi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Do cras dapibus. Vivamus elementum semper nisi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Do cras dapibus. Vivamus elementum semper nisi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " Do cras dapibus. Vivamus elementum semper nisi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductFaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-faq',
                templateUrl: './product-faq.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductComponent {
    constructor() { }
    ngOnInit() {
        // tab nav slider
        // products-tab
        $('.products-page').find('.tab').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.tab-cont').find('.btn-tab-left'),
            nextArrow: $('.tab-cont').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 6
                    }
                }
            ]
        });
        // bread-tab
        $('.bread-page').find('.tab').slick({
            arrows: true,
            autoplay: false,
            slidesToShow: 1,
            // slidesToScroll: 3,
            infinite: true,
            prevArrow: $('.tab-cont').find('.btn-tab-left'),
            nextArrow: $('.tab-cont').find('.btn-tab-right'),
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1290,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]
        });
    }
}
ProductComponent.??fac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 86, vars: 0, consts: [[1, "mainwrap", "products-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "tab-cont"], [1, "btn-tab-left-wrap"], ["href", "javascript:void(0)", 1, "btn-tab-left"], [1, "btn-tab-right-wrap"], ["href", "javascript:void(0)", 1, "btn-tab-right"], [1, "tab"], [1, "tab-wrap", "active"], [1, "cat-wrap"], ["href", "javascript:void(0)", "data-id", "1", 1, "cat"], [1, "tab-wrap"], ["href", "javascript:void(0)", "data-id", "2", 1, "cat"], ["href", "javascript:void(0)", "data-id", "3", 1, "cat"], ["href", "javascript:void(0)", "data-id", "4", 1, "cat"], ["href", "javascript:void(0)", "data-id", "5", 1, "cat"], ["href", "javascript:void(0)", "data-id", "6", 1, "cat"], ["href", "javascript:void(0)", "data-id", "7", 1, "cat"], [1, "products-holder"], [1, "products-cont"], [1, "products"], ["href", "javascript:void(0)", 1, "products-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-1.png", "alt", ""], [1, "label"], [1, "category"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-2.png", "alt", ""], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-3.png", "alt", ""], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-4.png", "alt", ""], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/products-5.png", "alt", ""]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Our Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "NeuBake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "White Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Health Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Flavored Breads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Pandesal & Buns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Gardenia's NueBake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Whole Wheat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Soft Delight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Cheese Buns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Savory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Pandesal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StoryComponent {
    constructor() { }
    ngOnInit() {
        $('.accordion-wrap').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
            else {
                $(this).addClass('active');
            }
        });
    }
}
StoryComponent.??fac = function StoryComponent_Factory(t) { return new (t || StoryComponent)(); };
StoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StoryComponent, selectors: [["app-story"]], decls: 87, vars: 0, consts: [[1, "mainwrap", "story-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/story-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/story-banner.jpg')"], [1, "banner-title", "gray"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "accordion"], [1, "accordion-wrap", "active"], [1, "title"], [1, "information"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/story-img.jpg", "alt", ""], [1, "accordion-wrap"]], template: function StoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "The Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Gardenia\u2019s Legacy in the Baking Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Tracing Back Its History: Gardenia\u2019s Humble Beginnings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Gardenias roots go back to Singapore where, in 1978, it began as a humble in-store bakery. Increasing demand led to the opening of Gardenias first-commercial bakery at Pandan Loop in March 1983. Gardenia has since been the market leader in Singapore and has expanded its operations in Asia to countries such as Malaysia and Thailand with the latest in the Gardenia chain of bakeries here in the Philippines. It all began in 1997, QAF Limited through Gardenia International Pte. Ltd. established Gardenia Bakeries Philippines Inc. and started construction of its bakery plant in Laguna International Industrial Park (LIIP), Bi\u00F1an, Laguna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Gardenia Philippines started its operations in 1998 with the state-of-the-art bread factory rated as one of the most modern large scale bread manufacturing facility in the country. Its major, highly-automated equipment come from the best bakery equipment suppliers from Germany, Holland, UK and USA making it the leading manufacturing company in the Philippines. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Over the years, Gardenia has gained wide acceptance and is now considered as the most widely assetsributed loaf brand, reaching many parts of the country. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " World-class Products: Gardenia\u2019s Steadfast Commitment to Quality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Gardenia Philippines offers a wide array of superior bakery products including white, wheat and health breads, flavored loaves, pandesal and snack items like snack cakes, muffins and toasts. Gardenia breads are known for their good taste, freshness, softness, oven-baked aroma and nutritive value. The popular Classic White Bread is cholesterol free and bromate free, has zero transfat, and is vitamin and mineral fortified, exceeding DOH recommendations. Its product slogan \"So good...you can even eat it on its own\" best describes the product benefits. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Gardenia, being a consumer-focused and branded food company, is singularly driven in delivering superior consumer value through providing consumers with superior products. The Gardenia trademark means value and is respected all over Asia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Gardenia has been awarded with International Organization for Standardization ISO 9001: 2000 certifications from 2003 to 2009 and has now upgradedto ISO 9001:2008 in compliance with Quality Management System and certification for product quality excellence. This assures that consumers only get the highest quality products in the market. Moreover, Gardenia is HACCP (Hazard Analysis and Critical Control Point) certified since 2003 to present\u2014proof of the company\u2019s adherence to the systematic approach in the identification, evaluation, and control of food safety standards. From 2004-2010, Gardenia was accorded Superbrands status by Superbrands Ltd., an independent authority and arbiter on branding. This, on the other hand, re-affirms that Gardenia has met the stringent criteria of market dominance, longevity, goodwill, customer loyalty and overall market acceptance. Another notable award is the Annual National Consumers\u2019 Award (ANCA) as the \u201COutstanding Bread Manufacturer\u201D for five straight years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " These are some testaments which prove that Gardenia provides only the best products for Filipino consumers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Moving to the Future: Paving the way for Gardenia\u2019s Continued Success ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Gardenia Philippines pioneered a unique assetsribution system, ensuring that only fresh breads reach consumers every day. Gardenia strictly follows its international policy of keeping only fresh stocks on the store shelves. As soon as products come out of the factory, delivery vans leave the production plant as early as 4 o\u2019clock in the morning to bring the products to specific locations in the country. Replacing unsold breads in store shelves with only freshly baked top-quality products during each day of delivery is a Gardenia practice unmatched in the industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " Since the start of its operations, Gardenias assetsribution had grown rapidly. Gardenia is now considered as the most widely assetsributed loaf brand in Metro Manila to as far as Isabela, Abra, Cagayan and Ilocos provinces in the North, Bicol and Sorsogon in the South, and Negros, Samar, Antique, Aklan, Iloilo and Leyte in the Visayas region. Increasing demand led Gardenia to reach Cebu, Bohol, Butuan City, Iligan City, Misamis Oriental, Bukidnon and Davao City in Mindanao. From Gardenia's establishment in 1998, the brand\u2019s success has been starkly evident with its continuous and rapid sales growth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " This combination of superior product quality, advanced bread-making technology and extensive system of assetsribution reflects the consumer-oriented vision of Gardenia Philippines that brings consumers the highest level of product satisfaction. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " The reason behind Gardenia's success is no secret; it is the people who made Gardenia what it is today and the goal of sustaining Gardenia\u2019s leadership and excellence. Our enthusiasm to serve constitutes the \u201Cyeast that raises the dough\u201D and with this, Gardenia will continue to take the lead.uis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Our vision is to become the premier company in the baking industry and the related food and beverage industry, known and emulated for our best quality products that delight the consumer. It is the pride of every employee, investor, trade partner and stakeholder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " Our mission is to serve consumers with the best quality assortment of great-tasting bakery and related food and beverage products, with world-class manufacturing facilities and an efficient nationwide assetsribution network, thereby providing a fair return on shareholder investments. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Our Core Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, " Customer Driven- Wealways put the customer first in everything we do. Innovation- We constantly initiate change and encourage creativity Teamwork and Professionalism- We are one company, one team working together professionally. Integrity- We uphold honesty and objectivity in the things that we do. Excellence- We relentlessly pursue continuous improvement and aim for the highest standard in our work. Stewardship (Malasakit)- We treat company resources with pride as if they are our own. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Food Safety Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " We, at Gardenia Bakeries Philippines, are committed to assure customers and consumers that our products are produced with superior quality ingredients and according to strict safety and hygienic standards that comply with statutory and regulatory requirements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Our Quality Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " We, at Gardenia Bakeries Philippines, are committed to delight consumers by providing best quality bakery products. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " We aim for excellence through innovation and continuous improvement of our processes, products and services, ensuring compliance with our customers\u2019 and applicable statutory and regulatory requirements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](StoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-story',
                templateUrl: './story.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wellness-article/wellness-article.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/wellness-article/wellness-article.component.ts ***!
  \****************************************************************/
/*! exports provided: WellnessArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessArticleComponent", function() { return WellnessArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WellnessArticleComponent {
    constructor() { }
    ngOnInit() {
        // calculate bmi
        function bmi_calculator() {
            var bmi_feet = $('#bmi-feet').val();
            var bmi_inch = $('#bmi-inch').val();
            var bmi_ht = bmi_feet * 12 + parseInt(bmi_inch);
            var bmi_weight_lbs = $('#bmi-weight').val();
            var bmi_weight_kg = $('#bmi-weight').val() * 2.2;
            var bmi_wt_type = $('#bmi-wt-type').val();
            var bmi_result;
            $('.bmi-result').html('');
            $('#bmi-result').hide();
            $('.bmi-height-alert').hide();
            $('.bmi-weight-alert').hide();
            $('.bmi-note').html('');
            if (bmi_feet == '' || bmi_inch == '' || bmi_weight_lbs == '') {
                if (bmi_feet == '' || bmi_inch == '') {
                    $('.bmi-height-alert').html('"Height is required"');
                    $('.bmi-height-alert').show();
                }
                if (bmi_weight_lbs == '') {
                    $('.bmi-weight-alert').html('"Weight is required"');
                    $('.bmi-weight-alert').show();
                }
            }
            else {
                if (bmi_wt_type == 'lbs') {
                    bmi_result =
                        Math.round((bmi_weight_lbs / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                else {
                    bmi_result =
                        Math.round((bmi_weight_kg / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                // console.log(bmi_result);
                $('#bmi-result').show();
                $('.bmi-result').show().html(bmi_result);
                if (bmi_result < 18.5) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (UNDERWEIGHT) ');
                }
                else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (NORMAL) ');
                }
                else if (bmi_result >= 25 && bmi_result <= 29.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OVERWEIGHT) ');
                }
                else if (bmi_result >= 30) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OBESE) ');
                }
                else {
                }
            }
        }
        // calculate ter
        function ter_calculator() {
            var ter_wt = $('#ter-weight').val();
            var ter_wt_lbs = ter_wt / 2.2;
            var ter_wt_type = $('#ter-wt-type').val();
            var ter_bmi = $('#ter-bmi').val();
            var activity = $('#activity').val();
            var act_rate;
            // console.log(ter_wt);
            // console.log(ter_wt_type);
            // console.log(ter_bmi);
            // console.log(activity);
            $('.ter-weight-alert').hide();
            $('.ter-bmi-alert').hide();
            $('.ter-note').html('');
            $('.ter-note2').hide();
            $('#ter-result').hide();
            if (ter_wt == '' || ter_bmi == '') {
                if (ter_wt == '') {
                    $('.ter-weight-alert').show();
                }
                if (ter_bmi == '') {
                    $('.ter-bmi-alert').show();
                }
            }
            else {
                $('#ter-result').css({ display: 'inline-block' });
                if (activity == 'sedentary') {
                    act_rate = 30;
                }
                else if (activity == 'light') {
                    act_rate = 35;
                }
                else if (activity == 'moderate') {
                    act_rate = 40;
                }
                else if (activity == 'active') {
                    act_rate = 45;
                }
                else {
                }
                if (ter_wt_type == 'lbs') {
                    var ter = ter_wt_lbs * act_rate;
                }
                else {
                    var ter = ter_wt * act_rate;
                }
                var ter = ter_wt * act_rate;
                // Underweight
                if (ter_bmi < 18.5) {
                    ter += 500;
                }
                // Normal weight
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    // Nothing to do here... normal weight :P
                }
                // Overweight or Pre-Obese
                else if (ter_bmi >= 25 && ter_bmi <= 29.9) {
                    ter -= 500;
                }
                // Obese
                else if (ter_bmi >= 30) {
                    ter -= 1000;
                }
                ter = Math.round(ter / 100) * 100;
                $('.ter-result').show().html(ter);
                // var link = 'uploads/pdf/';
                var link = '' + 'uploads/pdf/';
                if (ter >= 1000 && ter < 1100) {
                    link += '1000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1100 && ter < 1200) {
                    link += '1100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1200 && ter < 1300) {
                    link += '1200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1300 && ter < 1400) {
                    link += '1300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1400 && ter < 1500) {
                    link += '1400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1500 && ter < 1600) {
                    link += '1500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1600 && ter < 1700) {
                    link += '1600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1700 && ter < 1800) {
                    link += '1700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1800 && ter < 1900) {
                    link += '1800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1900 && ter < 2000) {
                    link += '1900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2000 && ter < 2100) {
                    link += '2000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2100 && ter < 2200) {
                    link += '2100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2200 && ter < 2300) {
                    link += '2200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2300 && ter < 2400) {
                    link += '2300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2400 && ter < 2500) {
                    link += '2400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2500 && ter < 2600) {
                    link += '2500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2600 && ter < 2700) {
                    link += '2600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2700 && ter < 2800) {
                    link += '2700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2800 && ter < 2900) {
                    link += '2800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2900 && ter < 3000) {
                    link += '2900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3000 && ter < 3100) {
                    link += '3000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3100 && ter < 3200) {
                    link += '3100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3200 && ter < 3300) {
                    link += '3200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3300 && ter < 3400) {
                    link += '3300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3400 && ter < 3500) {
                    link += '3400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3500 && ter < 3600) {
                    link += '3500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3600 && ter < 3700) {
                    link += '3600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3700) {
                    link += '3700.pdf';
                    $('.ter-note2').show();
                }
                else {
                }
                // console.log(link);
                if (ter_bmi < 18.5) {
                    $('.ter-note').html('<p>You are below your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to GAIN atleast 1 pound (lb) per week.</p>');
                }
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    $('.ter-note').html('<p>Congratulations! You are within your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to MAINTAIN a healthy weight.</p>');
                }
                else {
                    $('.ter-note').html('<p>You are above your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to LOSE atleast 1 pound (lb) per week.</p>');
                }
                // $('.plan').html(link);
                $('.plan').attr('href', link);
            }
        }
        $('.btn-bmi').click(function () {
            bmi_calculator();
        });
        $('.btn-ter').click(function () {
            ter_calculator();
        });
        $('.calculator').keypress(function (e) {
            if (e.charCode == 13) {
                $(this).find('.btn-main').click();
            }
        });
        $('.calculator')
            .find('input')
            .keydown(function (e) {
            if (e.keyCode == 38 || e.keyCode == 40) {
                return false;
            }
        });
        $('.calculator')
            .find('input')
            .keypress(function (e) {
            if (String.fromCharCode(e.charCode) == '-') {
                return false;
            }
        });
    }
}
WellnessArticleComponent.??fac = function WellnessArticleComponent_Factory(t) { return new (t || WellnessArticleComponent)(); };
WellnessArticleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WellnessArticleComponent, selectors: [["app-wellness-article"]], decls: 204, vars: 0, consts: [[1, "mainwrap", "wellness-article-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg')"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "wellness-wrap"], [1, "wellness-cont"], [1, "wellness-article"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-article.jpg", "alt", ""], [1, "sub-article"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/sub-article.jpg", "alt", ""], [1, "sub-info"], ["routerLink", "/bread", 1, "btn-main"], [1, "add-info"], [1, "share-wrap"], [1, "share-label"], [1, "icon-wrap"], ["href", "javascript:void(0)", 1, "fb-icon"], ["href", "javascript:void(0)", 1, "twitter-icon"], ["href", "javascript:void(0)", 1, "google-icon"], ["href", "javascript:void(0)", 1, "blogger-icon"], ["href", "javascript:void(0)", 1, "tumblr-icon"], [1, "pagination"], ["href", "javascript:void(0)", 1, "btn-main", "btn-back", "disable-back"], ["href", "javascript:void(0)", 1, "btn-main", "btn-next"], [1, "pagination-wrap"], ["href", "javascript:void(0)", 1, "circle", "active"], ["href", "javascript:void(0)", 1, "circle"], ["href", "javascript:void(0)", 1, "circle-ext"], [1, "sidebar"], [1, "calculator"], [1, "form"], ["action", ""], [1, "input-label"], [1, "height"], [1, "input-wrap", "feet"], ["id", "bmi-feet", "type", "number", "placeholder", "eg. 5", "required", ""], [1, "input-wrap", "inch"], ["id", "bmi-inch", "type", "number", "placeholder", "eg. 2", "required", ""], [1, "fields", "bmi-height-alert"], [1, "weight"], [1, "input-wrap"], ["id", "bmi-weight", "type", "number", "placeholder", "eg. 120"], [1, "dropdown-wrap"], ["id", "bmi-wt-type"], ["value", "lbs"], ["value", "kg"], [1, "fields", "bmi-weight-alert"], ["id", "bmi-result", 1, "calc-result-wrap"], [1, "calc-result"], [1, "calc-result", "bmi-result"], ["href", "javascript:void(0)", 1, "btn-main", "btn-bmi"], ["id", "ter-weight", "type", "number", "placeholder", "eg. 120"], ["id", "ter-wt-type"], [1, "fields", "ter-weight-alert"], ["id", "ter-bmi", "type", "number", "placeholder", "eg. 23"], ["id", "activity"], ["value", "sedentary"], ["value", "light"], ["value", "moderate"], ["value", "active"], [1, "fields", "ter-bmi-alert"], ["id", "ter-result", 1, "calc-result-wrap"], [1, "calc-result", "ter-result"], [1, "ter-note"], [1, "ter-note2"], ["href", "javascript:void(0)", "target", "_blank", 1, "btn-main", "plan"], ["href", "javascript:void(0)", 1, "btn-main", "btn-ter"], [1, "activity"], ["href", "javascript:void(0)", 1, "btn-toggle"], [1, "activity-title"], [1, "activity-detail"], [1, "calendar"], [1, "date"], [1, "event"], ["routerLink", "/wellness-calendar", 1, "btn-calendar"], [1, "ask-nutritionist"], [1, "ask-wrap"], [1, "group-wrap"], ["type", "text", "placeholder", "What is your name?"], ["type", "email", "placeholder", "What's your email?"], [1, "textarea-wrap"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your Questions here..."], [1, "btn-main"]], template: function WellnessArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Wellness Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Healthy Mommy, Happy Baby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " The National Nutrition Council has announced this year\u2019s nutrition month theme: \u201CFirst 1000 days ni Baby Pahalagahan Para sa Malusog na Kinabukasan\u201D. The aim of this theme is to focus on the first 1000 days of life starting from conception to before the second birthday of the child. It is because during this period that growth faltering happens. Studies suggest that there is a correlation between undernutrition during the first year of life and overnutrition in the later years. It is because of this that the first 1000 days has been dubbed as the \u201Cgolden window of opportunity\u201D to bring significant changes in the reduction of malnutrition during child development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Folate (or folic acid), also known as vitamin B9, is a water-soluble vitamin that your body needs in order to perform many bodily functions. And since it can\u2019t be stored in the body, leftover amounts leave your body through urine. Therefore, you need a regular supply of this vitamin in your everyday diet. Consuming the right amount of folic acid before and during pregnancy helps decrease the probability of miscarriage and prevent certain birth defects, including spina bifida, a defect wherein a baby's backbone does not form normally. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " As part of the baby\u2019s 1000 days, the mother\u2019s health during conception is equally important. It is for this reason that massive efforts for nutrition education regarding folate supplementation is being done worldwide. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Best Recipe for you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Gardenia Queen Sandwich");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, corporis eos tenetur quod maxime. Voluptatem ea dicta similique voluptas maxime, quae soluta fugiat dolorem, reprehenderit? Maxime doloribus natus fugiat modi! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "View Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Share This Article On :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Last > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "BMI calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "\"Height is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Compute BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "TER calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Total Energy Requirement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Physical Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "select", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Sedentary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Very Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "\"BMI is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Download Menu Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Compute TER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Physical Activity: Meaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Sedentary - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " Secretary, Clerk, Typist, Administrator, Cashier, Bank Teller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Light - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, " Teacher, Nurse, Student, Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Moderate - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, " Housewife, Vendor, Mechanic, Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Very Active - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " Farmer, Laborer, Cargador, Coal Miner, Fisherman, Heavy Equipment Operator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Event Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Jan. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "See More Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "Ask the Nutritionist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "What would you like to know?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](193, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](197, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "textarea", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WellnessArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wellness-article',
                templateUrl: './wellness-article.component.html',
                styles: [],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wellness-calendar/wellness-calendar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/wellness-calendar/wellness-calendar.component.ts ***!
  \******************************************************************/
/*! exports provided: WellnessCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessCalendarComponent", function() { return WellnessCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WellnessCalendarComponent {
    constructor() { }
    ngOnInit() {
        // calculate bmi
        function bmi_calculator() {
            var bmi_feet = $('#bmi-feet').val();
            var bmi_inch = $('#bmi-inch').val();
            var bmi_ht = bmi_feet * 12 + parseInt(bmi_inch);
            var bmi_weight_lbs = $('#bmi-weight').val();
            var bmi_weight_kg = $('#bmi-weight').val() * 2.2;
            var bmi_wt_type = $('#bmi-wt-type').val();
            var bmi_result;
            $('.bmi-result').html('');
            $('#bmi-result').hide();
            $('.bmi-height-alert').hide();
            $('.bmi-weight-alert').hide();
            $('.bmi-note').html('');
            if (bmi_feet == '' || bmi_inch == '' || bmi_weight_lbs == '') {
                if (bmi_feet == '' || bmi_inch == '') {
                    $('.bmi-height-alert').html('"Height is required"');
                    $('.bmi-height-alert').show();
                }
                if (bmi_weight_lbs == '') {
                    $('.bmi-weight-alert').html('"Weight is required"');
                    $('.bmi-weight-alert').show();
                }
            }
            else {
                if (bmi_wt_type == 'lbs') {
                    bmi_result =
                        Math.round((bmi_weight_lbs / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                else {
                    bmi_result =
                        Math.round((bmi_weight_kg / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                // console.log(bmi_result);
                $('#bmi-result').show();
                $('.bmi-result').show().html(bmi_result);
                if (bmi_result < 18.5) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (UNDERWEIGHT) ');
                }
                else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (NORMAL) ');
                }
                else if (bmi_result >= 25 && bmi_result <= 29.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OVERWEIGHT) ');
                }
                else if (bmi_result >= 30) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OBESE) ');
                }
                else {
                }
            }
        }
        // calculate ter
        function ter_calculator() {
            var ter_wt = $('#ter-weight').val();
            var ter_wt_lbs = ter_wt / 2.2;
            var ter_wt_type = $('#ter-wt-type').val();
            var ter_bmi = $('#ter-bmi').val();
            var activity = $('#activity').val();
            var act_rate;
            // console.log(ter_wt);
            // console.log(ter_wt_type);
            // console.log(ter_bmi);
            // console.log(activity);
            $('.ter-weight-alert').hide();
            $('.ter-bmi-alert').hide();
            $('.ter-note').html('');
            $('.ter-note2').hide();
            $('#ter-result').hide();
            if (ter_wt == '' || ter_bmi == '') {
                if (ter_wt == '') {
                    $('.ter-weight-alert').show();
                }
                if (ter_bmi == '') {
                    $('.ter-bmi-alert').show();
                }
            }
            else {
                $('#ter-result').css({ display: 'inline-block' });
                if (activity == 'sedentary') {
                    act_rate = 30;
                }
                else if (activity == 'light') {
                    act_rate = 35;
                }
                else if (activity == 'moderate') {
                    act_rate = 40;
                }
                else if (activity == 'active') {
                    act_rate = 45;
                }
                else {
                }
                if (ter_wt_type == 'lbs') {
                    var ter = ter_wt_lbs * act_rate;
                }
                else {
                    var ter = ter_wt * act_rate;
                }
                var ter = ter_wt * act_rate;
                // Underweight
                if (ter_bmi < 18.5) {
                    ter += 500;
                }
                // Normal weight
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    // Nothing to do here... normal weight :P
                }
                // Overweight or Pre-Obese
                else if (ter_bmi >= 25 && ter_bmi <= 29.9) {
                    ter -= 500;
                }
                // Obese
                else if (ter_bmi >= 30) {
                    ter -= 1000;
                }
                ter = Math.round(ter / 100) * 100;
                $('.ter-result').show().html(ter);
                // var link = 'uploads/pdf/';
                var link = '' + 'uploads/pdf/';
                if (ter >= 1000 && ter < 1100) {
                    link += '1000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1100 && ter < 1200) {
                    link += '1100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1200 && ter < 1300) {
                    link += '1200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1300 && ter < 1400) {
                    link += '1300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1400 && ter < 1500) {
                    link += '1400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1500 && ter < 1600) {
                    link += '1500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1600 && ter < 1700) {
                    link += '1600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1700 && ter < 1800) {
                    link += '1700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1800 && ter < 1900) {
                    link += '1800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1900 && ter < 2000) {
                    link += '1900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2000 && ter < 2100) {
                    link += '2000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2100 && ter < 2200) {
                    link += '2100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2200 && ter < 2300) {
                    link += '2200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2300 && ter < 2400) {
                    link += '2300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2400 && ter < 2500) {
                    link += '2400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2500 && ter < 2600) {
                    link += '2500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2600 && ter < 2700) {
                    link += '2600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2700 && ter < 2800) {
                    link += '2700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2800 && ter < 2900) {
                    link += '2800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2900 && ter < 3000) {
                    link += '2900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3000 && ter < 3100) {
                    link += '3000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3100 && ter < 3200) {
                    link += '3100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3200 && ter < 3300) {
                    link += '3200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3300 && ter < 3400) {
                    link += '3300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3400 && ter < 3500) {
                    link += '3400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3500 && ter < 3600) {
                    link += '3500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3600 && ter < 3700) {
                    link += '3600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3700) {
                    link += '3700.pdf';
                    $('.ter-note2').show();
                }
                else {
                }
                // console.log(link);
                if (ter_bmi < 18.5) {
                    $('.ter-note').html('<p>You are below your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to GAIN atleast 1 pound (lb) per week.</p>');
                }
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    $('.ter-note').html('<p>Congratulations! You are within your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to MAINTAIN a healthy weight.</p>');
                }
                else {
                    $('.ter-note').html('<p>You are above your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to LOSE atleast 1 pound (lb) per week.</p>');
                }
                // $('.plan').html(link);
                $('.plan').attr('href', link);
            }
        }
        $('.btn-bmi').click(function () {
            bmi_calculator();
        });
        $('.btn-ter').click(function () {
            ter_calculator();
        });
        $('.calculator').keypress(function (e) {
            if (e.charCode == 13) {
                $(this).find('.btn-main').click();
            }
        });
        $('.calculator')
            .find('input')
            .keydown(function (e) {
            if (e.keyCode == 38 || e.keyCode == 40) {
                return false;
            }
        });
        $('.calculator')
            .find('input')
            .keypress(function (e) {
            if (String.fromCharCode(e.charCode) == '-') {
                return false;
            }
        });
    }
}
WellnessCalendarComponent.??fac = function WellnessCalendarComponent_Factory(t) { return new (t || WellnessCalendarComponent)(); };
WellnessCalendarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WellnessCalendarComponent, selectors: [["app-wellness-calendar"]], decls: 197, vars: 0, consts: [[1, "mainwrap", "wellness-calendar-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg')"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "wellness-wrap"], [1, "wellness-cont"], [1, "event-info"], ["routerLink", "/wellness-event", 1, "btn-main"], [1, "calendar"], [1, "form"], [1, "date"], [1, "event"], [1, "sidebar"], [1, "calculator"], ["action", ""], [1, "input-label"], [1, "height"], [1, "input-wrap", "feet"], ["id", "bmi-feet", "type", "number", "placeholder", "eg. 5", "required", ""], [1, "input-wrap", "inch"], ["id", "bmi-inch", "type", "number", "placeholder", "eg. 2", "required", ""], [1, "fields", "bmi-height-alert"], [1, "weight"], [1, "input-wrap"], ["id", "bmi-weight", "type", "number", "placeholder", "eg. 120"], [1, "dropdown-wrap"], ["id", "bmi-wt-type"], ["value", "lbs"], ["value", "kg"], [1, "fields", "bmi-weight-alert"], ["id", "bmi-result", 1, "calc-result-wrap"], [1, "calc-result"], [1, "calc-result", "bmi-result"], ["href", "javascript:void(0)", 1, "btn-main", "btn-bmi"], ["id", "ter-weight", "type", "number", "placeholder", "eg. 120"], ["id", "ter-wt-type"], [1, "fields", "ter-weight-alert"], ["id", "ter-bmi", "type", "number", "placeholder", "eg. 23"], ["id", "activity"], ["value", "sedentary"], ["value", "light"], ["value", "moderate"], ["value", "active"], [1, "fields", "ter-bmi-alert"], ["id", "ter-result", 1, "calc-result-wrap"], [1, "calc-result", "ter-result"], [1, "ter-note"], [1, "ter-note2"], ["href", "javascript:void(0)", "target", "_blank", 1, "btn-main", "plan"], ["href", "javascript:void(0)", 1, "btn-main", "btn-ter"], [1, "activity"], ["href", "javascript:void(0)", 1, "btn-toggle"], [1, "activity-title"], [1, "activity-detail"], [1, "ask-nutritionist"], [1, "ask-wrap"], [1, "group-wrap"], ["type", "text", "placeholder", "What is your name?"], ["type", "email", "placeholder", "What's your email?"], [1, "textarea-wrap"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your Questions here..."], [1, "btn-main"]], template: function WellnessCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Wellness Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "List of Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Book an Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Jan. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Jan. 03, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Jan. 04, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Feb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Feb. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Feb. 03, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Mar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Mar. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "BMI calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "\"Height is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Compute BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "TER calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Total Energy Requirement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Physical Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Sedentary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "Very Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "\"BMI is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Download Menu Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Compute TER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Physical Activity: Meaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Sedentary - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " Secretary, Clerk, Typist, Administrator, Cashier, Bank Teller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Light - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " Teacher, Nurse, Student, Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Moderate - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, " Housewife, Vendor, Mechanic, Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Very Active - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " Farmer, Laborer, Cargador, Coal Miner, Fisherman, Heavy Equipment Operator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Ask the Nutritionist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "What would you like to know?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](190, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](194, "textarea", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WellnessCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wellness-calendar',
                templateUrl: './wellness-calendar.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wellness-event/wellness-event.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wellness-event/wellness-event.component.ts ***!
  \************************************************************/
/*! exports provided: WellnessEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessEventComponent", function() { return WellnessEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WellnessEventComponent {
    constructor() { }
    ngOnInit() {
        // calculate bmi
        function bmi_calculator() {
            var bmi_feet = $('#bmi-feet').val();
            var bmi_inch = $('#bmi-inch').val();
            var bmi_ht = bmi_feet * 12 + parseInt(bmi_inch);
            var bmi_weight_lbs = $('#bmi-weight').val();
            var bmi_weight_kg = $('#bmi-weight').val() * 2.2;
            var bmi_wt_type = $('#bmi-wt-type').val();
            var bmi_result;
            $('.bmi-result').html('');
            $('#bmi-result').hide();
            $('.bmi-height-alert').hide();
            $('.bmi-weight-alert').hide();
            $('.bmi-note').html('');
            if (bmi_feet == '' || bmi_inch == '' || bmi_weight_lbs == '') {
                if (bmi_feet == '' || bmi_inch == '') {
                    $('.bmi-height-alert').html('"Height is required"');
                    $('.bmi-height-alert').show();
                }
                if (bmi_weight_lbs == '') {
                    $('.bmi-weight-alert').html('"Weight is required"');
                    $('.bmi-weight-alert').show();
                }
            }
            else {
                if (bmi_wt_type == 'lbs') {
                    bmi_result =
                        Math.round((bmi_weight_lbs / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                else {
                    bmi_result =
                        Math.round((bmi_weight_kg / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                // console.log(bmi_result);
                $('#bmi-result').show();
                $('.bmi-result').show().html(bmi_result);
                if (bmi_result < 18.5) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (UNDERWEIGHT) ');
                }
                else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (NORMAL) ');
                }
                else if (bmi_result >= 25 && bmi_result <= 29.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OVERWEIGHT) ');
                }
                else if (bmi_result >= 30) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OBESE) ');
                }
                else {
                }
            }
        }
        // calculate ter
        function ter_calculator() {
            var ter_wt = $('#ter-weight').val();
            var ter_wt_lbs = ter_wt / 2.2;
            var ter_wt_type = $('#ter-wt-type').val();
            var ter_bmi = $('#ter-bmi').val();
            var activity = $('#activity').val();
            var act_rate;
            // console.log(ter_wt);
            // console.log(ter_wt_type);
            // console.log(ter_bmi);
            // console.log(activity);
            $('.ter-weight-alert').hide();
            $('.ter-bmi-alert').hide();
            $('.ter-note').html('');
            $('.ter-note2').hide();
            $('#ter-result').hide();
            if (ter_wt == '' || ter_bmi == '') {
                if (ter_wt == '') {
                    $('.ter-weight-alert').show();
                }
                if (ter_bmi == '') {
                    $('.ter-bmi-alert').show();
                }
            }
            else {
                $('#ter-result').css({ display: 'inline-block' });
                if (activity == 'sedentary') {
                    act_rate = 30;
                }
                else if (activity == 'light') {
                    act_rate = 35;
                }
                else if (activity == 'moderate') {
                    act_rate = 40;
                }
                else if (activity == 'active') {
                    act_rate = 45;
                }
                else {
                }
                if (ter_wt_type == 'lbs') {
                    var ter = ter_wt_lbs * act_rate;
                }
                else {
                    var ter = ter_wt * act_rate;
                }
                var ter = ter_wt * act_rate;
                // Underweight
                if (ter_bmi < 18.5) {
                    ter += 500;
                }
                // Normal weight
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    // Nothing to do here... normal weight :P
                }
                // Overweight or Pre-Obese
                else if (ter_bmi >= 25 && ter_bmi <= 29.9) {
                    ter -= 500;
                }
                // Obese
                else if (ter_bmi >= 30) {
                    ter -= 1000;
                }
                ter = Math.round(ter / 100) * 100;
                $('.ter-result').show().html(ter);
                // var link = 'uploads/pdf/';
                var link = '' + 'uploads/pdf/';
                if (ter >= 1000 && ter < 1100) {
                    link += '1000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1100 && ter < 1200) {
                    link += '1100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1200 && ter < 1300) {
                    link += '1200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1300 && ter < 1400) {
                    link += '1300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1400 && ter < 1500) {
                    link += '1400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1500 && ter < 1600) {
                    link += '1500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1600 && ter < 1700) {
                    link += '1600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1700 && ter < 1800) {
                    link += '1700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1800 && ter < 1900) {
                    link += '1800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1900 && ter < 2000) {
                    link += '1900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2000 && ter < 2100) {
                    link += '2000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2100 && ter < 2200) {
                    link += '2100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2200 && ter < 2300) {
                    link += '2200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2300 && ter < 2400) {
                    link += '2300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2400 && ter < 2500) {
                    link += '2400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2500 && ter < 2600) {
                    link += '2500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2600 && ter < 2700) {
                    link += '2600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2700 && ter < 2800) {
                    link += '2700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2800 && ter < 2900) {
                    link += '2800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2900 && ter < 3000) {
                    link += '2900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3000 && ter < 3100) {
                    link += '3000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3100 && ter < 3200) {
                    link += '3100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3200 && ter < 3300) {
                    link += '3200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3300 && ter < 3400) {
                    link += '3300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3400 && ter < 3500) {
                    link += '3400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3500 && ter < 3600) {
                    link += '3500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3600 && ter < 3700) {
                    link += '3600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3700) {
                    link += '3700.pdf';
                    $('.ter-note2').show();
                }
                else {
                }
                // console.log(link);
                if (ter_bmi < 18.5) {
                    $('.ter-note').html('<p>You are below your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to GAIN atleast 1 pound (lb) per week.</p>');
                }
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    $('.ter-note').html('<p>Congratulations! You are within your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to MAINTAIN a healthy weight.</p>');
                }
                else {
                    $('.ter-note').html('<p>You are above your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to LOSE atleast 1 pound (lb) per week.</p>');
                }
                // $('.plan').html(link);
                $('.plan').attr('href', link);
            }
        }
        $('.btn-bmi').click(function () {
            bmi_calculator();
        });
        $('.btn-ter').click(function () {
            ter_calculator();
        });
        $('.calculator').keypress(function (e) {
            if (e.charCode == 13) {
                $(this).find('.btn-main').click();
            }
        });
        $('.calculator')
            .find('input')
            .keydown(function (e) {
            if (e.keyCode == 38 || e.keyCode == 40) {
                return false;
            }
        });
        $('.calculator')
            .find('input')
            .keypress(function (e) {
            if (String.fromCharCode(e.charCode) == '-') {
                return false;
            }
        });
    }
}
WellnessEventComponent.??fac = function WellnessEventComponent_Factory(t) { return new (t || WellnessEventComponent)(); };
WellnessEventComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WellnessEventComponent, selectors: [["app-wellness-event"]], decls: 231, vars: 0, consts: [[1, "mainwrap", "wellness-event-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg')"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "wellness-wrap"], [1, "wellness-cont"], [1, "event-info"], [1, "form"], ["action", ""], [1, "input-group-wrap"], [1, "input-label"], [1, "dropdown-wrap"], ["value", ""], [1, "group-wrap"], [1, "input-wrap"], ["type", "text", "placeholder", "eg. Gardenia"], ["type", "number", "placeholder", "1000"], [1, "input-wrap", "dateonly"], [1, "date-cont"], ["type", "text", "placeholder", "eg. 11/28/2016", "data-field", "date", "readonly", ""], [1, "input-wrap", "timeonly"], [1, "time-cont"], [1, "time-wrap", "start"], ["type", "text", "placeholder", "eg. 07:00 AM", "data-field", "time", "readonly", ""], [1, "time-wrap", "end"], ["type", "text", "placeholder", "eg. 09:00 PM", "data-field", "time", "readonly", ""], [1, "textarea-wrap", "dotted-border"], ["placeholder", "Tell us about your event or questions what to do."], ["type", "text", "placeholder", "Company Name"], ["type", "text", "placeholder", "Your First Name and Last Name"], ["type", "text", "placeholder", "Company Location"], ["type", "email", "placeholder", "What's your email"], ["type", "tel", "placeholder", "+63-XXXXXXXXXX"], [1, "detail-wrap"], [1, "btn-main"], [1, "sidebar"], [1, "calculator"], [1, "height"], [1, "input-wrap", "feet"], ["id", "bmi-feet", "type", "number", "placeholder", "eg. 5", "required", ""], [1, "input-wrap", "inch"], ["id", "bmi-inch", "type", "number", "placeholder", "eg. 2", "required", ""], [1, "fields", "bmi-height-alert"], [1, "weight"], ["id", "bmi-weight", "type", "number", "placeholder", "eg. 120"], ["id", "bmi-wt-type"], ["value", "lbs"], ["value", "kg"], [1, "fields", "bmi-weight-alert"], ["id", "bmi-result", 1, "calc-result-wrap"], [1, "calc-result"], [1, "calc-result", "bmi-result"], ["href", "javascript:void(0)", 1, "btn-main", "btn-bmi"], ["id", "ter-weight", "type", "number", "placeholder", "eg. 120"], ["id", "ter-wt-type"], [1, "fields", "ter-weight-alert"], ["id", "ter-bmi", "type", "number", "placeholder", "eg. 23"], ["id", "activity"], ["value", "sedentary"], ["value", "light"], ["value", "moderate"], ["value", "active"], [1, "fields", "ter-bmi-alert"], ["id", "ter-result", 1, "calc-result-wrap"], [1, "calc-result", "ter-result"], [1, "ter-note"], [1, "ter-note2"], ["href", "javascript:void(0)", "target", "_blank", 1, "btn-main", "plan"], ["href", "javascript:void(0)", 1, "btn-main", "btn-ter"], [1, "activity"], ["href", "javascript:void(0)", 1, "btn-toggle"], [1, "activity-title"], [1, "activity-detail"], [1, "calendar"], [1, "date"], [1, "event"], ["routerLink", "/wellness-calendar", 1, "btn-calendar"], [1, "ask-nutritionist"], [1, "ask-wrap"], ["type", "text", "placeholder", "What is your name?"], ["type", "email", "placeholder", "What's your email?"], [1, "textarea-wrap"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your Questions here..."]], template: function WellnessEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Wellness Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Event Invitation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Event Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Service/s Preffered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Nutrition Counselling only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Event Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Number of Participants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Date of the event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Time of the event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Questions? / Comments? / Suggestions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Name of the Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Contact Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Trunk Line: (632) 8898890 / (049) 5391136.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, " Please submit your invitation at least 2 weeks before the event itself. For cancellation of invites, please let us know at least 3 days before the submitted date. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "BMI calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "\"Height is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Compute BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "TER calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Total Energy Requirement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "select", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Physical Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "select", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Sedentary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Very Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "\"BMI is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](168, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](169, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Download Menu Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Compute TER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](176, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Physical Activity: Meaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Sedentary - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](183, " Secretary, Clerk, Typist, Administrator, Cashier, Bank Teller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Light - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, " Teacher, Nurse, Student, Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Moderate - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, " Housewife, Vendor, Mechanic, Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Very Active - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " Farmer, Laborer, Cargador, Coal Miner, Fisherman, Heavy Equipment Operator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Event Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Jan. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "See More Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Ask the Nutritionist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "What would you like to know?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](220, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](224, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "textarea", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WellnessEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wellness-event',
                templateUrl: './wellness-event.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wellness-team/wellness-team.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/wellness-team/wellness-team.component.ts ***!
  \**********************************************************/
/*! exports provided: WellnessTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellnessTeamComponent", function() { return WellnessTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WellnessTeamComponent {
    constructor() { }
    ngOnInit() {
        // calculate bmi
        function bmi_calculator() {
            var bmi_feet = $('#bmi-feet').val();
            var bmi_inch = $('#bmi-inch').val();
            var bmi_ht = bmi_feet * 12 + parseInt(bmi_inch);
            var bmi_weight_lbs = $('#bmi-weight').val();
            var bmi_weight_kg = $('#bmi-weight').val() * 2.2;
            var bmi_wt_type = $('#bmi-wt-type').val();
            var bmi_result;
            $('.bmi-result').html('');
            $('#bmi-result').hide();
            $('.bmi-height-alert').hide();
            $('.bmi-weight-alert').hide();
            $('.bmi-note').html('');
            if (bmi_feet == '' || bmi_inch == '' || bmi_weight_lbs == '') {
                if (bmi_feet == '' || bmi_inch == '') {
                    $('.bmi-height-alert').html('"Height is required"');
                    $('.bmi-height-alert').show();
                }
                if (bmi_weight_lbs == '') {
                    $('.bmi-weight-alert').html('"Weight is required"');
                    $('.bmi-weight-alert').show();
                }
            }
            else {
                if (bmi_wt_type == 'lbs') {
                    bmi_result =
                        Math.round((bmi_weight_lbs / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                else {
                    bmi_result =
                        Math.round((bmi_weight_kg / (bmi_ht * bmi_ht)) * 703 * 100) / 100;
                    bmi_result = Math.round(bmi_result);
                    $('#ter-bmi').val(bmi_result);
                }
                // console.log(bmi_result);
                $('#bmi-result').show();
                $('.bmi-result').show().html(bmi_result);
                if (bmi_result < 18.5) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (UNDERWEIGHT) ');
                }
                else if (bmi_result >= 18.5 && bmi_result <= 24.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (NORMAL) ');
                }
                else if (bmi_result >= 25 && bmi_result <= 29.9) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OVERWEIGHT) ');
                }
                else if (bmi_result >= 30) {
                    $('.bmi-result')
                        .show()
                        .html(bmi_result + ' (OBESE) ');
                }
                else {
                }
            }
        }
        // calculate ter
        function ter_calculator() {
            var ter_wt = $('#ter-weight').val();
            var ter_wt_lbs = ter_wt / 2.2;
            var ter_wt_type = $('#ter-wt-type').val();
            var ter_bmi = $('#ter-bmi').val();
            var activity = $('#activity').val();
            var act_rate;
            // console.log(ter_wt);
            // console.log(ter_wt_type);
            // console.log(ter_bmi);
            // console.log(activity);
            $('.ter-weight-alert').hide();
            $('.ter-bmi-alert').hide();
            $('.ter-note').html('');
            $('.ter-note2').hide();
            $('#ter-result').hide();
            if (ter_wt == '' || ter_bmi == '') {
                if (ter_wt == '') {
                    $('.ter-weight-alert').show();
                }
                if (ter_bmi == '') {
                    $('.ter-bmi-alert').show();
                }
            }
            else {
                $('#ter-result').css({ display: 'inline-block' });
                if (activity == 'sedentary') {
                    act_rate = 30;
                }
                else if (activity == 'light') {
                    act_rate = 35;
                }
                else if (activity == 'moderate') {
                    act_rate = 40;
                }
                else if (activity == 'active') {
                    act_rate = 45;
                }
                else {
                }
                if (ter_wt_type == 'lbs') {
                    var ter = ter_wt_lbs * act_rate;
                }
                else {
                    var ter = ter_wt * act_rate;
                }
                var ter = ter_wt * act_rate;
                // Underweight
                if (ter_bmi < 18.5) {
                    ter += 500;
                }
                // Normal weight
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    // Nothing to do here... normal weight :P
                }
                // Overweight or Pre-Obese
                else if (ter_bmi >= 25 && ter_bmi <= 29.9) {
                    ter -= 500;
                }
                // Obese
                else if (ter_bmi >= 30) {
                    ter -= 1000;
                }
                ter = Math.round(ter / 100) * 100;
                $('.ter-result').show().html(ter);
                // var link = 'uploads/pdf/';
                var link = '' + 'uploads/pdf/';
                if (ter >= 1000 && ter < 1100) {
                    link += '1000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1100 && ter < 1200) {
                    link += '1100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1200 && ter < 1300) {
                    link += '1200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1300 && ter < 1400) {
                    link += '1300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1400 && ter < 1500) {
                    link += '1400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1500 && ter < 1600) {
                    link += '1500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1600 && ter < 1700) {
                    link += '1600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1700 && ter < 1800) {
                    link += '1700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1800 && ter < 1900) {
                    link += '1800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 1900 && ter < 2000) {
                    link += '1900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2000 && ter < 2100) {
                    link += '2000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2100 && ter < 2200) {
                    link += '2100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2200 && ter < 2300) {
                    link += '2200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2300 && ter < 2400) {
                    link += '2300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2400 && ter < 2500) {
                    link += '2400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2500 && ter < 2600) {
                    link += '2500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2600 && ter < 2700) {
                    link += '2600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2700 && ter < 2800) {
                    link += '2700.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2800 && ter < 2900) {
                    link += '2800.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 2900 && ter < 3000) {
                    link += '2900.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3000 && ter < 3100) {
                    link += '3000.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3100 && ter < 3200) {
                    link += '3100.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3200 && ter < 3300) {
                    link += '3200.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3300 && ter < 3400) {
                    link += '3300.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3400 && ter < 3500) {
                    link += '3400.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3500 && ter < 3600) {
                    link += '3500.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3600 && ter < 3700) {
                    link += '3600.pdf';
                    $('.ter-note2').show();
                }
                else if (ter >= 3700) {
                    link += '3700.pdf';
                    $('.ter-note2').show();
                }
                else {
                }
                // console.log(link);
                if (ter_bmi < 18.5) {
                    $('.ter-note').html('<p>You are below your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to GAIN atleast 1 pound (lb) per week.</p>');
                }
                else if (ter_bmi >= 18.5 && ter_bmi <= 24.9) {
                    $('.ter-note').html('<p>Congratulations! You are within your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to MAINTAIN a healthy weight.</p>');
                }
                else {
                    $('.ter-note').html('<p>You are above your ideal weight. You can follow this one day sample menu coupled with atleast 30 minutes of exercise 3-4 times a week to LOSE atleast 1 pound (lb) per week.</p>');
                }
                // $('.plan').html(link);
                $('.plan').attr('href', link);
            }
        }
        $('.btn-bmi').click(function () {
            bmi_calculator();
        });
        $('.btn-ter').click(function () {
            ter_calculator();
        });
        $('.calculator').keypress(function (e) {
            if (e.charCode == 13) {
                $(this).find('.btn-main').click();
            }
        });
        $('.calculator')
            .find('input')
            .keydown(function (e) {
            if (e.keyCode == 38 || e.keyCode == 40) {
                return false;
            }
        });
        $('.calculator')
            .find('input')
            .keypress(function (e) {
            if (String.fromCharCode(e.charCode) == '-') {
                return false;
            }
        });
    }
}
WellnessTeamComponent.??fac = function WellnessTeamComponent_Factory(t) { return new (t || WellnessTeamComponent)(); };
WellnessTeamComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WellnessTeamComponent, selectors: [["app-wellness-team"]], decls: 215, vars: 0, consts: [[1, "mainwrap", "wellness-team-page"], [1, "banner"], [1, "img-wrap"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg", "alt", ""], [1, "banner-wrap", 2, "background-image", "url('https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-banner.jpg')"], [1, "banner-sub"], [1, "white"], [1, "gray"], [1, "wellness-wrap"], [1, "wellness-cont"], [1, "wellness-article"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/wellness-img-1.jpg", "alt", ""], [1, "team-members"], [1, "member"], ["src", "https://jeffersoncruzit.github.io/portfolio-gardenia/assets/images/member.jpg", "alt", ""], [1, "name"], [1, "title"], [1, "sidebar"], [1, "calculator"], [1, "form"], ["action", ""], [1, "input-label"], [1, "height"], [1, "input-wrap", "feet"], ["id", "bmi-feet", "type", "number", "placeholder", "eg. 5", "required", ""], [1, "input-wrap", "inch"], ["id", "bmi-inch", "type", "number", "placeholder", "eg. 2", "required", ""], [1, "fields", "bmi-height-alert"], [1, "weight"], [1, "input-wrap"], ["id", "bmi-weight", "type", "number", "placeholder", "eg. 120"], [1, "dropdown-wrap"], ["id", "bmi-wt-type"], ["value", "lbs"], ["value", "kg"], [1, "fields", "bmi-weight-alert"], ["id", "bmi-result", 1, "calc-result-wrap"], [1, "calc-result"], [1, "calc-result", "bmi-result"], ["href", "javascript:void(0)", 1, "btn-main", "btn-bmi"], ["id", "ter-weight", "type", "number", "placeholder", "eg. 120"], ["id", "ter-wt-type"], [1, "fields", "ter-weight-alert"], ["id", "ter-bmi", "type", "number", "placeholder", "eg. 23"], ["id", "activity"], ["value", "sedentary"], ["value", "light"], ["value", "moderate"], ["value", "active"], [1, "fields", "ter-bmi-alert"], ["id", "ter-result", 1, "calc-result-wrap"], [1, "calc-result", "ter-result"], [1, "ter-note"], [1, "ter-note2"], ["href", "javascript:void(0)", "target", "_blank", 1, "btn-main", "plan"], ["href", "javascript:void(0)", 1, "btn-main", "btn-ter"], [1, "activity"], ["href", "javascript:void(0)", 1, "btn-toggle"], [1, "activity-title"], [1, "activity-detail"], [1, "calendar"], [1, "date"], [1, "event"], ["routerLink", "/wellness-calendar", 1, "btn-calendar"], [1, "ask-nutritionist"], [1, "ask-wrap"], [1, "group-wrap"], ["type", "text", "placeholder", "What is your name?"], ["type", "email", "placeholder", "What's your email?"], [1, "textarea-wrap"], ["name", "", "id", "", "cols", "30", "rows", "10", "placeholder", "Write your Questions here..."], [1, "btn-main"]], template: function WellnessTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Home ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Wellness Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Get to know our Wellness Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Last Names, First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "MD. TITLE GOES HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Last Names, First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "MD. TITLE GOES HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Last Names, First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "MD. TITLE GOES HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Last Names, First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "MD. TITLE GOES HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Last Names, First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "MD. TITLE GOES HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Last Names, First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "MD. TITLE GOES HERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "BMI calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "\"Height is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Compute BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "TER calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Total Energy Requirement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "lbs/pounds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "\"Weight is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "BMI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](120, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Physical Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Sedentary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Very Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "\"BMI is required\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Result :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Download Menu Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Compute TER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Physical Activity: Meaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Sedentary - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " Secretary, Clerk, Typist, Administrator, Cashier, Bank Teller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Light - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, " Teacher, Nurse, Student, Lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "Moderate - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, " Housewife, Vendor, Mechanic, Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "Very Active - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, " Farmer, Laborer, Cargador, Coal Miner, Fisherman, Heavy Equipment Operator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "Event Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "Jan. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Jan. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Jan. 02, 2017 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Seminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, " - Ubiquility Global Services, Bonifacio Global City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "See More Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Ask the Nutritionist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "What would you like to know?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](204, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](208, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](212, "textarea", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "button", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WellnessTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wellness-team',
                templateUrl: './wellness-team.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\portfolio-gardenia-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map