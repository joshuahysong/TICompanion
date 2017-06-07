import { Race } from 'app/races/race.model';
import { Unit } from 'app/units/unit.model';

export class Player {
  id: number;
  name: string;
  race: Race;
  units: Unit[];

  constructor (id, name) {
    this.id = id;
    this.name = name;
  }
}