import { Form, Col, Row, Container, Button} from "react-bootstrap";


const Register = () => {
  return (
    <div className="register">
      <Container fluid>
        <Row>
          <Col lg="5"className=" d-flex flex-column justify-content-center align-items-center colum">
            <div className="title">
                <h2>Buat akun sekarang</h2>
                <p>Dapatakan semua fitur Kostku</p>
                <img src="../public/kostku-hitam.png" alt="logo" />
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="Nama" placeholder="Nama Pannggilan" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Masukan Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="katasandi" placeholder="Katasandi" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="konfimasiSandi" placeholder="Konfirmasi Kata Sandi" />
              </Form.Group>
            </Form>
            <Button variant="primary">Buat Akun</Button>
            <div className='d-flex justify-content-center mt-2 info'>
                <p>Kamu punya akun? <a href="" className='text-decoration-none '>Masuk Sekarang</a></p>
            </div>
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img src="../src/assets/img/login/5.svg" alt="logo" className='img-wrapper ' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register