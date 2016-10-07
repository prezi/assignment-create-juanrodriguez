import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { Slide } from './slide';


@Injectable()
export class SlideService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private slidesServiceUrl = 'http://localhost:5000/prezi/api/v1.0/slides/';

    constructor(private http: Http) {}

    getSlides(term: string): Observable<Slide[]> {
      return this.http.get(this.slidesServiceUrl + term)
        .map((r: Response) => r.json().data as Slide[]);
    }

    getSortedSlides(sortVal: number): Observable<Slide[]> {
      return this.http.get(this.slidesServiceUrl + sortVal)
              .map((r: Response) => r.json().data as Slide[]);
    }
}
