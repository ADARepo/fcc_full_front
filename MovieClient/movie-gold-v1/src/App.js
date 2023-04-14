import './App.css';
import {useState, useEffect} from 'react';
import Axios from "axios";
import setupPoster from './movie/Poster';
import SearchBar from './movie/SearchBar';

function App() 
{
	const [movies, setMovies] = useState();
	const [query, setQuery] = useState('');

	const getMovies = async() => {
		const response = await Axios.get("http://localhost:8080/api/v1/movies/");

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

	const search = async(query) => {
		console.log(query);
		setQuery(query);
		console.log("http://localhost:8080/api/v1/movies/" + query);
        const response = await Axios.get("http://localhost:8080/api/v1/movies/" + query);

		console.log(response);
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
		<div className="background-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<SearchBar query={query} setQuery={search}/>
			<div className="search-area" >	
				{movies}
			</div>
		</div>
	);
}

export default App;
