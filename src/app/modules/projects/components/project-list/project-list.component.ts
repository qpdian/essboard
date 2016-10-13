
import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'my-app',
    templateUrl: 'project-list.component.html',
    styleUrls: ['list.component.css']
})
export class ProjectListComponent implements OnInit {
    title = 'Mis proyectos';
    hideForm: boolean = true;
    hideFormShare: boolean = true;
    _isEmpty: boolean;
    projects: Project[] = [];
    sharedProjects: Project[] = [];
    private subscription: Subscription;
    constructor(private router: Router, private projectService: ProjectService
    ) { }
    ngOnInit(): void {
        this.subscription = this.projectService.items.subscribe((items: Project[]) => {
            this.projects = items;
            // this.ref.markForCheck();
        });
        this.subscription = this.projectService.sharedMe.subscribe((shareds: Project[]) => {
            this.sharedProjects = shareds;
        });
        this.projectService.getProjectsSharedMe();
        this.getProjects();
    }
    getProjects(): void {
        this.projectService.getProjects();
    }
    showForm(): void {
        this.hideForm = !this.hideForm;
    }
    getInviteds() {
        //this.projectService.getProjectsSharedMe();
    }

}
