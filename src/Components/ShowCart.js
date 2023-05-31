// Importing required modules and components
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// Defining a functional component named ShowCart with props cart, setCart, costTotal, setCostTotal
export default function ShowCart({ cart, setCart, costTotal, setCostTotal}) {
	console.log("🚀 ~ file: ShowCart.js:9 ~ ShowCart ~ cart:", cart)
	// a function to remove items in the cart using index
	function removeFromCart(index) {
		// recalculating the total cost after removing an item from the cart
		const removeFromTotal = parseInt(cart[index].price);
		setCostTotal(costTotal - removeFromTotal);

		// update the state
		const cartRemove = [...cart];
		cartRemove.splice(index, 1);
		setCart(cartRemove);
	}

	// Rendering the component
	if(cart.length<1) {
		return(
			<>
			<div className="container border border-dark border-1 mt-5">
			<h1 className="bungee text-center">Movie List</h1>
			<div className="row">
				{/* Displaying the cart items in a table */}
				<Table striped>
					<thead>
						<tr>
							<th>#</th>
							<th>Product</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody className="text-center"><span className="display-3 bungee text-danger" >Still hesitate shopping? Go add some movies to your cart!</span></tbody>
					</Table>
					<Link to="/">
							<Button variant="outline-primary m-4">Continue Shopping </Button>
						</Link>
		</div>
		</div>
		</>
		)
	}
	return (
		<div className="container border border-dark border-1 mt-5">
			<h1 className="bungee text-center">FakeStore</h1>
			<div className="row">
				{/* Displaying the cart items in a table */}
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Product</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cart.map((cart, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{cart.prodname}</td>
								<td>${parseFloat(cart.price).toFixed(2)}</td>
								<td>
									{/* Adding a remove button for each item in the cart */}
									<Button
										variant="outline-danger"
										onClick={() => removeFromCart(index)}
									>
										<span className="bungee">X</span>
									</Button>{" "}
								</td>
							</tr>
						))}
						{/* Displaying the total cost of the items in the cart */}
						<tr>
							<td></td>
							<td className="alignRightTotal totalText">Total:</td>
							<td className="totalText"> ${costTotal.toFixed(2)}</td>
							<td></td>
						</tr>
					</tbody>
				</Table>
				<div className="row">
					<div className="col bungee text-center">
						{/* Adding checkout and continue shopping buttons */}
						<Link to="/checkout">
							<Button variant="primary m-4">Checkout</Button>
						</Link>
						
						<Link to="/">
							<Button variant="outline-primary m-4">Continue Shopping </Button>
						</Link>
						<Link to="/orders" className="text-decoration-none">
					<Button
						variant="outline-success"
						className=" bungee fw-bolder"
					>
						See Order History
					</Button>
				</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
