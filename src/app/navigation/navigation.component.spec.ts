import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Location, CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationComponent } from './navigation.component';
import { PlayerService } from '../players/shared/player.service'

@Component({
  template: ''
})
class DummyComponent {
}

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let playerService: PlayerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
         { path: 'players/:id', component: DummyComponent }
        ])
      ],
      declarations: [ NavigationComponent, DummyComponent ],
      providers: [ PlayerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not have null players', () => {
    expect(component.players.length).not.toBeNull;
  });
});
