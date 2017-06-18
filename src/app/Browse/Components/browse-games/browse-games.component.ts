import { Component } from '@angular/core';
import { GameService } from 'app/shared/Services/game.service';
import { Game } from 'app/shared/Models/game';
import { Subscription } from 'rxjs';

import { AuthService } from 'app/shared/Services/auth.service';

@Component({
  selector: 'browse-games',
  templateUrl: './browse-games.component.html',
  styleUrls: ['./browse-games.component.scss']
})

export class BrowseGamesComponent {
  constructor(private gameService: GameService, private authService: AuthService) { }

  games: Game[];
  busy: Subscription;
  selectedGame: Game;
  currentPage = 0;
  username: string;

  getGames(): void {
    this.busy = this.gameService.getGames(this.currentPage, this.username).subscribe(games => {
      this.games = games;
    });
  }

  searchGameByUserName(): void {
    this.currentPage = 0;
    this.getGames();
    // this.busy = this.gameService.getGames(this.currentPage, this.username).subscribe(games => {
    //   this.games = games;
    // });
  }

  changePage(page: number): void { 
    this.currentPage += page;
    console.log(this.currentPage);
    this.getGames();
  }

  joinGame(gameID: number) {
    this.busy = this.gameService.joinGame(gameID).subscribe(game => {
      this.onSelect(game);
      this.getGames();
    });
  }

  onSelect(game: Game) {
    this.selectedGame = game;
  }

  ngOnInit(): void {
    this.getGames();
  }
}