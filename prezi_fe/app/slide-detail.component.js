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
var slide_1 = require('./slide');
var SlideDetailComponent = (function () {
    function SlideDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', slide_1.Slide)
    ], SlideDetailComponent.prototype, "slide", void 0);
    SlideDetailComponent = __decorate([
        core_1.Component({
            selector: 'slide-detail',
            template: "\n    <div *ngIf=\"slide\">\n        <h2>{{slide.title}} details!</h2>\n        <div><label>id: </label>{{slide.id}}</div>\n        <div><label>title: </label>{{slide.title}}</div>\n        <div><label>thumbnail: </label>{{slide.thumbnail}}</div>\n        <div><label>created at: </label>{{slide.createdAt}}</div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SlideDetailComponent);
    return SlideDetailComponent;
}());
exports.SlideDetailComponent = SlideDetailComponent;
//# sourceMappingURL=slide-detail.component.js.map