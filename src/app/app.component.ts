import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  username: string;
  title = 'Mahjong';

  ngOnInit(){
    this.authService.username$.subscribe(
      username => {
        this.username = username;
      });
  }
}
