//this page includes the info for each movie as a card
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import MovieShop from "./MovieShop";
import MovieList from "./MovieList";

function MovieCards({ movies, addToCartTotal}) {
	// function to handle adding movies to the cart when the "Add to Cart" button is clicked
	function handleClickAdd(movies){
		console.log("🚀 ~ file: MovieCards.js:10 ~ handleClickAdd ~ movies:", movies)
		addToCartTotal(movies)
	}
	movies = Array.from(movies);
	return (
		<>
			{/* mapping through each movie object in the movies array to display it as a Card */}
			{movies.map((movies) => (
				<div className="col cardContainer" key={movies.key}>
					{/* individual movie Card */}
					<Card
						style={{ width: "20rem" }}
						className="shadow mb-4 mt-4"
						key={movies.key}
					>
						{/* movie image */}
						<Card.Img variant="top" src={movies.image} />
						<Card.Body>
							{/* movie name */}
							<Card.Title className="bungee">{movies.name}</Card.Title>
							<Card.Text>
								{/* movie information: department, item, movieadj, material */}
								<span className="fw-bold"> {movies.imdb_id}, {movies.poster_path} {movies.name}, <br/>{movies.logo_path}-{movies.id} </span><br/>
								{/* movie description */}
								{movies.origin_country}
								<br/>
								<Link to={movies.key} className="removeLinkDecor bungee text-black" element={<MovieShop movies={movies}  />}>More Info...</Link>
							</Card.Text>

							{/* button to add movie to cart */}
							<Button variant="primary" onClick={() => handleClickAdd(movies)}><span className="bungee" >Add to Cart</span></Button>

						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
}

export default MovieCards;
