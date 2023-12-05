import { Form, Col, Row, Container, Button} from "react-bootstrap";
import BackButtonComponent from "../../components/BackButtonComponent";
import {Link} from "react-router-dom"

const ForgotPassword = () => {
    return (
        <div className="forgot-password">
            <Container fluid>
        <Row>
            <Col lg="5"className="colum py-5 px-5">
                <BackButtonComponent />
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="title">
                        <h1>Lupa kata sandi?</h1>
                        <p>Masukan alamat email untuk mendapatkan keode OTP</p>
                        <img src="../public/kostku-hitam.png" alt="logo" />
                    </div>
                    <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label> Alamat Email</Form.Label>
                        <Form.Control type="email" placeholder="Masukkan Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Ulangi Alamat Email</Form.Label>
                        <Form.Control type="ulangiEmail" placeholder="Ulangi Alamat Email" />
                    </Form.Group>
                    </Form>
                    <Link to="/newpassword">
                        <Button variant="primary">Kirim</Button>
                    </Link>
                </div>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img src="../src/assets/img/login/2.svg" alt="logo" className='img-wrapper ' />
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default ForgotPassword