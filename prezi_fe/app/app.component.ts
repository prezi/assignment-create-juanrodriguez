import { Component } from '@angular/core';

export class Slide {
    id: string;
    title: string;
    thumbnail: string;
    createdAt: string;
}

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
    <h2>{{slide.title}} details!</h2>
    <div><label>id: </label>{{slide.id}}</div>
    <div><label>title: </label>{{slide.title}}</div>
    <div><label>thumbnail: </label>{{slide.thumbnail}}</div>
    <div><label>created at: </label>{{slide.createdAt}}</div>
    <h2>The Slides</h2>
    <ul class="slides">
        <li *ngFor="let slide of slides">
            <span class="badge">{{slide.id}}</span> {{slide.title}}
        </li>
    </ul>
    `
})

export class AppComponent {
    title = 'Prezi Slides';
    slides = SLIDES;
    slide: Slide = {
        id: '1',
        title: 'Test title',
        thumbnail: 'test thumb',
        createdAt: 'date'
    };
}
