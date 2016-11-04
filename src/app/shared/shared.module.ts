import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

// TODO: every module has to import it's own form or reactive module
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { ValidationMessagesModule, ValidationMessagesLoader } from 'ng2-custom-validation';
import { messageLoaderFactory } from './messages/loader';
// TODO: refactor this, just header component use this, move to layouts
import { RouterModule } from '@angular/router'; 

import { HeaderComponent } from './components/header.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule.forRoot(),
      RouterModule,
      ValidationMessagesModule.forRoot({
            provide: ValidationMessagesLoader,
            useFactory: messageLoaderFactory
        }),
  ],
  exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      HeaderComponent,
      ValidationMessagesModule
  ],
  declarations: [
      HeaderComponent
  ]
})
export class SharedModule { }
