// Define the API endpoint to make a POST request
const url = `http://www.omdbapi.com/?s=&apikey=263d22d8`;

// Define a function to make a POST request to the API endpoint with a new order object
const PostOrder = async (newOrder) => {
  const response = await fetch(url, {
    method: "POST", // Set the request method to POST
    headers: { "Content-Type": "application/json" }, // Set the request headers to include JSON data
    body: JSON.stringify(newOrder) // Set the request body to be the new order object converted to a JSON string
  })
  
  // Parse the response from the API as JSON data and return it
  const data = await response.json()
  return data
}

// Export the PostOrder function as the default export of the module
export default PostOrder;
