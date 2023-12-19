import { Container, Row, Col, Button, Card, Modal,Form} from "react-bootstrap"
import BackButton2Component from "../../components/BackButton2Component";
import { useState } from 'react';


const EditProfilePage = () => {
    // edit foto
    const [profilePicture, setProfilePicture] = useState('../src/assets/img/profile.png');
    const [newProfilePicture, setNewProfilePicture] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewProfilePicture(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const handleEditPhoto = () => {
        // Simpan foto profil yang lama
        const oldProfilePicture = profilePicture;

        if (newProfilePicture) {
        setProfilePicture(newProfilePicture);
        setNewProfilePicture(null);
        }
    };

    const handleFileInputClick = () => {
        // Trigger file input click
        document.getElementById('fileInput').click();
    };

    // edit foto
    const [showSimpan, setShowSimpan] = useState(false);
        
        const handleClose = () => setShowSimpan(false);
        
        const handleShowSimpan = () => setShowSimpan(true);

        const handleEdit = () => {
        console.log('Melakukan perubahan');
        window.location.href = '/editprofile';
        handleClose();
    };
    return (
        <div className="profile  edit">
    <Container fluid>
            <Row>
                <Col className="col-6 colum py-5 px-5 ml-5">
                <h3 className="text-dark fw-bold">Edit Profile</h3>
                <div className="d-flex  flex-column justify-content-center  align-items-center edit-menu">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="string" placeholder="Sofiyah" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="JenisKelamin">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Select aria-label="JenisKelamin">
                    <Form.Control type="string" placeholder="Perempuan" />
                        <option value="1">Laki-Laki</option>
                        <option value="2">Perempuan</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Pekejaan">
                    <Form.Label>Pekerjaan</Form.Label>
                    <Form.Control type="string" placeholder="Mahasiswa" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Status">
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Status">
                        <option>Pilih Status</option>
                        <option value="1">Sudah Menikah</option>
                        <option value="2">Belum Menikah</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Nomor Telepon">
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control type="number" placeholder="085777889912" />
                    </Form.Group>
                    
                </Form>
                <Button variant="primary" onClick={handleShowSimpan}>Simpan</Button>
                </div>
                </Col>
                <Col className="col-4-lg py-5 px-5  justify-content-center align-items-center">
                    <h3 className="fw-bold text-end profile-heading"><BackButton2Component /></h3>
                    <Card>
                        <Card.Header as="h4" className="fw-bold">Kebijakan Privasi</Card.Header>
                        <Card.Body className="d-flex">
                            <div className="profile-container p-3">
                            <div className="profile-picture">
                                <img src={newProfilePicture || profilePicture} alt="Profile Picture"/>
                                <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange}
                                style={{ display: 'none' }}/>
                            </div>
                            <div className="text-container">
                            <Button variant="primary" style={{backgroundColor: '#190482'}}onClick={handleFileInputClick}>Ubah Foto</Button>
                            </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Modal show={showSimpan} onHide={handleClose} animation={true} centered>
                        <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">Simpan Perubahan</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Anda yakin ingin merubah data profile?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Batal</Button>
                            <Button variant="primary"  style={{backgroundColor: '#190482'}} className="modal-logout" onClick={handleEdit}>Iya</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
</div>
)
    
}

export default EditProfilePage