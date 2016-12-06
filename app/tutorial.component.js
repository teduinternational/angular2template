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
var core_1 = require('@angular/core');
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.onVote = new core_1.EventEmitter();
        this.voted = false;
    }
    TutorialComponent.prototype.changeName = function (name) {
        this.name = name;
    };
    TutorialComponent.prototype.vote = function (isVoted) {
        this.onVote.emit(isVoted);
        this.voted = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TutorialComponent.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TutorialComponent.prototype, "onVote", void 0);
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "\n    <h2>{{title}}</h2>\n    <p>Child component: {{name}}</p>\n    <button [disabled]=\"voted\" (click)=\"vote(true)\">Agree</button>\n    <button [disabled]=\"voted\" (click)=\"vote(false)\">Disgree</button>\n    <p>{{voted}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map