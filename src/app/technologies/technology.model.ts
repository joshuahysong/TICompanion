export enum TechnologyType {
  Blue,
  Red,
  Yellow,
  Green
}

export interface ITechnology {
  id: number;
  name: string;
  type: TechnologyType;
  prerequisites: [string[], string[]];
  status: string;
  isResearched: boolean;
  isAvailable: boolean;
  unitAdjustment: string;
}

export class Technology {
  id: number;
  name: string;
  type: TechnologyType;
  prerequisites:  [string[], string[]];
  isResearched: boolean;
  isAvailable: boolean;
  unitAdjustment: string;

  constructor (params: ITechnology) {
    this.id = params.id
    this.name = params.name;
    this.type =  params.type;
    this.prerequisites = params.prerequisites;
    this.isResearched = params.isResearched;
    this.isAvailable = params.isAvailable;
    this.unitAdjustment = params.unitAdjustment;
  }
}