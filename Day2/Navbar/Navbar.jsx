
import React, { useState } from 'react';
import '../../assets/Css/navbar.css';
import { FaHome, FaTimes, FaSimCard, FaWifi } from "react-icons/fa"; // Import icons
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import icon from '../../assets/Images/netfi.png';
import { IoIosSettings } from "react-icons/io";
import { IoHelp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div id="nav">
        <div onClick={toggleSidebar}>
          <img src={icon} width="50px" id="lo-img" alt="logo" /><div id="lo-text">netfi</div>
        </div>
        <ul id="nav-list">
          <div id="li1">
          <Link to="/user/home"> <li id="list1"><p id="nav-list1"><FaHome size={20} id="icon1" />Home</p></li></Link>
          </div>
          <Link to="/user/plans"><li id="list1"><p id="nav-list2"><IoNewspaperOutline size={20} id="icon2" />Plans</p></li></Link>
         <Link to="/user/addon"><li id="list1"><p id="nav-list3"><IoIosAddCircleOutline size={20} id="icon3" />Add on</p></li></Link>
          {/* <li id="list1"><p id="nav-list4"><BsFillLightningChargeFill size={20} id="icon4" />Recharge</p></li> */}
          <li id="list1"><p id="nav-list5"><FaHistory size={20} id="icon5" />History</p></li>
        </ul>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Close icon */}
        <FaTimes onClick={toggleSidebar} className="close-icon" color="white"/>
        
        {/* Sidebar content */}
        <ul>
         
          <li><IoIosSettings size={20}/>Settings</li>
          <li><IoHelp size={20}/>Help</li>
          <li><CiLogout  size={20}/>Logout</li>
          {/* Add more sidebar links here */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
