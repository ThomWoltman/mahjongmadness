import { Injectable } from '@angular/core';

//import { Games } from '../Mocks/mock-games';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Tile} from "app/Game/Models/tile";
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class TileService {
    private apiUrl = "http://mahjongmayhem.herokuapp.com";
    username: string;
    token: string;
    gameID: number;

    constructor(private http: Http, private authService: AuthService) {    }

    setID(gameId: number){
        this.gameID = gameId;
    }

    getTiles(gameID: number) :Observable<Tile[]>{

        return this.http.get(`${this.apiUrl}/games/${gameID}/tiles`, {params: { matched: "false" }})
            .map(this.extractData);
    }

    // matchTiles(tileID1: number, tileID2: number): Observable<Tile>{
    //     let headers = new Headers({
    //         'Content-Type': 'application/json',
    //         'x-username': this.authService.username,
    //         'x-token': this.authService.token,
    //     });

    //     let options = new RequestOptions({ headers: headers });

    //     return this.http.post(`${this.apiUrl}/games/${this.gameID}/tiles/matches`,
    //         {
    //             tile1Id: tileID1,
    //             tile2Id: tileID2,
    //         }, options)
    //         .map(this.extractData);
    // }


    private extractData(res: Response) {
        console.log(res);
        let body = res.json();
        return body || {};
    }
}