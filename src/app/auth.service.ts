import { Injectable } from '@angular/core';
import { SocketService } from './shared/services/socket-io';
import { Credential } from './shared/models/credential';

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

    public login(credentials: Credential): Promise<User> {
        return this._app.authenticate({
            type: 'local',
            'email': credentials.email,
            'password': credentials.password
        }).then((result) => {
            window.localStorage.setItem('user', JSON.stringify(result.data));
            return this.user;
        }).catch(function (error) {
            throw `Lo sentimos, Essboard no renoce
                   a un usuario para esas credenciales.`;
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
        return {
            credentials: JSON.parse(window.localStorage.getItem('user'))
        };
    }

    public signup(user: any): Promise<void> {
        return this._app.service('users').create({
            email: user.email,
            password: user.password
        }).catch(function (error) {
            console.error('Error create user!', error);
        });
    }
}

class User {
    credentials: Credential;
}
