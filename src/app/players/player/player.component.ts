import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Race } from '../../shared/race.model';
import { RaceService } from '../../shared/race.service';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  player: Player;
  races: Race[];

  constructor(
    private playerService: PlayerService,
    private raceService: RaceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // subscribe to router event
    this.route.params.subscribe((params: Params) => {
        let id = params['id'];
        this.player = this.playerService.getPlayer(id);
      });

    this.races = this.raceService.getRaces();
  }
}
