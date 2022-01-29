import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import About from "../Pages/About";
class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        </Navbar.Collapse>
                    
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                </Routes>
            </div>
            <Outlet />
            </Router>
            
        );
    }
}

export default NavbarComp;
