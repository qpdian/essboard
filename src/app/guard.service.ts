import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (!!window.localStorage.getItem('user') && !!window.localStorage.getItem('feathers-jwt')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}