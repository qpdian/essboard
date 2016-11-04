import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { LandingModule } from './layouts/landing/landing.module';
import { DeveloperModule } from './layouts/developer/developer.module';

import { EssboardFrontedRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { SocketService } from './shared/services/socket-io';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    EssboardFrontedRoutingModule,
    LandingModule,
    DeveloperModule
  ],
  providers: [ AuthService, AuthGuardService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
