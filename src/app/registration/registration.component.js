"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("~/app/shared/user.service");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.initFields();
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.validateFields();
        //TODO: Handle error response properly.
        this.userService.register(this.input.email, this.input.password).pipe(operators_1.first())
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.hasError = true;
            _this.errorMsg = "We are experiencing technical difficulties, please try again later.";
        });
    };
    RegistrationComponent.prototype.initFields = function () {
        this.input = {
            "email": "",
            "password": "",
            "confirmPassword": ""
        };
    };
    RegistrationComponent.prototype.validateFields = function () {
        this.hasError = true;
        if (this.input.email.length == 0) {
            this.errorMsg = "Email field can not be empty.";
        }
        else if (!this.EMAIL_REGEX.test(String(this.input.email).toLowerCase())) {
            this.errorMsg = "Not an valid email.";
        }
        else if (String(this.input.password).length == 0) {
            this.errorMsg = "Password field can not be empty.";
        }
        else if (String(this.input.confirmPassword).length == 0) {
            this.errorMsg = "Confirm Password field can not be empty.";
        }
        else if (this.input.password !== this.input.confirmPassword) {
            this.errorMsg = "Password field and Confirm Password field need to be matched.";
        }
        else {
            this.hasError = false;
            this.errorMsg = "";
        }
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: "Registration",
            moduleId: module.id,
            templateUrl: "./registration.component.html"
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
