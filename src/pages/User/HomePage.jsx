import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import CarouselComponent from "../../components/CarouselComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import imgperi from "../../assets/img/KostIbuPeri.jpg";
import imgbarbie from "../../assets/img/KostIbuBarbie.png";
import imgsihir from "../../assets/img/KostNenekSihir.jpeg";
import testi1 from "../../assets/img/testi1.jpeg";
import testi2 from "../../assets/img/testi2.jpg";
import testi3 from "../../assets/img/testi3.jpg";

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
            <Card style={{ width: "25rem" }} className="shadow-lg">
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
                  <Button className="button pe-4 ps-4">Cek</Button>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "25rem" }} className="shadow-lg">
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
                  <Button className="button pe-4 ps-4">Cek</Button>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "25rem" }} className="shadow-lg">
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
                  <Button className="button pe-4 ps-4">Cek</Button>
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

      {/* Testimonial */}
      <Container
        fluid
        className="testi-container vh-100 w-100 d-flex align-items-center justify-content-center"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper section-testimonial py-5 px-5 bg-light rounded-5"
        >
          <div className="testi-content">
            <SwiperSlide className="d-flex justify-content-center align-items-center flex-column px-5">
              <img
                src={testi1}
                alt="testimoni orang pertama"
                className="img-testi"
              />
              <p className="text-center pt-4">
                Dengan adanya web ini memudahkan saya untuk mempromosikan bisnis
                kost-kostan saya lebih mudah sehingga memperbesar peluang saya
                untuk mencapai target saya.
              </p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon pb-3" />
              <div className="details d-flex flex-column align-items-center">
                <span className="name">Ibu Peri</span>
                <span className="job"> Pemilik Kost Ibu Peri</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center align-items-center flex-column px-5">
              <img
                src={testi2}
                alt="testimoni orang kedua"
                className="img-testi"
              />
              <p className="text-center pt-4">
                Aplikasinya memudahkan saya cepat mendapat kost melalui
                informasi yang mendetail, pemilik kostnya pun ramah, fast
                respond dan fasilitasnya lengkap.
              </p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon pb-3" />
              <div className="details d-flex flex-column align-items-center">
                <span className="name">Sofiyah</span>
                <span className="job">
                  Mahasiswi - Penghuni Kost Ibu Barbie
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center align-items-center flex-column px-5">
              <img
                src={testi3}
                alt="testimoni orang ketiga"
                className="img-testi"
              />
              <p className="text-center pt-4">
                ini memudahkan saya sebagai perantau dalam menemukan kost yang
                terpercaya dan terjamin keamanan serta kenyamanannya. Apalagi
                dengan harga yang bisa menyesuaikan.
              </p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon pb-3" />
              <div className="details d-flex flex-column align-items-center">
                <span className="name">Aqshal</span>
                <span className="job">
                  Mahasiswa - Penghuni Kost Nenek Sihir
                </span>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
      {/* End Testimonial */}

      <FooterComponent />
    </div>
  );
};

export default HomePage;
