import { Component } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Game } from '../../Models/game';
import {Subscription} from 'rxjs';

import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  constructor(private gameService: GameService, private authService: AuthService) { }

  myGames: Game[];
  games: Game[];
  watchGames: Game[];
  busy: Subscription;

  // getGames() : void {
  //   this.gameService.getGames().then(games => this.games = games);
  // }

  getMyGames() : void {
    this.busy = this.gameService.getMyGames().subscribe(games => this.myGames = games);
  }

  getWatchGames() : void {
    this.busy = this.gameService.getWatchGames().subscribe(games => this.watchGames = games);
  }

  getGames(page: number) : void {
    this.busy = this.gameService.getGames(page).subscribe(games => this.games = games.filter(game=>game.createdBy._id!=this.authService.username));
  }

  changePage(page: number) : void {
    this.getGames(page);
  } 

  ngOnInit(): void {
    this.getMyGames();
    this.getGames(0);
    this.getWatchGames();
  }
}