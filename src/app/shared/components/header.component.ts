import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(public service: AuthService) { }

    @Input() isLoggin: boolean;
    @Output() onToggle = new EventEmitter<boolean>();
    init = false;
    toggle() {
        this.onToggle.emit(!this.init);
    }
    logout() {
        this.service.logout();
    }
}