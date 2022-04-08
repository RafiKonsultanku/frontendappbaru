import React from 'react';
import './style/topbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

export default function index() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topbarLeft'><span className='logo'>Logo</span></div>
            <div className='topbarRight'>
                <div className="topbarIconContainer">
                    <NotificationsNoneIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <img className='topbarAvatar' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
            </div>
        </div>
    </div>
  )
}
