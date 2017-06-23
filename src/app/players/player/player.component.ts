import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Race } from 'app/races/race.model';
import { RaceService } from 'app/races/race.service';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';
import { Unit } from 'app/units/unit.model';
import { UnitService } from 'app/units/unit.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnDestroy {
  
  player: Player;
  races: Race[];
  units: Unit[]; 
  sub: Subscription;
  activeTab: number = 1;

  constructor(
    private playerService: PlayerService,
    private raceService: RaceService,
    private unitService: UnitService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; 
      this.raceService.getAll().subscribe(races => {
        this.races = races;
        this.unitService.getAll().subscribe(units => {
          this.units = units;
          this.playerService.getPlayer(id).subscribe(player => {
            this.player = player;
            this.player.units = this.units.map(x => Object.assign({}, x));
            this.adjustUnitsByRace();

            if (this.activeTab === 2) {
              this.router.navigate(['/players', id, 'technology']);
            } else {
              this.router.navigate(['/players', id, 'stats']);
            }
          });
        });
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  raceOnChange(newValue) {
    this.raceService.getByID(newValue).subscribe(race => {
      this.player.race = race;
      this.playerService.savePlayersData();
      this.adjustUnitsByRace()
    });
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

  onTabSelect(tabIndex: number) {
    this.activeTab = tabIndex;
  }
}
