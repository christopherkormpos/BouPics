import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" sticky="top" >
      <Container className='container'>
        <Navbar.Brand href="/">BouPics</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Portfolio" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/photography">Photography</NavDropdown.Item>
              <NavDropdown.Item href="/videography">Videography</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;