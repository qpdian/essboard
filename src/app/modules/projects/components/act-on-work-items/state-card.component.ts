import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { StateMetadata, CheckpointMetadata } from '../../../../shared/models/kernel/kernel';
import { Dimension, State } from '../../model/project-kernel';
@Component({
  selector: 'act-on-work-items',
  templateUrl: 'state-card.component.html',
  styleUrls: ['state-card.component.css']
})
export class ActOnWorkItems {
  @Output() onWorkItems = new EventEmitter<any>();
  _workItems : any[] = [];

  @Input()
  set workItems(workItems: any) {
    this._workItems = workItems;
  }
  get workItems() {
    return this._workItems;
  }
  /*
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
  }*/
}


