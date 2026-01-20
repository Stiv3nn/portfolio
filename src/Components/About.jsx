import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">

                {/* PARTE 1: INTRODUZIONE */}
                <div className="about-hero">
                    <div className="about-image">
                        <div className="image-placeholder">
                            {/* Qui andrà la tua foto o un'icona */}
                            <i className="devicon-react-original"></i>
                        </div>
                    </div>
                    <div className="about-text">
                        <span className="overline">Chi Sono</span>
                        <h2 className="section-title">Stiven Hoxha</h2>
                        <p>
                            Sono un <strong>Frontend Developer</strong> con una forte passione per la creazione di esperienze digitali intuitive e performanti.
                            Il mio percorso unisce la flessibilità di <strong>WordPress</strong> alla potenza di <strong>React</strong>.
                        </p>
                        <p>
                            Non mi limito a scrivere codice: mi occupo di trasformare idee complesse in interfacce pulite,
                            curando ogni dettaglio dal design alla messa online.
                        </p>
                    </div>
                </div>

                {/* PARTE 2: LE DUE ANIME */}
                <div className="about-cards">
                    <div className="skill-card">
                        <i className="devicon-wordpress-plain"></i>
                        <h3>CMS Specialist</h3>
                        <p>Esperienza nella creazione e gestione di siti WordPress, customizzazione di temi e ottimizzazione SEO.</p>
                    </div>
                    <div className="skill-card">
                        <i className="devicon-react-original"></i>
                        <h3>Frontend Dev</h3>
                        <p>Sviluppo di Web App moderne con React, Tailwind CSS e gestione dello stato, con un occhio al clean code.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;