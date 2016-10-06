

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Project, Session,Kernel } from '../../model/project';
import { Dimension, State  } from '../../model/project-kernel';
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
      let id = +this.route.snapshot.params['id'];
      this.service.getProject(id);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addSession() {
    if( !this.project.getLastSession().isComplete){
      this.service.addSession();
    }
    alert('Aun no has concluido con la sesion anterior');
  }



  //add confirmation esperar modal
  delete() {
    this.service.delete();
  }
  edit(name: string, description: string) {
    if (description && name) {
      this.project.description = description;
      this.project.name = name;
      this.service.update(this.project);
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
  saveAsCurrent(session:Session){
    this.project.currentKernel = session.kernel;
  }
  join(){
    this.service.join();
  }

}