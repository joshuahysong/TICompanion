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

  constructor(
    private playerService: PlayerService,
    private router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    this.router.navigate(['/players', this.selectedPlayer.id])
  }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }
}
