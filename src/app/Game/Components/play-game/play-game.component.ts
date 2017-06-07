import { Component, Input } from '@angular/core';
import {Tile} from "../../Models/tile";
import {ActivatedRoute} from "@angular/router";
import { TileService } from 'app/shared/Services/tile.service';
import {Subscription} from "rxjs/Subscription";
import { GameBoardService } from '../../services/game-board.service';




@Component({
  selector: 'play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent {
    id:number;
    tiles : Tile[];
    busy: Subscription;

    constructor(private route: ActivatedRoute,private tileService: TileService, private gameBoardService : GameBoardService) {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.id = route.snapshot.params['id'];
        //this.tileService.setID(this.id);
        console.log("playGame: "+this.id);
    }

    ngOnInit() {
        this.busy = this.tileService.getTiles(this.id).subscribe(tiles => {
        this.tiles = tiles;
        this.gameBoardService.initTiles(this.tiles, this.id);
    });     
  }

}
