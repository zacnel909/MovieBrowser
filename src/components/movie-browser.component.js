import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function MovieBrowser(props) {
    const [ pageNumber, setPageNumber ] = useState(1);
    const [searchResults, setSearchResults] = useState([]);

    const { searchValue = "default"} = useParams();

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=7faebd98&s=' + searchValue + '&page=' + pageNumber)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                const success = data.Response === "True";
                setSearchResults(success ? data.Search : []);
            })
            .catch(error => console.log(error));
    });



    let results = searchResults ? searchResults.map(movie => (
        <a href={'https://www.imdb.com/title/' + movie.imdbID} style={movieStyles} >
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