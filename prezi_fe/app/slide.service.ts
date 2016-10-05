import { Injectable } from '@angular/core';

import { Slide } from './slide';
import { SLIDES } from './mock-slides';

@Injectable()
export class SlideService {
    getSlides(): Promise<Slide[]> {
        return Promise.resolve(SLIDES);
    }
}
