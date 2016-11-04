import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { StateCardView } from './components/state-card-view/index';
import { AlphaCard } from './components/alpha-card/index';
import { RowAlphaStates } from './components/row-alpha-states/index';
import {
  KernelViewHolistic,
  AlphaConnections
} from './components/kernel-views/index';
import { StateBoard } from './components/state-board/index';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    StateCardView,
    AlphaCard,
    RowAlphaStates,
    KernelViewHolistic,
    AlphaConnections,
    StateBoard
  ],
  exports: [
    StateCardView,
    AlphaCard,
    RowAlphaStates,
    KernelViewHolistic,
    AlphaConnections,
    StateBoard
  ]
})
export class KernelModule { }
