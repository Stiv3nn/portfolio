import React from 'react';
import data from '../data/data.json/';

const Navbar = () => {
    // ESTRAIAMO IL LOGO E L'ARRAY DEI LINK
    const { logo, navLinks } = data.navbar;

    return (
        <nav className="navbar">

            <div className="nav-logo">
                <h1>{logo}</h1>
            </div>

            <ul className="nav-links">
                {/* USIAMO .MAP() PER CREARE I LINK DINAMICAMENTE*/}
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href="{link.path}">{link.label}</a>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default Navbar;