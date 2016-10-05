import { Component } from '@angular/core';
import { Slide } from './slide';


// Test data
const SLIDES: Slide[] = [
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
})

export class AppComponent {
    title = 'Prezi Slides';
    slides = SLIDES;
    selectedSlide: Slide;

    onSelect(slide: Slide): void {
        this.selectedSlide = slide;
    }
}
