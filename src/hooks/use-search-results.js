import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const localStorage = window.localStorage;

export default function useSearchResults(pageNum) {
    const [searchResults, setSearchResults] = useState([]);
    const [numResults, setNumResults] = useState(0);
    const searchValue = useSearchQuery();

    useEffect(
        () => {
            const url = 'http://www.omdbapi.com/?apikey=7faebd98&s=' + searchValue + '&page=';
            const [pageOne, pageTwo] = apiPages(pageNum);

            Promise.all([fetch(url + pageOne), fetch(url + pageTwo)])
                .then(([res1, res2]) => {
                    return Promise.all([res1.json(), res2.json()]);
                }).then(([data1, data2]) => {
                    const [success1, success2] = [data1.Response === 'True', data2.Response === 'True'];
                    const [search1, search2] = [success1 ? data1.Search : [], success2 ? data2.Search : []];
                    setNumResults(success1 ? data1.totalResults : 0);

                    setSearchResults(success1 ? search1.concat(search2).map((movie, index) => (
                            <div target="_blank" rel="noopener noreferrer" href={'https://www.imdb.com/title/' + movie.imdbID} style={movieStyles} key={"posterAnchor" + movie.imdbID + index + pageNum} >
                                <img onClick={() => addMovie(movie.Title)} src={movie.Poster === 'N/A' ? defaultPoster : movie.Poster} alt={movie.Title} style={posterStyles} />
                                <span className="caption-text" style={captionTextStyles} >{movie.Title}</span>
                            </div>
                    )) : (<h1> No Results </h1>));
                }).catch(error => console.log(error));
        },
        [pageNum]
    );

    return [searchResults, numResults];
}

function addMovie(title) {
    if (!localStorage['userSelection']) {
        localStorage['userSelection'] = JSON.stringify([]);
    }

    let selectedMovies = JSON.parse(localStorage['userSelection']);

    if (!selectedMovies.includes(title)) {
        selectedMovies.push(title);
        localStorage['userSelection'] =  JSON.stringify(selectedMovies);
    }
}

function useSearchQuery() {
    let searchParams = new URLSearchParams(useLocation().search);
    return searchParams.get("s");
}

function apiPages(pageNum) {
    const pageTwo = pageNum * 2;
    const pageOne = pageTwo - 1;
    return [pageOne, pageTwo];
}

const defaultPoster = 'https://www.reelviews.net/resources/img/default_poster.jpg';

let movieStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20%',
};

let posterStyles = {
    maxWidth: '80%',
    maxHeight: '80%',
    margin: '0 auto 0 auto'
};

let captionTextStyles = {
    maxWidth: '80%',
    color: 'black',
    margin: '0 auto 0 auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};