import { User } from './interfaces';

export class UserSummary {
    public fullName: string;
    public location: string;
    public email: string;

    public constructor(user: User) {
        this.fullName = user.name;
        this.location = user.address?.city;
        this.email = user.email;
    }

    public getSummary(): string {
        return `User's full name: ${this.fullName} | User's email: ${this.email} | User's Location: ${this.location}`;
    }
}
