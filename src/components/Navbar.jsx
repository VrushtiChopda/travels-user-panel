import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* <Navbar.Brand href="/" className='logo fs-3'>TRAVELS</Navbar.Brand> */}
                    <h3 className='main-color'>TRAVELS</h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="destination">Destination</Nav.Link>
                            <Nav.Link href="tours">Tours</Nav.Link>
                            <Nav.Link href="about">About us</Nav.Link>
                            <Nav.Link href="contact">Contact us</Nav.Link>
                        </Nav>
                        <Nav>
                            <button className='btn' style={{ background: 'rgb(159, 224, 203)' }}>Book now</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
