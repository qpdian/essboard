import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Alpha } from '../model/project-kernel';
import { Observable } from 'rxjs';

export abstract class ProjectService {
    currentProject: Observable<any>;
    abstract setName (name : string);
    abstract setDescription(description :string);
    abstract getProject(id: string);
    abstract addSession();
    abstract delete();
    abstract inviteTo(project,user);
    abstract desinviteTo( user);
}