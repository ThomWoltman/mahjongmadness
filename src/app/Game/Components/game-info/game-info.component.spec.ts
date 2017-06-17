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
import {PlayGameComponent} from "../play-game/play-game.component";
import {TileComponent} from "../tile/tile.component";
import {TemplateTileComponent} from "../template-tile/template-tile.component";
import {TemplateGameBoardComponent} from "../template-game-board/template-game-board.component";
import {MajesticSharedModule} from "../../../Shared/Modules/majestic-shared.module";
import {BusyModule} from "angular2-busy";
import {MajesticMdModule} from "../../../Shared/Modules/majestic-md.module";

describe('GameInfoComponent', () => {
  let component: GameInfoComponent;
  let fixture: ComponentFixture<GameInfoComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

  beforeEach(async(() => {
    var userServiceStub = {
          isLoggedIn: true,
          user: { name: 'Test User'}
      };

    TestBed.configureTestingModule({
        imports:[
            MajesticSharedModule,
            BusyModule,
        ],

        declarations: [

            GameInfoComponent,


        ],
        providers: [
            { provide: GameService, useValue: userServiceStub }]
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
