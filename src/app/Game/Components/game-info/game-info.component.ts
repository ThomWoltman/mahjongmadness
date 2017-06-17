import {Component, Input, OnInit} from '@angular/core';
import { GameService } from 'app/shared/Services/game.service';
import {Game} from "../../../Shared/Models/game";
import {Subscription} from "rxjs/Subscription";
import {isNullOrUndefined} from "util";
import {Player} from "../../../Shared/Models/player";


@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
    //@Input() gameId: number;
    @Input() players :Player[];
    busy: Subscription;



    constructor(private gameService: GameService) {

    }

  ngOnInit() {
  }

}
