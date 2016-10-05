import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <slides-main></slides-main>
    `
})

export class AppComponent {
    title = 'Prezi Slides Assignment';
}