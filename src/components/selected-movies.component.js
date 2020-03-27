import React from 'react';

const localStorage = window.localStorage;

export default function SelectedMovies() {
    const selection = JSON.parse(localStorage['userSelection']);
    const titles = selection.map((title, index) => (        
        <span key={title + index}> {title} </span>
    ));

    return (
        <div style={testStyles}>
            {titles}
        </div>
    );
}

let testStyles = {
    display: 'flex',
    flexDirection: 'column'
};