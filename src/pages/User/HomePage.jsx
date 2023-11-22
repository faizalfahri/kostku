import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "../../components/FooterComponent";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent /> 
      <div className="homepage">

      <div className="home-tittle">
        <h1>Ingin Mencari kost diarea Jabodetabek?</h1>
        <h2>
          Booking Di <span>Kostku</span> aja
        </h2>
      </div>

      <div className="search-bar">
        <input type="text" />
        <button>Search</button>
      </div>

      <div className="image-swiper">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="swipper"></div>
    </div>
    <FooterComponent />
    </div>
  );
};

export default HomePage;
