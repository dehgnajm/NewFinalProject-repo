// define the API endpoint URL
const url = `https://api.themoviedb.org/3/movie/550?api_key=e58fb6c52637bd3d571b455d411e9040`;

// define an asynchronous function to remove an order from the API by index
const RemoveOrder = async (index) => {
  // use fetch to send a DELETE request to the specified endpoint URL
  const response = await fetch(`${url}/${index}`, {
    method: "DELETE",
  });
  // convert the response to JSON format
  const data = await response.json();
  // return the data
  return data;
}

// export the RemoveOrder function for use in other modules
export default RemoveOrder;
