import React from 'react';

import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function ResultsPagination(props) {
    let buttons = [];
    const numPages = Math.ceil(props.numResults / 20);

    //Go to first page
    buttons.push(
        <button style={buttonStyles} onClick={() => props.setPageNum(1)} disabled={props.pageNum === 1} key="first">
            <FaAngleDoubleLeft />
        </button>
    );

    //Go to previous page
    buttons.push(
        <button style={buttonStyles} onClick={() => props.setPageNum(props.pageNum - 1)} disabled={props.pageNum === 1} key="prev">
            <FaAngleLeft />
        </button>
    );

    //Go to next page
    buttons.push(
        <button style={buttonStyles} onClick={() => props.setPageNum(props.pageNum + 1)} disabled={isLastPage(props.pageNum, props.numResults)} key="next">
            <FaAngleRight />
        </button>
    );

    //Go to last page
    buttons.push(
        <button style={buttonStyles} onClick={() => props.setPageNum(numPages)} disabled={isLastPage(props.pageNum, props.numResults)} key="last">
            <FaAngleDoubleRight />
        </button>
    );

    let disabledStyle = {
        display: 'none'
    };

    return (
        <div className="pagination-group" style={numPages > 1 ? groupStyles : disabledStyle}>
            {buttons}
        </div>
    );
}

//<button style={buttonStyles} onClick={() => props.setPageNum()} disabled={isLastPage(props.pageNum, props.numResults)} >Next</button>

function isLastPage(pageNum, numResults) {
    return pageNum * 20 >= numResults;
}

//Styles
let groupStyles = {
    textAlign: 'center',
    margin: '2em'
};

let buttonStyles = {
    width: '2em'
};