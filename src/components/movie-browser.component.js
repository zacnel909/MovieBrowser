import React, { useState } from 'react';

//import { FaFolderPlus } from 'react-icons/fa';

import ResultsPagination from './results-pagination.component';
import useSearchResults from "../hooks/use-search-results";


export default function MovieBrowser() {
    const [pageNum, setPageNum] = useState(1);

    const [searchResults, numResults] = useSearchResults(pageNum);   

    let browserContent = searchResults.length ? searchResults.map((movie, index) => (
        <a target="_blank" rel="noopener noreferrer" href={'https://www.imdb.com/title/' + movie.imdbID} style={movieStyles} key={movie.imdbID + index + pageNum} >
            <img src={movie.Poster === 'N/A' ? defaultPoster : movie.Poster} alt={movie.Title} key={'img' + movie.imdbID + index + pageNum} style={posterStyles} />
            <span className="caption-text" style={captionTextStyles} >{movie.Title}</span>
        </a>
    )) : (<h1> No Results </h1>);

    return (
        <div className="browser-component" style={containerStyles}>
            <div className="results-container" style={resultStyles}>
                {browserContent}
            </div>
            <ResultsPagination setPageNum={page => setPageNum(page)} pageNum={pageNum} numResults={numResults} />
        </div>
    );
}

//static variables
const defaultPoster = 'https://www.reelviews.net/resources/img/default_poster.jpg';

//Styles
let containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '92%'
};

let resultStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'flex-start'
};

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
    margin: '0 auto 0 auto'
};