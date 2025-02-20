async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && !data.valid) {
            throw new Error('Invalid data received');
        }
        console.log('Data fetched:', data);
        processData(data);
    } catch (error) {
        console.error('Initial fetch failed:', error);
        console.log('Retrying with a different URL...');

        const fallbackUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        try {
            const fallbackResponse = await fetch(fallbackUrl);
            if (!fallbackResponse.ok) {
                throw new Error('Network response was not ok from fallback URL');
            }
            const fallbackData = await fallbackResponse.json();
            console.log('Data fetched from fallback:', fallbackData);
            processData(fallbackData);
        } catch (fallbackError) {
            console.error('Fallback fetch failed:', fallbackError);
        }
    }
}

function processData(data) {
    console.log('Processing data:', data);
}

// Call the fetchData function with an invalid URL to trigger the error
fetchData('https://invalid-url.example.com');
