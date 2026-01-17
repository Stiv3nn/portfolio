import React from 'react';
import data from '../data/data.json';
import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Importa Link

const Navbar = () => {
    const { logo, navLinks } = data.navbar;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* LOGO + STATUS DOT */}
            <div className="nav-logo">
                {logo}
                <div className="status-container">
                    <span className="status-dot"></span>
                    <span className="status-text">Tech-ready!</span>
                </div>
            </div>

            {/* HAMBURGER ICON */}
            <div
                className={`nav-hamburger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* MENU LINKS */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {navLinks.map((link, index) => (
                    <li key={index} onClick={() => setIsOpen(false)}>
                        {/* Sostituiamo <a> con <Link> e "href" con "to" */}
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;