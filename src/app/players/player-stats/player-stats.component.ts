import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';
import { Unit } from 'app/shared/unit.model';
import { Units } from 'assets/units';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  player: Player;
  units;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // subscribe to router event
    this.route.parent.params.subscribe((params: Params) => {
        let id = params['id'];
        this.player = this.playerService.getPlayer(id);
      });

    this.units = Units;

  }
}
