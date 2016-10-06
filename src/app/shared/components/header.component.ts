import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() isLoggin: boolean;
    @Output() onToggle = new EventEmitter<boolean>();
    init = false;
    toggle() {
        this.onToggle.emit(!this.init);
    }
}