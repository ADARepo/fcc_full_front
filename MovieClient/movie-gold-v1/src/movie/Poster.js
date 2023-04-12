import React from 'react';

function setupPoster(movie)
{
    const posterUrl = movie.poster;

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={posterUrl} alt="Poster image" />
        </div>
    );
}

export default setupPoster;