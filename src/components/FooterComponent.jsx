import { MDBFooter } from "mdb-react-ui-kit";
import { Button, Col } from "react-bootstrap";

import {Link} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import logoputih from "../assets/img/kostku-putih.png";

const FooterComponent = () => {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="footer text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <Col lg="4">
            <div className="ms-5 pt-3 d-none d-lg-block">
              <img src={logoputih} alt="logo putih" className="footer-logo" />
            </div>
          </Col>
          <Col lg="4">
            <div className="footer-links d-flex justify-content-center align-items-center">
              <div className="footer-syarat text-light">
                <ul>
                  <li className="fw-bold mb-3 text-center">Kebijakan Pengguna</li>
                  <li><Link to="/" className="text-decoration-none text-light">Syarat & Ketentuan</Link></li>
                  <li><Link to="/" className="text-decoration-none text-light">FAQ</Link></li>
                </ul>
              </div>

              <div className="d-flex flex-column footer-contact text-light">
                <ul>
                  <li className="fw-bold mb-3 text-center">Contact Us</li>
                  <li><FontAwesomeIcon icon={faEnvelope} /> kostku@gmail.com</li>
                  <li><FontAwesomeIcon icon={faWhatsapp} /> +62 8951-3575-4145</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="d-flex justify-content-end align-items-end me-3">
              <Button className="me-2 button">Daftar</Button>
              <Button className="button">Masuk</Button>
            </div>
          </Col>
        </section>

        <div
          className="p-4 ms-5 copyright"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright by THOR. All Right Reserved.
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterComponent;
