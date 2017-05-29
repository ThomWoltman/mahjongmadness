import { NgModule } from '@angular/core';

import {MajesticSharedModule} from 'app/shared/modules/majestic-shared.module';

import {MyGamesComponent} from './my-games/my-games.component';
import {BrowseGamesComponent} from './browse-games/browse-games.component';
import { WatchGamesComponent } from './watch-games/watch-games.component';
//import { PlayGameComponent } from 'app/game/components/play-game/play-game.component';

import {BusyModule} from 'angular2-busy';

import { PlayingGamesPipe } from 'app/browse/pipes/playing-games.pipe';
import { OpenGamesPipe } from 'app/browse/pipes/open-games.pipe';
import { IsJoinedPipe } from 'app/browse/pipes/isjoined-games.pipe';


import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';

@NgModule({
  declarations: [
    MyGamesComponent,
    BrowseGamesComponent,
    WatchGamesComponent,
    //PlayGameComponent,
    PlayingGamesPipe,
    OpenGamesPipe,
    IsJoinedPipe,
  ],
  imports: [
    MajesticSharedModule,
    BusyModule,
    CommonModule,
    BrowseRoutingModule,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class BrowseModule { }
