import { Injectable } from '@angular/core';

import { Race } from './race.model';
import { Races } from 'assets/races';

@Injectable()
export class RaceService {

  constructor() { }

  getRaces(): Race[] {
    return Races;
  }

  getRaceByID(id: number): Race {
    let raceIndex = Races.findIndex(x => x.id == id);
    return Races[raceIndex];
  }
}
