import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetIconReact from './CartWidgetIconReact';

function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="navbar-gradient">
      <Container>
              <Navbar.Brand href="#home" className='logo-left'>
            <img src="../logo.png" alt="logo" style={{width:"7rem", height:"7 rem"} } />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Nike">Nike</NavDropdown.Item>
                          <NavDropdown.Item href="#Adidas">Adidas</NavDropdown.Item>
                          <NavDropdown.Item href="#Puma">Puma</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetIconReact/>
     
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;