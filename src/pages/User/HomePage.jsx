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
import about_asset from "../../assets/img/Saly-31.png";

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

      {/* Testimoni */}
      <Container
        fluid
        className="testi-container vh-100 w-100 d-flex align-items-center justify-content-center d-flex flex-column"
      >
        <Row>
          <div className="text-light me-5 mb-5">
            <h1>Testimoni</h1>
            <div className="line bg-light"></div>
          </div>
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
                  Dengan adanya web ini memudahkan saya untuk mempromosikan
                  bisnis kost-kostan saya lebih mudah sehingga memperbesar
                  peluang saya untuk mencapai target saya.
                </p>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="quote-icon pb-3"
                />
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
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="quote-icon pb-3"
                />
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
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="quote-icon pb-3"
                />
                <div className="details d-flex flex-column align-items-center">
                  <span className="name">Aqshal</span>
                  <span className="job">
                    Mahasiswa - Penghuni Kost Nenek Sihir
                  </span>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </Row>
      </Container>
      {/* End Testimoni */}

      {/* ABOUT */}
      <section
        className="tentang d-flex flex-column align-items-center justify-content-center bg-light"
        id="tentangkami"
      >
        <Container>
          <Row>
            <Col lg="6">
              <div className="mt-5 mb-5">
                <h1>Tentang Kami</h1>
                <div className="line"></div>
              </div>
              <div className="about-card">
                <Card
                  border="secondary"
                  style={{ width: "25rem" }}
                  className="mt-4 mb-3 text-light shadow-lg"
                >
                  <Card.Header>#1</Card.Header>
                  <Card.Body>
                    <Card.Title>Tujuan</Card.Title>
                    <Card.Text>
                      KostKu dibangun untuk memenuhi kebutuhan pencarian kost
                      dan memperluas pasar bagi pemilik kost di wilayah
                      Jabodetabek. Bermitra dengan kost yang terbaik dan sudah
                      terverifikasi.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "25rem" }}
                  className="mb-3 text-light shadow-lg"
                >
                  <Card.Header>#2</Card.Header>
                  <Card.Body>
                    <Card.Title>Capaian</Card.Title>
                    <Card.Text>
                      KostKu menjadi Website Penyedia Kost Terbaik se
                      Jabodetabek. Memberikan informasi secara real-time demi
                      memberikan pelayanan yang terbaik.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "25rem" }}
                  className="text-light shadow-lg"
                >
                  <Card.Header>#3</Card.Header>
                  <Card.Body>
                    <Card.Title>Founder </Card.Title>
                    <Card.Text>
                      KostKu dibangun oleh THOR (Team High of Result) yang
                      sesuai dengan namanya, menekankan pembuatan sebuah produk
                      digital dari segi kualitas dan keberfungsiannya.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg="6">
              <img
                src={about_asset}
                alt="Saly Assets for About Logo"
                className="logo-about"
              />
            </Col>
          </Row>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#f8f9fa"
            fill-opacity="1"
            d="M0,160L30,154.7C60,149,120,139,180,149.3C240,160,300,192,360,197.3C420,203,480,181,540,197.3C600,213,660,267,720,240C780,213,840,107,900,80C960,53,1020,107,1080,138.7C1140,171,1200,181,1260,165.3C1320,149,1380,107,1410,85.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </section>
      {/* END ABOUT */}

      <FooterComponent />
    </div>
  );
};

export default HomePage;
