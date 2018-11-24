"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var settings_component_1 = require("./settings.component");
var routes = [
    { path: "", component: settings_component_1.SettingsComponent }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());
exports.SettingsRoutingModule = SettingsRoutingModule;
