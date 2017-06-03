import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';

@Injectable()
export class GameBoardService {
  constructor(){ }

  tiles: Tile[];
  selectedTile: Tile;

  initTiles(tiles: Tile[]){
      this.tiles = tiles;
  }

  tileClicked(tile: Tile){
    //set selected tile
    if(!this.selectedTile){
      this.selectedTile = tile;
    }
    //check if matched
    else{
    }
  }

  tileUnclicked(tile: Tile){
    if(tile === this.selectedTile){
      this.selectedTile = undefined;
    }
  }

  isSelectAble(): boolean {
    return this.selectedTile === undefined;
  }
}