import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Unit } from './unit.model';

@Injectable()
export class UnitService {

  private unitsUrl = 'assets/units.json'

  constructor(private http: Http) { }

  getAll(): Observable<Unit[]> {
    return this.http.get(this.unitsUrl)
      .map((res: Response) => res.json());
  }
}
