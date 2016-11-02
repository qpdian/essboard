import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticesComponent } from './practices.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';//ayudame aqui no esoty poniendo bien la ruta
import { RelationshipSpaceAlpha } from './components/relationshipAlphaSpace/relationship-space-alpha-for-area';

@NgModule({
  imports: [
    CommonModule,ChartsModule
  ],
  declarations: [PracticesComponent,RelationshipSpaceAlpha]
})
export class PracticesModule { }
