import React from 'react';
import Movie from './Movie';

function Movies(props) {
    const {movies} = props
    return (
        <div className="movies">
            {movies.map(item => (
                <Movie key={item.imdbID} {...item} />
            ))}
        </div>
    );
}

export default Movies;