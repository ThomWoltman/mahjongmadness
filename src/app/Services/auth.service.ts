import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  token: string;
  username = new Subject<string>();
  // Observable string streams
  username$ = this.username.asObservable();

  // store the URL so we can redirect after logging in
  redirectUrl: string;
 
  // Service message commands
  login(token: string, username: string): void {
    this.isLoggedIn = true;
    this.token = token;
    this.username.next(username);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}