

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Project, Session, Kernel } from '../../model/project';
import { Dimension, State } from '../../model/project-kernel';
import { ProjectService } from '../../services/project.service';
import { Subscription } from 'rxjs/Subscription';
import { AlphaMetadata, StateMetadata } from '../../../../shared/models/kernel/kernel';

@Component({
  selector: 'my-project-detail',
  templateUrl: 'project-detail.component.html',
  styleUrls: ['detail.component.css'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project: Project;
  showShare: boolean = false;
  selectedSession: Session;
  hiddenNetStates = false;
  hiddenSession = true;

  private sub: Subscription;
  private subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService) {
  }
  ngOnInit() {
    this.subscription = this.service.currentProject.subscribe((item: Project) => {
      this.project = item;
    });
    this.sub = this.route.params.subscribe(params => {
      let id = this.route.snapshot.params['id'];
      this.service.getProject(id);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addSession() {
    if (this.project.canCreateNewSession()) {
      this.service.addSession();
    } else {
      alert('Aun no ha terminado la ultima sesion')
    }
  }
  share() {
    this.showShare = true;
  }
  closeSharedForm(hide) {
    this.showShare = hide;
  }
  //add confirmation esperar modal
  delete() {
    this.service.delete();
  }
  setName(name: string) {
    if (name) {
      this.service.setName(name);
    }
  }
  setDescription(description: string) {
    if (description) {
      this.service.setDescription(description);
    }
  }


  showNetStates() {
    this.hiddenSession = true;
    this.hiddenNetStates = false;

  }
  showSessionDetail(session: Session) {
    this.hiddenNetStates = true;
    this.hiddenSession = false;
    this.selectedSession = session;
  }
  saveAsCurrent(session: Session) {
    this.project.currentKernel = session.kernel;
  }

}