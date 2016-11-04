import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Kernel } from '../../model/kernel';
import { StateMetadata } from '../../../../models/kernel/kernel';

@Component({
  selector: 'state-board',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css']
})
export class StateBoard {
  @Input()
  kernel: Kernel;
  @Input()
  isForSelected: boolean;
  selecteds: StateMetadata[] = [];
  @Output() onChooseStatesGoal = new EventEmitter<StateMetadata[]>();
  
  getStatesGoal(state: StateMetadata) {
    if (!this.includes(this.selecteds, state)) {
      this.selecteds.push(state);
    }
    this.onChooseStatesGoal.emit(this.selecteds);
  }


  includes(array:any, search:any): boolean {
   return !!array.find(value => search == value);
  }
}
