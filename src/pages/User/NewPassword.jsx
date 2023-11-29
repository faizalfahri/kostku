import { Form, Col, Row, Container, Button} from "react-bootstrap";
export const NewPassword = () => {
    return (
    <div className="new-password">
        <Container fluid>
            <Row>
                <Col lg="5"className=" d-flex flex-column justify-content-center align-items-center  colum">
                    <div className="title">
                        <h1>Masukan kata sandi baru</h1>
                        <p>Tahap terakhir untuk merubah kata sandimu</p>
                        <img src="../public/kostku-hitam.png" alt="logo" />
                    </div>
                    <Form>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="confirm-password" placeholder=" Confirm Password" />
                    </Form.Group>
                    </Form>
                    <Button variant="primary">Kirim</Button>
                </Col>
                <Col className='d-flex flex-column justify-content-center align-items-center'>
                        <img src="../src/assets/img/login/4.svg" alt="logo" className='img-wrapper ' />
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default NewPassword