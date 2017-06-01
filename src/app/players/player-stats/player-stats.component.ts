import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  @Input() player: Player;
  @Input() test: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit() {

  }
}
