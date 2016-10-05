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
var Slide = (function () {
    function Slide() {
    }
    return Slide;
}());
exports.Slide = Slide;
var SLIDES = [
    {
        "id": "56f137f432fbb67217182785",
        "title": "incididunt amet ad nostrud",
        "thumbnail": "https://placeimg.com/400/400/any",
        "createdAt": "March 6, 2014"
    },
    {
        "id": "56f137f4d62116d1231786ca",
        "title": "Lorem commodo excepteur minim",
        "thumbnail": "https://placeimg.com/400/400/any",
        "createdAt": "July 31, 2015"
    },
    {
        "id": "56f137f46ba885ffacf4d3ff",
        "title": "ut ipsum ut nostrud",
        "thumbnail": "https://placeimg.com/400/400/any",
        "createdAt": "July 5, 2015"
    },
    {
        "id": "56f137f48510226968e8c9e7",
        "title": "anim id enim duis",
        "thumbnail": "https://placeimg.com/400/400/any",
        "createdAt": "July 11, 2015"
    },
    {
        "id": "56f137f40684a0672110741c",
        "title": "consectetur dolor nisi amet",
        "thumbnail": "https://placeimg.com/400/400/any",
        "createdAt": "May 3, 2015"
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Prezi Slides';
        this.slides = SLIDES;
        this.slide = {
            id: '1',
            title: 'Test title',
            thumbnail: 'test thumb',
            createdAt: 'date'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{slide.title}} details!</h2>\n    <div><label>id: </label>{{slide.id}}</div>\n    <div><label>title: </label>{{slide.title}}</div>\n    <div><label>thumbnail: </label>{{slide.thumbnail}}</div>\n    <div><label>created at: </label>{{slide.createdAt}}</div>\n    <h2>The Slides</h2>\n    <ul class=\"slides\">\n        <li *ngFor=\"let slide of slides\">\n            <span class=\"badge\">{{slide.id}}</span> {{slide.title}}\n        </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map