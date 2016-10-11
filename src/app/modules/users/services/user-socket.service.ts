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
                    new User(x.id, x.email, x.avatar, x.cretedAt));
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
    get(id: number | string) {
        this._app.authenticate().then(data => {
            this.service.get(id,
                (err, x: any) => {
                    if (err) return console.error(err);
                    this.user = new User(x.id, x.email, x.avatar, x.cretedAt);
                    this.userObserver.next(this.user);
                    console.log("item of server ", x);
                })
        });
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
    search(email: string) {
        this._app.authenticate().then(data => {
            this.service.find({
                query: {
                    email: email
                }
            }, (err, items: any) => {
                if (err) return console.error(err);
                console.log('users', items);
                this.users = items.data.map((x) =>
                    new User(x._id, x.email, x.avatar, x.cretedAt));
                this.usersObserver.next(this.users);
            })
        });
    }


    private onCreated(newItem: any) {
                console.log('Someone created a message', newItem);
                //TODO: add notifications 
                this.users.push(new User(newItem.id, newItem.email, newItem.avatar, newItem.createdAt));
                this.usersObserver.next(this.users);
            }


}