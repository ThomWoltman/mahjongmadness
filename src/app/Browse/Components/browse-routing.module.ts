import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { MyGamesComponent } from './my-games/my-games.component';
import { BrowseGamesComponent } from './browse-games/browse-games.component';
import { WatchGamesComponent } from './watch-games/watch-games.component';

const routes: Routes = [
            { path: '', redirectTo: 'mygames', pathMatch: 'full' },
            { path: 'mygames', component: MyGamesComponent },
            { path: 'games', component: BrowseGamesComponent },
            { path: 'history', component: WatchGamesComponent },
            { path: ':id', loadChildren: 'app/game/components/game.module#GameModule'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BrowseRoutingModule { }
