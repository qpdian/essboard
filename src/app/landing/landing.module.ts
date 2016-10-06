import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './index';
import { landingRouting } from './landing.routes';
import { MaterialModule } from '@angular/material';
import { FormsModule }    from '@angular/forms';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    MaterialModule.forRoot(),
    landingRouting,DragulaModule,
    SimpleNotificationsModule,
    ReactiveFormsModule
  ],
  declarations: [LandingComponent,LoginComponent,SignupComponent]
})
export class LandingModule { }
