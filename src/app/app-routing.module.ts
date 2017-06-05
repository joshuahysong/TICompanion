import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './players/player/player.component';
import { PlayerStatsComponent } from './players/player-stats/player-stats.component';

const routes: Routes = [
  { path: '', redirectTo: '/players/1/stats', pathMatch: 'full' },
  { path: 'players/:id', component: PlayerComponent,
    children: [
      { path: '', redirectTo: 'stats', pathMatch: 'full'},
      { path: 'stats', component: PlayerStatsComponent}
    ] 
  },
  { path: '**', redirectTo: '/players/1/stats', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
