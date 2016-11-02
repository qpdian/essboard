import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AuthGuardService } from '../../auth-guard.service';
import { LayoutComponent, DeveloperComponent } from './index';
import { ProjectListComponent, ProjectDetailComponent } from '../../modules/projects/index';
import { PracticesComponent } from '../../modules/practices/index';

export const DeveloperRoutes: Route[] = [
  {
    path: 'me',
    component: LayoutComponent,
    canActivate: [ AuthGuardService ],
    children: [
      { path: '', component: DeveloperComponent },
      { path: 'projects', component: ProjectListComponent },
      { path: 'projects/:id', component: ProjectDetailComponent },
      { path: 'practices', component: PracticesComponent },
    ]
  }];

export const developerRouting: ModuleWithProviders = RouterModule.forChild(DeveloperRoutes);




