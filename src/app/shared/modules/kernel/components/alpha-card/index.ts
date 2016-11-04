import { Component, Input, EventEmitter, Output } from '@angular/core';
import { State, Alpha } from '../../model/kernel';

@Component({
  selector: 'alpha-card',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css']
})
export class AlphaCard {
  @Input()
  dimension: Alpha;
  stateSelect: State = null;
  @Output() onChooseState = new EventEmitter<State>();
  select(state: State) {
    this.stateSelect = state;
    this.onChooseState.emit(state);
  }
  isSelected(state: State) {
    return state === this.stateSelect;
  }
}
