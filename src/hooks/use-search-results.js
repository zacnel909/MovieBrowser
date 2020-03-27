import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function useSearchResults(pageNum) {
    const [searchResults, setSearchResults] = useState([]);
    const [numResults, setNumResults] = useState(0);
    const searchValue = useSearchQuery();

    useEffect(
        () => {
            fetch('http://www.omdbapi.com/?apikey=7faebd98&s=' + searchValue + '&page=' + pageNum)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    const success = data.Response === "True";
                    setNumResults(success ? data.totalResults : 0);
                    setSearchResults(success ? data.Search : []);
                })
                .catch(error => console.log(error));
        },
        [pageNum]
    );

    return [searchResults, numResults];
}

function useSearchQuery() {
    let searchParams = new URLSearchParams(useLocation().search);
    return searchParams.get("s");
}