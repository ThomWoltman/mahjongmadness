import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MajesticSharedModule} from 'app/shared/modules/majestic-shared.module';
import { StartGameRoutingModule } from './start-game-routing.module';
import {BusyModule} from 'angular2-busy';

import { StartGameComponent } from './start-game.component';
import {GameBoardComponent} from "app/game/Components/game-board/game-board.component";
import { TileComponent } from 'app/game/Components/tile/tile.component';

import { TemplateService } from 'app/browse/Services/template.service';

@NgModule({
  declarations: [
    StartGameComponent,
    GameBoardComponent,
    TileComponent,
  ],
  imports: [
    MajesticSharedModule,
    BusyModule,
    StartGameRoutingModule,
    FormsModule,
  ],
  exports: [
  ],
  providers: [
      TemplateService,
  ]
})
export class StartGameModule { }
