import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MovieList from "./Components/MovieList";
import ShowCart from "./Components/ShowCart";
import Checkout from "./Components/Checkout";
import PostOrders from "./OrderAPI/PostOrders";
import MovieShop from "./Components/MovieShop";
import { getMoviesAPI } from "./MoviesAPI/GetMoviesAPI";
import { getOrders } from "./OrderAPI/GetOrders"
import Orders from "./Components/Orders";
import RemoveOrder from "./OrderAPI/RemoveOrder";


export default function App() {
	const [orders, setOrders] = useState([]);
	const [movies, setMovies] = useState([]);
	// Declare state variables for the cart
	const [cartTotal, setCartTotal] = useState(0);
	const [costTotal, setCostTotal] = useState(0);
	const [cart, setCart] = useState([]);


	// uesEffect hook to fetch the orders that have been placed from the API on component mount.
	useEffect(() => {
		fetchOrders();
	},[]);

	const fetchOrders = async () =>{
		const addOrders = await getOrders();
		setOrders(addOrders);
		
	}

	const removeOrder = async (id) => {
		console.log("🚀 ~ file: App.js:37 ~ removeOrder ~ id:", id)
		await RemoveOrder(id)
		// fetchOrders();
		const orderRemove = [...Orders];
		const index=Orders.findIndex((order) => order.id === id)
		orderRemove.splice(index, 1);
		
                setOrders(orderRemove)
	      }
	// useEffect hook to fetch the movies data from the API on component mount
	useEffect(() => {
		fetchMovies();
	}, []);

	// fetch the movies data from the API
	const fetchMovies = async () => {
		const addMovie = await getMoviesAPI();
		setMovies(addMovie);
	};
	

	// Function to add a movie to the cart
	function addToCartTotal(movie) {
		const price = parseFloat(movie.price);
		const currentTotal = parseFloat(costTotal);

		// Update cart totals
		const newTotal = parseFloat(cartTotal) + 1;
		setCartTotal(parseFloat(newTotal));

		// Calculate new cost
		const newCost = currentTotal + price;
		setCostTotal(newCost);
		console.log(newCost);

		// Add new item to cart array
		setCart([
			...cart,
			{
				id: movie.key,
				price: parseFloat(movie.price),
				moviename: movie.moviename,
			},
		]);

		// Debugging console.log statements
		console.log(cartTotal);
		console.log(movie.key);
		const filteredArray = cart.filter((item) => item.id === movie.key);
		console.log(filteredArray);
		console.log(filteredArray.length);
	}
    const nowDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
	
	// Function to handle the checkout process
	async function handleBuy(fname, lname, email, cart, cartTotal) {
		const newOrder = {
			fname: fname,
			lname: lname,
			email: email,
			movies: cart,
			orderTotal: cartTotal,
			createdAt: nowDate,
		};

		// Concat adds it to the back of the array. 
		const createdOrder = await PostOrders(newOrder);
		setOrders(orders.concat(createdOrder));
	}

	return (
		<>
			{/* Render the movie list component with the current cart */}
			<MovieList cart={cart} />

			{/* Define the routes for the application */}
			<Routes>
				{/* Route to show the current cart */}
				<Route
					path="/cart"
					element={
						<ShowCart
							disabledButton=""
							cart={cart}
							costTotal={costTotal}
							setCart={setCart}
							setCostTotal={setCostTotal}
							orders={Orders}
							setOrders={setOrders}
						/>
					}
				/>
				{/* Route to handle movie shop page */}
				<Route
					path="/:key"
					element={
						<MovieShop movies={movies} addToCartTotal={addToCartTotal} />
					}
				/>


				{/* Default route for the Home page */}
				<Route
					path="/"
					element={
						<HomePage
							movies={movies}
							setMovies={setMovies}
							cartTotal={cartTotal}
							costTotal={costTotal}
							addToCartTotal={addToCartTotal}
							cart={cart}
						/>
					}
				/>

				{/* Route to handle the checkout process */}
				<Route
					path="/checkout"
					element={
						<Checkout
							cart={cart}
							costTotal={costTotal}
							setCart={setCart}
							setCostTotal={setCostTotal}
							handleBuy={handleBuy}
						/>
					}
				/>
				
				{/*Route to the Orders Component*/}
				<Route path="/Orders" element={<Orders orders={orders} setOrders={setOrders} removeOrder={removeOrder} fetchOrders={fetchOrders}/>}/>

			</Routes>
		</>
	);
}
