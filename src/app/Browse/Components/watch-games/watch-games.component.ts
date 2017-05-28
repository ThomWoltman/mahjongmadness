import { Component } from '@angular/core';
import { GameService } from 'app/shared/Services/game.service';
import { Game } from 'app/shared/Models/game';
import { Subscription } from 'rxjs';

@Component({
    selector: 'watch-games',
    templateUrl: './watch-games.component.html',
    styleUrls: ['./watch-games.component.scss']
})
export class WatchGamesComponent {
    constructor(private gameService: GameService) { }

    games: Game[];
    busy: Subscription;

    getMyGames(): void {
        this.busy = this.gameService.getWatchGames().subscribe(games => this.games = games);
    }

    ngOnInit(): void {
        this.getMyGames();
    }
}