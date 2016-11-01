
import { Project } from '../model/project';
import { Observable } from 'rxjs';

export abstract class ProjectsService {
    items: Observable<any>;
    sharedMe: Observable<any>;
    currentProject: Observable<any>;
    abstract getProjects() ;
    abstract add(project: Project);
    abstract getProjectsSharedMe();
}