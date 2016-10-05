import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { SlideDetailComponent } from './slide-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      SlideDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
