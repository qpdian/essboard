import { Injectable } from '@angular/core';
import { Session } from '../model/project';
import { Observable } from 'rxjs';

export abstract class SessionService {
    items: Observable<any>;
    currentSession: Observable<any>;
    abstract getSessions() ;
    abstract add(idProject);
    abstract getSession(id: number | string);
    abstract delete();
    abstract update(session: Session);
}