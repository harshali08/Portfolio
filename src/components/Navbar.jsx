

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/Navbar.css'

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-tertiary navbar fixed-top mb-5"  >
      <Container >
        <Navbar.Brand href="/" className='nav-logo'>Harshali</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" style={{ backgroundColor: "white",fontWeight:"bolder"}} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;