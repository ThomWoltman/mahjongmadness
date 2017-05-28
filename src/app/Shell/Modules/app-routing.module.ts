import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartGameComponent } from 'app/browse/Components/start-game/start-game.component';
import { AuthCallbackComponent } from 'app/shell/Components/callback/auth-callback.component';

import { WatchGamesComponent } from 'app/browse/Components/watch-games/watch-games.component';
import { BrowseGamesComponent } from 'app/browse/Components/browse-games/browse-games.component';

import { AuthGuard } from 'app/shared/Services/auth-guard.service';

const routes: Routes = [
  
  {path: '', redirectTo: 'browse', pathMatch: 'full'},
  {path: 'browse', loadChildren: 'app/browse/components/browse.module#BrowseModule', canActivate: [AuthGuard]},
  {path: 'create', component: StartGameComponent},
  {path: 'authcallback', component: AuthCallbackComponent},
  {path: '**', redirectTo: 'browse'},
  
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
