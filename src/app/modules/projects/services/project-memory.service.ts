import { Injectable } from '@angular/core';
import { PROJECTS } from '../model/mock-projects';
import { Session,Session} from '../model/project';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Dimension } from '../model/project-kernel';


let projectsPromise = Promise.resolve(PROJECTS);
@Injectable()
export class ProjectService {
    project : Session;
    getProjects() {
        return projectsPromise;
    }
    add(project: Session) {
        for (let a of ALPHAS) {
            let dim = new Dimension(a);
            project.addDimension(dim);
        }
        this.addAllDimensions(project);
        PROJECTS.push(project);
    }
    getProject(id: number | string) {
        return projectsPromise
            .then(projects => projects.find(project => project.id === +id));

    }
    addAllDimensions(project: Session) {
        if (project.dimensions.length === 0) {
            for (let a of ALPHAS) {
                project.addDimension(new Dimension(a));
            }
        }
    }
    addSession(project: Session){
        let num = project.sessions.length+1;
        project.addSession(new Session(num,new Date()));
    }
    delete(project: Session){


    }
    update(project: Session){

    }

}