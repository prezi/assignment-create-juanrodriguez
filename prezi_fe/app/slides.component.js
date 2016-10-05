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
var SlidesComponent = (function () {
    function SlidesComponent(slideService) {
        this.slideService = slideService;
        this.title = 'Prezi Slides Assignment';
    }
    SlidesComponent.prototype.ngOnInit = function () {
        this.getSlides();
    };
    SlidesComponent.prototype.getSlides = function () {
        var _this = this;
        this.slideService.getSlides().then(function (slides) { return _this.slides = slides; });
    };
    SlidesComponent.prototype.onSelect = function (slide) {
        this.selectedSlide = slide;
    };
    SlidesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slides-main',
            templateUrl: './templates/slides.component.html',
            styleUrls: ['./css/slides.component.css'],
            providers: [slide_service_1.SlideService]
        }), 
        __metadata('design:paramtypes', [slide_service_1.SlideService])
    ], SlidesComponent);
    return SlidesComponent;
}());
exports.SlidesComponent = SlidesComponent;
//# sourceMappingURL=slides.component.js.map