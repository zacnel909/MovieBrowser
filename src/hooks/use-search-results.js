import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function useSearchResults(pageNum) {
    const [searchResults, setSearchResults] = useState([]);
    const [numResults, setNumResults] = useState(0);
    const searchValue = useSearchQuery();

    useEffect(
        () => {
            const url = 'http://www.omdbapi.com/?apikey=7faebd98&s=' + searchValue + '&page=';
            const [pageOne, pageTwo] = apiPages(pageNum);

            Promise.all([fetch(url + pageOne), fetch(url + pageTwo)])
                .then(([res1, res2]) => {
                    return Promise.all([res1.json(), res2.json()]);
                }).then(([data1, data2]) => {
                    const [success1, success2] = [data1.Response === 'True', data2.Response === 'True'];
                    const [search1, search2] = [success1 ? data1.Search : [], success2 ? data2.Search : []];
                    setNumResults(success1 ? data1.totalResults : 0);
                    setSearchResults(search1.concat(search2));
                }).catch(error => console.log(error));


            //fetch('http://www.omdbapi.com/?apikey=7faebd98&s=' + searchValue + '&page=' + 1)
            //    .then((response) => {
            //        return response.json();
            //    })
            //    .then(data => {
            //        const success = data.Response === "True";
            //        setNumResults(success ? data.totalResults : 0);
            //        setSearchResults(success ? data.Search : []);
            //    })
            //    .catch(error => console.log(error));
        },
        [pageNum]
    );

    return [searchResults, numResults];
}

function useSearchQuery() {
    let searchParams = new URLSearchParams(useLocation().search);
    return searchParams.get("s");
}

function apiPages(pageNum) {
    const pageTwo = pageNum * 2;
    const pageOne = pageTwo - 1;
    return [pageOne, pageTwo];
}