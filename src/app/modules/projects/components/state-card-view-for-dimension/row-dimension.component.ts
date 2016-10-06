import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Dimension, State } from '../../model/project-kernel';
import { StateMetadata } from '../../../../shared/models/kernel/kernel';

@Component({
  selector: 'row-dimension',
  templateUrl: 'row-dimension.component.html',
  styleUrls: ['row-dimension.component.css']
})
export class RowDimensionComponent {
  _dimension: Dimension;
  @Input()
  isForSelected: boolean;
  @Output()
  onChooseStateGoal = new EventEmitter<StateMetadata>();

  selected: StateMetadata = null;

  @Input()
  set dimension(dimension: Dimension) {
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