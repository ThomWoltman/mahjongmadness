import { Component } from '@angular/core';
import { AuthService } from 'app/shared/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.username = authService.username;
  }

  username: string;
  title = 'MahjongMadness';

  ngOnInit(){
    this.authService.username$.subscribe(
      username => {
        this.username = username;
      });
  }
}
