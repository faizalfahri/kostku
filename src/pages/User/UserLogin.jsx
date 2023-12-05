import { Form, Col, Row, Container, Button } from "react-bootstrap";
import BackButtonComponent from "../../components/BackButtonComponent";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="user-login">
      <Container fluid>
        <Row>
          <Col lg="5" className="colum py-5 px-5">
            <BackButtonComponent />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="title">
                <h2>Login Pencari Kos</h2>
                <p>Ayo cari kos-mu sekarang!</p>
                <img src="../public/kostku-hitam.png" alt="logo" />
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Kata Sandi</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan Kata Sandi"
                  />
                </Form.Group>
              </Form>
              <div className="link">
                <Link to="/forgotpassword" className="text-decoration-none my-2">
                  Lupa Password?
                </Link>
              </div>
              <Button variant="primary">Masuk</Button>
              <div className="d-flex flex-column justify-content-center align-items-center mt-2 info">
                <p>
                  Belum punya akun Kostku?{" "}
                  <Link to="/register" className="text-decoration-none">
                    Daftar Sekarang
                  </Link>
                </p>
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="../src/assets/img/login/1.svg"
              alt="logo"
              className="img-wrapper "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserLogin;
