import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';

export default function MovieBrowser(props) {
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ searchResults, setSearchResults ] = useState([]);

    const { searchValue } = useParams();
    const loadSearch = Boolean(props.default) ? props.default : searchValue;

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?apikey=7faebd98&s='+ loadSearch + '&page=' + pageNumber)
            .then(response => {
                setSearchResults(response.data.Search)
            })
            .catch(error => console.log(error));
    });

    let movieStyles = {
        flexBasis: '20%'
    };

    let results = searchResults.map(movie => (
        <a href={'https://www.imdb.com/title/' + movie.imdbID} style={movieStyles} >
            {movie.Title}
        </a>        
    ));

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