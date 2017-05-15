import { Component } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Game } from '../../Models/game';
import {Subscription} from 'rxjs';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  constructor(private gameService: GameService) { }

  games: Game[];
  busy: Subscription;

  // getGames() : void {
  //   this.gameService.getGames().then(games => this.games = games);
  // }

  getGames() : void {
    this.busy = this.gameService.getGames().subscribe(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
  }
}