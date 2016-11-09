import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../model/user';
import { SocketService } from '../../../shared/services/socket-io';

@Injectable()
export class UserSocketService extends UserService {

    usersObserver: any;
    userObserver: any;
    userOb: Observable<any>;

    user: User;
    users: User[];

    _app: any;
    service: any;

    constructor(public socketService: SocketService, private router: Router) {
        super();
        this._app = this.socketService.init();
        this.service = this._app.service('users');
        //listening events CRUD
        this.service.on('created', (newItem) => this.onCreated(newItem));

        this.usersOb = new Observable(observer => this.usersObserver = observer).share();
        this.currentUserOb = new Observable(observer => this.userObserver = observer).share();

        this.user = null;
        this.users = [];
    }

    getUsers() {
        this._app.authenticate().then(data => {
            this.service.find({
                query: {
                    $sort: { createdAt: -1 }
                }
            }, (err, items: any) => {
                if (err) return console.error(err);
                console.log('úers', items);

                this.users = items.data.map((x) =>
                    this.toUser(x));
                this.usersObserver.next(this.users);
            })
        });
    }
    add(user: User) {
        console.log('saving');
        this._app.authenticate().then(data => {
            this.service.create({ email: this.user.email, password: '121212' })
                .then((result) => {
                })
                .catch(function (error) {
                    console.error('Error saving!', error);
                    alert("Error al registrar un usuario");
                })
        });
    }
    get(id: string) {
        console.log(id);
        this._app.authenticate().then(data => {
            this.service.get(id,
                (err, x: any) => {
                    if (err) return console.error(err);
                    this.user = new User(x._id, x.username, x.email, x.createdAt);
                    this.userObserver.next(this.user);
                    console.log("item of server ", x);
                })
        });
    }
    getByUsername(username: string) {
        this.service.find({
            query: {
                email: username,
                $limit: 1
            }
        }, (err, item: any) => {
            if (err) return console.error("error", err);
            console.log(item);
            this.user = this.toUser(item.data[0]);
            this.userObserver.next(this.user);
        })

    }
    delete(id: number | number) {
        this.users.splice(id, 1);
        this.usersObserver.next(this.users);
        this.service.remove(id)
            .then((result) => {
                this.router.navigate(['admin/users']);
            })
            .catch(function (error) {
                alert("Error al eliminar  tu proyecto");
            });
    }
    update(user: User) {
    }
    patch(data) {

    }
    private toUser(source) {
        console.log(source);
        return new User(source._id, source.name, source.email, source.createdAt);
    }
    search(email: string) {
        this._app.authenticate().then(data => {
            this.service.find({
                query: {
                    email: { $regex: email, $options: 'igm' }
                }
            }, (err, items: any) => {
                if (err) { return console.error('error', err); }
                this.users = items.data.map((x) => this.toUser(x));
                this.usersObserver.next(this.users);
            });
        });
    }
    private onCreated(newItem: any) {
        console.log('Someone created a message', newItem);
        //TODO: add notifications 
        this.users.push(this.toUser(newItem));
        this.usersObserver.next(this.users);
    }


}