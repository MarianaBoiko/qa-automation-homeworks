import { Company, UserProfile } from './interfaces';

export class UserCompanyProfile {
    private company: Company;

    public constructor(company: Company) {
        this.company = company;
    }

    public getProfile(): string {
        return `User's company profile: ${this.company.name} - ${this.company.catchPhrase} - ${this.company.bs}`;
    }
}
export class User {
    private id: number;
    private name: string;
    private email: string;
    private company: UserCompanyProfile;

    public constructor(userProfile: UserProfile) {
        this.id = userProfile.id;
        this.name = userProfile.name;
        this.email = userProfile.email;
        this.company = new UserCompanyProfile(userProfile.company);
    }

    public getUserInfo(): string {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}
