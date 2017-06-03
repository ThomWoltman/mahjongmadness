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
    //set selected tile
    if (this.isSelectAble()) {
      this.selectedTile = tile;
    }
    //check if matched
    else {
      this.tileMatch(tile);
    }
  }

  tileUnclicked(tile: Tile) {
    if (tile === this.selectedTile) {
      this.selectedTile = undefined;
    }
  }

  isSelectAble(): boolean {
    return this.selectedTile === undefined;
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