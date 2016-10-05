import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { SlideDetailComponent } from './slide-detail.component';
import { SlidesComponent } from './slides.component';
import { SlideService } from './slide.service';


@NgModule({
    imports: [ 
        BrowserModule 
    ],

    declarations: [
        AppComponent,
        SlideDetailComponent,
        SlidesComponent
    ],

    providers: [
        SlideService
    ],

    bootstrap: [ 
        AppComponent 
    ]
})

export class AppModule { }
