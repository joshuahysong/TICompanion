import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';
import { Technology } from 'app/technologies/technology.model';
import { TechnologyService } from 'app/technologies/technology.service';

@Component({
  selector: 'app-player-technology',
  templateUrl: './player-technology.component.html',
  styleUrls: ['./player-technology.component.css']
})
export class PlayerTechnologyComponent implements OnInit {
  player: Player;
  sub: Subscription;

  constructor(
    private playerService: PlayerService,
    private technologyService: TechnologyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      let id = +params['id'];
        this.technologyService.getAll().subscribe(technologies => {
          this.player = this.playerService.getPlayer(id);
          
          // Load starting technology list for this player
          if (!this.player.technologies) {
            this.player.technologies = technologies.map(x => Object.assign({}, x));
          }
        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  researchTechnology(id: number) {
    console.log(1)
    let selectedTech = this.player.technologies.find(e => e.id === id);
    if (selectedTech) {
      selectedTech.researched = !selectedTech.researched;
      this.playerService.savePlayersData();
    }
    event.stopPropagation();
  }
}
