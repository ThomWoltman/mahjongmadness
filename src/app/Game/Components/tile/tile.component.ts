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
  suit: string;
  name: string;
  isSelected: boolean;

  constructor(private gameBoardService: GameBoardService) { }

  ngOnInit() {
    this.suit = this.tile.tile.suit.toLowerCase();
    this.name = this.tile.tile.name.toLowerCase();
    this.isSelected = false;
  }

  showTile(event) {
      console.log("suit = " + this.suit + " name = " + this.name);
      if (this.gameBoardService.tileClicked(this.tile)) {
        this.selectTile();
      }
      else {
        this.unSelectTile();
      }
  }

  private selectTile() {
    var element = document.getElementById(this.suit + "-" + this.name + "-" + this.tile._id);

    if(element !== null){
      element.style.backgroundColor = "red";
      element.style.opacity = "0.6";
      this.isSelected = true;
    }
  }

  public unSelectTile() {
    var element = document.getElementById(this.suit + "-" + this.name + "-" + this.tile._id);
    
    if(element !== null){
      element.style.opacity = "0.0";
      this.gameBoardService.tileUnclicked(this.tile);
      this.isSelected = false;
    }
  }



}
