import React from 'react';
import { FaHome, FaLeaf, FaShoppingCart, FaUsers, FaInfoCircle, FaUserPlus } from 'react-icons/fa'; // Import the FaUserPlus icon for Register
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom'; // Correct import for v6
import logo from '../assets/images/logo-no-background.png'
import '../App.css';


export default function Navbar() {
    return (

        <nav className="navbar">
          <div className="navbar-container">
            {/* Logo */}
            <div className="navbar-logo">
              <img src={logo}/>
            </div>
    
            {/* Navbar Links */}
            <ul className="navbar-links">
              <li>
                <Link to="/farmer-home" className="navbar-item">
                  <FaHome size={20} /> Home
                </Link>
              </li>
              <li>
                <Link to="/crops" className="navbar-item">
                  <FaLeaf size={20} /> Crops
                </Link>
              </li>
              <li>
                <Link to="/resources" className="navbar-item">
                  <FaShoppingCart size={20} /> Farming Resources
                </Link>
              </li>
              <li>
                <Link to="/farmer-market" className="navbar-item">
                  <FaShoppingCart size={20} /> Market
                </Link>
              </li>
              <li>
                <Link to="/farmer-about" className="navbar-item">
                  <FaInfoCircle size={20} /> About Us
                </Link>
              </li>
              {/* Register link with icon */}
              <li>
                <Link to="/Signin" className="navbar-item">
                  <MdLogout size={20} /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
