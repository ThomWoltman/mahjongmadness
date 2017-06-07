import { Injectable } from '@angular/core';

import { Game } from '../Models/game';
//import { Games } from '../Mocks/mock-games';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class GameService {
    private apiUrl = "http://mahjongmayhem.herokuapp.com";
    username: string;
    token: string;

    constructor(private http: Http, private authService: AuthService) {    }

    getMyGames(): Observable<Game[]> {
        return this.http.get(`${this.apiUrl}/games/`, { params: { pageSize: 10, player: this.authService.username } })
            .map(this.extractData);
    }

    getGames(page?: number, player? :string, state?: string): Observable<Game[]> {
        return this.http.get(`${this.apiUrl}/games/`, { params: { pageSize: 10, pageIndex: page, state: state, player: player } })
            .map(this.extractData);
    }

    getWatchGames(): Observable<Game[]> {
        return this.http.get(`${this.apiUrl}/games/`, { params: { pageSize: 10, state: "playing" } })
            .map(this.extractData);
    }

    createGame(templateName: string, minPlayers: number, maxPlayers: number): Observable<Game> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'x-username': this.authService.username,
            'x-token': this.authService.token,
        });

        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${this.apiUrl}/games`,
            {
                templateName: templateName,
                minPlayers: minPlayers,
                maxPlayers: maxPlayers
            }, options)
            .map(this.extractData);
    }

    joinGame(gameID: number){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'x-username': this.authService.username,
            'x-token': this.authService.token,
        });

        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${this.apiUrl}/games/${gameID}/players`,
            {}, options)
            .map(this.extractData);
    }

    leaveGame(gameID: number){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'x-username': this.authService.username,
            'x-token': this.authService.token,
        });

        let options = new RequestOptions({ headers: headers });

        return this.http.delete(`${this.apiUrl}/games/${gameID}/players`,
             options)
            .map(this.extractData);
    }

    startGame(gameID: number) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'x-username': this.authService.username,
            'x-token': this.authService.token,
        });

        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${this.apiUrl}/games/${gameID}/start`,
            {}, options)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        console.log(res);
        let body = res.json();
        return body || {};
    }
}