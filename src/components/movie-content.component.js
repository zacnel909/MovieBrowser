import React from 'react';

import AddMovieButton from './add-movie-button.component';

export default function MovieContent(props) {
    const [userSelection, setUserSelection] = [props.userSelection, props.setUserSelection];

    return props.content.map((movie, index) => (
        <div  style={movieStyles} key={"posterAnchor" + movie.imdbID + index + props.pageNum} >
            <img src={movie.Poster === 'N/A' ? defaultPoster : movie.Poster} alt={movie.Title} style={posterStyles} />
            <a target="_blank" rel="noopener noreferrer" href={'https://www.imdb.com/title/' + movie.imdbID} className="caption-text" style={captionTextStyles} >{movie.Title}</a>
            <AddMovieButton userSelection={userSelection} setUserSelection={setUserSelection} movie={movie} />
        </div>
    ));
}

//static variables
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