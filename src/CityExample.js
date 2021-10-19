import React from 'react';
import PropTypes from "prop-types";

function City({ name, picture, rating }) {
	return (
		<div>
			<h1>I like {name}</h1>
			<img src={picture} width={200} />
			<h4>{rating} / 5.0</h4>
		</div>
	);
}

function renderCity(city) {
	return <City key={city.id} name={city.name} picture={city.image} rating={city.rating}/>
}

const cityILike = [
	{
		id: 1,
		name: 'Seoul',
		image:
			'https://cdn.pixabay.com/photo/2017/06/19/10/24/fountain-2418852_1280.jpg',
		rating: 3.5
	},
	{
		id: 2,
		name: 'Busan',
		image:
			'https://i.picsum.photos/id/514/200/300.jpg?hmac=2SFAKrM0w5MkU7I_tQM9mq1m6POUDSPrTYu5tb5Sqlg',
		rating: 3.0
	},
	{
		id: 3,
		name: 'Jeju',
		image:
			'https://cdn.pixabay.com/photo/2021/09/09/06/46/jeju-island-6609597_1280.jpg',
		rating: 5.0
	},
];

City.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number
}

function App() { // function component
	return (
		<div>
			{console.log(cityILike.map(renderCity))}
			{cityILike.map(renderCity)}
		</div>
	);
}

export default App;
