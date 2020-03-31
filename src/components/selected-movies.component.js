import React from 'react';

import MovieContent from './movie-content.component';

export default function SelectedMovies(props) {
    const [userSelection, setUserSelection] = [props.userSelection, props.setUserSelection];

    const selectionContent = (<MovieContent content={userSelection} pageNum={1} userSelection={userSelection} setUserSelection={setUserSelection} />);

    return (
        <div style={containerStyles}>
            <div style={resultStyles}>
                {selectionContent}
            </div>
            <button onClick={() => setUserSelection([])} style={buttonStyles} > Clear Selection </button>
        </div>
    );
}

//Styles
let containerStyles = {
    display: 'flex',
    flexDirection: 'column',
};

let resultStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'flex-start'
};

let buttonStyles = {
    width: '10em',
    margin: '1em',
};