import { Form, Col, Row, Container, Button} from "react-bootstrap";

const UserLogin = () => {
  return (
    <div className="user-login">
      <Container fluid>
        <Row>
          <Col lg="5"className=" d-flex flex-column justify-content-center align-items-center bg-white colum">
            <div className="title">
                <h2>Login Pencari Kos</h2>
                <p>Ayo cari kos-mu sekarang!</p>
                <img src="../public/kostku-hitam.png" alt="logo" />
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <div className="link">
            <a href="" className='text-decoration-none my-2'>Forgot Password?</a>
            </div>
            <Button variant="primary">login</Button>
            <div className='d-flex justify-content-center mt-2 info'>
                <p>Belum punya akun Kostku? <a href="" className='text-decoration-none '>Daftar Sekarang</a></p>
            </div>
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img src="../src/assets/img/login/1.svg" alt="logo" className='img-wrapper ' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserLogin;
