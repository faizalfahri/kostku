import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomePage = () => {
  return (
    <div>
      <NavbarComponent /> 

      {/* Header */}
      <div className="headerpage">
        <Container>
          <div className="header-tittle">
            <h1>Ingin Mencari kost di area Jabodetabek?</h1>
            <h2>Booking Di <span>Kostku</span> aja.</h2>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Masukkan Nama Kost" />
            <button>Cari</button>
          </div>

          <div className="image-swiper">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>

          <div className="swipper"></div>
        </Container>
      </div>
      {/* End Header */}

      {/* Section Kost */}
      <div className="section-kost">
        <Container>
          <div className="section-tittle">
            <h1>Daftar Kost</h1>
            <div className="line"></div>
          </div>

          <div className="section-card">

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Kost Ibu Peri</Card.Title>
                <Button variant="secondary" size="sm" disabled className="mt-1 mb-2">Putri</Button>
                <Card.Text className="card-spec">
                  Spesifikasi: <br></br>
                  Kamar Mandi Dalam - Kasur - Wifi - AC
                </Card.Text>
                <Card.Text className="card-loc">
                  Jakarta Utara
                </Card.Text>
                <Button className="button">Cek</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Kost Ibu Peri</Card.Title>
                <Button variant="secondary" size="sm" disabled className="mt-1 mb-2">Putri</Button>
                <Card.Text className="card-spec">
                  Spesifikasi: <br></br>
                  Kamar Mandi Dalam - Kasur - Wifi - AC
                </Card.Text>
                <Card.Text className="card-loc">
                  Jakarta Utara
                </Card.Text>
                <Button className="button">Cek</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Kost Ibu Peri</Card.Title>
                <Button variant="secondary" size="sm" disabled className="mt-1 mb-2">Putri</Button>
                <Card.Text className="card-spec">
                  Spesifikasi: <br></br>
                  Kamar Mandi Dalam - Kasur - Wifi - AC
                </Card.Text>
                <Card.Text className="card-loc">
                  Jakarta Utara
                </Card.Text>
                <Button className="button">Cek</Button>
              </Card.Body>
            </Card>
            
          </div>
        </Container>
      </div>
      {/* End Section Kost */}


      <FooterComponent />
    </div>
  );
};

export default HomePage;