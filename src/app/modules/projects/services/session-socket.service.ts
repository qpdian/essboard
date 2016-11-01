import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../model/project';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import { SocketService } from '../../../shared/services/socket-io';
import { ToSession } from '../transforms/to-session';
import { GetKeys } from '../model/util/get-keys-from-object';

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
 
    getSession(id: string) {
        this.service.get(id,
            (err, item: any) => {
                if (err) return console.error(err);
                this.session = ToSession.withCompleteTransformation(item);
                GetKeys.setSource(item.alphas);
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
    setStateAsWorking(id, dimensionConcept, stateName) {
        let indexs = GetKeys.getIndexs(dimensionConcept, stateName);
        let base = 'dimensions.' + indexs.dimension + '.states.' + indexs.state;
        let path = base + '.isWorking';
        let params = {};
        let setData = { [path]: true };
        this.patch(id, setData, params);
    }
    setCheckpointTo(id, dimensionConcept, stateName, checkpointId, condition) {
        let indexs = GetKeys.getIndexs(dimensionConcept, stateName);
        let base = 'dimensions.' + indexs.dimension + '.states.' + indexs.state + '.checklist';
        let path = base + '.$.isAchaived';
        let search = base + '.concept';
        let params = { ["query"]: { [search]: checkpointId } };
        let setData = { [path]: condition };
        this.patch(id, setData, params);
    }
    private patch(id, data, params) {
        this._app.authenticate().then(() => {
            this.service.patch(
                id,
                { '$set': data },
                params)
                .then((result) => {
                    console.log(result.dimensions);
                })
                .catch(function (error) {
                    console.log(error)
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
        console.log('Someone created a session', newItem);
        //TODO: add notifications 
        // this.sessions.unshift(new Session(newItem.nroOrder,newItem.cretedAt));
        // this.sessionsObserver.next(this.sessions);
    }

    private onPatched(patchedItem: any) {
        this.session = ToSession.withCompleteTransformation(patchedItem);
        GetKeys.setSource(patchedItem.dimensions);
        this.sessionObserver.next(this.session);
    }
    private onRemoved(removedItem) {
        // const index = this.getIndex(removedItem.id);

        //this.dataStore.checks.splice(index, 1);

        //this.itemsObserver.next(this.data);
    }

}