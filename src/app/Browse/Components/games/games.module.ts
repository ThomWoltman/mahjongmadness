import { NgModule } from '@angular/core';

import {MajesticSharedModule} from 'app/shared/modules/majestic-shared.module';

import {MyGamesComponent} from '../my-games/my-games.component';
import {BrowseGamesComponent} from '../browse-games/browse-games.component';
import {GamesComponent} from '../games/games.component';
import { WatchGamesComponent } from '../watch-games/watch-games.component';

import {BusyModule} from 'angular2-busy';

import { PlayingGamesPipe } from 'app/browse/pipes/playing-games.pipe';
import { OpenGamesPipe } from 'app/browse/pipes/open-games.pipe';
import { IsJoinedPipe } from 'app/browse/pipes/isjoined-games.pipe';


import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [
    MyGamesComponent,
    BrowseGamesComponent,
    GamesComponent,
    WatchGamesComponent,
    PlayingGamesPipe,
    OpenGamesPipe,
    IsJoinedPipe,
  ],
  imports: [
    MajesticSharedModule,
    BusyModule,
    CommonModule,
    GamesRoutingModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class GamesModule { }
