import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';

function searchSubmit(event, searchValue) {
    window.location = "/search/" + searchValue;
    event.preventDefault();
}

function MyNavbar() {
    const [searchValue, setSearchValue] = useState('');

    let searchStyles = {
        width: '16em'
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Browse</Nav.Link>
                    <Nav.Link href="/SelectedMovies">Your Selection</Nav.Link>
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
                <Button href={"/search/" + searchValue} variant="dark" className="search-button">
                    <FaSearch />
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;