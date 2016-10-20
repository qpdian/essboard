import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session, Project } from '../model/project';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { SocketService } from '../../../shared/services/socket-io';
import { ToSession } from '../transforms/to-session';
import { Util } from '../model/util';

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
        this.service.on('patched', (patchedItem) => this.onPatched(patchedItem));
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
    add(project: Project) {
        console.log('sesions save');
        this._app.authenticate().then(data => {
            console.log(project);
            const backId = project.getLastSessionId();
            console.log(backId);
            this.service.create({
                _project: project.id,
                idLastSession: backId,
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

    getSession(id: string) {
        this.service.get(id,
            (err, item: any) => {
                if (err) return console.error(err);
                this.session = ToSession.transformComplete(item);
                Util.setSource(item.dimensions);
                this.sessionObserver.next(this.session);
                console.log("Sesion completa ", this.session);
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
    //update checkpoint
    patch(sessionId, dimensionId, stateName, checkpointId, condition) {
        let indexs = Util.getIndexs( dimensionId, stateName);
        let base = 'dimensions.' + indexs.dimension + '.states.' + indexs.state + '.checklist';
        let path = base + '.$.isAchaived';
        let search = base + '.concept';
        let params = {["query"]: {[search] : checkpointId } };
        let setData = { [path]: condition };
        this._app.authenticate().then(() => {
            this.service.patch(
                sessionId,
                { '$set': setData },
                params)
                .then((result) => {
                })
                .catch(function (error) {
                })
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

    private onPatched(patchedItem: any) {

        //build para la escucha de otros
        /*  const index = this.getIndex(patchedItem.id);
          this.sessions[index].percent = patchedItem.percent;
          this.sessionsObserver.next(this.sessions);
          this.sessionObserver.next(this.sessions[index]);*/
    }

    private onRemoved(removedItem) {
        // const index = this.getIndex(removedItem.id);

        //this.dataStore.checks.splice(index, 1);

        //this.itemsObserver.next(this.data);
    }

}