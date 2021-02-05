import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <Navbar 
        // bg="dark" 
        variant="dark"
        id="navbar">
            <Navbar.Brand 
            href="/home"
            id="navbarBrand"
            >After School Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse 
            id="basic-navbar-nav">
                <Nav 
                className="mr-auto">
                    <Link 
                    to="/home"
                    className="nav-link">
                        Home
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;