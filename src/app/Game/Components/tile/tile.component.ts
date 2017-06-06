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
    console.log("z = " + this.tile.zPos + " x = " + this.tile.xPos + " y = " + this.tile.yPos);
    //tile is selected, and clicked again
    if (this.isSelected) {
      this.unSelectTile();
    }

    //tile is not selected and clicked
    else {
      //check if tile can be selected
      if (this.gameBoardService.isSelectAble(this.tile)) {
        this.selectTile();
      }
      //tell service tile is clicked
      this.gameBoardService.tileClicked(this.tile);
    }
  }

  private selectTile() {
    var element = document.getElementById(this.class + "-" + this.number + "-" + this.tile._id);
    element.style.backgroundColor = "red";
    element.style.opacity = "0.6";
    this.isSelected = true;
  }

  private unSelectTile(){
    var element = document.getElementById(this.class + "-" + this.number + "-" + this.tile._id);
    element.style.opacity = "0.0";
    this.gameBoardService.tileUnclicked(this.tile);
    this.isSelected = false;
  }
  


}
