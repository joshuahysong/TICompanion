import { Unit, UnitType } from 'app/shared/unit.model';

export const Units: Unit[] = [
  {
    "name": "Carrier",
    "move": 1,
    "attack": 9,
    "attacks": 1,
    "hp": 1,
    "carry": 6,
    "cost": 3,
    "type": UnitType.Space,
    "maxCount": 3
  },
  {
    "name": "Fighter",
    "move": 0,
    "attack": 9,
    "attacks": 1,
    "hp": 1,
    "carry": 0,
    "cost": 0.5,
    "type": UnitType.Space,
    "maxCount": 0
  },
  {
    "name": "Destroyer",
    "move": 2,
    "attack": 9,
    "attacks": 1,
    "hp": 1,
    "carry": 0,
    "cost": 1,
    "type": UnitType.Space,
    "maxCount": 0
  },
  {
    "name": "Cruiser",
    "move": 2,
    "attack": 7,
    "attacks": 1,
    "hp": 1,
    "carry": 0,
    "cost": 2,
    "type": UnitType.Space,
    "maxCount": 0
  },
  {
    "name": "Dreadnought",
    "move": 1,
    "attack": 5,
    "attacks": 1,
    "hp": 1,
    "carry": 0,
    "cost": 5,
    "type": UnitType.Space,
    "maxCount": 5
  },
  {
    "name": "War Sun",
    "move": 2,
    "attack": 3,
    "attacks": 3,
    "hp": 1,
    "carry": 6,
    "cost": 12,
    "type": UnitType.Space,
    "maxCount": 2
  },
  {
    "name": "PDS",
    "move": 0,
    "attack": 6,
    "attacks": 1,
    "hp": 0,
    "carry": 0,
    "cost": 2,
    "type": UnitType.Ground,
    "maxCount": 6
  },
  {
    "name": "Ground Force",
    "move": 0,
    "attack": 8,
    "attacks": 1,
    "hp": 1,
    "carry": 0,
    "cost": 0.5,
    "type": UnitType.Ground,
    "maxCount": 0
  },
  {
    "name": "Shock Troop",
    "move": 0,
    "attack": 5,
    "attacks": 1,
    "hp": 1,
    "carry": 0,
    "cost": 0,
    "type": UnitType.Ground,
    "maxCount": 0
  },
  {
    "name": "Mechanized Unit",
    "move": 0,
    "attack": 6,
    "attacks": 2,
    "hp": 2,
    "carry": 0,
    "cost": 2,
    "type": UnitType.Ground,
    "maxCount": 3
  },
  {
    "name": "Flagship",
    "move": 0,
    "attack": 0,
    "attacks": 0,
    "hp": 0,
    "carry": 0,
    "cost": 0,
    "type": UnitType.Space,
    "maxCount": 1
  },
  {
    "name": "Space Dock",
    "move": 0,
    "attack": 0,
    "attacks": 0,
    "hp": 0,
    "carry": 3,
    "cost": 4,
    "type": UnitType.Space,
    "maxCount": 4
  }
]
