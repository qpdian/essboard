
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { GuardService } from '../../guard.service';
import { LayoutComponent, DeveloperComponent } from './index';

export const DeveloperRoutes: Route[] = [
  {
    path: 'user',
    component: LayoutComponent,
    canActivate: [GuardService],
    children: [
      { path: '', component: DeveloperComponent }
    ]
  }];

export const developerRouting: ModuleWithProviders = RouterModule.forChild(DeveloperRoutes);




