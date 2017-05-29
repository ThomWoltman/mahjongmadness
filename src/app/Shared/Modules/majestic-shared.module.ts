import { NgModule } from '@angular/core';

import { AuthService } from '../Services/auth.service';
import { GameService } from '../Services/game.service';
import { AuthGuard } from 'app/shared/Services/auth-guard.service';

import { MajesticMdModule } from './majestic-md.module';

import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    
  ],
  imports: [
    MajesticMdModule,
    CommonModule,
    HttpModule,
    JsonpModule,
  ],
  exports: [
    MajesticMdModule,
    CommonModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [
    AuthService,
    GameService,
    AuthGuard,
  ]
})
export class MajesticSharedModule { }
