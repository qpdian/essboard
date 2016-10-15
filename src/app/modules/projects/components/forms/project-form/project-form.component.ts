import { Component,Output,EventEmitter } from '@angular/core';
import { Project }    from '../../../model/project';
import { ProjectsService } from '../../../services/projects.service';
@Component({
    selector: 'project-form',
    templateUrl: 'project-form.component.html',
    styleUrls: ['form.component.css']
})
export class ProjectFormComponent {
    @Output() onCloseForm = new EventEmitter<boolean>();
    model = new Project("",'','',new Date());
    submitted = false;
    active = true;
    constructor(private projectService: ProjectsService) { }

    onSubmit() {
        this.projectService.add(this.model);
        this.submitted = true;
        this.newProject();
        this.onCloseForm.emit(false);
    }
    newProject() {
        this.model = new Project("",'','',new Date());
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}