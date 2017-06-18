import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
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
import {FormsModule} from "@angular/forms";
import { GameBoardService } from '../../services/game-board.service';
import {APP_BASE_HREF} from "@angular/common";
import {AuthService} from "../../../Shared/Services/auth.service";
import {AuthCallbackComponent} from "../../../Shell/Components/Callback/auth-callback.component";

describe('TileComponent', () => {
    let component: TileComponent;
    let fixture: ComponentFixture<TileComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

    beforeEach(async(() => {
        var gameBoardServiceStub = {
            isLoggedIn: true
        };

        TestBed.configureTestingModule({
            imports:[
                MajesticSharedModule,
                FormsModule

            ],

            declarations: [
                TileComponent,
                AuthCallbackComponent
            ],
            providers: [{provide: GameBoardService, useValue : {username:"Gebruiker"}}]

        })
            .compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(TileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('show tile ', () => {
        component.showTile(event);
        expect(component).toBeTruthy();
    });
    it('iselected tile ', () => {
        component.isSelected;
        expect(component).toBeTruthy();
    });
    it('not selecte tile ', () => {
        component.unSelectTile();
        expect(component).toBeTruthy();
    });
});