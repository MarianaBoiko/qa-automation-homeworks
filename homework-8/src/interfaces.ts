export interface UserProfile {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geolocation;
}

export interface Geolocation {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export async function getUserJson(): Promise<UserProfile> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = (await response.json()) as UserProfile;
    return json;
}

(async () => {
    const json = await getUserJson();
    console.log(json);
})();
