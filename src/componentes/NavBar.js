import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';

function NavBar() {
  return (
    <>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Mi Joyería</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'./'}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={'/Productos'}>Productos</Nav.Link>
            <Nav.Link as={Link} to={'/category/DeModa'}>De Moda</Nav.Link>
            <Nav.Link as={Link} to={'/category/Sencillo'}>Sencillo</Nav.Link>
            <Nav.Link as={Link} to={'/category/Clasico'}>Clásico</Nav.Link>
            
          </Nav>  
          <Nav.Item><CardWidget/></Nav.Item>
            
          
        </Container>
      </Navbar>
    </>
  );
}


export default NavBar;