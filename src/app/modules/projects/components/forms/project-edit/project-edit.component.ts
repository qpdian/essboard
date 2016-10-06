import { Component } from '@angular/core';
import { Session }    from '../../../model/project';
import { ProjectService } from '../../../services/project.service';
@Component({
    selector: 'project-form',
    templateUrl: 'project-form.component.html'
})
export class ProjectFormComponent {
    model = new Session(1,'','',new Date());
    submitted = false;
    active = true;
    constructor(private projectService: ProjectService) { }

    onSubmit() {
        this.projectService.add(this.model);
        this.submitted = true;
        this.newProject();
    }
    newProject() {
        this.model = new Session(1,'','',new Date());
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}