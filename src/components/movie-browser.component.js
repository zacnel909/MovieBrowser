import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';

export default function MovieBrowser(props) {
    const [ pageNumber, setPageNumber ] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [searchSuccess, setSearchSuccess] = useState(false);

    const { searchValue } = useParams();
    const loadSearch = Boolean(props.default) ? props.default : searchValue;

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?apikey=7faebd98&s=' + loadSearch + '&page=' + pageNumber)
            .then(response => {
                setSearchSuccess(response.data.Response === "True");
                if (searchSuccess) {
                    setSearchResults(response.data.Search);
                }
            })
            .catch(error => console.log(error));
    });

    let movieStyles = {
        flex: '20%',
        margin: '5em 0 5em 0'
    };

    let results = searchSuccess ? searchResults.map(movie => (
        <a href={'https://www.imdb.com/title/' + movie.imdbID} style={movieStyles} >
            {movie.Title}
        </a>        
    )) : (<h1> No Results </h1>);

    let containerStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center'
    };

    return (
        <div style={containerStyles}>
            {results}
        </div>
    );
}