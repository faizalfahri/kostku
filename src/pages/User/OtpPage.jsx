import { Form, Col, Row, Container, Button} from "react-bootstrap";
import  { useState } from 'react';
import OtpInput from 'react-otp-input';
import BackButtonComponent from "../../components/BackButtonComponent";
import {Link} from "react-router-dom"

const OtpPage = () => {
    const [otp, setOtp] = useState('');
    return (
        <div className="otp">
            <Container fluid>
                <Row>
                    <Col lg="5"className="colum px-5 py-5">
                        <BackButtonComponent />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="title">
                                <h1>Masukan kode OTP</h1>
                                <p></p>
                                <img src="../public/kostku-hitam.png" alt="logo" />
                            </div>
                            <Form>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </Form>
                            <Link to="/userlogin">
                                <Button variant="primary">Kirim</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center'>
                            <img src="../src/assets/img/login/3.svg" alt="logo" className='img-wrapper ' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OtpPage