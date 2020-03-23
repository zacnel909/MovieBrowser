import React from 'react';
import Button from 'react-bootstrap/Button';

export default function MovieBrowser() {
    return (
        <div>
            <h1> Movie Browser </h1>
            <Button href="/SelectedMovies"> Selected Movies </Button>
            <Button href="/MovieDetails"> Movie Details </Button>
        </div>
    );
}