import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { StateMetadata, CheckpointMetadata } from '../../../../shared/models/kernel/kernel';
import { Alpha, State } from '../../model/project-kernel';

@Component({
  selector: 'state-card',
  templateUrl: 'state-card.component.html',
  styleUrls: ['state-card.component.css']
})
export class StateCard {
  _state: State;
  @Output() onChooseCheckpoint = new EventEmitter<any>();

  @Input()
  set state(state: State) {
    this._state = state;
  }
  get state() {
    return this._state;
  }
  check(checkpoint) {
    checkpoint.isAchaived = !checkpoint.isAchaived;
    this.onChooseCheckpoint.emit(checkpoint);
  }
  public options: any = {
    size: 20,
    fontColor: '#FFFFFF',
    border: "1px solid #d3d3d3",
    isSquare: true,
  };
}


