import './App.css';
import {useState, useEffect} from 'react';
import Axios from "axios";
import setupPoster from './movie/Poster';

function App() 
{
	const [movies, setMovies] = useState();

	const getMovies = async() => {
		const response = await Axios.get("http://localhost:8080/api/v1/movies");

		const list = []
		
		// reviewIds is an object containing the review for the movie. need to parse out more to show.
		response.data.forEach((item, index) =>{
			list.push(
				<div key = {index}>
					{setupPoster(item)}
				</div>
			);
		})
		console.log(list)
		setMovies(list);
	}

	useEffect (() => {
		getMovies()
	}, [])

	return (
	<div className="App">
		{movies}
	</div>
	);
}

export default App;
