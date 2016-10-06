import { Injectable } from '@angular/core';
import { SocketService } from './shared/services/socket-io';
import { Credential} from './shared/models/credential';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    public _app: any;
    constructor(public socketService: SocketService, private router: Router) {
        this._app = this.socketService.init();
    }
    public login(credentials: Credential) {
        this._app.authenticate({
            type: 'local',
            'email': credentials.email,
            'password': credentials.password
        }).then((result) => {
            window.localStorage.setItem('user', JSON.stringify(result.data));
            this.router.navigate(['/']);
        }).catch(function (error) {
            alert('Error : Email o correo es invalido');
            console.error('Error authenticating!', error);
        });
    }
    public get isLoggedIn(): boolean {
        return !!window.localStorage.getItem('user');
    }
    public logout() {
        this._app.logout().then(() => window.location.href = '/');
        localStorage.removeItem("user");
    }
    public get user(): any {
        return JSON.parse(window.localStorage.getItem('user'));
    }
}
