export class User {
    avatar: string;
    email: string;
    id: string;
    createdAt: Date;
    constructor(id: string,email: string,avatar: string, createdAt : Date) {
        this.avatar = avatar;
        this.email = email;
        this.id = id;
        this.createdAt = createdAt;
    }
}