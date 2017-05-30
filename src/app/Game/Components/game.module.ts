import { NgModule } from '@angular/core';

import { MajesticSharedModule } from 'app/shared/modules/majestic-shared.module';
import { BusyModule } from 'angular2-busy';

import { PlayGameComponent } from './play-game/play-game.component';

import { GameRoutingModule } from './game-routing.module';
import { TileComponent } from "./tile/tile.component";
import { TemplateTileComponent } from "./template-tile/template-tile.component";
import { TemplateGameBoardComponent } from "./template-game-board/template-game-board.component";

import { GameBoardService } from '../services/game-board.service';


@NgModule({
    declarations: [
        PlayGameComponent,

        TileComponent,
        TemplateTileComponent,
        TemplateGameBoardComponent,
    ],
    imports: [
        MajesticSharedModule,
        GameRoutingModule,
        BusyModule,

    ],
    exports: [

        TileComponent,
        TemplateTileComponent,
        TemplateGameBoardComponent,

    ],
    providers: [
        GameBoardService,
    ]
})
export class GameModule { }
