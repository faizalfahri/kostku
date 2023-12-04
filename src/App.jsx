import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import KostPage from "./pages/User/KostPage";
import DetailKostPage from "./pages/User/DetailKostPage";
import Login from "./pages/Login";
import UserLogin from "./pages/User/UserLogin";
import ForgotPassword from "./pages/User/ForgotPassword";
import NewPassword from "./pages/User/NewPassword";
import OtpPage from "./pages/User/OtpPage";
import Register from "./pages/Register";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kost" Component={KostPage} />
        <Route path="/detailkost" Component={DetailKostPage} />
        <Route path="/login" Component={Login} />
        <Route path="/userlogin" Component={UserLogin} />
        <Route path="/forgotpassword" Component={ForgotPassword} />
        <Route path="/newpassword" Component={NewPassword} />
        <Route path="/otp" Component={OtpPage} />
        <Route path="/register" Component={Register} />

      </Routes>
      
    </div>
  );
}

export default App;
