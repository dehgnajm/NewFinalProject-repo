import { NavItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieList({ cart }) {

  // Determine whether to show the cart badge or not
  const [posterUrl, setPosterUrl] = useState("");
  const showMe = cart.length > 0 ? "" : "visually-hidden";

  useEffect(() => {
    fetchMoviePoster();
  }, []);

  const fetchMoviePoster = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=e58fb6c52637bd3d571b455d411e9040"
    );
    const data = await response.json();
    const posterPath = data.poster_path;
    const posterUrl = `https://image.tmdb.org/t/p/original${posterPath}`;
    setPosterUrl(posterUrl);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="text-decoration-none text-white bungee"
            >
              Movie List
            </Link>
          </Navbar.Brand>

          <NavItem>
            <Link
              to="/Orders"
              className="text-decoration-none text-white bungee fw-bolder"
            >
              Order
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/cart">
              <button
                type="button"
                className="btn position-relative bg-transparent text-white"
              >
                <img
                  src={posterUrl}
                  alt="Movie Poster"
                  className="fillSVG"
                  height="40"
                  width="40"
                />

                <div className={showMe}>
                  <span className="position-absolute ms-3 mt-2 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span className="visually-hidden">Items in Cart</span>
                  </span>
                </div>
              </button>
            </Link>
          </NavItem>
        </Container>
      </Navbar>
    </>
  );
}

export default MovieList;
