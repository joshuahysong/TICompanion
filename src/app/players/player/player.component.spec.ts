import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PlayerComponent } from './player.component';
import { Race } from 'app/races/race.model';
import { RaceService } from 'app/races/race.service';
import { Player } from '../shared/player.model';
import { PlayerService } from '../shared/player.service';
import { Unit } from 'app/units/unit.model';

@Component({
  template: ''
})
class DummyComponent {
}

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        RouterTestingModule.withRoutes([
            { path: 'players/:id/stats', component: DummyComponent }
          ]) ],
      declarations: [ PlayerComponent, DummyComponent ],
      providers: [ PlayerService, RaceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
