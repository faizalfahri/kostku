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
                        <Card.Body style={{ maxHeight: '400px', overflow: 'auto' }}>                       
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
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{<span><i className="fa-solid fa-user-check"></i>Informasi Pribadi</span>}</Accordion.Header>
                                <Accordion.Body>
                                <p style={{ textAlign: 'justify' }}>
                                Informasi Pribadi adalah setiap informasi atau keterangan tentang individu yang benar dan nyata yang melekat
                                dan dapat diidentifikasi secara wajar dari informasi atau keterangan tersebut baik langsung maupun tidak langsung, 
                                pada masing-masing individu. Informasi Pribadi yang Kami kumpulkan diantaranya adalah:
                                </p> 
                                <p style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>Username / nama pengguna, termasuk nama asli dari Anda sesuai dengan tanda pengenal</li>
                                    <li>Alamat email</li>
                                    <li>Nomor telepon</li>
                                    <li>Alamat tempat tinggal</li>
                                    <li>Nomor identitas diri Anda</li>
                                    <li>Nomor rekening bank Anda</li>
                                    <li>Identitas pengguna Mamikos termasuk kredensial log in</li>
                                    <li>Data transaksi, termasuk semua detail pembayaran, reservasi, dan detail booking yang dilakukan melalui platform ini</li>
                                    <li>Riwayat pemesanan, termasuk semua informasi booking di platform ini</li>
                                    <li>Komentar atau umpan balik yang Anda berikan pada konten platform ini</li>
                                </ol>
                                </p>
                                <p style={{ textAlign: 'justify' }}>
                                    Selain itu kami juga dapat mengumpulkan informasi non-pribadi yang dapat digunakan untuk
                                    mengidentifikasi Anda termasuk diantaranya adalah:
                                </p>
                                <p style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>Alamat protokol internet (internet protocol/IP) dan lokasi Wi-Fi</li>
                                    <li>Data lokasi geografis</li>
                                    <li>Data perangkat</li>
                                    <li>Data catatan (log)</li>
                                    <li>Jenis sistem pengoperasian</li>
                                    <li>Kebangsaan</li>
                                    <li>Preferensi pencarian Anda, dan/atau</li>
                                    <li>Data-data umum lainnya yang ada pada Internet</li>
                                </ol>
                                </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{<span><i className="fa-solid fa-file-contract"></i>Pembaruan dan Persetujuan Kebijakan Privasi Data</span>}</Accordion.Header>
                                <Accordion.Body>
                                <p style={{ textAlign: 'justify' }}>
                                Kebijakan ini mungkin diubah dan/atau diperbaharui dari waktu ke waktu sebagai upaya Kami dalam menyesuaikan 
                                dengan perubahan hukum dan peraturan yang ada tanpa pemberitahuan sebelumnya. Kami menyarankan untuk membaca 
                                secara seksama dan memeriksa kembali laman Kebijakan ini dari waktu ke waktu untuk mengetahui perubahan apapun.
                                Dengan tetap mengakses dan menggunakan platform, maka Anda dianggap menyetujui perubahan-perubahan dalam Kebijakan 
                                yang ada. Anda memahami bahwa versi terbaru dari Kebijakan ini akan menggantikan semua versi sebelumnya.
                                </p> 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>{<span><i className="fa-solid fa-users"></i>Pihak Ketiga</span>}</Accordion.Header>
                                <Accordion.Body>
                                <p style={{ textAlign: 'justify' }}>
                                Platform dan materi pemasaran kami dapat berisi tautan ke situs web yang dioperasikan oleh pihak ketiga. 
                                Kami tidak mengontrol atau menerima tanggung jawab atas kegiatan situs web pihak ketiga terkait pengumpulan,
                                penggunaan, penyimpanan, dan pengungkapan Informasi Pribadi Anda oleh pihak ketiga tersebut. 
                                Silahkan membaca syarat dan ketentuan serta kebijakan privasi dari situs web pihak ketiga untuk mengetahui 
                                bagaimana mereka mengumpulkan dan menggunakan Informasi Pribadi Anda.
                                </p> 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>{<span><i className="fa-solid fa-address-card"></i>Kontak Kami</span>}</Accordion.Header>
                                <Accordion.Body>
                                <p style={{ textAlign: 'justify' }}>
                                Kapanpun Anda dapat melakukan kontak dengan kami di sini.
                                </p> 
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
