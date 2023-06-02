import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

// Define a functional component called MovieShop that receives two props:
// movies: an array of movies as objects
// addToCartTotal: a function to add a movie to the cart
export default function MovieShop({ movies , addToCartTotal }) {

  // Get the 'key' parameter from the URL
  const { key } = useParams();

  // Parse the 'key' as an integer and subtract 1 to get the index of the movie in the array
  const movieIndex = parseInt(key, 10) - 1;

  // If the movieIndex is invalid, return an error message
  if (isNaN(movieIndex) || movieIndex < 0 || movieIndex >= movies.length) {
    return <div>Error: Movie not found.</div>;
  }

  // Destructure the properties of the selected movie from the array
  const { id, imdb_id, logo_path, poster_path, name, origin_country } = movies[movieIndex];

  // Define a function called handleClickAdd that takes the selected movie as a parameter and adds it to the cart
  function handleClickAdd(movies){
    console.log("🚀 ~ file: MovieShop.js:19 ~ handleClickAdd ~ movies:", movies)
    addToCartTotal(movies)
  }

  // Return a JSX element with the details of the selected movie
  return (
    <Container>
      <Row className='p-4'>
        <Col>
          <img src={logo_path} className='img-fluid rounded-2' alt='Movie logo'></img>
        </Col>
        <Col className='col-lg-6 col-md-12 col-sm-12'>
          <h1 className='display-4 bungee'>{name}</h1>
          <h3><span className="fw-bold">Material:</span> {poster_path} <br /><span className="fw-bold">Item:</span> {id}<br/><span className="fw-bold"></span> </h3><br />
          <h2>{imdb_id}</h2>
          <h1 className='display-5'>${origin_country}</h1><br />
          <Link to="/">
            <Button variant='primary' className='m-3'><span className='bungee'>Continue Shopping</span></Button>
            <Button variant="primary" className='m-3' onClick={() => handleClickAdd(movies[movieIndex])}><span className="bungee" >Add to Cart</span></Button> 
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
