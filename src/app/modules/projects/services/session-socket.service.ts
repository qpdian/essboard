import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session,Project } from '../model/project';
import { Observable } from 'rxjs';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Dimension } from '../model/project-kernel';
import { SessionService } from './session.service';
import { SocketService } from '../../../shared/services/socket-io';

@Injectable()
export class SessionSocketService extends SessionService {
    currentSession: Observable<any>;
    items: Observable<any>;
    sessionsObserver: any;
    sessionObserver: any;
    session: Session;
    sessions: Session[];
    _app: any;
    service: any;

    constructor(public socketService: SocketService, private router: Router) {
        super();
        this._app = this.socketService.init();
        this.service = this._app.service('sessions');
        this.service.on('created', (newItem) => this.onCreated(newItem));
        this.service.on('updated', (updatedItem) => this.onUpdated(updatedItem));
        this.service.on('removed', (removedItem) => this.onRemoved(removedItem));

        this.items = new Observable(observer => this.sessionsObserver = observer).share();
        this.currentSession = new Observable(observer => this.sessionObserver = observer).share();

        this.session = null;
        this.sessions = [];
    }

    getSessions() {
        this._app.authenticate().then(data => {
            this.service.find({
                  
            }, (err, items: any) => {
                if (err) return console.error(err);
               // this.sessions = items.data.map((x) => new Session(x.nroOrder, x.createdAt));
                this.sessionsObserver.next(this.sessions);
            })
        });

    }
    add(project:Project) {
        console.log('sesions save');
        this._app.authenticate().then(data => {
            console.log(project);
            const backId = project.getLastSessionId();
            console.log(backId);
            this.service.create({
                _project: project.id,
                idLastSession : backId,
                nroOrder: project.sessions.length + 1,
            })
                .then((result) => {
                   // project.addSession(new );
                    return project;
                })
                .catch(function (error) {
                    console.error('Error saving!', error);
                    alert("Error al crear tu proyecto");
                })
        });
    }

    getSession(id: number | string) {
        this.service.get(id,
            (err, item: any) => {
                if (err) return console.error(err);
                //let p = new Session(item.nroOrder,item.cretedAt);
                //FIX 
                //p.addSession(new Session(1, new Date()));
                //this.session = p;
                //
                this.sessionObserver.next(this.session);
                console.log("item of server ", item);
            });
    }
    deleteSe() {
        const id = this.session.id;
       // this.sessions.splice(id, 1);
        this.sessionsObserver.next(this.sessions);
        this.service.remove(id)
            .then((result) => {
                this.router.navigate(['user/projects']);
            })
            .catch(function (error) {
                alert("Error al eliminar  tu proyecto");
            });
    }
    update(session: Session) {
        const id = this.session.id;
        this.sessionObserver.next(this.session);
        this.service.patch(id, { percent: session.percent })
            .then((result) => {
                alert('Proyecto editado');
            })
            .catch(function (error) {
                console.log(error, "Error al editar  tu proyecto");
            });
    }
    private getIndex(id: string): number {
        let foundIndex = -1;
        for (let i = 0; i < this.sessions.length; i++) {
            if (this.sessions[i].id === id) {
                foundIndex = i;
            }
        }
        return foundIndex;
    }
    private onCreated(newItem: any) {
        console.log('Someone created a message', newItem);
        //TODO: add notifications 
        alert('Nuevo proyecto');
       // this.sessions.unshift(new Session(newItem.nroOrder,newItem.cretedAt));
       // this.sessionsObserver.next(this.sessions);
    }

    private onUpdated(updatedItem: any) {
        const index = this.getIndex(updatedItem.id);
        this.sessions[index].percent = updatedItem.percent;
        this.sessionsObserver.next(this.sessions);
        this.sessionObserver.next(this.sessions[index]);
    }

    private onRemoved(removedItem) {
        // const index = this.getIndex(removedItem.id);

        //this.dataStore.checks.splice(index, 1);

        //this.itemsObserver.next(this.data);
    }
    addAllDimensions(project: Session) {

    }


}