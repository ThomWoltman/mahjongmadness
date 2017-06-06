import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';
import { isNullOrUndefined, isUndefined } from "util";

import { TileComponent } from "../Components/tile/tile.component";

@Injectable()
export class GameBoardService {
  constructor() { }

  tiles: Tile[];
  selectedTile: Tile;

  initTiles(tiles: Tile[]) {
    this.tiles = tiles;
  }

  tileClicked(tile: Tile) : boolean {
    var canSelect = this.selectedTile === undefined;

    if(this.selectedTile !== tile){
    //check if matched
      if (this.isNotSurrounded(tile)) {
        var isMatch = this.tileMatch(tile);
        if(canSelect){
          this.selectedTile = tile;
        }
      }
      else{
        canSelect = false;
      }       
    }
    else{
      canSelect = false;
    }

    return canSelect;
  }

  tileUnclicked(tile: Tile) {
    if (tile === this.selectedTile) {
      this.selectedTile = undefined;
    }
  }

  isSelectAble(tile: Tile): boolean {
    return this.isNotSurrounded(tile);
  }

  isNotSurrounded(tile) : boolean {
    return this.hasNoTileOnTop(tile) && (this.isNotSurroundedAtRightSide(tile) || this.isNotSurroundedAtLeftSide(tile));
  }

  hasNoTileOnTop(tile) : boolean {
    var topTile1 = this.tiles.find(temp => temp.xPos === tile.xPos && temp.yPos === tile.yPos && temp.zPos === tile.zPos + 1);

    var RightTopTile1 = this.tiles.find(temp => temp.xPos === tile.xPos + 1 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos + 1);
    var RightTopTile2 = this.tiles.find(temp => temp.xPos === tile.xPos + 1 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos + 1);
    var RightTopTile3 = this.tiles.find(temp => temp.xPos === tile.xPos + 1 && temp.yPos === tile.yPos && temp.zPos === tile.zPos + 1);

    var LeftTopTile1 = this.tiles.find(temp => temp.xPos === tile.xPos - 1 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos + 1);
    var LeftTopTile2 = this.tiles.find(temp => temp.xPos === tile.xPos - 1 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos + 1);
    var LeftTopTile3 = this.tiles.find(temp => temp.xPos === tile.xPos - 1 && temp.yPos === tile.yPos && temp.zPos === tile.zPos + 1);


    return topTile1 === undefined && RightTopTile1 === undefined && RightTopTile2 === undefined && RightTopTile3 === undefined && LeftTopTile1 === undefined && LeftTopTile2 === undefined && LeftTopTile3 === undefined;
  }

  isNotSurroundedAtRightSide(tile: Tile) : boolean {
    //check if there is a tile on the left and right.
    var rightTile1 = this.tiles.find(temp => temp.xPos === tile.xPos + 2 && temp.yPos === tile.yPos && temp.zPos === tile.zPos);
    var rightTile2 = this.tiles.find(temp => temp.xPos === tile.xPos + 2 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos);
    var rightTile3 = this.tiles.find(temp => temp.xPos === tile.xPos + 2 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos);


    //if no tile left OR right it is not surrounded
    return rightTile1 === undefined && rightTile2 === undefined && rightTile3 === undefined;
  }

  isNotSurroundedAtLeftSide(tile: Tile) : boolean {
    var leftTile1 = this.tiles.find(temp => temp.xPos === tile.xPos - 2 && temp.yPos === tile.yPos && temp.zPos === tile.zPos);
    var leftTile2 = this.tiles.find(temp => temp.xPos === tile.xPos - 2 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos);
    var leftTile3 = this.tiles.find(temp => temp.xPos === tile.xPos - 2 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos);

    return leftTile1 === undefined && leftTile2 === undefined && leftTile3 === undefined;
  }

  tileMatch(tile: Tile): boolean{
    if(this.selectedTile === undefined){
      return false;
    }

    if(this.selectedTile.tile.suit === tile.tile.suit && this.selectedTile.tile.name === tile.tile.name){

      console.log("match!!");
      this.deleteTile(this.selectedTile);
      this.deleteTile(tile);

      this.deleteTileFromList(tile);
      this.deleteTileFromList(this.selectedTile);

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

    deleteTileFromList(tile) {
      this.tiles = this.tiles.filter(obj => obj !== tile);
    }
}