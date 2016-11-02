import { Component, OnInit } from '@angular/core';
import { ACTIVITY_SPACES } from '../../shared/models/kernel/mock-activity-spaces/mock';
import { AREAS } from '../../shared/models/kernel/mock-kernel';
@Component({
  selector: 'practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {

  areas: any = [];
  constructor() { }

  ngOnInit() {
    this.activitySpaces = ACTIVITY_SPACES;
    this.areas = AREAS;
  }


}
