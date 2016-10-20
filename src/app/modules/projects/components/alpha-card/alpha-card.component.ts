
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { State, Dimension } from '../../model/project-kernel';
import { AlphaMetadata, StateMetadata } from '../../../../shared/models/kernel/kernel';


@Component({
  selector: 'alpha-card',
  templateUrl: 'alpha-card.component.html',
  styleUrls: ['alpha-card.component.css']
})
export class AlphaCard {
  @Input()
  dimension: Dimension;
  @Input()
  currentState: State;
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