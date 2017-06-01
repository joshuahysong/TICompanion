import { Injectable } from '@angular/core';

import { Race } from './race.model';
import { Races } from '../shared/races.data';

@Injectable()
export class RaceService {

  constructor() { }

  getRaces(): Race[] {
    return Races;
  }
}
