import { MDBFooter } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

import logo from './../assets/img/kostku-putih.png' 

const FooterComponent = () => {
  return <div>
    <MDBFooter bgColor='light' className='footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='ms-5 pt-3 d-none d-lg-block'>
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top logo"
              alt="kostku logo"
            />
        </div>
        
        <div className='footer-menu'>
          <ul>
            <li>
              <a href="" className='text-light'>
                Cari Kost
              </a>
            </li>
            <li>
              <a href="" className='text-loght'>
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>

        <div className='me-5'>
          <Button className='m-3 button'>Daftar</Button>
          <Button className='button'>Masuk</Button>
        </div>
      </section>

      <div className='p-4 ms-5 copyright d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright by THOR. All Right Reserved.
      </div>
    </MDBFooter>
  </div>
};

export default FooterComponent;
