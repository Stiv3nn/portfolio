import React from 'react';
import data from '../data/data.json';
import '../Components/Hero.css'

const Hero = () => {
    // Estraiamo i dati che ci servono dal "database" ---> data.json
    const { title, subtitle, description, ctaPrimary, profileImage } = data.hero;
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className='hero-title'>{title}</h1>
                    <h2 className='hero-subtitle'>{subtitle}</h2>
                    <p className='hero-description'>{description}</p>
                    <button className='hero-btn'>{ctaPrimary}</button>
                </div>

                {/* INSERIRE L'IMMAGINE */}
                <div className="hero-visual">
                    <img src={profileImage} alt="Illustrazione di Stiven Hoxha" className='profile-illustration' />
                    {/* IL GLOW-CIRCLE RIMARRà DIETRO L'IMMAGINE PER L'EFFETTO */}
                    <div className="glow-circle"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;