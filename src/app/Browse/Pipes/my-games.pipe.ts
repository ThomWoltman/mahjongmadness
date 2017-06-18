import { Pipe, PipeTransform } from '@angular/core';

import { Game } from 'app/shared/Models/game';
import { AuthService } from 'app/shared/Services/auth.service';


@Pipe({ name: 'mygames' })
export class MyGamesPipe implements PipeTransform {
constructor(private authService: AuthService){}

  transform(allGames: Game[]) {
    return allGames && allGames.filter(game => game.state == 'open' && game.createdBy._id === this.authService.username);
  }
}