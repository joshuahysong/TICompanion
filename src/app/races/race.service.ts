import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Race } from './race.model';

@Injectable()
export class RaceService {
  races: Race[];
  private racesUrl = 'assets/races.json';

  constructor(private http: Http) { }

  getAll(): Observable<Race[]> {
    if (this.races) {
      return Observable.of(this.races);
    } else {
      return this.http.get(this.racesUrl)
        .map((res: Response) => res.json())
        .do((units) => {
          this.races = units;
        })
     }
  }

  getByID(id: number): Observable<Race> {
    if (this.races) {
      return Observable.of(this.races.find(e => e.id === id));
    } else {
      return this.getAll().map(all => {
        return all.find(e => e.id === id);
      });
    }
  }
}

