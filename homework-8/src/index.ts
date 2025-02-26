import { fetchUserData } from './api';
import { UserSummary } from './transformer';
import { UserCompanyProfile } from './class';

async function main(): Promise<void> {
    try {
        const user = await fetchUserData();
        const summary = new UserSummary(user);
        console.log(summary.getSummary());

        const userProfile = new UserCompanyProfile(user.company);
        console.log(userProfile.getProfile());
    } catch (error) {
        console.error('Failed to fetch and transform user data:', error);
    }
}

main();
