import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Technology } from './technology.model';

@Injectable()
export class TechnologyService {
  technologies: Technology[];
  private technologiesUrl = 'assets/technologies.json'

  constructor(private http: Http) { }

  getAll(): Observable<Technology[]> {
    if (this.technologies) {
      return Observable.of(this.technologies);
    } else {
      return this.http.get(this.technologiesUrl)
        .map((res: Response) => res.json())
        .do((technologies) => {
          this.technologies = technologies;
        });
    }
  }

  getByID(id: number): Observable<Technology> {
    if (this.technologies) {
      return Observable.of(this.technologies.find(e => e.id === id));
    } else {
      return this.getAll().map(all => {
        return all.find(e => e.id === id);
      });
    }
  }
}

