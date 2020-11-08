"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var core_1 = require("@angular/core");
var app_component_1 = require("./../app.component");
var common_1 = require("@angular/common");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
            ],
            imports: [
                // NoopAnimationsModule,
                // BrowserModule,
                // FormsModule,
                // ReactiveFormsModule,
                common_1.CommonModule,
                // HttpClientModule,
                // NgxsModule,
                // NgxsModule.forRoot([
                //   ProductState
                // ]),
                // RouterModule
                home_routing_module_1.HomeRoutingModule
            ],
            exports: [],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
