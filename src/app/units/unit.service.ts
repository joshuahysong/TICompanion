import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Unit } from './unit.model';

@Injectable()
export class UnitService {
  units: Unit[];
  private unitsUrl = 'assets/units.json'

  constructor(private http: Http) { }

  getAll(): Observable<Unit[]> {
    if (this.units) {
      return Observable.of(this.units);
    } else {
      return this.http.get(this.unitsUrl)
        .map((res: Response) => res.json())
        .do((units) => {
          this.units = units;
        })
     }
  }
}
