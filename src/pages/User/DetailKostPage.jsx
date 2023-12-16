import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import BackButtonComponent from "../../components/BackButtonComponent";

import DatePickerComponent from "../../components/DatePickerComponent";
import { Link } from "react-router-dom";

import kost1 from "../../assets/img/KostIbuBarbie.png";
import kost2 from "../../assets/img/KostIbuPeri.jpg";

import { Col, Row, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";

const DetailKostPage = () => {
  return <div className="bg-light">
      <NavbarComponent />

      <section className="detail_kost mt-5">
        <div className="text-light ms-5">
          <BackButtonComponent />
        </div>
        <div className="nama-detail-kost py-4">
          <h3 className="fw-bold text-light text-center pt-3">Kost Ibu Barbie</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave"><path fill="#f8f9fa" fill-opacity="1" d="M0,96L30,101.3C60,107,120,117,180,122.7C240,128,300,128,360,144C420,160,480,192,540,197.3C600,203,660,181,720,144C780,107,840,53,900,58.7C960,64,1020,128,1080,138.7C1140,149,1200,107,1260,85.3C1320,64,1380,64,1410,64L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        <Container>
          <Row>
            <Col lg="6" className="d-flex align-items-center justify-content-center">
              <Carousel className="rounded-9 me-2">
                <Carousel.Item>
                  <img src={kost1} alt="Kost Ibu Barbie" className="shadow-lg w-100 rounded" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={kost2} alt="Kost Ibu Peri" className="shadow-lg w-100 rounded" />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col lg="6" className="d-flex align-items-center justify-content-center flex-column">
              <Card className="w-100 ms-5 h-75">
                <Card.Header className="fw-bold">Ajukan Sewa</Card.Header>
                <Card.Body>
                  <Card.Title className="fw-bolder mb-4"><span>Rp.1.350.000/Bulan</span></Card.Title>
                  <Card.Text>
                    Tanggal Mulai Kost
                  </Card.Text>
                  <DatePickerComponent className="m-2" />
                  <Button variant="outline-primary" className="hubungi-button mt-4 m-2">Hubungi Pemilik</Button>
                  <Link to="/pengajuan">
                    <Button className="button sewa-button mt-4 m-2">Ajukan Sewa</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="specific-kost">
        <Container>
          <Row>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold mb-3">Spesifikasi Kamar</Card.Title>
                  <Card.Text>
                  <FontAwesomeIcon icon={faHouseUser} /> 4x4 Meter
                  </Card.Text>
                  <Card.Text>
                  <FontAwesomeIcon icon={faBolt} /> Sudah Termasuk Listrik
                  </Card.Text>
                  {/* separate */}
                  <Card.Title className="fw-bold mb-3">Fasilitas Kamar</Card.Title>
                  <Card.Text>
                    - AC
                  </Card.Text>
                  <Card.Text>
                    - Kasur
                  </Card.Text>
                  <Card.Text>
                    - K.Mandi Dalam
                  </Card.Text>
                  <Card.Text>
                    - Wifi
                  </Card.Text>
                  <Card.Text>
                    - Lemari
                  </Card.Text>
                  {/* separate */}
                  <Card.Title className="fw-bold mb-3">Fasilitas Umum</Card.Title>
                  <Card.Text>
                    - Ruang Tamu
                  </Card.Text>
                  <Card.Text>
                    - Dapur
                  </Card.Text>
                  <Card.Text>
                    - Parkiran Mobil/Motor
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold mb-4">Aturan Kost</Card.Title>
                  <Card.Text>
                    - Maksimal 2 orang
                  </Card.Text>
                  <Card.Text>
                    - Wilayah Khusus Putri
                  </Card.Text>
                  <Card.Text>
                    - Tidak Membawa Teman sampai Pukul 18.00
                  </Card.Text>
                  <Card.Text>
                    - Teman Menginap dikenakan biaya
                  </Card.Text>
                  <Card.Text>
                    - Maksimal Pembayaran H+10 dari tanggal Penyewaan
                  </Card.Text>
                  <Card.Text>
                    - Tidak Mencoret Kamar
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <FooterComponent />
  </div>
};

export default DetailKostPage;
