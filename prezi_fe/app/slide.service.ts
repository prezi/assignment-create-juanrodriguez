import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Slide } from './slide';


@Injectable()
export class SlideService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private slidesServiceUrl = 'http://localhost:5000/prezi/api/v1.0/slides';

    constructor(private http: Http) {}

    getSlides(): Promise<Slide[]> {
        return this.http.get(this.slidesServiceUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
    }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }
}
