// import React, { Component } from 'react'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// import Home from './Home';
// import Contact from './Contact';
// import About from './About';

// export default class NavbarComp extends Component {
//     render() {
//         return (
//             <Router>
//                 <div>

//                     <Navbar bg="dark" variant={"dark"} expand="lg">
//                         <Navbar.Brand href="#">Social</Navbar.Brand>
//                         <Navbar.Toggle aria-controls="navbarScroll" />
//                         <Navbar.Collapse id="navbarScroll">
//                             <Nav
//                                 className="mr-auto my-2 my-lg-0"
//                                 style={{ maxHeight: '100px' }}
//                                 navbarScroll
//                             >
//                                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
//                                 <Nav.Link as={Link} to="/about">About</Nav.Link>
//                                 <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

//                             </Nav>

//                         </Navbar.Collapse>
//                     </Navbar>
//                 </div>
//             </Router>

//         )
//     }
// }
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./social logo 1.png";
import { FaHome } from "react-icons/fa";
import {  FaBell } from "react-icons/fa";
import {  FaFacebookMessenger } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


function NavScrollExample() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img className="navlogo" src={Logo} /></Navbar.Brand>

        <NavDropdown title="Explore" id="navbarScrollingDropdown" className="explore">
          <NavDropdown.Item href="#action3">Machine learning</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Python </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>

        <Form className="d-flex" id="search">
          <Form.Control id="searchinput"
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Container className="navbaroption">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="navoption"  href="#action1"><FaHome/><br/>Home</Nav.Link>
              <Nav.Link className="navoption" href="#action2"><FaBell/><br/>Notification</Nav.Link>
              <Nav.Link className="navoption" href="#action2"><FaFacebookMessenger/><br/>Messages</Nav.Link>
              <Nav.Link className="navoption" href="#action2"><FaBookmark/><br/>Saved</Nav.Link>
              
            </Nav>
          <div className="navprofile">
            <FaUserAlt/>
          </div>
          </Navbar.Collapse>

        </Container>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
