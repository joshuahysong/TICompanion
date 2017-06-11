import { Unit } from 'app/units/unit.model';

export interface IRace {
  id: number;
  name: string;
  unitAdjustment: Unit[];
  iconPath: string;
}

export class Race {
  id: number;
  name: string;
  unitAdjustment: Unit[];
  iconPath: string;

  constructor (params: IRace) {
    this.id = params.id
    this.name = params.name;
    this.unitAdjustment = params.unitAdjustment;
    this.iconPath = '/assets/img/' + params.iconPath
  }
}
