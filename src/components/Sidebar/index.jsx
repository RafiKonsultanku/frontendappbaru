import React from "react";
import "./style/sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
// import axios from "../../api/axios";
import useLogout from "../../hooks/useLogout";
import { NavLink, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Home</h3>
          <ul className="sidebarList">
            <NavLink
              exact
              to="/dashboard"
              activeClassName="active"
              className="linkSidebar sidebarListItem"
            >
              <DashboardIcon className="sidebarIcon" />
              Dashboard
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Transaksi</h3>
          <ul className="sidebarList">
            <NavLink
              exact
              to="/invoice"
              activeClassName="active"
              className="linkSidebar sidebarListItem"
            >
              <ReceiptIcon className="sidebarIcon" />
              Invoice
            </NavLink>

            <li className="sidebarListItem">
              <PaymentIcon className="sidebarIcon" />
              Pembayaran
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Konfigurasi</h3>
          <ul className="sidebarList">
            <NavLink
              exact
              to="/settings"
              activeClassName="active"
              className="linkSidebar sidebarListItem"
            >
              <SettingsIcon className="sidebarIcon" />
              Pengaturan
            </NavLink>
            <li className="sidebarListItem" onClick={signOut}>
              <LogoutIcon className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
