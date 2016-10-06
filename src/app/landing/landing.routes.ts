
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from './index';
import { SignupComponent } from './index';
import { LandingComponent } from './index';
export const LandingRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'signup',
    component: SignupComponent
  }
];

export const landingRouting: ModuleWithProviders = RouterModule.forChild(LandingRoutes);




