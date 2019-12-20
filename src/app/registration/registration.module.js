"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var registration_routing_module_1 = require("./registration-routing.module");
var registration_component_1 = require("./registration.component");
var nativescript_angular_1 = require("nativescript-angular");
var user_service_1 = require("~/app/shared/user.service");
var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                registration_routing_module_1.RegistrationRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            declarations: [
                registration_component_1.RegistrationComponent
            ],
            providers: [
                user_service_1.UserService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());
exports.RegistrationModule = RegistrationModule;
