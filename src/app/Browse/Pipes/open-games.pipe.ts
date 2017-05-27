import { Pipe, PipeTransform } from '@angular/core';

import { Game } from 'app/shared/Models/game';

@Pipe({ name: 'opengames' })
export class OpenGamesPipe implements PipeTransform {
  transform(allGames: Game[]) {
    return allGames && allGames.filter(game => game.state == 'open');
  }
}