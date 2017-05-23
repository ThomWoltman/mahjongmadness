import { Component } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Game } from '../../Models/game';
import { Subscription } from 'rxjs';

@Component({
    selector: 'my-games',
    templateUrl: './my-games.component.html',
    styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent {
    constructor(private gameService: GameService) { }

    openGames: Game[];
    playingGames: Game[];
    busy: Subscription;
    selectedGame: Game;

    getMyGames(): void {
        this.busy = this.gameService.getMyGames().subscribe(games => {
            this.openGames = games.filter(game => game.state == "open");
            this.playingGames = games.filter(game => game.state == "playing");
        });
    }

    leaveGame(gameID: number): void {
        this.busy = this.gameService.leaveGame(gameID).subscribe();
        this.getMyGames();
    }

    ngOnInit(): void {
        this.getMyGames();
    }
}