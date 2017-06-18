import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { PlayGameComponent } from './play-game.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { GameService } from 'app/shared/Services/game.service';
import { MaterialModule } from '@angular/material';
import {Subscription} from "rxjs/Subscription";

import {Player} from "../../../Shared/Models/player";
import {GameModule} from "../game.module";
import {TileComponent} from "../tile/tile.component";
import {TemplateTileComponent} from "../template-tile/template-tile.component";
import {TemplateGameBoardComponent} from "../template-game-board/template-game-board.component";
import {MajesticSharedModule} from "../../../Shared/Modules/majestic-shared.module";
import {BusyModule} from "angular2-busy";
import {MajesticMdModule} from "../../../Shared/Modules/majestic-md.module";
import {ActivatedRoute} from "@angular/router";
import {GameBoardService} from "../../Services/game-board.service";
import {TileService} from "../../../Shared/Services/tile.service";
import {FormsModule} from "@angular/forms";
import {GameInfoComponent} from "../game-info/game-info.component";

describe('PlayGameComponent', () => {
    let component: PlayGameComponent;
    let fixture: ComponentFixture<PlayGameComponent>;
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
                FormsModule
            ],

            declarations: [
                PlayGameComponent,
                GameInfoComponent,
                TileComponent

            ],
            providers: [
                { provide: ActivatedRoute, useValue: userServiceStub },{ provide: GameBoardService, useValue: userServiceStub },{ provide: TileService, useValue: userServiceStub } , { provide: GameService, useValue: userServiceStub }]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
