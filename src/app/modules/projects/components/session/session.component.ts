

import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Project, Session } from '../../model/project';
import { Alpha, State } from '../../model/project-kernel';
import { SessionService } from '../../services/session.service';
import { DialogService } from '../../services/dialog.service';
import { Subscription } from 'rxjs/Subscription';
import { AlphaMetadata, StateMetadata } from '../../../../shared/models/kernel/kernel';

@Component({
  selector: 'session',
  templateUrl: 'session.component.html',
  styleUrls: ['session.component.css'],
})
export class SessionComponent implements OnInit, OnDestroy {
  @Input()
  idSession: string;

  dimensionSelect: Alpha;
  selectedState: StateMetadata;
  statesSelecteds: StateMetadata[];
  workItems: any[] = [];
  session: Session;
  comments: any[];
  isJoined: boolean = false;
  private sub: Subscription;
  private subscription: Subscription;
  constructor(
    private service: SessionService
  ) {
    this.dimensionSelect = null;
    this.statesSelecteds = [];
  }
  ngOnInit() {
    this.subscription = this.service.currentSession.subscribe((session: Session) => {
      this.session = session;
    });
    this.service.getSession(this.idSession);
  }
  ngOnDestroy() {

  }
  ngOnChange() {

  }

  chooseDimension(dimension: Alpha) {
    this.dimensionSelect = dimension;
    console.log(dimension);
  }
  refreshDimensionSelected(event) {
    this.dimensionSelect = this.session.kernel.dimensions.find(dim => dim === this.dimensionSelect);
    console.log(this.dimensionSelect);
  }

  getStatesGoal(states: StateMetadata[]) {
    this.statesSelecteds = states;
  }
  getWorkItems(workItems) {
    this.workItems = workItems;
  }

  delete() {

  }
  joinChat() {
    if (!this.isJoined) {
      this.service.joinChat(this.idSession);
    }
    this.isJoined = true;
  }

}