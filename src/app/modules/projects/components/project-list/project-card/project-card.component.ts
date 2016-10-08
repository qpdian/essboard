import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Project } from '../../../model/project';
import { Router } from '@angular/router';

@Component({
    selector: 'project-card',
    templateUrl: 'project-card.component.html'
})
export class ProjectCardComponent {
    @Input() project : Project;
    constructor(private router: Router) { }

    select(){
        this.router.navigate(['/user/projects', this.project.id]);
    }

}