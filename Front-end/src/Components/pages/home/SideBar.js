import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import TvIcon from '@mui/icons-material/Tv';
import MouseIcon from '@mui/icons-material/Mouse';
import TabletIcon from '@mui/icons-material/Tablet';
// import "./Sidebar.css"; // Import the CSS file for sidebar styles

const SideBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Perform any logout actions here, e.g., clearing user data from localStorage
        setIsLoggedIn(false);
        alert("You have logged out.");
    };

    return (
        <div className="sidebar">
        <ul className="menu">
            <li className="menu-item">
            <NavLink exact to="/Laptops" activeClassName="active">
                <LaptopChromebookIcon />
            </NavLink>
            </li>
            <li className="menu-item">
            <NavLink to="/Phones" activeClassName="active">
              <SettingsCellIcon />  
            </NavLink>
            </li>
            <li className="menu-item">
            <NavLink to="/Keyboards" activeClassName="active">
             < KeyboardAltIcon/>   
            </NavLink>
            </li>
            <li className="menu-item">
            <NavLink to="/Television" activeClassName="active">
             <TvIcon/>   
            </NavLink>
            </li>
            <li className="menu-item">
            <NavLink to="/Mouses" activeClassName="active">
             <MouseIcon/>   
            </NavLink>
            </li>
            <li className="menu-item">
            <NavLink to="/Tablets" activeClassName="active">
             <TabletIcon/>   
            </NavLink>
            </li>
            {isLoggedIn ? (
            <li className="menu-item">
                <button onClick={handleLogout}>Logout</button>
            </li>
            ) : null}
        </ul>
        </div>
    );
};

export default SideBar;