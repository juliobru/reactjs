import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CardWidget from './CardWidget';

function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mi Joyería</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Buscar Fácil" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bisutería</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Oro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Plata</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Acero Inox
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Item><CardWidget/></Nav.Item>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;