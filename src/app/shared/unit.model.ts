export enum UnitType {
  Space,
  Ground
}

export interface IUnit {
  name: string;
  move: number;
  attack: number;
  attacks: number;
  hp: number;
  carry: number;
  cost: number;
  type: UnitType;
  maxCount: number;
}

export class Unit {
  name: string;
  move: number;
  attack: number;
  attacks: number;
  hp: number;
  carry: number;
  cost: number;
  type: UnitType;
  maxCount: number;

  constructor (params: IUnit) {
    this.name = params.name;
    this.move = params.move;
    this.attack = params.attack;
    this.attacks = params.attacks;
    this.hp = params.hp;
    this.carry = params.carry;
    this.cost = params.cost;
    this.type = params.type;
    this.maxCount = params.maxCount;
  }
}