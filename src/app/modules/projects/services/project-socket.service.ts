import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project, Session } from '../model/project';
import { Observable } from 'rxjs';
import { ALPHAS } from '../../../shared/models/kernel/mock-kernel';
import { Dimension } from '../model/project-kernel';
import { ProjectService } from './project.service';
import { SocketService } from '../../../shared/services/socket-io';

@Injectable()
export class ProjectSocketService extends ProjectService {
    currentProject: Observable<any>;
    items: Observable<any>;
    projectsObserver: any;
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
        this.otherService = this._app.service('IsLogin');
        //listening events CRUD
        this.service.on('created', (newItem) => this.onCreated(newItem));
        this.service.on('updated', (updatedItem) => this.onUpdated(updatedItem));
        this.service.on('removed', (removedItem) => this.onRemoved(removedItem));

        this.otherService.on('created', (newItem) => this.onOtherCreated(newItem));

        this.items = new Observable(observer => this.projectsObserver = observer).share();
        this.currentProject = new Observable(observer => this.projectObserver = observer).share();

        this.project = null;
        this.projects = [];
    }

    getProjects() {
        this._app.authenticate().then(data => {
            this.service.find({
            }, (err, items: any) => {
                if (err) return console.error(err);
                this.projects = items.data.map((x) => new Project(x._id, x.name, x.description, x.createdAt));
                this.projectsObserver.next(this.projects);
            })
        });

    }
    add(project: Project) {
        this._app.authenticate().then(data => {
            this.service.create({ name: project.name, description: project.description })
                .then((result) => {
                })
                .catch(function (error) {
                    console.error('Error saving!', error);
                    alert("Error al crear tu proyecto");
                })
        });
    }
    getProject(id: string) {
        this.service.get(id,
            (err, item: any) => {
                if (err) return console.error(err);
                let p = new Project(item._id, item.name, item.description, item.createdAt);
                //FIX 
                p.addSession(new Session(1, new Date()));
                this.project = p;
                //
                this.projectObserver.next(this.project);
                console.log("item of server ", item);
            });
    }
    delete() {
        const id = this.project.id;
        this.projects.splice(this.getIndex(id), 1);
        this.projectsObserver.next(this.projects);
        this.service.remove(id)
            .then((result) => {
                this.router.navigate(['user/projects']);
            })
            .catch(function (error) {
                alert("Error al eliminar  tu proyecto");
            });
    }
    update(project: Project) {
        const id = this.project.id;
        this.projectObserver.next(this.project);
        this.service.patch(id, { name: project.name, description: project.description, percent: project.percent })
            .then((result) => {
                alert('Proyecto editado');
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
        console.log('Someone created a message', newItem);
        //TODO: add notifications 
        alert('Nuevo proyecto');
        this.projects.unshift(new Project(newItem.id, newItem.name, newItem.description, newItem.createdAt));
        this.projectsObserver.next(this.projects);
    }
    private onOtherCreated(newItem: any) {

        console.log('creadto user');

    }

    private onUpdated(updatedItem: any) {
        const index = this.getIndex(updatedItem.id);
        this.projects[index].name = updatedItem.name;
        this.projects[index].description = updatedItem.description;
        this.projects[index].percent = updatedItem.percent;
        this.projectsObserver.next(this.projects);
        this.projectObserver.next(this.projects[index]);
    }

    private onRemoved(removedItem) {
        // const index = this.getIndex(removedItem.id);

        //this.dataStore.checks.splice(index, 1);

        //this.itemsObserver.next(this.data);
    }
    addAllDimensions(project: Project) {

    }
    addSession() {
        let num = this.project.sessions.length + 1;
        this.project.addSession(new Session(num, new Date()));
        let sessionService = this._app.service('sessions');
        sessionService.create({
            project: 1,
            percent: 0,
            nroOrder: num,
            isComplete: false,
            isTouched: false,
            dimensions: [],
        }).then(function (session) {
            console.log('Created session', session);
        }).catch(function (error) {
            console.error('Error saving!', error);
            alert("Error al crear tu session");
        });
        this.projectObserver.next(this.project);
    }
    join() {

        console.log('join ', this._app.get('user'));
        /*
        this._app.authenticate().then(data => {
            this.otherService.create({ })
                .then((result) => {
                })
                .catch(function (error) {
                   console.log('Error saving!', error);
                   // alert("Error al crear tu proyecto");
                })
        });*/
    }

}