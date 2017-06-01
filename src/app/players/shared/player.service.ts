import { Injectable } from '@angular/core';

import { Player } from './player.model';
import { PlayersData } from '../../shared/players.data'

import { StorageSync, StorageStrategy } from 'angular2-storage-sync';

@Injectable()
export class PlayerService {
  players: Player[] = [];
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
    return this.players[playerIndex] as Player;
  }

  addPlayer(): Player {
    let player: Player = new Player(+this.index, 'Player ' +this.index);

    this.players.push(player);
    this.savePlayersData();

    return player;
  }

  deletePlayer(id: number) {
    let playerIndex = this.players.findIndex(x => x.id === id);

    if (playerIndex > -1) {

      this.players.splice(playerIndex, 1);
      this.savePlayersData();
    }
  }

  // This is a terrible way of making sure localstorage data is synced....
  // Not sure what else to do just yet. 
  savePlayersData() {
    this.savedPlayers = this.players;
  }
}