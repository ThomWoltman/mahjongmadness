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

  tileClicked(tile: Tile) : boolean{
    console.log("from service: " + tile.tile.suit);
    if(this.tile1 == null){
      this.tile1 = tile;
      return false;

    }else if(this.tile2 == null){
        this.tile2 = tile;
        return this.tileMatch();
    }
  }

  tileMatch(): boolean{
    if(this.tile1.tile.suit == this.tile2.tile.suit && this.tile1.tile.name == this.tile2.tile.name){

      console.log("match!!");
      this.deleteTile(this.tile1);
      this.deleteTile(this.tile2);
        this.tile1 = null;
        this.tile2 = null;
        return true;

    }else{
      console.log("No match");
        this.tile1 = null;
        this.tile2 = null;
        return false;

    }

  }
    deleteTile(tile) {
        document.getElementById(tile._id.toString()).remove();

    }
}