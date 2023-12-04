import  { useState, useEffect, } from "react";
import Navbar2Component from "../../components/Navbar2Component";
import { Container, Alert, Button, Modal, Card, Image} from "react-bootstrap";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
    const [isButtonEnabled, setButtonEnabled] = useState(false);

    const handleButtonClick = () => {
        // Add your button click logic here
        console.log('Button clicked!');
    };

    // Function to enable the button after a delay of 5 seconds
    const enableButtonAfterDelay = () => {
        setTimeout(() => {
        setButtonEnabled(true);
        }, 5000); // 5000 milliseconds (5 seconds)
    };

    // Enable the button when the component mounts
    useEffect(() => {
        enableButtonAfterDelay();
    }, []); // Empty dependency array ensures it runs only once on mount



    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered className="payment"
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="text-white py-3">
            Metode Pembayaran
            </Modal.Title>
        </Modal.Header>
        <div className="floating-card ">
            <Card>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold">Rp1.350.000</p>
                        <p>Order ID#00101</p>
                    </div>
                    <div className="payment2">
                        <p>Bayar sebelum <a href="#" className="text-decoration-none">23:59:59</a></p>
                    </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <Modal.Body>
            <h5 className="fw-bold ">Transfer Bank</h5>
            <div className="d-flex justify-content-between align-items-center mb-3">
            <Image src="./src/assets/img/payment/bca.png" alt="bca" fluid />
            <Image src="./src/assets/img/payment/bni.png" alt="bni" fluid />
            <Image src="./src/assets/img/payment/mandiri.png" alt="mandiri" fluid />
            <Image src="./src/assets/img/payment/bri.png" alt="bri" fluid />
            <Image src="./src/assets/img/payment/cimb.png" alt="cimb" fluid />
            </div>
            <h5 className="fw-bold">Dompet Digital</h5>
            <div className="d-flex justify-content-between align-items-center">
            <Image src="./src/assets/img/payment/gopay.png" alt="gopay" fluid />
            <Image src="./src/assets/img/payment/dana.png" alt="dana" fluid />
            <Image src="./src/assets/img/payment/spay.png" alt="spay" fluid />
            <Image src="./src/assets/img/payment/ovo.png" alt="ovo" fluid />
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Link to="/checkin">
        <Button variant="primary" onClick={handleButtonClick} disabled={!isButtonEnabled}>Bayar</Button>
            </Link> 
        </Modal.Footer>
        </Modal>
    );
}

const Konfirmasi = () => {
    const [show,] = useState(true);
    const [displayText, setDisplayText] = useState("Mohon menunggu konfirmasi dari pemilik kost untuk menyetujui");
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [step3Active, setStep3Active] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setDisplayText("Pemilik kost telah memberikan konfirmasi. Silakan lanjutkan pembayaran.");
        setButtonEnabled(true);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    const handleButtonClick = () => {
        console.log("Tombol diklik!");
        setStep3Active(true);
        setModalShow(true);
    };

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    return (
        <div className="confirm">
        <Navbar2Component />
        <div className="d-flex flex-column justify-content-center mt-5">
            <Container>
            <div className=" align-items-center justify-content-center ml-5 mr-5 mt-4">
                <ul id="progressbar" className="d-flex justify-content-between step0 ">
                <li className="active text-center" id="step1"></li>
                <li className="active text-center" id="step2"></li>
                <li className={step3Active ? "active text-end" : "text-end"} id="step3"></li>
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
            </Container>
            <div className="notif">
            <Alert show={show} variant="primary">
                <Alert.Heading className="text-black fw-bold">Konfirmasi Pemilik Kos</Alert.Heading>
                <p className="text-black">{displayText}</p>
                <hr />
                {buttonEnabled && (
                <div className="d-flex justify-content-end">
                    <Link to="#">
                    <Button variant="primary" onClick={() => { handleButtonClick(); handleShow(); }}>
                        Bayar
                    </Button>
                    </Link>
                </div>
                )}
            </Alert>
            </div>

            {/* Modal */}
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={handleClose}
            />
        </div>
        </div>
    );
};

export default Konfirmasi;
