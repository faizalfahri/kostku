import { Container, Row, Col, Button, Card, Form, Modal, Accordion} from "react-bootstrap"
import BackButton2Component from "../../components/BackButton2Component";
import { useState } from 'react';
import { Link } from "react-router-dom";


const PengaturanPage = () => {

        const [show, setShow] = useState(false);
        const [showLogoutModal, setShowLogoutModal] = useState(false);
        
        const handleClose = () => {
            setShow(false);
            setShowLogoutModal(false);
        }
        const handleShow = () => setShow(true);
        const handleShowLogoutModal = () => setShowLogoutModal(true);

        const handleLogout = () => {
        console.log('Melakukan logout...');
        window.location.href = '/';
        handleClose();
    };
    return (
    <div className="profile pengaturan">
        <Container fluid>
                <Row>
                    <Col className="col-4 colum py-5 px-5 ml-5">
                    <h3 className="text-white fw-bold">Pengaturan</h3>
                    <div className="d-flex  flex-column justify-content-center  align-items-center menu">
                        <Link>
                            <Button variant="light" active size ="lg"><i className="fa-solid fa-gear"></i><span>Pengaturan</span></Button>
                        </Link>
                        <Link to="/syaratK">
                            <Button variant="light" size ="lg"><i className="fa-regular fa-newspaper"></i><span>Syarat & Ketentuan</span></Button>
                        </Link>
                        <Link to="/kebijakan">
                            <Button variant="light" size ="lg"><i className="fa-solid fa-key"></i><span>Kebijakan Privasi</span></Button>
                        </Link>
                        
                            <Button variant="light"  onClick={handleShowLogoutModal} size ="lg" ><i className="fa-solid fa-right-from-bracket"></i><span>Keluar</span></Button>
            
                    </div>
                    </Col>
                    <Col className="col-6-lg py-5 px-5  justify-content-center align-items-center">
                        <h3 className="fw-bold text-end profile-heading"><BackButton2Component /></h3>
                        <Card>
                            <Card.Header as="h4" className="fw-bold">Pengaturan</Card.Header>
                            <Card.Body>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{<span><i className="fa-solid fa-bell"></i> Notifikasi</span>}</Accordion.Header>
                                    <Accordion.Body>
                                    <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`Rekomendasi-${type}`} className="mb-3">
                                    <Form.Check 
                                        type={type}
                                        id={`Rekom1-${type}`}
                                        label={`Rekomendasi Email`}
                                    />
                                    <Form.Check 
                                        type={type}
                                        id={`Rekom2-${type}`}
                                        label={`Rekomendasi Chat`}
                                    />

                                    </div>
                                ))}
                                </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>{<span><i className="fa-solid fa-trash ml-2"></i>Hapus Akun</span>}</Accordion.Header>
                                    <Accordion.Body>
                                        
                                        <div className="notifikasi">
                                        <p className=" fw-bold">Menghapus akun dapat menghilangan semua data yang ada!</p>
                                        <Button variant="danger" className="mt-2" onClick={handleShow}>
                                            Hapus Akun
                                        </Button>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Accordion>

                            
                            </Card.Body>
                        </Card>
                        <Modal show={show} onHide={handleClose} animation={false} centered>
                            <Modal.Header closeButton>
                            <Modal.Title className="fw-bold" >Peringatan</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Yakin untuk menghapus akun?</Modal.Body>
                            <Modal.Footer>
                            <Button variant="primary" style={{backgroundColor: '#190482'}}  onClick={handleClose}>
                                tidak
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Iya
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showLogoutModal} onHide={handleClose} animation={false} centered>
                            <Modal.Header closeButton>
                            <Modal.Title className="fw-bold">Keluar Akun</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Anda yakin ingin keluar dari akun anda?</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Batal
                            </Button>
                            <Button variant="primary" style={{backgroundColor: '#190482'}} className="button-logout" onClick={handleLogout}>
                                Logout
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
    </div>
    )
}
export default PengaturanPage

