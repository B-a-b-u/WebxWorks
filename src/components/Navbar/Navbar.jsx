import { NavLink } from "react-router-dom";
import Logo from "../../assets/favicon.png"
import React from "react";
import './Navbar.css'
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <>
            <nav className="navbar-container">
                <NavLink to="/" className="logo-container">
                    <img className="logo" src={Logo} />
                    <h3 className="title">WebX</h3>
                </NavLink>
                <button className="menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? "X" : "☰"}
                </button>
                <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
                    <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar;