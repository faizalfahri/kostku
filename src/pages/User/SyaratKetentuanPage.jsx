/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Button, Card, Modal, Accordion} from "react-bootstrap"
import BackButton2Component from "../../components/BackButton2Component";
import { useState } from 'react';
import { Link } from "react-router-dom";

const SyaratKetentuanPage = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
        
        const handleClose = () => setShowLogoutModal(false);
        
        const handleShowLogoutModal = () => setShowLogoutModal(true);

        const handleLogout = () => {
        console.log('Melakukan logout...');
        window.location.href = '/';
        handleClose();
    };

return (
<div className="profile syaratK">
    <Container fluid>
            <Row>
                <Col className="col-4 colum py-5 px-5 ml-5">
                <h3 className="text-white fw-bold">Syarat dan Ketentuan</h3>
                <div className="d-flex  flex-column justify-content-center  align-items-center menu">
                    <Link to="/setting">
                        <Button variant="light"  size ="lg"><i className="fa-solid fa-gear"></i><span>Pengaturan</span></Button>
                    </Link>
                    <Link>
                        <Button variant="light"  active size ="lg"><i className="fa-regular fa-newspaper"></i><span>Syarat & Ketentuan</span></Button>
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
                        <Card.Header as="h4" className="fw-bold">Syarat dan Ketentuan</Card.Header>
                        <Card.Body style={{ maxHeight: '400px', overflow: 'auto' }}>                       
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{<span><i className="fa-solid fa-circle-exclamation"></i>Keterangan</span>}</Accordion.Header>
                                <Accordion.Body>
                                Halo, terima kasih telah mengunjungi situs web (website) Kosku.
                                <br /> <br />
                                Platform Website ini dimiliki dan dioperasikan oleh Kosku dan afiliasinya. 
                                Kami menyarankan pendatang, pengguna, ataupun pengguna terdaftar untuk membaca Syarat dan Ketentuan
                                ini secara berkala karena dapat berdampak kepada hak dan kewajiban Anda di bawah hukum.
                                <br /> <br />
                                Dengan mengunjungi, menggunakan, mengakses dan/atau mendaftarkan diri Anda pada Platform Kami. 
                                Anda dianggap telah membaca, mengerti, memahami dan menyetujui seluruh isi yang tertuang dalam 
                                Syarat dan Ketentuan (selanjutnya disebut, “S&K”) ini.Jika Anda tidak setuju untuk terikat dengan
                                S&K in maka Anda tidak diperkenankan untuk mengakses dan/atau menggunakan Platform Kami. 
                                S&K ini merupakan bentuk Perjanjian yang sah dan mengikat antara Anda dengan Kami.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{<span><i className="fa-solid fa-square-person-confined"></i>Pemesanan (Booking), Check-in, Pindah Kamar (Relocation), dan Penjadwalan Kembali (Reschedule)</span>}</Accordion.Header>
                                <Accordion.Body>
                                <p style={{ textAlign: 'justify' }}>
                                Penghuni dapat melakukan pemesanan Properti yang telah dipilih dengan ajukan sewa dan melakukan pembayaran sesuai ketentuan.
                                Penghuni wajib melakukan check in pada menggunakan fitur klik “check in” melalui Platform Kami sesuai dengan tanggal yang tertera pada Kontrak. 
                                <br /> <br />
                                Apabila dalam waktu 5x24 jam sejak Tanggal Mulai Ngekos Penghuni tidak melakukan perubahan status tersebut maka Kami tidak dapat membantu dalam proses pengembalian dana. 
                                Ketentuan ini tidak berlaku bagi Properti yang terdapat logo/flagging."Singgahsini, APIK, dan/atau Kos Pilihan" pada Platform
                                Pindah (relocation) pada Properti yang telah Penghuni pilih hanya dapat dilakukan dapat dilakukan apabila :
                                </p>
                                <p style={{ textAlign: 'justify' }}>
                                <ol>
                                    <li>Transaksi pembayaran dilakukan di dalam dan melalui Platform ini dengan metode yang tersedia serta dibayarkan kepada atau melalui Kami;</li>
                                    <li>Kamar yang telah dipesan tidak tersedia setelah pembayaran Penghuni lakukan maupun pada saat check-in;</li>
                                    <li>Fasilitas yang terdapat pada kos tidak sesuai dengan yang tertera listing dan Platform ini. Ketidaksesuaian ini terbatas pada ada/tidaknya fasilitas yang tertulis, ketidaksesuaian seperti AC kurang dingin, ukuran kasur, kecepatan wifi tidak termasuk didalamnya dan/atau adanya pembatalan atau penolakan dari Pemilik atas pesanan (booking) yang sudah diajukan;</li>
                                    <li>Pindah (relocation) dapat dilakukan dan disampaikan kepada Kami sampai dengan Tanggal Mulai Ngekos Penghuni yang tertuang dalam pesanan (booking) pada Platform ini.</li>
                                </ol>
                                </p>
                                <p style={{ textAlign: 'justify' }}>
                                Setiap adanya perubahan, penambahan dan pengurangan harga sewa yang timbul akibat dari reschedule merupakan keputusan 
                                Pemilik dan Penghuni bersedia dan menerima atas perubahan tersebut.
                                Apabila terdapat selisih harga atas biaya sewa atau transaksi yang terjadi akibat reschedule, maka selisih tersebut akan
                                Kami kembalikan ke rekening Anda dalam waktu tidak lebih dari 1x24 jam sejak Tanggal Mulai Ngekos yang baru.
                                <br /> <br />
                                Penghuni memahami bahwa keputusan dan persetujuan reschedule merupakan kebijakan Pemilik sepenuhnya dan memperhatikan ketentuan.
                                Dalam hal permohonan reschedule ditolak ataupun tidak ada konfirmasi yang diberikan Penghuni maupun Pemilik maka Tanggal Mulai 
                                Ngekos adalah sebagaimana tanggal semula sebelum permintaan reschedule. 
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

export default SyaratKetentuanPage