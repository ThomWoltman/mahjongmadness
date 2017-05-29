import { NgModule } from '@angular/core';

import { MajesticSharedModule } from 'app/shared/modules/majestic-shared.module';
import {BusyModule} from 'angular2-busy';

import { PlayGameComponent } from './play-game/play-game.component';

import { GameRoutingModule } from './game-routing.module';
import {GameBoardComponent} from "./game-board/game-board.component";
import {TileComponent} from"./tile/tile.component";


@NgModule({
    declarations: [
        PlayGameComponent,
        GameBoardComponent,
        TileComponent,
    ],
    imports: [
        MajesticSharedModule,
        GameRoutingModule,
        BusyModule,
    ],
    exports: [
        GameBoardComponent,
        TileComponent,
    ],
    providers: [
    ]
})
export class GameModule { }
