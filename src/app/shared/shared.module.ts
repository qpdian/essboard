import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ValidationMessagesModule } from 'ng2-custom-validation';

// TODO: every module has to import it's own form or reactive module
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  imports: [
      CommonModule,

      FormsModule,
      ReactiveFormsModule
  ],
  exports: [
      CommonModule,
      MaterialModule,
      ValidationMessagesModule,


      FormsModule,
      ReactiveFormsModule
  ]
})
export class SharedModule { }
