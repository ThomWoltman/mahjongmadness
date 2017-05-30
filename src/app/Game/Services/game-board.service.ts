import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';

@Injectable()
export class GameBoardService {
  constructor(){ }

  tiles: Tile[];

  initTiles(tiles: Tile[]){
      this.tiles = tiles;
  }

  tileClicked(tile: Tile){
    console.log("from service: " + tile.tile.suit);
  }
}