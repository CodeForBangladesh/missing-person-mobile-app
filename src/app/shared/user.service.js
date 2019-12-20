"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var throwError_1 = require("rxjs/internal/observable/throwError");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // TODO:: Read from config file.
        this.registerEndpoint = 'http://a708121a.ngrok.io/api/v1/auth/register';
    }
    UserService.prototype.register = function (email, password) {
        return this.http.post(this.registerEndpoint, { email: email, password: password });
    };
    UserService.prototype.handleError = function (err) {
        console.error('An error occurred', err);
        return throwError_1.throwError(err.message || err);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
