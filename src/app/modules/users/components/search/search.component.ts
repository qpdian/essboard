
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'search-user',
    templateUrl: 'search.component.html',
    styleUrls: ['searchs.component.css']
})
export class SearchComponent implements OnInit {
    email : string = "";
    users : User[];

    private subscription: Subscription;
    
    constructor( private userService: UserService
    ) { }
    
    ngOnInit(): void {
        this.subscription = this.userService.usersOb.subscribe((users: User[]) => {
            this.users = users;
        });
       this.userService.search(this.email);
    }

    
   search(){
       this.userService.search(this.email);
       alert(this.users);
   }
}