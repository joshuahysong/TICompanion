import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Race } from 'app/shared/race.model';
import { RaceService } from 'app/shared/race.service';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';
import { Unit } from 'app/shared/unit.model';
import { Units } from 'assets/units';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  player: Player;
  races: Race[];
  units: Unit[];

  constructor(
    private playerService: PlayerService,
    private raceService: RaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.races = this.raceService.getRaces();
    this.units = Units;

    // subscribe to router event
    this.route.params.subscribe((params: Params) => {
        let id = params['id'];
        this.player = this.playerService.getPlayer(id);
        this.player.units = this.units.map(x => Object.assign({}, x));
        this.adjustUnitsByRace()
      });
  }

  delete() {
    let newID = this.playerService.deletePlayer(this.player.id);

    if (newID) {
      this.router.navigate(['/players', newID]);
    } else {
      this.router.navigate(['/']);
    }
  }  

  raceOnChange(newValue) {
    this.player.race = this.raceService.getRaceByID(newValue);
    this.playerService.savePlayersData(); // Having to call this doesn't feel right
    this.adjustUnitsByRace()
  }

  adjustUnitsByRace() {
    if (this.player.race && this.player.units) {
      for (let i = 0; i < this.player.units.length; i++) {
        let playerUnit = this.player.units[i];
        let defaultUnit = this.units[i];

        playerUnit.move = defaultUnit.move;
        playerUnit.attack = defaultUnit.attack;
        playerUnit.attacks = defaultUnit.attacks
        playerUnit.hp = defaultUnit.hp;
        playerUnit.carry = defaultUnit.carry;
        playerUnit.cost = defaultUnit.cost;

        for (let a = 0; a < this.player.race.unitAdjustment.length; a++) {
          let raceUnit = this.player.race.unitAdjustment[a]
          if (playerUnit.name === raceUnit.name) {
            playerUnit.move = defaultUnit.move + raceUnit.move;
            playerUnit.attack = defaultUnit.attack - raceUnit.attack;
            playerUnit.attacks = defaultUnit.attacks + raceUnit.attacks;
            playerUnit.hp = defaultUnit.hp + raceUnit.hp;
            playerUnit.carry = defaultUnit.carry + raceUnit.carry;
            playerUnit.cost = defaultUnit.cost + raceUnit.cost;
          }
        }
      }
    }
  }
}
