import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';

export default function MyNavbar() {

    return (
        <Navbar expand="lg" style={{
            width: '100%'
        }}>
            <Navbar.Brand href="/">Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Browse</Nav.Link>
                    <Nav.Link href="/SelectedMovies">Your Selection</Nav.Link>
                </Nav>
                <Form inline autocomplete="off" style={{ position: 'relative' }}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        value={''}
                        className="mr-sm-2" id="nav-search"
                        style={{
                            width: '12em'
                        }}
                    />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}