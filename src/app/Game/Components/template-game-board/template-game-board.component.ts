/**
 * Created by Glenn on 22-5-2017.
 */
import { Component, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Template } from "app/browse/Models/template";
import { Tile } from "../../Models/tile";

import { forEach } from "@angular/router/src/utils/collection";
import { element } from "protractor";
import { isNullOrUndefined } from "util";

@Component({
    selector: 'template-game-board',
    templateUrl: './template-game-board.component.html',
    styleUrls: ['./template-game-board.component.scss']
})
export class TemplateGameBoardComponent {
    //variables
    @Input() tiles: Tile[];

    constructor() { }

    //on start
    ngOnInit(): void { }

}