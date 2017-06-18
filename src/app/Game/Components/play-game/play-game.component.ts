import { Component, Input } from '@angular/core';
import { Tile } from "../../Models/tile";
import { ActivatedRoute } from "@angular/router";
import { TileService } from 'app/shared/Services/tile.service';
import { Subscription } from "rxjs/Subscription";
import { GameBoardService } from '../../services/game-board.service';
import { Player } from "../../../Shared/Models/player";
import { GameService } from 'app/shared/Services/game.service';



@Component({
    selector: 'play-game',
    templateUrl: './play-game.component.html',
    styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent {
    id: number;
    tiles: Tile[];
    players: Player[];
    busy: Subscription;
    isGameEnded: boolean;
    data: any;

    constructor(private gameService: GameService, private route: ActivatedRoute, private tileService: TileService, private gameBoardService: GameBoardService) {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
        this.id = route.snapshot.params['id'];
        //this.tileService.setID(this.id);
        console.log("playGame: " + this.id);
    }

    ngOnInit() {
        this.busy = this.tileService.getTiles(this.id).subscribe(tiles => {
            tiles.forEach(tile => {
                if (tile.tile.suit === "Flower") {
                    console.log("name=" + tile.tile.name + " & suit=" + tile.tile.suit);
                }
            });
            this.tiles = tiles;
            this.gameBoardService.initTiles(this.tiles, this.id);
            this.gameService.getGamePlayerInfo(this.id).subscribe(players => {
                this.players = players;
            });


            this.gameBoardService.players$.subscribe(
                data => {
                    if(data[0]._id !== this.data){
                        this.data = data[0]._id;
                        this.players.forEach(player => {
                            if (player._id === data[0].match.foundBy) {
                                player.numberOfMatches++;
                            }
                        });
                    }
                });
                    
                        
                        this.gameBoardService.gameEnded$.subscribe(data => {
                        console.log("game ended from play game component");
                        this.isGameEnded = true;
            })
        });
        

    }
}
