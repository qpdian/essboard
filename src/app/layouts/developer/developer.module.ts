import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent,DeveloperComponent } from './index';
import { MaterialModule } from '@angular/material';
import { HeaderComponent } from '../../shared/components/header.component';
import { developerRouting } from './developer.routes';
import { ProjectsModule } from '../../modules/projects/projects.module';
import { PracticesModule } from '../../modules/practices/index.module';
import { UsersModule } from '../../modules/users/index.module';
@NgModule({
  imports: [
    CommonModule,MaterialModule.forRoot(),ProjectsModule,developerRouting,UsersModule,PracticesModule
  ],
  declarations: [LayoutComponent,DeveloperComponent,HeaderComponent]
})
export class DeveloperModule { }
