import { Component } from '@angular/core';
import { GameService } from 'app/shared/Services/game.service';
import { Game } from 'app/shared/Models/game';
import { Subscription } from 'rxjs';

@Component({
    selector: 'my-games',
    templateUrl: './my-games.component.html',
    styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent {
    constructor(private gameService: GameService) { }

    games : Game[];
    busy: Subscription;
    selectedGame: Game;

    getMyGames(): void {
        this.busy = this.gameService.getMyGames().subscribe(games => {
            this.games = games;
        });
    }

    leaveGame(gameID: number): void {
        this.busy = this.gameService.leaveGame(gameID).subscribe();
        this.getMyGames();
    }

    startGame(gameID: number): void {
        this.busy = this.gameService.startGame(gameID).subscribe(game => this.getMyGames());
    }

    play(gameID: number): void {
        console.log(gameID);
    }

    ngOnInit(): void {
        this.getMyGames();
    }
}