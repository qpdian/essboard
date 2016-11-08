import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { PRACTICES } from '../../../../shared/models/kernel/mock-practices/mock';
@Component({
  selector: 'practice-catalog',
  templateUrl: 'index.html',
  styleUrls: ['index.scss']
})
export class PracticesCatalog implements OnInit, OnChanges {
  @Input()
  spaceActivity: any;
  @Input()
  state: any;
  practices: any[] = [];
  activities: any[] = [];
  constructor() { }
  getPractices(spaceActivity) {
   // this.practices = this.practicesBySpaceActivity(spaceActivity);
  }
  practicesBySpaceActivity(spaceActivity){
   /* return PRACTICES.map(
      practice => practice.activities.map(
        (activity,practice) => activity.achaiveds.map(
          (achaived,practice) =>{ if(achaived.spaceActivity === spaceActivity) {return practice};}
    )));*/
  }
  ngOnInit() {
    this.getPractices(this.spaceActivity);

  }
  ngOnChanges() {
    this.getPractices(this.spaceActivity);
  }

}
