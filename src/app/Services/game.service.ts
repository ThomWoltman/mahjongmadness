import { Injectable } from '@angular/core';

import { Game } from '../Models/game';
//import { Games } from '../Mocks/mock-games';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
    private apiUrl = "http://mahjongmayhem.herokuapp.com";

    constructor(private http: Http) {}

    // getGames(): Promise<Game[]> {
    //     return Promise.resolve(Games);
    // }

    getGames(): Observable<Game[]> {
        return this.http.get(`${this.apiUrl}/games/`, { params: { pageSize: 100 }})
                .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    // addGame(game: Game) : void {
    //     Games.push(game);
    // }
}