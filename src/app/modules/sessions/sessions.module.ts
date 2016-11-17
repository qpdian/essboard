import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';

import { KernelModule } from '../../shared/modules/kernel/kernel.module';
import { UsersModule } from '../users/index.module';
import { AvatarLetterModule } from '../../shared/modules/avatar-letter/index.module';
import { SessionComponent } from './components/index.component';

/* steps for use essence in each session*/
import { HowReachGoals } from './components/how-reach-goals/index.component';
import { ActOnWorkItems } from './components/act-on-work-items/index.component';
import { SetCurrentStateComponent } from './components/setCurrentState/index.component';
import { Checklist } from './components/setCurrentState/checklist/index.component';
import { DialogComponent } from './components/chatInSession/index.component';
import { TrelloComponent } from './components/act-on-work-items/migrateToTrello/index.component';
import { SessionService } from './services/session.service';
import { SessionSocketService } from './services/session-socket.service';
import { DialogService } from './services/dialog.service';
import { DialogSocketService } from './services/dialog-socket.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersModule,
    KernelModule,
    MaterialModule,
    DragulaModule,
    AvatarLetterModule
  ],
  declarations: [
    SetCurrentStateComponent,
    Checklist,
    SessionComponent,
    HowReachGoals,
    ActOnWorkItems,
    DialogComponent,
    TrelloComponent
  ],
  entryComponents: [],
  providers: [
    { provide: SessionService, useClass: SessionSocketService },
    { provide: DialogService, useClass: DialogSocketService }
  ],
  exports: [
    SetCurrentStateComponent,
    SessionComponent,
    HowReachGoals,
    ActOnWorkItems,
    DialogComponent,
    TrelloComponent
  ]
})
export class SessionsModule { }