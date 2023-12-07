
import { Navbar, Container, Nav, } from "react-bootstrap";

const Navbar2Component = () => {


    return (
        <div >
        <Navbar expand="lg" className="custom-nav">
            <Container>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link className="nav-link" onClick={() => window.history.back()}>
                    Kembali
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default Navbar2Component