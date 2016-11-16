import { Injectable } from '@angular/core';
import { SocketService } from './shared/services/socket-io';
import { Credentials } from './modules/users/model/credentials';
import { User } from './modules/users/model/user';

@Injectable()
export class AuthService {
    // store the URL so we can redirect after logging in
    private _redirectURL: string;
    private _app: any;

    constructor(public socketService: SocketService) {
        this._app = this.socketService.init();
    }

    set redirectURL(URL: string) {
        this._redirectURL = URL;
    }

    get redirectURL() {
        return this._redirectURL ? this._redirectURL : '/me/projects';
    }

    public login(credentials: Credentials): Promise<User> {
        return this._app.authenticate({
            type: 'local',
            'email': credentials.email,
            'password': credentials.password
        }).then((result) => {
            console.log(result);
            window.localStorage.setItem('user', JSON.stringify(result.data));
            return this.user;
        }).catch(function (error) {
            throw error;
        });
    }


    public get isLoggedIn(): boolean {
        return !!window.localStorage.getItem('user');
    }

    public logout(): Promise<boolean> {
        return this._app.logout().then(() => {
            localStorage.removeItem('user');
            return true;
        });
    }

    public get user(): User {
        const data = JSON.parse(window.localStorage.getItem('user'));
        return new User(data['_id'], data['name'], data['email'], data['createdAt'], data['appKeyTrello']);
    }
    public set user(user: User) {
        window.localStorage['user'] = JSON.stringify(user);
    }
    public signup(user: User): Promise<void> {
        return this._app.service('users').create({
            name: user.name,
            email: user.email,
            password: user.password
        }).catch(function (error) {
            throw error;
        });
    }
}


