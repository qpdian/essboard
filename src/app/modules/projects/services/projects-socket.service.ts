import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project, Session } from '../model/project';
import { Util } from '../model/util';
import { Observable } from 'rxjs';
import { ProjectsService } from './projects.service';
import { SocketService } from '../../../shared/services/socket-io';

@Injectable()
export class ProjectsSocketService extends ProjectsService {
    currentProject: Observable<any>;
    projectsObserver: any;
    projectsSharedObserver: any;
    projectObserver: any;
    project: Project;
    projects: Project[];
    _app: any;
    service: any;
    otherService: any;

    constructor(public socketService: SocketService, private router: Router) {
        super();
        this._app = this.socketService.init();
        this.service = this._app.service('projects');
        this.service.on('created', (newItem) => this.onCreated(newItem));
        this.service.on('removed', (removedItem) => this.onRemoved(removedItem));
        this.items = new Observable(observer => this.projectsObserver = observer).share();
        this.sharedMe = new Observable(observer => this.projectsSharedObserver = observer).share();
        this.currentProject = new Observable(observer => this.projectObserver = observer).share();
        this.project = null;
        this.projects = [];
    }
    private transformSourceToProject(obj: any) {
        return new Project(obj._id, obj.name, obj.description, obj.createdAt);
    }
    getProjects() {
        this._app.authenticate().then(() => {
            this.service.find({
                query: {
                    $or: [
                        { createdBy: this._app.get('user')._id },
                        { members: this._app.get('user')._id }
                    ]
                }          
            }, (err, items: any) => {
                    if(err) return console.error(err);
                    this.projects = items.data.map((obj) => this.transformSourceToProject(obj));
                    this.projectsObserver.next(this.projects);
                })
        });
    }
    getProjectsSharedMe() {
        this._app.authenticate().then(data => {
            this.service.find({
                query: { members: this._app.get('user')._id }
            }, (err, items: any) => {
                if (err) return console.error(err);
                const projectsShared = items.data.map((obj) => this.transformSourceToProject(obj));
                this.projectsSharedObserver.next(projectsShared);
            })
        });
    }
    add(project: Project) {
        this._app.authenticate().then(data => {
            this.service.create(
                {
                    name: project.name,
                    description: project.description,
                    currentKernel: Util.getKernelEmpty(),
                    members : []
                })
                .then((result) => {
                })
                .catch(function (error) {
                    console.error('Error saving!', error);
                    alert("Error al crear tu proyecto");
                })
        });
    }
    getProject(id: string) {
        this.service.get(id, {},
            (err, item: any) => {
                if (err) return console.error(err);
                let p = new Project(item._id, item.name, item.description, item.createdAt);
                let order = item.sessions.length;
                for (let session of item.sessions) {
                    p.addSession(new Session(session._id, order, session.createdAt));
                    console.log(session);
                    order--;
                }
                p.setCurrentKernel(Util.buildKernel(item.currentKernel));
                for (let member of item.members) {
                    p.addMember(member._id, member.email, member.avatar);
                }
                this.project = p;
                this.projectObserver.next(this.project);
                console.log("item of server ", item);
                console.log("project ", this.project);
            });
    }
    delete() {
        const id = this.project.id;
        this.service.remove(id, {},
            (err, result: any) => {
                if (err) return console.error(err);
                this.projects.splice(this.getIndex(id), 1);
                this.projectsObserver.next(this.projects);
                this.router.navigate(['me/projects']);
            });
    }
    update(project: Project) {
        const id = this.project.id;
        this.service.patch(id, { name: project.name, description: project.description, percent: project.percent })
            .then((result) => {
                console.log("proyecto editado");
            })
            .catch(function (error) {
                console.log(error, "Error al editar  tu proyecto");
            });
    }
    public inviteTo(project: Project, user) {
        console.log(user.id + "user");
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
    public desinviteTo(project, invited) {
        console.log(invited);
        this.service.patch(
            project.id,
            { $pull: { members: invited.id } },
            { query: { action: 'desinvite', data: invited.id } }
        ).then((result) => {
            console.log('desinvitado');
        })
            .catch(function (error) {
                console.log(error, "Error al editar  tu proyecto");
            });
    }
    private getIndex(id: string): number {
        let foundIndex = -1;
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id === id) {
                foundIndex = i;
            }
        }
        return foundIndex;
    }
    private onCreated(newItem: any) {
        console.log('Someone created a project', newItem);
        this.projects.unshift(new Project(newItem._id, newItem.name, newItem.description, newItem.createdAt));
        this.projectsObserver.next(this.projects);
    }
    private onUpdated(updatedItem: any) {
        console.log('edi');
        const index = this.getIndex(updatedItem.id);
        this.projects[index].name = updatedItem.name;
        this.projects[index].description = updatedItem.description;
        this.projects[index].percent = updatedItem.percent;
        this.projectsObserver.next(this.projects);
        this.projectObserver.next(this.projects[index]);
    }
    private onPatched(patchedItem: any) {
        console.log('patched');
    }

    private onRemoved(removedItem) {
        const index = this.getIndex(removedItem.id);

        //this.dataStore.checks.splice(index, 1);

        //this.itemsObserver.next(this.data);
    }
    addAllDimensions(project: Project) {

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
                console.log('Sesion creada', session);
                this.project.addSession(new Session(session._id, session.nroOrder, session.createdAt));
                this.projectObserver.next(this.project);
            }).catch(function (error) {
                console.error('Error saving!', error);
            })
        });
    }


    join() {



    }

}