import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { MaterialModule } from '@angular/material';
import {Subscription} from "rxjs/Subscription";

import {Player} from "../../../Shared/Models/player";

import {MajesticSharedModule} from "../../../Shared/Modules/majestic-shared.module";
import {GameService} from "../../../Shared/Services/game.service";
import {BusyModule} from "angular2-busy";
import {MyGamesComponent} from "./my-games.component";
import {FormsModule} from "@angular/forms";


describe('MyGamesComponent', () => {
    let component: MyGamesComponent;
    let fixture: ComponentFixture<MyGamesComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

    beforeEach(async(() => {
        var userServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User'}
        };

        TestBed.configureTestingModule({
            imports:[
                MajesticSharedModule,
                BusyModule,
                FormsModule
            ],

            declarations: [

                MyGamesComponent,


            ],

            providers: [
                {provide: GameService, useValue : {username:"Gebruiker"}}

    ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyGamesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});



describe(' tests', () => {
    it('true is true', () => expect(true).toBe(true));
});
describe(' swd', () => {
    it('true is true', () => expect(true).toBe(true));
});