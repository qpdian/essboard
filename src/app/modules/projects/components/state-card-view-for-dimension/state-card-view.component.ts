

import { Component, Input } from '@angular/core';
import { StateMetadata,CheckpointMetadata } from '../../../../shared/models/kernel/kernel';

@Component({
  selector: 'state-card-view',
  templateUrl: 'state-card-view.component.html',
  styleUrls: ['state-card-view.component.css']
})
export class StateCardView {
  @Input()
  state: StateMetadata;
  @Input()
  classCSS: string;


 
}