import { useState } from "react"

import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MDBCol } from "mdb-react-ui-kit"

import Select from "react-select"

import kost_list from "../../utils/data-kost";

const KostPage = () => {
  const [value, setValue] = useState(null)

  const location = [
    {value: "jakartapusat", label: "Jakarta Pusat"},
    {value: "jakartautara", label: "Jakarta Utara"},
    {value: "jakartaselatan", label: "Jakarta Selatan"},
    {value: "jakartatimur", label: "Jakarta Timur"},
    {value: "jakartabarat", label: "Jakarta Barat"},
    {value: "bogor", label: "Bogor"},
    {value: "depok", label: "Depok"},    
    {value: "tangerang", label: "Tangerang"},    
    {value: "bekasi", label: "Bekasi"},    
  ]

  const tipekost = [
    {value: "putra", label: "Putra"},
    {value: "putri", label: "Putri"},
    {value: "campur", label: "Campur"},  
  ]
  return (
    <div>
      <NavbarComponent />
      <Row>
        <div className="hero-kost mt-3 d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-light text-center mb-4">Cari Kost Terbaikmu!</h4>
        </div>
        <div className="hero-search rounded d-flex flex-row justify-content-center align-items-center shadow lg">
          <Select 
            options={location}
            defaultValue={value}
            placeholder="Pilih Lokasi"
            onChange={setValue}
            isMulti
            isSearchable
            noOptionsMessage={() => "Tidak ada Pilihan Lokasi"}
            className="select"
          />
          <Select 
            options={tipekost}
            defaultValue={value}
            placeholder="Pilih Tipe Kost"
            onChange={setValue}
            isMulti
            isSearchable
            noOptionsMessage={() => "Tidak ada Pilihan Tipe Kost"}
            className="select"
          />
          <MDBCol md="6" className="select">
            <input className="form-control" type="text" placeholder="Masukkan Harga" />
          </MDBCol>
          <Button className="btn button select mb-2">
            Cari
          </Button>
        </div>
      </Row>
      <div className="kost">
        <Container>
          <Row>
            <Col>
              <section className="kost-most-search mt-3">
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
                            <Link to="/detailkost" className="btn button text-light pe-4 ps-4">Cek</Link>
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
                  <h1>Andalannya Mahasiswa</h1>
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
                            <Link to="/detailkost" className="btn button text-light pe-4 ps-4">
                              Cek
                            </Link>
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
