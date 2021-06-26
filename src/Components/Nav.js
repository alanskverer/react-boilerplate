import React from 'react'
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import logo from './Pictures/logo.png'


export default function BootNav() {

    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand href="/">Home assigment</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/todo">Todo List</Nav.Link>
                    </Nav>
                    {/* <Form inline>
                        <img src={logo} style={{ maxHeight: "80px" }}></img>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}