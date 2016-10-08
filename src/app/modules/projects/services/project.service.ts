import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Dimension } from '../model/project-kernel';
import { Observable } from 'rxjs';

export abstract class ProjectService {
    items: Observable<any>;
    currentProject: Observable<any>;
    abstract getProjects() ;
    abstract add(project: Project);
    abstract getProject(id: number | string);
    abstract addAllDimensions(project: Project);
    abstract addSession();
    abstract delete();
    abstract update(project: Project);
    abstract join();
}