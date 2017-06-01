import { Race } from '../../shared/race.model';

export class Player {
  id: number;
  name: string;
  race: Race;

  constructor (id, name) {
    this.id = id;
    this.name = name;
  }
}