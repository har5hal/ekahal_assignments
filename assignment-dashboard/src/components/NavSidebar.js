import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarContainer() {
    return (
        <Navbar bg="light">
            <Container fluid>
                <Navbar.Brand href="#">Ekahal</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarContainer;