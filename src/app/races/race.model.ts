import { Unit } from 'app/units/unit.model';

export interface IRace {
  id: number;
  name: string;
  unitAdjustment: Unit[]; 
}

export class Race {
  id: number;
  name: string;
  unitAdjustment: Unit[]; 

  constructor (params: IRace) {
    this.id = params.id
    this.name = params.name;
    this.unitAdjustment = params.unitAdjustment;
  }
}