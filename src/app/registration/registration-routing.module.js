"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var registration_component_1 = require("./registration.component");
var routes = [
    { path: "", component: registration_component_1.RegistrationComponent }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());
exports.RegistrationRoutingModule = RegistrationRoutingModule;
