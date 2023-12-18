import { Navbar, Container, Nav,} from "react-bootstrap";
// import { Link } from "react-router-dom";

const Navbar3Component = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary custom-nav-3">
            <Container>
            <Navbar.Brand href="#home" className="fw-bold">Profile</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="#tentang" className="nav-link-3 fw-bold">
                    Tentang Kami
                </Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default Navbar3Component