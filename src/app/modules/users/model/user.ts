export class User {
    public password: string;

    constructor(
        public id: string,
        public name: string,
        public email: string,
        public avatar: string,
        public createdAt: Date) {
    }
}
