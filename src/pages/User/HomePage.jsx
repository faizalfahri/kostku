import { useEffect } from "react";
import { Link } from "react-router-dom";

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
import kost_list from "../../utils/data-kost";

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
            {kost_list.map((item) => {
              return (
                <Card
                  style={{ width: "25rem" }}
                  className="shadow-lg"
                  data-aos="flip-left"
                >
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      {item.name_kost}
                    </Card.Title>
                    <Button
                      variant="secondary"
                      size="sm"
                      disabled
                      className="mt-1 mb-2"
                    >
                      {item.type_kost}
                    </Button>
                    <Card.Text className="card-spec">
                      Spesifikasi: <br></br>
                      {item.spec_kost}
                    </Card.Text>
                    <Card.Text className="card-loc border-bottom border-dark fw-bold">
                      {item.location}
                    </Card.Text>
                    <Card.Text className="card-spec">
                      Harga Sewa: <br></br>
                      <span className="fw-bold">{item.price}</span>
                      <Link to="/detailkost" className="btn button text-light pe-4 ps-4">Cek</Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>

          <div className="d-flex justify-content-center mt-4 mb-5">
            <Link to="/kost" className="btn button text-white">Lainnya</Link>
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
        className="tentang d-flex flex-column align-items-center justify-content-center bg-light"
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
                  style={{ width: "25rem" }}
                  className="mt-4 mb-3 text-light shadow-lg text-center"
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
                  className="mb-3 text-light shadow-lg text-center"
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
                  style={{ width: "25rem" }}
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
            fill-opacity="1"
            d="M0,192L40,208C80,224,160,256,240,256C320,256,400,224,480,224C560,224,640,256,720,266.7C800,277,880,267,960,272C1040,277,1120,299,1200,288C1280,277,1360,235,1400,213.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </section>
      {/* END ABOUT */}

      <FooterComponent />
    </div>
  );
};

export default HomePage;
