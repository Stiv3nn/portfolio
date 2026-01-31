import React from 'react';
import './About.css';
import data from '../data/data.json';

const About = () => {
    const { profileImageAbout } = data.about;

    return (
        <div className="cy-viewport">
            {/* Elementi di sfondo per profondità visiva */}
            <div className="cy-grid-bg"></div>
            <div className="cy-ambient-glow"></div>

            <main className="cy-bento-grid">

                {/* UNIT 01: PROFILE VISUAL */}
                <div className="cy-item item-profile">
                    <div className="cy-scanner"></div>
                    <div className="img-wrapper">
                        <img src={profileImageAbout} alt="Stiven Architecture" />
                    </div>
                    <div className="cy-overlay-info">
                        <div className="status-pulse"></div>
                        <p>OPERATOR: STIVEN_01 // ACTIVE</p>
                    </div>
                </div>

                {/* UNIT 02: CORE IDENTITY */}
                <div className="cy-item item-bio">
                    <div className="cy-header">
                        <span className="cy-code">PROTOCOL_09</span>
                        <span className="cy-tag">MISSION_STATEMENT</span>
                    </div>
                    <h1 className="cy-title">Sviluppo <span>Interfacce</span> <br /> ad Alta Tensione.</h1>
                    <p className="cy-desc">
                        Architetto del codice specializzato nella creazione di ecosistemi digitali dove
                        la velocità di esecuzione incontra un'estetica brutale. Non costruisco siti,
                        progetto esperienze sensoriali decodificate per il web moderno.
                    </p>
                </div>

                {/* UNIT 03: ENGINE STACK */}
                <div className="cy-item item-stack">
                    <div className="cy-header">
                        <span className="cy-code">CORE_DEVICES</span>
                        <span className="cy-tag">V.2.0.4</span>
                    </div>
                    <div className="stack-grid">
                        <div className="stack-pill">React // Engine</div>
                        <div className="stack-pill">Next.js // Speed</div>
                        <div className="stack-pill">Three.js // 3D</div>
                        <div className="stack-pill">Tailwind // UI</div>
                        <div className="stack-pill">TypeScript // Logic</div>
                    </div>
                </div>

                {/* UNIT 04: TELEMETRY */}
                <div className="cy-item item-stats">
                    <div className="stat-box">
                        <span className="stat-val">0.4s</span>
                        <span className="stat-lab">AVG_LOAD_TIME</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-val">∞</span>
                        <span className="stat-lab">CREATIVE_LOGIC</span>
                    </div>
                </div>

                {/* UNIT 05: AUXILIARY TOOLS */}
                <div className="cy-item item-tools">
                    <div className="cy-header">
                        <span className="cy-code">AUX_UNITS</span>
                        <span className="cy-tag">UPTIME: 99.9%</span>
                    </div>
                    <ul className="tool-list">
                        <li><span>▶</span> <b>NEOVIM</b> // ENVIRONMENT</li>
                        <li><span>▶</span> <b>FIGMA</b> // BLUEPRINTS</li>
                        <li><span>▶</span> <b>DOCKER</b> // CONTAINERS</li>
                        <li><span>▶</span> <b>GIT</b> // TIMELINE</li>
                    </ul>
                </div>

            </main>
        </div>
    );
};

export default About;