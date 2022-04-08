import React from 'react';
import './style/sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function index() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Home</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <DashboardIcon className='sidebarIcon' />
                        Dashboard
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Transaksi</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ReceiptIcon className='sidebarIcon' />
                        Invoice
                    </li>

                    <li className="sidebarListItem">
                        <PaymentIcon className='sidebarIcon' />
                        Pembayaran
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Konfigurasi</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <SettingsIcon className='sidebarIcon' />
                        Pengaturan
                    </li>

                    <li className="sidebarListItem">
                        <LogoutIcon className='sidebarIcon' />
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
