import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import KostPage from "./pages/User/KostPage";
import DetailKostPage from "./pages/User/DetailKostPage";
import Login from "./pages/Login";
import UserLogin from "./pages/User/UserLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kost" Component={KostPage} />
        <Route path="/detailkost" Component={DetailKostPage} />
        <Route path="/login" Component={Login} />
        <Route path="/userlogin" Component={UserLogin} />
      </Routes>
    </div>
  );
}

export default App;
