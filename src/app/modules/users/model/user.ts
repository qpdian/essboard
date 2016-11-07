export class User {
    avatar: string;
    email: string;
    id: string;
    createdAt: Date;
    username : string
    constructor(id: string,username,email: string,avatar: string, createdAt : Date) {
        this.avatar = avatar;
        this.email = email;
        this.id = id;
        this.createdAt = createdAt;
        this.username = username;
    }
}