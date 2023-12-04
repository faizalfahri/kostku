import Navbar2Component from "../../components/Navbar2Component";
import { Container,Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const ChekinPage = () => {
    const [show, setShow] = useState(true);
    
    return (
    <div className="checkin">
        <Navbar2Component />
        <div className="d-flex flex-column justify-content-center mt-5">
        <Container>
            <div className=" align-items-center justify-content-center ml-5 mr-5 mt-4">
                <ul id="progressbar" className="d-flex justify-content-between ">
                    <li className=" step0 active text-center" id="step1"></li>
                    <li className=" step0 active text-center" id="step2"></li>
                    <li className=" step0 active text-end" id="step3"></li>
                    <li className=" step0 active text-end" id="step4"></li>             
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
            <div className="notif">
            <Alert show={show} variant="primary">
                <Alert.Heading className="text-black fw-bold">Terimakasih Telah Melakakukan Pembayaran</Alert.Heading>
                <p  className="text-black">
                Jika sudah sampai dikosan, jangan lupa klik tombol Check-In dibawah ini!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Link to="/">
                <Button onClick={() => setShow(false)} variant="primary">
                    Check-In
                </Button>
                </Link>
                </div>
            </Alert>
            </div>
        </Container>
        </div>
        </div>
    );
};

export default ChekinPage;