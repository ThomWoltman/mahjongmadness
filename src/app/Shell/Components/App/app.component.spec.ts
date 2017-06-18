import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {MajesticSharedModule} from "../../../Shared/Modules/majestic-shared.module";
import {BusyModule} from "angular2-busy";
import {PlayGameComponent} from "../../../Game/Components/play-game/play-game.component";
import {TemplateTileComponent} from "../../../Game/Components/template-tile/template-tile.component";
import {TileComponent} from "../../../Game/Components/tile/tile.component";
import {TemplateGameBoardComponent} from "../../../Game/Components/template-game-board/template-game-board.component";
import {GameInfoComponent} from "../../../Game/Components/game-info/game-info.component";
import {GameRoutingModule} from "../../../Game/Components/game-routing.module";
import {GameModule} from "../../../Game/Components/game.module";
import {AppRoutingModule} from "../../Modules/app-routing.module";
import {AuthCallbackComponent} from "../Callback/auth-callback.component";
import {AppModule} from "../../../app.module";
import {APP_BASE_HREF} from "@angular/common";
import {AuthService} from "../../../Shared/Services/auth.service";
import {MdIconModule} from "@angular/material";

describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
        imports:[
            AppRoutingModule,
            AppModule,
            MdIconModule


        ],

        declarations: [
            AppComponent,
            AuthCallbackComponent

        ],
        providers: [{provide: APP_BASE_HREF, useValue : '/'},{provide: AuthService, useValue : {username:"Gebruiker"}}]

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual(fixture.componentInstance.title);
  }));
    it(`user name is Gebruiker'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        var authService = fixture.debugElement.injector.get(AuthService);
        expect("Gebruiker").toBe(authService.username);

    }));

});
