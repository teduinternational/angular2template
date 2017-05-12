"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CheckSaveFormGuard = (function () {
    function CheckSaveFormGuard() {
    }
    CheckSaveFormGuard.prototype.canDeactivate = function (component) {
        alert('You can not leave this page without saving data');
        return false;
    };
    return CheckSaveFormGuard;
}());
CheckSaveFormGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CheckSaveFormGuard);
exports.CheckSaveFormGuard = CheckSaveFormGuard;
//# sourceMappingURL=check-save-form.guard.js.map