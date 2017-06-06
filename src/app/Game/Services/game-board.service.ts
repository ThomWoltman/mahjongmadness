import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';
import { isNullOrUndefined, isUndefined } from "util";

@Injectable()
export class GameBoardService {
  constructor() { }

  tiles: Tile[];
  selectedTile: Tile;

  initTiles(tiles: Tile[]) {
    this.tiles = tiles;
  }

  tileClicked(tile: Tile) {
    console.log("is surrounded = " + this.isNotSurroundedAtSides(tile));
    //set selected tile
    if (this.isSelectAble(tile)) {
      this.selectedTile = tile;
    }
    //check if matched
    else if ( this.isNotSurroundedAtSides(tile)) {
      this.tileMatch(tile);
    }
  }

  tileUnclicked(tile: Tile) {
    if (tile === this.selectedTile) {
      this.selectedTile = undefined;
    }
  }

  isSelectAble(tile: Tile): boolean {
    return this.selectedTile === undefined && this.isNotSurroundedAtSides(tile);
  }

  isNotSurroundedAtSides(tile: Tile) : boolean {
    //check if there is a tile on the left and right.
    var surroundedTile1 = this.tiles.find(temp => temp.xPos === tile.xPos - 2 && temp.yPos === tile.yPos && temp.zPos === tile.zPos);
    var surroundedTile2 = this.tiles.find(temp => temp.xPos === tile.xPos + 2 && temp.yPos === tile.yPos && temp.zPos === tile.zPos);

    //if no tile left OR right it is not surrounded
    return surroundedTile1 === undefined || surroundedTile2 === undefined;
  }

  tileMatch(tile: Tile): boolean{
    if(this.selectedTile.tile.suit == tile.tile.suit && this.selectedTile.tile.name == tile.tile.name){

      console.log("match!!");
      this.deleteTile(this.selectedTile);
      this.deleteTile(tile);
        this.selectedTile = undefined;
        return true;

    } else{
      console.log("No match");
        return false;

    }

  }
    deleteTile(tile) {
        document.getElementById(tile._id.toString()).remove();
    }
}