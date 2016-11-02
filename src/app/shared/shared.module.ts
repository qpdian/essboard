import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

// TODO: refactor this, just header component use this, move to layouts
import { RouterModule } from '@angular/router'; 

import { HeaderComponent } from './components/header.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule.forRoot(),
      RouterModule
  ],
  exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      HeaderComponent
  ],
  declarations: [
      HeaderComponent
  ]
})
export class SharedModule { }
