import { Injectable } from '@angular/core';

import { Player } from './player.model';

import { StorageSync, StorageStrategy } from 'angular2-storage-sync';

@Injectable()
export class PlayerService {
  players: Player[] = [];
  currentPlayer: Player;
  index: number = 1;
  @StorageSync('players') savedPlayers: Player[] = [];

  constructor() { }

  getPlayers(): Player[] {
    this.players = this.savedPlayers;

    if (this.players && this.players.length > 0) {
      this.index = this.players[this.players.length - 1].id + 1
    }

    return this.players;
  }

  getPlayer(id: number): Player {
    let playerIndex = this.players.findIndex(x => x.id == id);
    this.savePlayersData();
    this.currentPlayer = this.players[playerIndex] as Player;
    return this.currentPlayer;
  }

  addPlayer(): Player {
    let player: Player = new Player(+this.index, 'Player ' +this.index);
    this.currentPlayer = player;

    this.players.push(player);
    this.savePlayersData();

    if (this.players && this.players.length > 0) {
      this.index = this.players[this.players.length - 1].id + 1
    }

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
    this.savedPlayers = this.players;
  }
}