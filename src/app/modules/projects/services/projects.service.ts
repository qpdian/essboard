import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Dimension } from '../model/project-kernel';
import { Observable } from 'rxjs';

export abstract class ProjectsService {
    items: Observable<any>;
    sharedMe: Observable<any>;
    currentProject: Observable<any>;
    abstract getProjects() ;
    abstract add(project: Project);
    abstract getProject(id: string);
    abstract getProjectsSharedMe();
}