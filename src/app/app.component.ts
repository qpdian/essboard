import { Component } from '@angular/core';
import { notificationOptions } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = notificationOptions;
}
