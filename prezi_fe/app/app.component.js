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
var slide_service_1 = require('./slide.service');
var AppComponent = (function () {
    function AppComponent(slideService) {
        this.slideService = slideService;
        this.title = 'Prezi Slides Assignment';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getSlides();
    };
    AppComponent.prototype.getSlides = function () {
        var _this = this;
        this.slideService.getSlides().then(function (slides) { return _this.slides = slides; });
    };
    AppComponent.prototype.onSelect = function (slide) {
        this.selectedSlide = slide;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <slide-detail [slide]=\"selectedSlide\"></slide-detail>\n    <h2>The Slides</h2>\n    <ul class=\"slides\">\n        <li *ngFor=\"let slide of slides\"\n        [class.selected]=\"slide == selectedSlide\"\n        (click)=\"onSelect(slide)\">\n            <span class=\"badge\">{{slide.id}}</span> {{slide.title}}\n        </li>\n    </ul>\n    ",
            providers: [slide_service_1.SlideService]
        }), 
        __metadata('design:paramtypes', [slide_service_1.SlideService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map