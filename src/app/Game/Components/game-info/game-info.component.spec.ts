import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { GameInfoComponent } from './game-info.component';
import { PlayGameComponent } from '../play-game/play-game.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import {Subscription} from "rxjs/Subscription";

import {Player} from "../../../Shared/Models/player";
import {GameModule} from "../game.module";
import {MajesticSharedModule} from "../../../Shared/Modules/majestic-shared.module";

describe('GameInfoComponent', () => {
  let component: GameInfoComponent;
  let fixture: ComponentFixture<GameInfoComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[GameModule, MajesticSharedModule],

        declarations: [  ],
        providers: [
            { provide: ComponentFixtureAutoDetect, useValue: true }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
