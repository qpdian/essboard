
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
    _isEmpty : boolean;
    projects : Project[] = [];
    private subscription: Subscription;
    constructor(private router: Router, private projectService: ProjectService
    ) { }
    ngOnInit(): void {
        this.subscription = this.projectService.items.subscribe((items: Project[]) => {
            this.projects = items;
           // this.ref.markForCheck();
        });
      /*  this.projectService.getProjects().subscribe((items: Project[]) => {
            this.projects = items;
        });*/

        this.getProjects();
    }

    isEmpty(){
        console.log(this.projects.length );
        return this.projects.length == 0; 
    }
    onSelect(project: Project): void {
        this.router.navigate(['/user/projects', project.id]);
    }
    getProjects(): void {
        // this.projectService.getProjects().then(projects => this.projects = projects);
        this.projectService.getProjects();
    }
    showForm(): void {
        this.hideForm = !this.hideForm;
    }

}
