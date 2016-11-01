import { Injectable } from '@angular/core';
import { Session } from '../model/project';
import { Observable } from 'rxjs';

export abstract class SessionService {
    items: Observable<any>;
    currentSession: Observable<any>;
    abstract getSessions() ;
    abstract getSession(id: number | string);
    abstract deleteSe();
    abstract setCheckpointTo(id,dimensionId,stateId,checkpointId,condition);
    abstract setStateAsWorking(id,dimensionConcept,stateName);
}