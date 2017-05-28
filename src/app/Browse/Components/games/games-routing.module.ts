import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { MyGamesComponent } from '../my-games/my-games.component';
import { BrowseGamesComponent } from '../browse-games/browse-games.component';
import { GamesComponent } from '../games/games.component';
import { WatchGamesComponent } from '../watch-games/watch-games.component';

const routes: Routes = [
    {
        path: '',
        component: GamesComponent,
        children: [
            { path: '', component: MyGamesComponent },
            { path: 'browse', component: BrowseGamesComponent },
            { path: 'watch', component: WatchGamesComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GamesRoutingModule { }
