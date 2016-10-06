import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { StateMetadata, CheckpointMetadata } from '../../../../shared/models/kernel/kernel';
import { Dimension, State } from '../../model/project-kernel';
@Component({
  selector: 'state-card',
  templateUrl: 'state-card.component.html',
  styleUrls: ['state-card.component.css']
})
export class StateCard {
  _state: StateMetadata;
  @Output() onChooseCheckpoints = new EventEmitter<any>();

  selectedCheckpoints: any[] = [];
  hiddenTable = true;

  @Input()
  set state(state: StateMetadata) {
    this._state = state;
    this.hiddenTable = true;
  }
  get state() {
    return this._state;
  }
  showTableCheckpoints() {
    this.selectedCheckpoints=[];
    for (let check of this._state.checkList) {
      this.selectedCheckpoints.push(
        { info: check, isAchaived: false }
      );
    }
    this.hiddenTable = false;
  }
  save() {
    this.onChooseCheckpoints.emit({
      checks: this.selectedCheckpoints,
      state: this._state
    });
  }
}


