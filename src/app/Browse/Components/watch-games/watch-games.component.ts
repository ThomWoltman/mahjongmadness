import { Component } from '@angular/core';
import { GameService } from 'app/shared/Services/game.service';
import { Game } from 'app/shared/Models/game';
import { Subscription } from 'rxjs';
import { Player } from "../../../Shared/Models/player";

@Component({
    selector: 'watch-games',
    templateUrl: './watch-games.component.html',
    styleUrls: ['./watch-games.component.scss']
})
export class WatchGamesComponent {
    constructor(private gameService: GameService) { }

    games: Game[];
    busy: Subscription;
    gameId: any;
    players: Player[];

    getMyGames(): void {
        //this.busy = this.gameService.getWatchGames().subscribe(games => this.games = games);
        this.busy = this.gameService.getMatchHistory().subscribe(games => {
            games.forEach(game => {
            });

            this.games = games
        });
    }

    onSelect(game: Game) {
        this.gameId = game._id;
        console.log("selected");
        console.log(this.gameId);
        this.busy = this.gameService.getGamePlayerInfo(this.gameId).subscribe(players => {
            this.players = players;
        });
    }

    ngOnInit(): void {
        this.getMyGames();
    }
}