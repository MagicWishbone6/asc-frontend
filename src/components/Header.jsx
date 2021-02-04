import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header(props) {
    return (
        <Navbar 
        // bg="dark" 
        variant="dark"
        id="navbar">
            <Navbar.Brand 
            href="#home"
            id="navbarBrand"
            >After School Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;