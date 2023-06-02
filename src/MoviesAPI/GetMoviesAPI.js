// Define the endpoint for the API to retrieve movies

    

 const url = `https://api.themoviedb.org/3/movie/550?api_key=e58fb6c52637bd3d571b455d411e9040`;

   

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
