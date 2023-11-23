import { MDBFooter } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'


const FooterComponent = () => {
  return <div>
    <MDBFooter bgColor='light' className='footer text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='ms-5 pt-3 d-none d-lg-block'>
          <h5 className='footer-kost'>Kostku</h5>
        </div>

        <div className='me-5'>
          <Button className='m-3 button'>Daftar</Button>
          <Button className='button'>Masuk</Button>
        </div>
      </section>

      <div className='p-4 ms-5 copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright by THOR. All Right Reserved.
      </div>
    </MDBFooter>
  </div>
};

export default FooterComponent;
