import { Component, OnInit,Input } from '@angular/core';
import {Tile} from "../../Models/tile";
import { GameBoardService } from '../../services/game-board.service';



@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile: Tile;
  class: string;
  number:string;

  constructor(private gameBoardService: GameBoardService) { }

  ngOnInit() {
    this.class = this.tile.tile.suit.toLowerCase();
   this.number = this.tile.tile.name.toLowerCase();
     // document.getElementById(this.tile._id.toString()).innerHTML = "";

  }

  showTile(event){
    this.gameBoardService.tileClicked(this.tile);


  }


}
