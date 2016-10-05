import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Slide } from './slide';
import { SlideService } from './slide.service';

@Component({
    moduleId: module.id,
    selector: 'slides-main',
    templateUrl: './templates/slides.component.html',
    styleUrls: ['./css/slides.component.css'],
    providers: [SlideService]
})

export class SlidesComponent implements OnInit {
    title = 'Prezi Slides Assignment';
    slides: Slide[];
    selectedSlide: Slide;

    constructor(private slideService: SlideService) {}

    ngOnInit(): void {
        this.getSlides();
    }

    getSlides(): void {
        this.slideService.getSlides().then(slides => this.slides = slides);
    }

    onSelect(slide: Slide): void {
        this.selectedSlide = slide;
    }
}
