import React from 'react';

import Button from 'react-bootstrap/Button';

export default function MovieDetails() {
    return (
        <div>
            <h1> Movie Details </h1>
            <Button href="/"> Movie Browser </Button>
            <Button href="/SelectedMovies"> Selected Movies </Button>
        </div>
    );
}