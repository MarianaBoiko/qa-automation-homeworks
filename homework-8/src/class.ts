import { Company } from './models';

export class UserCompanyProfile {
    public company: Company;

    public constructor(company: Company) {
        this.company = company;
    }

    public getProfile(): string {
        return `User's company profile: ${this.company.name} - ${this.company.catchPhrase} - ${this.company.bs}`;
    }
}
