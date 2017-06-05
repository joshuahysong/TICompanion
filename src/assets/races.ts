import { Race } from 'app/shared/race.model';
import { Unit, UnitType } from 'app/shared/unit.model';

export const Races: Race[] = [
  { // The Arborec
    "id": 1,
    "name": "The Arborec",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 1,
        "attack": -6,
        "attacks": 2,
        "hp": 2,
        "carry": 5,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Barony of Letnev
    "id": 2,
    "name": "The Barony of Letnev",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 1,
        "attack": -5,
        "attacks": 2,
        "hp": 2,
        "carry": 2,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Brotherhood of Yin
    "id": 3,
    "name": "The Brotherhood of Yin",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 2,
        "attack": -5,
        "attacks": 2,
        "hp": 2,
        "carry": 4,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Clan of Saar
    "id": 4,
    "name": "The Clan of Saar",
    "unitAdjustment": [
      {
        "name": "Space Dock",
        "move": 1,
        "attack": 0,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Flagship",
        "move": 1,
        "attack": -6,
        "attacks": 3,
        "hp": 2,
        "carry": 4,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Embers of Muaat
    "id": 5,
    "name": "The Embers of Muaat",
    "unitAdjustment": [
      {
        "name": "War Sun",
        "move": -1,
        "attack": 0,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Flagship",
        "move": 1,
        "attack": -5,
        "attacks": 3,
        "hp": 2,
        "carry": 4,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Emirates of Hacan
    "id": 6,
    "name": "The Emirates of Hacan",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 2,
        "attack": -7,
        "attacks": 3,
        "hp": 2,
        "carry": 4,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Federation of Sol
    "id": 7,
    "name": "The Federation of Sol",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 1,
        "attack": -5,
        "attacks": 3,
        "hp": 2,
        "carry": 3,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Ghosts of Creuss
    "id": 8,
    "name": "The Ghosts of Creuss",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 1,
        "attack": -4,
        "attacks": 1,
        "hp": 2,
        "carry": 3,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The L1z1x Mindnet
    "id": 9,
    "name": "The L1z1x Mindnet",
    "unitAdjustment": [
      {
        "name": "Dreadnought",
        "move": 0,
        "attack": 0,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": -1,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Flagship",
        "move": 1,
        "attack": -5,
        "attacks": 3,
        "hp": 2,
        "carry": 2,
        "cost": 11,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Mentak Coalition
    "id": 10,
    "name": "The Mentak Coalition",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 2,
        "attack": -5,
        "attacks": 2,
        "hp": 2,
        "carry": 2,
        "cost": 8,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Naalu Collective
    "id": 11,
    "name": "The Naalu Collective",
    "unitAdjustment": [
      {
        "name": "Fighter",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Flagship",
        "move": 2,
        "attack": -8,
        "attacks": 2,
        "hp": 2,
        "carry": 6,
        "cost": 9,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Nekro Virus
    "id": 12,
    "name": "The Nekro Virus",
    "unitAdjustment": []
  },
  { // The Sardakk N'orr
    "id": 13,
    "name": "The Sardakk N’orr",
    "unitAdjustment": [
      {
        "name": "Carrier",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Fighter",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Destroyer",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Cruiser",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Dreadnought",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "War Sun",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "PDS",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Ground Force",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Shock Troop",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Mechanized Unit",
        "move": 0,
        "attack": 1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Flagship",
        "move": 1,
        "attack": -5,
        "attacks": 3,
        "hp": 1,
        "carry": 2,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Universities of Jol-Nar
    "id": 14,
    "name": "The Universities of Jol-Nar",
    "unitAdjustment": [
      {
        "name": "Carrier",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Fighter",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Destroyer",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Cruiser",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Dreadnought",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "War Sun",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "PDS",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Ground Force",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Shock Troop",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Mechanized Unit",
        "move": 0,
        "attack": -1,
        "attacks": 0,
        "hp": 0,
        "carry": 0,
        "cost": 0,
        "type": UnitType.Space,
        "maxCount": 0
      },
      {
        "name": "Flagship",
        "move": 2,
        "attack": -2,
        "attacks": 2,
        "hp": 2,
        "carry": 2,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Winnu
    "id": 15,
    "name": "The Winnu",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 1,
        "attack": -7,
        "attacks": 1,
        "hp": 2,
        "carry": 3,
        "cost": 10,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Xxcha Kingdom
    "id": 16,
    "name": "The Xxcha Kingdom",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 1,
        "attack": -6,
        "attacks": 2,
        "hp": 2,
        "carry": 4,
        "cost": 9,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  },
  { // The Yssaril Tribe
    "id": 17,
    "name": "The Yssaril Tribe",
    "unitAdjustment": [
      {
        "name": "Flagship",
        "move": 2,
        "attack": -7,
        "attacks": 2,
        "hp": 2,
        "carry": 5,
        "cost": 9,
        "type": UnitType.Space,
        "maxCount": 0
      },
    ]
  }
];