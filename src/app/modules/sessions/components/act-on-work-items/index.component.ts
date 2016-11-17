import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../auth.service';
@Component({
  selector: 'act-on-work-items',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css']
})
export class ActOnWorkItems {
  _workItems: any[] = [];
  @Output() onWorkItems = new EventEmitter<any>();
  @Input()
  set workItems(workItems: any) {
    this._workItems = workItems;
  }
  apiKey: string;
  isConectionInit: boolean = false;
  constructor(private auth: AuthService, ) {

  }

  get workItems() {
    return this._workItems;
  }
  initConectTrello() {
    this.apiKey = this.auth.user.appKeyTrello;
    this.isConectionInit = true;
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


