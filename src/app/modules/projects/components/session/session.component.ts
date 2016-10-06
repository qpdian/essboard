

import { Component, OnInit, OnChanges,OnDestroy, Input,Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Project, Session } from '../../model/project';
import { Dimension, State } from '../../model/project-kernel';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs/Subscription';
import { AlphaMetadata, StateMetadata } from '../../../../shared/models/kernel/kernel';

@Component({
  selector: 'session',
  templateUrl: 'session.component.html',
  styleUrls: ['session.component.css'],
})
export class SessionComponent implements OnInit, OnDestroy {
  @Input()
  session: Session;
  @Output() sessionAsCurrent = new EventEmitter<Session>();


  dimensionSelect: Dimension;
  selectedState: StateMetadata;
  statesSelecteds : StateMetadata[];
  workItems : any[] = [];


  private sub: Subscription;
  private subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService) {
    this.dimensionSelect = null;
    this.selectedState = null;
    this.statesSelecteds = [];
  }
  ngOnInit() {

  }
  ngOnDestroy() {

  }
  ngOnChange(){

  }

  chooseDimension(dimension: Dimension) {
    this.dimensionSelect = dimension;
    this.selectedState = null;
  }
  onSelectedState(state: StateMetadata) {
    this.session.isTouched = true;
    if (this.dimensionSelect.isTouched == false) {
      this.dimensionSelect.isTouched = true;
    }
   
    this.selectedState = state;
    this.dimensionSelect.setCurrentState(state);
    console.log(this.session.kernel.dimensions);
  }
  onSelectedCheckpoints(data){
    let state = this.dimensionSelect.find(data.state);
    state.checklist = data.checks;
    console.log(this.session.kernel.dimensions);
  }

  
  getStatesGoal(states : StateMetadata[]){
    this.statesSelecteds = states;
    console.log('states selected for this sesion',states);
  }
  getWorkItems(workItems){
    this.workItems = workItems;
  }
  saveSession(){
    this.sessionAsCurrent.emit(this.session);
  }
  delete(){
    
  }
}