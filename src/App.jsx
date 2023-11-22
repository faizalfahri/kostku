import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/User/HomePage";
import KostPage from "./pages/User/KostPage";
import DetailKostPage from "./pages/User/DetailKostPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kost" Component={KostPage} />
        <Route path="/detailkost" Component={DetailKostPage} />
      </Routes>
    </div>
  );
}

export default App;
