import React from 'react';

import Button from 'react-bootstrap/Button';

export default function SelectedMovies() {
    return (
        <div>
            <h1> Selected Movies </h1>
            <Button href="/"> Movie Browser </Button>
            <Button href="/MovieDetails"> Movie Details </Button>
        </div>
    );
}