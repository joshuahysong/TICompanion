import { Race } from '../../shared/race.model';
import { Unit } from '../../shared/unit.model';

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