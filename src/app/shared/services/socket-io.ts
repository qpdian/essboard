import { Injectable } from '@angular/core';
import { env } from '../../env';

const feathers = require('feathers-client');
const io = require('socket.io-client');
@Injectable()
export class SocketService {
    public socket: any;
    public _app: any;
    public _url: string;
    constructor() {
        this._url = env.api.local;
    }
    init() {
        this.socket = io(this._url);
        return feathers()
            .configure(feathers.socketio(this.socket))
            .configure(feathers.hooks())
            .configure(feathers.authentication({ storage: window.localStorage }));
    }
}