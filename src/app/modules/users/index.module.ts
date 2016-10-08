import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ListComponent }    from './components/list/list.component';
import { SearchComponent }    from './components/search/search.component';
import { UserDetailComponent }  from './components/detail/detail.component';
import { FormComponent }  from './components/form/form.component';

import { indexRouting } from './index.routing';
import { UserService } from './services/user.service';
import { UserSocketService } from './services/user-socket.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    indexRouting,
    MaterialModule
  ],
  declarations: [
    ListComponent,
    UserDetailComponent,
    FormComponent,
    SearchComponent
  ],
  providers: [
    { provide: UserService, useClass: UserSocketService } 
  ],
  exports:[
      ListComponent,UserDetailComponent,SearchComponent
  ]
})
export class UsersModule {}