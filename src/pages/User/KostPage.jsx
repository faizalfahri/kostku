import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import kost_list from "../../utils/data-kost";

const KostPage = () => {
  return (
    <div>
      <NavbarComponent />
      <Row>
        <div className="hero-kost mt-3">
          <h4 className="text-light text-center">Cari Kost Terbaikmu!</h4>
        </div>
      </Row>
      <div className="kost">
        <Container>
          <Row>
            <Col>
              <section className="kost-most-search">
                <div className="section-title">
                  <h1>Paling Banyak Dicari</h1>
                  <div className="line"></div>
                </div>

                <div className="section-card">
                  {kost_list.map((item) => {
                    return (
                      <Card
                        style={{ width: "25rem" }}
                        className="shadow-lg mb-5"
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
                            <Button className="button pe-4 ps-4">Cek</Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </div>
              </section>
            </Col>

            {/* Beda Section */}

            <Col>
              <section className="kost-mahasiswa">
                <div className="section-title">
                  <h1>Paling Banyak Dicari</h1>
                  <div className="line"></div>
                </div>

                <div className="section-card">
                  {kost_list.map((item) => {
                    return (
                      <Card
                        style={{ width: "25rem" }}
                        className="shadow-lg mb-5"
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
                            <Button className="button pe-4 ps-4">Cek</Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </div>
  );
};

export default KostPage;
