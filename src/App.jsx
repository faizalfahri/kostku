import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/User/HomePage";
import KostPage from "./pages/User/KostPage";
import DetailKostPage from "./pages/User/DetailKostPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kost" Component={KostPage} />
        <Route path="/detailkost" Component={DetailKostPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
