import { Component, OnInit,Input } from '@angular/core';
import {Tile} from "../../Models/tile";


@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tile: Tile;

  constructor() { }

  ngOnInit() {  }

}
