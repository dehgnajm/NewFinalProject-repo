
import MovieCards from "./MovieCards";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Title from "./Title";

export default function HomePage({
	cartTotal,
	costTotal,
	addToCartTotal,
	removeFromCartTotal,
	cart,
	setCartTotal,
	setCostTotal,
	movies,
	
}) {

	// render the MovieCards component and pass the necessary props
	return (
		<div className="container-fluid ">
			<Title />
			<div className="row">
				<MovieCards
					cart={cart}
					costTotal={costTotal}
					setCostTotal={setCostTotal}
					movies={movies}
					cartTotal={cartTotal}
					setCartTotal={setCartTotal}
					addToCartTotal={addToCartTotal}
					removeFromCartTotal={removeFromCartTotal}
				/>
				
			</div>
		</div>
	);
}
