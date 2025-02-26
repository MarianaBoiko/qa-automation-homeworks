import { User } from './interfaces';

const API_URL = 'https://jsonplaceholder.typicode.com/users/1';

export async function fetchUserData(): Promise<User> {
    const response = await fetch(API_URL);
    const data = (await response.json()) as User;
    return data;
}

(async () => {
    const data = await fetchUserData();
    console.log(data);
})();
