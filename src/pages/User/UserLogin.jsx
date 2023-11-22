import { Form, Button } from 'react-bootstrap'

const UserLogin = () => {
  return (
    <div className="userlogin">
      <div className="back-button">
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => window.history.back()}
        ></i>
      </div>

      <div className="title">
        <h1>Masuk Pencari Kos</h1>
      </div>

      <div className="choice d-flex justify-content-center">
      <img src="../src/assets/img/google.png" alt="Sebuah gambar kucing yang lucu" />
        <h2>Masuk dengan Google </h2>
      </div>

      <div className="choice d-flex justify-content-center">
      <img src="../src/assets/img/facebook.png" alt="Sebuah gambar kucing yang lucu" />
        <h2>Masuk dengan Facebook</h2>
      </div>

      <hr/>
      
      <Form action="/submit" method="post">
        <Form.Group controlId="phoneNumber" className='mb-1'>
          <Form.Label className='form-label'>Nomor Telepon:</Form.Label>
          <Form.Control type="tel" placeholder="Masukkan nomor telepon" className='from-control' required />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Masukkan password"  className='from-control' required />
        </Form.Group>

        <Button  type="submit" >
          Login
        </Button>
      </Form>

    <div className='info'>
      <p>Belum punya akun?<a href=""><span>Daftar Sekarang</span></a></p> 
      <a href="">Lupa Password</a>
    </div>


    </div>
  );
}

export default UserLogin