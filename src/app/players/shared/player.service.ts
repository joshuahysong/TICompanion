import { Injectable } from '@angular/core';

import { Player } from './player.model';

@Injectable()
export class PlayerService {
  players: Player[] = [];
  currentPlayer: Player;
  maxPlayers: number = 6 // TODO Needs to be a user setting eventually

  constructor() {}

  getAll(): Player[] {
    this.players = [];
    for (var i = 1; i <= this.maxPlayers; i++) {
      let player = localStorage['Player' + i]
      if (player) {
        
        this.players.push(JSON.parse(player))
      } else {
        this.addPlayer(i);
      }
    }

    return this.players;
  }

  getPlayer(id: number): Player {
    let playerIndex = this.players.findIndex(x => x.id == id);
    this.savePlayersData();
    this.currentPlayer = this.players[playerIndex] as Player;
    return this.currentPlayer;
  }

  addPlayer(id: number): Player {
    let player: Player = new Player(id, 'Player ' + id);
    this.currentPlayer = player;

    this.players.push(player);
    localStorage['Player' + id] = JSON.stringify(player);

    return player;
  }

  // This is a terrible way of making sure localstorage data is synced....
  // Not sure what else to do just yet. 
  savePlayersData() {

    for (var i = 1; i <= this.maxPlayers; i++) {
      let player = this.players[i-1]
      localStorage['Player' + i] = JSON.stringify(player);
    }
  }
}