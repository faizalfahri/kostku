import { Container, Row, Col, Button, Card, Modal, Accordion} from "react-bootstrap"
import BackButton2Component from "../../components/BackButton2Component";
import { useState } from 'react';
import { Link } from "react-router-dom";

export const KebijakanPage = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
        
        const handleClose = () => setShowLogoutModal(false);
        
        const handleShowLogoutModal = () => setShowLogoutModal(true);

        const handleLogout = () => {
        console.log('Melakukan logout...');
        window.location.href = '/';
        handleClose();
    };


return (
<div className="profile kebijakan">
    <Container fluid>
            <Row>
                <Col className="col-4 colum py-5 px-5 ml-5">
                <h3 className="text-white fw-bold">Kebijakan Privasi</h3>
                <div className="d-flex  flex-column justify-content-center  align-items-center menu">
                    <Link to="/setting">
                        <Button variant="light"  size ="lg"><i className="fa-solid fa-gear"></i><span>Pengaturan</span></Button>
                    </Link>
                    <Link to="/syaratK">
                        <Button variant="light"   size ="lg"><i className="fa-regular fa-newspaper"></i><span>Syarat & Ketentuan</span></Button>
                    </Link>
                    <Link>
                        <Button variant="light" active size ="lg"><i className="fa-solid fa-key"></i><span>Kebijakan Privasi</span></Button>
                    </Link>
                    <Button variant="light"  onClick={handleShowLogoutModal} size ="lg" ><i className="fa-solid fa-right-from-bracket"></i><span>Keluar</span></Button>
                </div>
                </Col>
                <Col className="col-6-lg py-5 px-5  justify-content-center align-items-center">
                    <h3 className="fw-bold text-end profile-heading"><BackButton2Component /></h3>
                    <Card>
                        <Card.Header as="h4" className="fw-bold">Kebijakan Privasi</Card.Header>
                        <Card.Body>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{<span><i className="fa-solid fa-circle-exclamation"></i>Keterangan</span>}</Accordion.Header>
                                <Accordion.Body>
                                Halo, terima kasih telah mengunjungi situs web (website) Kosku.
                                <br /> <br />
                                Platform Website ini dimiliki dan dioperasikan oleh Kosku dan afiliasinya.
                                Kami sangat menghormati privasi atas Informasi Pribadi pendatang, pengguna, 
                                ataupun pengguna terdaftar dan ingin melindungi Informasi Pribadi tersebut dengan Kebijakan Privasi ini. 
                                <br /> <br />
                                Kebijakan ini berlaku pada setiap platform yang dioperasikan oleh Kosku. Kebijakan ini menjelaskan 
                                bagaimana Kosku mengumpulkan, menyimpan, menjaga, menggunakan dan mengungkapkan informasi pribadi
                                yang teridentifikasi yang pengguna berikan selama menggunakan platform ini serta menjelaskan 
                                bagaimana langkah yang telah Kosku ambil untuk mengamankan Informasi Pribadi pengguna.  
                                Dengan mengunjungi, menggunakan dan/atau mendaftarkan diri pada platform Kosku, maka pengguna 
                                dianggap telah membaca, mengerti, memahami dan menyetujui seluruh isi yang tertuang dalam kebijakan
                                ini. Apabila pengguna tidak setuju dengan sebagian atau seluruh iisi kebijakan ini, pengguna dapat
                                meninggalkan platform yang Kosku kelola.
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Modal show={showLogoutModal} onHide={handleClose} animation={false} centered>
                        <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Keluar Akun</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Anda yakin ingin keluar dari akun anda?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Batal</Button>
                            <Button variant="primary"  className="modal-logout" onClick={handleLogout}>Logout</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
</div>
)
}
