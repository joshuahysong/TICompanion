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
          this.playerService.getPlayer(id).subscribe(player => {
            this.player = player;
            
            // Load starting technology list for this player
            if (!this.player.technologies) {
              this.player.technologies = technologies.map(x => Object.assign({}, x));
            }
            this.adjustTechnologyAvailability();
          });
        });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  researchTechnology(id: number) {
    let selectedTech = this.player.technologies.find(e => e.id === id);
    if (selectedTech) {
      selectedTech.isResearched = !selectedTech.isResearched;
      this.playerService.savePlayersData();
    }
    this.adjustTechnologyAvailability();
    event.stopPropagation();
  }

  adjustTechnologyAvailability() {
    for (var i = 0; i < this.player.technologies.length; i++) {
      let playerTech = this.player.technologies[i];
      playerTech.isAvailable = false;

      // Check if any prerequisites exist
      if (playerTech.prerequisites.length > 0) {
        let prereqArray = playerTech.prerequisites;

        for (let a = 0; a < prereqArray.length; a++) {
          let prereqCount: number = prereqArray[a].length;
          let prereqFound: number = 0;

          // Check prerequisite subarray. If all are researched then success.
          if (prereqCount > 0) {
            for (let b = 0; b < prereqCount; b++) {
              let tech = this.player.technologies
                .find(e => e.name === prereqArray[a][b])
              if (tech && tech.isResearched) {
                prereqFound++;
              }
            }
          }

          // prereqs met if count is equal to total needed techs
          if (prereqFound === prereqCount) {
            playerTech.isAvailable = true;
            continue;
          }
        }
      } else {
        playerTech.isAvailable = true;
      }
    }
  }
}
