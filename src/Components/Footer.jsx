import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import './Footer.css';

const Footer = () => {
    const { title } = data.hero;
    const { socials } = data;

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* BLOCCO CENTRALE */}
                <div className="footer-main-content">
                    <h3 className="footer-name">{title}</h3>

                    <nav className="footer-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">Chi Sono</Link>
                        <Link to="/progetti">Progetti</Link>
                        <Link to="/contact">Contatti</Link>
                    </nav>

                    <div className="footer-socials">
                        {socials.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" rel="noreferrer" aria-label={social.platform}>
                                <i className={`devicon-${social.platform.toLowerCase()}-plain`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* BOTTOM (Diritti e Torna su) */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Stiven Hoxha. Tutti i diritti riservati.</p>
                    <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span>Torna su</span>
                        <i className="devicon-match-plain"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;