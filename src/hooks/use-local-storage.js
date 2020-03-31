import { useState, useEffect } from 'react';

const localStorage = window.localStorage;

//TODO: add logic for changing keys
export default function useLocalStorage(key, initialValue = '') {
    const [value, setValue] = useState(localStorage[key] ? JSON.parse(localStorage[key]) : initialValue);   

    useEffect(
        () => {
            localStorage[key] = JSON.stringify(value);
        },
        [value, key]
    );

    return [value, setValue];
}