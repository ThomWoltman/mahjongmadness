import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  template: '<p>hallohallo uh jumbo ofzo</p>',
})
export class AuthCallbackComponent implements OnInit {
    constructor ( private route : ActivatedRoute, private router: Router, private authService: AuthService) {}

    ngOnInit(): void {
        let token = this.route.snapshot.queryParams['token'];
        let username = this.route.snapshot.queryParams['username'];
        console.log(this.route.snapshot.queryParams);
        console.log(token);
        if(token){
            this.authService.login(token, username);
        }
        this.router.navigateByUrl('home');
    }
}