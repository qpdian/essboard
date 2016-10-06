import { Component } from '@angular/core';
import { Project }    from '../../../model/project';
import { ProjectService } from '../../../services/project.service';
@Component({
    selector: 'project-form',
    templateUrl: 'project-form.component.html',
    styleUrls: ['form.component.css']
})
export class ProjectFormComponent {
    model = new Project("",'','',new Date());
    submitted = false;
    active = true;
    constructor(private projectService: ProjectService) { }

    onSubmit() {
        this.projectService.add(this.model);
        this.submitted = true;
        this.newProject();
    }
    newProject() {
        this.model = new Project("",'','',new Date());
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}