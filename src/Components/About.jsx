import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="st-page-container">

            {/* SEZIONE 1: IDENTITÀ */}
            <section className="st-about-row">
                <div className="st-visual-box">
                    <div className="st-image-wrapper">
                        <i className="devicon-react-original"></i>
                        <div className="st-floating-badge">Frontend Specialist</div>
                        <div className="st-glow-effect"></div>
                    </div>
                </div>
                <div className="st-content-box">
                    <span className="st-tag">01. Profile</span>
                    <h2 className="st-section-title">Sviluppo <span className="st-highlight">Web Moderno</span></h2>
                    <p className="st-description">
                        Trasformo idee complesse in applicazioni web performanti. Utilizzo le tecnologie più recenti per garantire che ogni progetto sia veloce, scalabile e ottimizzato per ogni dispositivo.
                    </p>
                    <div className="st-tech-list">
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript (ES6+)</span>
                        <span>JSX</span>
                    </div>
                </div>
            </section>

            {/* SEZIONE 2: COMPETENZE TECNICHE (Full Stack & CMS) */}
            <section className="st-about-row st-reverse">
                <div className="st-visual-box">
                    <div className="st-image-wrapper st-alt-gradient">
                        <i className="devicon-nodejs-plain"></i>
                        <div className="st-floating-badge">Full Stack & CMS</div>
                        <div className="st-glow-effect"></div>
                    </div>
                </div>
                <div className="st-content-box">
                    <span className="st-tag">02. Skills & Tools</span>
                    <h2 className="st-section-title">Tecnologie <span className="st-highlight">Core</span></h2>
                    <p className="st-description">
                        Il mio arsenale tech copre l'intero ciclo di sviluppo, dal backend robusto con Node.js alla gestione flessibile dei contenuti con WordPress ed Elementor.
                    </p>
                    <div className="st-tech-list">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>MySQL</span>
                        <span>Elementor</span>
                    </div>
                </div>
            </section>

            {/* CTA FINALE */}
            <section className="st-final-cta">
                <div className="st-cta-glass">
                    <h2 className="st-section-title">Hai un <span className="st-highlight">Progetto?</span></h2>
                    <p>Sono pronto a mettere le mie competenze al servizio della tua visione digitale.</p>
                    <Link to="/contact" className="st-main-button">Lavoriamo Insieme</Link>
                </div>
            </section>
        </div>
    );
};

export default About;