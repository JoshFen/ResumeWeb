import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {


    return (
        <section>
            <Navbar fixed="top" style={{backgroundColor:  'var(--background2)'}}>
                <Container>
                <Navbar.Brand className='custom-navbar-items' href="#home"></Navbar.Brand>
                    <Nav className='ml-auto '>
                        <Nav.Link className="custom-navbar-items" href="#resume">Download CV</Nav.Link>
                        <Nav.Link className="custom-navbar-items" href="#about">About</Nav.Link>
                        <Nav.Link className="custom-navbar-items" href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="custom-navbar-items" href="#contact-me">Contact Me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </section>
    );
}