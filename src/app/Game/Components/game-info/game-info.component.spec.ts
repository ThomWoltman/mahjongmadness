import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { GameInfoComponent } from './game-info.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { GameService } from 'app/shared/Services/game.service';
import { MaterialModule } from '@angular/material';
import {Subscription} from "rxjs/Subscription";

import {Player} from "../../../Shared/Models/player";
import {GameModule} from "../game.module";

describe('GameInfoComponent', () => {
  let component: GameInfoComponent;
  let fixture: ComponentFixture<GameInfoComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[GameModule,GameService],

        declarations: [ GameInfoComponent ],
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
