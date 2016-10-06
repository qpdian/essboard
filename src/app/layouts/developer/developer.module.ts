import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent,DeveloperComponent } from './index';
import { MaterialModule } from '@angular/material';
import { HeaderComponent } from '../../shared/components/header.component';
import { developerRouting } from './developer.routes';
@NgModule({
  imports: [
    CommonModule,MaterialModule.forRoot(),developerRouting
  ],
  declarations: [LayoutComponent,DeveloperComponent,HeaderComponent]
})
export class DeveloperModule { }
