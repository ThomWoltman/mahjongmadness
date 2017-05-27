import { Component } from '@angular/core';
import { GameService } from 'app/shared/Services/game.service';
import { Game } from 'app/shared/Models/game';
import { Template } from '../../Models/template';
import { TemplateService } from '../../Services/template.service';

import {Subscription} from 'rxjs';

@Component({
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent {
  constructor(private gameService: GameService, private templateService: TemplateService) {}

  templates: Template[];
  selectedTemplate: Template;
  minPlayers: number;
  maxPlayers: number;
  busy: Subscription;

  getTemplates() : void {
    this.busy = this.templateService.getTemplates()
      .subscribe(
        templates => this.templates = templates);
  }

  startGame() : void {
      this.busy = this.gameService.createGame(this.selectedTemplate._id, this.minPlayers, this.maxPlayers).subscribe(game => this.emptyValues());    
  }

  private emptyValues() : void{
    this.selectedTemplate = null;
    this.minPlayers = null;
    this.maxPlayers = null;
  }

  ngOnInit(): void {
    this.getTemplates(); 
  }
}