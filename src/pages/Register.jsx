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
                <h3>Buat akun sekarang</h3>
                <img src="../public/kostku-hitam.png" alt="logo" />
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" id="nama" placeholder="Nama Lengkap Sesuai KTP" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="email" id="email" placeholder="Masukkan Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="number" id="telp" placeholder="Masukkan No. Telepon" required />
                </Form.Group>
                <Form.Select aria-label="Default select example" className="mb-3" required >
                  <option>Ingin Mendaftar Sebagai</option>
                  <option value="1">Pencari Kost</option>
                  <option value="2">Pemilik Kost</option>
                </Form.Select>
                <Form.Group className="mb-3">
                  <Form.Control type="password" id="password" placeholder="Masukkan Kata sandi" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control
                    type="password"
                    id="conf_password"
                    placeholder="Konfirmasi Kata Sandi"
                    required
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
