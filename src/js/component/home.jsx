import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	const item = [
		{
			title: "Card title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur est sed voluptate, fuga temporibus necessitatibus deleniti rerum harum ducimus quibusdam, quas repellat voluptas laudantium, unde vero architecto sequi illum dolores",
			image: "https://img.freepik.com/foto-gratis/fondo-abstracto-textura_1258-30553.jpg",
			buttonText: "Find Out More!",
		},
		{
			title: "Card title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur est sed voluptate, fuga temporibus necessitatibus deleniti rerum harum ducimus quibusdam, quas repellat voluptas laudantium, unde vero.",
			image: "https://img.freepik.com/foto-gratis/fondo-abstracto-textura_1258-30553.jpg",
			buttonText: "View",
		},
		{
			title: "Card title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur est sed voluptate, fuga temporibus necessitatibus deleniti rerum harum ducimus quibusdam, quas repellat voluptas laudantium, unde vero architecto sequi illum dolor",
			image: "https://img.freepik.com/foto-gratis/fondo-abstracto-textura_1258-30553.jpg",
			buttonText: "Find Out More!",
		},
		{
			title: "Card title",
			description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur est sed voluptate, fuga temporibus necessitatibus deleniti rerum harum ducimus quibusdam, quas repellat voluptas laudantium, unde vero.",
			image: "https://img.freepik.com/foto-gratis/fondo-abstracto-textura_1258-30553.jpg",
			buttonText: "View",
		},
	];

	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{item.map((card, index) => (
						<div key={index} className="col-lg-3 col-md-6 col-xs-12 mb-4">
							<Card {...card} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
