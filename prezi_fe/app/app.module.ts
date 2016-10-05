import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { SlideDetailComponent } from './slide-detail.component';
import { SlidesComponent } from './slides.component';
import { SlideService } from './slide.service';

import './rxjs-extensions';


@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule
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
