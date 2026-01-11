import React from 'react';
import data from '../data/data.json';

const Hero = () => {
    // Estraiamo i dati che ci servono dal "database" ---> data.json
    const { title, subtitle, description, ctaPrimary } = data.hero;
    return (
        <section className="hero">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <button>{ctaPrimary}</button>
        </section>
    );
};

export default Hero;