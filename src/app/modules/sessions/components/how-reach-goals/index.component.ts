import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { StateMetadata, CheckpointMetadata } from '../../../../shared/models/kernel/kernel';
import { Alpha, State, Checkpoint } from '../../../../shared/modules/kernel/model/kernel';
@Component({
  selector: 'how-reach-goals',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css']
})
export class HowReachGoals {
  _state: StateMetadata;
  @Output() onWorkItems = new EventEmitter<any>();

  workItems : any[] = [];

  @Input()
  set state(state: StateMetadata) {
    this._state = state;
  }
  get state() {
    return this._state;
  }
  save(description) {
     let index = this.workItems.indexOf(description);
     this.workItems[index] = description;
  }
  add(){
    this.workItems.push({description:'',id:1});
  }
  delete(workItem){
     let index = this.workItems.indexOf(workItem);
     this.workItems.splice(index);
  }
  send(){
    this.onWorkItems.emit(this.workItems);
  }
}


