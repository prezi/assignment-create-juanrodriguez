import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Slide } from './slide';
import { SlideService } from './slide.service';

@Component({
    moduleId: module.id,
    selector: 'slides-main',
    templateUrl: './assets/templates/slides.component.html',
    styleUrls: ['./assets/css/slides.component.css'],
    providers: [SlideService]
})

export class SlidesComponent implements OnInit {
    title = 'Prezi Slides Assignment';
    slides: Observable<Slide[]>;
    selectedSlide: Slide;
    private queryTerm = new Subject<string>();
    private sortby = 0;
    sortText = 'Dsc';

    constructor(private slideService: SlideService) {}

    ngOnInit(): void {
        this.slides = this.slideService.getSlides('');
    }

    onSelect(slide: Slide): void {
        this.selectedSlide = slide;
    }

    search(term: string) {
        this.slides = this.slideService.getSlides(term);
    }

    sort() {
        if (this.sortby == 0) {
            this.sortby = 1;
            this.sortText = 'Asc';
        } else {
            this.sortby = 0;
            this.sortText = 'Dsc';
        }
        this.slides = this.slideService.getSortedSlides(this.sortby);
    }
}
