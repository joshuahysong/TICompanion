import { Injectable } from '@angular/core';

import { Player } from './player.model';
import { Players } from '../../shared/players.data'

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers(): Player[] {
      return Players;
  }

  getPlayer(id: number): Player {
    return Players[id - 1] as Player;
  }

  addPlayer(): Player {
    let id = Players.length + 1
    let player: Player = new Player(+id, 'Player ' + id);
    Players.push(player)
    return player;
  }
}