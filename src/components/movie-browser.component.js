import React, { useState } from 'react';

//import { FaFolderPlus } from 'react-icons/fa';

import ResultsPagination from './results-pagination.component';
import useSearchResults from "../hooks/use-search-results";

export default function MovieBrowser() {
    const [pageNum, setPageNum] = useState(1);

    const [browserContent, numResults] = useSearchResults(pageNum);   

    return (
        <div className="browser-component" style={containerStyles}>
            <div className="results-container" style={resultStyles}>
                {browserContent}
            </div>
            <ResultsPagination setPageNum={page => setPageNum(page)} pageNum={pageNum} numResults={numResults} />
        </div>
    );
}

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