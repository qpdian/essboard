import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { StateMetadata, CheckpointMetadata } from '../../../../../shared/models/kernel/kernel';
import { Alpha, State, Checkpoint } from '../../../../../shared/models/project-kernel';

@Component({
  selector: 'checklist',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css']
})
export class Checklist {
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


