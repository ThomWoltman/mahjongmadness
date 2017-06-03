import { Component, OnInit, Input } from '@angular/core';
import { Tile } from "../../Models/tile";
import { GameBoardService } from '../../services/game-board.service';



@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile: Tile;
  class: string;
  number: string;
  isSelected: boolean;

  constructor(private gameBoardService: GameBoardService) { }

  ngOnInit() {
    this.class = this.tile.tile.suit.toLowerCase();
    this.number = this.tile.tile.name.toLowerCase();
    this.isSelected = false;
  }

  showTile(event) {
    if (this.isSelected) {
      var element = document.getElementById(this.class + "-" + this.number + "-" + this.tile._id);
      element.style.opacity = "0.0";
      this.gameBoardService.tileUnclicked(this.tile);
      this.isSelected = false;
    }
    else {
      console.log(this.tile.zPos + " " + this.class + "-" + this.number);
      console.log(event);
      console.log(this.gameBoardService.isSelectAble());
      if (this.gameBoardService.isSelectAble()) {
        var element = document.getElementById(this.class + "-" + this.number + "-" + this.tile._id);
        element.style.backgroundColor = "red";
        element.style.opacity = "0.6";
        this.isSelected = true;
      }
      this.gameBoardService.tileClicked(this.tile);
    }
  }
  


}
