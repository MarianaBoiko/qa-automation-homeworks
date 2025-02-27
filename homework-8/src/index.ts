import { getUserJson } from './interfaces';
import { UserSummary } from './transformer';
import { UserEntity } from './abstraction';

(async () => {
    const userProfile = await getUserJson();

    const userSummary = new UserSummary(userProfile);
    console.log(userSummary.getSummary());

    const userEntity = new UserEntity(userProfile);
    console.log(userEntity.getDetails());
})();
