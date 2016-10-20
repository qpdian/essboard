import { Injectable } from '@angular/core';
import { Session } from '../model/project';
import { Observable } from 'rxjs';

export abstract class SessionService {
    items: Observable<any>;
    currentSession: Observable<any>;
    abstract getSessions() ;
    abstract add(project);
    abstract getSession(id: number | string);
    abstract deleteSe();
    abstract update(session: Session);
    abstract patch(sessionId,dimensionId,stateId,checkpointId,condition);
}