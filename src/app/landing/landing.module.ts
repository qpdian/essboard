import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { SharedModule } from '../shared/shared.module';
import { landingRouting } from './landing.routes';

import { LandingComponent } from './landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './index';

@NgModule({
  imports: [
    DragulaModule,
    SimpleNotificationsModule,
    SharedModule,
    landingRouting,
  ],
  declarations: [LandingComponent,LoginComponent,SignupComponent]
})
export class LandingModule { }
