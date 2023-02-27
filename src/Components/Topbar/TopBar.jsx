 import React from "react";
 import "./Topbar.css";
 import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import LanguageIcon from '@mui/icons-material/Language';
 export default function Topbar() {
   return (
     <div className="topbar">
       <div className="topbarWrapper">
         <div className="topLeft">
           <span className="logo">AMRITadmin</span>
         </div>
         <div className="topRight">
           <div className="topbarIconContainer">
             <NotificationsNoneIcon />
             <span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
           <LanguageIcon />
             <span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
             <SettingsOutlinedIcon />
           </div>
           <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
         </div>
       </div>
     </div>
   );
 }
