import { Navbar, Container, Nav, Button } from "react-bootstrap"
import logo from './../assets/img/kostku-hitam.png'

const NavbarComponent = () => {
  return <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo"
            alt="kostku logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#kost" className="nav-link">Cari Kost</Nav.Link>
            <Nav.Link href="#tentang" className="nav-link">Tentang Kami</Nav.Link>
            <Button className="ms-3 button">Masuk</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>;
};

export default NavbarComponent;
