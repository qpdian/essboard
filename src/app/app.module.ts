import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { SocketService } from './shared/services/socket-io';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { EssboardFrontedRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EssboardFrontedRoutingModule,
    LandingModule,
    MaterialModule.forRoot()
  ],
  providers: [ AuthService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
