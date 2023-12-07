import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

import Carousel from 'react-bootstrap/Carousel';

import kost1 from "../../assets/img/KostCarousel1.jpg"
import kost2 from "../../assets/img/KostCarousel3.jpg"
import { Container } from "react-bootstrap";

const DetailKostPage = () => {
  return (
    <div>
      <NavbarComponent />

      <section className="detail_kost bg-light">
        
        <div className="card-detailkost">
          <img src={kost1} alt="Kost Ibu Barbie" />
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default DetailKostPage;
