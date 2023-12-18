import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import KostPage from "./pages/User/KostPage";
import DetailKostPage from "./pages/User/DetailKostPage";
import UserLogin from "./pages/User/UserLogin";
import ForgotPassword from "./pages/User/ForgotPassword";
import NewPassword from "./pages/User/NewPassword";
import OtpPage from "./pages/User/OtpPage";
import Register from "./pages/Register";
import PengajuanPage from "./pages/User/PengajuanPage";
import Konfirmasi from "./pages/User/Konfirmasi";
import ChekinPage from "./pages/User/ChekinPage";
import ProfilePage from "./pages/User/ProfilePage";
import PengaturanPage from "./pages/User/PengaturanPage";
import SyaratKetentuanPage from "./pages/User/SyaratKetentuanPage";
import { KebijakanPage } from "./pages/User/KebijakanPage";
import EditProfilePage from "./pages/User/EditProfilePage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kost" Component={KostPage} />
        <Route path="/detailkost" Component={DetailKostPage} />
        <Route path="/userlogin" Component={UserLogin} />
        <Route path="/forgotpassword" Component={ForgotPassword} />
        <Route path="/newpassword" Component={NewPassword} />
        <Route path="/otp" Component={OtpPage} />
        <Route path="/register" Component={Register} />
        <Route path="/pengajuan" Component={PengajuanPage} />
        <Route path="/konfirmasi" Component={Konfirmasi} />
        <Route path="/checkin" Component={ChekinPage} />
        <Route path="/profile" Component={ProfilePage} />
        <Route path="/setting" Component={PengaturanPage} />
        <Route path="/syaratK" Component={SyaratKetentuanPage} />
        <Route path="/kebijakan" Component={KebijakanPage} />
        <Route path="/editprofile" Component={EditProfilePage} />
        
      


      </Routes>
    </div>
  );
}

export default App;
