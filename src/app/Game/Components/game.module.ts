import { NgModule } from '@angular/core';

import { MajesticSharedModule } from 'app/shared/modules/majestic-shared.module';

import { PlayGameComponent } from './play-game/play-game.component';

import { GameRoutingModule } from './game-routing.module';

@NgModule({
    declarations: [
        PlayGameComponent,
    ],
    imports: [
        MajesticSharedModule,
        GameRoutingModule,
    ],
    exports: [
    ],
    providers: [
    ]
})
export class GameModule { }
