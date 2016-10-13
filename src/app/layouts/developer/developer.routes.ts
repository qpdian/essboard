
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { GuardService } from '../../guard.service';
import { LayoutComponent, DeveloperComponent } from './index';
import { ProjectListComponent, ProjectDetailComponent } from '../../modules/projects/index';

export const DeveloperRoutes: Route[] = [
  {
    path: 'me',
    component: LayoutComponent,
    canActivate: [GuardService],
    children: [
      { path: '', component: DeveloperComponent },
      { path: 'projects', component: ProjectListComponent },
      { path: 'projects/:id', component: ProjectDetailComponent },
    ]
  }];

export const developerRouting: ModuleWithProviders = RouterModule.forChild(DeveloperRoutes);




