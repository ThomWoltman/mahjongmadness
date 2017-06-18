import { Component } from '@angular/core';
import { GameService } from 'app/shared/Services/game.service';
import { Game } from 'app/shared/Models/game';
import { Template } from '../../Models/template';
import { TemplateService } from '../../Services/template.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {
  constructor(private gameService: GameService, private templateService: TemplateService) { }

  templates: Template[];
  selectedTemplate: Template;
  minPlayers: number;
  maxPlayers: number;
  busy: Subscription;
  msg: String;
  error:  String;

  getTemplates(): void {
    this.busy = this.templateService.getTemplates()
      .subscribe(
      templates => this.templates = templates);
  }

  startGame(): void {
    if(this.isGameValid()){
      this.busy = this.gameService.createGame(this.selectedTemplate._id, this.minPlayers, this.maxPlayers)
      .subscribe(game => {
        this.emptyValues();
        this.msg = "game created";
        this.error = undefined;
      }
      );
    }
    else{
      this.error = "game is not valid";
    }
  }

  private isGameValid(){
    return this.minPlayers < this.maxPlayers && this.minPlayers > 0 && this.selectedTemplate;
  }

  private emptyValues(): void {
    this.selectedTemplate = null;
    this.minPlayers = null;
    this.maxPlayers = null;
  }

  ngOnInit(): void {
    this.getTemplates();
  }
}