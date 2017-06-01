import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerComponent } from './players/player/player.component';

import { PlayerService } from './players/shared/player.service';
import { RaceService } from './shared/race.service';
import { PlayerStatsComponent } from './players/player-stats/player-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlayerComponent,
    PlayerStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PlayerService, RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
