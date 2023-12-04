import { Form, Col, Row, Container, Button} from "react-bootstrap";


const ForgotPassword = () => {
    return (
        <div className="forgot-password">
            <Container fluid>
        <Row>
            <Col lg="5"className=" d-flex flex-column justify-content-center align-items-center  colum">
                <div className="title">
                    <h1>Lupa kata sandi?</h1>
                    <p>Masukan alamat email untuk mendapatkan keode OTP</p>
                    <img src="../public/kostku-hitam.png" alt="logo" />
                </div>
                <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label> Alamat Emails</Form.Label>
                    <Form.Control type="email" placeholder="Masukan Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Ulangi Alamat Email</Form.Label>
                    <Form.Control type="ulangaEmail" placeholder="Ulangi Alamat Email" />
                </Form.Group>
                </Form>
                <Button variant="primary">Dapatkan OTP</Button>
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