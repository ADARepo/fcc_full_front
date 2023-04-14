import {useState, useEffect} from 'react';

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = () => {
        // Perform search functionality with query
        console.log(`Search for "${query}"`);
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;