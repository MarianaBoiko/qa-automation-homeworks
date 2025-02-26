import { UserProfile } from './interfaces';

export abstract class Entity {
    public abstract getDetails(): string;
}

export class UserEntity extends Entity {
    public user: UserProfile;

    public constructor(user: UserProfile) {
        super();
        this.user = user;
    }

    public getDetails(): string {
        return `User: ${this.user.name}, Email: ${this.user.email}`;
    }
}
