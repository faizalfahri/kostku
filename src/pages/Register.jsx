import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackButtonComponent from "../components/BackButtonComponent";

const Register = () => {
  return (
    <div className="register">
      <Container fluid>
        <Row>
          <Col lg="5" className="colum py-5 px-5">
            <BackButtonComponent />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="title">
                <h2>Buat akun sekarang</h2>
                <p>Dapatakan semua fitur Kostku</p>
                <img src="../public/kostku-hitam.png" alt="logo" />
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="Nama" placeholder="Nama Panggilan" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="email" placeholder="Masukkan Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="katasandi" placeholder="Kata sandi" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control
                    type="konfimasiSandi"
                    placeholder="Konfirmasi Kata Sandi"
                  />
                </Form.Group>
              </Form>
              <Link to="/otp">
                <Button variant="primary">Buat Akun</Button>
              </Link>
              <div className="d-flex justify-content-center mt-2 info">
                <p>
                  Kamu punya akun?{" "}
                  <Link to="/userlogin" className="text-decoration-none">
                    Masuk Sekarang
                  </Link>
                </p>
              </div>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <img
              src="../src/assets/img/login/5.svg"
              alt="logo"
              className="img-wrapper "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
