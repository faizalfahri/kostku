import "../pages/Admin/dashboard_style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../public/kostku-putih.png";
import testi1 from "../assets/img/testi1.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom"

const SidebarComponent = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="kostku-logo" />
          </Link>
        </div>
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
          {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
        </div>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div> 
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-graph-up"></i>
              </div> 
              <span>Kelola Kost</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a>
                  <i class="bi bi-cash-stack"></i> <span>Kelola Transaksi</span></a>
              </li>
              <li>
                <a><i class="bi bi-person-add"></i> <span>Kelola Penyewa</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-house-add"></i>
              </div> 
              <span>Data Kost</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={testi1} alt="user" />
        </div>
        <div className="user-info">
          <h5>Ibu Peri</h5>
          <p>IbuPeri@gmail.com</p>
        </div>
      </div>
  </div>
  )
}

export default SidebarComponent