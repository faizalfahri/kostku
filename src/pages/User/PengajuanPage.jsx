import Navbar2Component from "../../components/Navbar2Component";
import { Container, Card, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom"

const PengajuanPage = () => {
    return (
        <div className="pengajuan">
        <Navbar2Component />
        <div className="d-flex flex-column justify-content-center mt-5">
        <Container>
            <div className=" align-items-center justify-content-center ml-5 mr-5">
                <ul id="progressbar" className="d-flex justify-content-between step0 ">
                    <li className="active text-center" id="step1"></li>
                    <li className="text-center" id="step2"></li>
                    <li className="text-end" id="step3"></li>
                    <li className="text-end" id="step4"></li>             
                </ul>
                <div className="d-flex justify-content-between">
                    <div className="d-lg-flex align-items-center">
                        <p className="fw-bold mb-1">Pengajuan</p>
                    </div>
                    <div className="d-lg-flex align-items-center">
                        <p className="fw-bold mb-1">Persetujuan</p>
                    </div>
                    <div className="d-lg-flex align-items-center">
                        <p className="fw-bold mb-1">Pembayaran</p>
                    </div>
                    <div className="d-lg-flex align-items-center">
                        <p className="fw-bold mb-1">Check-in</p>
                    </div>
                </div>
            </div>
            <Card className="my-5">
                <Card.Header as="h5" className="fw-bold">Pengajuan Sewa</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">Informasi Penyewa</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="nama" placeholder="Masukan Nama Lengkap" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupNoHandphone">
                        <Form.Label>Nomor Handphone</Form.Label>
                        <Form.Control type="noHandphone" placeholder="Masukan Nomor Handphone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupJK">
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Pilih</option>
                        <option value="1">Laki-laki</option>
                        <option value="2">Perempuan</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPekerjaan">
                        <Form.Label>Pekerjaan</Form.Label>
                        <Form.Control type="pekerjaan" placeholder="Masukan Pekerjaan" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Unggah Foto KTP</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Unggah Swafoto KTP</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-center mt-3">
                    <Link to="/konfirmasi">
                    <Button variant="primary">Kirim</Button>
                    </Link>
                </div>
                </Card.Body>
            </Card>
        </Container>
        </div>
        </div>
        
    );    
};

export default PengajuanPage;


