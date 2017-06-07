import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';
import { Unit } from 'app/units/unit.model';
import { UnitService } from 'app/units/unit.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit, OnDestroy {
  player: Player;
  units: Unit[];
  sub: Subscription;

  constructor(
    private playerService: PlayerService,
    private unitService: UnitService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      let id = +params['id'];
        this.unitService.getAll().subscribe(units => {
          this.units = units;
          this.player = this.playerService.getPlayer(id);
        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
