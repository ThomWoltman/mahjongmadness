import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, Input, Output } from '@angular/core';

import { AppRoutingModule } from 'app/shell/modules/app-routing.module';
import { MajesticSharedModule} from 'app/shared/modules/majestic-shared.module';

import { AppComponent } from 'app/shell/components/app/app.component';
import { AuthCallbackComponent } from 'app/shell/Components/callback/auth-callback.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WebSocketService } from 'angular2-websocket-service';


@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MajesticSharedModule,
  ],
  exports: [
  ],
  providers: [
    WebSocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }