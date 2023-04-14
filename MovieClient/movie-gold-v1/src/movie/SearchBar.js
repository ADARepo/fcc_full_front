import React from 'react';

function SearchBar(props) {
    

    const handleInputChange = (event) => {
        props.setQuery(event.target.value);
    }

    return (
        <div>
            <input type="text" value={props.query} onChange={handleInputChange} />
            {/* <button onClick={search}>Search</button> */}
        </div>
    );
}

export default SearchBar;