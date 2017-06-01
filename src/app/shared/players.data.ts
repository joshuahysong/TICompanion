import { Injectable } from '@angular/core';
import { Player } from '../players/shared/player.model';
import { StorageSync, StorageStrategy } from 'angular2-storage-sync';

@Injectable()
export class PlayersData {
  @StorageSync('players') players: Player[] = [];

  getPlayers() {
    return this.players;
  }
}