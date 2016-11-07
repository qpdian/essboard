import { NgModule}       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule  }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AvatarLetterModule } from  '../../shared/modules/avatar-letter/index.module';

import { ListComponent }    from './components/list/list.component';
import { SearchComponent }    from './components/search/search.component';
import { UserDetailComponent }  from './components/detail/detail.component';
import { ProfileUserComponent } from './components/profile/index.component'; 
import { ProfileSettingsComponent } from './components/settings/index.component';
import { FormComponent }  from './components/form/form.component';

import { indexRouting } from './index.routing';
import { UserService } from './services/user.service';
import { UserSocketService } from './services/user-socket.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    indexRouting,
    MaterialModule,
    AvatarLetterModule
  ],
  declarations: [
    ListComponent,
    UserDetailComponent,
    FormComponent,
    SearchComponent,
    ProfileUserComponent,
    ProfileSettingsComponent
  ],
  providers: [
    { provide: UserService, useClass: UserSocketService } 
  ],
  exports:[
      ListComponent,UserDetailComponent,SearchComponent,ProfileUserComponent,
      ProfileSettingsComponent
  ]
})
export class UsersModule {}