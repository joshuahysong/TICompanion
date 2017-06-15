import { Injectable } from '@angular/core';

import { Player } from './player.model';
import { Race } from 'app/races/race.model';
import { RaceService } from 'app/races/race.service';
import { Unit } from 'app/units/unit.model';
import { UnitService } from 'app/units/unit.service';

@Injectable()
export class PlayerService {
  players: Player[] = [];
  races: Race[];
  units: Unit[]; 
  currentPlayer: Player;
  maxPlayers: number = 6 // TODO Needs to be a user setting eventually

  constructor(
    private raceService: RaceService,
    private unitService: UnitService
  ) {}

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

  private getAllPlayers() {
    this.players = [];
    for (var i = 1; i <= this.maxPlayers; i++) {
      let player = localStorage['Player' + i]
      if (player) {
        this.players.push(JSON.parse(player))
      } else {
        this.addPlayer(i);
      }
    }
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
    console.log(this.units)
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