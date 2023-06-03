// Define the endpoint for the API to retrieve movies
const url = `http://www.omdbapi.com/?apikey=2a1b58ae&`
// Define an async function that retrieves orders from the API
export async function getOrders() {
    try {
        // Make a GET request to the API endpoint
        let resp = await fetch(url + `s=fight`);

        // Parse the response as JSON
        let data = await resp.json();
        let movies = data.Search;

        movies = movies.map(async movie => {
            let cleanMovie = {
                title: movie.Title,
                year: movie.Year,
                id: movie.imdbID,
                image: movie.Poster
            };

            let resp = await fetch(url + `i=${cleanMovie.id}`);
            let data = await resp.json();
            // console.log(data);
            cleanMovie.plot = data.Plot;
            console.log(cleanMovie);

            return cleanMovie;
        
        })
        movies = await Promise.all(movies);
        // Return the product data
        return (movies);
    } catch (e) {
        // Log an error message if the request fails
        console.log("Fetching the products failed", e);
    }
};
