import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartGameComponent } from 'app/browse/Components/start-game/start-game.component';
import { AuthCallbackComponent } from 'app/shell/Components/callback/auth-callback.component';

import { WatchGamesComponent } from 'app/browse/Components/watch-games/watch-games.component';
import { BrowseGamesComponent } from 'app/browse/Components/browse-games/browse-games.component';

import { AuthGuard } from 'app/shared/Services/auth-guard.service';

const routes: Routes = [
  

  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games', loadChildren: 'app/browse/components/games/games.module#GamesModule', canActivate: [AuthGuard]},
  {path: 'games/create', component: StartGameComponent},
  {path: 'authcallback', component: AuthCallbackComponent},
  {path: '**', redirectTo: '/games'},
  
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
