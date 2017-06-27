import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Player } from './player.model';
import { Race } from 'app/races/race.model';
import { RaceService } from 'app/races/race.service';
import { Unit } from 'app/units/unit.model';
import { UnitService } from 'app/units/unit.service';

@Injectable()
export class PlayerService {
  players: Player[];
  units: Unit[]; 
  maxPlayers: number = 6 // TODO Needs to be a user setting eventually

  constructor(
    private raceService: RaceService,
    private unitService: UnitService
  ) {}

  getAll(): Observable<Player[]> {
    if (this.players) {
      return Observable.of(this.players);
    } else {
      if (this.units) {
        this.players = this.getAllPlayers();
        return Observable.of(this.players);
      } else {
        return this.unitService.getAll().map(units => {
          this.units = units;
          this.players = this.getAllPlayers();
          return this.players;
        });
      }
    }
  }

  private getAllPlayers(): Player[] {
    let players = []
    for (var i = 1; i <= this.maxPlayers; i++) {
      let player = localStorage['Player' + i]
      if (player) {
        players.push(JSON.parse(player))
      } else {
        players.push(this.addPlayer(i));
      }
    }
    return players;
  }

  getPlayer(id: number): Observable<Player> {
    if (this.players) {
      return Observable.of(this.players.find(e => e.id === id));
    } else {
      return this.getAll().map(all => {
        let player = all.find(e => e.id === id);
        return player;
      });
    }
  }

  addPlayer(id: number): Player {
    let player: Player = new Player(id, 'Player ' + id);
    player.units = this.units;
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