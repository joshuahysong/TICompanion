import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Player } from '../players/shared/player.model';
import { PlayerService } from '../players/shared/player.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  players: Player[];
  isIn = false; // collapsed state

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPlayers();
    if (!this.players || this.players.length === 0) {
      this.addPlayer();
    }
  }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  onSelect(player: Player) {
    if (this.isIn) {
      this.toggleState();
    }
  }

  getPlayers() {
    this.players = this.playerService.getPlayers()
  }

  addPlayer() {
    let player = this.playerService.addPlayer();
    this.router.navigate(['/players', player.id])
  }
}
