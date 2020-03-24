import React, { useState } from 'react';

import useSearchResults from "../hooks/use-search-results";

export default function MovieBrowser() {
    const [ pageNumber, setPageNumber ] = useState(1);

    let searchResults = useSearchResults(pageNumber);

    let results = searchResults ? searchResults.map(movie => (
        <a href={'https://www.imdb.com/title/' + movie.imdbID} style={movieStyles} key={movie.imdbID} >
            {movie.Title}
        </a>
    )) : (<h1> No Results </h1>);

    return (
        <div style={containerStyles}>

            <br />
            {results}
        </div>
    );
}

//Styles
let containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    textAlign: 'center'
};

let movieStyles = {
    flex: '20%',
    margin: '5em 0 5em 0'
};