import { Injectable } from '@angular/core';

import { Player } from './player.model';

//import { StorageSync, StorageStrategy } from 'angular2-storage-sync';

@Injectable()
export class PlayerService {
  players: Player[] = [];
  currentPlayer: Player;
  maxPlayers: number = 6 // TODO Needs to be a user setting eventually
  //@StorageSync('players') savedPlayers: Player[] = [];

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

  deletePlayer(id: number): number {
    let playerIndex = this.players.findIndex(x => x.id === id);

    if (playerIndex > -1) {
      this.players.splice(playerIndex, 1);
      this.savePlayersData();
    }

    // Find id of prev player if any or next if first and return
    if (this.players[playerIndex - 1]) {

      return this.players[playerIndex - 1].id;

    } else if (this.players[playerIndex]) {

      return this.players[playerIndex].id;

    } else {

      return null;
    }
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