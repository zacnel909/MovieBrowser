import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function useSearchResults(pageNum) {
    const [searchResults, setSearchResults] = useState([]);
    const { searchValue = "default" } = useParams();

    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=7faebd98&s=' + searchValue + '&page=' + pageNum)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                const success = data.Response === "True";
                setSearchResults(success ? data.Search : []);
            })
            .catch(error => console.log(error));
    });

    return searchResults;
}