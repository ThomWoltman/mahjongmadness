import { Pipe, PipeTransform } from '@angular/core';

import { Game } from 'app/shared/Models/game';

@Pipe({ name: 'playinggames' })
export class PlayingGamesPipe implements PipeTransform {
  transform(allGames: Game[]) {
    return allGames && allGames.filter(game => game.state == 'playing');
  }
}