import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Alpha, State } from '../../model/kernel';
import { StateMetadata } from '../../../../models/kernel/kernel';

@Component({
  selector: 'row-alpha-states',
  templateUrl: 'index.html',
  styleUrls: ['index.css']
})
export class RowAlphaStates {
  _dimension: Alpha;
  @Input()
  isForSelected: boolean;
  @Output()
  onChooseStateGoal = new EventEmitter<StateMetadata>();

  selected: StateMetadata = null;

  @Input()
  set dimension(dimension: Alpha) {
    this._dimension = dimension;
  }
  get dimension() {
    return this._dimension;
  }

  // nameRandomBag = 'bag'+ (Math.floor(Math.random() * 100) + 1 ) + 'a'+ (Math.floor(Math.random() * 100) + 1 );


  select(state) {
    this.selected = state;
    this.onChooseStateGoal.emit(this.selected);
    alert(state.name);
  }
  isPosibleToSelect(select: StateMetadata) {
    if (this.isForSelected) {
      return (select === this._dimension.lastFilled || select === this._dimension.firstByFilled);
    } else {
      return false;
    }

    // return false;
    //last of achaiveds
    //first of no achaiveds 
  }

}