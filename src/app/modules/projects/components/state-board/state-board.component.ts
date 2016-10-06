

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Session } from '../../model/project';
import { StateMetadata } from '../../../../shared/models/kernel/kernel';

@Component({
  selector: 'state-board',
  templateUrl: 'state-board.component.html',
  styleUrls: ['state-board.component.css']
})
export class StateBoardComponent {
  @Input()
  session: Session;
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
  show() {
    console.log('board', this.session.kernel);
  }

  includes(array:any, search:any): boolean {
   return !!array.find(value => search == value);

  }


}