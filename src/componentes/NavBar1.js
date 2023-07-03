import Nav from 'E:/coder/ReactJs/ReactTest/prueba/node_modules/react-bootstrap/Nav'
import { BsFillCartFill } from "E:/coder/ReactJs/ReactTest/prueba/node_modules/react-icons/bs";

function NavBar1() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3"><BsFillCartFill/></Nav.Link>
      </Nav.Item>  

    </Nav>
  );
}

export default NavBar1;