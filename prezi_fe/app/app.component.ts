import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Slide } from './slide';
import { SlideService } from './slide.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <slide-detail [slide]="selectedSlide"></slide-detail>
    <h2>The Slides</h2>
    <ul class="slides">
        <li *ngFor="let slide of slides"
        [class.selected]="slide == selectedSlide"
        (click)="onSelect(slide)">
            <span class="badge">{{slide.id}}</span> {{slide.title}}
        </li>
    </ul>
    `,
    providers: [SlideService]
})

export class AppComponent implements OnInit {
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
