import { Component, Input } from '@angular/core';

import { Slide } from './slide';

@Component({
    selector: 'slide-detail',
    template: `
    <div *ngIf="slide">
        <h2>{{slide.title}} details!</h2>
        <div><label>id: </label>{{slide.id}}</div>
        <div><label>title: </label>{{slide.title}}</div>
        <div><label>thumbnail: </label>{{slide.thumbnail}}</div>
        <div><label>created at: </label>{{slide.createdAt}}</div>
    </div>
    `
})

export class SlideDetailComponent {
    @Input()
    slide: Slide;
}
