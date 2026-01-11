import React from 'react';
import data from '../data/data.json/';
import { useState } from 'react';

const Navbar = () => {
    // ESTRAIAMO IL LOGO E L'ARRAY DEI LINK
    const { logo, navLinks } = data.navbar;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar">

                <div className="nav-logo">
                    <h1>{logo}</h1>
                </div>

                {/* HAMBURGER ICON */}
                <div classname={`nav-hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Menu Links */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {/* USIAMO .MAP() PER CREARE I LINK DINAMICAMENTE*/}
                    {navLinks.map((link, index) => (
                        <li key={index} onClick={() => setIsOpen(false)}>
                            <a href="{link.path}">{link.label}</a>
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    )
}

export default Navbar;