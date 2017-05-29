import { NgModule } from '@angular/core';

import { MajesticSharedModule } from 'app/shared/modules/majestic-shared.module';
import {BusyModule} from 'angular2-busy';

import { PlayGameComponent } from './play-game/play-game.component';

import { GameRoutingModule } from './game-routing.module';
import { TileService } from '../../Shared/Services/tile.service';
import {GameBoardComponent} from "./game-board/game-board.component";



@NgModule({
    declarations: [
        PlayGameComponent,
        GameBoardComponent
    ],
    imports: [
        MajesticSharedModule,
        GameRoutingModule,
        BusyModule,
    ],
    exports: [
    ],
    providers: [
        TileService
    ]
})
export class GameModule { }
