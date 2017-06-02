export interface IRace {
  id: number;
  name: string;
}

export class Race {
  id: number;
  name: string;

  constructor (params: IRace) {
    this.id = params.id
    this.name = params.name;
  }
}