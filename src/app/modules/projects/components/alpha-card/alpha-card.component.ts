
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
  stateSelect: StateMetadata = null;
  @Output() onChooseState = new EventEmitter<StateMetadata>();
  select(state: StateMetadata) {
    // if(this.stateSelect === null)
    this.stateSelect = state;
    this.onChooseState.emit(state);
  }
  isSelected(state: StateMetadata) {
    return state === this.stateSelect;
  }
}