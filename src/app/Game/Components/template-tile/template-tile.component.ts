import { Component, OnInit,Input } from '@angular/core';
import {Tile} from "../../Models/tile";


@Component({
  selector: 'template-tile',
  templateUrl: './template-tile.component.html',
  styleUrls: ['./template-tile.component.scss']
})
export class TemplateTileComponent implements OnInit {

  @Input() tile: Tile;
  class: string;
  number:string;

  constructor() { }

  ngOnInit() {

  }

}
