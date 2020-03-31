import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function useSearchResults(pageNum) {
    const [searchResults, setSearchResults] = useState([]);
    const [numResults, setNumResults] = useState(0);
    const [finished, setFinished] = useState(false);
    const [success, setSuccess] = useState(false);
    const searchValue = useSearchQuery();

    useEffect(
        () => {
            const url = 'http://www.omdbapi.com/?apikey=7faebd98&s=' + searchValue + '&page=' + pageNum;
            let didCancel = false;

            fetch(url)
                .then(response => {
                    return response.json();
                }).then(data => {
                const success = data.Response === 'True';
                    const searchResults = success ? data.Search : [];
                    if (!didCancel) {
                        setNumResults(success ? data.totalResults : 0);
                        setSearchResults(searchResults);
                        setSuccess(success);
                        setFinished(true);
                    }
                }).catch(error => console.log(error));

            return () => didCancel = true;
        },
        [pageNum, searchValue]
    );

    return [ searchResults, numResults, finished, success ];
}

function useSearchQuery() {
    let searchParams = new URLSearchParams(useLocation().search);
    return searchParams.get("s");
}