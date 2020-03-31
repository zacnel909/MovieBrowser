import React, { useState } from 'react';

import MovieContent from './movie-content.component';
import ResultsPagination from './results-pagination.component';

import useSearchResults from "../hooks/use-search-results";

export default function MovieBrowser(props) {
    const [pageNum, setPageNum] = useState(1);
    const [searchResults, numResults, finished, success] = useSearchResults(pageNum);
    const [userSelection, setUserSelection] = [props.userSelection, props.setUserSelection];

    let browserContent;

    if (finished && success) {
        browserContent = (<MovieContent content={searchResults} pageNum={pageNum} userSelection={userSelection} setUserSelection={setUserSelection} />);
    } else if (finished) {
        browserContent = (<h1> No Results </h1>);
    }

    return (
        <div className="browser-component" style={containerStyles}>
            <div className="results-container" style={resultStyles}>
                {browserContent}
            </div>
            <ResultsPagination setPageNum={setPageNum} pageNum={pageNum} numResults={numResults} />
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