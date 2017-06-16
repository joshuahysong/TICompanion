import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from 'environments/environment';

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
  baseURL: string = "";

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {      
    if (environment.production) {
      this.baseURL = '/TICompanion';
    }
    this.playerService.getAll().subscribe(players => {
      this.players = players;
    }); 
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

  resetData() {
    localStorage.removeItem('players')
    localStorage.clear();
    location.reload();
  }
}