import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project, Session } from '../model/project';
import { Observable } from 'rxjs';
import { ProjectService } from './project.service';
import { SocketService } from '../../../shared/services/socket-io';
import { ToProject } from '../transforms/to-project';
import { Util } from '../model/util';

@Injectable()
export class ProjectSocketService extends ProjectService {
    projectObserver: any;
    project: Project;
    _app: any;
    service: any;
    otherService: any;

    constructor(public socketService: SocketService, private router: Router) {
        super();
        this._app = this.socketService.init();
        this.service = this._app.service('projects');
        this.service.on('removed', (removedItem) => this.onRemoved(removedItem));
        this.service.on('patched', (patchedItem) => this.onPatched(patchedItem));
        this.currentProject = new Observable(observer => this.projectObserver = observer).share();
        this.project = null;
    }
    getProject(id: string) {
        this.service.get(id, {},
            (err, item: any) => {
                if (err) return console.error(err);
                this.project = ToProject.transformCompleteToProject(item);
                console.log("proyecto completo",this.project);
                this.projectObserver.next(this.project);
            });
    }
    delete() {
        this._app.authenticate().then(() => {
            this.service.remove(this.project.id, {},
                (err, result: any) => {
                    if (err) return console.error(err);
                    // this.projects.splice(this.getIndex(id), 1);
                    // this.projectsObserver.next(this.projects);
                    this.router.navigate(['me/projects']);
                })
        });
    }
    patchData(data) {
        this._app.authenticate().then(() => {
            this.service.patch(this.project.id, data)
                .then((result) => {
                })
                .catch(function (error) {
                });
        });
    }
    setName(name) {
        const data = { name: name };
        this.patchData(data);
    }
    setDescription(description) {
        const data = { description: description };
        this.patchData(data);
    }
    public inviteTo(project,user) {
        this._app.authenticate().then(() => {
            this.service.patch(
                project.id,
                { $addToSet: { members: user.id } }
                // { query: { action: 'invite', data: user.id } }
            ).then((result) => {
                alert('Invitado al proyecto');
            })
                .catch(function (error) {
                    console.log(error, "Error al editar  tu proyecto");
                });
        }
        );
    }
    public desinviteTo(user) {
        this._app.authenticate().then(() => {
            this.service.patch(
                this.project.id,
                { $pull: { members: user.id } },
                { query: { action: 'desinvite', data: user.id } }
            ).then((result) => {
                console.log('desinvitado');
            })
                .catch(function (error) {
                    console.log(error, "Error al editar  tu proyecto");
                });
        });
    }

    private onPatched(patchedItem: any) {
        console.log("traido",patchedItem);
        this.project = ToProject.transformCompleteToProject(patchedItem);
        this.projectObserver.next(this.project);
    }

    private onRemoved(removedItem) {
        //  const index = this.getIndex(removedItem.id);
        //this.dataStore.checks.splice(index, 1);
        //this.itemsObserver.next(this.data);
    }
    addSession() {
        let sessionService = this._app.service('sessions');
        let order = this.project.sessions.length + 1;
        const backId = this.project.getLastSessionId();
        let dimensions = Util.getKernelEmpty();
        this._app.authenticate().then(data => {
            sessionService.create({
                _project: this.project.id,
                nroOrder: order,
                dimensions: dimensions,
            }).then((session) => {
                this.project.addSession(new Session(session._id, session.nroOrder, session.createdAt));
                this.projectObserver.next(this.project);
            }).catch(function (error) {
                console.error('Error saving!', error);
            })
        });
    }
}