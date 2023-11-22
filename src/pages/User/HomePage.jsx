import '../../dist/css/main.css'

const HomePage = () => {
  return (
    <div className="homepage">

      <div className="home-tittle">
        <h1>Ingin Mencari kost diarea Jabodetabek?</h1>
        <h2>Booking Di <span>Kostku</span> aja</h2>
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
  );
};

export default HomePage;
