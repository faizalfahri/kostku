import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent /> 

      {/* Header */}
      <div className="headerpage">
        <div className="header-tittle">
          <h1>Ingin Mencari kost diarea Jabodetabek?</h1>
          <h2>Booking Di <span>Kostku</span> aja</h2>
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
      </div>
      {/* End Header */}

      {/* Section Kost */}
      <div className="section-kost">
        <div className="section-tittle">
          <h1>Daftar Kost</h1>
          <div className="line"></div>
        </div>

        <div className="section-card">

          <div className="card">
            <div className="card-img">

            </div>
            
            <div className="card-info">
              <h2>Kost Ibu Peri</h2>
              <p>Putri</p>
              <p>Spesifikasi</p>
              <p>Kamar Mandi Dalam - Kasur - Wifi - AC</p>
              <p>Jakarta Utara</p>
            </div>

            <div className="card-price">
              <div className="price-info">
                <p>Harga Sewa</p>
                <p>Rp.1.200.000/Bulan</p>
              </div>
              <button>Cek</button>
            </div>
          </div>
          
          <div className="card">
            <div className="card-img">

            </div>
            
            <div className="card-info">
              <h2>Kost Ibu Peri</h2>
              <p>Putri</p>
              <p>Spesifikasi</p>
              <p>Kamar Mandi Dalam - Kasur - Wifi - AC</p>
              <p>Jakarta Utara</p>
            </div>

            <div className="card-price">
              <div className="price-info">
                <p>Harga Sewa</p>
                <p>Rp.1.200.000/Bulan</p>
              </div>
              <button>Cek</button>
            </div>
          </div>

          <div className="card">
            <div className="card-img">

            </div>
            
            <div className="card-info">
              <h2>Kost Ibu Peri</h2>
              <p>Putri</p>
              <p>Spesifikasi</p>
              <p>Kamar Mandi Dalam - Kasur - Wifi - AC</p>
              <p>Jakarta Utara</p>
            </div>

            <div className="card-price">
              <div className="price-info">
                <p>Harga Sewa</p>
                <p>Rp.1.200.000/Bulan</p>
              </div>
              <button>Cek</button>
            </div>
          </div>
          
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
