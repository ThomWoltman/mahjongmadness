import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartGameComponent } from './Components/start-game/start-game.component';
import { AuthCallbackComponent } from './Components/auth-callback/auth-callback.component';
import { MyGamesComponent } from './Components/my-games/my-games.component';
import { WatchGamesComponent } from './Components/watch-games/watch-games.component';
import { BrowseGamesComponent } from './Components/browse-games/browse-games.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdListModule, MdToolbarModule, MdIconModule, MdTabsModule, MdInputModule, MdSelectModule} from '@angular/material';
import {BusyModule} from 'angular2-busy';
import 'hammerjs';

import { GameService } from './Services/game.service';
import { TemplateService } from './Services/template.service';
import { AuthGuard } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';
import {GameBoardComponent} from "./Components/game-board/game-board.component";
import { TileComponent } from './Components/tile/tile.component';



const routes: Routes = [
  

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MyGamesComponent, canActivate: [AuthGuard]},
  {path: 'browse', component: BrowseGamesComponent},
  {path: 'watch', component: WatchGamesComponent},
  {path: 'create', component: StartGameComponent},
  {path: 'authcallback', component: AuthCallbackComponent},
  {path: '**', redirectTo: '/home'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    AuthCallbackComponent,
    GameBoardComponent,
    TileComponent,
    MyGamesComponent,
    WatchGamesComponent,
    BrowseGamesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BusyModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdInputModule,
    MdSelectModule,
  ],
  exports: [
    RouterModule,
    MdButtonModule, 
    MdCheckboxModule,
  ],
  providers: [
    TemplateService,
    AuthGuard,
    AuthService,
    GameService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
