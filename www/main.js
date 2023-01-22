(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  ["main"],
  {
    /***/ 90158:
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppRoutingModule: () =>
            /* binding */ AppRoutingModule,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./splashscreen/splashscreen.component */ 49232
          );
        /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./login/login.component */ 98458);
        /* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./error/error.component */ 49983);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @angular/router */ 60124);
        /* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./tabs/tabs.page */ 7942);
        /* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./portfolio/portfolio.component */ 15574);
        /* harmony import */ var _treasury_treasury_component__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./treasury/treasury.component */ 31438);
        /* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./settings/settings.component */ 94586);

        const routes = [
          {
            path: "",
            component: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_3__.TabsPage,
            children: [
              {
                path: "portfolio",
                component:
                  _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent,
              },
              {
                path: "treasury",
                component:
                  _treasury_treasury_component__WEBPACK_IMPORTED_MODULE_5__.TreasuryComponent,
              },
              {
                path: "settings",
                component:
                  _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent,
              },
            ],
          },
          {
            path: "splash",
            component:
              _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_0__.SplashscreenComponent,
          },
          {
            path: "login",
            component:
              _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
          },
          {
            path: "**",
            component:
              _error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent,
          },
        ];
        let AppRoutingModule = class AppRoutingModule {};
        AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(
                  routes,
                  {
                    preloadingStrategy:
                      _angular_router__WEBPACK_IMPORTED_MODULE_9__.PreloadAllModules,
                  }
                ),
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
              ],
            }),
          ],
          AppRoutingModule
        );

        /***/
      },

    /***/ 55041:
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppComponent: () => /* binding */ AppComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
        /* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/router */ 60124);
        /* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./services/globals.service */ 70660);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./services/auth.service */ 37556);

        let AppComponent = class AppComponent {
          constructor(globals, auth, router) {
            this.globals = globals;
            this.auth = auth;
            this.router = router;
            this.isReloading = false;
          }
          ngOnInit() {
            console.debug("APP COMPONENT");
            this.router.navigate(["splash"]);
            this.auth.initUser();
          }
          reload() {
            setTimeout(() => (this.isReloading = false), 10);
            setTimeout(() => (this.isReloading = true), 20);
          }
        };
        AppComponent.ctorParameters = () => [
          {
            type: _services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService,
          },
          {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
          },
          { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
        ];
        AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
              selector: "app-root",
              template:
                _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          AppComponent
        );

        /***/
      },

    /***/ 36747:
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppModule: () => /* binding */ AppModule,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _portfolio_child_classes_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./portfolio/child-classes/delete-modal/delete-modal.component */ 56824
          );
        /* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./services/http-interceptor.service */ 61143);
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ =
          __webpack_require__(/*! @angular/common/http */ 58987);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(/*! @angular/platform-browser */ 34497);
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(
            /*! @angular/platform-browser/animations */ 37146
          );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ =
          __webpack_require__(/*! @angular/forms */ 2508);
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./app-routing.module */ 90158);
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./app.component */ 55041);
        /* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./error/error.component */ 49983);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_34__ =
          __webpack_require__(/*! @ionic/angular */ 93819);
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./services/AppAssistant */ 34168);
        /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./login/login.component */ 98458);
        /* harmony import */ var _login_child_classes_tel_card_tel_card_component__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./login/child-classes/tel-card/tel-card.component */ 20807
          );
        /* harmony import */ var _login_child_classes_displayname_card_displayname_card_component__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./login/child-classes/displayname-card/displayname-card.component */ 249
          );
        /* harmony import */ var _login_child_classes_smscode_card_smscode_card_component__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./login/child-classes/smscode-card/smscode-card.component */ 22698
          );
        /* harmony import */ var _login_child_classes_greeting_card_greeting_card_component__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./login/child-classes/greeting-card/greeting-card.component */ 31632
          );
        /* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! ./logo/logo.component */ 84657);
        /* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! ./splashscreen/splashscreen.component */ 49232
          );
        /* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! ./directives/lazy-img.directive */ 18368);
        /* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! ./portfolio/portfolio.component */ 15574);
        /* harmony import */ var _treasury_treasury_component__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(/*! ./treasury/treasury.component */ 31438);
        /* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(/*! ./settings/settings.component */ 94586);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_35__ =
          __webpack_require__(/*! @angular/router */ 60124);
        /* harmony import */ var _portfolio_child_classes_fab_contents_fab_contents_component__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(
            /*! ./portfolio/child-classes/fab-contents/fab-contents.component */ 16075
          );
        /* harmony import */ var _portfolio_child_classes_createapp_modal_createapp_modal_component__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(
            /*! ./portfolio/child-classes/createapp-modal/createapp-modal.component */ 1677
          );
        /* harmony import */ var _portfolio_child_classes_app_detail_modal_app_detail_modal_component__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(
            /*! ./portfolio/child-classes/app-detail-modal/app-detail-modal.component */ 37837
          );
        /* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(/*! ./tabs/tabs.page */ 7942);
        /* harmony import */ var _portfolio_child_classes_featurelist_featurelist_component__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(
            /*! ./portfolio/child-classes/featurelist/featurelist.component */ 96784
          );
        /* harmony import */ var _portfolio_child_classes_togglelink__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(
            /*! ./portfolio/child-classes/togglelink */ 81576
          );
        /* harmony import */ var _portfolio_child_classes_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(
            /*! ./portfolio/child-classes/timeline/timeline.component */ 29412
          );
        /* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_33__ =
          __webpack_require__(/*! swiper/angular */ 341);
        /* harmony import */ var _components_poster_slider_poster_slider_component__WEBPACK_IMPORTED_MODULE_24__ =
          __webpack_require__(
            /*! ./components/poster-slider/poster-slider.component */ 41467
          );
        /* harmony import */ var _settings_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(
            /*! ./settings/components/profile/profile.component */ 48606
          );
        /* harmony import */ var _settings_components_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(
            /*! ./settings/components/profile-edit/profile-edit.component */ 3308
          );

        let AppModule = class AppModule {};
        AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_28__.NgModule)({
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
                _error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent,
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
                _login_child_classes_tel_card_tel_card_component__WEBPACK_IMPORTED_MODULE_7__.TelCardComponent,
                _login_child_classes_displayname_card_displayname_card_component__WEBPACK_IMPORTED_MODULE_8__.DisplaynameCardComponent,
                _login_child_classes_smscode_card_smscode_card_component__WEBPACK_IMPORTED_MODULE_9__.SmscodeCardComponent,
                _login_child_classes_greeting_card_greeting_card_component__WEBPACK_IMPORTED_MODULE_10__.GreetingCardComponent,
                _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_12__.SplashscreenComponent,
                _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_13__.LazyImgDirective,
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__.PortfolioComponent,
                _treasury_treasury_component__WEBPACK_IMPORTED_MODULE_15__.TreasuryComponent,
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_16__.SettingsComponent,
                _portfolio_child_classes_fab_contents_fab_contents_component__WEBPACK_IMPORTED_MODULE_17__.FabContentsComponent,
                _portfolio_child_classes_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_0__.DeleteModalComponent,
                _portfolio_child_classes_createapp_modal_createapp_modal_component__WEBPACK_IMPORTED_MODULE_18__.CreateappModalComponent,
                _portfolio_child_classes_app_detail_modal_app_detail_modal_component__WEBPACK_IMPORTED_MODULE_19__.AppDetailModalComponent,
                _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_20__.TabsPage,
                _portfolio_child_classes_featurelist_featurelist_component__WEBPACK_IMPORTED_MODULE_21__.FeaturelistComponent,
                _portfolio_child_classes_togglelink__WEBPACK_IMPORTED_MODULE_22__.ToggleLink,
                _portfolio_child_classes_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__.TimelineComponent,
                _components_poster_slider_poster_slider_component__WEBPACK_IMPORTED_MODULE_24__.PosterSliderComponent,
                _settings_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__.ProfileComponent,
                _settings_components_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_26__.ProfileEditComponent,
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule,
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_11__.LogoComponent,
                swiper_angular__WEBPACK_IMPORTED_MODULE_33__.SwiperModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_34__.IonicModule.forRoot(
                  {
                    rippleEffect: true,
                  }
                ),
              ],
              exports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_34__.IonicModule,
              ],
              providers: [
                _services_AppAssistant__WEBPACK_IMPORTED_MODULE_5__.AppAssistant,
                {
                  provide:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HTTP_INTERCEPTORS,
                  useClass:
                    _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_1__.HttpInterceptorService,
                  multi: true,
                },
                {
                  provide:
                    _angular_router__WEBPACK_IMPORTED_MODULE_35__.RouteReuseStrategy,
                  useClass:
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_34__.IonicRouteStrategy,
                },
              ],
              bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
              ],
            }),
          ],
          AppModule
        );

        /***/
      },

    /***/ 41467:
      /*!*********************************************************************!*\
  !*** ./src/app/components/poster-slider/poster-slider.component.ts ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PosterSliderComponent: () =>
            /* binding */ PosterSliderComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _poster_slider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./poster-slider.component.html?ngResource */ 29811
          );
        /* harmony import */ var _poster_slider_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./poster-slider.component.css?ngResource */ 9613
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! swiper */ 63587);

        let PosterSliderComponent = class PosterSliderComponent {
          constructor() {
            this.creativeEffect = {
              limitProgress: 3,
              perspective: true,
              shadowPerProgress: true,
              prev: {
                shadow: true,
                translate: ["-15%", 0, -200],
              },
              next: {
                translate: [this.calcNextOffset(), 0, 0],
              },
            };
          }
          ngAfterViewInit() {
            this.swiper.modules = [
              swiper__WEBPACK_IMPORTED_MODULE_2__.Parallax,
              swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCreative,
            ];
          }
          formatBgImgCss(i) {
            const str = `url('../../assets/images/backgrounds/bg-${
              i + 1
            }.jpg')`;
            return str;
          }
          getImgUrl(i) {
            return `../../assets/images/backgrounds/bg-${i + 1}.jpg`;
          }
          calcNextOffset() {
            if (this.swiper == undefined) return;
            const parentWidth =
              this.swiper.nativeElement.parentElement.offsetWidth;
            const swiperWidth = this.swiper.nativeElement.offsetWidth;
            let nextOffset =
              (parentWidth - (parentWidth - swiperWidth) / 2) / swiperWidth;
            nextOffset = Math.max(nextOffset, 1);
            return `${nextOffset * 100}%`;
          }
        };
        PosterSliderComponent.ctorParameters = () => [];
        PosterSliderComponent.propDecorators = {
          cards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
          swiper: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
              args: ["swiper"],
            },
          ],
        };
        PosterSliderComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
              selector: "app-poster-slider",
              template:
                _poster_slider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _poster_slider_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          PosterSliderComponent
        );

        /***/
      },

    /***/ 18368:
      /*!**************************************************!*\
  !*** ./src/app/directives/lazy-img.directive.ts ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LazyImgDirective: () =>
            /* binding */ LazyImgDirective,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let LazyImgDirective = class LazyImgDirective {
          constructor({ nativeElement }) {
            const supports = "loading" in HTMLImageElement.prototype;
            if (supports) {
              nativeElement.setAttribute("loading", "lazy");
            }
          }
        };
        LazyImgDirective.ctorParameters = () => [
          { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
        ];
        LazyImgDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
              selector: "img",
            }),
          ],
          LazyImgDirective
        );

        /***/
      },

    /***/ 49983:
      /*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ErrorComponent: () =>
            /* binding */ ErrorComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./error.component.html?ngResource */ 12700);
        /* harmony import */ var _error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./error.component.scss?ngResource */ 87752);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let ErrorComponent = class ErrorComponent {
          constructor() {}
          ngOnInit() {}
        };
        ErrorComponent.ctorParameters = () => [];
        ErrorComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
              selector: "app-error",
              template:
                _error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          ErrorComponent
        );

        /***/
      },

    /***/ 75556:
      /*!**********************************************!*\
  !*** ./src/app/login/child-classes/Coder.ts ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Coder: () => /* binding */ Coder,
          /* harmony export */
        });
        class Coder {
          constructor() {
            this.opacity = 0;
            this.value = 0;
            this.color = "primary";
          }
        }

        /***/
      },

    /***/ 47653:
      /*!***************************************************!*\
  !*** ./src/app/login/child-classes/LoginSteps.ts ***!
  \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Steps: () => /* binding */ Steps,
          /* harmony export */
        });
        class Steps {}
        Steps.INPUT_TEL = 0;
        Steps.VERIFY_CODE = 1;
        Steps.DISPLAY_NAME = 2;
        Steps.GREETING = 3;

        /***/
      },

    /***/ 8066:
      /*!*********************************************!*\
  !*** ./src/app/login/child-classes/User.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ User: () => /* binding */ User,
          /* harmony export */
        });
        class User {
          constructor(u) {
            this._id = "";
            this.displayname = "";
            this.tel = "";
            this._id = u._id;
            this.tel = u.tel || "";
            this.displayname = u.displayname || "";
            // this.validatedon =
            //   u.validatedon == null || u.validatedon == undefined
            //     ? undefined
            //     : moment(u.validatedon);
            this.settings = u.settings || {};
          }
        }

        /***/
      },

    /***/ 34847:
      /*!***********************************************************!*\
  !*** ./src/app/login/child-classes/angular-animations.ts ***!
  \***********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ slide: () => /* binding */ slide,
          /* harmony export */
        });
        /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/animations */ 24851);

        let slide = (0,
        _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("slide", [
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(
            ":enter",
            [
              (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: "translateX(100%)",
                position: "absolute",
              }),
              (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(
                "500ms",
                (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                  transform: "translateX(0)",
                })
              ),
            ]
          ),
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(
            ":leave",
            [
              (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: "translateX(0)",
                position: "absolute",
              }),
              (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(
                "500ms",
                (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                  transform: "translateX(-100%)",
                })
              ),
            ]
          ),
        ]);

        /***/
      },

    /***/ 249:
      /*!************************************************************************************!*\
  !*** ./src/app/login/child-classes/displayname-card/displayname-card.component.ts ***!
  \************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DisplaynameCardComponent: () =>
            /* binding */ DisplaynameCardComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _displayname_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./displayname-card.component.html?ngResource */ 96000
          );
        /* harmony import */ var _displayname_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./displayname-card.component.scss?ngResource */ 41871
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./../../../services/auth.service */ 37556);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let DisplaynameCardComponent = class DisplaynameCardComponent {
          constructor(auth) {
            this.auth = auth;
          }
          ngOnInit() {}
          back() {
            this.auth.loginstep = 1;
          }
        };
        DisplaynameCardComponent.ctorParameters = () => [
          {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
          },
        ];
        DisplaynameCardComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "uwu-displayname-card",
              template:
                _displayname_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _displayname_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          DisplaynameCardComponent
        );

        /***/
      },

    /***/ 31632:
      /*!******************************************************************************!*\
  !*** ./src/app/login/child-classes/greeting-card/greeting-card.component.ts ***!
  \******************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ GreetingCardComponent: () =>
            /* binding */ GreetingCardComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _greeting_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./greeting-card.component.html?ngResource */ 87484
          );
        /* harmony import */ var _greeting_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./greeting-card.component.scss?ngResource */ 64982
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./../../../services/auth.service */ 37556);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let GreetingCardComponent = class GreetingCardComponent {
          constructor(auth) {
            this.auth = auth;
          }
          ngOnInit() {}
        };
        GreetingCardComponent.ctorParameters = () => [
          {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
          },
        ];
        GreetingCardComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "xoxo-greeting-card",
              template:
                _greeting_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _greeting_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          GreetingCardComponent
        );

        /***/
      },

    /***/ 22698:
      /*!****************************************************************************!*\
  !*** ./src/app/login/child-classes/smscode-card/smscode-card.component.ts ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SmscodeCardComponent: () =>
            /* binding */ SmscodeCardComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _smscode_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./smscode-card.component.html?ngResource */ 91593
          );
        /* harmony import */ var _smscode_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./smscode-card.component.scss?ngResource */ 2014
          );
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./../../../services/auth.service */ 37556);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let SmscodeCardComponent = class SmscodeCardComponent {
          constructor(auth) {
            this.auth = auth;
          }
          back() {
            this.auth.loginstep = 0;
            this.auth.msg = {};
            this.auth.code = "";
          }
        };
        SmscodeCardComponent.ctorParameters = () => [
          {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
          },
        ];
        SmscodeCardComponent.propDecorators = {
          smsscodeinput: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
              args: ["smscodeinput"],
            },
          ],
        };
        SmscodeCardComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
              selector: "uwu-smscode-card",
              template:
                _smscode_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _smscode_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          SmscodeCardComponent
        );

        /***/
      },

    /***/ 20807:
      /*!********************************************************************!*\
  !*** ./src/app/login/child-classes/tel-card/tel-card.component.ts ***!
  \********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TelCardComponent: () =>
            /* binding */ TelCardComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _tel_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./tel-card.component.html?ngResource */ 93582
          );
        /* harmony import */ var _tel_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./tel-card.component.scss?ngResource */ 52044
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! src/app/services/auth.service */ 37556);

        let TelCardComponent = class TelCardComponent {
          constructor(auth) {
            this.auth = auth;
            this.telformats = [
              "XXX-XXX-XXXX",
              "04XX XXX XXX",
              "0X XX XX XX XX",
              "1XX XXXX XXXX",
            ];
            this.telformaxidx = 0;
          }
          ngOnInit() {
            setInterval(() => {
              this.telformaxidx = Math.floor(Math.random() * 4);
            }, 3500);
          }
        };
        TelCardComponent.ctorParameters = () => [
          {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
          },
        ];
        TelCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "uwu-tel-card",
              template:
                _tel_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _tel_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          TelCardComponent
        );

        /***/
      },

    /***/ 98458:
      /*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LoginComponent: () =>
            /* binding */ LoginComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./login.component.html?ngResource */ 82010);
        /* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./login.component.scss?ngResource */ 89444);
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./../services/auth.service */ 37556);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @ionic/angular */ 93819);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _child_classes_angular_animations__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./child-classes/angular-animations */ 34847);

        let LoginComponent = class LoginComponent {
          constructor(toast, auth) {
            this.toast = toast;
            this.auth = auth;
          }
          ngOnInit() {
            setTimeout(() => {
              document.querySelector("app-logo svg")?.classList.add("active");
            });
          }
        };
        LoginComponent.ctorParameters = () => [
          { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
          {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
          },
        ];
        LoginComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
              selector: "app-login",
              template:
                _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              animations: [
                _child_classes_angular_animations__WEBPACK_IMPORTED_MODULE_3__.slide,
              ],
              styles: [
                _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          LoginComponent
        );

        /***/
      },

    /***/ 84657:
      /*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LogoComponent: () => /* binding */ LogoComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _logo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./logo.component.html?ngResource */ 39451);
        /* harmony import */ var _logo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./logo.component.scss?ngResource */ 71170);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let LogoComponent = class LogoComponent {
          constructor() {}
          ngOnInit() {}
          ngAfterViewInit() {}
        };
        LogoComponent.ctorParameters = () => [];
        LogoComponent.propDecorators = {
          width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        };
        LogoComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
              selector: "app-logo",
              template:
                _logo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              standalone: true,
              styles: [
                _logo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          LogoComponent
        );

        /***/
      },

    /***/ 19506:
      /*!************************************************!*\
  !*** ./src/app/portfolio/child-classes/App.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ App: () => /* binding */ App,
          /* harmony export */ Timeline: () => /* binding */ Timeline,
          /* harmony export */
        });
        class App {
          constructor(name = "", originator = "", features = []) {
            this.name = "";
            this.description = "";
            this.originator = "";
            this.collaborators = [];
            this.features = [];
            this.timeline = new Timeline();
            this.initiated = false;
            this.deleting = false;
            this.name = name || "";
            this.originator = originator || "";
            this.features = features;
            this._id = undefined;
          }
        }
        class Timeline extends Array {
          constructor() {
            super();
            return new Array(
              {
                description: "MVP",
                isDone: false,
                inProgress: false,
              },
              {
                description: "Growth",
                isDone: false,
                inProgress: false,
              },
              {
                description: "Revenue",
                isDone: false,
                inProgress: false,
              },
              {
                description: "Profit",
                isDone: false,
                inProgress: false,
              }
            );
          }
        }

        /***/
      },

    /***/ 39:
      /*!******************************************************!*\
  !*** ./src/app/portfolio/child-classes/AppStatus.ts ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FeatureStatus: () => /* binding */ FeatureStatus,
          /* harmony export */ ViewStatus: () => /* binding */ ViewStatus,
          /* harmony export */
        });
        class FeatureStatus {
          constructor() {
            this.deleting = {};
            this.saving = false;
            this.editing = false;
            this.adding = false;
          }
        }
        class ViewStatus {
          constructor() {
            this.fab = false;
            this.deleteapp = false;
            this.appdetail = false;
            this.newapp = false;
            this.isSidebarOpen = false;
            this.newfeature = false;
          }
        }

        /***/
      },

    /***/ 37837:
      /*!****************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/app-detail-modal/app-detail-modal.component.ts ***!
  \****************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppDetailModalComponent: () =>
            /* binding */ AppDetailModalComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _app_detail_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./app-detail-modal.component.html?ngResource */ 27230
          );
        /* harmony import */ var _app_detail_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./app-detail-modal.component.scss?ngResource */ 57764
          );
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../services/AppAssistant */ 34168);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! swiper */ 63587);

        swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
          swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
          swiper__WEBPACK_IMPORTED_MODULE_3__.Keyboard,
          swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
          swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar,
          swiper__WEBPACK_IMPORTED_MODULE_3__.Zoom,
          swiper__WEBPACK_IMPORTED_MODULE_3__.EffectCoverflow,
        ]);
        let AppDetailModalComponent = class AppDetailModalComponent {
          constructor(apps) {
            this.apps = apps;
            this.slideOpts = {
              initialSlide: 1,
              speed: 400,
            };
          }
        };
        AppDetailModalComponent.ctorParameters = () => [
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__.AppAssistant,
          },
        ];
        AppDetailModalComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
              selector: "app-app-detail-modal",
              template:
                _app_detail_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _app_detail_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          AppDetailModalComponent
        );

        /***/
      },

    /***/ 1677:
      /*!**************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/createapp-modal/createapp-modal.component.ts ***!
  \**************************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CreateappModalComponent: () =>
            /* binding */ CreateappModalComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _createapp_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./createapp-modal.component.html?ngResource */ 77054
          );
        /* harmony import */ var _createapp_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./createapp-modal.component.scss?ngResource */ 55697
          );
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../services/AppAssistant */ 34168);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../App */ 19506);

        let CreateappModalComponent = class CreateappModalComponent {
          constructor(apps) {
            this.apps = apps;
            this.slides = ["App Name", "Timeline", "All done"];
            this.animate = false;
            this.bgImage = "";
          }
          ngOnInit() {
            this.bgImage = `url(../../../../assets/images/backgrounds/bg-${Math.floor(
              Math.random() * 35
            )}.jpg)`;
            setInterval(() => {
              const idx = Math.floor(Math.random() * 35);
              this.bgImage = `url(../../../../assets/images/backgrounds/bg-${idx}.jpg)`;
            }, 5000);
          }
          slideNext() {
            this.swiper.swiperRef.slideNext(400);
          }
          slidePrev() {
            this.swiper.swiperRef.slidePrev(400);
          }
          close() {
            this.apps.stagingApp = new _App__WEBPACK_IMPORTED_MODULE_3__.App();
            this.apps.views.newapp = false;
            this.animate = false;
          }
          slideChanged(event) {
            if (event[0].activeIndex == 1) {
              this.animate = true;
            }
            this.title.nativeElement.innerHTML =
              this.slides[event[0].activeIndex];
          }
        };
        CreateappModalComponent.ctorParameters = () => [
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__.AppAssistant,
          },
        ];
        CreateappModalComponent.propDecorators = {
          swiper: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
              args: ["swiper", { static: false }],
            },
          ],
          title: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
              args: [
                "title",
                { read: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
              ],
            },
          ],
        };
        CreateappModalComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "app-createapp-modal",
              template:
                _createapp_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _createapp_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          CreateappModalComponent
        );

        /***/
      },

    /***/ 56824:
      /*!********************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/delete-modal/delete-modal.component.ts ***!
  \********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DeleteModalComponent: () =>
            /* binding */ DeleteModalComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _delete_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./delete-modal.component.html?ngResource */ 24911
          );
        /* harmony import */ var _delete_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./delete-modal.component.scss?ngResource */ 86701
          );
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../services/AppAssistant */ 34168);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let DeleteModalComponent = class DeleteModalComponent {
          constructor(apps) {
            this.apps = apps;
          }
        };
        DeleteModalComponent.ctorParameters = () => [
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__.AppAssistant,
          },
        ];
        DeleteModalComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "app-delete-modal",
              template:
                _delete_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _delete_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          DeleteModalComponent
        );

        /***/
      },

    /***/ 16075:
      /*!********************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/fab-contents/fab-contents.component.ts ***!
  \********************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FabContentsComponent: () =>
            /* binding */ FabContentsComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _fab_contents_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./fab-contents.component.html?ngResource */ 22483
          );
        /* harmony import */ var _fab_contents_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./fab-contents.component.scss?ngResource */ 83338
          );
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../services/AppAssistant */ 34168);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let FabContentsComponent = class FabContentsComponent {
          constructor(apps) {
            this.apps = apps;
          }
        };
        FabContentsComponent.ctorParameters = () => [
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__.AppAssistant,
          },
        ];
        FabContentsComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "app-fab-contents",
              template:
                _fab_contents_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _fab_contents_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          FabContentsComponent
        );

        /***/
      },

    /***/ 96784:
      /*!******************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/featurelist/featurelist.component.ts ***!
  \******************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FeaturelistComponent: () =>
            /* binding */ FeaturelistComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _featurelist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./featurelist.component.html?ngResource */ 8860
          );
        /* harmony import */ var _featurelist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./featurelist.component.scss?ngResource */ 12529
          );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! rxjs */ 76317);
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../services/AppAssistant */ 34168);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let FeaturelistComponent = class FeaturelistComponent {
          constructor(apps) {
            this.apps = apps;
            this.deleteLoading = {};
          }
          addFeature() {
            this.apps.features.saving = true;
            let listener =
              new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
            this.apps.newFeatureSaved(listener);
            listener.subscribe((update) => {
              if (update) {
                this.apps.features.saving = false;
              }
            });
          }
          deleteFeature(feature) {
            this.deleteLoading[feature] = true;
            let listener =
              new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
            this.apps.deleteFeatureClicked(feature, listener);
            listener.subscribe((update) => {
              if (update) {
                this.deleteLoading[feature] = false;
                listener.unsubscribe();
              }
            });
          }
        };
        FeaturelistComponent.ctorParameters = () => [
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__.AppAssistant,
          },
        ];
        FeaturelistComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
              selector: "app-featurelist",
              template:
                _featurelist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _featurelist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          FeaturelistComponent
        );

        /***/
      },

    /***/ 15131:
      /*!*************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/subcribe-callbacks/CreateApp.ts ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CreateApp: () => /* binding */ CreateApp,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../App */ 19506);

        class CreateApp {}

        CreateApp.success = function (appname, originator, res) {
          var _this = this;

          this.stagingApp = new _App__WEBPACK_IMPORTED_MODULE_1__.App();

          if (res.insertedId && res.insertedId.length) {
            (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              let toastr = yield _this.toast.create({
                message: `Congratz ${originator}, this is the beginning of ${appname}!`,
                duration: 2000,
              });
              toastr.present();
            })();

            this.refresh();
            this.views.newapp = false;
          } else {
            (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              let toastr = yield _this.toast.create({
                message: "Something went wrong. We'll take theblame",
                duration: 2000,
              });
              toastr.present();
            })();
          }
        };

        /***/
      },

    /***/ 17406:
      /*!*************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/subcribe-callbacks/DeleteApp.ts ***!
  \*************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DeleteApp: () => /* binding */ DeleteApp,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ../App */ 19506);

        class DeleteApp {}

        DeleteApp.success = function (app, res) {
          var _this = this;

          this.stagingApp = new _App__WEBPACK_IMPORTED_MODULE_1__.App();

          if (res.deletedCount == 1) {
            (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              let toastr = yield _this.toast.create({
                message: `${app.name} Deleted.`,
                duration: 2000,
              });
              toastr.present();
            })();

            this.set(res.apps);
          } else {
            (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              let toastr = yield _this.toast.create({
                message: "Something went wrong. We'll take the blame",
                duration: 2000,
              });
              toastr.present();
            })();
          }
        };

        /***/
      },

    /***/ 9269:
      /*!*****************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/subcribe-callbacks/DeleteFeature.ts ***!
  \*****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DeleteFeature: () => /* binding */ DeleteFeature,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );

        class DeleteFeature {
          constructor() {}
        }

        DeleteFeature.success = function (idx, listener, res) {
          var _this = this;

          if (res.modifiedCount == 1) {
            (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              let toastr = yield _this.toast.create({
                message: "Feature deleted. Wasn't feeling it?",
                duration: 2000,
              });
              toastr.present();
            })();

            this.selected.features.splice(idx, 1);
            this.selected.features = [...this.selected.features];
          }

          listener.next(true);
        };

        /***/
      },

    /***/ 20298:
      /*!*******************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/subcribe-callbacks/InitiateStartup.ts ***!
  \*******************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ InitiateStartup: () =>
            /* binding */ InitiateStartup,
          /* harmony export */
        });
        class InitiateStartup {}
        InitiateStartup.success = function (res) {
          if (res.modifiedCount == 1) {
            this.selected.initiated = true;
          } else {
            this.selected.initiated = false;
          }
        };
        InitiateStartup.error = function (error) {
          this.selected.initiated = false;
        };

        /***/
      },

    /***/ 46685:
      /*!**************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/subcribe-callbacks/NewFeature.ts ***!
  \**************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ NewFeature: () => /* binding */ NewFeature,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );

        class NewFeature {}

        NewFeature.success = function (listener, res) {
          var _this = this;

          if (res.modifiedCount == 1) {
            (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              const toastr = yield _this.toast.create({
                message: "Feature added.  Keep it up :)",
                duration: 2000,
              });
              toastr.present();
            })();

            this.selected.features = [this.stagingFeature].concat(
              this.selected.features
            );
            this.stagingFeature = "";
          }

          listener.next(true);
        };

        /***/
      },

    /***/ 35139:
      /*!***************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/subcribe-callbacks/RefreshApps.ts ***!
  \***************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ RefreshApps: () => /* binding */ RefreshApps,
          /* harmony export */
        });
        class RefreshApps {}
        RefreshApps.success = function (refresher, res) {
          if (refresher) {
            this.refresher.nativeElement.complete();
          }
          this.set(res);
        };

        /***/
      },

    /***/ 89557:
      /*!*********************************************************************!*\
  !*** ./src/app/portfolio/child-classes/subcribe-callbacks/index.ts ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ CreateApp: () =>
            /* reexport safe */ _CreateApp__WEBPACK_IMPORTED_MODULE_0__.CreateApp,
          /* harmony export */ DeleteApp: () =>
            /* reexport safe */ _DeleteApp__WEBPACK_IMPORTED_MODULE_1__.DeleteApp,
          /* harmony export */ DeleteFeature: () =>
            /* reexport safe */ _DeleteFeature__WEBPACK_IMPORTED_MODULE_2__.DeleteFeature,
          /* harmony export */ InitiateStartup: () =>
            /* reexport safe */ _InitiateStartup__WEBPACK_IMPORTED_MODULE_3__.InitiateStartup,
          /* harmony export */ NewFeature: () =>
            /* reexport safe */ _NewFeature__WEBPACK_IMPORTED_MODULE_4__.NewFeature,
          /* harmony export */ RefreshApps: () =>
            /* reexport safe */ _RefreshApps__WEBPACK_IMPORTED_MODULE_5__.RefreshApps,
          /* harmony export */
        });
        /* harmony import */ var _CreateApp__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./CreateApp */ 15131);
        /* harmony import */ var _DeleteApp__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./DeleteApp */ 17406);
        /* harmony import */ var _DeleteFeature__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./DeleteFeature */ 9269);
        /* harmony import */ var _InitiateStartup__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./InitiateStartup */ 20298);
        /* harmony import */ var _NewFeature__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./NewFeature */ 46685);
        /* harmony import */ var _RefreshApps__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./RefreshApps */ 35139);

        /***/
      },

    /***/ 29412:
      /*!************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/timeline/timeline.component.ts ***!
  \************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TimelineComponent: () =>
            /* binding */ TimelineComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./timeline.component.html?ngResource */ 38082
          );
        /* harmony import */ var _timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./timeline.component.scss?ngResource */ 19069
          );
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../../services/AppAssistant */ 34168);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../App */ 19506);

        let TimelineComponent = class TimelineComponent {
          constructor(apps) {
            this.apps = apps;
            this.static = false;
            this.animate = false;
            this.app = new _App__WEBPACK_IMPORTED_MODULE_3__.App();
          }
          ngOnInit() {
            this.app = this.static ? this.apps.stagingApp : this.apps.selected;
          }
          untouched(event, i) {
            return (
              !event.isDone &&
              !event.inProgress &&
              (i == 0 || this.app.timeline[i - 1].isDone)
            );
          }
          reverse(event, i) {
            return i % 2 != 0 && (this.untouched(event, i) || event.inProgress);
          }
          getAnimation(index) {
            let str = this.animate
              ? `bounce-in-fwd 1.1s ${0.6 + 1.5 * index}s`
              : "";
            return str;
          }
        };
        TimelineComponent.ctorParameters = () => [
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_2__.AppAssistant,
          },
        ];
        TimelineComponent.propDecorators = {
          static: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
          animate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
        };
        TimelineComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "app-timeline",
              template:
                _timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          TimelineComponent
        );

        /***/
      },

    /***/ 81576:
      /*!*******************************************************!*\
  !*** ./src/app/portfolio/child-classes/togglelink.ts ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ToggleLink: () => /* binding */ ToggleLink,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../../services/AppAssistant */ 34168);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let ToggleLink = class ToggleLink {
          constructor(apps) {
            this.apps = apps;
            this.styles = {
              add: {
                position: "absolute",
                top: "0",
                right: "0",
                padding: "5px 5px 0 0",
              },
              edit: {
                position: "absolute",
                top: "0",
                left: "0",
                padding: "5px 0 0 5px",
              },
            };
          }
          clicked() {
            if (this.verb == "add") {
              this.apps.features.adding = !this.apps.features.adding;
            } else {
              this.apps.features.editing = !this.apps.features.editing;
            }
          }
        };
        ToggleLink.ctorParameters = () => [
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_0__.AppAssistant,
          },
        ];
        ToggleLink.propDecorators = {
          verb: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
              args: ["verb"],
            },
          ],
        };
        ToggleLink = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
              selector: "toggle-link",
              template: `<div [style]="this.styles[verb]">
    <ion-button
      [disabled]="
        verb == 'edit'
          ? apps.features.adding
          : apps.features.saving || apps.features.editing
      "
      (click)="clicked()"
      fill="clear"
      size="small">
      <span>{{
        verb == 'add'
          ? apps.features.adding
            ? 'Done'
            : 'Add'
          : apps.features.editing
          ? 'Done'
          : 'Edit'
      }}</span>
    </ion-button>
  </div>`,
            }),
          ],
          ToggleLink
        );

        /***/
      },

    /***/ 15574:
      /*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ PortfolioComponent: () =>
            /* binding */ PortfolioComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./portfolio.component.html?ngResource */ 29324
          );
        /* harmony import */ var _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./portfolio.component.scss?ngResource */ 12586
          );
        /* harmony import */ var _services_theme_switcher_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./../services/theme-switcher.service */ 10372
          );
        /* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./../services/globals.service */ 70660);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @ionic/angular */ 93819);
        /* harmony import */ var _services_AppAssistant__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../services/AppAssistant */ 34168);
        /* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! swiper */ 63587);

        swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
          swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay,
          swiper__WEBPACK_IMPORTED_MODULE_5__.Keyboard,
          swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
          swiper__WEBPACK_IMPORTED_MODULE_5__.Scrollbar,
          swiper__WEBPACK_IMPORTED_MODULE_5__.Zoom,
          swiper__WEBPACK_IMPORTED_MODULE_5__.EffectCoverflow,
        ]);
        let PortfolioComponent = class PortfolioComponent {
          constructor(globals, themeService, toast, apps) {
            this.globals = globals;
            this.themeService = themeService;
            this.toast = toast;
            this.apps = apps;
          }
          ngAfterViewInit() {
            this.fab = document.getElementById("fab");
            this.apps.setRefresherViewChild(this.refresher);
            // get all apps from monogdb
            //this.apps.refresh(false);
          }
          getSize(element) {
            element.style.maxHeight =
              element.style.maxHeight === "1000px" ? "0px" : "1000px";
          }
          screenClicked(event) {
            this.apps.deleting = false;
            if (this.fab != null) {
              this.fab.close();
            }
          }
        };
        PortfolioComponent.ctorParameters = () => [
          {
            type: _services_globals_service__WEBPACK_IMPORTED_MODULE_3__.GlobalsService,
          },
          {
            type: _services_theme_switcher_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSwitcherService,
          },
          { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
          {
            type: _services_AppAssistant__WEBPACK_IMPORTED_MODULE_4__.AppAssistant,
          },
        ];
        PortfolioComponent.propDecorators = {
          refresher: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
              args: [
                "refresher",
                { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef },
              ],
            },
          ],
        };
        PortfolioComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
              selector: "app-portfolio",
              template:
                _portfolio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              animations: [],
              styles: [
                _portfolio_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          PortfolioComponent
        );

        /***/
      },

    /***/ 34168:
      /*!******************************************!*\
  !*** ./src/app/services/AppAssistant.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppAssistant: () => /* binding */ AppAssistant,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @ionic/angular */ 93819);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! src/app/services/globals.service */ 70660);
        /* harmony import */ var _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../portfolio/child-classes/subcribe-callbacks */ 89557
          );
        /* harmony import */ var _portfolio_child_classes_App__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../portfolio/child-classes/App */ 19506);
        /* harmony import */ var _portfolio_child_classes_AppStatus__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../portfolio/child-classes/AppStatus */ 39);
        /* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! src/app/services/api.service */ 5830);
        /* harmony import */ var src_app_services_lib_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! src/app/services/lib.service */ 26417);
        /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! src/app/services/auth.service */ 37556);
        /* harmony import */ var _dispatcher_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ./dispatcher.service */ 80533);

        let AppAssistant = class AppAssistant {
          constructor(api, lib, globals, toast, auth, d) {
            this.api = api;
            this.lib = lib;
            this.globals = globals;
            this.toast = toast;
            this.auth = auth;
            this.d = d;
            this.apps = [];
            this.groupedApps = {};
            this.selected =
              new _portfolio_child_classes_App__WEBPACK_IMPORTED_MODULE_3__.App();
            this.selectedForDelete =
              new _portfolio_child_classes_App__WEBPACK_IMPORTED_MODULE_3__.App();
            this.collaborators = [];
            this.stagingFeature = "";
            this.stagingApp =
              new _portfolio_child_classes_App__WEBPACK_IMPORTED_MODULE_3__.App();
            this.loading = true;
            this.deleting = false;
            this.creating = false;
            this.views =
              new _portfolio_child_classes_AppStatus__WEBPACK_IMPORTED_MODULE_4__.ViewStatus();
            this.features =
              new _portfolio_child_classes_AppStatus__WEBPACK_IMPORTED_MODULE_4__.FeatureStatus();
            this.d.appRefresh$.subscribe((val = false) => {
              this.refresh(val);
            });
          }

          refresh(useRefresher = false) {
            var _this = this;

            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              _this.loading = true;

              _this.api
                .get("apps/fetch")
                .subscribe(
                  _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__.RefreshApps.success.bind(
                    _this,
                    useRefresher
                  )
                );
            })();
          }

          add() {
            this.views.newapp = true;
          }

          setRefresherViewChild(refresher) {
            this.refresher = refresher;
          }

          set(apps) {
            this.groupedApps = this.lib._.groupBy(
              this.lib._.forEach(
                apps,
                (e) => (e.originator = !e.originator ? "Lisa" : e.originator)
              ),
              "originator"
            );
            this.collaborators = Object.keys(this.groupedApps);
            this.loading = false;
          }

          confirmDelete(event, app) {
            this.selectedForDelete = app;
            this.views.deleteapp = true;
            event.stopPropagation();
          }

          isDeleting(event) {
            event.stopPropagation();
            this.deleting = !this.deleting;
          }

          delete() {
            this.selectedForDelete.deleting = true;
            this.api
              .delete("apps/delete", {
                body: this.selectedForDelete,
              })
              .subscribe(
                _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__.DeleteApp.success.bind(
                  this,
                  { ...this.selectedForDelete }
                )
              );
            this.views.deleteapp = false;
          }

          cancelDelete() {
            this.views.deleteapp = false;
            this.selectedForDelete =
              new _portfolio_child_classes_App__WEBPACK_IMPORTED_MODULE_3__.App();
          }

          appSelected(app) {
            this.views.appdetail = true;
            this.selected = app;
          }

          create() {
            this.creating = true;
            this.stagingApp.originator = this.auth.user.displayname;
            this.api
              .post("apps/save", { ...this.stagingApp })
              .subscribe(
                _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__.CreateApp.success.bind(
                  this,
                  this.stagingApp.name,
                  this.stagingApp.originator
                )
              );
            this.stagingApp =
              new _portfolio_child_classes_App__WEBPACK_IMPORTED_MODULE_3__.App();
          }

          deleteFeatureClicked(feature, listener) {
            let idx = this.selected.features.findIndex((e) => e == feature);
            let body = {
              _id: this.selected._id,
              feature: feature,
            };

            if (idx != -1) {
              this.api
                .post("apps/features/delete", body)
                .subscribe(
                  _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__.DeleteFeature.success.bind(
                    this,
                    idx,
                    listener
                  )
                );
            }
          }

          newFeatureSaved(listener) {
            var _this2 = this;

            // check:  empty input
            if (this.stagingFeature == "") {
              listener.next(true);
            } // check:  duplicates
            else if (
              this.selected.features.indexOf(this.stagingFeature) != -1
            ) {
              listener.next(true);

              (0,
              C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ])(function* () {
                let toastr = yield _this2.toast.create({
                  message: "This already exists.  Don't give up! :)",
                  duration: 2000,
                });
                toastr.present();
              })();
            } else {
              this.api
                .put("apps/features/save", {
                  _id: this.selected._id,
                  feature: this.stagingFeature,
                })
                .subscribe(
                  _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__.NewFeature.success.bind(
                    this,
                    listener
                  )
                );
            }
          }

          initiateStartupClicked() {
            this.api
              .post("apps/initiate", {
                _id: this.selected._id,
              })
              .subscribe(
                _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__.InitiateStartup.success.bind(
                  this
                ),
                _portfolio_child_classes_subcribe_callbacks__WEBPACK_IMPORTED_MODULE_2__.InitiateStartup.error.bind(
                  this
                )
              );
          }

          setInProgress(event, idx) {
            this.api
              .post("apps/timeline/initiate", {
                app: this.selected,
                eventindex: idx,
                event: event,
              })
              .subscribe((res) => {
                if ((res.modifiedCount = 1)) {
                  event.inProgress = true;
                }
              });
          }

          setIsDone(event, idx) {
            this.api
              .post("apps/timeline/complete", {
                app: this.selected,
                eventindex: idx,
                event: event,
              })
              .subscribe((res) => {
                if ((res.modifiedCount = 1)) {
                  event.inProgress = false;
                  event.isDone = true;
                }
              });
          }
        };

        AppAssistant.ctorParameters = () => [
          {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService,
          },
          {
            type: src_app_services_lib_service__WEBPACK_IMPORTED_MODULE_6__.LibService,
          },
          {
            type: src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_1__.GlobalsService,
          },
          {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController,
          },
          {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
          },
          {
            type: _dispatcher_service__WEBPACK_IMPORTED_MODULE_8__.DispatcherService,
          },
        ];

        AppAssistant = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
              providedIn: "any",
            }),
          ],
          AppAssistant
        );

        /***/
      },

    /***/ 5830:
      /*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ApiService: () => /* binding */ ApiService,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! src/app/services/globals.service */ 70660);
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/common/http */ 58987);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! axios */ 24294);
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            axios__WEBPACK_IMPORTED_MODULE_1__
          );

        let ApiService = class ApiService {
          constructor(http, g, httpBackendHandler) {
            this.http = http;
            this.g = g;
            this.httpBackendHandler = httpBackendHandler;
            this.httpBackend =
              new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient(
                httpBackendHandler
              );
            this.axios = axios__WEBPACK_IMPORTED_MODULE_1___default().create();
          }
          get(path) {
            return this.http.get(`${this.g.api}/${path}`);
          }
          post(path, body) {
            return this.http.post(`${this.g.api}/${path}`, body);
          }
          put(path, body) {
            return this.http.put(`${this.g.api}/${path}`, body);
          }
          delete(path, options) {
            return this.http.delete(`${this.g.api}/${path}`, options);
          }
        };
        ApiService.ctorParameters = () => [
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient,
          },
          {
            type: src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService,
          },
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpBackend,
          },
        ];
        ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
              providedIn: "root",
            }),
          ],
          ApiService
        );

        /***/
      },

    /***/ 37556:
      /*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AuthService: () => /* binding */ AuthService,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./dispatcher.service */ 80533);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! rxjs */ 54363);
        /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./api.service */ 5830);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! @angular/router */ 60124);
        /* harmony import */ var _lib_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./lib.service */ 26417);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @ionic/angular */ 93819);
        /* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./globals.service */ 70660);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _login_child_classes_User__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ../login/child-classes/User */ 8066);
        /* harmony import */ var _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ../login/child-classes/LoginSteps */ 47653);
        /* harmony import */ var _login_child_classes_Coder__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ../login/child-classes/Coder */ 75556);

        let AuthService = class AuthService {
          constructor(globals, toast, lib, router, api, d) {
            this.globals = globals;
            this.toast = toast;
            this.lib = lib;
            this.router = router;
            this.api = api;
            this.d = d;
            this.creatinginprogress = false;
            this.verifyingcode = false;
            this.code = "";
            this.loginstep = 0;
            this.msg = null;
            this.user =
              new _login_child_classes_User__WEBPACK_IMPORTED_MODULE_5__.User(
                {}
              );
            this.accountRequestLoading = false;
            this.codeprogress =
              new _login_child_classes_Coder__WEBPACK_IMPORTED_MODULE_7__.Coder();
          }

          saveDisplayName() {
            return this.api.put("user/displayname", {
              _id: this.user._id,
              displayname: this.user.displayname,
            });
          }

          initUser() {
            var _this = this;

            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              console.debug("INIT_USER");
              const usr = localStorage.getItem("user");

              if (!usr) {
                _this.router.navigate(["/login"]);

                _this.loginstep =
                  _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__.Steps.INPUT_TEL;
                console.debug("INPUT_TEL");
              } else {
                const u = JSON.parse(usr);
                const userdata = yield (0,
                rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(
                  _this.api.post("user/fetch", u)
                );

                _this.setUser(userdata);

                if (
                  _this.user.authenticated ||
                  window.location.href.indexOf("localhost") != -1
                ) {
                  console.debug("USER IS AUTHENTICATED", _this.user);

                  _this.tohome();
                } else {
                  _this.router.navigate(["/login"]);

                  _this.loginstep =
                    _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__.Steps.VERIFY_CODE;

                  _this.requestcode();
                }
              }
            })();
          }

          setUser(u) {
            this.user =
              new _login_child_classes_User__WEBPACK_IMPORTED_MODULE_5__.User(
                u
              );
            const then = this.lib.moment().subtract(7, "days");
            const now = this.lib.moment();
            this.user.authenticated = this.user.validatedon?.isBetween(
              then,
              now
            );
            console.debug(
              "7 days",
              this.user.validatedon?.isBetween(then, now)
            );
            this.user.auth_date_diff = now.diff(
              this.lib.moment(this.user.validatedon)
            );
            localStorage.setItem("user", JSON.stringify(this.user));
            const bgurl = `url(../assets/images/backgrounds/bg-${this.user.settings.bgindex}.jpg)`;
            this.globals.backgroundImage$.next(bgurl);
            this.d.user$.next(this.user);
          }

          fetchUser(u) {
            return this.api.post("user/fetch", u);
          }

          requestcode() {
            this.loginstep =
              _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__.Steps.VERIFY_CODE;
            this.api
              .post("/twilio/coderequest", {
                tel: this.user.tel,
              })
              .subscribe((res) => {
                this.msg = res;
              }); // request code
          }

          codechanged(event) {
            var _this2 = this;

            if (this.code.length < 6) {
              return;
            } else {
              const progressbar = document.querySelector(".progress-bar");
              progressbar.style.opacity = "1";
              this.codeprogress.value = 0;
              this.codeprogress.interval = setInterval(
                /*#__PURE__*/ (0,
                C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ])(function* () {
                  _this2.codeprogress.value += 0.1;

                  if (_this2.codeprogress.value >= 1) {
                    clearInterval(_this2.codeprogress.interval);

                    if (_this2.msg.code == _this2.code) {
                      _this2.user.validatedon = _this2.lib.moment();

                      _this2.api
                        .post("user/validate", {
                          _id: _this2.user._id,
                          validatedon: _this2.user.validatedon,
                        })
                        .subscribe();

                      _this2.codeprogress.color = "success";

                      _this2.d.appRefresh$.next(false);

                      if (_this2.user.displayname == "") {
                        _this2.loginstep =
                          _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__.Steps.DISPLAY_NAME;
                      } else {
                        _this2.loginstep =
                          _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__.Steps.GREETING;
                      }
                    } else {
                      _this2.codeprogress.color = "danger";
                      const toastMsg = yield _this2.toast.create({
                        message: `Incorrect code, pls enter the code sent to ${_this2.user.tel}`,
                        duration: 2000,
                        position: "bottom",
                        translucent: true,
                        animated: true,
                        icon: "alert-outline",
                        color: "warning",
                      });
                      yield toastMsg.present().then((v) => {
                        _this2.codeprogress.color = "";
                        _this2.codeprogress.value = 0;
                      });
                    }
                  }
                }).bind(this),
                50
              );
            }
          }

          telsubmitted() {
            this.accountRequestLoading = true;
            this.accountexists();
          }

          accountexists() {
            var _this3 = this;

            this.api
              .post("user/exists", {
                tel: this.user.tel,
              })
              .subscribe(
                /*#__PURE__*/ (function () {
                  var _ref2 = (0,
                  C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
                    "default"
                  ])(function* (res) {
                    _this3.accountRequestLoading = false;

                    if (res == null) {
                      // account doesnt exist
                      _this3.requestcode();
                    } else {
                      console.log(res);

                      _this3.setUser(res);

                      if (_this3.user.authenticated) {
                        _this3.loginstep =
                          _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__.Steps.GREETING;
                      } else {
                        _this3.requestcode();
                      }
                    }
                  });

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                })()
              );
          }

          createaccount() {
            this.creatinginprogress = true;
            const usr =
              new _login_child_classes_User__WEBPACK_IMPORTED_MODULE_5__.User({
                tel: this.user.tel,
                displayname: this.user.displayname,
                validatedon: this.lib.moment(),
              });
            this.api.post("user/create", usr).subscribe((res) => {
              if (res.acknowledged == true) {
                usr._id = res.insertedId;
                this.setUser(usr);
                this.loginstep =
                  _login_child_classes_LoginSteps__WEBPACK_IMPORTED_MODULE_6__.Steps.GREETING;
                this.creatinginprogress = false;
              }
            });
          }

          tohome() {
            this.d.appRefresh$.next(false);
            this.router.navigate(["portfolio"]);
          }
        };

        AuthService.ctorParameters = () => [
          {
            type: _globals_service__WEBPACK_IMPORTED_MODULE_4__.GlobalsService,
          },
          {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController,
          },
          {
            type: _lib_service__WEBPACK_IMPORTED_MODULE_3__.LibService,
          },
          {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router,
          },
          {
            type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService,
          },
          {
            type: _dispatcher_service__WEBPACK_IMPORTED_MODULE_1__.DispatcherService,
          },
        ];

        AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
              providedIn: "root",
            }),
          ],
          AuthService
        );

        /***/
      },

    /***/ 80533:
      /*!************************************************!*\
  !*** ./src/app/services/dispatcher.service.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DispatcherService: () =>
            /* binding */ DispatcherService,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! rxjs */ 76317);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let DispatcherService = class DispatcherService {
          constructor() {
            this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(
              {}
            );
            this.pfp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(
              ""
            );
            this.appRefresh$ =
              new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
            this.profileNav$ =
              new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
          }
        };
        DispatcherService.ctorParameters = () => [];
        DispatcherService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
              providedIn: "root",
            }),
          ],
          DispatcherService
        );

        /***/
      },

    /***/ 47535:
      /*!******************************************!*\
  !*** ./src/app/services/foto.service.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ FotoService: () => /* binding */ FotoService,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @capacitor/camera */ 4241);
        /* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @capacitor/filesystem */ 91662);

        let FotoService = class FotoService {
          constructor() {
            this.convertBlobToBase64 = (blob) =>
              new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onerror = reject;

                reader.onload = () => {
                  resolve(reader.result);
                };

                reader.readAsDataURL(blob);
              });
          }

          capture() {
            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              return yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto(
                {
                  quality: 100,
                  allowEditing: true,
                  resultType:
                    _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__
                      .CameraResultType.DataUrl,
                }
              );
            })();
          }

          savePicture(photo) {
            var _this = this;

            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              // Convert photo to base64 format, required by Filesystem API to save
              const base64Data = yield _this.readAsBase64(photo); // Write the file to the data directory

              const fileName = new Date().getTime() + ".jpeg";
              const savedFile =
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile(
                  {
                    path: fileName,
                    data: base64Data,
                    directory:
                      _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__
                        .Directory.Data,
                  }
                ); // Use webPath to display the new image instead of base64 since it's
              // already loaded into memory

              return {
                filepath: fileName,
                webviewPath: photo.webPath,
              };
            })();
          }

          readAsBase64(photo) {
            var _this2 = this;

            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              // Fetch the photo, read as a blob, then convert to base64 format
              const response = yield fetch(photo.webPath);
              const blob = yield response.blob();
              return yield _this2.convertBlobToBase64(blob);
            })();
          }
        };

        FotoService.ctorParameters = () => [];

        FotoService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
              providedIn: "root",
            }),
          ],
          FotoService
        );

        /***/
      },

    /***/ 70660:
      /*!*********************************************!*\
  !*** ./src/app/services/globals.service.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ GlobalsService: () =>
            /* binding */ GlobalsService,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! rxjs */ 76317);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/common */ 94666);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @ionic/angular */ 93819);

        let GlobalsService = class GlobalsService {
          constructor(document, platform) {
            this.document = document;
            this.platform = platform;
            this.backgroundImage$ =
              new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
            this.api = ` https://mydea.vercel.app/api`;
            this.iframe = (() => {
              try {
                if (window.self !== window.top) {
                  let html = this.document.querySelector("html");
                  html.setAttribute("style", "font-size: 3.5vw !important");
                }
                return false;
              } catch (e) {
                return true;
              }
            })();
          }
        };
        GlobalsService.ctorParameters = () => [
          {
            type: Document,
            decorators: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT],
              },
            ],
          },
          { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
        ];
        GlobalsService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
              providedIn: "root",
            }),
          ],
          GlobalsService
        );

        /***/
      },

    /***/ 61143:
      /*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ HttpInterceptorService: () =>
            /* binding */ HttpInterceptorService,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/router */ 60124);
        /* harmony import */ var _globals_service__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./globals.service */ 70660);
        /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./auth.service */ 37556);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let HttpInterceptorService = class HttpInterceptorService {
          constructor(auth, globals, router) {
            this.auth = auth;
            this.globals = globals;
            this.router = router;
          }
          intercept(req, next) {
            if (
              req.url.indexOf(this.globals.api) != -1 &&
              req.url.indexOf("auth") == -1
            ) {
              //let usr = localStorage.getItem('user');
              // if (this.auth.user && !this.auth.user.authenticated) {
              //   this.router.navigate(['/login']);
              // }
              // else {
              //   let u = JSON.parse(usr) as User;
              //   this.api.post('auth/user', u).subscribe((userdata: UserData) => {
              //     this.auth.setUser(userdata);
              //   });
              //   if (!u.authenticated) {
              //     this.router.navigate(['/login']);
              //   } else {
              //     return next.handle(req);
              //   }
              // }
            }
            return next.handle(req);
          }
        };
        HttpInterceptorService.ctorParameters = () => [
          { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
          {
            type: _globals_service__WEBPACK_IMPORTED_MODULE_0__.GlobalsService,
          },
          { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
        ];
        HttpInterceptorService = (0,
        tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
              providedIn: "root",
            }),
          ],
          HttpInterceptorService
        );

        /***/
      },

    /***/ 26417:
      /*!*****************************************!*\
  !*** ./src/app/services/lib.service.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LibService: () => /* binding */ LibService,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! moment */ 56908);
        /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            moment__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! lodash */ 92938);
        /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            lodash__WEBPACK_IMPORTED_MODULE_1__
          );

        let LibService = class LibService {
          constructor() {
            this.moment = moment__WEBPACK_IMPORTED_MODULE_0__;
            this._ = lodash__WEBPACK_IMPORTED_MODULE_1__;
          }
        };
        LibService.ctorParameters = () => [];
        LibService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
              providedIn: "root",
            }),
          ],
          LibService
        );

        /***/
      },

    /***/ 10372:
      /*!****************************************************!*\
  !*** ./src/app/services/theme-switcher.service.ts ***!
  \****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ThemeSwitcherService: () =>
            /* binding */ ThemeSwitcherService,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/common */ 94666);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let ThemeSwitcherService = class ThemeSwitcherService {
          constructor(document) {
            this.document = document;
          }
        };
        ThemeSwitcherService.ctorParameters = () => [
          {
            type: Document,
            decorators: [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT],
              },
            ],
          },
        ];
        ThemeSwitcherService = (0,
        tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
              providedIn: "root",
            }),
          ],
          ThemeSwitcherService
        );

        /***/
      },

    /***/ 3308:
      /*!****************************************************************************!*\
  !*** ./src/app/settings/components/profile-edit/profile-edit.component.ts ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ProfileEditComponent: () =>
            /* binding */ ProfileEditComponent,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _profile_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./profile-edit.component.html?ngResource */ 61605
          );
        /* harmony import */ var _profile_edit_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./profile-edit.component.css?ngResource */ 44262
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @ionic/angular */ 93819);
        /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! src/app/services/auth.service */ 37556);
        /* harmony import */ var src_app_services_dispatcher_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! src/app/services/dispatcher.service */ 80533);

        let ProfileEditComponent = class ProfileEditComponent {
          constructor(auth, toast, d) {
            this.auth = auth;
            this.toast = toast;
            this.d = d;
            this.showClear = true;
            this.modified = false;
            this.saving = false;
          }

          ngAfterViewInit() {
            this.displayNameInput.nativeElement.focus();
          }

          saveDisplayName() {
            this.saving = true;
            this.auth.saveDisplayName().subscribe((res) => {
              this.saving = false;
              this.modified = false;

              if (res.modifiedCount != 1) {
                this.presentToast(
                  "Whoop's something went wrong.  This one's on us.",
                  2000
                );
              } else {
                this.presentToast(
                  `Can't wait to start calling you ${this.auth.user.displayname}!`,
                  2000
                );
                this.d.profileNav$.next("Back");
              }
            });
          }

          presentToast(msg, dur) {
            var _this = this;

            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              const toast = yield _this.toast.create({
                message: msg,
                duration: dur,
              });
              toast.present();
            })();
          }
        };

        ProfileEditComponent.ctorParameters = () => [
          {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
          },
          {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController,
          },
          {
            type: src_app_services_dispatcher_service__WEBPACK_IMPORTED_MODULE_4__.DispatcherService,
          },
        ];

        ProfileEditComponent.propDecorators = {
          displayNameInput: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
              args: [
                "displayNameInput",
                {
                  read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef,
                },
              ],
            },
          ],
        };
        ProfileEditComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
              selector: "app-profile-edit",
              template:
                _profile_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              styles: [
                _profile_edit_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__,
              ],
            }),
          ],
          ProfileEditComponent
        );

        /***/
      },

    /***/ 48606:
      /*!******************************************************************!*\
  !*** ./src/app/settings/components/profile/profile.component.ts ***!
  \******************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ProfileComponent: () =>
            /* binding */ ProfileComponent,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./profile.component.html?ngResource */ 41369);
        /* harmony import */ var _profile_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./profile.component.css?ngResource */ 74808);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! src/app/services/api.service */ 5830);
        /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! src/app/services/auth.service */ 37556);
        /* harmony import */ var src_app_services_dispatcher_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! src/app/services/dispatcher.service */ 80533);
        /* harmony import */ var src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! src/app/services/foto.service */ 47535);

        let ProfileComponent = class ProfileComponent {
          constructor(html, d, foto, auth, api) {
            this.html = html;
            this.d = d;
            this.foto = foto;
            this.auth = auth;
            this.api = api;
            this.pfp = "url(../../../assets/svg/avatar.svg)";
            this.pfp = "url(../../assets/svg/avatar.svg)";
            this.renderProfileImgEditBtn();
          }

          ngOnInit() {
            this.d.user$.subscribe((user) => {
              if (user.settings !== undefined && user.settings.pfp) {
                this.pfp = user.settings.pfp;
              }
            });
          }

          ngAfterViewInit() {
            this.profileImg.el.shadowRoot.appendChild(this.profileImgEdit);
          }

          takePicture() {
            var _this = this;

            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              const image = yield _this.foto.capture();

              _this.saveProfilePic(image);
            })();
          }

          editDisplayName() {
            this.d.profileNav$.next("Edit Display Name");
          }

          saveProfilePic(image) {
            this.auth.user.settings.pfp = image.dataUrl;
            this.pfp = image.dataUrl || "";
            this.api
              .post("settings/save", {
                user: this.auth.user,
                settings: {
                  pfp: image.dataUrl,
                },
              })
              .subscribe();
          }

          renderProfileImgEditBtn() {
            this.profileImgEdit = this.html.createElement("ion-text");
            this.profileImgEdit.innerHTML = "Edit";
            this.profileImgEdit.style.position = "absolute";
            this.profileImgEdit.style.bottom = "5px";
            this.profileImgEdit.style.textAlign = "center";
            this.profileImgEdit.style.width = "100%";
            this.profileImgEdit.style.color = "rgb(66, 140, 255)";
            this.profileImgEdit.style.fontSize = "1rem";
            this.profileImgEdit.style.fontWeight = "normal";
          }
        };

        ProfileComponent.ctorParameters = () => [
          {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2,
          },
          {
            type: src_app_services_dispatcher_service__WEBPACK_IMPORTED_MODULE_5__.DispatcherService,
          },
          {
            type: src_app_services_foto_service__WEBPACK_IMPORTED_MODULE_6__.FotoService,
          },
          {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
          },
          {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService,
          },
        ];

        ProfileComponent.propDecorators = {
          profileImg: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
              args: ["profileImg"],
            },
          ],
        };
        ProfileComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
              selector: "app-profile",
              template:
                _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              styles: [
                _profile_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__,
              ],
            }),
          ],
          ProfileComponent
        );

        /***/
      },

    /***/ 94586:
      /*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SettingsComponent: () =>
            /* binding */ SettingsComponent,
          /* harmony export */
        });
        /* harmony import */ var C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670
          );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./settings.component.html?ngResource */ 49885
          );
        /* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./settings.component.scss?ngResource */ 75855
          );
        /* harmony import */ var _services_lib_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./../services/lib.service */ 26417);
        /* harmony import */ var _services_dispatcher_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./../services/dispatcher.service */ 80533);
        /* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./../services/api.service */ 5830);
        /* harmony import */ var _services_foto_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./../services/foto.service */ 47535);
        /* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! src/app/services/auth.service */ 37556);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! @ionic/angular */ 93819);
        /* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ../services/globals.service */ 70660);
        /* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./components/profile/profile.component */ 48606
          );
        /* harmony import */ var _components_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./components/profile-edit/profile-edit.component */ 3308
          );

        let SettingsComponent = class SettingsComponent {
          constructor(auth, globals, foto, api, d, html, lib) {
            this.auth = auth;
            this.globals = globals;
            this.foto = foto;
            this.api = api;
            this.d = d;
            this.html = html;
            this.lib = lib;
            this.bgs = Array.from(new Array(16).keys());
            this.bgImage = "url(../../assets/images/bg-1.jpg)";
            this.pfp = "url(../../assets/svg/avatar.svg)";
            this.profileCardHeight = "auto";
            this.profileCardMaxHeight = "35vh";
            this.pfp = "url(../../assets/svg/avatar.svg)";
            this.renderProfileImgEditBtn();
            this.profileRoot =
              _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent;
            this.profileEdit =
              _components_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_10__.ProfileEditComponent;
          } // ngAfterViewInit(): void {
          //   this.profileImg.el.shadowRoot.appendChild(this.profileImgEdit);
          // }
          // ngOnInit(): void {
          //   this.d.user$.subscribe((user: UserData) => {
          //     if (user.settings !== undefined && user.settings.pfp) {
          //       this.pfp = user.settings.pfp;
          //     }
          //   });
          // }

          ngAfterViewInit() {
            setTimeout(() => {
              let el = document.querySelector("app-profile > div");
              let height = el == null ? "auto" : `${el.offsetHeight}px`;
              this.profileCardMaxHeight = "100vh";
              this.profileCardHeight = height;
            }, 200);
          }

          ngOnInit() {
            this.d.profileNav$.subscribe((nav) => {
              if (nav == "Edit Display Name") {
                this.ionNav.push(this.profileEdit);
              } else if (nav == "Back") {
                this.ionNav.pop();
              }
            });
          }

          setBackgroundImage(idx) {
            this.api
              .post("/api/settings/save", {
                user: this.auth.user,
                settings: {
                  bgindex: idx + 1,
                },
              })
              .subscribe();
            this.globals.backgroundImage$.next(
              `url(../assets/images/backgrounds/bg-${idx + 1}.jpg)`
            );
          }

          formatBgImgCss(i) {
            const str = `url('../../assets/images/backgrounds/bg-${
              i + 1
            }.jpg')`;
            return str;
          }

          takePicture() {
            var _this = this;

            return (0,
            C_Users_princ_Code_mydea_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[
              "default"
            ])(function* () {
              const image = yield _this.foto.capture();

              _this.saveProfilePic(image);
            })();
          }

          saveProfilePic(image) {
            this.auth.user.settings.pfp = image.dataUrl;
            this.pfp = image.dataUrl || "";
            this.api
              .post("settings/save", {
                user: this.auth.user,
                settings: {
                  pfp: image.dataUrl,
                },
              })
              .subscribe();
          }

          renderProfileImgEditBtn() {
            this.profileImgEdit = this.html.createElement("ion-text");
            this.profileImgEdit.innerHTML = "Edit";
            this.profileImgEdit.style.position = "absolute";
            this.profileImgEdit.style.bottom = "5px";
            this.profileImgEdit.style.textAlign = "center";
            this.profileImgEdit.style.width = "100%";
            this.profileImgEdit.style.color = "rgb(66, 140, 255)";
            this.profileImgEdit.style.fontSize = "1rem";
            this.profileImgEdit.style.fontWeight = "normal";
          }
        };

        SettingsComponent.ctorParameters = () => [
          {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
          },
          {
            type: _services_globals_service__WEBPACK_IMPORTED_MODULE_8__.GlobalsService,
          },
          {
            type: _services_foto_service__WEBPACK_IMPORTED_MODULE_6__.FotoService,
          },
          {
            type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService,
          },
          {
            type: _services_dispatcher_service__WEBPACK_IMPORTED_MODULE_4__.DispatcherService,
          },
          {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2,
          },
          {
            type: _services_lib_service__WEBPACK_IMPORTED_MODULE_3__.LibService,
          },
        ];

        SettingsComponent.propDecorators = {
          profileImg: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
              args: ["profileImg"],
            },
          ],
          ionNav: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
              args: [
                "ionNav",
                {
                  read: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonNav,
                },
              ],
            },
          ],
          profileCard: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
              args: [
                "profileCard",
                {
                  read: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef,
                },
              ],
            },
          ],
        };
        SettingsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
              selector: "app-settings",
              template:
                _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              styles: [
                _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__,
              ],
            }),
          ],
          SettingsComponent
        );

        /***/
      },

    /***/ 49232:
      /*!********************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.ts ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SplashscreenComponent: () =>
            /* binding */ SplashscreenComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _splashscreen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./splashscreen.component.html?ngResource */ 44266
          );
        /* harmony import */ var _splashscreen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./splashscreen.component.scss?ngResource */ 51085
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/core */ 22560);

        let SplashscreenComponent = class SplashscreenComponent {
          constructor() {}
          ngOnInit() {}
          ngAfterViewInit() {
            let el = document.querySelector("app-logo svg");
            setTimeout(() => {
              el?.classList.toggle("active");
            }, 50);
            setInterval(() => {
              el?.classList.toggle("active");
            }, 2200);
          }
        };
        SplashscreenComponent.ctorParameters = () => [];
        SplashscreenComponent = (0,
        tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
              selector: "app-splashscreen",
              template:
                _splashscreen_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _splashscreen_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          SplashscreenComponent
        );

        /***/
      },

    /***/ 7942:
      /*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TabsPage: () => /* binding */ TabsPage,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./tabs.page.html?ngResource */ 65230);
        /* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./tabs.page.scss?ngResource */ 94710);
        /* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! src/app/services/globals.service */ 70660);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../services/auth.service */ 37556);

        let TabsPage = class TabsPage {
          constructor(auth, globals) {
            this.auth = auth;
            this.globals = globals;
            this.tabsactive = [true, false, false];
            this.backgroundImage = "url(../assets/images/backgrounds/bg-0.jpg";
          }
          ngOnInit() {
            this.globals.backgroundImage$.subscribe((val) => {
              console.debug("TABS PAGE", val);
              if (!val) {
                console.debug("TABS PAGE", "NO VAL");
                return;
              }
              this.backgroundImage = val;
            });
          }
          ngAfterViewInit() {
            setTimeout(() => {
              document.querySelector("app-logo svg")?.classList.add("active");
            });
          }
        };
        TabsPage.ctorParameters = () => [
          {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
          },
          {
            type: src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_2__.GlobalsService,
          },
        ];
        TabsPage.propDecorators = {
          ionTabs: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
              args: ["ionTabs"],
            },
          ],
        };
        TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
              selector: "app-tabs",
              template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__],
            }),
            // eslint-disable-next-line @angular-eslint/component-class-suffix
          ],
          TabsPage
        );

        /***/
      },

    /***/ 31438:
      /*!************************************************!*\
  !*** ./src/app/treasury/treasury.component.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ TreasuryComponent: () =>
            /* binding */ TreasuryComponent,
          /* harmony export */
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! tslib */ 34929);
        /* harmony import */ var _treasury_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./treasury.component.html?ngResource */ 91815
          );
        /* harmony import */ var _treasury_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./treasury.component.scss?ngResource */ 8820);
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/common/http */ 58987);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! swiper */ 63587);

        swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
          swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
          swiper__WEBPACK_IMPORTED_MODULE_2__.Keyboard,
          swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
          swiper__WEBPACK_IMPORTED_MODULE_2__.Scrollbar,
          swiper__WEBPACK_IMPORTED_MODULE_2__.Zoom,
          swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCoverflow,
          swiper__WEBPACK_IMPORTED_MODULE_2__.Parallax,
          swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCreative,
        ]);
        let TreasuryComponent = class TreasuryComponent {
          constructor(http) {
            this.http = http;
            this.accessKey = "guFi2sERZWAns62fdRbA_WAGW_RTGlmntE2eQ4sv75w"; // this.cards.forEach(async (card) => {
            //   this.http
            //     .get(
            //       `https://api.unsplash.com/photos/random/?query=${card.name}&client_id=${this.accessKey}`,
            //       requestOptions
            //     )
            //     .subscribe((result: any) => {
            //       card.link = result.urls.small;
            //     });
            // });

            this.cards = [
              {
                name: "Microsoft Office",
                link: "",
                img: "../../assets/images/cards/office.png",
                user: "missahrizona@outlook.com",
                pass: "familypass123",
              },
              {
                name: "Adobe Creative Cloud",
                link: "",
                img: "../../assets/images/cards/adobe.png",
                user: "markus.anthony.garcia@gmail.com",
                pass: "familypass123",
              },
              {
                name: "MIT Professional Certificate in Coding for Women",
                link: "",
                img: "../../assets/images/cards/mit.png",
                request: true,
              },
              {
                name: "Netflix",
                link: "",
                iframe: true,
                user: "markus.anthony.garcia@gmail.com",
                pass: "familypass123",
              },
              {
                name: "Hulu",
                link: "",
                iframe: true,
                user: "markus.anthony.garcia@gmail.com",
                pass: "familypass123",
              },
              {
                name: "Disney+",
                link: "",
                iframe: true,
                user: "markus.anthony.garcia@gmail.com",
                pass: "familypass123",
              },
              {
                name: "HBO Max",
                link: "",
                iframe: true,
                user: "markus.anthony.garcia@gmail.com",
                pass: "familypass123",
              },
              {
                name: "Amazon Prime",
                link: "",
                iframe: true,
                user: "markus.anthony.garcia@gmail.com",
                pass: "familypass123",
              },
              {
                name: "Youtube Premium",
                link: "",
                invite: true,
              },
              {
                name: "Apple Game Pass",
                invite: true,
              },
              {
                name: "Xbox GamePass for PC",
                link: "",
                invite: true,
              },
              {
                name: "Playstation Plus",
                link: "",
                invite: true,
              },
              {
                name: "EA Play Pro",
                link: "",
                invite: true,
              },
              {
                name: "Apple TV+",
                link: "",
                invite: true,
              },
              {
                name: "Spotify",
                link: "",
                invite: true,
              },
              {
                name: "Google One",
                link: "",
                invite: true,
              },
            ];
          }

          ngOnInit() {
            let requestOptions = {
              headers:
                new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders(
                  {
                    Authorization:
                      "Client-ID guFi2sERZWAns62fdRbA_WAGW_RTGlmntE2eQ4sv75w",
                  }
                ),
            };
          }

          slideChanged(event) {}
        };

        TreasuryComponent.ctorParameters = () => [
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient,
          },
        ];

        TreasuryComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)(
          [
            (0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
              selector: "app-treasury",
              template:
                _treasury_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
              styles: [
                _treasury_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__,
              ],
            }),
          ],
          TreasuryComponent
        );

        /***/
      },

    /***/ 92340:
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ environment: () => /* binding */ environment,
          /* harmony export */
        });
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
          production: false,
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

    /***/ 14431:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 22560);
        /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./app/app.module */ 36747);
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./environments/environment */ 92340);

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment
            .production
        ) {
          (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
        }
        (0,
        _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule
          )
          .catch((err) => console.log(err));

        /***/
      },

    /***/ 50863:
      /*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./ion-accordion_2.entry.js": [
            70079,
            "common",
            "node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js",
          ],
          "./ion-action-sheet.entry.js": [
            25593,
            "common",
            "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js",
          ],
          "./ion-alert.entry.js": [
            13225,
            "common",
            "node_modules_ionic_core_dist_esm_ion-alert_entry_js",
          ],
          "./ion-app_8.entry.js": [
            4812,
            "common",
            "node_modules_ionic_core_dist_esm_ion-app_8_entry_js",
          ],
          "./ion-avatar_3.entry.js": [
            86655,
            "common",
            "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js",
          ],
          "./ion-back-button.entry.js": [
            44856,
            "common",
            "node_modules_ionic_core_dist_esm_ion-back-button_entry_js",
          ],
          "./ion-backdrop.entry.js": [
            13059,
            "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js",
          ],
          "./ion-breadcrumb_2.entry.js": [
            58648,
            "common",
            "node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js",
          ],
          "./ion-button_2.entry.js": [
            98308,
            "common",
            "node_modules_ionic_core_dist_esm_ion-button_2_entry_js",
          ],
          "./ion-card_5.entry.js": [
            44690,
            "common",
            "node_modules_ionic_core_dist_esm_ion-card_5_entry_js",
          ],
          "./ion-checkbox.entry.js": [
            64090,
            "common",
            "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js",
          ],
          "./ion-chip.entry.js": [
            36214,
            "common",
            "node_modules_ionic_core_dist_esm_ion-chip_entry_js",
          ],
          "./ion-col_3.entry.js": [
            69447,
            "node_modules_ionic_core_dist_esm_ion-col_3_entry_js",
          ],
          "./ion-datetime_3.entry.js": [
            79689,
            "common",
            "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js",
          ],
          "./ion-fab_3.entry.js": [
            18840,
            "common",
            "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js",
          ],
          "./ion-img.entry.js": [
            40749,
            "node_modules_ionic_core_dist_esm_ion-img_entry_js",
          ],
          "./ion-infinite-scroll_2.entry.js": [
            69667,
            "common",
            "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js",
          ],
          "./ion-input.entry.js": [
            83288,
            "common",
            "node_modules_ionic_core_dist_esm_ion-input_entry_js",
          ],
          "./ion-item-option_3.entry.js": [
            35473,
            "common",
            "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js",
          ],
          "./ion-item_8.entry.js": [
            53634,
            "common",
            "node_modules_ionic_core_dist_esm_ion-item_8_entry_js",
          ],
          "./ion-loading.entry.js": [
            22855,
            "common",
            "node_modules_ionic_core_dist_esm_ion-loading_entry_js",
          ],
          "./ion-menu_3.entry.js": [
            495,
            "common",
            "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js",
          ],
          "./ion-modal.entry.js": [
            58737,
            "common",
            "node_modules_ionic_core_dist_esm_ion-modal_entry_js",
          ],
          "./ion-nav_2.entry.js": [
            99632,
            "common",
            "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js",
          ],
          "./ion-picker-column-internal.entry.js": [
            54446,
            "common",
            "node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js",
          ],
          "./ion-picker-internal.entry.js": [
            32275,
            "node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js",
          ],
          "./ion-popover.entry.js": [
            48050,
            "common",
            "node_modules_ionic_core_dist_esm_ion-popover_entry_js",
          ],
          "./ion-progress-bar.entry.js": [
            18994,
            "common",
            "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js",
          ],
          "./ion-radio_2.entry.js": [
            23592,
            "common",
            "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js",
          ],
          "./ion-range.entry.js": [
            35454,
            "common",
            "node_modules_ionic_core_dist_esm_ion-range_entry_js",
          ],
          "./ion-refresher_2.entry.js": [
            290,
            "common",
            "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js",
          ],
          "./ion-reorder_2.entry.js": [
            92666,
            "common",
            "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js",
          ],
          "./ion-ripple-effect.entry.js": [
            64816,
            "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js",
          ],
          "./ion-route_4.entry.js": [
            45534,
            "common",
            "node_modules_ionic_core_dist_esm_ion-route_4_entry_js",
          ],
          "./ion-searchbar.entry.js": [
            94902,
            "common",
            "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js",
          ],
          "./ion-segment_2.entry.js": [
            91938,
            "common",
            "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js",
          ],
          "./ion-select_3.entry.js": [
            78179,
            "common",
            "node_modules_ionic_core_dist_esm_ion-select_3_entry_js",
          ],
          "./ion-slide_2.entry.js": [
            90668,
            "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js",
          ],
          "./ion-spinner.entry.js": [
            61624,
            "common",
            "node_modules_ionic_core_dist_esm_ion-spinner_entry_js",
          ],
          "./ion-split-pane.entry.js": [
            19989,
            "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js",
          ],
          "./ion-tab-bar_2.entry.js": [
            28902,
            "common",
            "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js",
          ],
          "./ion-tab_2.entry.js": [
            70199,
            "common",
            "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js",
          ],
          "./ion-text.entry.js": [
            48395,
            "common",
            "node_modules_ionic_core_dist_esm_ion-text_entry_js",
          ],
          "./ion-textarea.entry.js": [
            96357,
            "common",
            "node_modules_ionic_core_dist_esm_ion-textarea_entry_js",
          ],
          "./ion-toast.entry.js": [
            38268,
            "common",
            "node_modules_ionic_core_dist_esm_ion-toast_entry_js",
          ],
          "./ion-toggle.entry.js": [
            15269,
            "common",
            "node_modules_ionic_core_dist_esm_ion-toggle_entry_js",
          ],
          "./ion-virtual-scroll.entry.js": [
            32875,
            "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js",
          ],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req)) {
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              e.code = "MODULE_NOT_FOUND";
              throw e;
            });
          }

          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(
            () => {
              return __webpack_require__(id);
            }
          );
        }
        webpackAsyncContext.keys = () => Object.keys(map);
        webpackAsyncContext.id = 50863;
        module.exports = webpackAsyncContext;

        /***/
      },

    /***/ 46700:
      /*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./af": 58685,
          "./af.js": 58685,
          "./ar": 254,
          "./ar-dz": 4312,
          "./ar-dz.js": 4312,
          "./ar-kw": 32614,
          "./ar-kw.js": 32614,
          "./ar-ly": 18630,
          "./ar-ly.js": 18630,
          "./ar-ma": 28674,
          "./ar-ma.js": 28674,
          "./ar-sa": 49032,
          "./ar-sa.js": 49032,
          "./ar-tn": 24730,
          "./ar-tn.js": 24730,
          "./ar.js": 254,
          "./az": 53052,
          "./az.js": 53052,
          "./be": 60150,
          "./be.js": 60150,
          "./bg": 63069,
          "./bg.js": 63069,
          "./bm": 13466,
          "./bm.js": 13466,
          "./bn": 18516,
          "./bn-bd": 90557,
          "./bn-bd.js": 90557,
          "./bn.js": 18516,
          "./bo": 26273,
          "./bo.js": 26273,
          "./br": 9588,
          "./br.js": 9588,
          "./bs": 19815,
          "./bs.js": 19815,
          "./ca": 83331,
          "./ca.js": 83331,
          "./cs": 21320,
          "./cs.js": 21320,
          "./cv": 72219,
          "./cv.js": 72219,
          "./cy": 68266,
          "./cy.js": 68266,
          "./da": 66427,
          "./da.js": 66427,
          "./de": 67435,
          "./de-at": 52871,
          "./de-at.js": 52871,
          "./de-ch": 12994,
          "./de-ch.js": 12994,
          "./de.js": 67435,
          "./dv": 82357,
          "./dv.js": 82357,
          "./el": 95649,
          "./el.js": 95649,
          "./en-au": 59961,
          "./en-au.js": 59961,
          "./en-ca": 19878,
          "./en-ca.js": 19878,
          "./en-gb": 3924,
          "./en-gb.js": 3924,
          "./en-ie": 70864,
          "./en-ie.js": 70864,
          "./en-il": 91579,
          "./en-il.js": 91579,
          "./en-in": 30940,
          "./en-in.js": 30940,
          "./en-nz": 16181,
          "./en-nz.js": 16181,
          "./en-sg": 44301,
          "./en-sg.js": 44301,
          "./eo": 85291,
          "./eo.js": 85291,
          "./es": 54529,
          "./es-do": 53764,
          "./es-do.js": 53764,
          "./es-mx": 12584,
          "./es-mx.js": 12584,
          "./es-us": 63425,
          "./es-us.js": 63425,
          "./es.js": 54529,
          "./et": 35203,
          "./et.js": 35203,
          "./eu": 70678,
          "./eu.js": 70678,
          "./fa": 83483,
          "./fa.js": 83483,
          "./fi": 96262,
          "./fi.js": 96262,
          "./fil": 52521,
          "./fil.js": 52521,
          "./fo": 34555,
          "./fo.js": 34555,
          "./fr": 63131,
          "./fr-ca": 88239,
          "./fr-ca.js": 88239,
          "./fr-ch": 21702,
          "./fr-ch.js": 21702,
          "./fr.js": 63131,
          "./fy": 267,
          "./fy.js": 267,
          "./ga": 23821,
          "./ga.js": 23821,
          "./gd": 71753,
          "./gd.js": 71753,
          "./gl": 4074,
          "./gl.js": 4074,
          "./gom-deva": 92762,
          "./gom-deva.js": 92762,
          "./gom-latn": 5969,
          "./gom-latn.js": 5969,
          "./gu": 82809,
          "./gu.js": 82809,
          "./he": 45402,
          "./he.js": 45402,
          "./hi": 315,
          "./hi.js": 315,
          "./hr": 10410,
          "./hr.js": 10410,
          "./hu": 38288,
          "./hu.js": 38288,
          "./hy-am": 67928,
          "./hy-am.js": 67928,
          "./id": 71334,
          "./id.js": 71334,
          "./is": 86959,
          "./is.js": 86959,
          "./it": 34864,
          "./it-ch": 51124,
          "./it-ch.js": 51124,
          "./it.js": 34864,
          "./ja": 36141,
          "./ja.js": 36141,
          "./jv": 29187,
          "./jv.js": 29187,
          "./ka": 42136,
          "./ka.js": 42136,
          "./kk": 94332,
          "./kk.js": 94332,
          "./km": 18607,
          "./km.js": 18607,
          "./kn": 84305,
          "./kn.js": 84305,
          "./ko": 70234,
          "./ko.js": 70234,
          "./ku": 16003,
          "./ku.js": 16003,
          "./ky": 75061,
          "./ky.js": 75061,
          "./lb": 32786,
          "./lb.js": 32786,
          "./lo": 66183,
          "./lo.js": 66183,
          "./lt": 50029,
          "./lt.js": 50029,
          "./lv": 24169,
          "./lv.js": 24169,
          "./me": 68577,
          "./me.js": 68577,
          "./mi": 68177,
          "./mi.js": 68177,
          "./mk": 50337,
          "./mk.js": 50337,
          "./ml": 65260,
          "./ml.js": 65260,
          "./mn": 52325,
          "./mn.js": 52325,
          "./mr": 14695,
          "./mr.js": 14695,
          "./ms": 75334,
          "./ms-my": 37151,
          "./ms-my.js": 37151,
          "./ms.js": 75334,
          "./mt": 63570,
          "./mt.js": 63570,
          "./my": 97963,
          "./my.js": 97963,
          "./nb": 88028,
          "./nb.js": 88028,
          "./ne": 86638,
          "./ne.js": 86638,
          "./nl": 50302,
          "./nl-be": 66782,
          "./nl-be.js": 66782,
          "./nl.js": 50302,
          "./nn": 33501,
          "./nn.js": 33501,
          "./oc-lnc": 50563,
          "./oc-lnc.js": 50563,
          "./pa-in": 50869,
          "./pa-in.js": 50869,
          "./pl": 65302,
          "./pl.js": 65302,
          "./pt": 49687,
          "./pt-br": 74884,
          "./pt-br.js": 74884,
          "./pt.js": 49687,
          "./ro": 79107,
          "./ro.js": 79107,
          "./ru": 33627,
          "./ru.js": 33627,
          "./sd": 30355,
          "./sd.js": 30355,
          "./se": 83427,
          "./se.js": 83427,
          "./si": 11848,
          "./si.js": 11848,
          "./sk": 54590,
          "./sk.js": 54590,
          "./sl": 20184,
          "./sl.js": 20184,
          "./sq": 56361,
          "./sq.js": 56361,
          "./sr": 78965,
          "./sr-cyrl": 81287,
          "./sr-cyrl.js": 81287,
          "./sr.js": 78965,
          "./ss": 25456,
          "./ss.js": 25456,
          "./sv": 70451,
          "./sv.js": 70451,
          "./sw": 77558,
          "./sw.js": 77558,
          "./ta": 51356,
          "./ta.js": 51356,
          "./te": 73693,
          "./te.js": 73693,
          "./tet": 21243,
          "./tet.js": 21243,
          "./tg": 42500,
          "./tg.js": 42500,
          "./th": 55768,
          "./th.js": 55768,
          "./tk": 77761,
          "./tk.js": 77761,
          "./tl-ph": 35780,
          "./tl-ph.js": 35780,
          "./tlh": 29590,
          "./tlh.js": 29590,
          "./tr": 33807,
          "./tr.js": 33807,
          "./tzl": 93857,
          "./tzl.js": 93857,
          "./tzm": 60654,
          "./tzm-latn": 8806,
          "./tzm-latn.js": 8806,
          "./tzm.js": 60654,
          "./ug-cn": 30845,
          "./ug-cn.js": 30845,
          "./uk": 19232,
          "./uk.js": 19232,
          "./ur": 47052,
          "./ur.js": 47052,
          "./uz": 77967,
          "./uz-latn": 32233,
          "./uz-latn.js": 32233,
          "./uz.js": 77967,
          "./vi": 98615,
          "./vi.js": 98615,
          "./x-pseudo": 12320,
          "./x-pseudo.js": 12320,
          "./yo": 31313,
          "./yo.js": 31313,
          "./zh-cn": 64490,
          "./zh-cn.js": 64490,
          "./zh-hk": 55910,
          "./zh-hk.js": 55910,
          "./zh-mo": 98262,
          "./zh-mo.js": 98262,
          "./zh-tw": 44223,
          "./zh-tw.js": 44223,
        };

        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = 46700;

        /***/
      },

    /***/ 9613:
      /*!*********************************************************************************!*\
  !*** ./src/app/components/poster-slider/poster-slider.component.css?ngResource ***!
  \*********************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".swiper-slide {\r\n  width: 150px !important;\r\n  height: 300px !important;\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rlci1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoicG9zdGVyLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZSB7XHJcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuIl19 */";

        /***/
      },

    /***/ 44262:
      /*!****************************************************************************************!*\
  !*** ./src/app/settings/components/profile-edit/profile-edit.component.css?ngResource ***!
  \****************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "#display-name-input {\r\n  border-radius: 10px;\r\n}\r\n\r\nion-card-content {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2IiLCJmaWxlIjoicHJvZmlsZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlzcGxheS1uYW1lLWlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";

        /***/
      },

    /***/ 74808:
      /*!******************************************************************************!*\
  !*** ./src/app/settings/components/profile/profile.component.css?ngResource ***!
  \******************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "ion-card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.tap-to-edit-btn {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 10rem;\r\n  border-radius: 50%;\r\n  height: 10rem;\r\n  display: flex;\r\n  align-items: flex-end;\r\n}\r\n\r\nion-img {\r\n  position: relative;\r\n}\r\n\r\n/* .profile-item {\r\n  border-radius: 5px;\r\n} */\r\n\r\n#displayname {\r\n  margin-top: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXAtdG8tZWRpdC1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIC5wcm9maWxlLWl0ZW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSAqL1xyXG5cclxuI2Rpc3BsYXluYW1lIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */";

        /***/
      },

    /***/ 79259:
      /*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".root-container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufSJdfQ== */";

        /***/
      },

    /***/ 87752:
      /*!*******************************************************!*\
  !*** ./src/app/error/error.component.scss?ngResource ***!
  \*******************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */";

        /***/
      },

    /***/ 41871:
      /*!*************************************************************************************************!*\
  !*** ./src/app/login/child-classes/displayname-card/displayname-card.component.scss?ngResource ***!
  \*************************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5bmFtZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

        /***/
      },

    /***/ 64982:
      /*!*******************************************************************************************!*\
  !*** ./src/app/login/child-classes/greeting-card/greeting-card.component.scss?ngResource ***!
  \*******************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".card-content {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyZWV0aW5nLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoiZ3JlZXRpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */";

        /***/
      },

    /***/ 2014:
      /*!*****************************************************************************************!*\
  !*** ./src/app/login/child-classes/smscode-card/smscode-card.component.scss?ngResource ***!
  \*****************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".progress-bar {\n  padding: 3px 0 3px 0;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n}\n\n.code-input {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.code-input-digit {\n  width: 15%;\n  max-width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtc2NvZGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic21zY29kZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhciB7XHJcbiAgcGFkZGluZzogM3B4IDAgM3B4IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xyXG59XHJcblxyXG4uY29kZS1pbnB1dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmNvZGUtaW5wdXQtZGlnaXQge1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWF4LXdpZHRoOiAyMCU7XHJcbn1cclxuIl19 */";

        /***/
      },

    /***/ 52044:
      /*!*********************************************************************************!*\
  !*** ./src/app/login/child-classes/tel-card/tel-card.component.scss?ngResource ***!
  \*********************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWwtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";

        /***/
      },

    /***/ 89444:
      /*!*******************************************************!*\
  !*** ./src/app/login/login.component.scss?ngResource ***!
  \*******************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".login-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.login-content > * {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 8em;\n  opacity: 0.95;\n}\n\nion-content {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRlbnQgPiAqIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogOGVtO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG4iXX0= */";

        /***/
      },

    /***/ 71170:
      /*!*****************************************************!*\
  !*** ./src/app/logo/logo.component.scss?ngResource ***!
  \*****************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "svg {\n  display: block;\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUFDSiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

        /***/
      },

    /***/ 57764:
      /*!*****************************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/app-detail-modal/app-detail-modal.component.scss?ngResource ***!
  \*****************************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "ion-content {\n  height: 100vh;\n}\n\nion-card {\n  width: -webkit-fill-available;\n}\n\n.slide-content {\n  height: -webkit-fill-available;\n  width: -webkit-fill-available;\n}\n\n.card-buttons {\n  height: -webkit-fill-available;\n  width: -webkit-fill-available;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1kZXRhaWwtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBQTtBQUVGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQUVGIiwiZmlsZSI6ImFwcC1kZXRhaWwtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5zbGlkZS1jb250ZW50IHtcclxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5jYXJkLWJ1dHRvbnMge1xyXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG4iXX0= */";

        /***/
      },

    /***/ 55697:
      /*!***************************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/createapp-modal/createapp-modal.component.scss?ngResource ***!
  \***************************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".fullscreen {\n  height: -webkit-fill-available;\n  width: -webkit-fill-available;\n}\n\n.slide-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.picture-bg {\n  transition: background-image 1s linear;\n}\n\n.device-frame {\n  width: 60vw;\n  aspect-ratio: 1/2;\n  max-width: 500px;\n  max-height: 1000px;\n  border-top: 6px;\n  border-left: 3px;\n  border-right: 3px;\n  border-bottom: 6px;\n  border-style: solid;\n  border-color: black;\n  border-radius: 5px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background-image: url('svgator-girl.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\nion-toolbar > ion-title {\n  display: flex;\n  padding: 0;\n  justify-content: center;\n}\n\nion-input {\n  text-align: center;\n}\n\nion-item::part(native) {\n  padding: 0;\n}\n\ninput.native-input {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\nion-card {\n  width: 70vw;\n  opacity: 0.9;\n}\n\ndiv.swiper-slide[data-swiper-slide-index=\"2\"] > div.slide-content {\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZWFwcC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFBQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0FBQ0oiLCJmaWxlIjoiY3JlYXRlYXBwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxzY3JlZW4ge1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5zbGlkZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGljdHVyZS1iZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGxpbmVhcjtcclxufVxyXG5cclxuLmRldmljZS1mcmFtZSB7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDI7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogNnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweDtcclxuICAgIGJvcmRlci1yaWdodDogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvc3ZnYXRvci1naXJsLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXI+aW9uLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW5wdXQubmF0aXZlLWlucHV0IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuZGl2LnN3aXBlci1zbGlkZVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIjJcIl0+ZGl2LnNsaWRlLWNvbnRlbnQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */";

        /***/
      },

    /***/ 86701:
      /*!*********************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/delete-modal/delete-modal.component.scss?ngResource ***!
  \*********************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "ion-content {\n  height: 100vh;\n}\n\n.delete-app-modal-content {\n  padding: 20px !important;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJkZWxldGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmRlbGV0ZS1hcHAtbW9kYWwtY29udGVudCB7XHJcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";

        /***/
      },

    /***/ 83338:
      /*!*********************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/fab-contents/fab-contents.component.scss?ngResource ***!
  \*********************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWItY29udGVudHMuY29tcG9uZW50LnNjc3MifQ== */";

        /***/
      },

    /***/ 12529:
      /*!*******************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/featurelist/featurelist.component.scss?ngResource ***!
  \*******************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".animate-in {\n  animation: animate-in 0.5s linear forwards !important;\n}\n\n@keyframes animate-in {\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 1000px;\n  }\n}\n\nion-card ion-item {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscURBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksZUFBQTtFQUNOO0VBQ0U7SUFDSSxrQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSwwQkFBQTtBQUFKIiwiZmlsZSI6ImZlYXR1cmVsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuaW1hdGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlLWluIDAuNXMgbGluZWFyIGZvcndhcmRzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZS1pbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZCBpb24taXRlbSB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufSJdfQ== */";

        /***/
      },

    /***/ 19069:
      /*!*************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/timeline/timeline.component.scss?ngResource ***!
  \*************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".timeline-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 0 50px 0;\n  font-size: 12px !important;\n}\n\n.timeline-overlay {\n  width: 100%;\n  height: 300px !important;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  z-index: 1103;\n  box-sizing: content-box;\n  padding-bottom: 70px;\n}\n\n@keyframes step-down {\n  8% {\n    transform: translateY(23%);\n  }\n  25% {\n    transform: translateY(23%);\n  }\n  33% {\n    transform: translateY(45%);\n  }\n  50% {\n    transform: translateY(45%);\n  }\n  58% {\n    transform: translateY(65%);\n  }\n  76% {\n    transform: translateY(65%);\n  }\n  84% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(100%);\n  }\n}\n\n.t-event {\n  width: 100%;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.t-line {\n  width: 2px;\n  background-color: #bebebe;\n}\n\n.t-dot {\n  background: transparent;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 5px;\n  bottom: -15px;\n  z-index: 1100;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.t-half {\n  width: 50%;\n  height: 80px;\n  position: absolute;\n  top: 0;\n  display: flex;\n}\n\n.left {\n  left: 0;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding-right: 20px;\n}\n\n.right {\n  right: 0;\n  justify-content: flex-start;\n  align-items: flex-end;\n  padding-left: 20px;\n}\n\n.t-half.left > .event-btn {\n  left: -25%;\n  bottom: -10%;\n  position: absolute;\n}\n\n.t-half.right > .event-btn {\n  right: -25%;\n  bottom: -10%;\n  position: absolute;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.link-btn {\n  margin: 0;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nion-button::part(native) {\n  padding: 2px 5px 1px 5px !important;\n}\n\nion-spinner {\n  background-color: white;\n}\n\n.color-change-bg {\n  animation: color-change-2x 2s linear infinite alternate both;\n  padding: 50px;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFDQTtFQUVFO0lBQ0UsMEJBQUE7RUFDRjtFQUNBO0lBQ0UsMEJBQUE7RUFDRjtFQUNBO0lBQ0UsMEJBQUE7RUFDRjtFQUNBO0lBQ0UsMEJBQUE7RUFDRjtFQUNBO0lBQ0UsMEJBQUE7RUFDRjtFQUNBO0lBQ0UsMEJBQUE7RUFDRjtFQUNBO0lBQ0UsMkJBQUE7RUFDRjtFQUNBO0lBQ0UsMkJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxtQ0FBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7QUFJRjs7QUFEQTtFQUNFLDREQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSUYiLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMCA1MHB4IDA7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1vdmVybGF5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDExMDM7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbn1cclxuQGtleWZyYW1lcyBzdGVwLWRvd24ge1xyXG4gIC8vIG1vdmluZ1xyXG4gIDglIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMyUpO1xyXG4gIH0gLy8gd2FpdGluZ1xyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjMlKTtcclxuICB9IC8vIG1vdmluZ1xyXG4gIDMzJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDUlKTtcclxuICB9IC8vIHdhaXRpbmdcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ1JSk7XHJcbiAgfVxyXG4gIDU4JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjUlKTtcclxuICB9XHJcbiAgNzYlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2NSUpO1xyXG4gIH1cclxuICA4NCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi50LWV2ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50LWxpbmUge1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlYmViZTtcclxufVxyXG4udC1kb3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm90dG9tOiAtMTVweDtcclxuICB6LWluZGV4OiAxMTAwO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4udC1oYWxmIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmxlZnQge1xyXG4gIGxlZnQ6IDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4ucmlnaHQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4udC1oYWxmLmxlZnQgPiAuZXZlbnQtYnRuIHtcclxuICBsZWZ0OiAtMjUlO1xyXG4gIGJvdHRvbTogLTEwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi50LWhhbGYucmlnaHQgPiAuZXZlbnQtYnRuIHtcclxuICByaWdodDogLTI1JTtcclxuICBib3R0b206IC0xMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucmlwcGxlLXBhcmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saW5rLWJ0biB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbjo6cGFydChuYXRpdmUpIHtcclxuICBwYWRkaW5nOiAycHggNXB4IDFweCA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXNwaW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29sb3ItY2hhbmdlLWJnIHtcclxuICBhbmltYXRpb246IGNvbG9yLWNoYW5nZS0yeCAycyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlIGJvdGg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbiJdfQ== */";

        /***/
      },

    /***/ 12586:
      /*!***************************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss?ngResource ***!
  \***************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "ion-content::part(background) {\n  background: none;\n}\n\n.originator-label {\n  position: fixed;\n  top: -13px;\n  left: -13px;\n}\n\n.app-divisor {\n  height: 1px;\n  background-color: rgba(85, 85, 85, 0.5);\n  border: none;\n  border-radius: 1px;\n  margin: 0 2px 0 2px;\n}\n\n.app-tile-flex {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: left;\n  margin-bottom: 1rem;\n  background-color: rgba(78, 148, 157, 0.0784313725);\n  background-color: rgba(200, 230, 255, 0.2);\n  border: 1px solid hsl(0deg, 0%, 89%);\n  border-radius: 10px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  padding: 7px;\n  max-height: 1000px;\n  transition: max-height 0.5s ease-in-out;\n  overflow: hidden !important;\n}\n\n.app-tile-wrap {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.app-tile {\n  width: 60px;\n  height: 60px;\n  margin: 10px;\n  border-radius: 17px;\n  background-image: url('heart_blueprint3.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n\nion-button.app-tile::part(native) {\n  overflow: visible;\n}\n\n.app-delete-icon {\n  position: absolute;\n  top: -0.5em;\n  left: -1.4em;\n}\n\n.app-label {\n  font-size: 10px;\n  font-weight: 400;\n  max-width: 80px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n@media (hover: hover) {\n  .app-tile:hover {\n    background-color: rgba(95, 158, 160, 0.5);\n  }\n}\n\n.list-header {\n  display: flex;\n}\n\n.timeline-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n}\n\n/* \nanimation: name duration timing-function delay iteration-count direction fill-mode;\n*/\n\n.startup-takeoff {\n  animation: startup-takeoff 1s ease-in-out forwards;\n}\n\n@keyframes startup-takeoff {\n  10% {\n    transform: translateX(-10px);\n  }\n  20% {\n    transform: translateX(-10px);\n  }\n  100% {\n    transform: translateX(1000px);\n    position: fixed;\n    display: none;\n  }\n}\n\n.form-slideshow {\n  width: 90vw;\n  height: 45vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.slide-onscreen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  transition: transform 0.5s ease-in-out;\n}\n\n.slide-offscreen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.5s ease-in-out;\n  transform: translateX(100%);\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.newapp-addfeature-textarea {\n  position: relative;\n}\n\n.newapp-addfeature-btn {\n  position: absolute;\n  right: 5px;\n  margin: auto;\n  bottom: 7px;\n  z-index: 3;\n  font-size: 5px !important;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  opacity: 0.75;\n  padding: 5px !important;\n}\n\n.newfeature-item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  overflow-x: hidden;\n}\n\n.progress-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n}\n\n.progress-spinner {\n  width: 150px !important;\n  height: 150px !important;\n}\n\n.ion-delete-app-icon {\n  background: #ababab;\n  border: none;\n  border-radius: 50%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBRUEsK0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5Q0FBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTs7Q0FBQTs7QUFJQTtFQUNFLGtEQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLDRCQUFBO0VBREY7RUFHQTtJQUNFLDRCQUFBO0VBREY7RUFHQTtJQUNFLDZCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUFERjtBQUNGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLDJCQUFBO0FBTEY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1DQUFBO0VBQUEsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBTEY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFMRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudDo6cGFydChiYWNrZ3JvdW5kKSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLm9yaWdpbmF0b3ItbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IC0xM3B4O1xyXG4gIGxlZnQ6IC0xM3B4O1xyXG59XHJcblxyXG4uYXBwLWRpdmlzb3Ige1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODUsIDg1LCA4NSwgMC41KTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIG1hcmdpbjogMCAycHggMCAycHg7XHJcbn1cclxuXHJcbi5hcHAtdGlsZS1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTk0OWQxNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjMwLCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4OSUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiKDAgMCAwIC8gNSUpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2IoMCAwIDAgLyA1JSk7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXBwLXRpbGUtd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFwcC10aWxlIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFydF9ibHVlcHJpbnQzLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLmFwcC10aWxlOjpwYXJ0KG5hdGl2ZSkge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uYXBwLWRlbGV0ZS1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMC41ZW07XHJcbiAgbGVmdDogLTEuNGVtO1xyXG59XHJcblxyXG4uYXBwLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xyXG4gIC5hcHAtdGlsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCAxNTgsIDE2MCwgMC41KTtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBcclxuYW5pbWF0aW9uOiBuYW1lIGR1cmF0aW9uIHRpbWluZy1mdW5jdGlvbiBkZWxheSBpdGVyYXRpb24tY291bnQgZGlyZWN0aW9uIGZpbGwtbW9kZTtcclxuKi9cclxuXHJcbi5zdGFydHVwLXRha2VvZmYge1xyXG4gIGFuaW1hdGlvbjogc3RhcnR1cC10YWtlb2ZmIDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHN0YXJ0dXAtdGFrZW9mZiB7XHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5uZXdhcHAtYnV0dG9uLXdyYXBwZXIge1xyXG59XHJcblxyXG4uZm9ybS1zbGlkZXNob3cge1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGhlaWdodDogNDV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbGlkZS1vbnNjcmVlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNsaWRlLW9mZnNjcmVlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubmV3YXBwLWFkZGZlYXR1cmUtdGV4dGFyZWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5ld2FwcC1hZGRmZWF0dXJlLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvdHRvbTogN3B4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgZm9udC1zaXplOiA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdmZWF0dXJlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1zcGlubmVyIHtcclxuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tZGVsZXRlLWFwcC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjYWJhYmFiO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */";

        /***/
      },

    /***/ 75855:
      /*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.scss?ngResource ***!
  \*************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "ion-nav {\n  position: initial;\n}\n\n#ion-nav-card {\n  position: relative;\n  min-height: 35vh;\n  max-height: 35vh;\n  transition: max-height 0.3s ease-in-out;\n}\n\nion-card-title {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.tap-to-edit-btn {\n  position: absolute;\n  top: 0;\n  width: 10rem;\n  border-radius: 50%;\n  height: 10rem;\n  display: flex;\n  align-items: flex-end;\n}\n\nion-img {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW5hdiB7XHJcbiAgcG9zaXRpb246IGluaXRpYWw7XHJcbn1cclxuXHJcbiNpb24tbmF2LWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAzNXZoO1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXAtdG8tZWRpdC1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8vIGlvbi1idXR0b24ge1xyXG4vLyAgICYgaW9uLXRleHQge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAxZW07XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdfQ== */";

        /***/
      },

    /***/ 51085:
      /*!*********************************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.scss?ngResource ***!
  \*********************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".logo-container {\n  height: 100%;\n}\n\n.logo-container app-logo {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-container app-logo > svg {\n  width: 300px !important;\n  height: 130px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUFHRiIsImZpbGUiOiJzcGxhc2hzY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubG9nby1jb250YWluZXIgYXBwLWxvZ28ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ28tY29udGFpbmVyIGFwcC1sb2dvID4gc3ZnIHtcclxuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";

        /***/
      },

    /***/ 94710:
      /*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "i.fas.fa-treasure-chest {\n  line-height: 1.25;\n  font-size: 28px;\n}\n\nion-label {\n  margin: 0;\n  font-size: 10px;\n}\n\n.ion-tabs-background {\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpLmZhcy5mYS10cmVhc3VyZS1jaGVzdCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5pb24tdGFicy1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */";

        /***/
      },

    /***/ 8820:
      /*!*************************************************************!*\
  !*** ./src/app/treasury/treasury.component.scss?ngResource ***!
  \*************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          ".treasury-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.slide-content img {\n  min-height: 100%;\n  width: auto;\n  object-fit: cover;\n}\n\n.card-header-img {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWFzdXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoidHJlYXN1cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlYXN1cnktY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGUtY29udGVudCBpbWcge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlci1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuIl19 */";

        /***/
      },

    /***/ 33383:
      /*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          "<ion-app>\r\n  <router-outlet></router-outlet>\r\n</ion-app>\r\n";

        /***/
      },

    /***/ 29811:
      /*!**********************************************************************************!*\
  !*** ./src/app/components/poster-slider/poster-slider.component.html?ngResource ***!
  \**********************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<swiper #swiper [effect]="\'creative\'" [grabCursor]="true" [creativeEffect]="creativeEffect" [speed]="600"\r\n  [resistanceRatio]="0" [parallax]="true">\r\n  <ng-template swiperSlide *ngFor="let bgIdx of cards">\r\n    <div data-swiper-parallax-scale="1.1" [style.backgroundImage]="formatBgImgCss(bgIdx)" class="swiper-slide">\r\n\r\n    </div>\r\n  </ng-template>\r\n</swiper>';

        /***/
      },

    /***/ 12700:
      /*!*******************************************************!*\
  !*** ./src/app/error/error.component.html?ngResource ***!
  \*******************************************************/
      /***/ (module) => {
        "use strict";
        module.exports = "<p>Whoops! 404 page not found</p>\r\n";

        /***/
      },

    /***/ 96000:
      /*!*************************************************************************************************!*\
  !*** ./src/app/login/child-classes/displayname-card/displayname-card.component.html?ngResource ***!
  \*************************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-card>\r\n  <ion-card-header translucent="true">\r\n    <ion-card-title>Greeting Name</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content style="text-align: center">\r\n    <ion-item>\r\n      <ion-input type="text" clearInput [(ngModel)]="auth.user.displayname" required="+true"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines="none">\r\n      <ion-button slot="start" fill="clear" size="small" (click)="back()">\r\n        Back\r\n      </ion-button>\r\n\r\n      <ion-button *ngIf="!auth.creatinginprogress" slot="end" fill="clear" size="small" (click)="auth.createaccount()">\r\n        Create\r\n      </ion-button>\r\n      <ion-spinner slot="end" *ngIf="auth.creatinginprogress"></ion-spinner>\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>';

        /***/
      },

    /***/ 87484:
      /*!*******************************************************************************************!*\
  !*** ./src/app/login/child-classes/greeting-card/greeting-card.component.html?ngResource ***!
  \*******************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title>Hey {{ auth.user.displayname }}!</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <div class="card-content">\r\n      <ion-item class="ion-text-center" lines="none">\r\n        <ion-label>\r\n          <ion-button fill="clear" (click)="auth.tohome()"\r\n            >Get Started</ion-button\r\n          >\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n';

        /***/
      },

    /***/ 91593:
      /*!*****************************************************************************************!*\
  !*** ./src/app/login/child-classes/smscode-card/smscode-card.component.html?ngResource ***!
  \*****************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-card>\r\n  <ion-card-header translucent="true">\r\n    <ion-card-title>Verify Code</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content style="text-align: center">\r\n    <div class="code-input">\r\n      <ion-input [(ngModel)]="auth.code" (ionChange)="auth.codechanged($event)"\r\n        style="--padding-end: 0; border: 1px solid #ddd; border-radius: 5px" inputmode="text"\r\n        autocomplete="one-time-code" type="text" maxlength="6" minlength="6" required="true"></ion-input>\r\n    </div>\r\n    <ion-progress-bar class="progress-bar" [style.opacity]="auth.codeprogress.opacity" [color]="auth.codeprogress.color"\r\n      [value]="auth.codeprogress.value"></ion-progress-bar>\r\n    <ion-item lines="none">\r\n      <ion-button slot="start" fill="clear" size="small" (click)="back()">Back\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>';

        /***/
      },

    /***/ 93582:
      /*!*********************************************************************************!*\
  !*** ./src/app/login/child-classes/tel-card/tel-card.component.html?ngResource ***!
  \*********************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-card>\r\n  <ion-card-header translucent="true">\r\n    <ion-card-title>Mobile Number</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content style="text-align: center">\r\n    <ion-item lines="inset">\r\n      <ion-label position="floating">Phone Number</ion-label>\r\n      <ion-input\r\n        autofocus="true"\r\n        autocomplete="tel"\r\n        inputmode="tel"\r\n        type="tel"\r\n        [placeholder]="telformats[telformaxidx]"\r\n        clearInput\r\n        [(ngModel)]="auth.user.tel"\r\n        required="true"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines="none">\r\n      <ion-button\r\n        *ngIf="!auth.accountRequestLoading"\r\n        [disabled]="!auth.user.tel"\r\n        slot="end"\r\n        fill="clear"\r\n        size="small"\r\n        (click)="auth.telsubmitted()"\r\n        >Next\r\n      </ion-button>\r\n      <ion-spinner\r\n        *ngIf="auth.accountRequestLoading"\r\n        name="crescent"></ion-spinner>\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>\r\n';

        /***/
      },

    /***/ 82010:
      /*!*******************************************************!*\
  !*** ./src/app/login/login.component.html?ngResource ***!
  \*******************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-header translucent="true" class="ion-no-border">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <ion-label>\r\n        <app-logo></app-logo>\r\n      </ion-label>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollY]="false" [scrollX]="false">\r\n  <div class="login-content">\r\n    <uwu-tel-card @slide *ngIf="auth.loginstep === 0"></uwu-tel-card>\r\n\r\n    <uwu-smscode-card @slide *ngIf="auth.loginstep === 1"></uwu-smscode-card>\r\n\r\n    <uwu-displayname-card @slide *ngIf="auth.loginstep === 2"></uwu-displayname-card>\r\n\r\n    <xoxo-greeting-card @slide *ngIf="auth.loginstep === 3"></xoxo-greeting-card>\r\n  </div>\r\n</ion-content>';

        /***/
      },

    /***/ 39451:
      /*!*****************************************************!*\
  !*** ./src/app/logo/logo.component.html?ngResource ***!
  \*****************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<svg\r\n  #charmeesvg\r\n  [style.width]="width || \'300px\'"\r\n  viewBox="-20.667 172.054 657.495 150"\r\n  xmlns="http://www.w3.org/2000/svg"\r\n  xmlns:xlink="http://www.w3.org/1999/xlink">\r\n  <g id="logo-group" transform="matrix(1, 0, 0, 1, -214.171478, -136.946121)">\r\n    <image\r\n      id="container"\r\n      x="272"\r\n      y="144"\r\n      width="480"\r\n      height="480"\r\n      transform="translate(0 0)"\r\n      style="display: none"\r\n      xlink:href="" />\r\n    <g id="logo-center" transform="translate(53 0)">\r\n      <image\r\n        id="icon_container"\r\n        x="0"\r\n        y="0"\r\n        style="display: none"\r\n        xlink:href="" />\r\n      <g\r\n        id="slogan"\r\n        style="\r\n          font-style: normal;\r\n          font-weight: 400;\r\n          font-size: 32px;\r\n          line-height: 1;\r\n          font-family: Montserrat;\r\n          font-variant-ligatures: none;\r\n          text-align: center;\r\n          text-anchor: middle;\r\n        "\r\n        transform="translate(0 0)" />\r\n      <g\r\n        id="title"\r\n        style="\r\n          font-style: normal;\r\n          font-weight: 500;\r\n          font-size: 72px;\r\n          line-height: 1;\r\n          font-family: \'Raleway Medium Alt1\';\r\n          font-variant-ligatures: none;\r\n          text-align: center;\r\n          text-anchor: middle;\r\n        "\r\n        transform="translate(0 0)">\r\n        <path\r\n          id="path40494"\r\n          style="\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 72px;\r\n            line-height: 1;\r\n            font-family: \'Raleway Medium Alt1\';\r\n            font-variant-ligatures: none;\r\n            text-align: center;\r\n            text-anchor: middle;\r\n          "\r\n          d="m 348.20562,-32.76 c 0.72001,-2.376 1.872,-4.536 3.384,-6.408 1.44,-1.872 3.31201,-3.456 5.472,-4.608 2.16001,-1.152 4.68,-1.8 7.56,-1.8 1.296,0 2.592,0.144 3.96,0.432 1.29601,0.288 2.59201,0.792 3.888,1.44 1.224,0.72 2.448,1.584 3.528,2.664 1.08,1.152 2.016,2.52 2.80801,4.104 l 5.11199,-3.312 c -1.584,-3.312 -4.032,-5.976 -7.272,-8.064 -3.312,-2.016 -7.2,-3.096 -11.736,-3.096 -3.888,0 -7.27199,0.792 -10.29599,2.232 -3.09601,1.512 -5.61601,3.456 -7.70401,5.904 -2.088,2.448 -3.672,5.184 -4.752,8.208 -0.79199,2.16 -1.224,4.32 -1.44,6.408 h 6.55201 c 0.216,-1.368 0.50399,-2.736 0.93599,-4.104 z m 31.248,18.36 c -0.71999,1.584 -1.656,2.952 -2.808,4.104 -1.152,1.152 -2.37599,2.088 -3.6,2.808 -1.368,0.72 -2.664,1.296 -4.104,1.584 -1.44,0.36 -2.808,0.504 -4.104,0.504 -2.59199,0 -4.896,-0.504 -7.05599,-1.656 -2.16001,-1.08 -4.03201,-2.592 -5.61601,-4.464 -1.65599,-1.872 -2.88,-3.96 -3.744,-6.408 -0.576,-1.512 -0.93599,-3.024 -1.15199,-4.68 h -6.55201 c 0.288,2.16 0.79201,4.248 1.584,6.336 1.152,3.168 2.808,5.976 4.96801,8.424 2.15999,2.448 4.68,4.464 7.632,5.976 2.88,1.584 6.11999,2.304 9.64799,2.304 1.944,0 3.96001,-0.216 6.048,-0.792 2.01601,-0.504 3.96001,-1.224 5.832,-2.304 1.872,-0.936 3.528,-2.232 4.968,-3.672 1.44,-1.44 2.592,-3.168 3.45601,-5.112 z"\r\n          stroke-width="0"\r\n          stroke-linejoin="miter"\r\n          stroke-miterlimit="2"\r\n          fill="#f7a8b8"\r\n          stroke="#f7a8b8"\r\n          transform="translate(0 317.76544) translate(140.50456999999997 30.464960000000005) scale(1.38) translate(-340.71762 51.408)"\r\n          class="svg-elem-1" />\r\n        <path\r\n          id="path40496"\r\n          style="\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 72px;\r\n            line-height: 1;\r\n            font-family: \'Raleway Medium Alt1\';\r\n            font-variant-ligatures: none;\r\n            text-align: center;\r\n            text-anchor: middle;\r\n          "\r\n          d="m 392.96375,0 h 6.48 v -51.12 h -6.48 z m 34.632,-51.12 v 22.104 h -22.392 v 5.76 h 22.392 V 0 h 6.48 v -51.12 z"\r\n          stroke-width="0"\r\n          stroke-linejoin="miter"\r\n          stroke-miterlimit="2"\r\n          fill="#dcaec3"\r\n          stroke="#dcaec3"\r\n          transform="translate(0 317.76544) translate(212.60422939999998 30.862400000000008) scale(1.38) translate(-392.96375 51.12)"\r\n          class="svg-elem-2" />\r\n        <path\r\n          id="path40498"\r\n          style="\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 72px;\r\n            line-height: 1;\r\n            font-family: \'Raleway Medium Alt1\';\r\n            font-variant-ligatures: none;\r\n            text-align: center;\r\n            text-anchor: middle;\r\n          "\r\n          d="m 470.09262,-44.136 -2.808,7.632 6.48001,16.488 h -12.81601 l -1.944,5.04 h 16.20001 L 481.25263,0 h 6.91199 z m -2.808,-6.984 h -5.47199 L 440.86063,0 h 6.62399 l 17.06401,-43.632 z"\r\n          stroke-width="0"\r\n          stroke-linejoin="miter"\r\n          stroke-miterlimit="2"\r\n          fill="#c1b4cf"\r\n          stroke="#c1b4cf"\r\n          transform="translate(0 317.76544) translate(278.7019238 30.862400000000008) scale(1.38) translate(-440.86063 51.12)"\r\n          class="svg-elem-3" />\r\n        <path\r\n          id="path40500"\r\n          style="\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 72px;\r\n            line-height: 1;\r\n            font-family: \'Raleway Medium Alt1\';\r\n            font-variant-ligatures: none;\r\n            text-align: center;\r\n            text-anchor: middle;\r\n          "\r\n          d="m 521.6975,-19.584 c 1.584,-0.36 3.096,-1.08 4.392,-2.088 1.296,-0.936 2.448,-2.088 3.384,-3.456 0.936,-1.296 1.656,-2.808 2.16,-4.464 0.504,-1.656 0.792,-3.384 0.792,-5.184 0,-2.016 -0.432,-3.96 -1.152,-5.904 -0.792,-1.944 -1.872,-3.672 -3.24,-5.256 -1.368,-1.584 -3.024,-2.808 -4.896,-3.744 -1.872,-0.936 -3.96,-1.44 -6.192,-1.44 h -21.888 V 0 h 6.48 v -18.36 h 6.48 l -3.6,-5.76 h -2.88 v -21.24 h 15.048 c 1.224,0 2.376,0.288 3.528,0.864 1.152,0.576 2.088,1.296 2.952,2.304 0.864,1.008 1.512,2.088 2.016,3.384 0.504,1.296 0.792,2.664 0.792,4.032 0,1.44 -0.216,2.736 -0.648,4.032 -0.504,1.368 -1.08,2.448 -1.8,3.456 -0.792,1.008 -1.728,1.8 -2.808,2.304 -1.08,0.576 -2.304,0.864 -3.6,0.864 h -5.688 l 3.744,5.76 11.664,18.36 h 7.344 z"\r\n          stroke-width="0"\r\n          stroke-linejoin="miter"\r\n          stroke-miterlimit="2"\r\n          fill="#a6bbda"\r\n          stroke="#a6bbda"\r\n          transform="translate(0 317.76544) translate(353.4936044 30.862400000000008) scale(1.38) translate(-495.0575 51.12)"\r\n          class="svg-elem-4" />\r\n        <path\r\n          id="path40502"\r\n          style="\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 72px;\r\n            line-height: 1;\r\n            font-family: \'Raleway Medium Alt1\';\r\n            font-variant-ligatures: none;\r\n            text-align: center;\r\n            text-anchor: middle;\r\n          "\r\n          d="M 542.3075,-51.12 V 0 h 6.48 v -39.528 l 11.448,20.448 3.456,-5.904 -14.544,-26.136 z m 43.92,0 -18.576,33.192 -3.384,5.904 1.584,2.808 h 3.672 l 16.992,-30.312 V 0 h 6.48 v -51.12 z"\r\n          stroke-width="0"\r\n          stroke-linejoin="miter"\r\n          stroke-miterlimit="2"\r\n          fill="#8bc1e5"\r\n          stroke="#8bc1e5"\r\n          transform="translate(0 317.76544) translate(418.69860439999997 30.862400000000008) scale(1.38) translate(-542.3075 51.12)"\r\n          class="svg-elem-5" />\r\n        <path\r\n          id="path40504"\r\n          style="\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 72px;\r\n            line-height: 1;\r\n            font-family: \'Raleway Medium Alt1\';\r\n            font-variant-ligatures: none;\r\n            text-align: center;\r\n            text-anchor: middle;\r\n          "\r\n          d="m 611.64688,-45.36 h 27.576 v -5.76 h -34.05601 v 15.84 h 6.48001 z m -6.48001,39.6 V 0 h 34.704 v -5.76 z m 6.48001,-17.64 h 23.976 v -5.4 h -30.45601 v 16.56 h 6.48001 z"\r\n          stroke-width="0"\r\n          stroke-linejoin="miter"\r\n          stroke-miterlimit="2"\r\n          fill="#70c7f1"\r\n          stroke="#70c7f1"\r\n          transform="translate(0 317.76544) translate(505.444535 30.862400000000008) scale(1.38) translate(-605.16687 51.12)"\r\n          class="svg-elem-6" />\r\n        <path\r\n          id="path40506"\r\n          style="\r\n            font-style: normal;\r\n            font-weight: 500;\r\n            font-size: 72px;\r\n            line-height: 1;\r\n            font-family: \'Raleway Medium Alt1\';\r\n            font-variant-ligatures: none;\r\n            text-align: center;\r\n            text-anchor: middle;\r\n          "\r\n          d="m 655.24063,-45.36 h 27.576 v -5.76 h -34.05601 v 15.84 h 6.48001 z m -6.48001,39.6 V 0 h 34.704 v -5.76 z m 6.48001,-17.64 h 23.976 v -5.4 h -30.45601 v 16.56 h 6.48001 z"\r\n          stroke-width="0"\r\n          stroke-linejoin="miter"\r\n          stroke-miterlimit="2"\r\n          fill="#55cdfc"\r\n          stroke="#55cdfc"\r\n          transform="translate(0 317.76544) translate(565.60391 30.862400000000008) scale(1.38) translate(-648.76062 51.12)"\r\n          class="svg-elem-7" />\r\n      </g>\r\n      <image\r\n        id="icon"\r\n        x="648"\r\n        y="309"\r\n        width="150"\r\n        height="150"\r\n        xlink:href="data:image/png;base64,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" />\r\n    </g>\r\n  </g>\r\n</svg>\r\n';

        /***/
      },

    /***/ 27230:
      /*!*****************************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/app-detail-modal/app-detail-modal.component.html?ngResource ***!
  \*****************************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-content>\r\n  <div class="app-detail-modal-content">\r\n    <swiper\r\n      [autoplay]="false"\r\n      [keyboard]="true"\r\n      [pagination]="true"\r\n      [scrollbar]="false"\r\n      [zoom]="true"\r\n    >\r\n      <ng-template swiperSlide>\r\n        <div class="slide-content">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-subtitle>{{ apps.selected.name }}</ion-card-subtitle>\r\n              <ion-card-title>Features</ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content\r\n              ><app-featurelist></app-featurelist\r\n            ></ion-card-content>\r\n            <toggle-link [verb]="\'edit\'"></toggle-link>\r\n\r\n            <toggle-link [verb]="\'add\'"></toggle-link>\r\n          </ion-card>\r\n        </div>\r\n      </ng-template>\r\n      <ng-template swiperSlide><app-timeline></app-timeline> </ng-template>\r\n      <ng-template swiperSlide>\r\n        <div class="asset-container">\r\n          <h3>Assets</h3>\r\n          <h6>coming soon</h6>\r\n        </div>\r\n      </ng-template>\r\n    </swiper>\r\n  </div>\r\n</ion-content>\r\n';

        /***/
      },

    /***/ 77054:
      /*!***************************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/createapp-modal/createapp-modal.component.html?ngResource ***!
  \***************************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-modal [isOpen]="apps.views.newapp">\r\n  <ng-template>\r\n    <ion-header translucent>\r\n      <ion-toolbar>\r\n        <ion-title #title>App Name</ion-title>\r\n        <ion-buttons slot="end">\r\n          <ion-button (click)="close()">Close</ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <swiper\r\n        #swiper\r\n        [autoplay]="false"\r\n        [keyboard]="true"\r\n        [pagination]="true"\r\n        [scrollbar]="false"\r\n        [zoom]="true"\r\n        (slideChange)="slideChanged($event)"\r\n        [style.backgroundImage]="bgImage"\r\n        class="fullscreen picture-bg">\r\n        <ng-template swiperSlide>\r\n          <div fullscreen class="fullscreen slide-content">\r\n            <div class="device-frame">\r\n              <ion-header translucent="true">\r\n                <ion-toolbar>\r\n                  <ion-title>\r\n                    <ion-input\r\n                      [(ngModel)]="apps.stagingApp.name"\r\n                      autofocus="true"\r\n                      clearInput="true"\r\n                      class="newappinput"\r\n                      placeholder="awesome app"></ion-input>\r\n                  </ion-title>\r\n                </ion-toolbar>\r\n              </ion-header>\r\n            </div>\r\n            <ion-button (click)="slideNext()">Next</ion-button>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template swiperSlide>\r\n          <div class="fullscreen slide-content">\r\n            <ion-card>\r\n              <ion-card-content\r\n                ><app-timeline\r\n                  [animate]="animate"\r\n                  [static]="true"></app-timeline\r\n              ></ion-card-content>\r\n            </ion-card>\r\n            <ion-button (click)="slideNext()">Next</ion-button>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template swiperSlide>\r\n          <div class="fullscreen slide-content">\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title>Assets</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content> Coming soon </ion-card-content>\r\n            </ion-card>\r\n            <ion-button\r\n              (click)="apps.create()"\r\n              [disabled]="!apps.stagingApp.name">\r\n              <span *ngIf="!apps.creating">Create</span>\r\n              <ion-spinner *ngIf="apps.creating"></ion-spinner>\r\n            </ion-button>\r\n          </div>\r\n        </ng-template>\r\n      </swiper>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n';

        /***/
      },

    /***/ 24911:
      /*!*********************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/delete-modal/delete-modal.component.html?ngResource ***!
  \*********************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-content>\r\n  <div class="delete-app-modal-content">\r\n    <ion-button\r\n      expand="block"\r\n      color="danger"\r\n      class="ion-activatable ripple-parent"\r\n      (click)="apps.delete()"\r\n    >\r\n      <ion-icon slot="start" name="trash"></ion-icon>\r\n      Delete App\r\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\r\n    </ion-button>\r\n\r\n    <ion-button\r\n      expand="block"\r\n      class="ion-activatable ripple-parent"\r\n      (click)="apps.cancelDelete()"\r\n    >\r\n      Cancel\r\n      <ion-ripple-effect type="unbounded"></ion-ripple-effect>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n';

        /***/
      },

    /***/ 22483:
      /*!*********************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/fab-contents/fab-contents.component.html?ngResource ***!
  \*********************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-fab\r\n  #fab\r\n  id="fab"\r\n  (click)="apps.views.fab = !apps.views.fab"\r\n  [activated]="apps.views.fab"\r\n  vertical="bottom"\r\n  horizontal="end"\r\n  slot="fixed">\r\n  <ion-fab-button [translucent]="true" size="small">\r\n    <ion-icon name="add"></ion-icon>\r\n  </ion-fab-button>\r\n\r\n  <ion-fab-list side="top">\r\n    <ion-fab-button (click)="apps.add()" color="light">\r\n      <ion-icon name="add"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-button (click)="apps.refresh()" color="light">\r\n      <ion-icon name="refresh"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-button (click)="apps.isDeleting($event)" color="light">\r\n      <ion-icon name="trash"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n';

        /***/
      },

    /***/ 8860:
      /*!*******************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/featurelist/featurelist.component.html?ngResource ***!
  \*******************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-list #featurelist lines="full">\r\n  <ion-item class="animate-in" *ngIf="apps.features.adding">\r\n    <ion-button\r\n      *ngIf="!apps.features.saving"\r\n      (click)="addFeature()"\r\n      fill="clear">\r\n      <ion-icon\r\n        style="font-size: 1.6em"\r\n        slot="start"\r\n        color="primary"\r\n        name="add-sharp"></ion-icon>\r\n    </ion-button>\r\n\r\n    <ion-spinner\r\n      *ngIf="apps.features.saving"\r\n      #spinner\r\n      slot="start"\r\n      style="width: 1.6em"\r\n      name="crescent"></ion-spinner>\r\n\r\n    <ion-input\r\n      [(ngModel)]="apps.stagingFeature"\r\n      [disabled]="apps.features.saving"\r\n      clear-input="true"\r\n      placeholder="inspire us..."></ion-input>\r\n  </ion-item>\r\n  <ng-container *ngFor="let feature of apps.selected.features">\r\n    <ion-item>\r\n      <ion-label>{{ feature }}</ion-label>\r\n      <ion-icon\r\n        *ngIf="!apps.features.editing"\r\n        slot="start"\r\n        color="success"\r\n        name="checkmark-sharp"></ion-icon>\r\n      <ion-icon\r\n        *ngIf="apps.features.editing && !deleteLoading[feature]"\r\n        slot="start"\r\n        color="danger"\r\n        name="remove-circle-sharp"\r\n        class="animated pulse"\r\n        #delete\r\n        (click)="deleteFeature(feature)">\r\n      </ion-icon>\r\n      <ion-spinner\r\n        *ngIf="deleteLoading[feature]"\r\n        #spinner\r\n        slot="start"\r\n        style="width: 1.6em"\r\n        name="crescent"></ion-spinner>\r\n    </ion-item>\r\n  </ng-container>\r\n  <ion-text\r\n    *ngIf="\r\n      (!apps.selected.features || apps.selected.features.length == 0) &&\r\n      !apps.features.editing &&\r\n      !apps.features.adding\r\n    "\r\n    style="font-weight: 200"\r\n    >no features, add some!</ion-text\r\n  >\r\n</ion-list>\r\n';

        /***/
      },

    /***/ 38082:
      /*!*************************************************************************************!*\
  !*** ./src/app/portfolio/child-classes/timeline/timeline.component.html?ngResource ***!
  \*************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<div class="timeline-content">\r\n  <div\r\n    *ngIf="static"\r\n    class="timeline-overlay"\r\n    [style.animation]="\r\n      animate ? \'step-down 6s linear 0.5s forwards\' : \'\'\r\n    "></div>\r\n  <h3>Product Timeline</h3>\r\n  <div\r\n    *ngFor="let event of app.timeline; index as i"\r\n    class="t-event t-event-{{ i }}">\r\n    <div\r\n      [style.flexDirection]="reverse(event, i) ? \'row-reverse\' : \'row\'"\r\n      [style.right]="reverse(event, i) ? \'-20px !important\' : \'\'"\r\n      [ngClass]="{ left: i % 2 == 0, right: i % 2 != 0 }"\r\n      class="t-half">\r\n      <ion-button\r\n        size="small"\r\n        fill="solid"\r\n        *ngIf="!static && untouched(event, i)"\r\n        class="link-btn"\r\n        (click)="apps.setInProgress(event, i)">\r\n        Start\r\n      </ion-button>\r\n      <ion-button\r\n        size="small"\r\n        fill="solid"\r\n        *ngIf="!static && event.inProgress"\r\n        class="link-btn"\r\n        (click)="apps.setIsDone(event, i)">\r\n        Done\r\n      </ion-button>\r\n      <div style="min-width: 10px"></div>\r\n      <span>{{ event.description }}</span>\r\n    </div>\r\n    <div class="t-line"></div>\r\n    <div style="color: #ed576b" class="t-dot">\r\n      <ion-button size="small" fill="clear">\r\n        <ion-icon\r\n          style="color: #ed576b"\r\n          [style.backgroundColor]="static ? \'transparent\' : \'white\'"\r\n          *ngIf="!event.inProgress && !event.isDone"\r\n          [style.animation]="getAnimation(i)"\r\n          [name]="static ? \'heart\' : \'heart-outline\'"></ion-icon>\r\n        <ion-spinner\r\n          style="background: white"\r\n          *ngIf="event.inProgress"\r\n          style="width: 20px; height: 20px"\r\n          name="crescent"></ion-spinner>\r\n        <ion-icon\r\n          style="background: white"\r\n          *ngIf="event.isDone"\r\n          name="heart"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ 29324:
      /*!***************************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html?ngResource ***!
  \***************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-content class="ion-padding" (click)="screenClicked($event)">\r\n    <ion-refresher #refresher slot="fixed" (ionRefresh)="apps.refresh(true)">\r\n        <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <ng-container *ngIf="!apps.loading">\r\n        <div class="puff-in-center" *ngFor="let person of apps.collaborators">\r\n            <ion-button color="pretty-princess-pink" size="small" (click)="getSize(appTileFlex)" class="originator-label">\r\n                {{ person }}\r\n            </ion-button>\r\n\r\n            <div #appTileFlex class="app-tile-flex">\r\n                <ng-container *ngFor="let app of apps.groupedApps[person]">\r\n                    <div class="app-tile-wrap p-component">\r\n                        <ion-button fill="clear" (click)="apps.appSelected(app)" class="app-tile" [class.vibrate-3]="apps.deleting">\r\n                            <div (click)="apps.confirmDelete($event, app)" *ngIf="apps.deleting" class="app-delete-icon">\r\n                                <ion-icon class="ion-delete-app-icon" name="remove"></ion-icon>\r\n                            </div>\r\n                        </ion-button>\r\n                        <div class="app-label">\r\n                            {{ app.name }}\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <div *ngIf="apps.loading" class="progress-container">\r\n        <ion-spinner color="primary" style="width: 100px; height: 100px" name="crescent">\r\n        </ion-spinner>\r\n    </div>\r\n</ion-content>\r\n\r\n<app-fab-contents></app-fab-contents>\r\n\r\n<ion-modal [isOpen]="apps.views.deleteapp" [breakpoints]="[0.1, 0.25, 0.5, 1]" [initialBreakpoint]="0.25">\r\n    <ng-template>\r\n        <app-delete-modal></app-delete-modal>\r\n    </ng-template>\r\n</ion-modal>\r\n\r\n<ion-modal [isOpen]="apps.views.appdetail" [breakpoints]="[0.1, 0.25, 0.6, 1]" [initialBreakpoint]="0.6" (didDismiss)="apps.views.appdetail = false">\r\n    <ng-template>\r\n        <app-app-detail-modal></app-app-detail-modal>\r\n    </ng-template>\r\n</ion-modal>\r\n\r\n<app-createapp-modal></app-createapp-modal>';

        /***/
      },

    /***/ 61605:
      /*!*****************************************************************************************!*\
  !*** ./src/app/settings/components/profile-edit/profile-edit.component.html?ngResource ***!
  \*****************************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<div>\n  <ion-header translucent>\n    <ion-toolbar>\n      <ion-buttons slot="start">\n        <ion-back-button defaultHref="/settings" text="Back"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Edit Greeting Name</ion-title>\n      <ion-buttons slot="end">\n        <ion-button *ngIf="modified" [disabled]="saving" (click)="saveDisplayName()">Save</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card-content>\n    <ion-item class="ion-text-center" lines="none" id="display-name-input">\n      <ion-input (ionChange)="modified = true" (ionFocus)="showClear = true" (ionBlur)="showClear = false"\n        [(ngModel)]="auth.user.displayname" #displayNameInput [clearInput]="showClear" enterkeyhint="done">\n      </ion-input>\n      <ion-spinner [hidden]="!saving" name="crescent"></ion-spinner>\n    </ion-item>\n  </ion-card-content>\n</div>';

        /***/
      },

    /***/ 41369:
      /*!*******************************************************************************!*\
  !*** ./src/app/settings/components/profile/profile.component.html?ngResource ***!
  \*******************************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<div>\n  <ion-header translucent>\n    <ion-toolbar>\n      <ion-title>Greeting Name</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card-content>\n    <ion-avatar style="width: 10rem; height: 10rem" slot="">\n      <ion-img #profileImg [src]="pfp">\n      </ion-img>\n      <ion-button fill="clear" (click)="takePicture()" class="tap-to-edit-btn">\n\n      </ion-button>\n    </ion-avatar>\n    <ion-item lines="none" id="displayname" class="ion-text-center" [style.width]="\'100%\'" button\n      (click)="editDisplayName()">\n      <ion-label>\n        <ion-text>{{ auth.user.displayname }}</ion-text>\n      </ion-label>\n    </ion-item>\n    <!-- <ion-text class="ion-padding-top">{{ auth.user.displayname }}</ion-text> -->\n  </ion-card-content>\n</div>';

        /***/
      },

    /***/ 49885:
      /*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.html?ngResource ***!
  \*************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-content>\r\n  <ion-card [style.maxHeight]="profileCardMaxHeight" [style.height]="profileCardHeight" #profileCard id="ion-nav-card">\r\n    <ion-nav #ionNav [root]="profileRoot"></ion-nav>\r\n  </ion-card>\r\n\r\n  <!-- <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title id="displayname">\r\n        <ion-avatar style="width: 10rem; height: 10rem" slot="">\r\n          <ion-img #profileImg [src]="pfp">\r\n          </ion-img>\r\n          <ion-button fill="clear" (click)="takePicture()" class="tap-to-edit-btn">\r\n\r\n          </ion-button>\r\n        </ion-avatar>\r\n        <ion-text class="ion-padding-top">{{ auth.user.displayname }}</ion-text>\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card> -->\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Wallpaper</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <!-- <div class="bg-grid-container">\r\n      <div class="bg-img" *ngFor="let bgidx of bgs" [style.backgroundImage]="formatBgImgCss(bgidx)"\r\n        (click)="setBackgroundImage(bgidx)"></div>\r\n    </div> -->\r\n      <app-poster-slider [cards]="bgs"></app-poster-slider>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Display</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content> </ion-card-content>\r\n  </ion-card>\r\n</ion-content>';

        /***/
      },

    /***/ 44266:
      /*!*********************************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.html?ngResource ***!
  \*********************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-content scrollX="false" scrollY="false" fullscreen="true">\r\n  <div class="logo-container">\r\n    <app-logo [width]="\'300px\'">Hello world</app-logo>\r\n  </div>\r\n</ion-content>\r\n';

        /***/
      },

    /***/ 65230:
      /*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<ion-tabs id="background" class="ion-tabs-background" [style.backgroundImage]="backgroundImage" #ionTabs>\r\n  <ion-header translucent="true">\r\n    <ion-toolbar>\r\n      <ion-title>\r\n        <ion-label>\r\n          <app-logo [width]="\'200px\'"></app-logo>\r\n        </ion-label>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-tab-bar [translucent]="true" slot="bottom">\r\n    <ion-tab-button tab="portfolio">\r\n      <ion-icon name="home"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="treasury">\r\n      <ion-icon [src]="\'../../assets/svg/treasure-chest-solid.svg\'"></ion-icon>\r\n      <ion-label style="margin-bottom: -4px">Treasury</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab="settings">\r\n      <ion-icon name="person-circle"></ion-icon>\r\n      <ion-label>{{ auth.user.displayname }}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>';

        /***/
      },

    /***/ 91815:
      /*!*************************************************************!*\
  !*** ./src/app/treasury/treasury.component.html?ngResource ***!
  \*************************************************************/
      /***/ (module) => {
        "use strict";
        module.exports =
          '<div class="treasury-container">\r\n  <swiper (slideChange)="slideChanged($event)" [effect]="\'coverflow\'" [grabCursor]="true" [centeredSlides]="true"\r\n    [slidesPerView]="\'auto\'" [coverflowEffect]="{\r\n      rotate: 50,\r\n      stretch: 0,\r\n      depth: 100,\r\n      modifier: 1,\r\n      slideShadows: false\r\n    }">\r\n    <ng-template swiperSlide *ngFor="let card of cards">\r\n      <div class="slide-content">\r\n        <ion-card>\r\n          <div *ngIf="card.img !== undefined" class="card-header-img">\r\n            <img [src]="card.img" />\r\n          </div>\r\n          <div *ngIf="card.img === undefined" class="card-header-img">\r\n            <!-- <iframe loading="lazy" [src]="card.link | safe: \'resourceUrl\'"></iframe> -->\r\n          </div>\r\n          <ion-card-header>\r\n            <ion-card-subtitle style="text-transform: none"><a [href]="card.link">{{ card.link }}</a>\r\n            </ion-card-subtitle>\r\n            <ion-card-title>{{ card.name }}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-button [disabled]="true">July 1st</ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n    </ng-template>\r\n  </swiper>\r\n</div>';

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ __webpack_require__.O(0, ["vendor"], () =>
      __webpack_exec__(14431)
    );
    /******/ var __webpack_exports__ = __webpack_require__.O();
    /******/
  },
]);
//# sourceMappingURL=main.js.map
