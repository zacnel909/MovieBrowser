import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

export default function AddMovieButton(props) {
    const selected = Boolean(props.userSelection.filter(movie => movie.Title === props.movie.Title).length);

    const Icon = selected ? FaTimes : FaPlus;
    const setSelection = () => props.setUserSelection(selected ? props.userSelection.filter(movie => movie.Title != props.movie.Title) : [props.movie, ...props.userSelection]);

    let buttonStyles = {
        position: 'relative',
        height: '2em',
        width: '2em',
        left: '80%',
        color: '#fff',
        backgroundColor: selected ? '#dc3545' : '#28a745',
        border: 'none'
    };

    return (
        <button onClick={() => setSelection()} style={buttonStyles} >
            <Icon />
        </button>
    );
}