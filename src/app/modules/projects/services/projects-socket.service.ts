import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../model/project';
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
        return new Project(obj._id, obj.name, obj.description, obj.createdBy, obj.createdAt);
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
                if (err) return console.error(err);
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
                    members: []
                })
                .then((result) => {
                })
                .catch(function (error) {
                    console.error('Error saving!', error);
                    alert("Error al crear tu proyecto");
                })
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
        this.projects.unshift(this.transformSourceToProject(newItem));
        this.projectsObserver.next(this.projects);
    }

    private onRemoved(removedItem) {
        const index = this.getIndex(removedItem.id);

        //this.dataStore.checks.splice(index, 1);

        //this.itemsObserver.next(this.data);
    }
}
