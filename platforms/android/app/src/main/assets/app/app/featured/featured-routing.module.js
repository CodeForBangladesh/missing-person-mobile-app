"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var featured_component_1 = require("./featured.component");
var routes = [
    { path: "", component: featured_component_1.FeaturedComponent }
];
var FeaturedRoutingModule = /** @class */ (function () {
    function FeaturedRoutingModule() {
    }
    FeaturedRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], FeaturedRoutingModule);
    return FeaturedRoutingModule;
}());
exports.FeaturedRoutingModule = FeaturedRoutingModule;
