/**
 * Created by Glenn on 22-5-2017.
 */
import { Component, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { TemplateService } from '../../Services/template.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../Services/auth.service';
import { Template } from "../../Models/template";
import { Tile } from "../../Models/tile";

import { forEach } from "@angular/router/src/utils/collection";
import { element } from "protractor";
import { isNullOrUndefined } from "util";

@Component({
    selector: 'game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {
    //variables
    @Input() selectedTemplate: Template;

    constructor(private templateService: TemplateService, private authService: AuthService) { }

    //on start
    ngOnInit(): void { }

}