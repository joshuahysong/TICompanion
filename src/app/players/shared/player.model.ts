import { Race } from 'app/races/race.model';
import { Unit } from 'app/units/unit.model';
import { Technology } from 'app/technologies/technology.model';

export class Player {
  id: number;
  name: string;
  race: Race;
  units: Unit[];
  technologies: Technology[]

  constructor (id, name) {
    this.id = id;
    this.name = name;
  }
}