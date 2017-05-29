import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from 'app/shell/modules/app-routing.module';
import { MajesticSharedModule} from 'app/shared/modules/majestic-shared.module';

import { AppComponent } from 'app/shell/components/app/app.component';
import { StartGameComponent } from 'app/browse/Components/start-game/start-game.component';
import { AuthCallbackComponent } from 'app/shell/Components/callback/auth-callback.component';
import { WatchGamesComponent } from 'app/browse/Components/watch-games/watch-games.component';

import {GameBoardComponent} from "app/game/Components/game-board/game-board.component";
import { TileComponent } from 'app/game/Components/tile/tile.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdListModule, MdToolbarModule, MdIconModule, MdTabsModule, MdInputModule, MdSelectModule} from '@angular/material';
import {BusyModule} from 'angular2-busy';
import 'hammerjs';

import { GameService } from 'app/shared/Services/game.service';
import { TemplateService } from 'app/browse/Services/template.service';

import { AuthService } from 'app/shared/Services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    AuthCallbackComponent,
    GameBoardComponent,
    TileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BusyModule,
    MajesticSharedModule,
  ],
  exports: [
  ],
  providers: [
    TemplateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }