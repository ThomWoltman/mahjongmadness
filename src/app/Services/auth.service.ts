import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  constructor(){
    this.loadSession();
  }

  isLoggedIn: boolean = false;
  tokenSubject = new Subject<string>();
  usernameSubject = new Subject<string>();

  username: string;
  token: string;
  // Observable string streams
  username$ = this.usernameSubject.asObservable();
  token$ = this.tokenSubject.asObservable();

  // store the URL so we can redirect after logging in
  redirectUrl: string;
 
  // Service message commands
  login(token: string, username: string): void {
    this.isLoggedIn = true;
    this.token = token;
    this.username = username;
    this.tokenSubject.next(token);
    this.usernameSubject.next(username);

    this.saveSession();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.token = undefined;
    this.username = undefined;

    this.tokenSubject.next(this.token);
    this.usernameSubject.next(this.username);

    this.saveSession();
  }

  loadSession(): void{
    if(window && window.localStorage){
      var sessionUsername = window.localStorage.getItem("username");
      var sessionToken = window.localStorage.getItem("token");

      if(sessionUsername && sessionToken){
        this.login(sessionToken, sessionUsername);
      }
    }
  }

  saveSession(): void{
    if(window && window.localStorage){
      window.localStorage.setItem("username", this.username);
      window.localStorage.setItem("token", this.token);
    }
  }
}