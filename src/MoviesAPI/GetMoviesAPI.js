// Define the endpoint for the API to retrieve movies

 const url = `http://www.omdbapi.com/?apikey=2a1b58ae&`;

// Define an async function that retrieves movies from the API
export async function getMoviesAPI() {
    try {
        // Make a GET request to the url
        const resp = await fetch(url);

        // Parse the response as JSON
        const data = await resp.json();

        // Return the movie data
        return data;
    } catch (e) {
        // Log an error message if the request fails
        console.log("Fetching the movies failed", e);
    }
};
