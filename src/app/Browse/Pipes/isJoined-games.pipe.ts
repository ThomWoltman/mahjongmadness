import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'app/shared/Services/auth.service';

import { Game } from 'app/shared/Models/game';

@Pipe({ name: 'isjoined' })
export class IsJoinedPipe implements PipeTransform {

constructor(private authService: AuthService){}

  transform(game: Game) {
    if(game.players.length === game.maxPlayers){
      return true;
    }
    if(game.state === "playing"){
      return true;
    }
    return game.players.find(user => user._id == this.authService.username) != undefined;
  }
}