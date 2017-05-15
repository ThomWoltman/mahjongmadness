import { Component } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Game } from '../../Models/game';
import { Template } from '../../Models/template';
import { TemplateService } from '../../Services/template.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent {
  constructor(private gameService: GameService, private templateService: TemplateService) {}

  templates: Template[];
  selectedTemplate: Template;
  minPlayers: number;
  maxPlayers: number;
  busy: Subscription;

  // getTemplates() : void {
  //   this.templateService.getTemplates().then(templates => this.templates = templates);
  // }

  getTemplates() : void {
    this.busy = this.templateService.getTemplates()
      .subscribe(
        templates => this.templates = templates);
      
    console.log(this.templates);
  }

  createGame() : void {
      //this.gameService.addGame({id: 1, status: 1, players:1, template:this.selectedTemplate.id});     
  }

  ngOnInit(): void {
    this.getTemplates(); 
  }
}