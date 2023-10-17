import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {


    return (
        <>
        <Navbar fixed="top">
            <Container>
            <Navbar.Brand className='custom-navbar-items' href="#home">Joshua Fentress</Navbar.Brand>
                <Nav className='ml-auto '>
                    <Nav.Link className="custom-navbar-items" href="#about-me">About Me</Nav.Link>
                    <Nav.Link className="custom-navbar-items" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="custom-navbar-items" href="#resume">Resume</Nav.Link>
                    <Nav.Link className="custom-navbar-items" href="#contact-me">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}