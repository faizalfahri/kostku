import { useEffect } from "react";

import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import CarouselComponent from "../../components/CarouselComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import imgperi from "../../assets/img/KostIbuPeri.jpg";
import imgbarbie from "../../assets/img/KostIbuBarbie.png";
import imgsihir from "../../assets/img/KostNenekSihir.jpeg";
import about_asset from "../../assets/img/Saly-31.png";

import testimoni_list from "../../utils/data-testimoni";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

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
            <h2>Daftar Kost</h2>
            <div className="line"></div>
          </div>

          <div className="section-card">
            <Card
              style={{ width: "25rem" }}
              className="shadow-lg"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
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

            <Card
              style={{ width: "25rem" }}
              className="shadow-lg"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
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

            <Card
              style={{ width: "25rem" }}
              className="shadow-lg"
              data-aos="flip-left"
              data-aos-duration="500"
            >
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
            <h2>Testimoni</h2>
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
              {testimoni_list.map((item) => {
                return (
                  <SwiperSlide className="d-flex justify-content-center align-items-center flex-column px-5">
                    <img
                      src={item.image}
                      alt="testimoni orang pertama"
                      className="img-testi"
                    />
                    <p className="text-center pt-4">{item.message}</p>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <div className="details d-flex flex-column align-items-center">
                      <span className="name">{item.name}</span>
                      <span className="job">{item.job}</span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </Row>
      </Container>
      {/* End Testimoni */}

      {/* ABOUT */}
      <section
        className="tentang d-flex flex-column align-items-center justify-content-center"
        id="tentangkami"
      >
        <Container>
          <Row>
            <Col lg="6">
              <div className="mt-5 mb-5">
                <h2>Tentang Kami</h2>
                <div className="line"></div>
              </div>
              <div className="about-card">
                <Card
                  border="secondary"
                  style={{ width: "27rem" }}
                  className="mb-5 text-light shadow-lg text-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
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
                  className="mb-5 text-light shadow-lg text-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
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
                  style={{ width: "27rem" }}
                  className="text-light shadow-lg text-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
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
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
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
            fill-opacity ="1"
            d="M0,160L30,154.7C60,149,120,139,180,149.3C240,160,300,192,360,197.3C420,203,480,181,540,197.3C600,213,660,267,720,240C780,213,840,107,900,80C960,53,1020,107,1080,138.7C1140,171,1200,181,1260,165.3C1320,149,1380,107,1410,85.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </section>
      {/* END ABOUT */}

      {/* About Kostku */}
      <div bg="light">

      </div>
      {/* End About Kostku */}

      <FooterComponent />
    </div>
  );
};

export default HomePage;
