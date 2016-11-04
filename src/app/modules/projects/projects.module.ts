import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs' ;
import { DragulaModule,DragulaService } from 'ng2-dragula/ng2-dragula';

import { KernelModule } from '../../shared/modules/kernel/kernel.module';
import { UsersModule } from '../users/index.module';

import { ProjectListComponent }    from './components/project-list/project-list.component';
import { ProjectDetailComponent }  from './components/project-detail/project-detail.component';
import { SessionComponent }  from './components/session/session.component';
import { ProjectCardComponent }  from './components/project-list/project-card/project-card.component';

/* forms*/
import { ProjectFormComponent }  from './components/forms/project-form/project-form.component';
import { SharedFormComponent }  from './components/forms/shared-form/shared-form.component';

/* steps for use essence*/
import { StateCard } from './components/state-card/state-card.component';
import { HowReachGoals } from './components/how-reach-goals/state-card.component';
import { ActOnWorkItems } from './components/act-on-work-items/state-card.component';
import { SetCurrentStateComponent } from './components/steps/set-current-state.component';

import { AvatarLetterComponent }  from  '../../shared/components/avatar-letter/index.component';

import { ProjectService } from './services/project.service';
import { ProjectSocketService } from './services/project-socket.service';

import { ProjectsService } from './services/projects.service';
import { ProjectsSocketService } from './services/projects-socket.service';

import { SessionService } from './services/session.service';
import { SessionSocketService } from './services/session-socket.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersModule,
    KernelModule,
    MaterialModule,
    DragulaModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
    SharedFormComponent,
    SetCurrentStateComponent,
    SessionComponent,
    StateCard,
    HowReachGoals,
    ActOnWorkItems,
    AvatarLetterComponent
  ],
  providers: [
    { provide: ProjectService, useClass: ProjectSocketService } ,
    { provide: ProjectsService, useClass: ProjectsSocketService } ,
    { provide: SessionService, useClass: SessionSocketService }
  ],
  exports: [
    ProjectListComponent,
    ProjectDetailComponent
  ]
})
export class ProjectsModule {}