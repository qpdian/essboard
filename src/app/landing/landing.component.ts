import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor(public service: AuthService) {}
  ngOnInit() {
  }
  isLoggin() {
    return !!this.service.user;
  }
  logout(){
    this.service.logout();
  }

}
