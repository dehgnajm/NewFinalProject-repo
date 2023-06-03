// define the API endpoint URL
const url = `http://www.omdbapi.com/?apikey=2a1b58ae&`;

// define an asynchronous function to remove an order from the API by index
const RemoveOrder = async (index) => {
  // use fetch to send a DELETE request to the specified endpoint URL
  const response = await fetch(`${url}/${index}`, {
    method: "DELETE",
  });
  // convert the response to JSON format
  const data = await response.json();
  // return the data
  return (data);
}

// export the RemoveOrder function for use in other modules
export default RemoveOrder;
