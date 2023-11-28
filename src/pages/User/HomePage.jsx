import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import CarouselComponent from "../../components/CarouselComponent";

import { Container, Row, Col, Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import imgperi from "../../assets/img/KostIbuPeri.jpg";
import imgbarbie from "../../assets/img/KostIbuBarbie.png";
import imgsihir from "../../assets/img/KostNenekSihir.jpeg";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />

      {/* Header */}
      <div className="headerpage d-flex align-items-center">
        <Container>
          <Row>
            <Col lg="6" className="d-flex align-items-center px-5">
              <div className="wrapper">
                <div className="header-title">
                  <h1>Ingin Mencari kost di area Jabodetabek?</h1>
                  <h3>
                    Booking Di <span>Kostku</span> aja.
                  </h3>
                </div>

                <div className="search-bar">
                  <input type="text" placeholder="Masukkan Nama Kost" />
                  <button className="px-3 py-2">Cari</button>
                </div>

                <div className="image-swiper">
                  <div className="shape"></div>
                  <div className="shape"></div>
                  <div className="shape"></div>
                </div>

                <div className="swipper"></div>
              </div>
            </Col>
            <Col lg="6" className="px-5">
              <CarouselComponent />
            </Col>
          </Row>
        </Container>
      </div>
      {/* End Header */}

      {/* Section Kost */}
      <div className="section-kost">
        <Container>
          <div className="section-title">
            <h1>Daftar Kost</h1>
            <div className="line"></div>
          </div>

          <div className="section-card">
            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Img variant="top" src={imgperi} />
              <Card.Body>
                <Card.Title className="fw-bold">Kost Ibu Peri</Card.Title>
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  className="mt-1 mb-2"
                >
                  Putri
                </Button>
                <Card.Text className="card-spec">
                  Spesifikasi: <br></br>
                  Kamar Mandi Dalam - Kasur - Wifi - AC
                </Card.Text>
                <Card.Text className="card-loc border-bottom border-dark fw-bold">
                  Jakarta Utara
                </Card.Text>
                <Card.Text className="card-spec">
                  Harga Sewa: <br></br>
                  <span className="fw-bold">Rp.1.200.000/Bulan</span>
                  <Button className="button ms-4">Cek</Button>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Img variant="top" src={imgbarbie} />
              <Card.Body>
                <Card.Title className="fw-bold">Kost Ibu Barbie</Card.Title>
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  className="mt-1 mb-2"
                >
                  Putri
                </Button>
                <Card.Text className="card-spec">
                  Spesifikasi: <br></br>
                  Kamar Mandi Dalam - Kasur - Wifi - AC
                </Card.Text>
                <Card.Text className="card-loc border-bottom border-dark fw-bold">
                  Depok
                </Card.Text>
                <Card.Text className="card-spec">
                  Harga Sewa: <br></br>
                  <span className="fw-bold">Rp.1.050.000/Bulan</span>
                  <Button className="button ms-4">Cek</Button>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="shadow-lg">
              <Card.Img variant="top" src={imgsihir} />
              <Card.Body>
                <Card.Title className="fw-bold">Kost Nenek Sihir</Card.Title>
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  className="mt-1 mb-2"
                >
                  Putri
                </Button>
                <Card.Text className="card-spec">
                  Spesifikasi: <br></br>
                  Kamar Mandi Dalam - Kasur - Wifi - AC
                </Card.Text>
                <Card.Text className="card-loc border-bottom border-dark fw-bold">
                  Tangerang Selatan
                </Card.Text>
                <Card.Text className="card-spec">
                  Harga Sewa: <br></br>
                  <span className="fw-bold">Rp.900.000/Bulan</span>
                  <Button className="button ms-4">Cek</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="d-flex justify-content-center mt-4 mb-5">
            <Button className="button">Lainnya</Button>
          </div>
        </Container>
      </div>
      {/* End Section Kost */}

      <FooterComponent />
    </div>
  );
};

export default HomePage;
