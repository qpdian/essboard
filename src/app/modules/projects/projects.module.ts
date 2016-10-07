import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { DragulaModule,DragulaService } from 'ng2-dragula/ng2-dragula';

import { ProjectListComponent }    from './components/project-list/project-list.component';
import { ProjectDetailComponent }  from './components/project-detail/project-detail.component';
/* forms*/
import { ProjectFormComponent }  from './components/forms/project-form/project-form.component';
/*views */
import { ProjectViewHolistic } from './components/views-project-kernel/project-view-holistic/project-view-holistic.component';
import { AlphaConectionsComponent } from './components/views-project-kernel/alpha-conections/alpha-conections.component';
/* kernel*/
import { StateCard } from './components/state-card/state-card.component';
import { HowReachGoals } from './components/how-reach-goals/state-card.component';
import { ActOnWorkItems } from './components/act-on-work-items/state-card.component';
 
import { AlphaCard } from './components/alpha-card/alpha-card.component';
import { SessionComponent }  from './components/session/session.component';


import { StateBoardComponent } from  './components/state-board/state-board.component';
import { StateCardView } from './components/state-card-view-for-dimension/state-card-view.component';
import { RowDimensionComponent } from './components/state-card-view-for-dimension/row-dimension.component';

import { ProjectService } from './services/project.service';
import { ProjectSocketService } from './services/project-socket.service';
import { SessionService } from './services/session.service';
import { SessionSocketService } from './services/session-socket.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,DragulaModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFormComponent,SessionComponent,ProjectViewHolistic,
    StateCard,AlphaCard,AlphaConectionsComponent,HowReachGoals,ActOnWorkItems,
    StateCardView,StateBoardComponent,RowDimensionComponent
  ],
  providers: [
    { provide: ProjectService, useClass: ProjectSocketService } ,
    { provide: SessionService, useClass: SessionSocketService }
  ],
  exports: [ProjectListComponent,ProjectDetailComponent,AlphaConectionsComponent]
})
export class ProjectsModule {}