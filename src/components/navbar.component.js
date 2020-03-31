import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { FaSearch } from 'react-icons/fa';

export default function MyNavbar(props) {
    const [searchValue, setSearchValue] = useState('');
    const userSelection = props.userSelection;

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Browse</Nav.Link>
                    <Nav.Link href="/SelectedMovies">
                        Your Selection
                        <Badge pill style={badgeStyles}> {userSelection.length} </Badge>
                    </Nav.Link>
                </Nav>
                <Form inline autoComplete="off" onSubmit={event => searchSubmit(event, searchValue)}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2" id="nav-search"
                        style={searchStyles}
                        onChange={event => setSearchValue(event.target.value)}
                    />
                </Form>
                <Button href={"/search?s=" + searchValue} variant="dark" className="search-button">
                    <FaSearch />
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

//helpers
function searchSubmit(event, searchValue) {
    window.location = "/search?s=" + searchValue;
    event.preventDefault();
}

//Styles
let searchStyles = {
    width: '16em'
};

let badgeStyles = {
    position: 'relative',
    bottom: '1em',
    backgroundColor: '#dc3545'
};

//<Button onClick={() => setUserSelection('')} > clear </Button>
//