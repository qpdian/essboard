

import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Session } from '../../../shared/models/project';
import { Alpha, State, Checkpoint } from '../../../shared/modules/kernel/model/kernel';
import { SessionService } from '../services/session.service';
import { PrimaryKernelMockService } from '../../../shared/modules/kernel/services/index';
import { Subscription } from 'rxjs/Subscription';
import { AlphaMetadata, StateMetadata } from '../../../shared/models/kernel/kernel';


@Component({
  selector: 'session',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
})
export class SessionComponent implements OnInit, OnChanges {
  @Input()
  idSession: string;
  session: Session;
  alphaSelect: AlphaMetadata;
  isJoinedToChat: boolean = false;

  statesSelecteds: StateMetadata[];
  workItems: any[] = [];


  private subscription: Subscription;
  constructor(
    private service: SessionService,
    public kernel: PrimaryKernelMockService
  ) {
    this.alphaSelect = null;
    this.statesSelecteds = [];
  }
  ngOnInit() {
    this.subscription = this.service.currentSession.subscribe((session: Session) => {
      this.session = session;
    });
    this.service.getSession(this.idSession);
  }
  ngOnChanges() {
    this.subscription = this.service.currentSession.subscribe((session: Session) => {
      this.session = session;
    });
    this.service.getSession(this.idSession);
  }
  chooseAlpha(alpha: AlphaMetadata) {
    this.alphaSelect = alpha;
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
    if (!this.isJoinedToChat) {
      this.service.joinChat(this.idSession);
    }
    this.isJoinedToChat = true;
  }

}