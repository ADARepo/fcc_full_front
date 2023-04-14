import React from 'react';

function setupPoster(movie)
{
    const posterUrl = movie.poster;

    return (
        <div style ={{margin: '20px'}}>
            <img src={posterUrl} style={{width: '200px', height: 'auto'}} alt="Poster image" />
        </div>
    );
}

export default setupPoster;