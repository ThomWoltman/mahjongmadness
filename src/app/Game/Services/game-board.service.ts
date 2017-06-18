import { Injectable } from '@angular/core';
import { Tile } from '../models/tile';
import { isNullOrUndefined, isUndefined } from "util";

import { TileComponent } from "../Components/tile/tile.component";

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from 'app/shared/Services/auth.service';
import { WebSocketService } from 'angular2-websocket-service';
import { QueueingSubject } from 'queueing-subject';

import * as io from "socket.io-client";

//import { TileService } from "app/shared/services/tile.service";

@Injectable()
export class GameBoardService {
  constructor(private http: Http, private authService: AuthService, private socketFactory: WebSocketService) { }

  private apiUrl = "http://mahjongmayhem.herokuapp.com";
  tiles: Tile[];
  selectedTile: Tile;
  gameID: number;
  socket: any;
  playerSubject = new Subject<any>();
  gameEndedSubject = new Subject<any>();
  // Observable string streams
  players$ = this.playerSubject.asObservable();
  gameEnded$ = this.gameEndedSubject.asObservable();

  initTiles(tiles: Tile[], gameId: number) {
    this.playerSubject = new Subject<any>();
    this.players$ = this.playerSubject.asObservable();
    this.tiles = tiles;
    this.gameID = gameId;
    this.selectedTile = undefined;
    this.socket = io(`http://mahjongmayhem.herokuapp.com?gameId=${this.gameID}`);
    console.log(this.socket);

    let self = this;
    this.socket.on('match', (data) => {
      if (this.authService.username !== data[0].match.foundBy) {
        console.log('match');
        console.log(data);
        console.log(self);
        let match1 = data[0];
        let match2 = data[1];

        this.deleteTile(match1);
        this.deleteTileFromList(match1);
        this.deleteTile(match2);
        this.deleteTileFromList(match2); 
      }
      this.playerSubject.next(data);
      console.log("i found a match, socket");
    });

    this.socket.on('end', (data) => {
      this.gameEndedSubject.next(data);
    });
  }

  tileClicked(tile: Tile): boolean {
    var canSelect = this.selectedTile === undefined;

    if (this.selectedTile !== tile) {
      //check if matched
      if (this.isNotSurrounded(tile)) {
        var isMatch = this.tileMatch(tile);
        if (canSelect) {
          this.selectedTile = tile;
        }
      }
      else {
        canSelect = false;
      }
    }
    else {
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

  isNotSurrounded(tile): boolean {
    return this.hasNoTileOnTop(tile) && (this.isNotSurroundedAtRightSide(tile) || this.isNotSurroundedAtLeftSide(tile));
  }

  hasNoTileOnTop(tile): boolean {
    var topTile1 = this.tiles.find(temp => temp.xPos === tile.xPos && temp.yPos === tile.yPos && temp.zPos === tile.zPos + 1);
    var topTile2 = this.tiles.find(temp => temp.xPos === tile.xPos && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos + 1);
    var topTile3 = this.tiles.find(temp => temp.xPos === tile.xPos && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos + 1);


    var RightTopTile1 = this.tiles.find(temp => temp.xPos === tile.xPos + 1 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos + 1);
    var RightTopTile2 = this.tiles.find(temp => temp.xPos === tile.xPos + 1 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos + 1);
    var RightTopTile3 = this.tiles.find(temp => temp.xPos === tile.xPos + 1 && temp.yPos === tile.yPos && temp.zPos === tile.zPos + 1);

    var LeftTopTile1 = this.tiles.find(temp => temp.xPos === tile.xPos - 1 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos + 1);
    var LeftTopTile2 = this.tiles.find(temp => temp.xPos === tile.xPos - 1 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos + 1);
    var LeftTopTile3 = this.tiles.find(temp => temp.xPos === tile.xPos - 1 && temp.yPos === tile.yPos && temp.zPos === tile.zPos + 1);


    return topTile1 === undefined && topTile2 === undefined && topTile3 === undefined && RightTopTile1 === undefined && RightTopTile2 === undefined && RightTopTile3 === undefined && LeftTopTile1 === undefined && LeftTopTile2 === undefined && LeftTopTile3 === undefined;
  }

  isNotSurroundedAtRightSide(tile: Tile): boolean {
    //check if there is a tile on the left and right.
    var rightTile1 = this.tiles.find(temp => temp.xPos === tile.xPos + 2 && temp.yPos === tile.yPos && temp.zPos === tile.zPos);
    var rightTile2 = this.tiles.find(temp => temp.xPos === tile.xPos + 2 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos);
    var rightTile3 = this.tiles.find(temp => temp.xPos === tile.xPos + 2 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos);


    //if no tile left OR right it is not surrounded
    return rightTile1 === undefined && rightTile2 === undefined && rightTile3 === undefined;
  }

  isNotSurroundedAtLeftSide(tile: Tile): boolean {
    var leftTile1 = this.tiles.find(temp => temp.xPos === tile.xPos - 2 && temp.yPos === tile.yPos && temp.zPos === tile.zPos);
    var leftTile2 = this.tiles.find(temp => temp.xPos === tile.xPos - 2 && temp.yPos === tile.yPos - 1 && temp.zPos === tile.zPos);
    var leftTile3 = this.tiles.find(temp => temp.xPos === tile.xPos - 2 && temp.yPos === tile.yPos + 1 && temp.zPos === tile.zPos);

    return leftTile1 === undefined && leftTile2 === undefined && leftTile3 === undefined;
  }

  tileMatch(tile: Tile): boolean {
    if (this.selectedTile === undefined) {
      return false;
    }
    console.log("nan");
    console.log(isNaN(Number(this.selectedTile.tile.name)));

    if (this.selectedTile.tile.suit === tile.tile.suit
      && (this.selectedTile.tile.name === tile.tile.name
        || (isNaN(Number(this.selectedTile.tile.name))
          && isNaN(Number(tile.tile.name))))) {

      //this.tileService.matchTiles(this.selectedTile._id, tile._id).subscribe();

      console.log("match!!");
      this.matchTiles(this.selectedTile._id, tile._id).subscribe();

      this.deleteTile(this.selectedTile);
      this.deleteTile(tile);

      this.deleteTileFromList(tile);
      this.deleteTileFromList(this.selectedTile);

      this.selectedTile = undefined;
      return true;

    } else {
      console.log("No match");
      return false;
    }

  }
  deleteTile(tile) {
    document.getElementById(tile._id.toString()).remove();
  }

  deleteTileFromList(tile) {
    this.tiles = this.tiles.filter(obj => obj._id !== tile._id);
  }

  matchTiles(tileID1: number, tileID2: number): Observable<Tile> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-username': this.authService.username,
      'x-token': this.authService.token,
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/games/${this.gameID}/tiles/matches`,
      {
        tile1Id: tileID1,
        tile2Id: tileID2,
      }, options)
      .map(this.extractData);
  }


  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body || {};
  }
}