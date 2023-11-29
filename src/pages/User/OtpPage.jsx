import { Form, Col, Row, Container, Button} from "react-bootstrap";
import  { useState } from 'react';
import OtpInput from 'react-otp-input';

const OtpPage = () => {
    const [otp, setOtp] = useState('');
    return (
        <div className="otp">
            <Container fluid>
                <Row>
                    <Col lg="5"className=" d-flex flex-column justify-content-center align-items-center  colum">
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
                    Type="number"
                    inputMode="numeric"
                    />
                        </Form>
                        <Button variant="primary">Kirim</Button>
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