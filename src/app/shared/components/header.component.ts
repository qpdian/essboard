import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'layout-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() onToggle = new EventEmitter<boolean>();
    init = false;
    
    constructor(private auth: AuthService, private router: Router) { }
    
    get isLoggedIn(): boolean {
        return this.auth.isLoggedIn;
    }
    
    toggle() {
        this.onToggle.emit(!this.init);
    }
    
    logout() {
        this.auth.logout().then(() => this.router.navigate(['/']));
    }
}