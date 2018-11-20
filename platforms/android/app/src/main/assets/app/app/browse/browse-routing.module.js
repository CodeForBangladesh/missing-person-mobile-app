"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var browse_component_1 = require("./browse.component");
var routes = [
    { path: "", component: browse_component_1.BrowseComponent }
];
var BrowseRoutingModule = /** @class */ (function () {
    function BrowseRoutingModule() {
    }
    BrowseRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], BrowseRoutingModule);
    return BrowseRoutingModule;
}());
exports.BrowseRoutingModule = BrowseRoutingModule;
