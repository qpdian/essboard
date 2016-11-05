import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ValidationMessagesModule, ValidationMessagesLoader } from 'ng2-custom-validation';
import { messageLoaderFactory } from './shared/messages/validation';

import { LandingModule } from './layouts/landing/landing.module';
import { DeveloperModule } from './layouts/developer/developer.module';

import { EssboardFrontedRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { SocketService } from './shared/services/socket-io';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    SimpleNotificationsModule,
    ValidationMessagesModule.forRoot({
      provide: ValidationMessagesLoader,
      useFactory: messageLoaderFactory
    }),
    EssboardFrontedRoutingModule,
    LandingModule,
    DeveloperModule
  ],
  providers: [AuthService, AuthGuardService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
