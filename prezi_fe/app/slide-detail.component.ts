import { Component, Input } from '@angular/core';

import { Slide } from './slide';

@Component({
    moduleId: module.id,
    selector: 'slide-detail',
    templateUrl: './templates/slide-detail.component.html',
    styleUrls: ['./css/slide-detail.component.css']
})

export class SlideDetailComponent {
    @Input()
    slide: Slide;
}
