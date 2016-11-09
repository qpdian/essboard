import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'layout-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private auth: AuthService, private router: Router) { }

    get isLoggedIn(): boolean {
        return this.auth.isLoggedIn;
    }

    get user() {
        return this.auth.user;
    }

    logout() {
        this.auth.logout().then(() => this.router.navigate(['/']));
    }
}
