const Login = () => {
  return (
    <div className="login">
      <div className="back-button">
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => window.history.back()}
        ></i>
      </div>

      <div className="title">
        <h1>Masuk Kostku</h1>
        <p>Saya ingin masuk sebagai</p>
      </div>

      <div className="choice align-items-center">
        <i className="fa-solid fa-person-walking-arrow-right"></i>
        <h1 className="mx-auto">Pencari Kos</h1>
      </div>

      <div className="choice align-items-center">
        <i className="fa-solid fa-house"></i>
        <h1 className="mx-auto">Pemilik Kos</h1>
      </div>
    </div>
  );
};

export default Login;
