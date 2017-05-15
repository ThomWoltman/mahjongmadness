import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GameListComponent } from './Components/game-list/game-list.component';
import { StartGameComponent } from './Components/start-game/start-game.component';
import { AuthCallbackComponent } from './Components/auth-callback/auth-callback.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';

import { GameService } from './Services/game.service';
import { TemplateService } from './Services/template.service';
import { AuthGuard } from './Services/auth-guard.service';
import { AuthService } from './Services/auth.service';

const routes: Routes = [
  

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: GameListComponent, canActivate: [AuthGuard]},
  {path: 'create', component: StartGameComponent},
  {path: 'authcallback', component: AuthCallbackComponent},
  {path: '**', redirectTo: '/home'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    StartGameComponent,
    AuthCallbackComponent,
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
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    GameService,
    TemplateService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
