"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        // Use the component constructor to inject providers.
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.input = {
            "email": "",
            "password": "",
            "confirmPassword": ""
        };
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
