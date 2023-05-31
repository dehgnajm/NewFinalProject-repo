//This page shows the title of my Home page
import React from "react";
import { Container } from "react-bootstrap";


export default function Title() {
	return (
		<Container className="container-fluid">
			{/* The main heading of the page */}
			<h1 className="display-1 pageTitle text-center fw-bold">
				Welcome to <span className="bungee">My Movie App</span>
			</h1>
			{/* The sub-heading of the page */}
			<h4 className="display-5 pageTitle text-center">
				Where you can find every movie of your interest and purchase at a low cost.
			</h4>
		</Container>
	);
}
