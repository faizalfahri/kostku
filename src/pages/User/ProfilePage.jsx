import { Container, Row, Col, Button, Card, Modal} from "react-bootstrap"
import BackButtonComponent from "../../components/BackButtonComponent";
import { useState } from 'react';
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
        
        const handleClose = () => setShowLogoutModal(false);
        
        const handleShowLogoutModal = () => setShowLogoutModal(true);

        const handleLogout = () => {
        console.log('Melakukan logout...');
        window.location.href = '/';
        handleClose();
    };
    return (
        <div className="profile">
            
            <Container fluid>
                <Row>
                    <Col className="col-4 colum py-5 px-5 ml-5">
                    <h3 className="text-white fw-bold">Profile</h3>
                    <div className="d-flex  flex-column justify-content-center  align-items-center menu"> 
                    <Link to="/setting">
                        <Button variant="light"  size ="lg"><i className="fa-solid fa-gear"></i><span>Pengaturan</span></Button>
                    </Link>
                    <Link to="/syaratK">
                        <Button variant="light"   size ="lg"><i className="fa-regular fa-newspaper"></i><span>Syarat & Ketentuan</span></Button>
                    </Link>
                    <Link to="/kebijakan">
                        <Button variant="light"  size ="lg"><i className="fa-solid fa-key"></i><span>Kebijakan Privasi</span></Button>
                    </Link>
                    <Button variant="light"  onClick={handleShowLogoutModal} size ="lg" ><i className="fa-solid fa-right-from-bracket"></i><span>Keluar</span></Button>
                    </div>
                    </Col>
                    <Col className="col-6-lg py-5 px-5  justify-content-center align-items-center">
                        <h3 className="fw-bold text-end profile-heading"><BackButtonComponent /></h3>
                        <Card body>
                        <div className="profile-container">
                            <div className="profile-picture">
                                <img
                                    src="../src/assets/img/profile.png"
                                    alt="Profile Picture"
                                />
                            </div>
                            <div className="text-container">
                            <div className="user-name">Sofiyah</div>
                            <div>Lengkapa data profile kamu untuk pengalaman yang lebih baik</div>
                            <Link to="/editprofile">
                            <Button variant="light" className="custom-button">
                                <span>&gt;</span>
                            </Button>
                            </Link>
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
                <Modal show={showLogoutModal} onHide={handleClose} animation={false} centered>
                    <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Keluar Akun</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Anda yakin ingin keluar dari akun anda?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Batal</Button>
                        <Button variant="primary"style={{backgroundColor: '#190482'}} className="button-logout" onClick={handleLogout}>Logout</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default ProfilePage