import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIconReact from './CartWidgetIconReact';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="navbar-gradient">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src="../logo.png" alt="logo" style={{ width: "7rem", height: "7rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/marca/nike">Nike</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/marca/adidas">Adidas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/marca/puma">Puma</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/marca/new balance">New Balance</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link as={NavLink} to="/cart">
          <CartWidgetIconReact />
        </Nav.Link>
        
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;
