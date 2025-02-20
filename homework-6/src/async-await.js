async function fetchRandomUserData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        processRandomUserData(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function processRandomUserData(data) {
    console.log('Processing data:', data);
}

const urlRandomUser = 'https://randomuser.me/api/';
(async () => {
    await fetchRandomUserData(urlRandomUser);
})();
