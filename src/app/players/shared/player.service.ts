import { Injectable } from '@angular/core';

import { Player } from './player.model';

 let players: Player[] = [];

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers(): Player[] {
    return players;
  }

  getPlayer(id: number): Player {
    return players[id - 1] as Player;
  }

  addPlayer(): Player {
    let id = players.length + 1
    let player: Player = new Player(+id, 'Player ' + id);
    players.push(player)
    return player;
  }
}