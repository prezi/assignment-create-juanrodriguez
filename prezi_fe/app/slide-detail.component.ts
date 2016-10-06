import { Component, Input } from '@angular/core';

import { Slide } from './slide';

@Component({
    moduleId: module.id,
    selector: 'slide-detail',
    templateUrl: './assets/templates/slide-detail.component.html',
    styleUrls: ['./assets/css/slide-detail.component.css']
})

export class SlideDetailComponent {
    @Input()
    slide: Slide;
}
