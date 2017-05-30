import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';
import {isNullOrUndefined, isUndefined} from "util";

@Injectable()
export class GameBoardService {
  constructor(){ }

  tiles: Tile[];
  tile1: Tile;
  tile2: Tile;

  initTiles(tiles: Tile[]){
      this.tiles = tiles;
  }

  tileClicked(tile: Tile){
    console.log("from service: " + tile.tile.suit);
    if(this.tile1 == null){
      this.tile1 = tile;

    }else if(this.tile2 == null){
        this.tile2 = tile;
        this.tileMatch();
    }
  }

  tileMatch(){
    if(this.tile1.tile.suit == this.tile2.tile.suit && this.tile1.tile.name == this.tile2.tile.name){

      console.log("match!!");
    }else{
      console.log("No match");
    }
    this.tile1 = null;
    this.tile2 = null;
  }
}