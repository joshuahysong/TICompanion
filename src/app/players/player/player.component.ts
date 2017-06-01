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
  styleUrls: ['./player.component.css'],
  providers: [ PlayerService ]
})
export class PlayerComponent implements OnInit {
  player: Player;
  races: Race[];
  units;

  constructor(
    private playerService: PlayerService,
    private raceService: RaceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // subscribe to router event
    this.route.params.subscribe((params: Params) => {
        let id = params['id'];
        this.player = this.playerService.getPlayer(id);
      });

    this.races = this.raceService.getRaces();
    this.units = Units;
  }

  delete() {
    this.playerService.deletePlayer(this.player.id);
    this.router.navigate(['/players', this.player.id - 1]);
  }  

  raceOnChange(newValue) {
    this.player.race = new Race(newValue);
    this.playerService.savePlayersData(); // Having to call this doesn't feel right
  }

  goToStats(player: Player) {
    //this.router.navigate(['/players', this.player.id, 'stats'])
  }
}
