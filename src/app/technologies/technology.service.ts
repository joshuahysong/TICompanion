import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'


import { Technology } from './technology.model';

@Injectable()
export class TechnologyService {

  private technologiesUrl = 'assets/technologies.json'

  constructor(private http: Http) { }

  getAll(): Observable<Technology[]> {
    return this.http.get(this.technologiesUrl)
      .map((res: Response) => res.json());
  }

  getByID(id: number): Observable<Technology> {
    return this.getAll().map(all => {
      return all.find(e => e.id === id);
    });
  }
}

