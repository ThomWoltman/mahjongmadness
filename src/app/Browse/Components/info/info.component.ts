import { Component, Input } from '@angular/core';
import { Game } from 'app/shared/Models/game';

@Component({
  selector: 'info-game',
  templateUrl: './info.component.html',
  styleUrls: []
})

export class InfoComponent {
 
  @Input() selectedGame: Game;

}