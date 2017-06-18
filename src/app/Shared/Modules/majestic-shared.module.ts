import { NgModule } from '@angular/core';

import { AuthService } from '../Services/auth.service';
import { GameService } from '../Services/game.service';
import { AuthGuard } from 'app/shared/Services/auth-guard.service';
import { TileService } from "../Services/tile.service";

import { MajesticMdModule } from './majestic-md.module';

import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { GameInfoComponent } from 'app/game/components/game-info/game-info.component';

@NgModule({
  declarations: [
    GameInfoComponent,
  ],
  imports: [
    MajesticMdModule,
    CommonModule,
    HttpModule,
    JsonpModule,
  ],
  exports: [
    MajesticMdModule,
    CommonModule,
    HttpModule,
    JsonpModule,
    GameInfoComponent,
  ],
  providers: [
    AuthService,
    GameService,
    AuthGuard,
    TileService,
  ]
})
export class MajesticSharedModule { }
