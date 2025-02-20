// Function to fetch data from a JSON resource
function fetchCatFact(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Data fetched:', data);
            processCatFact(data);
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
}

function processCatFact(data) {
    console.log('Processing data:', data);
}

const url = 'https://catfact.ninja/fact';
fetchCatFact(url);
