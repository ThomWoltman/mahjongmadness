import { Component } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Game } from '../../Models/game';
import { Subscription } from 'rxjs';

import { AuthService } from '../../Services/auth.service';

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
  isGameJoined: boolean;

  currentPage = 0;

  // getGames() : void {
  //   this.gameService.getGames().then(games => this.games = games);
  // }

  getGames(): void {
    this.busy = this.gameService.getGames(this.currentPage).subscribe(games => this.games = games);//.filter(game =>
      //game.createdBy._id != this.authService.username && 
      //game.players.every(player => player._id != this.authService.username)));
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.getGames();
  }

  joinGame(gameID: number) {
    this.busy = this.gameService.joinGame(gameID).subscribe(game => {
      var index = this.games.findIndex(game => game == this.selectedGame);
      this.onSelect(game);
      this.games[index] = this.selectedGame;
      this.getGames();
    });
  }

  onSelect(game: Game) {
    this.selectedGame = game;
    this.isGameJoined = this.selectedGame.players.find(user => user._id == this.authService.username) != undefined;
  }

  ngOnInit(): void {
    this.getGames();
  }
}