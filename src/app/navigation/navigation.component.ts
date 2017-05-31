import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../players/shared/player.model';
import { PlayerService } from '../players/shared/player.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  players: Player[];
  selectedPlayer: Player;
  isIn = false; // collapsed state
  isTopBar = false;

  constructor(
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    this.router.navigate(['/players', this.selectedPlayer.id])

    if (this.isIn) {
      this.toggleState();
    }
  }

  getPlayers(): void {
    this.players = this.playerService.getPlayers()
  }

  addPlayer() : void{
    this.onSelect(this.playerService.addPlayer());
  }
}
