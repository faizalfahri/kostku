<<<<<<< HEAD
import { Navbar, Container, Nav,  } from "react-bootstrap"
import logo from './../assets/img/kostku-hitam.png'
import { Link } from "react-router-dom"
=======
import { useState } from "react";
import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import logo from "./../assets/img/kostku-hitam.png";
import { Link } from "react-router-dom";
>>>>>>> 21b181ff0b0960cf54d636622365da63b1c78a3e

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Saya ingin Masuk Sebagai</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Link to="/login" className="button btn text-light w-50">
            <i className="fa-solid fa-person-walking-arrow-right me-2"></i>
            Pencari Kost
          </Link>
          <Link to="/login" className="ms-3 button btn text-light w-50">
            <i className="fa-solid fa-house me-2"></i>
            Pemilik Kost
          </Link>
        </Modal.Body>
      </Modal>
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
              <Nav.Link href="#kost" className="nav-link">
                Cari Kost
              </Nav.Link>
              <Nav.Link href="#tentang" className="nav-link">
                Tentang Kami
              </Nav.Link>
              <Button
                variant="primary"
                onClick={handleShow}
                className="ms-3 button btn text-light"
              >
                Masuk
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
