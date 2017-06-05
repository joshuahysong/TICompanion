import { Injectable } from '@angular/core';

import { Player } from './player.model';

import { StorageSync, StorageStrategy } from 'angular2-storage-sync';

@Injectable()
export class PlayerService {
  players: Player[] = [];
  currentPlayer: Player;
  maxPlayers: number = 6 // TODO Needs to be a user setting eventually
  @StorageSync('players') savedPlayers: Player[] = [];

  constructor() {}

  getPlayers(): Player[] {
    this.players = this.savedPlayers.map(x => Object.assign({}, x));

    if (this.players.length != this.maxPlayers) {
      this.players = []
      for (var i = 1; i <= this.maxPlayers; i++) {
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
    this.savePlayersData();

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
    this.savedPlayers = this.players.map(x => Object.assign({}, x));
  }
}