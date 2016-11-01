import { Injectable } from '@angular/core';
import { PROJECTS } from '../model/mock-projects';
import { Project,Session} from '../model/project';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Alpha } from '../model/project-kernel';


let projectsPromise = Promise.resolve(PROJECTS);
@Injectable()
export class ProjectService {
    project : Project;
    getProjects() {
        return projectsPromise;
    }
    add(project: Session) {
        for (let a of ALPHAS) {
            let dim = new Alpha(a,false);
            
        }
        PROJECTS.push(project);
    }
    getProject(id: number | string) {
        return projectsPromise
            .then(projects => projects.find(project => project.id === +id));

    }
    addAllDimensions(project: Project) {
       /* if (project.currentKernel.dimensions.length === 0) {
            for (let a of ALPHAS) {
                project.addDimension(new Dimension(a));
            }
        }*/
    }
    addSession(project: Project){
        let num = project.sessions.length+1;
        project.addSession(new Session(1,num,new Date()));
    }
    delete(project: Session){


    }
    update(project: Session){

    }

}